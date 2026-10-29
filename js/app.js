/* ============================================================
   宝可德语 — app.js  (shared: data, storage, chrome, scenes, audio)
   ============================================================ */
(function () {
  "use strict";

  /* ---------------------------------------------------------
     Data
     --------------------------------------------------------- */
  const SPECIES = {
    torchic: {
      key: "torchic", zh: "火稚鸡", de: "Flemmli", img: "torchic",
      color: "#e07b3c", soft: "#fbe7d4", defaultName: "Frido",
      trait: "脚爪总是暖暖的，情绪全写在脸上",
      quote: "Ich bin ein Flemmli. Ich bin klein, aber mutig!"
    },
    piplup: {
      key: "piplup", zh: "波加曼", de: "Plinfa", img: "piplup",
      color: "#3f7fb5", soft: "#e0ecf7", defaultName: "Lina",
      trait: "有点不服输，走路时会挺起胸膛",
      quote: "Ich bin ein Plinfa. Ich bin stark!"
    },
    rowlet: {
      key: "rowlet", zh: "木木枭", de: "Bauz", img: "rowlet",
      color: "#7a9a4f", soft: "#e8efda", defaultName: "Theo",
      trait: "安静、好奇，转头的时候整个身子一起转",
      quote: "Ich bin ein Bauz. Ich bin leise und klug."
    }
  };

  const CHARS = {
    oasilia: {
      id: "oasilia", name: "欧亚西莉亚", de: "Oasilia", species: "沙漠蜻蜓", speciesDe: "Libelldra",
      img: "flygon", color: "#6d9c5c", soft: "#e8f0df", age: "17 岁",
      role: "开朗俏皮的沙漠蜻蜓，来自沙漠，却爱森林与大海",
      quote: "Komm mit! Wir sind jetzt Freunde.",
      quoteZh: "跟我来吧！我们现在是朋友了。"
    },
    atlas: {
      id: "atlas", name: "阿特拉斯", de: "Atlas", species: "暴飞龙", speciesDe: "Brutalanda",
      img: "salamence", color: "#4f72ad", soft: "#e3eaf6", age: "20 岁",
      role: "勇敢、聪慧、健壮的暴飞龙，武器职人，话不多但细心",
      quote: "Du bist noch klein. Ich helfe dir.",
      quoteZh: "你还小。我来帮你。"
    },
    licht: {
      id: "licht", name: "利希特老师", de: "Lehrer Licht", species: "电龙", speciesDe: "Ampharos",
      img: "ampharos", color: "#c9a227", soft: "#f7edc9", age: "很年长",
      role: "稳重的电龙老师，尾巴像一盏灯，讲课慢慢的",
      quote: "Keine Angst. Wir wiederholen das langsam.",
      quoteZh: "别怕。我们慢慢地再讲一遍。"
    },
    mira: {
      id: "mira", name: "米拉", de: "Mira", species: "土龙弟弟", speciesDe: "Dummisel",
      img: "dunsparce", color: "#b08d55", soft: "#f2e8d6", age: "10 岁",
      role: "内向又体贴的土龙弟弟，声音小小的，会默默帮人",
      quote: "Hier, du kannst meinen Stift haben.",
      quoteZh: "这个，你可以用我的笔。"
    },
    arko: {
      id: "arko", name: "阿尔科", de: "Arko", species: "始祖小鸟", speciesDe: "Flapteryx",
      img: "archen", color: "#c98f3f", soft: "#f8e8cf", age: "10 岁",
      role: "总想飞的始祖小鸟，莽撞又乐天，常从高处摔进草丛",
      quote: "Ich kann fliegen! Vielleicht.",
      quoteZh: "我会飞的！大概吧。"
    },
    emi: {
      id: "emi", name: "艾米", de: "Emi", species: "电飞鼠", speciesDe: "Emolga",
      img: "emolga", color: "#d9b64a", soft: "#f9f0cc", age: "10 岁",
      role: "活泼好动的电飞鼠，爱交朋友，也爱零食",
      quote: "Hallo! Spielst du mit mir?",
      quoteZh: "你好！要和我一起玩吗？"
    },
    wiss: {
      id: "wiss", name: "薇丝", de: "Wiss", species: "风妖精", speciesDe: "Elfun",
      img: "whimsicott", color: "#8aa06a", soft: "#eef1e2", age: "10 岁",
      role: "爱恶作剧的风妖精，机灵，捉弄完又会心虚地用花道歉",
      quote: "Hehe. Das war nur ein kleiner Scherz!",
      quoteZh: "嘿嘿。只是个小玩笑啦！"
    }
  };

  // 与 data/lessons/*.js 对应的目录信息（首页课程地图用）
  const COURSE = [
    { id: 1, title: "Hallo, Welt!", zh: "醒来的早晨", scene: "forest", accent: "#6d9c5c", beat: "在森林边醒来，遇见背着篮子的欧亚西莉亚。" },
    { id: 2, title: "Das Haus am Waldrand", zh: "林边的家", scene: "house", accent: "#c5764f", beat: "认识阿特拉斯，参观这栋有花园和工坊的木屋。" },
    { id: 3, title: "Zahlen und Alter", zh: "早餐桌", scene: "dawn", accent: "#d8a24a", beat: "数宝可币、学数字，被问起自己几岁。" },
    { id: 4, title: "Der erste Schultag", zh: "上学的第一天", scene: "classroom", accent: "#4f72ad", beat: "利希特老师的教室，还有两个新同学。" },
    { id: 5, title: "Im Klassenzimmer", zh: "借文具", scene: "classroom", accent: "#6f975b", beat: "画画课上没有笔，米拉悄悄把自己的递过来。" },
    { id: 6, title: "Mittagessen bei Oasilia", zh: "午餐", scene: "house", accent: "#c98f3f", beat: "文柚果沙拉、面包，和不请自来的艾米。" },
    { id: 7, title: "Auf dem Markt", zh: "集市", scene: "market", accent: "#b7524d", beat: "周末的集市，第一次自己用宝可币买东西。" },
    { id: 8, title: "Regen und Regenbogen", zh: "雨天", scene: "rain", accent: "#5b7f8f", beat: "雨点敲着窗户，艾米躲进米拉的翅膀底下。" },
    { id: 9, title: "Fliegen", zh: "学飞", scene: "hill", accent: "#8aa06a", beat: "跟着阿尔科去山坡练习飞行，摔了一次又一次。" },
    { id: 10, title: "Farben und Streiche", zh: "颜色与恶作剧", scene: "forest", accent: "#a8789f", beat: "薇丝把大家的围巾、笔记本和工具都染了色。" },
    { id: 11, title: "Ein Tag am Meer", zh: "海边的一天", scene: "sea", accent: "#2b8b83", beat: "野餐、贝壳和浪花，欧亚西莉亚开心得转圈。" },
    { id: 12, title: "Ein Abend zu Hause", zh: "夜晚的家", scene: "night", accent: "#3f5b8a", beat: "在灯下写第一句德语日记，窗外的星星很亮。" }
  ];

  const SCENE_NAMES = {
    dawn: "清晨", forest: "森林", house: "林边的家", classroom: "教室",
    market: "集市", rain: "雨天", sea: "海边", hill: "山坡", night: "夜晚"
  };

  /* ---------------------------------------------------------
     Storage
     --------------------------------------------------------- */
  const KEY = "pokedoku.v1";
  const DEFAULTS = {
    name: "", species: "", coins: 0,
    visited: [], done: [], answers: {}, read: {},
    lastLesson: 1,
    settings: { zh: true, rate: 0.92 },
    createdAt: ""
  };
  let state = load();

  function load() {
    try {
      const raw = JSON.parse(localStorage.getItem(KEY));
      if (!raw || typeof raw !== "object") return { ...DEFAULTS, settings: { ...DEFAULTS.settings } };
      return {
        ...DEFAULTS, ...raw,
        settings: { ...DEFAULTS.settings, ...(raw.settings || {}) },
        visited: Array.isArray(raw.visited) ? raw.visited : [],
        done: Array.isArray(raw.done) ? raw.done : [],
        answers: raw.answers && typeof raw.answers === "object" ? raw.answers : {},
        read: raw.read && typeof raw.read === "object" ? raw.read : {}
      };
    } catch { return { ...DEFAULTS, settings: { ...DEFAULTS.settings } }; }
  }
  function save() {
    try { localStorage.setItem(KEY, JSON.stringify(state)); } catch { /* ignore */ }
  }
  function update(fn) { fn(state); save(); }

  /* ---------------------------------------------------------
     Helpers
     --------------------------------------------------------- */
  const $ = (sel, root) => (root || document).querySelector(sel);
  const $$ = (sel, root) => Array.from((root || document).querySelectorAll(sel));
  const pad = n => String(n).padStart(2, "0");
  const esc = s => String(s == null ? "" : s).replace(/[&<>"']/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  const lessonPath = id => `data/lessons/${pad(id)}.js`;
  const lessonPage = id => `lektion.html?l=${id}`;

  function species() { return SPECIES[state.species] || null; }
  function heroChar() {
    const sp = species();
    if (!sp) return null;
    return {
      id: "hero", name: state.name || sp.defaultName,
      de: state.name || sp.defaultName, species: sp.zh, speciesDe: sp.de,
      img: sp.img, color: sp.color, soft: sp.soft, age: "10 岁？",
      role: "从人类世界来的孩子，变成了宝可梦", isHero: true
    };
  }
  function charInfo(id) {
    if (id === "hero") return heroChar() || {
      id: "hero", name: "Lina", de: "Lina", species: "？", speciesDe: "",
      img: "torchic", color: "#7c8b91", soft: "#f5ecd9", age: "10 岁？", isHero: true
    };
    return CHARS[id] || null;
  }
  function portrait(id, emo, cls) {
    let c = charInfo(id);
    if (!c && SPECIES[id]) {
      const sp = SPECIES[id];
      c = { name: sp.zh, img: sp.img, color: sp.color };
    }
    if (!c) return "";
    const e = emo || "normal";
    return `<span class="portrait ${cls || ""}" style="--p-accent:${c.color}"><img src="assets/portraits/${c.img}-${e}.png" alt="${esc(c.name)}的头像" width="40" height="40"></span>`;
  }

  function replacePH(text) {
    const sp = species();
    return String(text == null ? "" : text)
      .replace(/\{\{name\}\}/g, state.name || (sp ? sp.defaultName : "Lina"))
      .replace(/\{\{species\}\}/g, sp ? sp.de : "Pokémon");
  }
  // 中文翻译里的 {{species}} 用中文物种名
  function replacePHZh(text) {
    const sp = species();
    return String(text == null ? "" : text)
      .replace(/\{\{name\}\}/g, state.name || (sp ? sp.defaultName : "Lina"))
      .replace(/\{\{species\}\}/g, sp ? sp.zh : "宝可梦");
  }
  const norm = s => String(s || "").toLowerCase().trim().replace(/ß/g, "ss").replace(/[.!?,;:…„“”"']/g, "").replace(/\s+/g, " ");

  function readCss(name) { return getComputedStyle(document.documentElement).getPropertyValue(name).trim(); }

  /* ---------------------------------------------------------
     Audio (Web Speech API)
     --------------------------------------------------------- */
  const Audio = (function () {
    let voices = [];
    let picked = null;
    let currentBtn = null;
    const supported = "speechSynthesis" in window;

    function refresh() {
      if (!supported) return;
      voices = window.speechSynthesis.getVoices() || [];
      const de = voices.filter(v => /^de/i.test(v.lang));
      picked = de.find(v => /de[-_]DE/i.test(v.lang) && /google|natural|premium/i.test(v.name))
        || de.find(v => /de[-_]DE/i.test(v.lang)) || de[0] || null;
    }
    if (supported) {
      refresh();
      window.speechSynthesis.onvoiceschanged = refresh;
    }

    function speak(text, btn) {
      if (!supported) { toast("这个浏览器不支持朗读，可以换一个浏览器试试。"); return; }
      const t = String(text || "").trim();
      if (!t) return;
      try { window.speechSynthesis.cancel(); } catch { /* ignore */ }
      const u = new SpeechSynthesisUtterance(t);
      u.lang = "de-DE";
      u.rate = state.settings.rate || 0.92;
      u.pitch = 1;
      if (picked) u.voice = picked;
      if (currentBtn && currentBtn !== btn) currentBtn.classList.remove("is-playing");
      if (btn) { btn.classList.add("is-playing"); currentBtn = btn; }
      u.onend = u.onerror = () => { if (btn) btn.classList.remove("is-playing"); };
      window.speechSynthesis.speak(u);
    }
    function stop() {
      if (!supported) return;
      try { window.speechSynthesis.cancel(); } catch { /* ignore */ }
    }
    return { speak, stop, supported, hasVoice: () => !!picked, refresh };
  })();

  const SPEAK_ICON = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M11 5 6 9H3v6h3l5 4z"/><path d="M15.5 8.5a5 5 0 0 1 0 7"/><path d="M18.5 5.5a9 9 0 0 1 0 13"/></svg>';
  function speakBtn(text, cls) {
    return `<button class="speak ${cls || ""}" type="button" data-speak="${esc(String(text).replace(/"/g, "&quot;"))}" title="朗读德语" aria-label="朗读：${esc(text)}">${SPEAK_ICON}</button>`;
  }

  /* ---------------------------------------------------------
     Coins & toast
     --------------------------------------------------------- */
  function addCoins(n, opts) {
    if (!n) return;
    state.coins = Math.max(0, (state.coins || 0) + n);
    save();
    renderWallet(true);
    if (!opts || opts.toast !== false) {
      toast(`${n > 0 ? "+" : ""}${n} 宝可币`, { coin: true });
    }
  }
  function renderWallet(pulse) {
    const el = $("#coinCount");
    if (el) el.textContent = state.coins || 0;
    const w = $("#walletBtn");
    if (w && pulse) { w.classList.remove("is-pulsing"); void w.offsetWidth; w.classList.add("is-pulsing"); }
  }

  let toastStack = null;
  function toast(msg, opts) {
    if (!toastStack) {
      toastStack = document.createElement("div");
      toastStack.className = "toast-stack";
      document.body.appendChild(toastStack);
    }
    const t = document.createElement("div");
    t.className = "toast";
    t.innerHTML = (opts && opts.coin ? '<img src="assets/img/poke.png" alt="">' : "") + `<span>${esc(msg)}</span>`;
    toastStack.appendChild(t);
    setTimeout(() => {
      t.classList.add("is-leaving");
      setTimeout(() => t.remove(), 320);
    }, opts && opts.duration ? opts.duration : 2400);
  }

  /* ---------------------------------------------------------
     Scene illustrations (inline SVG)
     --------------------------------------------------------- */
  let sceneUid = 0;
  function clouds(color, y, s, op) {
    const c = color || "#ffffff";
    return `<g fill="${c}" opacity="${op == null ? 0.75 : op}">
      <ellipse cx="${240 * s + 200}" cy="${y}" rx="${86 * s}" ry="${24 * s}"/>
      <ellipse cx="${290 * s + 200}" cy="${y - 12 * s}" rx="${52 * s}" ry="${20 * s}"/>
      <ellipse cx="${196 * s + 200}" cy="${y - 8 * s}" rx="${44 * s}" ry="${16 * s}"/>
      <ellipse cx="${980 - 120 * s}" cy="${y + 18}" rx="${70 * s}" ry="${20 * s}"/>
      <ellipse cx="${1010 - 120 * s}" cy="${y + 6}" rx="${42 * s}" ry="${15 * s}"/>
    </g>`;
  }
  function tree(x, baseY, h, color, kind) {
    if (kind === "pine") {
      return `<g fill="${color}">
        <rect x="${x - 3}" y="${baseY - h * 0.22}" width="6" height="${h * 0.24}" fill="#7a5c3a"/>
        <path d="M${x} ${baseY - h} L${x - h * 0.22} ${baseY - h * 0.55} L${x + h * 0.22} ${baseY - h * 0.55} Z"/>
        <path d="M${x} ${baseY - h * 0.78} L${x - h * 0.28} ${baseY - h * 0.32} L${x + h * 0.28} ${baseY - h * 0.32} Z"/>
        <path d="M${x} ${baseY - h * 0.58} L${x - h * 0.34} ${baseY - h * 0.16} L${x + h * 0.34} ${baseY - h * 0.16} Z"/>
      </g>`;
    }
    return `<g fill="${color}">
      <rect x="${x - 4}" y="${baseY - h * 0.34}" width="8" height="${h * 0.36}" fill="#7a5c3a"/>
      <circle cx="${x}" cy="${baseY - h * 0.6}" r="${h * 0.28}"/>
      <circle cx="${x - h * 0.2}" cy="${baseY - h * 0.44}" r="${h * 0.2}"/>
      <circle cx="${x + h * 0.2}" cy="${baseY - h * 0.46}" r="${h * 0.21}"/>
    </g>`;
  }
  function grassTufts(color, y) {
    let s = "";
    for (let i = 0; i < 16; i++) {
      const x = 40 + i * 92 + (i % 3) * 11;
      const h = 10 + (i % 4) * 5;
      s += `<path d="M${x} ${y} q 3 -${h} 7 0 M${x + 9} ${y} q 3 -${h - 3} 7 0" fill="none" stroke="${color}" stroke-width="2.4" stroke-linecap="round"/>`;
    }
    return s;
  }
  function birds(color, y, op) {
    return `<g fill="none" stroke="${color}" stroke-width="2" stroke-linecap="round" opacity="${op || 0.6}">
      <path d="M300 ${y} q 8 -7 16 0 q 8 -7 16 0"/>
      <path d="M352 ${y - 14} q 6 -5 12 0 q 6 -5 12 0"/>
      <path d="M282 ${y + 14} q 5 -4 10 0 q 5 -4 10 0"/>
    </g>`;
  }

  function scene(kind) {
    const uid = "sc" + (++sceneUid);
    const P = {
      dawn: { top: "#f7c9a8", bottom: "#fcecd2", sun: "#ffcf7d", sunY: 190, far: "#e2b49a", mid: "#c9937c", ground: "#a9b884", cloud: "#fff3e2" },
      forest: { top: "#dcefe0", bottom: "#f9efd3", sun: "#ffd88a", sunY: 120, far: "#b6cfae", mid: "#8fb27e", ground: "#6b9557", cloud: "#ffffff" },
      house: { top: "#d8ebdf", bottom: "#fbeccb", sun: "#ffd68a", sunY: 118, far: "#aec9a5", mid: "#8cb27a", ground: "#74a05f", cloud: "#ffffff" },
      classroom: { top: "#f3dfb9", bottom: "#e8cfa2", sun: "#ffe3a6", sunY: 120, far: "#b6cfae", mid: "#8fb27e", ground: "#8a6a45", cloud: "#fff8ea" },
      market: { top: "#f4dfbd", bottom: "#fbeccb", sun: "#ffd88a", sunY: 130, far: "#c3c08e", mid: "#a5a878", ground: "#c2a06f", cloud: "#fffaf0" },
      rain: { top: "#b9c8cb", bottom: "#e4e2d4", sun: "#d9dfd8", sunY: 100, far: "#9fb3ac", mid: "#7f9890", ground: "#6d8a72", cloud: "#eef1ee" },
      sea: { top: "#bfe3e2", bottom: "#fdf0d2", sun: "#ffe09a", sunY: 150, far: "#8fc0be", mid: "#4e9a96", ground: "#e8cf9f", cloud: "#ffffff" },
      hill: { top: "#cfe7d8", bottom: "#fbf0d6", sun: "#ffd98c", sunY: 130, far: "#a9c89c", mid: "#86ae76", ground: "#7ba262", cloud: "#ffffff" },
      night: { top: "#20304d", bottom: "#4a5470", sun: "#f6ecc9", sunY: 92, far: "#2e3f58", mid: "#34495d", ground: "#2b4038", cloud: "#54617c" }
    }[kind] || { top: "#dcefe0", bottom: "#f9efd3", sun: "#ffd88a", sunY: 120, far: "#b6cfae", mid: "#8fb27e", ground: "#6b9557", cloud: "#ffffff" };

    const night = kind === "night";
    const defs = `<defs>
      <linearGradient id="${uid}sky" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stop-color="${P.top}"/><stop offset="1" stop-color="${P.bottom}"/>
      </linearGradient>
      <radialGradient id="${uid}glow" cx="50%" cy="50%" r="50%">
        <stop offset="0" stop-color="${P.sun}" stop-opacity="${night ? 0.5 : 0.85}"/>
        <stop offset="1" stop-color="${P.sun}" stop-opacity="0"/>
      </radialGradient>
    </defs>`;

    let art = "";
    const groundY = 400;

    if (kind === "classroom") {
      art = `
        <rect width="1440" height="500" fill="url(#${uid}sky)"/>
        <rect y="0" width="1440" height="88" fill="#e6c894" opacity=".55"/>
        <g>
          <rect x="820" y="96" width="420" height="260" rx="14" fill="#f9efd8" stroke="#8a6a45" stroke-width="10"/>
          <rect x="836" y="112" width="388" height="228" fill="#cfe7d8"/>
          <path d="M836 300 q 120 -58 200 -22 q 110 48 188 6 L1224 340 L836 340 Z" fill="#8fb27e"/>
          <circle cx="1160" cy="160" r="30" fill="#ffe09a" opacity=".9"/>
          <rect x="1020" y="112" width="10" height="228" fill="#8a6a45"/>
          <rect x="836" y="222" width="388" height="10" fill="#8a6a45"/>
        </g>
        <g>
          <rect x="120" y="118" width="420" height="230" rx="10" fill="#2f5049" stroke="#7a5c3a" stroke-width="10"/>
          <g stroke="#dcece7" stroke-width="3" opacity=".5" stroke-linecap="round">
            <path d="M160 168 h 300"/><path d="M160 202 h 240"/><path d="M160 236 h 280"/><path d="M160 270 h 190"/>
          </g>
          <rect x="150" y="322" width="360" height="18" rx="6" fill="#7a5c3a"/>
        </g>
        <g>
          <rect x="100" y="356" width="1240" height="12" fill="#8a6a45" opacity=".5"/>
          <rect x="180" y="368" width="300" height="18" rx="8" fill="#a9825a"/>
          <rect x="220" y="386" width="14" height="86" fill="#8a6a45"/>
          <rect x="426" y="386" width="14" height="86" fill="#8a6a45"/>
          <rect x="960" y="368" width="300" height="18" rx="8" fill="#a9825a"/>
          <rect x="1000" y="386" width="14" height="86" fill="#8a6a45"/>
          <rect x="1206" y="386" width="14" height="86" fill="#8a6a45"/>
          <rect x="160" y="386" width="70" height="52" rx="6" fill="#c9bda2"/>
          <circle cx="300" cy="380" r="14" fill="#c5764f"/>
          <rect x="1010" y="384" width="52" height="60" rx="5" fill="#7a9a5b"/>
        </g>
        <rect y="464" width="1440" height="36" fill="#c9a97c"/>`;
    } else if (kind === "market") {
      art = `
        <rect width="1440" height="500" fill="url(#${uid}sky)"/>
        <circle cx="1150" cy="${P.sunY}" r="120" fill="url(#${uid}glow)"/>
        <circle cx="1150" cy="${P.sunY}" r="42" fill="${P.sun}"/>
        ${clouds(P.cloud, 110, 1)}
        <path d="M0 322 q 200 -34 380 -10 q 210 30 420 -6 q 240 -40 640 6 L1440 500 L0 500 Z" fill="${P.far}"/>
        <g fill="#b98f60" opacity=".55">
          <rect x="80" y="250" width="90" height="110"/><polygon points="70,252 125,196 180,252"/>
          <rect x="250" y="270" width="70" height="90"/><polygon points="240,272 285,228 330,272"/>
          <rect x="1240" y="246" width="90" height="114"/><polygon points="1230,248 1285,190 1340,248"/>
        </g>
        <rect y="${groundY}" width="1440" height="100" fill="${P.ground}"/>
        <rect y="${groundY}" width="1440" height="14" fill="#b08c5f"/>
        <g>
          ${[120, 520, 920].map((x, i) => {
            const aw = i === 1 ? "#b7524d" : (i === 2 ? "#2b8b83" : "#e6b567");
            return `<g>
              <rect x="${x}" y="300" width="280" height="12" fill="#8a6a45"/>
              <rect x="${x + 10}" y="256" width="10" height="150" fill="#7a5c3a"/>
              <rect x="${x + 258}" y="256" width="10" height="150" fill="#7a5c3a"/>
              <path d="M${x - 8} 258 h 296 l -18 42 h -260 Z" fill="${aw}"/>
              <path d="M${x - 8} 258 h 296 l -18 42 h -260 Z" fill="none" stroke="rgba(255,255,255,.65)" stroke-width="10" stroke-dasharray="0 30"/>
              <rect x="${x + 22}" y="330" width="236" height="66" rx="8" fill="#c9a97c"/>
              ${[0, 1, 2, 3].map(j => `<circle cx="${x + 58 + j * 54}" cy="${322}" r="15" fill="${["#c5764f", "#7a9a5b", "#e6b567", "#b7524d"][j]}"/>`).join("")}
            </g>`;
          }).join("")}
        </g>
        <g fill="none" stroke="#7a5c3a" stroke-width="2" opacity=".7">
          <path d="M0 190 q 240 40 480 0 q 240 -40 480 0 q 240 40 480 0"/>
        </g>
        ${[130, 360, 620, 880, 1130, 1330].map((x, i) => `<path d="M${x} 190 l 20 26 l 20 -26 Z" fill="${["#b7524d", "#2b8b83", "#e6b567", "#b7524d", "#2b8b83", "#e6b567"][i]}"/>`).join("")}`;
    } else if (kind === "sea") {
      art = `
        <rect width="1440" height="500" fill="url(#${uid}sky)"/>
        <circle cx="1120" cy="${P.sunY}" r="150" fill="url(#${uid}glow)"/>
        <circle cx="1120" cy="${P.sunY}" r="46" fill="${P.sun}"/>
        ${clouds(P.cloud, 96, 1.05)}
        <path d="M0 292 q 260 12 520 -4 q 300 -18 920 4 L1440 500 L0 500 Z" fill="#8fc0be" opacity=".85"/>
        <path d="M0 312 q 300 16 620 2 q 320 -14 820 10 L1440 500 L0 500 Z" fill="#4e9a96"/>
        <g stroke="#d9f0ec" stroke-width="4" fill="none" opacity=".75" stroke-linecap="round">
          <path d="M60 348 q 40 -12 80 0 t 80 0"/><path d="M420 372 q 40 -12 80 0 t 80 0"/>
          <path d="M900 344 q 40 -12 80 0 t 80 0"/><path d="M1160 386 q 40 -12 80 0 t 80 0"/>
          <path d="M240 410 q 40 -12 80 0 t 80 0"/><path d="M760 404 q 40 -12 80 0 t 80 0"/>
        </g>
        <path d="M0 418 q 300 -30 600 -8 q 340 24 840 -6 L1440 500 L0 500 Z" fill="${P.ground}"/>
        <g fill="#c9a97c"><ellipse cx="180" cy="452" rx="70" ry="12"/><ellipse cx="1180" cy="462" rx="90" ry="14"/></g>
        <g fill="#f6e6c8"><circle cx="300" cy="440" r="6"/><circle cx="360" cy="458" r="5"/><circle cx="1050" cy="446" r="6"/><circle cx="1120" cy="470" r="5"/><circle cx="520" cy="472" r="4"/></g>
        <g fill="#7c8b91"><path d="M90 300 q 18 -22 36 0 q 14 -14 26 2 q -40 10 -62 -2 Z" opacity=".6"/></g>
        ${birds("#5d7d78", 150, 0.5)}`;
    } else if (kind === "rain") {
      art = `
        <rect width="1440" height="500" fill="url(#${uid}sky)"/>
        ${clouds("#c3cac6", 96, 1.25, 0.95)}
        ${clouds("#d7dbd6", 60, 0.8, 0.8)}
        <path d="M0 320 q 240 -36 480 -6 q 240 30 480 -10 q 240 -36 480 2 L1440 500 L0 500 Z" fill="${P.far}"/>
        <path d="M0 366 q 320 -24 640 4 q 320 26 800 -10 L1440 500 L0 500 Z" fill="${P.mid}"/>
        <rect y="424" width="1440" height="80" fill="${P.ground}"/>
        <g stroke="#e8ebe6" stroke-width="3" opacity=".55" stroke-linecap="round">
          ${Array.from({ length: 46 }, (_, i) => `<path d="M${(i * 63) % 1440} ${90 + (i * 47) % 260} l -10 28"/>`).join("")}
        </g>
        ${tree(150, 392, 150, "#5f7d64", "pine")}
        ${tree(1230, 400, 170, "#56745c", "pine")}
        ${tree(310, 400, 110, "#6b8a6c", "round")}
        <g fill="#b9d4d0" opacity=".8">
          <ellipse cx="520" cy="470" rx="90" ry="10"/><ellipse cx="980" cy="482" rx="120" ry="12"/>
          <ellipse cx="760" cy="450" rx="50" ry="7"/>
        </g>
        <g stroke="#8fa39a" stroke-width="3" fill="none" opacity=".55">
          <path d="M40 470 q 20 -40 40 0"/><path d="M180 486 q 20 -40 40 0"/><path d="M1120 470 q 20 -40 40 0"/>
        </g>`;
    } else if (kind === "night") {
      const stars = [
        [120, 70, 2.4], [230, 130, 1.8], [340, 60, 2], [470, 100, 1.6], [560, 40, 2.2],
        [700, 120, 1.8], [820, 66, 2.4], [930, 140, 1.6], [1040, 52, 2], [1180, 110, 2.2],
        [1300, 70, 1.8], [1380, 150, 2], [60, 180, 1.6], [400, 190, 1.4], [880, 200, 1.5]
      ];
      art = `
        <rect width="1440" height="500" fill="url(#${uid}sky)"/>
        ${stars.map(([x, y, r]) => `<circle cx="${x}" cy="${y}" r="${r}" fill="#fdf6d8" opacity=".9"/>`).join("")}
        <circle cx="1150" cy="${P.sunY}" r="130" fill="url(#${uid}glow)"/>
        <circle cx="1150" cy="${P.sunY}" r="40" fill="${P.sun}"/>
        <circle cx="1164" cy="${P.sunY - 8}" r="36" fill="${P.top}" opacity=".85"/>
        <path d="M0 330 q 240 -40 480 -8 q 260 34 500 -6 q 240 -34 460 4 L1440 500 L0 500 Z" fill="${P.far}"/>
        <path d="M0 384 q 300 -30 620 2 q 300 30 820 -12 L1440 500 L0 500 Z" fill="${P.mid}"/>
        <rect y="430" width="1440" height="74" fill="${P.ground}"/>
        <g>
          <rect x="760" y="300" width="260" height="146" rx="6" fill="#3b4d5e"/>
          <polygon points="740,304 890,224 1040,304" fill="#2f4050"/>
          <rect x="1000" y="238" width="20" height="52" fill="#2f4050"/>
          <g fill="#ffd98c">
            <rect x="800" y="336" width="42" height="44" rx="4" opacity=".92"/>
            <rect x="866" y="336" width="42" height="44" rx="4" opacity=".92"/>
            <rect x="932" y="336" width="42" height="44" rx="4" opacity=".92"/>
          </g>
          <rect x="866" y="392" width="52" height="54" rx="4" fill="#c5764f"/>
          <circle cx="890" cy="330" r="3" fill="#fdf6d8"/>
        </g>
        ${tree(170, 430, 160, "#243a35", "pine")}
        ${tree(320, 430, 200, "#22362f", "pine")}
        ${tree(1240, 440, 180, "#243a35", "pine")}
        <g fill="#ffe9a8">
          <circle cx="520" cy="392" r="3.4" opacity=".9"/><circle cx="580" cy="360" r="2.6" opacity=".75"/>
          <circle cx="640" cy="410" r="2.8" opacity=".8"/><circle cx="1090" cy="402" r="3" opacity=".85"/>
          <circle cx="1120" cy="368" r="2.4" opacity=".7"/>
        </g>`;
    } else if (kind === "house") {
      art = `
        <rect width="1440" height="500" fill="url(#${uid}sky)"/>
        <circle cx="1080" cy="${P.sunY}" r="130" fill="url(#${uid}glow)"/>
        <circle cx="1080" cy="${P.sunY}" r="42" fill="${P.sun}"/>
        ${clouds(P.cloud, 112, 1)}
        <path d="M0 330 q 250 -36 500 -6 q 260 32 520 -8 q 220 -30 420 6 L1440 500 L0 500 Z" fill="${P.far}"/>
        <path d="M0 392 q 320 -26 640 2 q 320 26 800 -10 L1440 500 L0 500 Z" fill="${P.mid}"/>
        ${tree(140, 396, 170, "#5f8257", "round")}
        ${tree(1290, 402, 200, "#54784e", "pine")}
        ${tree(1190, 402, 130, "#6b8f60", "round")}
        <rect y="${groundY}" width="1440" height="100" fill="${P.ground}"/>
        <rect y="${groundY}" width="1440" height="12" fill="#5e874f" opacity=".55"/>
        <g>
          <rect x="600" y="238" width="310" height="196" rx="6" fill="#e9d3ad"/>
          <polygon points="576,244 755,132 934,244" fill="#b7524d"/>
          <polygon points="576,244 755,132 934,244" fill="none" stroke="#8d3a36" stroke-width="6" opacity=".35"/>
          <rect x="806" y="164" width="26" height="62" fill="#8a6a45"/>
          <g opacity=".55" fill="#f3ead7">
            <circle cx="836" cy="128" r="14"/><circle cx="860" cy="104" r="18"/><circle cx="896" cy="92" r="22"/>
          </g>
          <rect x="690" y="286" width="62" height="60" rx="5" fill="#bfe3e2" stroke="#7a5c3a" stroke-width="6"/>
          <rect x="784" y="286" width="62" height="60" rx="5" fill="#bfe3e2" stroke="#7a5c3a" stroke-width="6"/>
          <rect x="740" y="356" width="62" height="78" rx="4" fill="#8a6a45"/>
          <circle cx="790" cy="398" r="4" fill="#e6b567"/>
          <rect x="604" y="418" width="302" height="14" fill="#c9a97c"/>
        </g>
        <g>
          <rect x="980" y="330" width="330" height="12" fill="#8a6a45" opacity=".8"/>
          ${[1000, 1060, 1120, 1180, 1240, 1300].map((x, i) => `<rect x="${x}" y="344" width="8" height="58" fill="#8a6a45" opacity=".75"/>`).join("")}
          <path d="M960 334 q 170 -18 370 0" stroke="#8a6a45" stroke-width="6" fill="none" opacity=".7"/>
        </g>
        <g fill="#e8b86a">
          <circle cx="520" cy="452" r="6"/><circle cx="548" cy="446" r="5"/><circle cx="568" cy="458" r="6"/>
          <circle cx="1270" cy="440" r="6"/><circle cx="1300" cy="448" r="5"/>
        </g>
        ${grassTufts("#5e874f", 486)}`;
    } else if (kind === "hill") {
      art = `
        <rect width="1440" height="500" fill="url(#${uid}sky)"/>
        <circle cx="1180" cy="${P.sunY}" r="140" fill="url(#${uid}glow)"/>
        <circle cx="1180" cy="${P.sunY}" r="42" fill="${P.sun}"/>
        ${clouds(P.cloud, 100, 1.1)}
        ${birds("#6b8f60", 170, 0.55)}
        <path d="M0 318 q 300 -70 560 -14 q 320 68 560 4 q 180 -44 320 -2 L1440 500 L0 500 Z" fill="${P.far}"/>
        <path d="M0 372 q 280 -46 540 6 q 300 60 560 -6 q 200 -46 340 4 L1440 500 L0 500 Z" fill="${P.mid}"/>
        <path d="M0 430 q 240 -54 520 -6 q 260 46 500 -4 q 240 -46 420 6 L1440 500 L0 500 Z" fill="${P.ground}"/>
        <path d="M420 500 q 120 -90 300 -60 q 180 30 250 -10" stroke="#d9c08a" stroke-width="16" fill="none" opacity=".65"/>
        ${tree(1130, 420, 190, "#4f7849", "round")}
        ${tree(180, 448, 120, "#5f8a52", "round")}
        <g stroke="#c9dfc0" stroke-width="3" fill="none" opacity=".8" stroke-linecap="round">
          <path d="M120 300 q 40 -10 80 -4"/><path d="M200 330 q 40 -10 80 -4"/><path d="M100 360 q 40 -10 80 -4"/>
        </g>
        ${grassTufts("#4f7849", 490)}`;
    } else if (kind === "dawn") {
      art = `
        <rect width="1440" height="500" fill="url(#${uid}sky)"/>
        <circle cx="720" cy="330" r="230" fill="url(#${uid}glow)"/>
        <circle cx="720" cy="330" r="74" fill="${P.sun}"/>
        <g fill="#fff3e2" opacity=".55">
          <ellipse cx="300" cy="250" rx="220" ry="16"/><ellipse cx="1140" cy="286" rx="260" ry="18"/>
          <ellipse cx="820" cy="220" rx="280" ry="14"/>
        </g>
        <path d="M0 356 q 200 -40 400 -8 q 240 38 480 -4 q 240 -36 560 6 L1440 500 L0 500 Z" fill="${P.far}"/>
        <path d="M0 402 q 280 -28 560 2 q 300 30 880 -10 L1440 500 L0 500 Z" fill="${P.mid}"/>
        <rect y="452" width="1440" height="48" fill="${P.ground}"/>
        ${birds("#8d5f52", 200, 0.5)}
        ${tree(200, 448, 150, "#95755f", "round")}
        ${tree(1240, 452, 170, "#8b6c58", "pine")}
        ${grassTufts("#8d9a6a", 490)}`;
    } else {
      // forest (default)
      art = `
        <rect width="1440" height="500" fill="url(#${uid}sky)"/>
        <circle cx="1060" cy="${P.sunY}" r="150" fill="url(#${uid}glow)"/>
        <circle cx="1060" cy="${P.sunY}" r="44" fill="${P.sun}"/>
        ${clouds(P.cloud, 110, 1)}
        <g opacity=".25" fill="#fff8dc">
          <path d="M1000 90 L1180 420 L840 420 Z"/>
          <path d="M1120 100 L1300 440 L940 440 Z"/>
        </g>
        <path d="M0 336 q 260 -34 520 -6 q 260 28 520 -8 q 220 -30 400 4 L1440 500 L0 500 Z" fill="${P.far}"/>
        <path d="M0 392 q 320 -28 640 2 q 320 28 800 -12 L1440 500 L0 500 Z" fill="${P.mid}"/>
        ${tree(120, 396, 200, "#557d50", "pine")}
        ${tree(250, 404, 150, "#618a58", "round")}
        ${tree(1260, 400, 190, "#4f7749", "pine")}
        ${tree(1130, 410, 130, "#6b9360", "round")}
        <rect y="${groundY}" width="1440" height="100" fill="${P.ground}"/>
        <rect y="${groundY}" width="1440" height="12" fill="#5b8449" opacity=".5"/>
        ${grassTufts("#4f7849", 486)}
        <g fill="#e8b86a" opacity=".9">
          <circle cx="340" cy="462" r="5"/><circle cx="360" cy="470" r="4"/><circle cx="930" cy="458" r="5"/><circle cx="950" cy="468" r="4"/>
        </g>
        <g fill="#f5e6c8" opacity=".8">
          <circle cx="700" cy="440" r="4"/><circle cx="712" cy="452" r="3"/><circle cx="1000" cy="444" r="4"/>
        </g>`;
    }

    return `<div class="scene scene--soft">${`<svg viewBox="0 0 1440 500" preserveAspectRatio="xMidYMid slice" role="img" aria-label="${SCENE_NAMES[kind] || "宝可梦世界"}插画">${defs}${art}<rect width="1440" height="500" fill="none"/></svg>`}</div>`;
  }

  /* ---------------------------------------------------------
     Chrome (header / footer)
     --------------------------------------------------------- */
  function renderHeader() {
    const host = document.getElementById("site-header");
    if (!host) return;
    const page = document.body.dataset.page || "";
    const sp = species();
    const hc = heroChar();
    const meInner = hc
      ? `<img src="assets/portraits/${hc.img}-normal.png" alt="" width="40" height="40"><span class="me-name">${esc(hc.name)}</span>`
      : `<span class="me-name">未选择伙伴</span>`;
    host.innerHTML = `
      <header class="topbar">
        <div class="topbar-inner">
          <a class="brand" href="index.html" aria-label="宝可德语首页">
            <span class="brand-badge"><img src="assets/img/tsitrubeere.png" alt="" width="30" height="30"></span>
            <span class="brand-text"><strong>宝可德语</strong><em>PokéDeutsch</em></span>
          </a>
          <nav class="nav" aria-label="主导航">
            <a href="index.html#kurs" ${page === "home" ? 'aria-current="page"' : ""}>课程</a>
            <a href="aussprache.html" ${page === "aussprache" ? 'aria-current="page"' : ""}>发音</a>
            <a href="charaktere.html" ${page === "charaktere" ? 'aria-current="page"' : ""}>角色</a>
            <a href="woerterbuch.html" ${page === "woerterbuch" ? 'aria-current="page"' : ""}>词表</a>
          </nav>
          <div class="topbar-side">
            <button class="wallet" id="walletBtn" type="button" title="宝可币：答对练习就能得到，只是纪念品">
              <img src="assets/img/poke.png" alt="宝可币" width="20" height="20"><span id="coinCount">${state.coins || 0}</span>
            </button>
            <a class="me ${hc ? "" : "me--empty"}" href="index.html#partner" title="${hc ? esc(hc.name) : "还没有选择伙伴"}">${meInner}</a>
          </div>
        </div>
      </header>`;
    const wb = $("#walletBtn");
    if (wb) wb.addEventListener("click", () => {
      const n = state.coins || 0;
      toast(n >= 300 ? `你已经攒了 ${n} 枚宝可币，可以买好多文柚果了。` : n > 0 ? `宝可币 ${n} 枚。答对练习就能得到，暂时没有商店。` : "还没有宝可币。做对练习就会掉出来。");
    });
    if (!sp) {
      // no profile: hide hero name strip gracefully
    }
  }

  function syncHeaderHeight() {
    const bar = document.querySelector(".topbar");
    if (!bar) return;
    document.documentElement.style.setProperty("--header-h", bar.offsetHeight + "px");
  }

  function renderFooter() {    const host = document.getElementById("site-footer");
    if (!host) return;
    host.innerHTML = `
      <footer class="foot">
        <div class="foot-inner">
          <div class="foot-col">
            <strong>宝可德语 · PokéDeutsch</strong>
            <p>一个用宝可梦世界讲德语的同人学习小站。慢一点，也没关系。</p>
            <p>本站为非官方同人作品，与 Nintendo / Creatures / GAME FREAK 无关。</p>
          </div>
          <div class="foot-col">
            <p>头像素材：<a href="https://sprites.pmdcollab.org/" target="_blank" rel="noreferrer">PMD Sprite Repository</a>（PMDCollab，遵循其使用条款）</p>
            <p>字体：Fredoka / Nunito / ZCOOL KuaiLe / LXGW WenKai（SIL Open Font License）</p>
            <p>钱币与树果图标来自用户提供素材。</p>
          </div>
          <div class="foot-col">
            <p>学习进度只保存在这台设备的浏览器里，不联网、不上传。</p>
            <p><a href="index.html">回到首页</a> · <a href="aussprache.html">发音规则</a> · <a href="woerterbuch.html">全部单词</a></p>
          </div>
        </div>
      </footer>`;
  }

  function initReveal() {
    const items = $$(".reveal");
    if (!items.length) return;
    if (!("IntersectionObserver" in window)) { items.forEach(i => i.classList.add("is-in")); return; }
    const io = new IntersectionObserver(entries => {
      entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add("is-in"); io.unobserve(e.target); } });
    }, { rootMargin: "0px 0px -8% 0px", threshold: 0.06 });
    items.forEach(i => io.observe(i));
  }

  function applySettings() {
    document.body.classList.toggle("hide-zh", !state.settings.zh);
  }

  function init() {
    applySettings();
    renderHeader();
    renderFooter();
    renderWallet();
    initReveal();
    syncHeaderHeight();
    if (document.fonts && document.fonts.ready) document.fonts.ready.then(syncHeaderHeight);
    let rz = null;
    window.addEventListener("resize", () => {
      clearTimeout(rz);
      rz = setTimeout(syncHeaderHeight, 120);
    });
    // global speak delegation
    document.addEventListener("click", e => {
      const btn = e.target.closest(".speak");
      if (btn) {
        e.preventDefault();
        Audio.speak(btn.dataset.speak || "", btn);
      }
    });
    // stop speech on navigation
    window.addEventListener("beforeunload", () => Audio.stop());
  }

  /* ---------------------------------------------------------
     Export
     --------------------------------------------------------- */
  window.App = {
    SPECIES, CHARS, COURSE, SCENE_NAMES,
    get state() { return state; },
    update, save, load,
    species, heroChar, charInfo, portrait,
    replacePH, replacePHZh, esc, norm, pad, lessonPath, lessonPage,
    scene, speakBtn, SPEAK_ICON, addCoins, toast, Audio,
    renderHeader, renderFooter, renderWallet, initReveal, applySettings, syncHeaderHeight,
    $, $$
  };
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", init);
  else init();
})();
