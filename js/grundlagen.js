/* ============================================================
   宝可德语 — grundlagen.js  (基础小抄)
   ============================================================ */
(function () {
  "use strict";
  const A = window.App;
  if (!A) return;

  const esc = A.esc;
  const sp = t => A.speakBtn(t, "speak--sm");
  const de = t => `<b lang="de">${esc(t)}</b>${sp(t)}`;
  const badge = (t, cls) => `<span class="tag ${cls || ""}">${esc(t)}</span>`;
  const sub = t => `<h3 class="gl-sub">${t}</h3>`;
  const note = t => `<div class="tip-box">${t}</div>`;
  const table = (head, rows) => `<div class="table-wrap table-wrap--pron"><table class="pron-table">
    <thead><tr>${head.map(h => `<th>${h}</th>`).join("")}</tr></thead>
    <tbody>${rows.map(r => `<tr>${r.map(c => `<td>${c}</td>`).join("")}</tr>`).join("")}</tbody>
  </table></div>`;
  const section = (id, num, zh, deName, body) => `<section class="pron-section" id="${id}">
    <div class="pron-head"><span class="sec-num">${num}</span><h2>${zh}</h2><span class="de">${deName}</span></div>
    ${body}
  </section>`;
  const chips = arr => `<div class="gl-chips">${arr.map(([g, zh]) => `<span class="gl-chip"><b lang="de">${esc(g)}</b><span>${esc(zh)}</span>${sp(g)}</span>`).join("")}</div>`;

  function render() {
    const host = document.getElementById("pageScene");
    if (host) host.innerHTML = A.scene("forest");
    const root = document.getElementById("glRoot");
    if (!root) return;

    root.innerHTML = `
      ${section("verben", "01", "动词变形入门", "Verben", `
        <p class="pron-intro">德语动词在词典里的样子叫 <b>原形</b>，大多数以 <b>-en</b> 结尾。去掉 -en 得到<b>词干</b>；<b>变位</b>就是按人称给词干换词尾。先记规则词尾和两个最重要的不规则动词，不用一次背完。</p>
        ${sub("规则动词现在时 " + badge("第 4 课", "tag--sea"))}
        ${table(["人称", "词尾", "lernen（学）", "wohnen（住）"], [
          ["ich（我）", "-e", de("lerne"), de("wohne")],
          ["du（你）", "-st", de("lernst"), de("wohnst")],
          ["er / sie / es（他/她/它）", "-t", de("lernt"), de("wohnt")],
          ["wir（我们）", "-en", de("lernen"), de("wohnen")],
          ["ihr（你们）", "-t", de("lernt"), de("wohnt")],
          ["sie / Sie（他们/您）", "-en", de("lernen"), de("wohnen")]
        ])}
        ${note("<b>小提醒：</b>er / sie / es 和 ihr 的词尾都是 -t，靠主语区分；wir 和 sie 的形式和原形一样。heißen 的 du 是 <b>heißt</b>；lesen 和 sprechen 在 du / er 时会换元音。")}

        ${sub("sein / haben " + badge("第 1、5 课", "tag--sea"))}
        ${table(["人称", "sein（是）", "haben（有）"], [
          ["ich", de("bin"), de("habe")],
          ["du", de("bist"), de("hast")],
          ["er / sie / es", de("ist"), de("hat")],
          ["wir", de("sind"), de("haben")],
          ["ihr", de("seid"), de("habt")],
          ["sie / Sie", de("sind"), de("haben")]
        ])}
        ${note("<b>第 1 课先记 sein，第 5 课再记 haben。</b>它们都不按 lernen 的规则走，所以要单独背。")}

        ${sub("情态动词 " + badge("第 9 课", "tag--sea"))}
        ${table(["人称", "können（能）", "wollen（想）", "müssen（必须）"], [
          ["ich", de("kann"), de("will"), de("muss")],
          ["du", de("kannst"), de("willst"), de("musst")],
          ["er / sie / es", de("kann"), de("will"), de("muss")],
          ["wir", de("können"), de("wollen"), de("müssen")],
          ["ihr", de("könnt"), de("wollt"), de("müsst")],
          ["sie / Sie", de("können"), de("wollen"), de("müssen")]
        ])}
        ${note("<b>语序：</b>情态动词在第二个位置，实义动词放到句末：<b>Ich kann</b> nicht <b>fliegen</b>. / <b>Ich muss</b> vorsichtig <b>sein</b>.")}

        ${sub("可分动词 " + badge("第 11–12 课", "tag--sea"))}
        <div class="rule-list">
          <article class="rule-card"><div class="rk">aufstehen</div><div class="rt">起床：<b lang="de">Ich stehe um sieben Uhr auf.</b> ${sp("Ich stehe um sieben Uhr auf.")}<br>可分前缀 auf- 被放到句末，形成「框型结构」。</div></article>
          <article class="rule-card"><div class="rk">einschlafen</div><div class="rt">入睡：<b lang="de">Ich schlafe um zehn Uhr ein.</b> ${sp("Ich schlafe um zehn Uhr ein.")}<br>ein- 同样放到句末。</div></article>
          <article class="rule-card"><div class="rk">einladen</div><div class="rt">邀请：<b lang="de">Ich lade Mira ein.</b> ${sp("Ich lade Mira ein.")}<br>先找到动词的前半，再把前半缀放到最后。</div></article>
        </div>
      `)}

      ${section("possessiv", "02", "物主冠词：我的 / 你的", "Possessivartikel", `
        <p class="pron-intro">表示「我的 / 你的」。词尾和 <b>ein / eine</b> 很像；这里先只认<b>第一格</b>和<b>第四格</b>，第三格（meinem / meiner）以后再说了。</p>
        ${table(["", "阳性", "阴性", "中性", "复数"], [
          ["第一格 · mein", de("mein Vater"), de("meine Mutter"), de("mein Kind"), de("meine Eltern")],
          ["第四格 · mein", de("meinen Vater"), de("meine Mutter"), de("mein Kind"), de("meine Eltern")],
          ["第一格 · dein", de("dein Vater"), de("deine Mutter"), de("dein Kind"), de("deine Eltern")],
          ["第四格 · dein", de("deinen Vater"), de("deine Mutter"), de("dein Kind"), de("deine Eltern")]
        ])}
        ${note("<b>只有阳性第四格多一个 -en：</b>mein Vater → <b>meinen</b> Vater，dein Stift → <b>deinen</b> Stift。阴性、中性、复数在第四格都不变。<br>课文里已经出现过：<b>Mein Radiergummi!</b> / <b>Mein Schal ist rosa.</b>")}
        <div class="rule-list" style="margin-top:14px">
          <article class="rule-card"><div class="rk">例句</div><div class="rt">
            <b lang="de">Mein Stift ist neu.</b> ${sp("Mein Stift ist neu.")} 我的笔是新的。<br>
            <b lang="de">Ich habe meinen Stift.</b> ${sp("Ich habe meinen Stift.")} 我拿着我的笔。<br>
            <b lang="de">Meine Schere ist klein.</b> ${sp("Meine Schere ist klein.")} 我的剪刀很小。<br>
            <b lang="de">Wo ist dein Heft?</b> ${sp("Wo ist dein Heft?")} 你的本子在哪里？
          </div></article>
        </div>
        ${note("<b>以后再说：</b>sein（他的）/ ihr（她的）也是同一套词尾；第三格 meinem / meiner / meinem / meinen 会在后面的课里详细讲。")}
      `)}

      ${section("artikel", "03", "冠词、否定与第四格", "Artikel & Akkusativ", `
        <p class="pron-intro">德语名词前面要带冠词。先看最常用的三组：定冠词、不定冠词、否定冠词；第四格只有阳性会变。</p>
        ${table(["", "阳性", "阴性", "中性", "复数"], [
          ["定冠词（第一格）", de("der"), de("die"), de("das"), de("die")],
          ["不定冠词（第一格）", de("ein"), de("eine"), de("ein"), "—"],
          ["否定（第一格）", de("kein"), de("keine"), de("kein"), de("keine")],
          ["定冠词（第四格）", de("den"), de("die"), de("das"), de("die")],
          ["不定冠词（第四格）", de("einen"), de("eine"), de("ein"), "—"],
          ["否定（第四格）", de("keinen"), de("keine"), de("kein"), de("keine")]
        ])}
        ${note("<b>只有阳性第四格会变：</b>der → den，ein → einen，kein → keinen。阴性、中性、复数看起来和第一格一样。<br>「有 / 需要 / 拿 / 买」后面的名词通常用第四格：<b>Ich habe einen Stift.</b> / <b>Ich brauche keine Schere.</b>")}
      `)}

      ${section("satz", "04", "句子的位置", "Satzstellung", `
        <p class="pron-intro">把句子想成一排位置：第一个位置、第二个位置、第三个位置……<b>动词永远在第二个位置</b>。这是德语最重要的语序规则。</p>
        ${table(["第一个位置", "第二个位置", "后面"], [
          ["Ich", de("bin"), "Lina."],
          ["Wo", de("bin"), "ich?"],
          ["Du", de("bist"), "ein Freund."],
          ["Am Montag", de("lerne"), "ich Deutsch."]
        ])}
        ${table(["句子类型", "例子", "中文"], [
          ["陈述句", `<b lang="de">Ich bin Lina.</b> ${sp("Ich bin Lina.")}`, "我是莉娜。"],
          ["W-问句", `<b lang="de">Wo bin ich?</b> ${sp("Wo bin ich?")}`, "我在哪里？"],
          ["是非问句", `<b lang="de">Bist du Lina?</b> ${sp("Bist du Lina?")}`, "你是莉娜吗？"],
          ["否定", `<b lang="de">Ich bin nicht Lina.</b> ${sp("Ich bin nicht Lina.")}`, "我不是莉娜。"]
        ])}
        ${note("<b>注意：</b>「第二个位置」数的是句子成分，不是字数。Ich / bin / Lina 只有三块，bin 正好在第二块。")}
      `)}

      ${section("gruss", "05", "问候与告别", "Begrüßung", `
        <p class="pron-intro">第 1 课只学了 Hallo / Guten Morgen / Danke 这些。这里把常用的问候和告别补齐；按时间选，不用背顺序。</p>
        ${table(["德语", "中文", "什么时候用"], [
          [de("Hallo"), "你好", "最通用，朋友之间"],
          [de("Guten Morgen"), "早上好", "上午"],
          [de("Guten Tag"), "你好（白天）", "白天，稍正式"],
          [de("Guten Abend"), "晚上好", "傍晚以后"],
          [de("Gute Nacht"), "晚安", "睡前"],
          [de("Tschüss"), "拜拜", "朋友之间"],
          [de("Auf Wiedersehen"), "再见", "正式一点"],
          [de("Bis morgen"), "明天见", "约好明天见"],
          [de("Bis bald"), "回头见", "不久再见"]
        ])}
      `)}

      ${section("zeit", "06", "星期、月份与季节", "Tage, Monate, Jahreszeiten", `
        <p class="pron-intro">第 12 课学了 <b>um … Uhr</b> 说时间；这里补上星期、月份和季节。说「在星期几」用 <b>am</b>，说「在几月 / 哪个季节」用 <b>im</b>。</p>
        ${sub("星期 " + badge("补充", "tag--sand"))}
        ${chips([["Montag", "星期一"], ["Dienstag", "星期二"], ["Mittwoch", "星期三"], ["Donnerstag", "星期四"], ["Freitag", "星期五"], ["Samstag", "星期六"], ["Sonntag", "星期日"]])}
        ${note("<b>Am Montag</b> lerne ich Deutsch. 星期一我学德语。")}
        ${sub("月份 " + badge("补充", "tag--sand"))}
        ${chips([["Januar", "一月"], ["Februar", "二月"], ["März", "三月"], ["April", "四月"], ["Mai", "五月"], ["Juni", "六月"], ["Juli", "七月"], ["August", "八月"], ["September", "九月"], ["Oktober", "十月"], ["November", "十一月"], ["Dezember", "十二月"]])}
        ${note("<b>Im Mai</b> ist es warm. 五月很暖和。")}
        ${sub("季节 " + badge("补充", "tag--sand"))}
        ${chips([["Frühling", "春天"], ["Sommer", "夏天"], ["Herbst", "秋天"], ["Winter", "冬天"]])}
        ${note("<b>Im Winter</b> ist es kalt. 冬天很冷。")}
      `)}

      ${section("land", "07", "国家与语言", "Länder & Sprachen", `
        <p class="pron-intro">说「来自哪里」用 <b>kommen aus</b>；说「说什么语言」用 <b>sprechen</b>。大多数国家名不带冠词，die Schweiz 是例外。</p>
        ${table(["国家", "中文", "句子"], [
          [de("Deutschland"), "德国", `<b lang="de">Ich komme aus Deutschland.</b> ${sp("Ich komme aus Deutschland.")}`],
          [de("Österreich"), "奥地利", `<b lang="de">Ich komme aus Österreich.</b> ${sp("Ich komme aus Österreich.")}`],
          [de("die Schweiz"), "瑞士", `<b lang="de">Ich komme aus der Schweiz.</b> ${sp("Ich komme aus der Schweiz.")}`]
        ])}
        ${table(["语言", "中文", "句子"], [
          [de("Deutsch"), "德语", `<b lang="de">Ich spreche Deutsch.</b> ${sp("Ich spreche Deutsch.")}`],
          [de("Englisch"), "英语", `<b lang="de">Ich spreche Englisch.</b> ${sp("Ich spreche Englisch.")}`],
          [de("Chinesisch"), "中文", `<b lang="de">Ich spreche Chinesisch.</b> ${sp("Ich spreche Chinesisch.")}`],
          [de("Japanisch"), "日语", `<b lang="de">Ich spreche Japanisch.</b> ${sp("Ich spreche Japanisch.")}`]
        ])}
      `)}

      ${section("klasse", "08", "课堂用语", "Im Unterricht", `
        <p class="pron-intro">听不懂的时候，这些句子比「……什么？」有用得多。可以直接点着听。</p>
        ${table(["德语", "中文"], [
          [de("Was bedeutet das?"), "这是什么意思？"],
          [de("Wie sagt man das auf Deutsch?"), "这个用德语怎么说？"],
          [de("Ich verstehe nicht."), "我不明白。"],
          [de("Langsamer, bitte."), "请慢一点。"],
          [de("Noch einmal, bitte."), "请再说一遍。"],
          [de("Wie schreibt man das?"), "这个怎么写？"],
          [de("Kannst du das wiederholen?"), "你能重复一遍吗？"]
        ])}
      `)}

      ${section("verbinder", "09", "常用连接词", "Konnektoren", `
        <p class="pron-intro">把短句连起来，句子就不会一段一段往外蹦。先记这几个最常用的。</p>
        ${table(["德语", "中文", "例子"], [
          [de("und"), "和；而且", `<b lang="de">Ich lese und schreibe.</b> ${sp("Ich lese und schreibe.")}`],
          [de("aber"), "但是", `<b lang="de">Ich bin klein, aber mutig.</b> ${sp("Ich bin klein, aber mutig.")}`],
          [de("oder"), "或者", `<b lang="de">Saft oder Wasser?</b> ${sp("Saft oder Wasser?")}`],
          [de("auch"), "也", `<b lang="de">Ich komme auch mit.</b> ${sp("Ich komme auch mit.")}`],
          [de("dann"), "然后", `<b lang="de">Dann essen wir.</b> ${sp("Dann essen wir.")}`]
        ])}
      `)}

      ${section("begriffe", "10", "语法术语表", "Fachbegriffe", `
        <p class="pron-intro">课里出现过的术语，用一句话解释。看不懂时回来查。</p>
        <div class="rule-list">
          <article class="rule-card"><div class="rk">原形</div><div class="rt">动词在词典里的样子，大多以 -en 结尾：lernen、kommen、wohnen。也叫不定式。</div></article>
          <article class="rule-card"><div class="rk">词干</div><div class="rt">原形去掉 -en 剩下的部分：lernen → lern-，kommen → komm-。</div></article>
          <article class="rule-card"><div class="rk">变位</div><div class="rt">动词跟着主语换词尾：ich lerne、du lernst、er lernt。名词、形容词也有变化，但德语里说「变位」通常指动词。</div></article>
          <article class="rule-card"><div class="rk">位置</div><div class="rt">把句子切成几块，数第一块、第二块……德语的谓语动词永远在第二个位置。</div></article>
          <article class="rule-card"><div class="rk">格</div><div class="rt">名词在句子里扮演的角色。第一格是「谁」，第四格是动作的直接对象。第三格以后再学。</div></article>
          <article class="rule-card"><div class="rk">冠词</div><div class="rt">名词前面的小词：der / die / das 是定冠词，ein / eine 是不定冠词，kein / keine 是否定冠词。</div></article>
          <article class="rule-card"><div class="rk">情态动词</div><div class="rt">können / wollen / müssen 这一类，表示「能 / 想 / 必须」，后面的实义动词放句末。</div></article>
          <article class="rule-card"><div class="rk">可分动词</div><div class="rt">带可分前缀的动词：aufstehen、einschlafen、einladen。变位时前缀会被放到句末，形成「框型结构」。</div></article>
          <article class="rule-card"><div class="rk">W-问句</div><div class="rt">用 wer / wie / wo / woher 这类 W 开头的词提问，疑问词占第一个位置，动词仍在第二个位置。</div></article>
        </div>
      `)}
    `;
  }

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", render);
  else render();
})();
