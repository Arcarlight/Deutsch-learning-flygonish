/* ============================================================
   宝可德语 — aussprache.js
   ============================================================ */
(function () {
  "use strict";
  const A = window.App;
  if (!A) return;

  const esc = A.esc;
  const sp = t => A.speakBtn(t, "speak--sm");

  const ALPHABET = [
    ["A a", "a", "Apfel", "苹果"], ["B b", "be", "Buch", "书"], ["C c", "ce", "Computer", "电脑"],
    ["D d", "de", "Danke", "谢谢"], ["E e", "e", "Elefant", "大象"], ["F f", "ef", "Fenster", "窗户"],
    ["G g", "ge", "Garten", "花园"], ["H h", "ha", "Haus", "房子"], ["I i", "i", "Insel", "岛"],
    ["J j", "jot", "Jahr", "年"], ["K k", "ka", "Kind", "孩子"], ["L l", "el", "Lampe", "灯"],
    ["M m", "em", "Meer", "大海"], ["N n", "en", "Name", "名字"], ["O o", "o", "Ofen", "炉子"],
    ["P p", "pe", "Pokémon", "宝可梦"], ["Q q", "ku", "Quelle", "泉"], ["R r", "er", "Regen", "雨"],
    ["S s", "es", "Sonne", "太阳"], ["T t", "te", "Tisch", "桌子"], ["U u", "u", "Uhr", "钟"],
    ["V v", "fau", "Vater", "父亲"], ["W w", "we", "Wald", "森林"], ["X x", "iks", "Xylophon", "木琴"],
    ["Y y", "ypsilon", "Yoga", "瑜伽"], ["Z z", "zet", "Zug", "火车"],
    ["Ä ä", "ä", "Äpfel", "苹果（复数）"], ["Ö ö", "ö", "Öl", "油"], ["Ü ü", "ü", "Übung", "练习"],
    ["ß", "eszett", "heißen", "名叫"]
  ];

  const VOWELS = [
    ["a", "Tag", "Stadt", "a 后面只有一个辅音，通常读长音；后面有两个辅音就短促。"],
    ["e", "Beet", "Bett", "ee 是长音；双写辅音前的 e 短促，像英语 bed 的 e。"],
    ["i", "Liebe", "Mitte", "ie 永远读长音 [iː]；i + 双辅音读短音 [ɪ]。"],
    ["o", "Ofen", "offen", "o 后加 h 或只有一个辅音，读长音 [oː]。"],
    ["u", "Uhr", "Mutter", "uh 是长音 [uː]；短音 [ʊ] 要短而松。"],
    ["ä", "Käse", "Männer", "ä 是 e 的圆唇版，长短规则同 e。"],
    ["ö", "schön", "können", "嘴唇撮圆，同时发 e 的音。短音 [œ]。"],
    ["ü", "müde", "fünf", "嘴唇撮圆，同时发 i 的音。短音 [ʏ]。"]
  ];

  const UMLAUTS = [
    {
      glyph: "ä", ipa: "[ɛː] / [ɛ]",
      tip: "先发「诶」，嘴角稍微向两边拉开。比英语的 a 更靠前、更紧。",
      words: [["Käse", "奶酪"], ["Äpfel", "苹果（复数）"], ["spät", "晚"], ["Mädchen", "女孩"]]
    },
    {
      glyph: "ö", ipa: "[øː] / [œ]",
      tip: "嘴唇像发「喔」一样撮圆，但舌头要放在发「诶」的位置。可以先夸张地把「诶」和「喔」同时说出来。",
      words: [["schön", "美"], ["Öl", "油"], ["können", "能够"], ["zwölf", "十二"]]
    },
    {
      glyph: "ü", ipa: "[yː] / [ʏ]",
      tip: "嘴唇撮圆像「呜」，舌头却停在「衣」的位置。中文母语者常把它读成「乌」，注意舌尖要往前。",
      words: [["müde", "累"], ["Tür", "门"], ["fünf", "五"], ["Bücher", "书（复数）"]]
    }
  ];

  const CONSONANTS = [
    { k: "ch [ç]", t: "在 e、i、ä、ö、ü 后面，或者 -chen 小词里，像轻轻哈气又带一点「希」。", ex: [["ich", "我"], ["nicht", "不"], ["Bücher", "书"], ["Mädchen", "女孩"]] },
    { k: "ch [x]", t: "在 a、o、u、au 后面，像漱口时喉咙后部的摩擦音，汉语拼音的 h 接近但不完全一样。", ex: [["Bach", "小溪"], ["Buch", "书"], ["Nacht", "夜晚"], ["auch", "也"]] },
    { k: "sch [ʃ]", t: "就是英语的 sh / 汉语的「诗」的声母。", ex: [["Schule", "学校"], ["Fisch", "鱼"], ["schön", "美"]] },
    { k: "sp / st", t: "在词首读成 [ʃp] / [ʃt]；在词中、词尾仍读 [sp] / [st]。", ex: [["sprechen", "说"], ["Stadt", "城市"], ["Fenster", "窗户"]] },
    { k: "r [ʁ] / [ɐ]", t: "词首是小舌擦音，像轻轻漱口；在元音后弱化成 [ɐ]，接近轻轻的「啊」。不要像西班牙语那样弹舌。", ex: [["Regen", "雨"], ["rot", "红"], ["der", "这"], ["Kinder", "孩子们"]] },
    { k: "ß [s]", t: "永远读清音 [s]，出现在长元音或双元音后面。瑞士德语里写作 ss。", ex: [["heißen", "名叫"], ["groß", "大"], ["Fuß", "脚"]] },
    { k: "z [ts]", t: "不是英语的 z，而是「 ts 」连读，像汉语「次」的声母。", ex: [["Zeit", "时间"], ["Zug", "火车"], ["zählen", "数"]] },
    { k: "v / w", t: "v 在德语词里读 [f]（Vater），外来词里读 [v]；w 读 [v]，不要读成英语 w。", ex: [["Vater", "父亲"], ["vier", "四"], ["Wasser", "水"], ["Wald", "森林"]] },
    { k: "j [j]", t: "读成英语 yes 的 y，不是「杰」。", ex: [["ja", "是"], ["Jahr", "年"]] },
    { k: "qu [kv]", t: "q 永远和 u 一起，读 [kv]。", ex: [["Quelle", "泉"], ["bequem", "舒服"]] },
    { k: "-e / -en", t: "词尾 -e 读弱化的 [ə]（像轻轻的「呃」），-en 读 [ən] 或只发 [n]。", ex: [["bitte", "请"], ["Name", "名字"], ["kommen", "来"]] },
    { k: "-ig [ɪç]", t: "词尾 -ig 读 [ɪç]，不是 [ɪk]。", ex: [["lustig", "有趣"], ["zwanzig", "二十"]] }
  ];

  const DIPHTHONGS = [
    ["ei / ai", "[aɪ]", "像「爱」", [["eins", "一"], ["mein", "我的"], ["heißen", "名叫"], ["Mai", "五月"]]],
    ["ie", "[iː]", "不是双元音，是长音 i", [["Liebe", "爱"], ["vier", "四"], ["sie", "她"]]],
    ["eu / äu", "[ɔʏ]", "像「奥伊」快速连读", [["Freund", "朋友"], ["Häuser", "房子（复数）"], ["träumen", "做梦"]]],
    ["au", "[aʊ]", "像「奥」", [["Haus", "房子"], ["Baum", "树"], ["auch", "也"]]],
    ["-er", "[ɐ]", "词尾弱化，轻轻「啊」", [["Wasser", "水"], ["Kinder", "孩子们"], ["Lehrer", "老师"]]],
    ["-tion", "[tsi̯oːn]", "外来词后缀", [["Lektion", "课"], ["Nation", "民族"]]]
  ];

  const STRESS = [
    ["词重音", "大多数德语词重读第一个音节：<b>WOH</b>-nen、<b>LER</b>-nen、<b>VA</b>-ter。"],
    ["不可分前缀", "be-、ge-、ver-、ent-、er- 不重读：be-<b>KOMM</b>-en、ver-<b>STE</b>-hen、ge-<b>FAL</b>-len。"],
    ["可分前缀", "auf-、ein-、mit- 这类前缀在动词里要重读：<b>AUF</b>-ste-hen、<b>EIN</b>-la-den。"],
    ["句调", "陈述句和 W-问句结尾降调；是非问句（Kommst du?）结尾升调。"],
    ["节奏", "德语重音之间的轻读音节要读得快一点，整句听起来才像德语，而不是一个一个词往外蹦。"]
  ];

  const TIPS = [
    ["给中文母语者", "德语的 b、d、g 是真正的浊音，声带要振动；中文的「b、d、g」其实是不送气清音。可以把手放在喉咙上感觉振动。另外 ch 既不是汉语拼音的 h，也不是 q。"],
    ["给英语学习者", "德语的 w 读 v、v 读 f、z 读 ts、s + 辅音读 sh；元音要短促干净，不要像英语那样拖成双元音。Name 不是「内姆」，是 [ˈnaːmə]。"],
    ["给日语学习者", "德语的 r 不是日语「ら行」；ü、ö 需要圆唇加前舌，不能读成「乌」「喔」。词尾辅音也要清楚地发出来，don 不要加元音。"],
    ["一句话", "慢一点、短一点、嘴型夸张一点。德语不怕读得笨，只怕读得含糊。"]
  ];

  const QUIZ = [
    { audio: "schön", options: ["schön", "schon"], answer: "schön", zh: "美 / 已经" },
    { audio: "Stadt", options: ["Stadt", "Staat"], answer: "Stadt", zh: "城市 / 国家" },
    { audio: "müde", options: ["müde", "Miete"], answer: "müde", zh: "累 / 房租" },
    { audio: "Buch", options: ["Buch", "Bach"], answer: "Buch", zh: "书 / 小溪" },
    { audio: "vier", options: ["vier", "wir"], answer: "vier", zh: "四 / 我们" },
    { audio: "heißen", options: ["heißen", "heizen"], answer: "heißen", zh: "名叫 / 供暖" },
    { audio: "Kirche", options: ["Kirche", "Kirsche"], answer: "Kirche", zh: "教堂 / 樱桃" }
  ];

  function sectionHead(num, zh, de) {
    return `<div class="pron-head"><span class="sec-num">${num}</span><h2>${zh}</h2><span class="de">${de}</span></div>`;
  }

  function render() {
    const sceneHost = document.getElementById("pageScene");
    if (sceneHost) sceneHost.innerHTML = A.scene("dawn");
    const root = document.getElementById("pronRoot");
    if (!root) return;

    root.innerHTML = `
      <section class="pron-section" id="alphabet">
        ${sectionHead("01", "字母表", "Das Alphabet")}
        <p class="pron-intro">德语有 26 个基本字母，外加三个变元音 ä ö ü 和 ß。字母的「名字」和它在单词里的读音不一定一样——所以下面每个卡片点开后朗读的是例词，不是字母名。</p>
        <div class="alpha-grid">
          ${ALPHABET.map(([ch, name, word, zh]) => `<div class="alpha-card ${/[äöüß]/.test(ch) ? "alpha-card--umlaut" : ""}" data-say="${esc(word)}" role="button" tabindex="0" aria-label="${esc(ch)}，例词 ${esc(word)}">
            ${sp(word)}
            <div class="ch">${esc(ch)}</div>
            <div class="nm">${esc(name)}</div>
            <div class="ex">${esc(word)}<span>${esc(zh)}</span></div>
          </div>`).join("")}
        </div>
        <div class="tip-box"><b>小提示：</b>德语名词首字母永远大写，所以看见大写字母就知道「这是一个名词」。读的时候不用停顿，直接连着读。</div>
      </section>

      <section class="pron-section" id="vowels">
        ${sectionHead("02", "元音的长与短", "Lange und kurze Vokale")}
        <p class="pron-intro">这是德语发音里最值得花时间的一件事。同一个字母，读长音还是短音，意思可能完全不同：<b>Stadt</b>（城市）和 <b>Staat</b>（国家）只差一个音的长短。</p>
        <div class="table-wrap table-wrap--pron">
          <table class="pron-table">
            <thead><tr><th>元音</th><th>长音例词</th><th>短音例词</th><th>怎么判断</th></tr></thead>
            <tbody>${VOWELS.map(([v, l, sh, tip]) => `<tr><td><b>${v}</b></td><td><b>${l}</b> ${sp(l)}</td><td><b>${sh}</b> ${sp(sh)}</td><td>${tip}</td></tr>`).join("")}</tbody>
          </table>
        </div>
        <div class="tip-box" style="margin-top:16px">
          <b>懒人判断法：</b>看元音后面有几个辅音字母。一个辅音（或没有辅音）→ 倾向长音；两个以上辅音 → 倾向短音。另外，元音后面有 <b>h</b>、或者元音双写、或者 <b>ie</b>，几乎都是长音。
        </div>
      </section>

      <section class="pron-section" id="umlaut">
        ${sectionHead("03", "三个变元音", "ä · ö · ü")}
        <p class="pron-intro">变元音是德语的招牌。ä 最接近「诶」；ö 和 ü 需要「嘴唇做喔/乌的形状，舌头做诶/衣的动作」。刚开始会有点别扭，慢慢就好了。</p>
        <div class="sound-grid">
          ${UMLAUTS.map(u => `<article class="sound-card">
            <div class="glyph">${u.glyph}<small>${u.ipa}</small></div>
            <p>${esc(u.tip)}</p>
            <div class="examples">${u.words.map(([w, zh]) => `<div class="ex"><b>${w}</b>${sp(w)}<span>${zh}</span></div>`).join("")}</div>
          </article>`).join("")}
        </div>
        <div class="tip-box"><b>练习：</b>先发「衣——」，保持舌头不动，把嘴唇慢慢撮成圆形，就得到 ü。ö 同理：先发「诶——」，再撮圆嘴唇。</div>
      </section>

      <section class="pron-section" id="consonants">
        ${sectionHead("04", "容易读错的辅音", "Konsonanten")}
        <p class="pron-intro">德语的辅音很「实」，该发的都要发出来。下面这些是初学者最常卡住的地方。</p>
        <div class="rule-list">
          ${CONSONANTS.map(c => `<article class="rule-card">
            <div class="rk">${esc(c.k)}</div>
            <div class="rt">${esc(c.t)}
              <div class="ex-line">${c.ex.map(([w, zh]) => `<span class="e">${w}</span>${sp(w)}<span style="color:var(--ink-3);font-size:12px">${zh}</span>`).join("")}</div>
            </div>
          </article>`).join("")}
        </div>
      </section>

      <section class="pron-section" id="diphthongs">
        ${sectionHead("05", "组合与双元音", "Vokalverbindungen")}
        <p class="pron-intro">两个元音字母碰在一起，很多情况下读成一个新的音。</p>
        <div class="table-wrap table-wrap--pron">
          <table class="pron-table">
            <thead><tr><th>组合</th><th>音标</th><th>感觉</th><th>例词</th></tr></thead>
            <tbody>${DIPHTHONGS.map(([k, ipa, feel, words]) => `<tr><td><b>${k}</b></td><td>${ipa}</td><td>${feel}</td><td>${words.map(([w, zh]) => `<div style="display:inline-flex;align-items:center;gap:4px;margin-right:10px"><b>${w}</b>${sp(w)}<span style="color:var(--ink-3);font-size:11.5px">${zh}</span></div>`).join("")}</td></tr>`).join("")}</tbody>
          </table>
        </div>
      </section>

      <section class="pron-section" id="stress">
        ${sectionHead("06", "重音与语调", "Betonung")}
        <p class="pron-intro">重音放错，德国人还是能听懂，但会有点费劲。记住几条大原则就够用了。</p>
        <div class="rule-list">
          ${STRESS.map(([k, t]) => `<article class="rule-card"><div class="rk">${k}</div><div class="rt">${t}</div></article>`).join("")}
        </div>
      </section>

      <section class="pron-section" id="quiz">
        ${sectionHead("07", "听一听，选一选", "Hör zu!")}
        <p class="pron-intro">点喇叭听一个词，选出你听到的拼写。长短元音和变元音是重点。</p>
        <div class="pron-quiz">
          ${QUIZ.map((q, i) => `<div class="quiz-item" data-q="${i}">
            <span class="qnum">${String(i + 1).padStart(2, "0")}</span>
            ${A.speakBtn(q.audio, "speak--quiz")}
            <div class="opts">${shuffle(q.options).map(o => `<button class="opt" type="button" data-v="${esc(o)}">${esc(o)}</button>`).join("")}</div>
            <div class="qfb"></div>
          </div>`).join("")}
        </div>
        <div class="tip-box" style="margin-top:16px">如果听不出区别，先回上面的表，把两个词都读几遍，再回来听。耳朵需要一点时间。</div>
      </section>

      <section class="pron-section" id="tips">
        ${sectionHead("08", "给不同母语者的提醒", "Tipps")}
        <div class="rule-list">
          ${TIPS.map(([k, t]) => `<article class="rule-card"><div class="rk">${k}</div><div class="rt">${t}</div></article>`).join("")}
        </div>
        <div style="margin-top:28px;display:flex;gap:12px;flex-wrap:wrap">
          <a class="btn btn-primary" href="index.html#kurs">去上第一课 →</a>
          <a class="btn btn-ghost" href="woerterbuch.html">翻翻单词表</a>
        </div>
      </section>`;

    bind();
  }

  function shuffle(arr) {
    const a = arr.slice();
    for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; }
    return a;
  }

  function bind() {
    // alphabet cards: click speaks
    document.querySelectorAll(".alpha-card").forEach(card => {
      const say = card.dataset.say;
      card.addEventListener("click", e => {
        if (e.target.closest(".speak")) return;
        A.Audio.speak(say, card.querySelector(".speak"));
      });
      card.addEventListener("keydown", e => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); A.Audio.speak(say, card.querySelector(".speak")); } });
    });
    // quiz
    document.querySelectorAll(".quiz-item").forEach(item => {
      const q = QUIZ[Number(item.dataset.q)];
      const fb = item.querySelector(".qfb");
      item.querySelectorAll(".opt").forEach(btn => {
        btn.addEventListener("click", () => {
          if (item.dataset.done) return;
          if (btn.dataset.v === q.answer) {
            item.dataset.done = "1";
            item.querySelectorAll(".opt").forEach(b => { b.disabled = true; b.classList.remove("is-wrong"); });
            btn.classList.add("is-correct");
            fb.className = "qfb ok";
            fb.textContent = `Richtig! 你听到的是 ${q.audio}（${q.zh}）。`;
          } else {
            btn.classList.add("is-wrong");
            btn.disabled = true;
            fb.className = "qfb no";
            fb.textContent = "再听一遍？";
            A.Audio.speak(q.audio, item.querySelector(".speak"));
          }
        });
      });
    });
  }

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", render);
  else render();
})();
