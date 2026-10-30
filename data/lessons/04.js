window.LESSON = {
  id: 4,
  chapter: "Kapitel 4",
  title: "Der erste Schultag",
  subtitle: "上学的第一天",
  blurb: "你第一次走进村里的教室，认识了尾巴会发光的利希特老师。忽然，窗外传来「咚」的一声。",
  scene: "classroom",
  goal: [
    "学会规则动词的现在时变位",
    "掌握动词第二位的语序",
    "能问 Bist du …? 这类一般疑问句"
  ],
  friend: ["licht", "mira", "arko", "snivy"],
  warmup: {
    title: "Lernen wir zusammen?",
    lead: "第一次进教室之前，老师先问你两句话。",
    pattern: "ich lerne — du lernst — er lernt",
    lines: [
      { who: "licht", emo: "happy", de: "Guten Tag! Wer bist du?", zh: "你好！你是谁？" },
      { who: "hero", emo: "normal", de: "Ich bin {{name}}.", zh: "我是{{name}}。" },
      { who: "licht", emo: "normal", de: "Was lernst du?", zh: "你在学什么？" },
      { who: "hero", emo: "normal", de: "Ich lerne Deutsch. Ich lese und schreibe.", zh: "我在学德语。我读，也写。" },
      { who: "licht", emo: "happy", de: "Schön! Wir lesen und schreiben zusammen.", zh: "很好！我们一起读、一起写。" },
      { who: "hero", emo: "happy", de: "Ja! Wir lernen zusammen.", zh: "对！我们一起学。" }
    ],
    forms: {
      verb: "lernen（学习）",
      items: [
        ["ich", "lerne", "Ich lerne lesen."],
        ["du", "lernst", "Du lernst schreiben."],
        ["er / sie / es", "lernt", "Mira lernt lesen und schreiben."],
        ["wir", "lernen", "Wir lernen: lesen, schreiben, sprechen."],
        ["ihr", "lernt", "Ihr lernt Deutsch."],
        ["sie", "lernen", "Die Kinder lernen zusammen."]
      ]
    }
  },
  vocab: [
    { de: "die Schule, die Schulen", zh: "学校", pos: "名词", ipa: "[ˈʃuːlə]", note: "sch 读 [ʃ]，像「嘘」。", ex: { de: "Die Schule ist groß.", zh: "学校很大。" } },
    { de: "der Lehrer, die Lehrer", zh: "老师（男）", pos: "名词", ipa: "[deːɐ̯ ˈleːʁɐ]", note: "女老师是 die Lehrerin。", ex: { de: "Das ist Lehrer Licht.", zh: "这是利希特老师。" } },
    { de: "die Klasse, die Klassen", zh: "班级；教室", pos: "名词", ipa: "[ˈklasə]", note: "既可以指班，也可以指上课的教室。", ex: { de: "Das ist die Klasse.", zh: "这是我们的教室。" } },
    { de: "lernen", zh: "学习", pos: "动词", ipa: "[ˈlɛʁnən]", note: "规则动词：ich lerne, du lernst, er lernt。", ex: { de: "Wir lernen Deutsch.", zh: "我们学德语。" } },
    { de: "lesen", zh: "读", pos: "动词", ipa: "[ˈleːzn̩]", note: "ich lese, du liest, er liest。", ex: { de: "Wir lesen ein Buch.", zh: "我们在读一本书。" } },
    { de: "schreiben", zh: "写", pos: "动词", ipa: "[ˈʃʁaɪbn̩]", note: "ich schreibe, du schreibst, er schreibt。", ex: { de: "Ich schreibe.", zh: "我在写。" } },
    { de: "sprechen", zh: "说；讲", pos: "动词", ipa: "[ˈʃpʁɛçn̩]", note: "ich spreche, du sprichst, er spricht。", ex: { de: "Ich spreche wenig Deutsch.", zh: "我说的德语很少。" } },
    { de: "hören", zh: "听", pos: "动词", ipa: "[ˈhøːʁən]", ex: { de: "Ich höre.", zh: "我在听。" } },
    { de: "spielen", zh: "玩", pos: "动词", ipa: "[ˈʃpiːlən]", ex: { de: "Kinder spielen.", zh: "孩子们在玩。" } },
    { de: "der Schüler, die Schüler", zh: "学生（男）", pos: "名词", ipa: "[deːɐ̯ ˈʃyːlɐ]", note: "女学生是 die Schülerin。", ex: { de: "Ich bin Schüler.", zh: "我是学生。" } },
    { de: "die Schülerin, die Schülerinnen", zh: "学生（女）", pos: "名词", ipa: "[ˈʃyːləʁɪn]", note: "以 -in 结尾，复数加 -nen。", ex: { de: "Mira ist Schülerin.", zh: "米拉是学生。" } },
    { de: "das Buch, die Bücher", zh: "书", pos: "名词", ipa: "[buːx]", note: "复数 Bücher，ü 变音。", ex: { de: "Ich lese ein Buch.", zh: "我在读一本书。" } },
    { de: "die Tafel, die Tafeln", zh: "黑板", pos: "名词", ipa: "[ˈtaːfl̩]", ex: { de: "Das ist die Tafel.", zh: "这是黑板。" } },
    { de: "zusammen", zh: "一起", pos: "副词", ipa: "[tsuˈzamən]", ex: { de: "Wir lernen zusammen.", zh: "我们一起学习。" } },
    { de: "das Deutsch", zh: "德语", pos: "名词", ipa: "[dɔɪtʃ]", note: "语言名一般不带冠词：Ich lerne Deutsch；这里带上 das 作名词记。", ex: { de: "Ich lerne Deutsch.", zh: "我在学德语。" } }
  ],
  texts: [
    {
      title: "Die Schule",
      subtitle: "学校",
      lines: [
        { n: "早晨的村子很安静。欧亚西莉亚牵着你的手，走过水井和一条石板路。" },
        { who: "oasilia", emo: "happy", de: "Hier ist die Schule!", zh: "学校就在这里！" },
        { who: "hero", emo: "surprised", de: "Die Schule ist groß!", zh: "学校好大！" },
        { who: "oasilia", emo: "normal", de: "Ja. Komm! Hier lernen wir.", zh: "是啊。来吧！我们在这里学习。" },
        { n: "教室里有很多窗户，墙上一块黑板，书架上放着书。一只电龙站在黑板前，尾巴发着柔和的光。" },
        { who: "licht", emo: "happy", de: "Guten Morgen! Ich bin Lehrer Licht.", zh: "早上好！我是利希特老师。" },
        { who: "oasilia", emo: "happy", de: "Guten Morgen. Das ist {{name}}.", zh: "早上好。这是{{name}}。" },
        { who: "licht", emo: "normal", de: "Hallo, {{name}}. Wie alt bist du?", zh: "你好，{{name}}。你几岁？" },
        { who: "hero", emo: "normal", de: "Ich bin zehn Jahre alt.", zh: "我十岁。" },
        { who: "licht", emo: "happy", de: "Zehn. Schön. Das ist die Tafel. Und das ist ein Buch.", zh: "十岁。很好。这是黑板。这是一本书。" },
        { n: "他说话很慢，一句话常常说两遍。你听懂了「黑板」这个词。" },
        { who: "hero", emo: "worried", de: "Ich spreche wenig Deutsch.", zh: "我说的德语很少。" },
        { who: "licht", emo: "happy", de: "Schön! Wir lernen zusammen.", zh: "太好了！我们一起学。" },
        { n: "欧亚西莉亚在门口回头笑了笑，走了。" }
      ]
    },
    {
      title: "Arko",
      subtitle: "灌木丛里的男孩",
      lines: [
        { n: "你坐在窗边。旁边坐着一只小小的土龙弟弟，声音很小，脸有点红。" },
        { who: "hero", emo: "normal", de: "Hallo. Ich bin {{name}}.", zh: "你好。我是{{name}}。" },
        { who: "mira", emo: "normal", de: "Hallo … ich bin Mira.", zh: "你好……我是米拉。" },
        { who: "mira", emo: "normal", de: "Hier ist ein Buch. Wir lesen.", zh: "这里有一本书。我们读书。" },
        { who: "hero", emo: "happy", de: "Danke.", zh: "谢谢。" },
        { n: "教室最后一排靠窗的位置，坐着一只藤藤蛇。她一直没说话，只是安静地看着大家。" },
        { who: "licht", emo: "normal", de: "Und das ist Liane. Sie ist auch in unserer Klasse.", zh: "还有这位，莉安娜。她也在我们班。" },
        { who: "snivy", emo: "normal", de: "…Hallo.", zh: "……你好。" },
        { n: "忽然窗外「咚」的一声，树叶哗啦啦地响。一只始祖小鸟从树上掉进了灌木丛，又从里面爬出来，翅膀上还挂着叶子。" },
        { who: "licht", emo: "surprised", de: "Was ist das?", zh: "那是什么？" },
        { who: "mira", emo: "surprised", de: "Dort! Das ist Arko!", zh: "那边！是阿尔科！" },
        { who: "arko", emo: "happy", de: "Hallo! Ich bin Arko!", zh: "大家好！我是阿尔科！" },
        { who: "licht", emo: "sigh", de: "Arko! Komm!", zh: "阿尔科！过来！" },
        { who: "arko", emo: "happy", de: "Ja! Hallo, Lehrer Licht. Und wer bist du?", zh: "来了！你好，利希特老师。你又是谁？" },
        { who: "hero", emo: "normal", de: "Ich bin {{name}}. Ich spreche wenig Deutsch.", zh: "我是{{name}}。我说的德语很少。" },
        { who: "arko", emo: "happy", de: "Ich lese, ich schreibe, ich spreche! Wir sprechen zusammen!", zh: "我读、我写、我说！我们一起说！" },
        { n: "米拉小声笑了一下。你的第一个上午，就这样开始了。" }
      ]
    }
  ],
  grammar: [
    {
      title: "规则动词的现在时",
      intro: "大多数德语动词是规则的：去掉词尾 **-en**，得到词干，再加上人称词尾。以 **lernen** 为例，词干是 lern-：ich lerne, du lernst, er lernt。",
      table: {
        head: ["人称", "词尾", "lernen", "wohnen"],
        rows: [
          ["ich（我）", "-e", "lerne", "wohne"],
          ["du（你）", "-st", "lernst", "wohnst"],
          ["er / sie / es（他/她/它）", "-t", "lernt", "wohnt"],
          ["wir（我们）", "-en", "lernen", "wohnen"],
          ["ihr（你们）", "-t", "lernt", "wohnt"],
          ["sie / Sie（他们/您）", "-en", "lernen", "wohnen"]
        ]
      },
      notes: [
        "er / sie / es 和 ihr 的词尾都是 -t，看主语才能分清：er lernt / ihr lernt。",
        "heißen 有一点特别：du heißt（不是 heißst），er heißt。",
        "lesen 和 sprechen 在 du、er 时换元音：du liest / er liest；du sprichst / er spricht。",
        "wir 和 sie 的形式跟原形一样：wir lernen、sie lernen。"
      ],
      examples: [
        { de: "Ich lerne Deutsch.", zh: "我学德语。" },
        { de: "Du lernst Deutsch.", zh: "你学德语。" },
        { de: "Wir lernen zusammen Deutsch.", zh: "我们一起学德语。" }
      ]
    },
    {
      title: "动词第二位；一般疑问句 Bist du …?",
      intro: "德语的陈述句里，变位动词永远在**第二位**。句子开头换成别的词，动词的位置也不变。把动词搬到句首，就是**一般疑问句**，回答用 Ja 或 Nein。",
      table: {
        head: ["句子", "类型", "中文"],
        rows: [
          ["Wir lernen zusammen Deutsch.", "陈述句", "我们一起学德语。"],
          ["Lernen wir zusammen Deutsch?", "一般疑问句", "我们一起学德语吗？"],
          ["Du bist Schüler.", "陈述句", "你是学生。"],
          ["Bist du Schüler?", "一般疑问句", "你是学生吗？"],
          ["Ja, ich bin Schüler.", "肯定回答", "是的，我是学生。"],
          ["Nein, ich bin Lehrer.", "否定回答", "不，我是老师。"]
        ]
      },
      notes: [
        "陈述句动词永远第二位：Ich **lerne** Deutsch. / Wir **lernen** zusammen.",
        "一般疑问句把动词放第一位，句末用问号：**Bist** du Schüler?",
        "回答用 Ja 或 Nein，后面再接一个完整的句子：Ja, ich bin Schüler.",
        "一般疑问句只把动词提到句首，主语 du 留在后面：Bist du Schüler? 不要说 Du bist Schüler?"
      ],
      examples: [
        { de: "Bist du {{name}}?", zh: "你是{{name}}吗？" },
        { de: "Lernen wir zusammen?", zh: "我们一起学吗？" }
      ]
    }
  ],
  culture: {
    title: "村里的一间教室",
    text: "林缘村只有一间教室，大大小小的孩子一起上课。黑板靠墙，窗子开得很大；天气好的时候，利希特老师会把窗推开，让森林的味道进来。他教读、教写、教说话，讲得很慢，一句话常说两遍。傍晚他尾巴上的光最亮，孩子们说，那是教室里的一盏小灯。下课以后，大家就到院子里跑一跑。"
  },
  exercises: [
    {
      type: "fill",
      q: "Du ___ Deutsch.（你学德语。）",
      answer: ["lernst"],
      hint: "lernen 的 du 形式",
      explain: "规则动词 du 后面加 -st：du lernst。"
    },
    {
      type: "fill",
      q: "Er ___ hier.（他住在这里。）",
      answer: ["wohnt"],
      hint: "wohnen 的 er 形式",
      explain: "er / sie / es 后面加 -t：er wohnt。"
    },
    {
      type: "choice",
      q: "Wir ___ zusammen.（我们一起玩。）",
      options: ["spielt", "spielen", "spielst"],
      answer: 1,
      explain: "wir 用原形词干加 -en：wir spielen。"
    },
    {
      type: "order",
      q: "把单词排成正确的句子：",
      words: ["ist", "Die", "Schule", "groß"],
      answer: "Die Schule ist groß.",
      explain: "动词 ist 放第二位，主语 Die Schule 在前面：Die Schule ist groß."
    },
    {
      type: "match",
      q: "把德语和中文配对：",
      pairs: [["lesen", "读"], ["schreiben", "写"], ["sprechen", "说"], ["hören", "听"]],
      explain: "这四个是本课的核心动词：lesen 读、schreiben 写、sprechen 说、hören 听。"
    },
    {
      type: "listen",
      audio: "Sprichst du Deutsch?",
      options: ["Sprichst du Deutsch?", "Lernst du Deutsch?", "Liest du Deutsch?"],
      answer: 0,
      explain: "听到的是 Sprichst du Deutsch?（你说德语吗？）。sprechen 的 du 形式是 sprichst。"
    },
    {
      type: "choice",
      q: "「你是学生吗？」用德语怎么说？",
      options: ["Bist du Schüler?", "Du bist Schüler?", "Bist Schüler du?"],
      answer: 0,
      explain: "一般疑问句把动词放第一位：Bist du Schüler?"
    },
    {
      type: "truefalse",
      q: "课文中，阿尔科从树上掉进了灌木丛。",
      answer: true,
      explain: "窗外「咚」的一声，他从树上掉进树丛，爬起来时翅膀上还挂着叶子。"
    },
    {
      type: "choice",
      q: "课文中，谁坐在主角旁边的位子上？",
      options: ["米拉", "阿尔科", "利希特老师"],
      answer: 0,
      explain: "主角旁边的位子上坐着一只小小的土龙弟弟，她就是米拉。"
    }
  ]
};
