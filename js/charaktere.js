/* ============================================================
   宝可德语 — charaktere.js
   ============================================================ */
(function () {
  "use strict";
  const A = window.App;
  if (!A) return;

  const DATA = window.CHARACTER_DATA || [];
  const EMOTIONS = [
    ["normal", "平静"], ["happy", "开心"], ["sad", "难过"], ["angry", "生气"],
    ["surprised", "惊讶"], ["worried", "担心"], ["crying", "哭"], ["sigh", "叹气"], ["stunned", "发愣"]
  ];

  function init() {
    const scene = document.getElementById("pageScene");
    if (scene) scene.innerHTML = A.scene("house");
    const root = document.getElementById("charRoot");
    if (!root) return;

    const hc = A.heroChar();
    const adults = DATA.filter(c => ["oasilia", "atlas", "licht"].includes(c.id));
    const kids = DATA.filter(c => ["mira", "snivy", "arko", "emi", "wiss"].includes(c.id));

    const visited = new Set(A.state.visited);
    const metOasilia = visited.has(1);
    const metAtlas = visited.has(2);
    const metLicht = visited.has(4);
    const metClass = [4, 6, 10].some(id => visited.has(id));
    root.innerHTML = `
      <section>
        <div class="section-head">
          <div>
            <span class="eyebrow">Du · 你</span>
            <h2>你现在是一只宝可梦</h2>
          </div>
          ${hc ? `<a class="btn btn-ghost btn-sm" href="index.html#partner">改名字 / 换伙伴</a>` : `<a class="btn btn-primary btn-sm" href="index.html#partner">去选一只伙伴</a>`}
        </div>
        ${hc ? heroCardHTML(hc) : emptyHeroHTML()}
      </section>

      <section style="margin-top:54px">
        <div class="section-head">
          <div><span class="eyebrow">Die Erwachsenen</span><h2>大人们</h2><p>照顾你的两位，还有那位从不催人的老师。</p></div>
        </div>
        <div class="char-grid">${adults.map(c => cardHTML(c)).join("")}</div>
      </section>

      <section style="margin-top:54px">
        <div class="section-head">
          <div><span class="eyebrow">Die Klasse</span><h2>班上的同学</h2><p>和你差不多大的五个孩子。他们会在不同的课里慢慢出现。</p></div>
        </div>
        <div class="char-grid">${kids.map(c => cardHTML(c)).join("")}</div>
      </section>

      <section style="margin-top:54px">
        <div class="section-head">
          <div><span class="eyebrow">Beziehungen</span><h2>他们之间的关系</h2></div>
        </div>
        <div class="relation-band">
          <div class="relation-card">
            <div class="rp">${A.portrait("oasilia", "happy")}${A.portrait("atlas", "normal")}</div>
            <b>欧亚西莉亚 & 阿特拉斯</b><br>
            ${metOasilia && metAtlas
              ? "17 岁和 20 岁，相伴多年的伙伴。她做饭种花，他打磨工具；她拉着他出门旅行，他负责把行李收好。他小时候从高坡上摔下来，是她照顾了他——这件事阿特拉斯记了很久。"
              : `<span style="color:var(--ink-3)">还不认识他们。第 1、2 课会遇见。</span>`}
          </div>
          <div class="relation-card">
            <div class="rp">${A.portrait("mira", "normal")}${A.portrait("snivy", "normal")}${A.portrait("arko", "happy")}${A.portrait("emi", "happy")}${A.portrait("wiss", "normal")}</div>
            <b>课堂五人组</b><br>
            ${metClass
              ? "米拉安静、莉安娜话最少、阿尔科好动、艾米自来熟、薇丝爱捉弄人。五个人性格差得很远，却总在放学后一起回家。你是第六个。"
              : `<span style="color:var(--ink-3)">还不认识班上的同学。第 4 课开始会慢慢见面。</span>`}
          </div>
          <div class="relation-card">
            <div class="rp">${A.portrait("licht", "normal")}</div>
            <b>利希特老师</b><br>
            ${metLicht
              ? "教所有孩子德语。傍晚尾巴会亮起来，像一盏会走路的灯。他记得每个孩子学到哪里，也记得谁今天心情不好。"
              : `<span style="color:var(--ink-3)">还不认识这位老师。第 4 课会见到他。</span>`}
          </div>
          <div class="relation-card">
            <div class="rp">${A.portrait("hero", "normal")}</div>
            <b>你</b><br>
            ${visited.has(4)
              ? "从人类世界来的孩子，变成了宝可梦。暂时回不去，也不知道为什么。但今天的早饭很好吃，米拉借了你一支笔，这就够了。"
              : "从人类世界来的孩子，变成了宝可梦。暂时回不去，也不知道为什么。今天先好好吃一顿早饭吧。"}
          </div>
        </div>
      </section>

      <section style="margin-top:48px">
        <div class="tip-box" style="background:var(--sand-soft);border-color:#d9bd8a;color:#6b5123">
          <b>关于剧透：</b>标着「还不认识！」的角色，等你在对应的课里遇见，才会显示介绍。头像不再做灰化处理，图鉴先放在这里，不影响阅读。
        </div>
      </section>`;

    // hero emotion strip click
    root.querySelectorAll(".emotion-chip").forEach(chip => {
      chip.addEventListener("click", () => {
        const emo = chip.dataset.emo;
        const img = root.querySelector(".is-hero .portrait img");
        if (img) img.src = `assets/portraits/${hc.img}-${emo}.png`;
        root.querySelectorAll(".emotion-chip").forEach(c => c.classList.remove("is-on"));
        chip.classList.add("is-on");
      });
    });
  }

  function heroCardHTML(hc) {
    return `<article class="char-card is-hero" style="--accent:${hc.color}">
      <div class="cc-top">
        ${A.portrait("hero", "happy")}
        <div style="min-width:0">
          <h3>${A.esc(hc.name)}<small>${A.esc(hc.speciesDe)} · ${A.esc(hc.species)}</small></h3>
          <div class="cc-meta">
            <span class="tag">约 10 岁</span>
            <span class="tag tag--sand">从人类世界来</span>
            <span class="tag tag--sea">你</span>
          </div>
        </div>
      </div>
      <p class="cc-role">森林边的草地上醒来，身体就变成了这样。个子变小了，脚变成了爪子，说话也变成了别人听不懂的「人类语」。欧亚西莉亚把你当成了走丢的小孩，牵着你的手回了家。</p>
      <div class="cc-quote"><b>„Ich bin … ein Pokémon?“</b><br>我……变成宝可梦了？</div>
      <div class="cc-meet">✳ 第 1 课登场 · 大家都把你当小孩</div>
      <div style="margin-top:16px">
        <div style="font-size:12px;color:var(--ink-3);font-weight:800;letter-spacing:.08em;margin-bottom:8px">表情小样 · 点一下换一个</div>
        <div class="emotion-strip">
          ${EMOTIONS.map(([e, zh]) => `<div class="emotion-chip" data-emo="${e}">${A.portrait("hero", e)}<span>${zh}</span></div>`).join("")}
        </div>
      </div>
    </article>`;
  }

  function emptyHeroHTML() {
    return `<article class="char-card is-hero" style="--accent:var(--sea)">
      <div class="cc-top">
        <span class="portrait" style="--p-size:94px;display:grid;place-items:center;font-family:var(--font-display);font-size:40px;color:var(--ink-3)">？</span>
        <div>
          <h3>还没有选择伙伴<small>DEIN PARTNER</small></h3>
          <div class="cc-meta"><span class="tag">火稚鸡 / 波加曼 / 木木枭</span></div>
        </div>
      </div>
      <p class="cc-role">你穿越到这个世界，会变成哪一只宝可梦？去首页选一只，再给自己起个名字。故事里的大家会这样称呼你。</p>
      <div style="margin-top:16px"><a class="btn btn-primary" href="index.html#kurs">去选一只 →</a></div>
    </article>`;
  }

  function cardHTML(c) {
    const met = A.state.visited.includes(c.firstLesson);
    const ch = A.CHARS[c.id];
    if (!met) {
      return `<article class="char-card is-unmet" style="--accent:${ch.color}">
        <div class="cc-top">
          ${A.portrait(c.id, "normal")}
          <div style="min-width:0">
            <h3>${A.esc(ch.name)}<small>${A.esc(ch.de)} · ${A.esc(ch.speciesDe)}</small></h3>
            <div class="cc-meta"><span class="tag tag--sand">第 ${c.firstLesson} 课登场</span></div>
          </div>
        </div>
        <div class="cc-unknown">
          <b>还不认识！</b>
          <span>等你在第 ${c.firstLesson} 课遇见${A.esc(ch.name)}，再回来看介绍吧。</span>
        </div>
      </article>`;
    }
    return `<article class="char-card" style="--accent:${ch.color}">
      <div class="cc-top">
        ${A.portrait(c.id, "happy")}
        <div style="min-width:0">
          <h3>${A.esc(ch.name)}<small>${A.esc(ch.de)} · ${A.esc(ch.speciesDe)}</small></h3>
          <div class="cc-meta">
            <span class="tag">${A.esc(c.age)}</span>
            ${c.tags.map(t => `<span class="tag tag--leaf">${A.esc(t)}</span>`).join("")}
          </div>
        </div>
      </div>
      <p class="cc-role">${A.esc(c.bio)}</p>
      <div class="cc-quote"><b>„${A.esc(c.quote)}“</b><br>${A.esc(c.quoteZh)}</div>
      <div style="display:grid;gap:4px;margin-top:12px;font-size:12.5px;color:var(--ink-2)">
        <div>喜欢：${A.esc(c.likes)}</div>
        <div>擅长：${A.esc(c.skills)}</div>
      </div>
      <div class="cc-meet">✳ 第 ${c.firstLesson} 课登场 · ${A.esc(c.relation)}</div>
    </article>`;
  }

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", init);
  else init();
})();
