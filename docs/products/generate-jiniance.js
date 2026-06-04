/*
 * 美学纪念册 · 全本排版生成器（A4 横版 / 咖啡桌画册式）
 * 渝山东方美学 · 节气美学纪念读物（AIGC 辅助创作，不含命理推算）
 *
 * 用法：
 *   1) 模板（无客户照片，全部显示金线照片位）：  node generate-jiniance.js
 *   2) 客户专属（填好姓名 + 照片路径，一键成册）：
 *        复制 jiniance.config.example.json -> jiniance.config.json，
 *        填入 name / year / edition / total 与 photos 各槽位图片路径，再运行：
 *        node generate-jiniance.js
 *
 * 照片槽位 id：见下方 SLOTS 注释；config.photos[id] 给出图片路径即自动嵌入并裁切适配。
 */
const PDFDocument = require("pdfkit");
const fs = require("fs");
const path = require("path");

// ---------- 画布 / 色彩 / 字体 ----------
const W = 842, H = 595;                // A4 横版（pt）
const MARGIN = 30;

const C = {
  indigo: "#1B2A4A",
  indigoSoft: "#2C3E66",
  gold: "#C0A24E",
  goldDeep: "#A9882F",
  paper: "#F6F1E7",
  panel: "#EFE7D6",
  panel2: "#E7DCC4",
  ink: "#2B2B2B",
  sub: "#6E685B",
  red: "#B4452F",
};

const FONTS = {
  kai: "C:/Windows/Fonts/simkai.ttf",
  hei: "C:/Windows/Fonts/simhei.ttf",
  song: "C:/Windows/Fonts/simsun.ttc",
};

const ART = path.join(__dirname, "jiniance-build", "art");
const art = (n) => path.join(ART, `jiniance-art-${n}.jpg`);

// ---------- 读取客户配置（可选） ----------
let cfg = { name: "", year: "二〇二六", edition: "", total: "", subject: "", designer: "", photos: {} };
const cfgPath = path.join(__dirname, "jiniance.config.json");
if (fs.existsSync(cfgPath)) {
  try { cfg = Object.assign(cfg, JSON.parse(fs.readFileSync(cfgPath, "utf8"))); }
  catch (e) { console.warn("配置解析失败，使用模板模式：", e.message); }
}
cfg.photos = cfg.photos || {};
const NAME = cfg.name || "客户姓名";
const OUT = path.join(__dirname, cfg.name ? `jiniance-${cfg.name}.pdf` : "meixue-jiniance-template.pdf");

// ---------- 文档 ----------
const doc = new PDFDocument({ size: [W, H], margins: 0, autoFirstPage: false, info: {
  Title: "美学纪念册", Author: "渝山东方美学", Subject: "节气美学纪念读物（AIGC 辅助创作，不含命理推算）",
}});
doc.registerFont("kai", FONTS.kai);
doc.registerFont("hei", FONTS.hei);
try { doc.registerFont("song", FONTS.song, "SimSun"); } catch (e) { doc.registerFont("song", FONTS.kai); }
doc.pipe(fs.createWriteStream(OUT));

// 绝对页码：拦截 addPage 统一计数（与目录页码一致）
let absPage = 0;
const _addPage = doc.addPage.bind(doc);
doc.addPage = function (...a) { absPage += 1; return _addPage(...a); };

// ---------- 工具函数 ----------

function fillBg(color) { doc.save(); doc.rect(0, 0, W, H).fill(color); doc.restore(); }

function goldFrame(inset = 18, lw = 1) {
  doc.save().lineWidth(lw).strokeColor(C.gold)
    .rect(inset, inset, W - inset * 2, H - inset * 2).stroke();
  doc.lineWidth(0.5).rect(inset + 5, inset + 5, W - (inset + 5) * 2, H - (inset + 5) * 2).stroke();
  doc.restore();
}

function cornerMarks(x, y, w, h, len = 14, color = C.gold, lw = 1) {
  doc.save().lineWidth(lw).strokeColor(color);
  // TL
  doc.moveTo(x, y + len).lineTo(x, y).lineTo(x + len, y).stroke();
  // TR
  doc.moveTo(x + w - len, y).lineTo(x + w, y).lineTo(x + w, y + len).stroke();
  // BL
  doc.moveTo(x, y + h - len).lineTo(x, y + h).lineTo(x + len, y + h).stroke();
  // BR
  doc.moveTo(x + w - len, y + h).lineTo(x + w, y + h).lineTo(x + w, y + h - len).stroke();
  doc.restore();
}

function seal(cx, cy, s = 22) {
  doc.save().lineWidth(1.2).strokeColor(C.red).rect(cx - s / 2, cy - s / 2, s, s).stroke();
  doc.font("kai").fontSize(s * 0.62).fillColor(C.red).text("渝", cx - s * 0.31, cy - s * 0.33);
  doc.restore();
}

function footer(label) {
  const y = H - 26;
  doc.save().font("hei").fontSize(7.5).fillColor(C.sub);
  doc.text("渝山东方美学", MARGIN + 6, y, { width: 160, align: "left" });
  doc.text(label || "美学纪念册", W / 2 - 120, y, { width: 240, align: "center" });
  doc.font("song").fontSize(8).fillColor(C.goldDeep).text(String(absPage).padStart(2, "0"), W - MARGIN - 60, y - 1, { width: 54, align: "right" });
  doc.restore();
}

// 照片占位 / 嵌入
function photoSlot(slotId, x, y, w, h, label, sub) {
  const src = cfg.photos[slotId];
  if (src && fs.existsSync(src)) {
    doc.save();
    doc.rect(x, y, w, h).clip();
    try { doc.image(src, x, y, { cover: [w, h], align: "center", valign: "center" }); }
    catch (e) { /* ignore */ }
    doc.restore();
    doc.save().lineWidth(1).strokeColor(C.gold).rect(x, y, w, h).stroke().restore();
    cornerMarks(x, y, w, h, 12, C.gold, 1);
    return;
  }
  // 占位状态
  doc.save();
  doc.rect(x, y, w, h).fill(C.panel);
  doc.lineWidth(1).strokeColor(C.gold).dash(5, { space: 4 }).rect(x + 3, y + 3, w - 6, h - 6).stroke().undash();
  doc.restore();
  cornerMarks(x, y, w, h, 16, C.goldDeep, 1.2);
  // 中心镜框记号
  const cx = x + w / 2, cy = y + h / 2;
  doc.save().lineWidth(1).strokeColor(C.goldDeep);
  doc.circle(cx, cy - 8, 9).stroke();
  doc.moveTo(cx - 16, cy - 16).lineTo(cx + 16, cy - 16).lineTo(cx + 16, cy + 2).lineTo(cx - 16, cy + 2).lineTo(cx - 16, cy - 16).stroke();
  doc.restore();
  doc.font("hei").fontSize(11).fillColor(C.goldDeep).text(label || "客户照片位", x, cy + 12, { width: w, align: "center" });
  doc.font("song").fontSize(8).fillColor(C.sub).text(sub || "此处放置客户专属摄影照片", x, cy + 30, { width: w, align: "center" });
  doc.font("song").fontSize(7).fillColor(C.sub).text(`［ ${Math.round(w)} × ${Math.round(h)} pt · 留白照片位 ］`, x, y + h - 18, { width: w, align: "center" });
}

function title(txt, x, y, size, color) {
  doc.font("kai").fontSize(size).fillColor(color || C.indigo).text(txt, x, y);
}
function kicker(txt, x, y, color) {
  doc.font("hei").fontSize(8.5).fillColor(color || C.goldDeep).text(txt, x, y, { characterSpacing: 3 });
}
function rule(x, y, w, color, lw) {
  doc.save().lineWidth(lw || 1).strokeColor(color || C.gold).moveTo(x, y).lineTo(x + w, y).stroke().restore();
}
function body(txt, x, y, w, opts) {
  doc.font("song").fontSize(opts && opts.size ? opts.size : 10.5).fillColor(opts && opts.color ? opts.color : C.ink)
    .text(txt, x, y, Object.assign({ width: w, align: "left", lineGap: opts && opts.lineGap != null ? opts.lineGap : 5 }, opts || {}));
}

// ---------- 调色板数据 ----------
const PALETTE = [
  ["柳芽", "#9FBF5B"], ["樱粉", "#E7B6C2"], ["荷红", "#D96B86"], ["湖蓝", "#4F86C6"],
  ["枫丹", "#C8553D"], ["稻金", "#D2A33C"], ["雪青", "#BFCBE0"], ["黛蓝", "#2C3E66"],
  ["月白", "#F2ECDD"], ["黛墨", "#2B2B2B"],
];

// 节气分组
const TERMS = {
  spring: "立春 · 雨水 · 惊蛰 · 春分 · 清明 · 谷雨",
  summer: "立夏 · 小满 · 芒种 · 夏至 · 小暑 · 大暑",
  autumn: "立秋 · 处暑 · 白露 · 秋分 · 寒露 · 霜降",
  winter: "立冬 · 小雪 · 大雪 · 冬至 · 小寒 · 大寒",
};

module.exports = { build };

// =====================================================================
//  以下为页面构建（在文件末尾调用 build()）
// =====================================================================
function build() {
  cover();
  pageTitle();
  contents();
  preface();
  portraitPage();
  zhenzhaoMain();
  palettePage();
  seasonsIntro();
  seasonArt("spring", "SPRING · 春", "春和景明", TERMS.spring);
  seasonContent("spring", "春日写真", ["spring-1", "spring-2"],
    "春属木，色尚青。立春至谷雨，万物初萌，宜以柳芽、樱粉、远山黛为色彩坐标，记录新生与舒展之美。此页为春日实拍写真留位，建议选用浅色调、自然光人像。");
  seasonArt("summer", "SUMMER · 夏", "荷风送香", TERMS.summer);
  seasonContent("summer", "夏日写真", ["summer-1", "summer-2"],
    "夏属火，色尚朱。立夏至大暑，草木繁盛，宜以荷红、湖蓝、新绿为色彩坐标，记录热烈与丰盈之美。此页为夏日实拍写真留位，建议选用饱和度较高、富有生气的画面。");
  seasonArt("autumn", "AUTUMN · 秋", "天高云阔", TERMS.autumn);
  seasonContent("autumn", "秋日写真", ["autumn-1", "autumn-2"],
    "秋属金，色尚白与金。立秋至霜降，层林尽染，宜以枫丹、稻金、雁影为色彩坐标，记录沉静与丰收之美。此页为秋日实拍写真留位，建议选用暖金色调、逆光剪影。");
  seasonArt("winter", "WINTER · 冬", "踏雪寻梅", TERMS.winter);
  seasonContent("winter", "冬日写真", ["winter-1", "winter-2"],
    "冬属水，色尚玄。立冬至大寒，万物收藏，宜以雪青、黛蓝、红梅为色彩坐标，记录清冷与内蕴之美。此页为冬日实拍写真留位，建议选用低饱和、留白构图。");
  wallpaperPage();
  galleryA();
  galleryB();
  archivePage();
  backCover();
  doc.end();
  console.log("BUILT ->", OUT);
}

// ---------- 1. 封面 ----------
function cover() {
  doc.addPage();
  try { doc.image(art("cover"), 0, 0, { cover: [W, H], align: "center", valign: "center" }); }
  catch (e) { fillBg(C.indigo); }
  // 中央题字板（竖排「美学纪念册」）
  const cx = W / 2;
  const chars = ["美", "学", "纪", "念", "册"];
  let cy = 168;
  doc.save();
  chars.forEach((ch) => {
    doc.font("kai").fontSize(34).fillColor("#EBD9A0").text(ch, cx - 18, cy, { width: 36, align: "center" });
    cy += 44;
  });
  doc.restore();
  // 顶部小字
  doc.font("hei").fontSize(10).fillColor("#EBD9A0").text("渝 山 东 方 美 学", cx - 120, 120, { width: 240, align: "center", characterSpacing: 4 });
  // 底部姓名带
  doc.save();
  doc.rect(cx - 150, H - 92, 300, 46).fillOpacity(0.18).fill("#000000");
  doc.restore();
  doc.font("kai").fontSize(15).fillColor("#F3E7BE").text(`「 ${NAME} 」 专 属 典 藏`, cx - 150, H - 84, { width: 300, align: "center" });
  doc.font("hei").fontSize(8.5).fillColor("#D8C892").text(`节气美学纪念读物 · ${cfg.year}`, cx - 150, H - 62, { width: 300, align: "center", characterSpacing: 2 });
}

// ---------- 2. 扉页 ----------
function pageTitle() {
  doc.addPage(); fillBg(C.paper); goldFrame();
  const cx = W / 2;
  seal(cx, 150, 30);
  doc.font("kai").fontSize(40).fillColor(C.indigo).text("美 学 纪 念 册", 0, 210, { width: W, align: "center" });
  doc.font("hei").fontSize(11).fillColor(C.goldDeep).text("渝山东方美学 · 节气美学纪念读物", 0, 272, { width: W, align: "center", characterSpacing: 3 });
  rule(cx - 120, 300, 240, C.gold, 1);
  const ed = cfg.edition ? `限量典藏编号　No. ${cfg.edition}${cfg.total ? " / " + cfg.total : ""}` : "限量典藏编号　No. ＿＿＿ / ＿＿＿";
  doc.font("song").fontSize(10).fillColor(C.ink).text(ed, 0, 318, { width: W, align: "center" });
  doc.font("song").fontSize(9).fillColor(C.sub).text(`制作　${NAME} 专属　·　${cfg.year}`, 0, 338, { width: W, align: "center" });
  doc.font("song").fontSize(8).fillColor(C.sub).text(
    "本册为 AIGC 辅助创作的美学纪念读物，所有图文仅作审美欣赏与纪念之用，不含任何命理推算、占卜或改运表述。",
    cx - 230, H - 92, { width: 460, align: "center", lineGap: 4 });
}

// ---------- 3. 目录 ----------
function contents() {
  doc.addPage(); fillBg(C.paper); goldFrame();
  kicker("CONTENTS", MARGIN + 24, 60);
  title("目　录", MARGIN + 24, 74, 30);
  rule(MARGIN + 26, 122, 220, C.gold, 1);
  const items = [
    ["卷首语", "04"], ["命主画像 · 美学随笔", "05"], ["专属写真 · 主图", "06"], ["个人色彩 · 节气色谱", "07"],
    ["四季 · 二十四节气", "08"], ["春 · 春日写真", "09 – 10"], ["夏 · 夏日写真", "11 – 12"],
    ["秋 · 秋日写真", "13 – 14"], ["冬 · 冬日写真", "15 – 16"], ["四季壁纸 · 数字典藏", "17"],
    ["光阴 · 写真精选", "18 – 19"], ["典藏信息 · 合规声明", "20"],
  ];
  let y = 150;
  const colX = MARGIN + 30, colW = W - (MARGIN + 30) * 2;
  items.forEach((it, i) => {
    doc.font("song").fontSize(8).fillColor(C.gold).text(String(i + 1).padStart(2, "0"), colX, y + 3, { width: 24 });
    doc.font("kai").fontSize(13).fillColor(C.ink).text(it[0], colX + 30, y, { width: colW - 110 });
    doc.font("song").fontSize(10).fillColor(C.sub).text(it[1], colX + colW - 80, y + 2, { width: 80, align: "right" });
    rule(colX, y + 24, colW, "#D8CDB4", 0.5);
    y += 33;
  });
}

// ---------- 4. 卷首语 ----------
function preface() {
  doc.addPage(); fillBg(C.paper); goldFrame();
  // 左栏
  const lx = MARGIN + 24, lw = 250;
  seal(lx + 18, 110, 30);
  kicker("PREFACE", lx, 150);
  title("卷首语", lx, 164, 30);
  rule(lx + 2, 212, 160, C.gold, 1);
  doc.font("kai").fontSize(13).fillColor(C.indigoSoft).text("一岁一四时，\n一时一相逢。\n以山河为序，\n以光阴为册。", lx, 240, { width: lw, lineGap: 10 });
  // 右栏正文
  const rx = MARGIN + 320, rw = W - rx - MARGIN - 24;
  body(
    "这本纪念册，是渝山东方美学为您专门编纂的一段光阴。\n\n" +
    "我们以二十四节气为骨，以东方色彩为脉，把您的容颜、气韵与四时风物编织在一起——立春的柳芽、夏至的荷风、霜降的枫丹、大寒的红梅，都成为衬托您的底色。\n\n" +
    "册中每一处留白，都为您的专属摄影照片而设。当照片填入，便是天地时序与个人光阴的一次独一无二的相逢。\n\n" +
    "愿您翻阅之时，看见的不只是影像，更是被郑重对待的、属于自己的美。",
    rx, 90, rw, { lineGap: 6, size: 11 });
  footer("卷首语");
}

// ---------- 5. 命主画像 ----------
function portraitPage() {
  doc.addPage(); fillBg(C.paper); goldFrame();
  kicker("AESTHETIC PORTRAIT", MARGIN + 24, 54);
  title("命主画像 · 美学随笔", MARGIN + 24, 68, 26);
  rule(MARGIN + 26, 110, 260, C.gold, 1);
  // 左：竖向画像位
  photoSlot("portrait-main", MARGIN + 24, 128, 300, 405, "命主画像位（AI 美学肖像）", "放置为您定制的东方美学肖像");
  // 右：随笔
  const rx = MARGIN + 360, rw = W - rx - MARGIN - 24;
  doc.font("kai").fontSize(15).fillColor(C.indigo).text("以东方之笔，绘您之韵", rx, 150);
  rule(rx, 178, 120, C.gold, 0.8);
  body(
    "命主画像取自您的姓名与气质，以工笔与水墨的语言重新描摹——不作命理推断，只作审美呈现。\n\n" +
    "设色取您的「个人节气色谱」为坐标：把最衬您的色彩，化作衣袂、远山与云气，让画像与四时呼应。\n\n" +
    "这是一幅只属于您的东方肖像，亦是本册的卷首之礼。",
    rx, 196, rw, { lineGap: 6, size: 11 });
  doc.font("song").fontSize(8.5).fillColor(C.sub).text("＊ 画像为 AIGC 辅助创作，仅作美学纪念，不构成任何命理或身份判断。", rx, 470, { width: rw, lineGap: 4 });
  footer("命主画像");
}

// ---------- 6. 专属写真主图 ----------
function zhenzhaoMain() {
  doc.addPage(); fillBg(C.paper); goldFrame();
  kicker("SIGNATURE PORTRAIT", MARGIN + 24, 50);
  title("专属写真 · 主图", MARGIN + 24, 64, 26);
  // 大横幅照片位
  photoSlot("zhenzhao-main", MARGIN + 24, 116, W - (MARGIN + 24) * 2, 360, "专属写真主图位", "放置本季最具代表性的实拍写真（横幅）");
  doc.font("kai").fontSize(12).fillColor(C.indigoSoft).text("　光阴留影　·　此刻即典藏　", MARGIN + 24, 494, { width: W - (MARGIN + 24) * 2, align: "center" });
  footer("专属写真");
}

// ---------- 7. 个人色彩 ----------
function palettePage() {
  doc.addPage(); fillBg(C.paper); goldFrame();
  kicker("PERSONAL PALETTE", MARGIN + 24, 54);
  title("个人色彩 · 节气色谱", MARGIN + 24, 68, 26);
  rule(MARGIN + 26, 110, 260, C.gold, 1);
  // 左：色卡网格
  const gx = MARGIN + 24, gy = 132, cellW = 150, cellH = 70, gap = 12;
  PALETTE.forEach((p, i) => {
    const col = i % 2, row = Math.floor(i / 2);
    const x = gx + col * (cellW + gap), y = gy + row * (cellH + gap);
    doc.save().rect(x, y, cellW, cellH).fill(p[1]).restore();
    doc.save().lineWidth(0.8).strokeColor(C.gold).rect(x, y, cellW, cellH).stroke().restore();
    const dark = ["#2B2B2B", "#2C3E66", "#C8553D", "#B4452F", "#4F86C6", "#D96B86"].includes(p[1]);
    doc.font("kai").fontSize(11).fillColor(dark ? "#F2ECDD" : C.ink).text(p[0], x + 8, y + cellH - 22);
    doc.font("song").fontSize(7).fillColor(dark ? "#E6DFD0" : C.sub).text(p[1].toUpperCase(), x + 8, y + 8);
  });
  // 右：说明 + 小照片位
  const rx = gx + (cellW + gap) * 2 + 24, rw = W - rx - MARGIN - 24;
  doc.font("kai").fontSize(14).fillColor(C.indigo).text("您的色彩坐标", rx, 138);
  rule(rx, 164, 110, C.gold, 0.8);
  body(
    "个人色谱由我们依据您的肤色、气质与偏好，从二十四节气十九色体系中甄选而成，作为造型、写真与画像的统一审美基准。\n\n" +
    "它只是「最衬您的颜色」，是美学建议，而非命理论断。",
    rx, 180, rw, { lineGap: 6, size: 10.5 });
  photoSlot("palette-photo", rx, 300, rw, 235, "色彩写真位", "放置体现个人色谱的造型写真");
  footer("个人色彩");
}

// ---------- 8. 四季章扉 ----------
function seasonsIntro() {
  doc.addPage(); fillBg(C.indigo);
  doc.save().lineWidth(1).strokeColor(C.gold).rect(18, 18, W - 36, H - 36).stroke()
    .lineWidth(0.5).rect(23, 23, W - 46, H - 46).stroke().restore();
  doc.font("hei").fontSize(9).fillColor(C.gold).text("THE TWENTY-FOUR SOLAR TERMS", 0, 120, { width: W, align: "center", characterSpacing: 4 });
  doc.font("kai").fontSize(40).fillColor("#EBD9A0").text("四 时 · 二 十 四 节 气", 0, 156, { width: W, align: "center" });
  rule(W / 2 - 140, 224, 280, C.gold, 1);
  doc.font("kai").fontSize(13).fillColor("#D8C892").text(
    "以四季为章，以节气为节。\n春木、夏火、秋金、冬水，各有其色，各有其韵。\n下文每一季，皆为您预留实拍写真之位——\n让您的身影，落入对应的天地时序之中。",
    0, 250, { width: W, align: "center", lineGap: 9 });
  // 四季缩略
  const tw = 150, th = 90, gap = 24, totalW = tw * 4 + gap * 3, sx = (W - totalW) / 2, sy = 400;
  ["spring", "summer", "autumn", "winter"].forEach((s, i) => {
    const x = sx + i * (tw + gap);
    doc.save().rect(x, sy, tw, th).clip();
    try { doc.image(art(s), x, sy, { cover: [tw, th] }); } catch (e) {}
    doc.restore();
    doc.save().lineWidth(1).strokeColor(C.gold).rect(x, sy, tw, th).stroke().restore();
    doc.font("kai").fontSize(12).fillColor("#EBD9A0").text(["春", "夏", "秋", "冬"][i], x, sy + th + 6, { width: tw, align: "center" });
  });
}

// ---------- 季节满版美术页 ----------
function seasonArt(name, kickerTxt, mainTxt, terms) {
  doc.addPage();
  try { doc.image(art(name), 0, 0, { cover: [W, H], align: "center", valign: "center" }); }
  catch (e) { fillBg(C.indigo); }
  // 左上叠加（美术此区留白）
  const x = 52, y = 56;
  doc.save().rect(x - 14, y - 12, 300, 132).fillOpacity(0.32).fill(C.indigo).restore();
  doc.font("hei").fontSize(10).fillColor("#EBD9A0").text(kickerTxt, x, y, { characterSpacing: 3 });
  doc.font("kai").fontSize(34).fillColor("#FFFFFF").text(mainTxt, x, y + 22);
  rule(x + 2, y + 74, 150, C.gold, 1);
  doc.font("kai").fontSize(11).fillColor("#F1E8CF").text(terms, x, y + 86, { width: 300, lineGap: 3 });
}

// ---------- 季节内容页 ----------
function seasonContent(name, label, slots, text) {
  doc.addPage(); fillBg(C.paper); goldFrame();
  const cap = { spring: "春", summer: "夏", autumn: "秋", winter: "冬" }[name];
  kicker(`${name.toUpperCase()} · ${label}`, MARGIN + 24, 50);
  title(`${cap} · ${label}`, MARGIN + 24, 64, 26);
  rule(MARGIN + 26, 106, 220, C.gold, 1);
  // 两张照片位（上下）
  const px = MARGIN + 24, pw = 360;
  photoSlot(slots[0], px, 124, pw, 198, `${cap}日写真位 一`, "放置客户实拍写真");
  photoSlot(slots[1], px, 334, pw, 198, `${cap}日写真位 二`, "放置客户实拍写真");
  // 右栏文字
  const rx = MARGIN + 410, rw = W - rx - MARGIN - 24;
  doc.font("kai").fontSize(15).fillColor(C.indigo).text(`${cap}令 · 节气美学`, rx, 130);
  rule(rx, 158, 120, C.gold, 0.8);
  body(text, rx, 176, rw, { lineGap: 6, size: 11 });
  // 季节色条
  const chips = { spring: ["#9FBF5B", "#E7B6C2", "#7FB0A6"], summer: ["#D96B86", "#4F86C6", "#7FBF6A"],
    autumn: ["#C8553D", "#D2A33C", "#7E6B4A"], winter: ["#BFCBE0", "#2C3E66", "#B4452F"] }[name];
  let cxp = rx;
  doc.font("song").fontSize(8.5).fillColor(C.sub).text("本季色彩坐标", rx, 360);
  chips.forEach((c) => { doc.save().rect(cxp, 378, 56, 26).fill(c).restore(); doc.save().lineWidth(0.6).strokeColor(C.gold).rect(cxp, 378, 56, 26).stroke().restore(); cxp += 64; });
  footer(`${cap} · 节气写真`);
}

// ---------- 17. 四季壁纸合辑 ----------
function wallpaperPage() {
  doc.addPage(); fillBg(C.paper); goldFrame();
  kicker("DIGITAL WALLPAPERS", MARGIN + 24, 50);
  title("四季壁纸 · 数字典藏", MARGIN + 24, 64, 26);
  rule(MARGIN + 26, 106, 240, C.gold, 1);
  // 四张壁纸缩略 2x2
  const gx = MARGIN + 24, gy = 124, tw = 240, th = 150, gap = 16;
  ["spring", "summer", "autumn", "winter"].forEach((s, i) => {
    const col = i % 2, row = Math.floor(i / 2);
    const x = gx + col * (tw + gap), y = gy + row * (th + gap);
    doc.save().rect(x, y, tw, th).clip();
    try { doc.image(art(s), x, y, { cover: [tw, th] }); } catch (e) {}
    doc.restore();
    doc.save().lineWidth(1).strokeColor(C.gold).rect(x, y, tw, th).stroke().restore();
    doc.font("kai").fontSize(11).fillColor("#FFFFFF").text(["春 · 立春","夏 · 夏至","秋 · 霜降","冬 · 大寒"][i], x + 8, y + th - 24);
  });
  // 右栏：下载二维码位 + 说明
  const rx = gx + (tw + gap) * 2 + 18, rw = W - rx - MARGIN - 24;
  doc.font("kai").fontSize(14).fillColor(C.indigo).text("高清壁纸下载", rx, 130);
  rule(rx, 158, 110, C.gold, 0.8);
  body("含手机 / 平板 / 桌面三种比例的四季节气壁纸，依您的个人色谱调色。扫描右下二维码即可下载。", rx, 176, rw, { lineGap: 6, size: 10.5 });
  // 二维码位
  const qx = rx + (rw - 120) / 2, qy = 300, qs = 120;
  doc.save().rect(qx, qy, qs, qs).fill(C.panel).restore();
  doc.save().lineWidth(1).strokeColor(C.gold).dash(4, { space: 3 }).rect(qx + 3, qy + 3, qs - 6, qs - 6).stroke().undash().restore();
  doc.font("hei").fontSize(9).fillColor(C.goldDeep).text("二维码位", qx, qy + qs / 2 - 6, { width: qs, align: "center" });
  doc.font("song").fontSize(8).fillColor(C.sub).text("下载 / 验真二维码", qx, qy + qs + 8, { width: qs, align: "center" });
  footer("四季壁纸");
}

// ---------- 18. 写真精选 A ----------
function galleryA() {
  doc.addPage(); fillBg(C.paper); goldFrame();
  kicker("MOMENTS · GALLERY", MARGIN + 24, 50);
  title("光阴 · 写真精选", MARGIN + 24, 64, 26);
  rule(MARGIN + 26, 106, 220, C.gold, 1);
  // 左大 + 右两小
  const x0 = MARGIN + 24, top = 124, bottom = H - 64;
  const bigW = 440, h = bottom - top;
  photoSlot("gallery-1", x0, top, bigW, h, "写真位 一", "竖幅 / 全身");
  const rx = x0 + bigW + 16, rw = W - rx - MARGIN - 24, hh = (h - 16) / 2;
  photoSlot("gallery-2", rx, top, rw, hh, "写真位 二", "横幅特写");
  photoSlot("gallery-3", rx, top + hh + 16, rw, hh, "写真位 三", "横幅场景");
  footer("写真精选");
}

// ---------- 19. 写真精选 B ----------
function galleryB() {
  doc.addPage(); fillBg(C.paper); goldFrame();
  kicker("MOMENTS · GALLERY", MARGIN + 24, 50);
  title("光阴 · 写真精选 II", MARGIN + 24, 64, 26);
  rule(MARGIN + 26, 106, 240, C.gold, 1);
  const x0 = MARGIN + 24, top = 124, bottom = H - 64;
  const h = bottom - top, w = (W - (MARGIN + 24) * 2 - 16) / 2;
  photoSlot("gallery-4", x0, top, w, h, "写真位 四", "竖幅 / 半身");
  photoSlot("gallery-5", x0 + w + 16, top, w, h, "写真位 五", "竖幅 / 意境");
  footer("写真精选");
}

// ---------- 20. 典藏信息 ----------
function archivePage() {
  doc.addPage(); fillBg(C.paper); goldFrame();
  kicker("COLLECTION & COMPLIANCE", MARGIN + 24, 50);
  title("典藏信息 · 合规声明", MARGIN + 24, 64, 26);
  rule(MARGIN + 26, 106, 260, C.gold, 1);
  // 左：信息表
  const lx = MARGIN + 24, lw = 360;
  const rows = [
    ["限量编号", cfg.edition ? `No. ${cfg.edition}${cfg.total ? " / " + cfg.total : ""}` : "No. ＿＿＿ / ＿＿＿"],
    ["制作日期", cfg.year || "＿＿＿＿"],
    ["拍摄主题", cfg.subject || "＿＿＿＿＿＿"],
    ["造型 / 设计", cfg.designer || "渝山东方美学造型组"],
    ["专属客户", NAME],
  ];
  let y = 128;
  rows.forEach((r) => {
    doc.font("hei").fontSize(10).fillColor(C.goldDeep).text(r[0], lx, y, { width: 90 });
    doc.font("song").fontSize(11).fillColor(C.ink).text(r[1], lx + 100, y, { width: lw - 100 });
    rule(lx, y + 22, lw, "#D8CDB4", 0.5);
    y += 33;
  });
  seal(lx + 30, y + 40, 34);
  doc.font("kai").fontSize(11).fillColor(C.sub).text("渝山东方美学 · 典藏专用印", lx + 60, y + 32, { width: lw - 60 });
  // 右：合规声明
  const rx = MARGIN + 420, rw = W - rx - MARGIN - 24;
  doc.font("kai").fontSize(14).fillColor(C.indigo).text("合规与版权声明", rx, 128);
  rule(rx, 156, 120, C.gold, 0.8);
  body(
    "1. AIGC 声明：本册命主画像、节气插画、壁纸等由人工智能辅助创作，仅作美学纪念与欣赏。\n\n" +
    "2. 不含命理：全册不提供任何命理推算、占卜、改运、预测等内容；八字等仅作色彩美学的灵感坐标，不作任何命运论断。\n\n" +
    "3. 个人信息：客户照片与信息仅用于本册制作，依《个人信息保护法》在授权范围内使用、可申请删除。\n\n" +
    "4. 版权：本册版式、插画与设计版权归渝山东方美学所有；客户照片版权归客户所有，双方在授权书约定范围内使用。",
    rx, 174, rw, { lineGap: 5, size: 9.8 });
  footer("典藏信息");
}

// ---------- 21. 封底 ----------
function backCover() {
  doc.addPage(); fillBg(C.indigo);
  doc.save().lineWidth(1).strokeColor(C.gold).rect(24, 24, W - 48, H - 48).stroke().restore();
  seal(W / 2, H / 2 - 70, 40);
  doc.font("kai").fontSize(22).fillColor("#EBD9A0").text("渝 山 东 方 美 学", 0, H / 2 - 20, { width: W, align: "center" });
  doc.font("hei").fontSize(9).fillColor("#C9B574").text("以山河为序　以光阴为册", 0, H / 2 + 16, { width: W, align: "center", characterSpacing: 4 });
  doc.font("song").fontSize(8).fillColor("#9C8E63").text("AIGC 辅助创作的美学纪念读物 · 不含命理推算 · 限量典藏", 0, H - 70, { width: W, align: "center" });
}

build();
