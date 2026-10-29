# 课文数据格式（`data/lessons/NN.js`）

每个文件是一个普通脚本（非 ES module），定义全局 `window.LESSON`。渲染器 `js/lesson.js` 会读取它。
**不要**改动其他文件；只写自己负责的 `data/lessons/NN.js`。

```js
window.LESSON = {
  id: 1,                          // 课号，整数
  chapter: "Kapitel 1",           // 固定格式
  title: "Hallo, Welt!",          // 德语主标题
  subtitle: "醒来的早晨",           // 中文副标题
  blurb: "一句话剧情简介，1–2 句中文。",
  scene: "forest",                // 场景：dawn | forest | house | classroom | market | rain | sea | hill | night
  goal: ["学习打招呼和自我介绍", "掌握 sein 的现在时"],   // 2–4 条中文目标
  friend: ["oasilia"],            // 本课首次正式登场的角色 id（可为空数组）

  warmup: {                       // 可选：课文前的小对话，自动成为 00 节
    title: "Wer bist du?",
    lead: "先听一段小对话，不用背。",   // 可选
    pattern: "Wer bist du? — Ich bin … / Ich heiße …",  // 可选：本课核心句型
    lines: [                      // 2–8 行，规则同 texts
      { who: "oasilia", emo: "happy", de: "Hallo! Wer bist du?", zh: "你好！你是谁？" },
      { who: "hero", emo: "normal", de: "Ich bin {{name}}.", zh: "我是{{name}}。" }
    ],
    forms: {                      // 可选：动词/结构变形展示，点一下听例句
      verb: "sein（是）",
      items: [                    // 2–8 组：[人称/标签, 变位, 例句]
        ["ich", "bin", "Ich bin {{name}}."],
        ["du", "bist", "Du bist ein Freund."]
      ]
    }
  },

  vocab: [{                       // 12–22 条
    de: "hallo",                  // 德语词/短语，名词带冠词
    zh: "你好",
    pos: "感叹词",                 // 名词/动词/形容词/感叹词/短语/数词
    ipa: "[haˈloː]",              // 可选，尽量给
    note: "任何时间都能用的打招呼。",  // 可选，中文提示
    ex: { de: "Hallo, ich bin …", zh: "你好，我是……" }  // 必填例句
  }],

  texts: [{                       // 2 篇
    title: "Der erste Morgen",
    subtitle: "第一个早晨",         // 可选
    lines: [
      { n: "森林边缘，阳光从树叶间落下来。" },      // 中文旁白（不要写德语旁白）
      { who: "hero", emo: "worried", de: "Wo bin ich?", zh: "我在哪里？" },
      { who: "oasilia", emo: "happy", de: "Hallo!", zh: "你好！" }
    ]
  }],

  grammar: [{                     // 1–2 个
    title: "sein（是）",
    intro: "一段中文讲解，可包含 `代码` 和 **粗体**。",
    table: {                      // 可选
      head: ["人称", "sein", "例句"],
      rows: [["ich", "bin", "Ich bin ein Pokémon."]]
    },
    notes: ["中文补充说明 1", "补充说明 2"],   // 可选
    examples: [{ de: "Ich bin Oasilia.", zh: "我是欧亚西莉亚。" }]  // 可选
  }],

  culture: { title: "林缘村", text: "80–150 字中文世界观小记。" },

  exercises: [{                   // 6–10 题，至少覆盖 3 种题型
    type: "choice", q: "……", options: ["A", "B", "C"], answer: 0, explain: "中文解析"
  }, {
    type: "fill", q: "Ich ___ ein Pokémon.", answer: ["bin"], hint: "sein", explain: "……"
  }, {
    type: "order", q: "把单词排成正确的句子：", words: ["bin", "Ich", "ein", "Pokémon"], answer: "Ich bin ein Pokémon.", explain: "……"
  }, {
    type: "match", q: "把德语和中文配对：", pairs: [["Hallo", "你好"], ["Danke", "谢谢"], ["Ja", "是"]]
  }, {
    type: "listen", audio: "Wie heißt du?", options: ["Wie heißt du?", "Woher kommst du?"], answer: 0, explain: "……"
  }, {
    type: "truefalse", q: "……", answer: true, explain: "……"
  }]
};
```

## 字段规则
- **角色 id**：`hero`（主角，渲染时用玩家名字与所选物种）、`oasilia`、`atlas`、`licht`、`mira`、`arko`、`emi`、`wiss`。
- **表情 emo**：`normal` `happy` `sad` `angry` `surprised` `crying` `sigh` `stunned` `worried`。
- **占位符**：课文与练习里可以用 `{{name}}`（玩家名字）、`{{species}}`（Flemmli/Plinfa/Bauz）。不要用其他占位符。
- **choice / listen**：`answer` 是正确选项的下标（从 0 开始）。
- **fill**：`answer` 是字符串数组（可接受多个正确写法），比较时忽略大小写和首尾空格；`q` 中用 `___` 表示空格。
- **order**：`words` 是打乱的词块，`answer` 是含正确标点的完整句子。
- **match**：3–4 对，`pairs` 每项 `[德语, 中文]`。
- **truefalse**：`answer` 是布尔值。
- 文本里的中文引号用「」，德语引号用 „“。句子结尾标点完整。
- 所有德语必须 A1 且只用 `docs/curriculum.md` 中本课及之前的词汇/语法。

## 自检
```bash
node tools/validate.mjs 01 02 03
```
无输出即通过。写完后必须自检，并把结果报告给 Lead。
