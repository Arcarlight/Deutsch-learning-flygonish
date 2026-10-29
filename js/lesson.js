/* ============================================================
   宝可德语 — lesson.js
   ============================================================ */
(function () {
  "use strict";
  const A = window.App;
  if (!A) return;

  const params = new URLSearchParams(location.search);
  let lessonId = parseInt(params.get("l") || "", 10);
  if (!lessonId || lessonId < 1 || lessonId > 99) lessonId = A.state.lastLesson || 1;

  let L = null;
  const exState = {};   // idx -> { ok, attempts, awarded }
  const els = {};

  const TYPE_LABEL = {
    choice: "选择", fill: "填空", order: "语序", match: "配对", listen: "听力", truefalse: "判断"
  };

  /* ---------------- data loading ---------------- */
  function injectLesson(id) {
    return new Promise(resolve => {
      window.LESSON = undefined;
      const s = document.createElement("script");
      s.src = A.lessonPath(id);
      s.onload = () => resolve(window.LESSON || null);
      s.onerror = () => resolve(null);
      document.head.appendChild(s);
    });
  }

  function boot() {
    injectLesson(lessonId).then(data => {
      if (!data) { renderMissing(); return; }
      L = data;
      document.title = `${L.title} · ${L.subtitle} · 宝可德语`;
      A.update(st => {
        if (!st.visited.includes(lessonId)) st.visited.push(lessonId);
        st.lastLesson = lessonId;
      });
      restoreAnswers();
      render();
    });
  }

  function restoreAnswers() {
    const saved = A.state.answers[lessonId] || {};
    Object.keys(saved).forEach(k => {
      const v = saved[k];
      if (v && v.ok) exState[Number(k)] = { ok: true, attempts: v.attempts || 1, awarded: true };
    });
  }
  function persist() {
    A.update(st => {
      st.answers[lessonId] = {};
      Object.keys(exState).forEach(k => {
        st.answers[lessonId][k] = { ok: !!exState[k].ok, attempts: exState[k].attempts || 0 };
      });
    });
  }

  function renderMissing() {
    const root = document.getElementById("lessonRoot");
    root.innerHTML = `<div class="container" style="padding:80px 0 40px;text-align:center">
      <p class="eyebrow">Hoppla · 找不到这一课</p>
      <h1 style="margin-top:12px">这一页还是空的</h1>
      <p style="color:var(--ink-2);margin-top:10px">也许课文还没有写到这里，也许链接里的课号不对。</p>
      <p style="margin-top:22px"><a class="btn btn-primary" href="index.html#kurs">回到课程地图</a></p>
    </div>`;
  }

  /* ---------------- helpers ---------------- */
  const mdInline = s => A.esc(s)
    .replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>")
    .replace(/`(.+?)`/g, "<code>$1</code>");
  const charName = id => {
    const c = A.charInfo(id);
    return c ? c.name : id;
  };
  const lineHTML = ln => {
    if (ln.n) return `<div class="line line--narr">${mdInline(A.replacePH(ln.n))}</div>`;
    const c = A.charInfo(ln.who) || { name: ln.who, de: "", color: "var(--sea)" };
    const side = ln.who === "hero" ? "hero" : "npc";
    const de = A.replacePH(ln.de);
    const zh = A.replacePHZh(ln.zh);
    const whoLabel = ln.who === "hero" ? "DU" : c.de;
    return `<div class="line line--${side}" style="--accent:${c.color}">
      ${A.portrait(ln.who, ln.emo)}
      <div class="bubble">
        <div class="bubble-who">${A.esc(c.name)}${whoLabel ? `<small>${A.esc(whoLabel)}</small>` : ""}</div>
        <div class="bubble-de" lang="de">${A.esc(de)}${A.speakBtn(de)}</div>
        <div class="bubble-zh">${A.esc(zh)}</div>
      </div>
    </div>`;
  };

  /* ---------------- render ---------------- */
  function render() {
    const root = document.getElementById("lessonRoot");
    root.innerHTML = `
      ${heroHTML()}
      ${sectionNavHTML()}
      <div class="lesson-body">
        ${warmupHTML()}
        ${vocabHTML()}
        ${textsHTML()}
        ${grammarHTML()}
        ${wordlistHTML()}
        ${exercisesHTML()}
        ${worldHTML()}
      </div>`;
    document.getElementById("lessonFoot").innerHTML = footHTML();
    els.ring = document.querySelector(".lh-progress .ring");
    els.progText = document.querySelector(".lh-prog-text");
    els.zhToggle = document.querySelector(".zh-toggle");
    bindToggles();
    bindScrollSpy();
    bindWarmup();
    bindExercises();
    bindFoot();
    updateProgress(false);
    A.initReveal();
    // 深链接：内容异步渲染完成后再跳到锚点
    if (location.hash) {
      const target = document.querySelector(location.hash);
      if (target) setTimeout(() => target.scrollIntoView({ block: "start" }), 60);
    }
  }

  function heroHTML() {
    const sp = A.species();
    const noHero = !sp
      ? `<p class="tag tag--sand" style="margin-top:14px">还没有选择伙伴 · 课文里暂时用 Lina · <a href="index.html#kurs" style="color:inherit;text-decoration:underline">去首页选一只</a></p>`
      : "";
    return `<header class="lesson-hero">
      <div class="scene-host" style="position:absolute;inset:0;z-index:0">${A.scene(L.scene)}</div>
      <div class="lesson-hero-inner">
        <p class="eyebrow">Kapitel ${A.pad(L.id)} · Lektion</p>
        <h1>${A.esc(L.title)}</h1>
        <p class="lh-sub">${A.esc(L.subtitle)}</p>
        <p class="lh-blurb">${A.esc(L.blurb)}</p>
        <div class="lh-row">
          <span class="lh-progress" title="练习进度"><span class="ring" style="--p:0"></span><span class="lh-prog-text">练习 0/${L.exercises.length}</span></span>
          <button class="zh-toggle" type="button" aria-pressed="${A.state.settings.zh ? "true" : "false"}">中文翻译 <span class="sw"></span></button>
          <span class="tag">${A.SCENE_NAMES[L.scene] || "宝可梦世界"}</span>
        </div>
        <div class="goal-chips">${L.goal.map(g => `<span class="tag">${A.esc(g)}</span>`).join("")}</div>
        ${noHero}
      </div>
    </header>`;
  }

  const CORE_SECTIONS = [
    ["woerter", "生词", "Wörter", "01"],
    ["texte", "课文", "Texte", "02"],
    ["grammatik", "语法", "Grammatik", "03"],
    ["wortliste", "单词表", "Wortliste", "04"],
    ["uebungen", "练习", "Übungen", "05"]
  ];
  function sectionList() {
    return (L && L.warmup ? [["warmup", "热身", "Vorgespräch", "00"]] : []).concat(CORE_SECTIONS);
  }

  function sectionNavHTML() {
    const list = sectionList();
    return `<nav class="section-nav" aria-label="本课目录"><div class="section-nav-inner">
      ${list.map(([id, zh, de, n], i) => `<a class="snav ${i === 0 ? "is-active" : ""}" href="#${id}"><span class="n">${n}</span>${zh}<span style="opacity:.55;font-family:var(--font-de);font-size:11px">${de}</span></a>`).join("")}
    </div></nav>`;
  }

  function warmupHTML() {
    const w = L.warmup;
    if (!w) return "";
    const forms = w.forms;
    return `<section class="section-block section-warmup" id="warmup">
      <div class="sec-head">
        <span class="sec-num">00</span>
        <div class="sec-title"><span class="sec-de">Vorgespräch · 先听一句</span><h2>${A.esc(w.title)}</h2></div>
      </div>
      <p class="sec-lead">${A.esc(w.lead || "先不用背单词。听三句话，感受一下这一课的句型和动词变化。")}</p>
      <div class="warmup-card">
        ${w.pattern ? `<div class="warmup-pattern"><span class="wp-label">句型</span><span class="wp-text" lang="de">${A.esc(w.pattern)}</span></div>` : ""}
        <div class="warmup-body">
          <div class="lines">${(w.lines || []).map(lineHTML).join("")}</div>
          ${forms ? `<div class="form-box">
            <div class="form-title">本课形式 · <b lang="de">${A.esc(forms.verb || "")}</b></div>
            <div class="form-grid">
              ${(forms.items || []).map(([label, form, ex]) => `<button class="form-chip" type="button" data-say="${A.esc(A.replacePH(ex))}" title="点一下听例句">
                <span class="pr">${A.esc(label)}</span>
                <b lang="de">${A.esc(form)}</b>
                <small lang="de">${A.esc(A.replacePH(ex))}</small>
              </button>`).join("")}
            </div>
            <div class="form-hint">点一下，听例句。</div>
          </div>` : ""}
        </div>
      </div>
    </section>`;
  }

  function bindWarmup() {
    document.querySelectorAll(".form-chip").forEach(chip => {
      chip.addEventListener("click", () => {
        chip.classList.add("is-saying");
        A.Audio.speak(chip.dataset.say || "");
        setTimeout(() => chip.classList.remove("is-saying"), 900);
      });
    });
  }

  function vocabHTML() {
    return `<section class="section-block" id="woerter">
      <div class="sec-head">
        <span class="sec-num">01</span>
        <div class="sec-title"><span class="sec-de">Wörter · ${L.vocab.length} 个</span><h2>这一课的生词</h2></div>
      </div>
      <p class="sec-lead">先混个脸熟。点喇叭听发音，例句不用急着背。</p>
      <div class="vocab-grid">
        ${L.vocab.map(v => `<article class="vocab-card">
          <div class="vc-top">
            <div style="min-width:0">
              <div class="vc-de" lang="de">${v.img ? `<img class="vc-icon" src="${A.esc(v.img)}" alt="" width="26" height="26">` : ""}${A.esc(v.de)} ${A.speakBtn(v.de)}</div>
              ${v.ipa ? `<div class="vc-ipa">${A.esc(v.ipa)}</div>` : ""}
            </div>
            <span class="tag vc-pos">${A.esc(v.pos || "")}</span>
          </div>
          <div class="vc-zh">${A.esc(v.zh)}</div>
          ${v.note ? `<div class="vc-note">${mdInline(v.note)}</div>` : ""}
          ${v.ex ? `<div class="vc-ex"><div class="ex-de">${A.esc(A.replacePH(v.ex.de))} ${A.speakBtn(A.replacePH(v.ex.de))}</div><div class="ex-zh">${A.esc(A.replacePHZh(v.ex.zh))}</div></div>` : ""}
        </article>`).join("")}
      </div>
    </section>`;
  }

  function textsHTML() {
    return `<section class="section-block" id="texte">
      <div class="sec-head">
        <span class="sec-num">02</span>
        <div class="sec-title"><span class="sec-de">Texte · ${L.texts.length} 篇</span><h2>课文</h2></div>
      </div>
      <p class="sec-lead">先听一遍，再对着中文读一遍。看不懂的地方，下面还有语法。</p>
      ${L.texts.map((t, i) => `<article class="text-card reveal">
        <div class="text-head">
          <h3>${A.esc(t.title)}</h3>
          ${t.subtitle ? `<span class="th-sub">${A.esc(t.subtitle)}</span>` : ""}
          <span class="th-count">Text ${i + 1} / ${L.texts.length}</span>
        </div>
        <div class="lines">${t.lines.map(lineHTML).join("")}</div>
      </article>`).join("")}
    </section>`;
  }

  function grammarHTML() {
    return `<section class="section-block" id="grammatik">
      <div class="sec-head">
        <span class="sec-num">03</span>
        <div class="sec-title"><span class="sec-de">Grammatik</span><h2>语法</h2></div>
      </div>
      <p class="sec-lead">不用一次记住。先看懂，再回课文里找一遍。</p>
      ${L.grammar.map(g => `<article class="grammar-card reveal">
        <h3>${A.esc(g.title)}</h3>
        <div class="grammar-intro">${mdInline(g.intro)}</div>
        ${g.table ? `<div class="table-wrap"><table class="grammar">
          <thead><tr>${g.table.head.map(h => `<th>${A.esc(h)}</th>`).join("")}</tr></thead>
          <tbody>${g.table.rows.map(r => `<tr>${r.map(c => `<td>${mdInline(A.replacePH(c))}</td>`).join("")}</tr>`).join("")}</tbody>
        </table></div>` : ""}
        ${g.notes && g.notes.length ? `<ul class="grammar-notes">${g.notes.map(n => `<li>${mdInline(n)}</li>`).join("")}</ul>` : ""}
        ${g.examples && g.examples.length ? `<div class="grammar-examples">${g.examples.map(x => `<div class="gex"><b lang="de">${A.esc(A.replacePH(x.de))}</b>${A.speakBtn(A.replacePH(x.de))}<span>${A.esc(A.replacePHZh(x.zh))}</span></div>`).join("")}</div>` : ""}
      </article>`).join("")}
    </section>`;
  }

  function wordlistHTML() {
    return `<section class="section-block" id="wortliste">
      <div class="sec-head">
        <span class="sec-num">04</span>
        <div class="sec-title"><span class="sec-de">Wortliste · ${L.vocab.length} 词</span><h2>单词合集</h2></div>
      </div>
      <p class="sec-lead">可以打印出来贴在墙上。名词记得连冠词一起记：der / die / das。</p>
      <div class="wordlist-card">
        <div class="wl-grid">
          ${L.vocab.map(v => `<div class="wl-row">
            <span class="wl-de" lang="de">${A.esc(v.de)}${v.ipa ? `<span class="wl-ipa">${A.esc(v.ipa)}</span>` : ""}</span>
            <span class="wl-zh">${A.esc(v.zh)}</span>
          </div>`).join("")}
        </div>
        <div class="wl-foot"><button class="btn btn-ghost btn-sm" type="button" id="printList">打印这一课的单词表</button></div>
      </div>
    </section>`;
  }

  function exercisesHTML() {
    return `<section class="section-block" id="uebungen">
      <div class="sec-head">
        <span class="sec-num">05</span>
        <div class="sec-title"><span class="sec-de">Übungen · ${L.exercises.length} 题</span><h2>练习</h2></div>
      </div>
      <p class="sec-lead">第一次就答对，可以拿到 10 枚宝可币；再试一次也有 3 枚。答错不扣任何东西。</p>
      <div class="ex-wrap">${L.exercises.map((e, i) => exerciseShell(e, i)).join("")}</div>
      <div id="exSummary"></div>
    </section>`;
  }

  function exerciseShell(e, i) {
    const q = A.replacePH(e.q || "");
    return `<article class="exercise" data-ex="${i}" id="ex-${i}">
      <div class="ex-head">
        <span class="ex-num">${i + 1}</span>
        <span class="tag ex-type">${TYPE_LABEL[e.type] || e.type}</span>
        <span class="ex-solved-mark"></span>
      </div>
      <p class="ex-q">${A.esc(q)}</p>
      <div class="ex-body"></div>
      <div class="feedback"></div>
    </article>`;
  }

  function worldHTML() {
    const friends = (L.friend || []).filter(id => A.CHARS[id]);
    return `<section class="section-block" id="welt">
      <div class="sec-head">
        <span class="sec-num">✦</span>
        <div class="sec-title"><span class="sec-de">Die Welt</span><h2>世界小记</h2></div>
      </div>
      <div class="world-note">
        <article class="culture-card">
          <span class="ck">WALDRAND · 林缘村</span>
          <h3>${A.esc(L.culture.title)}</h3>
          <p>${A.esc(L.culture.text)}</p>
        </article>
        <article class="friend-card">
          <h3>${friends.length ? "这一课认识的新朋友" : "这一课没有新朋友"}</h3>
          ${friends.length ? `<div class="friend-list">${friends.map(id => {
            const c = A.CHARS[id];
            return `<div class="friend-row">${A.portrait(id, "normal")}<div><strong>${A.esc(c.name)}</strong><small>${A.esc(c.de)} · ${A.esc(c.species)}</small></div><span class="tag tag--leaf fr-tag">新朋友</span></div>`;
          }).join("")}</div>` : `<p class="no-friend">都是已经认识的人了。翻翻前面的课文，或者去<a href="charaktere.html" style="color:var(--sea)">角色图鉴</a>看看大家。</p>`}
        </article>
      </div>
    </section>`;
  }

  function footHTML() {
    const prev = A.COURSE.find(c => c.id === lessonId - 1);
    const next = A.COURSE.find(c => c.id === lessonId + 1);
    return `<footer class="lesson-foot">
      ${prev ? `<a class="lesson-nav-btn" href="${A.lessonPage(prev.id)}"><small>← 上一课</small><strong>${A.esc(prev.title)}</strong></a>` : `<span class="lesson-nav-btn is-empty"><small>← 上一课</small><strong>已经是第一课</strong></span>`}
      ${next ? `<a class="lesson-nav-btn is-right" href="${A.lessonPage(next.id)}"><small>下一课 →</small><strong>${A.esc(next.title)}</strong></a>` : `<a class="lesson-nav-btn is-right" href="index.html#kurs"><small>回到地图 →</small><strong>全部课程</strong></a>`}
      <div id="completeCard"></div>
      <div class="lesson-nav-btn" style="flex:1 1 100%;flex-direction:row;align-items:center;justify-content:space-between;gap:12px">
        <span style="font-size:12.5px;color:var(--ink-3)">读完了想再来一遍？</span>
        <button class="btn btn-ghost btn-sm" type="button" id="resetLesson">重做本课练习</button>
      </div>
    </footer>`;
  }

  /* ---------------- interactions ---------------- */
  function bindToggles() {
    const btn = els.zhToggle;
    if (!btn) return;
    btn.addEventListener("click", () => {
      const show = !A.state.settings.zh;
      A.update(s => { s.settings.zh = show; });
      A.applySettings();
      btn.setAttribute("aria-pressed", show ? "true" : "false");
    });
    const print = document.getElementById("printList");
    if (print) print.addEventListener("click", () => {
      document.body.classList.add("print-words");
      window.print();
      setTimeout(() => document.body.classList.remove("print-words"), 800);
    });
  }

  function bindScrollSpy() {
    const links = A.$$(".snav");
    const map = new Map();
    links.forEach(l => map.set(l.getAttribute("href").slice(1), l));
    if (!("IntersectionObserver" in window)) return;
    const io = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          links.forEach(l => l.classList.remove("is-active"));
          const l = map.get(e.target.id);
          if (l) l.classList.add("is-active");
        }
      });
    }, { rootMargin: "-25% 0px -60% 0px", threshold: 0 });
    sectionList().forEach(([id]) => { const el = document.getElementById(id); if (el) io.observe(el); });
  }

  /* ---------------- exercises ---------------- */
  function attemptsOf(i) { return (exState[i] && exState[i].attempts) || 0; }
  function isSolved(i) { return !!(exState[i] && exState[i].ok); }

  function fb(el, ok, html) {
    el.className = "feedback is-show " + (ok ? "is-ok" : "is-no");
    el.innerHTML = html;
  }

  function setSolvedUI(i) {
    const card = document.getElementById("ex-" + i);
    if (!card) return;
    card.classList.add("is-solved");
    const mark = card.querySelector(".ex-solved-mark");
    if (mark) mark.textContent = "✓ 已答对";
  }

  function award(i, firstTry) {
    const st = exState[i];
    if (st.awarded) return;
    st.awarded = true;
    const n = firstTry ? 10 : 3;
    A.addCoins(n);
    A.toast(`+${n} 宝可币`);
  }

  function solve(i, opts) {
    const st = exState[i] || (exState[i] = { ok: false, attempts: 0 });
    if (st.ok) return;
    st.ok = true;
    if (!st.attempts) st.attempts = 1;
    setSolvedUI(i);
    if (!opts || opts.reward !== false) award(i, st.attempts === 1);
    persist();
    updateProgress(true);
  }

  function wrong(i) {
    const st = exState[i] || (exState[i] = { ok: false, attempts: 0 });
    st.attempts += 1;
    persist();
    return st.attempts;
  }

  function bindExercises() {
    L.exercises.forEach((e, i) => {
      const card = document.getElementById("ex-" + i);
      if (!card) return;
      const body = card.querySelector(".ex-body");
      const feedback = card.querySelector(".feedback");
      const solved = isSolved(i);
      if (solved) {
        setSolvedUI(i);
        card.querySelector(".ex-solved-mark").textContent = "✓ 已答对";
      }
      const api = { card, body, feedback, i, solved };
      const fn = { choice: renderChoice, fill: renderFill, order: renderOrder, match: renderMatch, listen: renderListen, truefalse: renderTF }[e.type];
      if (fn) fn(e, api);
    });
  }

  function explainHTML(e) {
    const base = e.explain ? mdInline(e.explain) : "";
    return base ? `<div style="margin-top:6px">${base}</div>` : "";
  }

  function renderChoice(e, api) {
    const letters = ["A", "B", "C", "D", "E"];
    api.body.innerHTML = `<div class="opt-list">${e.options.map((o, k) => `<button class="opt" type="button" data-k="${k}"><span class="k">${letters[k]}</span><span>${A.esc(o)}</span></button>`).join("")}</div>`;
    if (api.solved) api.body.querySelectorAll(".opt").forEach(b => { b.disabled = true; if (Number(b.dataset.k) === e.answer) b.classList.add("is-correct"); });
    api.body.querySelectorAll(".opt").forEach(btn => {
      btn.addEventListener("click", () => {
        if (isSolved(api.i)) return;
        const k = Number(btn.dataset.k);
        if (k === e.answer) {
          api.body.querySelectorAll(".opt").forEach(b => { b.disabled = true; b.classList.remove("is-wrong"); });
          btn.classList.add("is-correct");
          solve(api.i, { reward: true });
          fb(api.feedback, true, "Richtig! 答对了。" + explainHTML(e));
        } else {
          const n = wrong(api.i);
          btn.classList.add("is-wrong");
          btn.disabled = true;
          fb(api.feedback, false, n >= 2 ? "还不对。再想想课文里的句子。" : "不对哦，再试一次。");
        }
      });
    });
  }

  function renderFill(e, api) {
    api.body.innerHTML = `<div class="fill-row">
      <input type="text" autocomplete="off" spellcheck="false" placeholder="在这里填写德语" aria-label="填空答案">
      <button class="btn btn-sm btn-primary" type="button">检查</button>
    </div>${e.hint ? `<div class="ex-hint">提示：${A.esc(e.hint)}</div>` : ""}`;
    const input = api.body.querySelector("input");
    const btn = api.body.querySelector("button");
    const answers = (e.answer || []).map(a => A.norm(A.replacePH(a)));
    if (api.solved) { input.value = A.replacePH(e.answer[0]); input.disabled = true; btn.disabled = true; input.classList.add("is-correct"); fb(api.feedback, true, "Richtig!" + explainHTML(e)); }
    const check = () => {
      if (isSolved(api.i)) return;
      const v = A.norm(input.value);
      if (!v) { input.focus(); return; }
      if (answers.includes(v)) {
        input.classList.remove("is-wrong");
        input.classList.add("is-correct");
        input.disabled = true; btn.disabled = true;
        solve(api.i, { reward: true });
        fb(api.feedback, true, "Richtig! " + explainHTML(e));
      } else {
        input.classList.remove("is-correct");
        input.classList.add("is-wrong");
        const n = wrong(api.i);
        fb(api.feedback, false, n >= 3 ? `再试一次：正确答案是 <b>${A.esc(e.answer[0])}</b>。` + explainHTML(e) : "再检查一下拼写？");
        if (n >= 3) A.toast("再试一次吧，答案就在提示里。");
      }
    };
    btn.addEventListener("click", check);
    input.addEventListener("keydown", ev => { if (ev.key === "Enter") { ev.preventDefault(); check(); } });
  }

  function shuffle(arr) {
    const a = arr.slice();
    for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; }
    return a;
  }

  function renderOrder(e, api) {
    const answer = A.replacePH(e.answer);
    api.body.innerHTML = `<div class="order-area" aria-label="你的句子"></div>
      <div class="order-bank">${shuffle(e.words.map(w => A.replacePH(w))).map(w => `<button class="word-chip" type="button" data-w="${A.esc(w)}">${A.esc(w)}</button>`).join("")}</div>
      <div class="ex-actions"><button class="btn btn-sm btn-primary" type="button">检查</button><button class="btn btn-sm btn-ghost" type="button" data-clear>清空</button></div>`;
    const area = api.body.querySelector(".order-area");
    const bank = api.body.querySelector(".order-bank");
    const checkBtn = api.body.querySelector(".btn-primary");
    const clearBtn = api.body.querySelector("[data-clear]");
    const chips = () => Array.from(area.querySelectorAll(".word-chip"));
    function addChip(w) {
      const b = document.createElement("button");
      b.type = "button"; b.className = "word-chip"; b.dataset.w = w; b.textContent = w;
      b.addEventListener("click", () => { b.remove(); checkBtn.disabled = false; area.classList.remove("is-correct"); });
      area.appendChild(b);
    }
    bank.querySelectorAll(".word-chip").forEach(chip => {
      chip.addEventListener("click", () => {
        if (isSolved(api.i)) return;
        addChip(chip.dataset.w);
        chip.disabled = true;
        chip.style.opacity = "0.35";
      });
    });
    clearBtn.addEventListener("click", () => {
      if (isSolved(api.i)) return;
      area.innerHTML = "";
      bank.querySelectorAll(".word-chip").forEach(c => { c.disabled = false; c.style.opacity = ""; });
      area.classList.remove("is-correct", "is-wrong");
    });
    checkBtn.addEventListener("click", () => {
      if (isSolved(api.i)) return;
      const got = chips().map(c => c.textContent).join(" ");
      if (!got) return;
      if (A.norm(got) === A.norm(answer)) {
        area.classList.add("is-correct");
        chips().forEach(c => c.disabled = true);
        checkBtn.disabled = true; clearBtn.disabled = true;
        solve(api.i);
        fb(api.feedback, true, "Richtig! 语序正确：" + `<b>${A.esc(answer)}</b>` + explainHTML(e));
      } else {
        area.classList.add("is-wrong");
        wrong(api.i);
        fb(api.feedback, false, "顺序还不对。德语的动词通常在第二位。");
        setTimeout(() => area.classList.remove("is-wrong"), 500);
      }
    });
    if (api.solved) {
      area.textContent = answer;
      area.style.fontFamily = "var(--font-de)";
      area.style.fontWeight = "700";
      fb(api.feedback, true, "已答对：" + `<b>${A.esc(answer)}</b>` + explainHTML(e));
      bank.style.display = "none";
      checkBtn.disabled = true; clearBtn.disabled = true;
    }
  }

  function renderMatch(e, api) {
    const pairs = e.pairs.map(([de, zh]) => [A.replacePH(de), A.replacePH(zh)]);
    const left = pairs.map((p, k) => ({ k, text: p[0] }));
    const right = shuffle(pairs.map((p, k) => ({ k, text: p[1] })));
    api.body.innerHTML = `<div class="match-cols">
      <div class="match-col">${left.map(x => `<button class="match-btn" type="button" data-side="l" data-k="${x.k}">${A.esc(x.text)}</button>`).join("")}</div>
      <div class="match-col">${right.map(x => `<button class="match-btn match-btn--zh" type="button" data-side="r" data-k="${x.k}">${A.esc(x.text)}</button>`).join("")}</div>
    </div>`;
    let picked = null, matched = 0;
    const all = () => Array.from(api.body.querySelectorAll(".match-btn"));
    if (api.solved) {
      all().forEach(b => { b.classList.add("is-matched"); b.disabled = true; });
      fb(api.feedback, true, "已配对。" + explainHTML(e));
    }
    api.body.querySelectorAll(".match-btn").forEach(btn => {
      btn.addEventListener("click", () => {
        if (isSolved(api.i) || btn.classList.contains("is-matched")) return;
        if (!picked) {
          if (btn.dataset.side !== "l") return;
          picked = btn; btn.classList.add("is-picked");
          return;
        }
        if (btn.dataset.side !== "r") { picked.classList.remove("is-picked"); picked = btn; btn.classList.add("is-picked"); return; }
        if (btn.dataset.k === picked.dataset.k) {
          picked.classList.remove("is-picked");
          picked.classList.add("is-matched");
          btn.classList.add("is-matched");
          picked.disabled = true; btn.disabled = true;
          picked = null; matched++;
          if (matched === pairs.length) {
            solve(api.i);
            fb(api.feedback, true, "Alle richtig! 全部配对成功。" + explainHTML(e));
          } else {
            fb(api.feedback, true, `配对成功，还剩 ${pairs.length - matched} 组。`);
          }
        } else {
          const p = picked;
          p.classList.remove("is-picked");
          p.classList.add("is-wrong"); btn.classList.add("is-wrong");
          wrong(api.i);
          fb(api.feedback, false, "这两张不是一对，再看看。");
          setTimeout(() => { p.classList.remove("is-wrong"); btn.classList.remove("is-wrong"); }, 480);
          picked = null;
        }
      });
    });
  }

  function renderListen(e, api) {
    const letters = ["A", "B", "C", "D"];
    api.body.innerHTML = `<div style="display:flex;align-items:center;gap:10px;margin-bottom:12px">
      <button class="btn btn-sm btn-sand" type="button" data-play>▶ 再听一遍</button>
      <span style="font-size:12.5px;color:var(--ink-3)">点一下就开始播放德语</span>
    </div>
    <div class="opt-list">${e.options.map((o, k) => `<button class="opt" type="button" data-k="${k}"><span class="k">${letters[k]}</span><span>${A.esc(o)}</span></button>`).join("")}</div>`;
    const play = api.body.querySelector("[data-play]");
    const speak = () => A.Audio.speak(A.replacePH(e.audio), play);
    play.addEventListener("click", speak);
    if (api.solved) api.body.querySelectorAll(".opt").forEach(b => { b.disabled = true; if (Number(b.dataset.k) === e.answer) b.classList.add("is-correct"); });
    api.body.querySelectorAll(".opt").forEach(btn => {
      btn.addEventListener("click", () => {
        if (isSolved(api.i)) return;
        if (Number(btn.dataset.k) === e.answer) {
          api.body.querySelectorAll(".opt").forEach(b => { b.disabled = true; b.classList.remove("is-wrong"); });
          btn.classList.add("is-correct");
          solve(api.i);
          fb(api.feedback, true, "Richtig! 听到的是：" + `<b>${A.esc(A.replacePH(e.audio))}</b>` + explainHTML(e));
        } else {
          const n = wrong(api.i);
          btn.classList.add("is-wrong"); btn.disabled = true;
          fb(api.feedback, false, n >= 3 ? `再听一遍：正确答案是 <b>${A.esc(e.options[e.answer])}</b>。` + explainHTML(e) : "再听一遍？点上面的按钮。");
          A.Audio.speak(A.replacePH(e.audio), play);
        }
      });
    });
  }

  function renderTF(e, api) {
    api.body.innerHTML = `<div class="tf-row">
      <button class="opt" type="button" data-v="true"><span class="k">✓</span>对</button>
      <button class="opt" type="button" data-v="false"><span class="k">✕</span>错</button>
    </div>`;
    if (api.solved) api.body.querySelectorAll(".opt").forEach(b => { b.disabled = true; if ((b.dataset.v === "true") === e.answer) b.classList.add("is-correct"); });
    api.body.querySelectorAll(".opt").forEach(btn => {
      btn.addEventListener("click", () => {
        if (isSolved(api.i)) return;
        const v = btn.dataset.v === "true";
        if (v === e.answer) {
          api.body.querySelectorAll(".opt").forEach(b => { b.disabled = true; b.classList.remove("is-wrong"); });
          btn.classList.add("is-correct");
          solve(api.i);
          fb(api.feedback, true, "Richtig! " + explainHTML(e));
        } else {
          btn.classList.add("is-wrong"); btn.disabled = true;
          wrong(api.i);
          fb(api.feedback, false, "再读一遍题目，答案藏在课文里。");
        }
      });
    });
  }

  /* ---------------- progress / complete ---------------- */
  function updateProgress(animate) {
    const total = L.exercises.length;
    const solved = L.exercises.filter((_, i) => isSolved(i)).length;
    const pct = total ? Math.round((solved / total) * 100) : 0;
    if (els.ring) els.ring.style.setProperty("--p", pct);
    if (els.progText) els.progText.textContent = `练习 ${solved}/${total}`;
    const done = solved === total;
    const cardHost = document.getElementById("completeCard");
    if (cardHost) {
      if (done) {
        const isNew = !A.state.done.includes(lessonId);
        if (isNew) {
          A.update(s => { if (!s.done.includes(lessonId)) s.done.push(lessonId); });
          A.addCoins(20);
          A.toast("这一课完成了！+20 宝可币");
        }
        cardHost.innerHTML = `<div class="complete-card reveal is-in">
          ${A.portrait("oasilia", "happy")}
          <div><h3>这一课读完了</h3><p>练习全部答对。宝可币又多了几枚——虽然她也没说能买什么。</p></div>
          <a class="btn btn-primary" href="${A.COURSE.find(c => c.id === lessonId + 1) ? A.lessonPage(lessonId + 1) : "index.html#kurs"}">${A.COURSE.find(c => c.id === lessonId + 1) ? "下一课 →" : "回到课程地图"}</a>
        </div>`;
      } else {
        cardHost.innerHTML = "";
      }
    }
    if (!animate && done) return;
  }

  function bindFoot() {
    const reset = document.getElementById("resetLesson");
    if (reset) reset.addEventListener("click", () => {
      if (!confirm("重做本课的练习？已经拿到的宝可币不会收回。")) return;
      A.update(s => { delete s.answers[lessonId]; });
      location.reload();
    });
  }

  /* ---------------- go ---------------- */
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", boot);
  else boot();
})();
