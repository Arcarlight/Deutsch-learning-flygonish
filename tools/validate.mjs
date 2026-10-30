import { readFile } from "node:fs/promises";
import vm from "node:vm";

const WHO = ["hero", "oasilia", "atlas", "licht", "mira", "arko", "emi", "wiss", "snivy"];
const EMO = ["normal", "happy", "sad", "angry", "surprised", "crying", "sigh", "stunned", "worried"];
const SCENES = ["dawn", "forest", "house", "classroom", "market", "rain", "sea", "hill", "night"];
const EX = ["choice", "fill", "order", "match", "listen", "truefalse"];

const args = process.argv.slice(2);
const files = args.length
  ? args.map(a => `data/lessons/${String(a).padStart(2, "0")}.js`)
  : Array.from({ length: 12 }, (_, i) => `data/lessons/${String(i + 1).padStart(2, "0")}.js`);

let failed = 0;
for (const f of files) {
  const errs = [];
  const warns = [];
  let L;
  let code;
  try { code = await readFile(f, "utf8"); } catch { console.log(`SKIP ${f} (not found)`); continue; }
  try {
    const ctx = { window: {} };
    vm.runInNewContext(code, ctx, { filename: f });
    L = ctx.window.LESSON;
  } catch (e) { console.log(`FAIL ${f}\n  - 语法错误: ${e.message}`); failed++; continue; }
  if (!L) { console.log(`FAIL ${f}\n  - 没有定义 window.LESSON`); failed++; continue; }

  const need = ["id", "chapter", "title", "subtitle", "blurb", "scene", "goal", "vocab", "texts", "grammar", "culture", "exercises"];
  for (const k of need) if (L[k] === undefined) errs.push(`缺少字段 ${k}`);
  if (typeof L.id !== "number") errs.push("id 必须是数字");
  if (L.chapter && L.chapter !== `Kapitel ${L.id}`) errs.push(`chapter 应为 "Kapitel ${L.id}"`);
  if (!SCENES.includes(L.scene)) errs.push(`scene 非法: ${L.scene}`);
  if (!Array.isArray(L.goal) || L.goal.length < 2 || L.goal.length > 4) errs.push("goal 需要 2–4 条");
  if (!Array.isArray(L.friend)) errs.push("friend 必须是数组");

  // warmup（可选）：课文前的小对话 + 动词变形展示
  if (L.warmup !== undefined) {
    const w = L.warmup;
    const tag = "warmup";
    if (!w || typeof w !== "object") errs.push("warmup 必须是对象");
    else {
      if (!w.title) errs.push(`${tag} 缺少 title`);
      if (w.pattern !== undefined && typeof w.pattern !== "string") errs.push(`${tag}.pattern 必须是字符串`);
      if (!Array.isArray(w.lines) || w.lines.length < 2 || w.lines.length > 8) errs.push(`${tag}.lines 需要 2–8 行`);
      else w.lines.forEach((ln, li) => {
        const lt = `${tag}.lines[${li}]`;
        if (ln.n) {
          if (ln.who || ln.de) errs.push(`${lt} 旁白不要再写 who/de`);
        } else {
          if (!WHO.includes(ln.who)) errs.push(`${lt} who 非法: ${ln.who}`);
          if (!EMO.includes(ln.emo)) errs.push(`${lt} emo 非法: ${ln.emo}`);
          if (!ln.de) errs.push(`${lt} 缺少 de`);
          if (!ln.zh) errs.push(`${lt} 缺少 zh`);
        }
      });
      if (w.forms !== undefined) {
        if (!w.forms || typeof w.forms.verb !== "string" || !w.forms.verb) errs.push(`${tag}.forms.verb 缺失`);
        if (!Array.isArray(w.forms?.items) || w.forms.items.length < 2 || w.forms.items.length > 8) errs.push(`${tag}.forms.items 需要 2–8 组`);
        else w.forms.items.forEach((it, ii) => {
          if (!Array.isArray(it) || it.length !== 3 || it.some(x => typeof x !== "string" || !x)) {
            errs.push(`${tag}.forms.items[${ii}] 需要 [人称, 变位, 例句] 三个非空字符串`);
          }
        });
      }
    }
  }

  // vocab
  if (!Array.isArray(L.vocab)) errs.push("vocab 必须是数组");
  else {
    if (L.vocab.length < 12 || L.vocab.length > 22) errs.push(`vocab 数量 ${L.vocab.length}（应为 12–22）`);
    const seen = new Set();
    L.vocab.forEach((v, i) => {
      const tag = `vocab[${i}]`;
      if (!v.de) errs.push(`${tag} 缺少 de`);
      if (!v.zh) errs.push(`${tag} 缺少 zh`);
      if (!v.pos) errs.push(`${tag} 缺少 pos`);
      if (!v.ex || !v.ex.de || !v.ex.zh) errs.push(`${tag} 缺少例句 ex`);
      if (v.de && seen.has(v.de)) errs.push(`${tag} 重复词 ${v.de}`);
      if (v.de) seen.add(v.de);
      if (!v.ipa) warns.push(`${tag} 没有 ipa（${v.de}）`);
    });
  }

  // texts
  if (!Array.isArray(L.texts) || L.texts.length !== 2) errs.push(`texts 必须正好 2 篇（现在 ${L.texts?.length}）`);
  else L.texts.forEach((t, ti) => {
    const tag = `texts[${ti}]`;
    if (!t.title) errs.push(`${tag} 缺少 title`);
    if (!Array.isArray(t.lines) || t.lines.length < 5 || t.lines.length > 20) errs.push(`${tag} lines 数量应为 5–20`);
    else t.lines.forEach((ln, li) => {
      const lt = `${tag}.lines[${li}]`;
      if (ln.n) {
        if (typeof ln.n !== "string" || !ln.n.trim()) errs.push(`${lt} 旁白为空`);
        if (ln.who || ln.de) errs.push(`${lt} 旁白不要再写 who/de`);
      } else {
        if (!ln.who) errs.push(`${lt} 缺少 who`);
        else if (!WHO.includes(ln.who)) errs.push(`${lt} who 非法: ${ln.who}`);
        if (!ln.emo) errs.push(`${lt} 缺少 emo`);
        else if (!EMO.includes(ln.emo)) errs.push(`${lt} emo 非法: ${ln.emo}`);
        if (!ln.de) errs.push(`${lt} 缺少 de`);
        if (!ln.zh) errs.push(`${lt} 缺少 zh`);
        if (ln.de && !/[.!?…„“"']$/.test(ln.de.trim())) warns.push(`${lt} 德语句末似乎缺标点: ${ln.de}`);
      }
      if (ln.zh && !ln.n && ln.zh === ln.de) warns.push(`${lt} 中文翻译和德语相同？`);
    });
  });

  // grammar
  if (!Array.isArray(L.grammar) || L.grammar.length < 1 || L.grammar.length > 2) errs.push("grammar 需要 1–2 个");
  else L.grammar.forEach((g, gi) => {
    const tag = `grammar[${gi}]`;
    if (!g.title) errs.push(`${tag} 缺少 title`);
    if (!g.intro) errs.push(`${tag} 缺少 intro`);
    if (g.table) {
      if (!Array.isArray(g.table.head) || !Array.isArray(g.table.rows)) errs.push(`${tag}.table 格式错误`);
      else g.table.rows.forEach((r, ri) => {
        if (!Array.isArray(r) || r.length !== g.table.head.length) errs.push(`${tag}.table row ${ri} 列数不符`);
      });
    }
    if (g.notes && !Array.isArray(g.notes)) errs.push(`${tag}.notes 必须是数组`);
    if (g.examples && !Array.isArray(g.examples)) errs.push(`${tag}.examples 必须是数组`);
  });

  // culture
  if (!L.culture || !L.culture.title || !L.culture.text) errs.push("culture 需要 title 与 text");

  // exercises
  if (!Array.isArray(L.exercises) || L.exercises.length < 6 || L.exercises.length > 10) errs.push(`exercises 需要 6–10 题（现在 ${L.exercises?.length}）`);
  else {
    const types = new Set();
    L.exercises.forEach((e, i) => {
      const tag = `exercises[${i}]`;
      if (!EX.includes(e.type)) { errs.push(`${tag} type 非法: ${e.type}`); return; }
      types.add(e.type);
      if (e.type === "choice" || e.type === "listen") {
        if (!Array.isArray(e.options) || e.options.length < 2) errs.push(`${tag} options 不足`);
        if (typeof e.answer !== "number" || e.answer < 0 || e.answer >= (e.options?.length || 0)) errs.push(`${tag} answer 下标越界`);
        if (e.type === "listen" && !e.audio) errs.push(`${tag} 缺少 audio`);
      } else if (e.type === "fill") {
        if (!Array.isArray(e.answer) || !e.answer.length) errs.push(`${tag} answer 必须是字符串数组`);
        if (e.q && !e.q.includes("___")) warns.push(`${tag} q 里没有 ___ 空格标记`);
      } else if (e.type === "order") {
        if (!Array.isArray(e.words) || !e.answer) errs.push(`${tag} 缺少 words/answer`);
        else {
          const norm = s => s.replace(/[.,!?…„“"']/g, "").toLowerCase().split(/\s+/).filter(Boolean).sort().join(" ");
          if (norm(e.words.join(" ")) !== norm(e.answer)) errs.push(`${tag} words 与 answer 的词不一致：「${e.words.join(" ")}」vs「${e.answer}」`);
        }
      } else if (e.type === "match") {
        if (!Array.isArray(e.pairs) || e.pairs.length < 3 || e.pairs.length > 4) errs.push(`${tag} pairs 需要 3–4 对`);
        else e.pairs.forEach((p, pi) => { if (!Array.isArray(p) || p.length !== 2) errs.push(`${tag}.pairs[${pi}] 格式错误`); });
      } else if (e.type === "truefalse") {
        if (typeof e.answer !== "boolean") errs.push(`${tag} answer 必须是 true/false`);
      }
      if (!e.explain) warns.push(`${tag} 没有 explain`);
    });
    if (types.size < 3) errs.push(`题型只有 ${types.size} 种（至少 3 种）`);
  }

  // placeholders
  const all = JSON.stringify(L);
  for (const m of all.matchAll(/\{\{(\w+)\}\}/g)) {
    if (!["name", "species"].includes(m[1])) errs.push(`非法占位符 {{${m[1]}}}`);
  }

  if (errs.length) { failed++; console.log(`FAIL ${f}`); errs.forEach(e => console.log("  - " + e)); }
  else console.log(`OK   ${f}  (vocab ${L.vocab.length}, texts ${L.texts.length}, ex ${L.exercises.length})`);
  if (warns.length) warns.slice(0, 8).forEach(w => console.log("  ~ " + w));
}
console.log(failed ? `\n${failed} 个文件有问题` : "\n全部通过");
process.exit(failed ? 1 : 0);
