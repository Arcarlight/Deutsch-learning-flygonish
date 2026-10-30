window.LESSON = {
  id: 8,
  chapter: "Kapitel 8",
  title: "Regen und Regenbogen",
  subtitle: "雨天",
  blurb: "下雨了，大家留在教室里。艾米怕雷声，钻到米拉的翅膀下面；阿尔科又想跑出去试翅膀。雨停以后，天边出现了一道彩虹。",
  scene: "rain",
  goal: [
    "学会说天气：Es ist kalt. / Es regnet. / Die Sonne scheint.",
    "用 es gibt 说「有……」，并注意后面的第四格",
    "用德语描述下雨天的教室和天空"
  ],
  friend: [],
  warmup: {
    title: "Wie ist das Wetter?",
    lead: "先听一小段关于天气的对话，不用背。等会儿在课文里，这些句子还会出现。",
    pattern: "Es ist … / Es gibt …",
    lines: [
      { who: "mira", emo: "normal", de: "Guten Morgen, {{name}}. Wie ist das Wetter?", zh: "早上好，{{name}}。天气怎么样？" },
      { who: "hero", emo: "normal", de: "Es ist kalt. Und es ist nass.", zh: "很冷。而且很湿。" },
      { who: "mira", emo: "surprised", de: "Regnet es?", zh: "下雨了吗？" },
      { who: "hero", emo: "normal", de: "Ja. Es gibt viel Regen.", zh: "下了。雨很多。" },
      { who: "mira", emo: "happy", de: "Dann ist es hier warm. Komm!", zh: "那这里很暖和。过来吧！" }
    ],
    forms: {
      verb: "es ist / es gibt（天气与「有」）",
      items: [
        ["es ist + 形容词", "ist", "Es ist warm."],
        ["es gibt + 第四格", "gibt", "Es gibt viele Wolken."],
        ["es gibt + der（阳性）", "einen", "Es gibt einen Regenbogen."],
        ["es regnet", "regnet", "Es regnet heute."],
        ["die Sonne", "scheint", "Die Sonne scheint."]
      ]
    }
  },
  vocab: [
    { de: "das Wetter", zh: "天气", pos: "名词", ipa: "[ˈvɛtɐ]", note: "只说天气本身，不说具体哪一天。", ex: { de: "Wie ist das Wetter?", zh: "天气怎么样？" } },
    { de: "die Sonne, die Sonnen", zh: "太阳", pos: "名词", ipa: "[ˈzɔnə]", ex: { de: "Die Sonne scheint.", zh: "太阳出来了。" } },
    { de: "der Regen", zh: "雨", pos: "名词", ipa: "[ˈʁeːɡn̩]", note: "通常不用复数。", ex: { de: "Der Regen ist kalt.", zh: "雨很凉。" } },
    { de: "der Wind, die Winde", zh: "风", pos: "名词", ipa: "[vɪnt]", ex: { de: "Der Wind ist warm.", zh: "风是暖的。" } },
    { de: "die Wolke, die Wolken", zh: "云", pos: "名词", ipa: "[ˈvɔlkə]", ex: { de: "Es gibt viele Wolken.", zh: "有很多云。" } },
    { de: "der Himmel", zh: "天空", pos: "名词", ipa: "[ˈhɪml̩]", ex: { de: "Der Himmel ist schön.", zh: "天空很美。" } },
    { de: "warm", zh: "温暖的", pos: "形容词", ipa: "[vaʁm]", ex: { de: "Es ist warm.", zh: "天气暖和。" } },
    { de: "kalt", zh: "冷的", pos: "形容词", ipa: "[kalt]", ex: { de: "Heute ist es kalt.", zh: "今天很冷。" } },
    { de: "nass", zh: "湿的", pos: "形容词", ipa: "[nas]", ex: { de: "Es ist nass und kalt.", zh: "又湿又冷。" } },
    { de: "trocken", zh: "干的", pos: "形容词", ipa: "[ˈtʁɔkn̩]", ex: { de: "Jetzt ist es trocken.", zh: "现在干了。" } },
    { de: "scheinen", zh: "照耀", pos: "动词", ipa: "[ˈʃaɪnən]", note: "常和 die Sonne 搭配：Die Sonne scheint.", ex: { de: "Die Sonne scheint.", zh: "太阳照着。" } },
    { de: "regnen", zh: "下雨", pos: "动词", ipa: "[ˈʁeːɡnən]", note: "只用 es 作主语：es regnet。", ex: { de: "Es regnet heute.", zh: "今天下雨。" } },
    { de: "der Regenbogen, die Regenbögen", zh: "彩虹", pos: "名词", ipa: "[ˈʁeːɡn̩ˌboːɡn̩]", note: "阳性名词，es gibt 后面用 einen Regenbogen。", ex: { de: "Es gibt einen Regenbogen.", zh: "有一道彩虹。" } },
    { de: "die Jahreszeit, die Jahreszeiten", zh: "季节", pos: "名词", ipa: "[ˈjaːʁəsˌt͡saɪt]", ex: { de: "Es gibt vier Jahreszeiten.", zh: "一年有四个季节。" } },
    { de: "draußen", zh: "外面", pos: "副词", ipa: "[ˈdʁaʊsn̩]", note: "和 drinnen（里面）相对。", ex: { de: "Draußen ist es kalt.", zh: "外面很冷。" } },
    { de: "der Donner", zh: "雷声", pos: "名词", ipa: "[ˈdɔnɐ]", ex: { de: "Der Donner ist laut.", zh: "雷声很响。" } },
    { de: "laut", zh: "响的；大声的", pos: "形容词", ipa: "[laʊt]", ex: { de: "Der Regen ist laut.", zh: "雨声很响。" } }
  ],
  texts: [
    {
      title: "Es regnet",
      subtitle: "下雨了",
      lines: [
        { n: "早上，雨点一直打在教室的窗户上，玻璃上全是水。" },
        { n: "莉安娜坐在最后一排，安静地看着窗外的雨，偶尔在纸上写点什么。" },
        { who: "licht", emo: "normal", de: "Guten Morgen, Kinder. Heute regnet es.", zh: "早上好，孩子们。今天下雨。" },
        { who: "mira", emo: "normal", de: "Es ist kalt und nass.", zh: "又冷又湿。" },
        { who: "emi", emo: "worried", de: "Der Donner ist laut!", zh: "雷声好响！" },
        { n: "艾米缩起翅膀，躲到米拉的翅膀下面。" },
        { who: "mira", emo: "normal", de: "Komm, Emi. Hier ist es warm.", zh: "过来，艾米。这里暖和。" },
        { who: "licht", emo: "normal", de: "Es gibt viele Wolken. Und es gibt Regen und Wind.", zh: "天上有许多云。还有雨和风。" },
        { who: "hero", emo: "surprised", de: "Es gibt … Regen?", zh: "有……雨？" },
        { who: "licht", emo: "happy", de: "Ja. Es regnet. Es ist nass und kalt.", zh: "对。下雨了。又湿又冷。" },
        { n: "阿尔科站起来，看着窗外。他又想去试一试自己的翅膀了。" },
        { who: "arko", emo: "happy", de: "Draußen ist es nass. Aber ich liebe den Regen!", zh: "外面湿湿的。可是我喜欢雨！" },
        { who: "licht", emo: "normal", de: "Nein, Arko. Es ist zu kalt. Du bist noch klein.", zh: "不行，阿尔科。太冷了。你还小呢。" },
        { who: "arko", emo: "sigh", de: "Ich bin nicht klein!", zh: "我才不小！" },
        { n: "阿尔科坐回椅子上，不服气地看着窗外。" },
        { who: "mira", emo: "normal", de: "Der Regen ist gut. Der Garten braucht Wasser.", zh: "下雨很好。花园需要水。" }
      ]
    },
    {
      title: "Der Regenbogen",
      subtitle: "彩虹",
      lines: [
        { n: "下午，雨声轻轻小了。利希特老师走到窗边。" },
        { who: "licht", emo: "normal", de: "Es regnet nicht mehr. Die Sonne scheint.", zh: "雨停了。太阳出来了。" },
        { who: "hero", emo: "happy", de: "Es ist warm!", zh: "暖和了！" },
        { who: "arko", emo: "surprised", de: "Was ist das? Da!", zh: "那是什么？在那儿！" },
        { who: "licht", emo: "happy", de: "Das ist ein Regenbogen.", zh: "那是一道彩虹。" },
        { who: "arko", emo: "happy", de: "Es gibt einen Regenbogen!", zh: "有一道彩虹！" },
        { n: "大家都跑到窗边。彩虹从森林上头一直连到海边。" },
        { who: "emi", emo: "happy", de: "Der Regenbogen ist sehr schön!", zh: "彩虹真好看！" },
        { who: "mira", emo: "normal", de: "Jetzt ist es warm und trocken.", zh: "现在又暖和又干燥。" },
        { who: "hero", emo: "normal", de: "Regen, Sonne … und ein Regenbogen.", zh: "雨、太阳……还有一道彩虹。" },
        { who: "licht", emo: "normal", de: "Es gibt vier Jahreszeiten. Und es gibt viel Regen.", zh: "一年有四个季节。而且雨也很多。" },
        { who: "arko", emo: "happy", de: "Ich liebe den Regen!", zh: "我喜欢雨！" },
        { n: "窗外的水洼亮亮的，里面有一小片天空。" }
      ]
    }
  ],
  grammar: [
    {
      title: "天气表达：es ist + 形容词 / es regnet",
      intro: "说天气有两种常用说法。一种用 **es ist + 形容词**：Es ist kalt.（天冷。）另一种用动词：**Es regnet.**（下雨。）**Die Sonne scheint.**（太阳出来。）这里的 es 只是占位，不指人或东西。",
      table: {
        head: ["德语", "中文", "说明"],
        rows: [
          ["Es ist warm.", "天气暖和。", "es ist + 形容词"],
          ["Es ist kalt und nass.", "又冷又湿。", "两个形容词用 und 连起来"],
          ["Es regnet.", "下雨了。", "天气动词 regnen 的主语只有 es"],
          ["Die Sonne scheint.", "太阳出来了。", "这里主语是 die Sonne，动词按第三人称变位"]
        ]
      },
      notes: [
        "es ist 后面的形容词**不变格**，因为它在 sein 后面作谓语：Es ist kalt.（不是 kalte）",
        "问天气用 Wie ist das Wetter?，可以用 Es ist … 直接回答。",
        "「天气」是 das Wetter，中性名词。"
      ],
      examples: [
        { de: "Es ist kalt und nass.", zh: "又冷又湿。" },
        { de: "Die Sonne scheint, und es ist warm.", zh: "太阳出来了，天气很暖和。" }
      ]
    },
    {
      title: "es gibt + 第四格（有……）",
      intro: "想说「某处有某物」，用 **es gibt**。es gibt 永远只有这个形式，后面的名词要用**第四格**：der → den/einen，die → die/eine，das → das/ein。",
      table: {
        head: ["名词（第一格）", "第四格", "例句"],
        rows: [
          ["der Regenbogen（阳性）", "einen Regenbogen", "Es gibt einen Regenbogen."],
          ["die Wolke（阴性）", "eine Wolke", "Es gibt eine Wolke."],
          ["das Haus（中性）", "ein Haus", "Es gibt ein Haus."],
          ["die Wolken（复数）", "die Wolken", "Es gibt viele Wolken."]
        ]
      },
      notes: [
        "es gibt 的动词形式永远是 gibt，不管后面是单数还是复数。",
        "否定用 kein / keine（第 5 课学过）：Es gibt keine Sonne.",
        "天气里也常这样用：Es gibt Regen. / Es gibt Wind. / Es gibt Wolken."
      ],
      examples: [
        { de: "Es gibt einen Regenbogen.", zh: "有一道彩虹。" },
        { de: "Es gibt viele Wolken.", zh: "有许多云。" }
      ]
    }
  ],
  culture: {
    title: "雨天的林缘村",
    text: "在林缘村，下雨天是安静的。屋檐滴着水，路上听不见脚步声，只有雨点打在木头上。大人们把工具收进屋里，孩子们就留在教室，看雨水从窗户上流下来。村里人说，雨是森林的客人，来得慢，走得也慢。雨停以后，屋外的小水洼里会有一小片天空；要是太阳也出来了，天边就会挂上一道彩虹。"
  },
  exercises: [
    {
      type: "choice",
      q: "「今天下雨。」用德语怎么说？",
      options: ["Heute ist Regen.", "Heute regnet es.", "Heute gibt es regnet."],
      answer: 1,
      explain: "天气动词 regnen 的主语只有 es：Heute regnet es. 「有雨」也可以说 Es gibt Regen.，但动词不能再加 regnet。"
    },
    {
      type: "fill",
      q: "Es ___ kalt und nass.（又冷又湿。）",
      answer: ["ist"],
      hint: "sein 的 es 形式",
      explain: "es 作形式主语，动词用第三人称单数 ist：Es ist kalt und nass."
    },
    {
      type: "fill",
      q: "Es gibt einen ___.（有一道彩虹。）",
      answer: ["Regenbogen"],
      hint: "der Regenbogen",
      explain: "es gibt 后面用第四格：der Regenbogen → einen Regenbogen。"
    },
    {
      type: "match",
      q: "把德语和中文配对：",
      pairs: [["die Sonne", "太阳"], ["die Wolke", "云"], ["der Wind", "风"], ["der Regen", "雨"]],
      explain: "四个都是天气词，名词都带冠词：die Sonne、die Wolke、der Wind、der Regen。"
    },
    {
      type: "order",
      q: "把单词排成正确的句子：",
      words: ["Es", "gibt", "viele", "Wolken"],
      answer: "Es gibt viele Wolken.",
      explain: "es gibt 的句式：Es + gibt + 第四格名词。复数 die Wolken 的第四格还是 die Wolken。"
    },
    {
      type: "listen",
      audio: "Die Sonne scheint.",
      options: ["Die Sonne scheint.", "Es regnet.", "Es ist kalt."],
      answer: 0,
      explain: "听到的是 Die Sonne scheint.（太阳出来了。）"
    },
    {
      type: "truefalse",
      q: "阿尔科想在雨天到外面去，利希特老师同意了。",
      answer: false,
      explain: "老师说 Nein, Arko. Es ist zu kalt. Du bist noch klein. 阿尔科只好坐回椅子上。"
    },
    {
      type: "choice",
      q: "下面哪一句是对的？",
      options: ["Es gibt ein Regenbogen.", "Es gibt einen Regenbogen.", "Es gibt eine Regenbogen."],
      answer: 1,
      explain: "der Regenbogen 是阳性名词，第四格是 einen Regenbogen，所以选第二句。"
    }
  ]
};
