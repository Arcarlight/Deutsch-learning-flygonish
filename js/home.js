/* ============================================================
   宝可德语 — home.js
   ============================================================ */
(function () {
  "use strict";
  const A = window.App;
  if (!A) return;

  let selected = "";

  function init() {
    const hs = document.getElementById("heroScene");
    if (hs) hs.innerHTML = A.scene("forest");
    renderFigures();
    renderContinue();
    renderCourse();
    renderOnboard();
    if (!A.state.species && !A.state.obDismissed) openOnboard(false);
    else if (location.hash === "#partner") openOnboard(!!A.state.species);
  }

  /* ---------- hero figures ---------- */
  function renderFigures() {
    const host = document.getElementById("heroFigures");
    if (!host) return;
    const hc = A.heroChar();
    host.innerHTML = `
      <div class="hero-fig hero-fig--oasilia">
        <span class="fig-bubble">Hallo!</span>
        ${A.portrait("oasilia", "happy")}
        <div class="fig-name">欧亚西莉亚</div>
        <div class="fig-sub">OASILIA · LIBELLDRA</div>
      </div>
      <div class="hero-fig hero-fig--atlas">
        <span class="fig-bubble">Willkommen.</span>
        ${A.portrait("atlas", "normal")}
        <div class="fig-name">阿特拉斯</div>
        <div class="fig-sub">ATLAS · BRUTALANDA</div>
      </div>
      <a class="hero-fig hero-fig--hero ${hc ? "" : "is-empty"}" href="#" id="editHero" title="${hc ? "修改名字或伙伴" : "选择你的伙伴"}">
        ${hc ? A.portrait("hero", "happy") : `<span class="portrait" style="--p-size:96px;display:grid;place-items:center;font-family:var(--font-display);font-size:40px;color:var(--ink-3)">？</span>`}
        <div class="fig-name">${hc ? A.esc(hc.name) : "选择伙伴"}</div>
        <div class="fig-sub">${hc ? hc.speciesDe.toUpperCase() : "DEIN PARTNER"}</div>
      </a>`;
    const editHero = document.getElementById("editHero");
    if (editHero) editHero.addEventListener("click", e => { e.preventDefault(); openOnboard(!!hc); });
  }

  /* ---------- course map ---------- */
  function renderCourse() {
    const host = document.getElementById("courseGrid");
    if (!host) return;
    const done = new Set(A.state.done.map(Number));
    const visited = new Set(A.state.visited.map(Number));
    const next = A.COURSE.find(c => !done.has(c.id));
    host.innerHTML = A.COURSE.map(c => {
      const isNext = next && next.id === c.id;
      const isDone = done.has(c.id);
      const seen = visited.has(c.id);
      return `<a class="lesson-card ${isNext ? "is-next" : ""}" href="${A.lessonPage(c.id)}" style="--accent:${c.accent}">
        <div class="lc-top">
          <span class="lc-num">Kapitel ${A.pad(c.id)}</span>
          <span class="lc-status ${isDone ? "is-done" : ""}"><span class="dot"></span>${isDone ? "完成" : seen ? "读过" : isNext ? "下一课" : "未开始"}</span>
        </div>
        <h3>${A.esc(c.title)}<span class="zh">${A.esc(c.zh)}</span></h3>
        <p class="lc-beat">${A.esc(c.beat)}</p>
        <div class="lc-foot">
          <span class="tag tag--sand">${A.SCENE_NAMES[c.scene] || "宝可梦世界"}</span>
          <span class="lc-arrow">→</span>
        </div>
      </a>`;
    }).join("");
  }

  /* ---------- continue card ---------- */
  function renderContinue() {
    const host = document.getElementById("continueCard");
    if (!host) return;
    const hc = A.heroChar();
    if (!hc) {
      host.innerHTML = `<div class="continue">
        <span class="portrait" style="--p-size:70px;display:grid;place-items:center;font-family:var(--font-display);font-size:30px;color:var(--ink-3)">？</span>
        <div class="continue-main">
          <span class="eyebrow">Start</span>
          <h3>先选一只宝可梦，作为这个世界里的你</h3>
          <p>火稚鸡、波加曼、木木枭——选一只，再给自己起个名字。之后可以随时改。</p>
        </div>
        <div class="continue-progress">
          <button class="btn btn-primary" data-open-onboard type="button">选择伙伴</button>
        </div>
      </div>`;
      host.querySelector("[data-open-onboard]").addEventListener("click", () => openOnboard(false));
      return;
    }
    const done = new Set(A.state.done.map(Number));
    const visited = new Set(A.state.visited.map(Number));
    const next = A.COURSE.find(c => !done.has(c.id)) || A.COURSE[A.COURSE.length - 1];
    const pct = Math.round((visited.size / A.COURSE.length) * 100);
    host.innerHTML = `<div class="continue">
      ${A.portrait("hero", "happy")}
      <div class="continue-main">
        <span class="eyebrow">Weiter · ${A.state.name}</span>
        <h3>${A.esc(next.title)} <span style="font-family:var(--font-body);font-size:14px;color:var(--ink-3)">/ ${A.esc(next.zh)}</span></h3>
        <p>${visited.size ? `已经走过 ${visited.size} / ${A.COURSE.length} 课。` : "从第一课开始，慢慢来。"}一次读一点就很好。</p>
      </div>
      <div class="continue-progress">
        <div class="bar"><i style="width:${pct}%"></i></div>
        <span>${pct}% 的课程已拜访</span>
      </div>
      <a class="btn btn-primary" href="${A.lessonPage(next.id)}">继续学习 →</a>
    </div>`;
  }

  /* ---------- onboarding ---------- */
  function renderOnboard() {
    const host = document.getElementById("onboarding");
    if (!host) return;
    host.innerHTML = `
      <div class="onboard-card" role="document">
        <button class="ob-close" type="button" id="obClose" aria-label="关闭">✕</button>
        <div class="ob-head">
          <span class="eyebrow">Willkommen in Waldrand</span>
          <h2 id="obTitle">你在这个世界的样子</h2>
          <p>选择一只宝可梦作为身体，再起一个名字。故事里的大家会这样称呼你。</p>
        </div>
        <div class="ob-step-label">01 · 选择伙伴</div>
        <div class="species-pick" id="speciesPick">
          ${Object.values(A.SPECIES).map(sp => `
            <div class="species-opt" data-species="${sp.key}" role="button" tabindex="0" aria-pressed="false">
              ${A.portrait(sp.key === "torchic" ? "torchic" : sp.key, "happy")}
              <strong>${sp.zh}</strong>
              <small>${sp.de}</small>
              <span class="sp-trait">${sp.trait}</span>
            </div>`).join("")}
        </div>
        <div class="ob-step-label">02 · 起个名字</div>
        <div class="ob-name-row">
          <input id="obName" type="text" maxlength="12" autocomplete="off" aria-label="你的名字" placeholder="比如：Lina、Frido，也可以写中文名">
          <button class="btn btn-sm" type="button" id="obRandom">随便起一个</button>
          <div class="ob-name-hint">可以用中文、英文或德语，最多 12 个字符。名字会出现在课文里。</div>
        </div>
        <div class="ob-preview" id="obPreview"></div>
        <div class="ob-foot">
          <span class="ob-note">进度和宝可币只保存在本机浏览器里。以后想改名字或伙伴，点首页右上角的「你」就行。</span>
          <div style="display:flex;gap:10px;align-items:center;flex-wrap:wrap">
            <button class="btn btn-ghost btn-sm" type="button" id="obSkip">先随便看看</button>
            <button class="btn btn-primary" type="button" id="obStart">开始冒险</button>
          </div>
        </div>
      </div>`;
    bindOnboard();
  }

  function openOnboard(editing) {
    const host = document.getElementById("onboarding");
    if (!host) return;
    const st = A.state;
    selected = st.species || "";
    const input = document.getElementById("obName");
    input.value = st.name || "";
    if (!input.value && selected) input.placeholder = A.SPECIES[selected].defaultName;
    updatePick();
    host.classList.add("is-open");
    document.body.style.overflow = "hidden";
    setTimeout(() => input.focus(), 80);
    host.dataset.editing = editing ? "1" : "";
  }
  function closeOnboard(dismissed) {
    const host = document.getElementById("onboarding");
    if (!host) return;
    host.classList.remove("is-open");
    document.body.style.overflow = "";
    if (dismissed && !A.state.species) A.update(s => { s.obDismissed = true; });
    if (location.hash === "#partner") history.replaceState(null, "", location.pathname + location.search);
  }

  function updatePick() {
    document.querySelectorAll(".species-opt").forEach(el => {
      const on = el.dataset.species === selected;
      el.classList.toggle("is-selected", on);
      el.setAttribute("aria-pressed", on ? "true" : "false");
    });
    const input = document.getElementById("obName");
    const prev = document.getElementById("obPreview");
    const sp = A.SPECIES[selected];
    const name = (input.value || "").trim() || (sp ? sp.defaultName : "？");
    if (prev) {
      prev.innerHTML = sp
        ? `${A.portrait(selected, "normal")}<span>你将是 <b>${sp.zh} · ${sp.de}</b>，大家会叫你 <b>${A.esc(name)}</b>。<br>${sp.quote}</span>`
        : `<span>先选一只宝可梦吧。森林里的大家都很好奇你会是什么样子。</span>`;
    }
  }

  function bindOnboard() {
    const host = document.getElementById("onboarding");
    host.querySelector("#obClose").addEventListener("click", () => closeOnboard(true));
    const skip = host.querySelector("#obSkip");
    if (skip) skip.addEventListener("click", () => closeOnboard(true));
    document.querySelectorAll(".species-opt").forEach(el => {
      const pick = () => {
        const prev = selected;
        selected = el.dataset.species;
        const input = document.getElementById("obName");
        if (!input.value.trim()) input.placeholder = A.SPECIES[selected].defaultName;
        else if (prev && input.value.trim() === A.SPECIES[prev].defaultName) input.value = A.SPECIES[selected].defaultName;
        updatePick();
      };
      el.addEventListener("click", pick);
      el.addEventListener("keydown", e => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); pick(); } });
    });
    host.querySelector("#obName").addEventListener("input", updatePick);
    host.querySelector("#obRandom").addEventListener("click", () => {
      const names = ["Frido", "Lina", "Theo", "Nora", "Emil", "Jonas", "Mia", "Luka", "Lea", "Ben"];
      const input = host.querySelector("#obName");
      input.value = names[Math.floor(Math.random() * names.length)];
      updatePick();
    });
    host.querySelector("#obStart").addEventListener("click", () => {
      if (!selected) { A.toast("先选一只宝可梦吧。"); return; }
      const input = host.querySelector("#obName");
      const name = input.value.trim() || A.SPECIES[selected].defaultName;
      const first = !A.state.species;
      A.update(s => {
        s.species = selected;
        s.name = name;
        s.obDismissed = false;
        if (!s.createdAt) s.createdAt = new Date().toISOString();
      });
      closeOnboard(false);
      A.renderHeader();
      A.renderWallet();
      renderFigures();
      renderContinue();
      A.toast(first ? `欢迎来到林缘村，${name}！` : `名字和伙伴换好了，${name}。`);
      if (first) A.addCoins(10, { toast: false });
      const c = document.getElementById("continueCard");
      if (c) c.scrollIntoView({ behavior: "smooth", block: "center" });
    });
  }

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", init);
  else init();
})();
