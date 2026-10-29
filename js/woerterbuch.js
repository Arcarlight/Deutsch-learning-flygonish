/* ============================================================
   宝可德语 — woerterbuch.js
   ============================================================ */
(function () {
  "use strict";
  const A = window.App;
  if (!A) return;

  const all = [];
  const lessons = [];
  let filterLesson = "all";
  let filterPos = "all";
  let query = "";

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

  async function loadAll() {
    const bar = document.getElementById("loadBar");
    if (bar) { bar.style.display = "block"; bar.querySelector("i").style.width = "4%"; }
    const MAX = 12;
    for (let i = 1; i <= MAX; i++) {
      const data = await injectLesson(i);
      if (data && data.id === i) {
        lessons.push(data);
        data.vocab.forEach((v, idx) => all.push({ ...v, lesson: data.id, lessonTitle: data.title, order: idx }));
      }
      if (bar) bar.querySelector("i").style.width = Math.round((i / MAX) * 100) + "%";
    }
    if (bar) setTimeout(() => { bar.style.display = "none"; }, 400);
  }

  function buildFilters() {
    const lf = document.getElementById("lessonFilter");
    lessons.forEach(l => {
      const o = document.createElement("option");
      o.value = l.id;
      o.textContent = `第 ${A.pad(l.id)} 课 · ${l.title}`;
      lf.appendChild(o);
    });
    const posSet = Array.from(new Set(all.map(v => v.pos).filter(Boolean)));
    const pf = document.getElementById("posFilter");
    posSet.forEach(p => {
      const o = document.createElement("option");
      o.value = p; o.textContent = p;
      pf.appendChild(o);
    });
    const chips = document.getElementById("lessonChips");
    chips.innerHTML = `<button class="lesson-chip is-on" data-lesson="all" type="button">全部</button>` +
      lessons.map(l => `<button class="lesson-chip" data-lesson="${l.id}" type="button">L${A.pad(l.id)}</button>`).join("");
    chips.addEventListener("click", e => {
      const b = e.target.closest(".lesson-chip");
      if (!b) return;
      filterLesson = b.dataset.lesson === "all" ? "all" : Number(b.dataset.lesson);
      document.getElementById("lessonFilter").value = String(filterLesson);
      chips.querySelectorAll(".lesson-chip").forEach(c => c.classList.toggle("is-on", c === b));
      render();
    });
  }

  function render() {
    const rows = document.getElementById("wordRows");
    const empty = document.getElementById("emptyState");
    const count = document.getElementById("wordCount");
    const q = query.trim().toLowerCase();
    const list = all.filter(v => {
      if (filterLesson !== "all" && v.lesson !== filterLesson) return false;
      if (filterPos !== "all" && v.pos !== filterPos) return false;
      if (!q) return true;
      return [v.de, v.zh, v.pos, v.ipa, String(v.lesson)].some(x => String(x || "").toLowerCase().includes(q));
    });
    count.textContent = `共 ${all.length} 词 · 显示 ${list.length}`;
    if (!list.length) { rows.innerHTML = ""; empty.style.display = "block"; return; }
    empty.style.display = "none";
    rows.innerHTML = list.map(v => `<div class="word-item" data-say="${A.esc(v.de)}">
      ${A.speakBtn(v.de)}
      <div class="wi-main">
        <div class="wi-de">${A.esc(v.de)}${v.ipa ? `<span class="ipa">${A.esc(v.ipa)}</span>` : ""}</div>
        <div class="wi-zh">${A.esc(v.zh)}${v.note ? ` · ${A.esc(v.note)}` : ""}</div>
      </div>
      <span class="wi-lesson" title="第 ${v.lesson} 课 · ${A.esc(v.lessonTitle)}">L${A.pad(v.lesson)}</span>
    </div>`).join("");
    rows.querySelectorAll(".word-item").forEach(row => {
      row.addEventListener("click", e => {
        if (e.target.closest(".speak")) return;
        A.Audio.speak(row.dataset.say, row.querySelector(".speak"));
      });
    });
  }

  function bind() {
    document.getElementById("wordSearch").addEventListener("input", e => { query = e.target.value; render(); });
    document.getElementById("lessonFilter").addEventListener("change", e => {
      filterLesson = e.target.value === "all" ? "all" : Number(e.target.value);
      document.querySelectorAll(".lesson-chip").forEach(c => c.classList.toggle("is-on", c.dataset.lesson === String(filterLesson)));
      render();
    });
    document.getElementById("posFilter").addEventListener("change", e => { filterPos = e.target.value; render(); });
  }

  async function init() {
    const scene = document.getElementById("pageScene");
    if (scene) scene.innerHTML = A.scene("market");
    await loadAll();
    buildFilters();
    bind();
    render();
  }

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", init);
  else init();
})();
