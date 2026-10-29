window.LESSON = {
  id: 9,
  chapter: "Kapitel 9",
  title: "Fliegen",
  subtitle: "学飞",
  blurb: "阿尔科拉你去村外的小山坡练习飞行。他摔了一次又一次，却一直笑。阿特拉斯路过，讲起自己小时候学飞的日子，最后背着你飞了一小圈。",
  scene: "hill",
  goal: [
    "用 können / wollen / müssen 说「能、想、必须」",
    "记住情态动词句的语序：实义动词放在句末",
    "用德语说学飞、摔倒和害怕的感觉"
  ],
  friend: [],
  warmup: {
    title: "Ich will fliegen!",
    lead: "阿尔科今天要去学飞。先听他怎么说，注意句末的动词。",
    pattern: "Ich kann … / Ich will … / Ich muss …",
    lines: [
      { who: "arko", emo: "happy", de: "Komm, {{name}}! Ich will fliegen!", zh: "来，{{name}}！我想飞！" },
      { who: "hero", emo: "surprised", de: "Kannst du fliegen?", zh: "你会飞吗？" },
      { who: "arko", emo: "normal", de: "Nein. Aber ich kann es versuchen.", zh: "不会。不过我可以试一试。" },
      { who: "arko", emo: "happy", de: "Ich muss nur mutig sein.", zh: "我只要勇敢就行。" },
      { who: "hero", emo: "normal", de: "Dann bin ich auch mutig.", zh: "那我也勇敢一点。" },
      { who: "arko", emo: "happy", de: "Ja! Komm!", zh: "对！走吧！" }
    ],
    forms: {
      verb: "können / müssen / wollen（能、必须、想）",
      items: [
        ["können · ich", "kann", "Ich kann fliegen."],
        ["können · du", "kannst", "Du kannst es versuchen."],
        ["können · er / sie", "kann", "Oasilia kann kochen."],
        ["müssen · ich", "muss", "Ich muss vorsichtig sein."],
        ["müssen · du", "musst", "Du musst langsam fliegen."],
        ["müssen · er / sie", "muss", "Arko muss vorsichtig sein."],
        ["wollen · ich", "will", "Ich will fliegen."]
      ]
    }
  },
  vocab: [
    { de: "fliegen", zh: "飞", pos: "动词", ipa: "[ˈfliːɡn̩]", note: "本课只用现在时：ich fliege, du fliegst。", ex: { de: "Ich will fliegen.", zh: "我想飞。" } },
    { de: "fallen", zh: "落下；摔倒", pos: "动词", ipa: "[ˈfalən]", note: "du fällst, er fällt，变音要记。", ex: { de: "Arko fällt oft.", zh: "阿尔科常常摔下来。" } },
    { de: "der Hügel, die Hügel", zh: "小山坡", pos: "名词", ipa: "[ˈhyːɡl̩]", ex: { de: "Der Hügel ist hoch.", zh: "山坡很高。" } },
    { de: "hoch", zh: "高的", pos: "形容词", ipa: "[hoːx]", ex: { de: "Das ist hoch!", zh: "这好高！" } },
    { de: "tief", zh: "深的；低的", pos: "形容词", ipa: "[tiːf]", ex: { de: "Das Meer ist tief.", zh: "海很深。" } },
    { de: "der Flügel, die Flügel", zh: "翅膀", pos: "名词", ipa: "[ˈflyːɡl̩]", ex: { de: "Meine Flügel sind klein.", zh: "我的翅膀很小。" } },
    { de: "versuchen", zh: "尝试", pos: "动词", ipa: "[fɛɐ̯ˈzuːxn̩]", ex: { de: "Ich versuche es.", zh: "我试一试。" } },
    { de: "helfen", zh: "帮助", pos: "动词", ipa: "[ˈhɛlfn̩]", note: "后面的人用第三格：Oasilia hilft Arko.", ex: { de: "Oasilia hilft Arko.", zh: "欧亚西莉亚帮助阿尔科。" } },
    { de: "können", zh: "能；会", pos: "情态动词", ipa: "[ˈkœnən]", note: "ich kann / du kannst / er kann，实义动词放句末。", ex: { de: "Du kannst fliegen.", zh: "你会飞。" } },
    { de: "wollen", zh: "想；要", pos: "情态动词", ipa: "[ˈvɔlən]", note: "ich will / du willst / er will。", ex: { de: "Ich will schnell fliegen.", zh: "我想飞得快一点。" } },
    { de: "müssen", zh: "必须", pos: "情态动词", ipa: "[ˈmʏsn̩]", note: "ich muss / du musst / er muss。", ex: { de: "Du musst vorsichtig sein.", zh: "你必须小心。" } },
    { de: "die Angst, die Ängste", zh: "害怕；恐惧", pos: "名词", ipa: "[aŋst]", note: "Angst haben = 害怕：Ich habe Angst.", ex: { de: "Ich habe Angst.", zh: "我害怕。" } },
    { de: "mutig", zh: "勇敢的", pos: "形容词", ipa: "[ˈmuːtɪç]", ex: { de: "Arko ist mutig.", zh: "阿尔科很勇敢。" } },
    { de: "vorsichtig", zh: "小心的", pos: "形容词", ipa: "[ˈfoːɐ̯zɪçtɪç]", ex: { de: "Ich bin vorsichtig.", zh: "我很小心。" } },
    { de: "schnell", zh: "快的", pos: "形容词", ipa: "[ʃnɛl]", ex: { de: "Du fliegst schnell.", zh: "你飞得很快。" } },
    { de: "langsam", zh: "慢的", pos: "形容词", ipa: "[ˈlaŋzaːm]", ex: { de: "Ich fliege langsam.", zh: "我飞得很慢。" } },
    { de: "das Gras", zh: "草；草地", pos: "名词", ipa: "[ɡʁaːs]", note: "通常不用复数。", ex: { de: "Das Gras ist weich.", zh: "草很软。" } },
    { de: "weich", zh: "柔软的", pos: "形容词", ipa: "[vaɪç]", note: "和 hart（硬）相对。", ex: { de: "Mein Bett ist weich.", zh: "我的床很软。" } },
    { de: "oft", zh: "经常", pos: "副词", ipa: "[ɔft]", note: "和 immer（总是）、nie（从不）一起记。", ex: { de: "Ich falle oft.", zh: "我经常摔下来。" } }
  ],
  texts: [
    {
      title: "Auf dem Hügel",
      subtitle: "小山坡上",
      lines: [
        { n: "下午，天很蓝。阿尔科拉着你往村外走，村外有一个圆圆的小山坡。" },
        { who: "arko", emo: "happy", de: "Komm, {{name}}! Da ist der Hügel!", zh: "来，{{name}}！山坡就在那边！" },
        { who: "hero", emo: "worried", de: "Der Hügel ist hoch.", zh: "山坡好高。" },
        { who: "arko", emo: "happy", de: "Ja! Ich will fliegen. Ich kann fliegen!", zh: "对呀！我想飞。我会飞！" },
        { who: "hero", emo: "surprised", de: "Du kannst fliegen?", zh: "你会飞？" },
        { who: "arko", emo: "normal", de: "Meine Flügel sind klein. Aber ich muss es versuchen.", zh: "我的翅膀很小。但我必须试一试。" },
        { n: "阿尔科站到坡顶，张开小小的翅膀跳下去。风把他抬起来，又轻轻放下。他掉进草丛里。" },
        { who: "hero", emo: "worried", de: "Arko! Alles gut?", zh: "阿尔科！你没事吧？" },
        { who: "arko", emo: "happy", de: "Ja! Das Gras ist weich. Ich habe keine Angst.", zh: "没事！草很软。我不怕。" },
        { who: "hero", emo: "normal", de: "Du fällst aber oft.", zh: "可是你经常摔下来呀。" },
        { who: "arko", emo: "normal", de: "Ich falle oft. Aber ich bin mutig. Ich will schnell fliegen.", zh: "我经常摔。可是我很勇敢。我想飞得快一点。" },
        { n: "他又试了一次。这一次飞得远了一点，还是掉了下来。" },
        { who: "arko", emo: "normal", de: "Ich versuche es noch einmal.", zh: "我再试一次。" },
        { n: "这时，小路上走来一个熟悉的身影，翅膀收在身后。" },
        { who: "hero", emo: "happy", de: "Atlas!", zh: "阿特拉斯！" }
      ]
    },
    {
      title: "Atlas erzählt",
      subtitle: "阿特拉斯讲从前",
      lines: [
        { who: "atlas", emo: "normal", de: "Hallo, ihr zwei. Der Hügel ist hoch, oder?", zh: "你们好啊。山坡很高，对吧？" },
        { who: "arko", emo: "normal", de: "Atlas! Ich falle oft.", zh: "阿特拉斯！我经常摔下来。" },
        { n: "阿特拉斯笑了，看着山坡，讲起自己的小时候。" },
        { who: "atlas", emo: "normal", de: "Ich falle auch oft.", zh: "我也经常摔。" },
        { who: "arko", emo: "surprised", de: "Du? Nein!", zh: "你？不会吧！" },
        { who: "atlas", emo: "normal", de: "Ja. Oasilia hilft. Sie sagt: „Du musst vorsichtig sein.“", zh: "真的。欧亚西莉亚会帮忙。她说：「你必须小心。」" },
        { who: "hero", emo: "surprised", de: "Oasilia?", zh: "欧亚西莉亚？" },
        { who: "atlas", emo: "happy", de: "Ja. Wir sind Freunde.", zh: "对。我们是朋友。" },
        { who: "atlas", emo: "normal", de: "Jetzt fliege ich. Aber ich muss vorsichtig sein.", zh: "现在我会飞了。但我必须小心。" },
        { who: "atlas", emo: "happy", de: "Komm, {{name}}! Wir fliegen zusammen.", zh: "来，{{name}}！我们一起飞。" },
        { who: "hero", emo: "worried", de: "Ich habe Angst.", zh: "我害怕。" },
        { who: "atlas", emo: "normal", de: "Keine Angst. Ich bin vorsichtig. Komm!", zh: "别怕。我很小心。来吧！" },
        { n: "阿特拉斯低下头，让你爬到他的背上，慢慢张开翅膀。" },
        { who: "hero", emo: "surprised", de: "Das ist hoch!", zh: "好高啊！" },
        { who: "atlas", emo: "normal", de: "Ja. Aber ich fliege langsam.", zh: "是呀。不过我飞得很慢。" },
        { n: "风从你身边过去。你看见村子、森林，还有很远很远的海。" },
        { who: "hero", emo: "happy", de: "Da ist das Meer! Das Meer ist tief!", zh: "海在那里！海好深！" },
        { who: "atlas", emo: "happy", de: "Schön, oder?", zh: "很美，对吧？" },
        { n: "后来，你们在草地上落下。阿尔科张开小翅膀跑过来，大声喊你的名字。" }
      ]
    }
  ],
  grammar: [
    {
      title: "情态动词 können / wollen / müssen",
      intro: "情态动词表示「能、想、必须」。它按人称变位，放在**第二位**；后面的实义动词用**原形，放在句末**。",
      table: {
        head: ["人称", "können（能）", "wollen（想）", "müssen（必须）"],
        rows: [
          ["ich", "kann", "will", "muss"],
          ["du", "kannst", "willst", "musst"],
          ["er / sie / es", "kann", "will", "muss"],
          ["wir", "können", "wollen", "müssen"],
          ["ihr", "könnt", "wollt", "müsst"],
          ["sie（他们/她们）", "können", "wollen", "müssen"]
        ]
      },
      notes: [
        "ich 和 er/sie/es 的形式一样：ich kann / er kann，不加 -t 词尾。",
        "实义动词永远用原形：Du musst vorsichtig **sein**.（不是 bist）",
        "否定词 nicht 放在实义动词前面：Ich kann nicht fliegen."
      ],
      examples: [
        { de: "Ich kann fliegen.", zh: "我会飞。" },
        { de: "Du musst vorsichtig sein.", zh: "你必须小心。" }
      ]
    },
    {
      title: "语序：情态动词在第二位，实义动词在句末",
      intro: "情态动词句像一个框：**左边是情态动词，右边是实义动词的原形**，中间可以放其他成分。这是德语最典型的语序之一，多读几遍就顺了。",
      table: {
        head: ["句子", "中文", "句末的动词"],
        rows: [
          ["Ich kann fliegen.", "我会飞。", "fliegen"],
          ["Arko will schnell fliegen.", "阿尔科想飞得快一点。", "fliegen"],
          ["Du musst vorsichtig sein.", "你必须小心。", "sein"],
          ["Wir wollen zusammen fliegen.", "我们想一起飞。", "fliegen"],
          ["Ich kann nicht fliegen.", "我不会飞。", "fliegen"]
        ]
      },
      notes: [
        "只有情态动词变位，实义动词不变化。",
        "nicht 放在实义动词前面：Ich will nicht fallen.",
        "一般疑问句把情态动词提到句首：Kannst du fliegen?"
      ],
      examples: [
        { de: "Arko will fliegen.", zh: "阿尔科想飞。" },
        { de: "Ich muss es versuchen.", zh: "我必须试一试。" }
      ]
    }
  ],
  culture: {
    title: "村外的小山坡",
    text: "林缘村外的小山坡是孩子们的练习场。坡不高，草很软，摔下来也不疼。想学飞的孩子，都会先在这里摔上许多次。村里的老人说，翅膀不是天生的，是一次一次摔出来的。阿特拉斯小时候也来过这里；现在他飞得很好，可每次路过山坡，还是会停下来看看。"
  },
  exercises: [
    {
      type: "fill",
      q: "Ich ___ fliegen.（我会飞。）",
      answer: ["kann"],
      hint: "können 的 ich 形式",
      explain: "情态动词按人称变位，ich 配 kann：Ich kann fliegen."
    },
    {
      type: "fill",
      q: "Du ___ vorsichtig sein.（你必须小心。）",
      answer: ["musst"],
      hint: "müssen 的 du 形式",
      explain: "du 配 musst，实义动词 sein 用原形放在句末：Du musst vorsichtig sein."
    },
    {
      type: "order",
      q: "把单词排成正确的句子：",
      words: ["Ich", "will", "schnell", "fliegen"],
      answer: "Ich will schnell fliegen.",
      explain: "情态动词 will 在第二位，实义动词 fliegen 用原形放句末。"
    },
    {
      type: "choice",
      q: "「我必须小心。」用德语怎么说？",
      options: ["Ich muss vorsichtig sein.", "Ich muss sein vorsichtig.", "Ich vorsichtig muss sein."],
      answer: 0,
      explain: "情态动词在第二位，实义动词 sein 的原形放在句末：Ich muss vorsichtig sein."
    },
    {
      type: "match",
      q: "把德语和中文配对：",
      pairs: [["fliegen", "飞"], ["fallen", "落下"], ["der Flügel", "翅膀"], ["der Hügel", "小山坡"]],
      explain: "本课的核心动作词和名词：fliegen 飞、fallen 落下、der Flügel 翅膀、der Hügel 小山坡。"
    },
    {
      type: "listen",
      audio: "Arko will fliegen.",
      options: ["Arko will fliegen.", "Arko kann nicht fliegen.", "Arko muss fliegen."],
      answer: 0,
      explain: "听到的是 Arko will fliegen.（阿尔科想飞。）will 表示「想」。"
    },
    {
      type: "truefalse",
      q: "阿特拉斯说他自己小时候也常常摔下来。",
      answer: true,
      explain: "课文里阿尔科讲完，阿特拉斯笑着说：Ich falle auch oft. 后来还提到欧亚西莉亚帮过他。"
    },
    {
      type: "choice",
      q: "情态动词句里，实义动词放在哪里？",
      options: ["句首", "第二位", "句末"],
      answer: 2,
      explain: "情态动词占第二位，实义动词用原形放在句末。例：Du musst vorsichtig sein."
    }
  ]
};
