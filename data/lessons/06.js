window.LESSON = {
  id: 6,
  chapter: "Kapitel 6",
  title: "Mittagessen bei Oasilia",
  subtitle: "午餐与文柚果",
  blurb: "中午回家，桌上有文柚果沙拉和面包。你第一次尝到这种酸酸甜甜的果子，窗户那边忽然飞进来一个饿坏了的小客人。",
  scene: "house",
  goal: [
    "学会用 möchten 礼貌地说「想要」",
    "分清 nicht 和 kein 两种否定",
    "说出常见食物和饮料的名称",
    "谈论饿、饱与吃饭"
  ],
  friend: ["emi"],
  warmup: {
    title: "Was möchtest du?",
    lead: "先听一小段对话，不用背。等会儿课文里还会再听到这些句子。",
    pattern: "Möchtest du …? — Ja, bitte. / Nein, danke.",
    lines: [
      { who: "oasilia", emo: "happy", de: "{{name}}, was möchtest du? Saft oder Wasser?", zh: "{{name}}，你想要什么？果汁还是水？" },
      { who: "hero", emo: "normal", de: "Ich möchte Wasser, bitte.", zh: "我想要水，谢谢。" },
      { who: "atlas", emo: "happy", de: "Und ich möchte Saft.", zh: "那我想要果汁。" },
      { who: "oasilia", emo: "normal", de: "Möchtest du auch Käse?", zh: "你也想要奶酪吗？" },
      { who: "hero", emo: "normal", de: "Nein, danke. Ich möchte keinen Käse. Ich möchte ein Brot.", zh: "不用，谢谢。我不想要奶酪。我想要一个面包。" },
      { who: "oasilia", emo: "happy", de: "Hier, bitte! Wasser und Brot.", zh: "给，请！水和面包。" },
      { who: "hero", emo: "happy", de: "Danke!", zh: "谢谢！" }
    ],
    forms: {
      verb: "möchten（想要）",
      items: [
        ["ich", "möchte", "Ich möchte Wasser."],
        ["du", "möchtest", "Möchtest du Milch?"],
        ["er", "möchte", "Atlas möchte Brot."],
        ["sie", "möchte", "Oasilia möchte Tsitrubeeren."],
        ["wir", "möchten", "Wir möchten Saft."],
        ["ihr", "möchtet", "Möchtet ihr Wasser?"]
      ]
    }
  },
  vocab: [
    { de: "essen", zh: "吃", pos: "动词", ipa: "[ˈɛsn̩]", note: "不规则动词：du isst，er/sie/es isst。", ex: { de: "Ich esse einen Apfel.", zh: "我吃一个苹果。" } },
    { de: "trinken", zh: "喝", pos: "动词", ipa: "[ˈtʁɪŋkn̩]", ex: { de: "Ich trinke Wasser.", zh: "我喝水。" } },
    { de: "das Essen", zh: "饭菜；食物", pos: "名词", ipa: "[ˈɛsn̩]", note: "由动词 essen 变来的名词，永远大写。", ex: { de: "Das Essen ist lecker.", zh: "饭菜很好吃。" } },
    { de: "das Mittagessen", zh: "午饭", pos: "名词", ipa: "[ˈmɪtaːkˌʔɛsn̩]", note: "das Mittagessen 是中午那顿饭，一般不加复数。", ex: { de: "Das Mittagessen ist lecker.", zh: "午饭很好吃。" } },
    { de: "lecker", zh: "好吃的；美味的", pos: "形容词", ipa: "[ˈlɛkɐ]", ex: { de: "Die Tsitrubeeren sind lecker.", zh: "文柚果很好吃。" } },
    { de: "der Hunger", zh: "饥饿", pos: "名词", ipa: "[ˈhʊŋɐ]", note: "常用说法：Ich habe Hunger.（我饿了。）", ex: { de: "Ich habe Hunger.", zh: "我饿了。" } },
    { de: "satt", zh: "饱的", pos: "形容词", ipa: "[zat]", ex: { de: "Ich bin satt.", zh: "我吃饱了。" } },
    { de: "der Apfel, die Äpfel", zh: "苹果", pos: "名词", ipa: "[ˈapfl̩]", note: "复数 Äpfel 要变音，不要写成 Apfels。", ex: { de: "Möchtest du einen Apfel?", zh: "你想要一个苹果吗？" } },
    { de: "das Brot, die Brote", zh: "面包", pos: "名词", ipa: "[bʁoːt]", ex: { de: "Ich esse Brot mit Käse.", zh: "我吃面包配奶酪。" } },
    { de: "der Käse", zh: "奶酪", pos: "名词", ipa: "[ˈkɛːzə]", note: "通常不加复数。", ex: { de: "Ich möchte Käse.", zh: "我想要奶酪。" } },
    { de: "die Milch", zh: "牛奶", pos: "名词", ipa: "[mɪlç]", note: "不可数名词，没有复数。", ex: { de: "Ich trinke keine Milch.", zh: "我不喝牛奶。" } },
    { de: "das Wasser", zh: "水", pos: "名词", ipa: "[ˈvasɐ]", note: "不可数名词，没有复数。", ex: { de: "Ich trinke Wasser.", zh: "我喝水。" } },
    { de: "der Saft, die Säfte", zh: "果汁", pos: "名词", ipa: "[zaft]", ex: { de: "Möchtest du Saft?", zh: "你想喝果汁吗？" } },
    { de: "die Beere, die Beeren", zh: "浆果", pos: "名词", ipa: "[ˈbeːʁə]", ex: { de: "Ich esse Beeren.", zh: "我吃浆果。" } },
    { de: "die Tsitrubeere, die Tsitrubeeren", zh: "文柚果", pos: "名词", ipa: "[tsiˈtʁuːbeːʁə]", img: "assets/img/tsitrubeere.png", note: "这个世界里最受欢迎的果子，酸里带甜。", ex: { de: "Ich möchte Tsitrubeeren probieren.", zh: "我想尝尝文柚果。" } },
    { de: "kochen", zh: "做饭；煮", pos: "动词", ipa: "[ˈkɔxn̩]", ex: { de: "Oasilia kocht das Mittagessen.", zh: "欧亚西莉亚做午饭。" } },
    { de: "möchten", zh: "想要（礼貌说法）", pos: "动词", ipa: "[ˈmœçtn̩]", note: "du möchtest，er/sie/es möchte；问别人想不想要时用它会显得很客气。", ex: { de: "Ich möchte einen Apfel.", zh: "我想要一个苹果。" } },
    { de: "probieren", zh: "品尝；试一试", pos: "动词", ipa: "[pʁoˈbiːʁən]", ex: { de: "Möchtest du Tsitrubeeren probieren?", zh: "你想尝尝文柚果吗？" } },
    { de: "der Salat, die Salate", zh: "沙拉", pos: "名词", ipa: "[zaˈlaːt]", ex: { de: "Der Salat ist lecker.", zh: "沙拉很好吃。" } },
    { de: "der Teller, die Teller", zh: "盘子", pos: "名词", ipa: "[ˈtɛlɐ]", ex: { de: "Hier ist ein Teller.", zh: "这里有一个盘子。" } }
  ],
  texts: [
    {
      title: "Zu Mittag",
      subtitle: "午饭",
      lines: [
        { n: "中午，厨房里飘着面包和果子的香味。桌上摆着一碗沙拉和一小碗文柚果。" },
        { who: "oasilia", emo: "happy", de: "{{name}}! Komm, wir essen!", zh: "{{name}}！来，我们吃饭吧！" },
        { who: "hero", emo: "happy", de: "Ich habe Hunger!", zh: "我饿了！" },
        { who: "atlas", emo: "normal", de: "Ich habe auch Hunger.", zh: "我也饿了。" },
        { who: "oasilia", emo: "happy", de: "Möchtest du einen Apfel?", zh: "你想要一个苹果吗？" },
        { who: "hero", emo: "normal", de: "Nein, danke. Ich möchte Tsitrubeeren probieren.", zh: "不用了，谢谢。我想尝尝文柚果。" },
        { who: "oasilia", emo: "happy", de: "Hier, bitte!", zh: "给，请！" },
        { n: "你尝了一口。酸酸的，又有一点甜。你不知道该用哪个词说它。" },
        { who: "hero", emo: "surprised", de: "Oh! Das ist … lecker!", zh: "哦！这个……很好吃！" },
        { who: "atlas", emo: "happy", de: "Mmh, lecker!", zh: "唔，好吃！" },
        { who: "oasilia", emo: "happy", de: "Ja! Ich esse viele Tsitrubeeren.", zh: "是呀！我吃很多文柚果。" },
        { who: "atlas", emo: "happy", de: "Und ich esse Brot mit Käse.", zh: "我吃面包配奶酪。" },
        { who: "hero", emo: "normal", de: "Ich möchte auch Käse probieren.", zh: "我也想尝尝奶酪。" },
        { who: "atlas", emo: "happy", de: "Hier, bitte!", zh: "给，请！" },
        { who: "hero", emo: "happy", de: "Danke! Ich bin satt.", zh: "谢谢！我吃饱了。" }
      ]
    },
    {
      title: "Emi kommt",
      subtitle: "艾米来了",
      lines: [
        { n: "午饭吃到一半，窗户那边忽然传来翅膀扑动的声音。" },
        { who: "emi", emo: "happy", de: "Hallo, hallo! Ich habe Hunger!", zh: "你好，你好！我饿了！" },
        { who: "hero", emo: "surprised", de: "Ah! Wer bist du?", zh: "啊！你是谁？" },
        { who: "emi", emo: "happy", de: "Ich bin Emi. Ich wohne hier am Wald.", zh: "我是艾米。我就住在这片森林边。" },
        { who: "hero", emo: "normal", de: "Ich bin {{name}}.", zh: "我是{{name}}。" },
        { who: "emi", emo: "happy", de: "{{name}}! Möchtest du auch Beeren?", zh: "{{name}}！你也想要浆果吗？" },
        { who: "hero", emo: "normal", de: "Danke, ich bin satt.", zh: "谢谢，我吃饱了。" },
        { who: "emi", emo: "surprised", de: "Satt? Ich nicht!", zh: "饱了？我可不饱！" },
        { who: "oasilia", emo: "happy", de: "Emi, hier ist ein Teller. Möchtest du Milch oder Saft?", zh: "艾米，这里有个盘子。你想喝牛奶还是果汁？" },
        { who: "emi", emo: "happy", de: "Saft, bitte! Und ich esse Tsitrubeeren.", zh: "果汁，谢谢！我还要吃文柚果。" },
        { who: "hero", emo: "normal", de: "Ich trinke Wasser.", zh: "我喝水。" },
        { who: "emi", emo: "normal", de: "Wasser? Nein, danke.", zh: "水？不用了，谢谢。" },
        { who: "oasilia", emo: "normal", de: "Emi, möchtest du auch Käse?", zh: "艾米，你还要奶酪吗？" },
        { who: "emi", emo: "normal", de: "Nein, danke. Ich esse keinen Käse.", zh: "不用，谢谢。我不吃奶酪。" },
        { n: "桌上响起了小小的咀嚼声，文柚果的汁水沾在艾米的嘴角。" },
        { who: "emi", emo: "happy", de: "Danke, Oasilia! Ich komme morgen wieder!", zh: "谢谢你，欧亚西莉亚！我明天还来！" },
        { who: "oasilia", emo: "happy", de: "Ja. Morgen koche ich wieder.", zh: "好啊。明天我再做饭。" },
        { who: "hero", emo: "happy", de: "Emi, wir sind Freunde!", zh: "艾米，我们是朋友了！" }
      ]
    }
  ],
  grammar: [
    {
      title: "möchten（想要）",
      intro: "**möchten** 是「想要」的礼貌说法，点菜、要东西、问别人想不想要时都用它。除了 `ich` 和 `er/sie/es` 同形（都是 möchte）以外，它的词尾和普通动词很像。",
      table: {
        head: ["人称", "möchten", "例句"],
        rows: [
          ["ich（我）", "möchte", "Ich möchte einen Apfel."],
          ["du（你）", "möchtest", "Möchtest du Saft?"],
          ["er / sie / es（他 / 她 / 它）", "möchte", "Emi möchte Tsitrubeeren."],
          ["wir（我们）", "möchten", "Wir möchten Wasser."],
          ["ihr（你们）", "möchtet", "Möchtet ihr Saft?"],
          ["sie（他们 / 她们）", "möchten", "Sie möchten Brot."]
        ]
      },
      notes: [
        "ich möchte 和 er/sie/es möchte 一模一样，都没有 -t 词尾。",
        "möchten 后面可以直接接名词，也可以接动词原形、放在句末：Ich möchte Tsitrubeeren **probieren**.",
        "说「请」时可以在句末加 bitte：Ich möchte Wasser, bitte."
      ],
      examples: [
        { de: "Ich möchte einen Apfel, bitte.", zh: "我想要一个苹果，谢谢。" },
        { de: "Möchtest du Käse oder Brot?", zh: "你想要奶酪还是面包？" }
      ]
    },
    {
      title: "nicht 与 kein：两种否定",
      intro: "德语有两种常见的否定。否定**名词**时，名词前放 **kein / keine**；否定**动词、形容词或整句话**时，用 **nicht**。kein 要跟着名词的性、数、格变化，nicht 不变。",
      table: {
        head: ["否定什么", "用哪个词", "例子"],
        rows: [
          ["名词（阳性）", "keinen", "Ich esse keinen Käse."],
          ["名词（阴性）", "keine", "Ich trinke keine Milch."],
          ["名词（中性）", "kein", "Ich esse kein Brot."],
          ["动词", "nicht", "Ich trinke nicht."],
          ["形容词", "nicht", "Das Essen ist nicht lecker."],
          ["整句话", "nicht", "Ich bin nicht satt."]
        ]
      },
      notes: [
        "kein 用在「名词本身被否定」的时候：Ich esse **keinen** Käse.（我不吃奶酪。）",
        "nicht 用在别的地方，位置一般在动词、形容词或句末附近：Das ist **nicht** lecker.",
        "回答「要不要」时，可以只说 Danke, ich bin satt. 或 Nein, danke.，不必每句都用否定词。"
      ],
      examples: [
        { de: "Ich habe keinen Hunger.", zh: "我不饿。" },
        { de: "Ich trinke die Milch nicht.", zh: "我不喝这杯牛奶。" }
      ]
    }
  ],
  culture: {
    title: "文柚果与午饭",
    text: "林缘村的午饭是一天里最慢的一顿饭。文柚果长在森林边上，皮是橙黄色的，咬下去酸里带甜；欧亚西莉亚喜欢把它切进沙拉，或者和面包一起吃。村里人吃饭不关门，谁路过都可以坐下来——艾米就是这样，闻到味道就从窗户飞进来。她说，文柚果是森林送给村子的小太阳。"
  },
  exercises: [
    {
      type: "choice",
      q: "___ du einen Apfel?（你想要一个苹果吗？）",
      options: ["Möchte", "Möchtest", "Möchten"],
      answer: 1,
      explain: "du 搭配 möchtest：Möchtest du einen Apfel?"
    },
    {
      type: "fill",
      q: "Ich ___ Wasser.（我喝水。）",
      answer: ["trinke"],
      hint: "trinken 的 ich 形式",
      explain: "ich 后面的规则动词词尾是 -e：ich trinke。"
    },
    {
      type: "fill",
      q: "Emi ___ keinen Käse.（艾米不吃奶酪。）",
      answer: ["isst"],
      hint: "essen 的 er/sie/es 形式",
      explain: "essen 在 er/sie/es 后面变成 isst（双 s），不要写成 esst。"
    },
    {
      type: "choice",
      q: "「我不喝牛奶。」用德语怎么说？",
      options: ["Ich trinke nicht Milch.", "Ich trinke keine Milch.", "Ich trinke keinen Milch."],
      answer: 1,
      explain: "Milch 是阴性名词（die Milch），否定名词用 keine。nicht 不放在名词前，keinen 只用于阳性名词。"
    },
    {
      type: "order",
      q: "把单词排成正确的句子：",
      words: ["Ich", "möchte", "einen", "Apfel"],
      answer: "Ich möchte einen Apfel.",
      explain: "möchten 放在第二位，宾语 einen Apfel（阳性第四格）放后面。"
    },
    {
      type: "match",
      q: "把德语和中文配对：",
      pairs: [["der Apfel", "苹果"], ["das Brot", "面包"], ["der Käse", "奶酪"], ["die Milch", "牛奶"]],
      explain: "der Apfel 苹果、das Brot 面包、der Käse 奶酪、die Milch 牛奶。注意它们的冠词各不相同。"
    },
    {
      type: "listen",
      audio: "Ich möchte keinen Käse.",
      options: ["Ich möchte keinen Käse.", "Ich möchte einen Käse.", "Ich möchte keine Milch."],
      answer: 0,
      explain: "听到的是 Ich möchte keinen Käse.（我不想要奶酪。），Käse 是阳性名词，第四格用 keinen。"
    },
    {
      type: "truefalse",
      q: "艾米最喜欢奶酪，所以她把盘子里的奶酪都吃完了。",
      answer: false,
      explain: "课文里艾米说 Ich esse keinen Käse.，她只吃文柚果和浆果，不碰奶酪。"
    },
    {
      type: "fill",
      q: "Danke, ich bin ___ .（谢谢，我吃饱了。）",
      answer: ["satt"],
      hint: "「饱的」",
      explain: "satt 表示「吃饱了」，固定搭配是 sein + satt：Ich bin satt."
    }
  ]
};
