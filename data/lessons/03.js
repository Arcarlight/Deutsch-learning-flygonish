window.LESSON = {
  id: 3,
  chapter: "Kapitel 3",
  title: "Zahlen und Alter",
  subtitle: "早餐桌",
  blurb: "早餐的桌上有煎蛋、面包，还有一小堆亮闪闪的宝可币。欧亚西莉亚开始教你数数，也问起了你的年龄。",
  scene: "house",
  goal: [
    "学会 0–20 的数字和 zählen",
    "用 Ich bin … Jahre alt. 说年龄",
    "认识名词复数和复数冠词 die"
  ],
  friend: [],
  warmup: {
    title: "Wie alt bist du?",
    lead: "早餐还没上桌，先数几个数。",
    pattern: "Wie alt bist du? — Ich bin … Jahre alt.",
    lines: [
      { who: "oasilia", emo: "happy", de: "Guten Morgen, {{name}}! Wie alt bist du?", zh: "早上好，{{name}}！你几岁？" },
      { who: "hero", emo: "normal", de: "Ich bin zehn Jahre alt.", zh: "我十岁。" },
      { who: "oasilia", emo: "happy", de: "Zehn. Und ich bin siebzehn.", zh: "十岁。我十七岁。" },
      { who: "hero", emo: "surprised", de: "Siebzehn Jahre alt?", zh: "十七岁？" },
      { who: "oasilia", emo: "happy", de: "Ja! Zähl: eins, zwei, drei …", zh: "对呀！数数：一、二、三……" },
      { who: "hero", emo: "happy", de: "Vier, fünf, sechs … siebzehn!", zh: "四、五、六……十七！" }
    ],
    forms: {
      verb: "zählen（数；数数）",
      items: [
        ["ich", "zähle", "Ich zähle die Jahre."],
        ["du", "zählst", "Du zählst die Kinder."],
        ["er / sie / es", "zählt", "Oasilia zählt die Häuser."],
        ["wir", "zählen", "Wir zählen: eins, zwei, drei."],
        ["ihr", "zählt", "Ihr zählt: vier, fünf, sechs."],
        ["sie", "zählen", "Die Kinder zählen."]
      ]
    }
  },
  vocab: [
    { de: "null", zh: "零", pos: "数词", ipa: "[nʊl]", ex: { de: "Null, eins, zwei!", zh: "零、一、二！" } },
    { de: "eins, zwei, drei, vier, fünf", zh: "一、二、三、四、五", pos: "数词", ipa: "[aɪns, tsvaɪ, dʁaɪ, fiːɐ̯, fʏnf]", note: "数数的时候「一」说 eins；放在名词前说 ein。", ex: { de: "Eins, zwei, drei, vier, fünf.", zh: "一、二、三、四、五。" } },
    { de: "sechs, sieben, acht, neun, zehn", zh: "六、七、八、九、十", pos: "数词", ipa: "[zɛks, ˈziːbn̩, axt, nɔɪn, tseːn]", ex: { de: "Sechs, sieben, acht, neun, zehn!", zh: "六、七、八、九、十！" } },
    { de: "elf, zwölf, dreizehn, vierzehn, fünfzehn", zh: "十一到十五", pos: "数词", ipa: "[ɛlf, tsvœlf, ˈdʁaɪtseːn, ˈfiːɐ̯tseːn, ˈfʏnftseːn]", note: "dreizehn = drei + zehn。", ex: { de: "Elf, zwölf, dreizehn!", zh: "十一、十二、十三！" } },
    { de: "sechzehn, siebzehn, achtzehn, neunzehn, zwanzig", zh: "十六到二十", pos: "数词", ipa: "[ˈzɛçtseːn, ˈziːptseːn, ˈaxtseːn, ˈnɔɪntseːn, ˈtsvantsɪç]", note: "sechzehn 少一个 s，siebzehn 不是 siebenzehn。", ex: { de: "Siebzehn, achtzehn, neunzehn, zwanzig!", zh: "十七、十八、十九、二十！" } },
    { de: "das Jahr, die Jahre", zh: "年；岁", pos: "名词", ipa: "[jaːɐ̯]", note: "说年龄时用复数 Jahre：zehn Jahre alt。", ex: { de: "Ich bin zehn Jahre alt.", zh: "我十岁。" } },
    { de: "alt", zh: "老的；……岁的", pos: "形容词", ipa: "[alt]", note: "Wie alt bist du? 问你几岁。", ex: { de: "Wie alt bist du?", zh: "你几岁？" } },
    { de: "jung", zh: "年轻的", pos: "形容词", ipa: "[jʊŋ]", ex: { de: "Zehn ist jung.", zh: "十岁很年轻。" } },
    { de: "das Kind, die Kinder", zh: "孩子", pos: "名词", ipa: "[kɪnt]", note: "复数 Kinder，加 -er。", ex: { de: "Du bist ein Kind.", zh: "你是个孩子。" } },
    { de: "zählen", zh: "数；数数", pos: "动词", ipa: "[ˈtsɛːlən]", note: "ä 读 [ɛː]，长长的「埃」。", ex: { de: "Wir zählen: eins, zwei, drei.", zh: "我们数：一、二、三。" } },
    { de: "viele", zh: "许多", pos: "数词", ipa: "[ˈfiːlə]", note: "用在不带冠词的复数名词前：viele Kinder。", ex: { de: "Viele Kinder sind zehn.", zh: "很多孩子都是十岁。" } },
    { de: "wenig", zh: "少；一点点", pos: "数词", ipa: "[ˈveːnɪç]", note: "ein wenig 表示「一点点」。", ex: { de: "Ein wenig, bitte.", zh: "一点点，请。" } },
    { de: "wie alt", zh: "多大（年纪）", pos: "短语", ipa: "[viː alt]", note: "问年龄的固定问法，不用 Wie viele。", ex: { de: "Wie alt bist du?", zh: "你几岁？" } },
    { de: "die Zahl, die Zahlen", zh: "数字", pos: "名词", ipa: "[tsaːl]", ex: { de: "Die Zahl ist groß.", zh: "这个数字很大。" } },
    { de: "das Frühstück, die Frühstücke", zh: "早餐", pos: "名词", ipa: "[ˈfʁyːʃtʏk]", note: "早上吃的第一顿饭。", ex: { de: "Das Frühstück ist hier.", zh: "早餐在这里。" } }
  ],
  texts: [
    {
      title: "Das Frühstück",
      subtitle: "早餐桌",
      lines: [
        { n: "早上，厨房里飘着煎蛋的香味。窗外的森林还是灰蓝色的。" },
        { who: "oasilia", emo: "happy", de: "Guten Morgen, {{name}}!", zh: "早上好，{{name}}！" },
        { who: "hero", emo: "happy", de: "Guten Morgen!", zh: "早上好！" },
        { who: "atlas", emo: "normal", de: "Guten Morgen. Das Frühstück ist hier.", zh: "早上好。早餐在这里。" },
        { n: "桌上有煎蛋、面包，还有一小堆金色的宝可币，像一堆小小的太阳。" },
        { who: "oasilia", emo: "happy", de: "Wir zählen: eins, zwei, drei, vier, fünf …", zh: "我们来数：一、二、三、四、五……" },
        { who: "hero", emo: "normal", de: "Eins, zwei, drei, vier, fünf.", zh: "一、二、三、四、五。" },
        { who: "oasilia", emo: "happy", de: "Sechs, sieben, acht, neun, zehn!", zh: "六、七、八、九、十！" },
        { n: "她把硬币一枚一枚推到桌子另一边，又数了一遍。" },
        { who: "oasilia", emo: "happy", de: "Elf, zwölf, dreizehn … zwanzig!", zh: "十一、十二、十三……二十！" },
        { who: "hero", emo: "surprised", de: "Zwanzig?", zh: "二十？" },
        { who: "atlas", emo: "normal", de: "Ja. Zwanzig.", zh: "对。二十。" },
        { who: "oasilia", emo: "happy", de: "Zähl, {{name}}!", zh: "数数看，{{name}}！" },
        { n: "你数到十五就卡住了。欧亚西莉亚没有笑你，只是又从一数起。" }
      ]
    },
    {
      title: "Wie alt bist du?",
      subtitle: "你几岁？",
      lines: [
        { n: "早餐吃到一半，欧亚西莉亚忽然放下了杯子。" },
        { who: "oasilia", emo: "normal", de: "{{name}}, wie alt bist du?", zh: "{{name}}，你几岁？" },
        { who: "hero", emo: "worried", de: "Ich bin … zehn?", zh: "我……十岁？" },
        { n: "你其实不太确定。可是「十」听起来差不多。" },
        { who: "oasilia", emo: "happy", de: "Zehn Jahre alt! Das ist jung.", zh: "十岁！还很年轻呢。" },
        { who: "hero", emo: "normal", de: "Und du?", zh: "那你呢？" },
        { who: "oasilia", emo: "happy", de: "Ich bin siebzehn Jahre alt.", zh: "我十七岁。" },
        { who: "hero", emo: "surprised", de: "Siebzehn!", zh: "十七！" },
        { who: "atlas", emo: "normal", de: "Und ich bin zwanzig.", zh: "我二十岁。" },
        { who: "hero", emo: "stunned", de: "Zwanzig Jahre alt!", zh: "二十岁！" },
        { who: "oasilia", emo: "happy", de: "Du bist ein Kind. Das ist schön.", zh: "你是个孩子。这很好。" },
        { who: "atlas", emo: "normal", de: "Viele Kinder sind zehn.", zh: "很多孩子都是十岁。" },
        { who: "hero", emo: "happy", de: "Zehn, siebzehn, zwanzig. Ich bin zehn!", zh: "十、十七、二十。我十岁！" },
        { n: "窗外的森林亮起来了。你把这三个数字在心里念了一遍，像把三枚硬币收进小口袋。" }
      ]
    }
  ],
  grammar: [
    {
      title: "数字 0–20",
      intro: "0 到 12 要一个个记；13 到 19 很有规律：**个位数 + zehn**。20 是 zwanzig。数数的时候「一」说 **eins**，放在名词前才说 ein。",
      table: {
        head: ["范围", "德语", "说明"],
        rows: [
          ["0", "null", "零"],
          ["1–5", "eins, zwei, drei, vier, fünf", "要一个个记"],
          ["6–9", "sechs, sieben, acht, neun", "要一个个记"],
          ["10–12", "zehn, elf, zwölf", "这三个不按规律"],
          ["13–19", "dreizehn, vierzehn, fünfzehn, sechzehn, siebzehn, achtzehn, neunzehn", "个位数 + zehn"],
          ["20", "zwanzig", "二十"]
        ]
      },
      notes: [
        "13–19 就是「个位数 + zehn」：vier + zehn = vierzehn，acht + zehn = achtzehn。",
        "两个例外：sechzehn 少一个 s（不是 sechszehn），siebzehn 不是 siebenzehn。",
        "数数时说 eins：eins, zwei, drei；带名词时说 ein：ein Tisch, ein Kind。",
        "数字后面的名词用复数：zehn Jahre, drei Kinder。"
      ],
      examples: [
        { de: "Eins, zwei, drei, vier, fünf.", zh: "一、二、三、四、五。" },
        { de: "Zehn, elf, zwölf … zwanzig!", zh: "十、十一、十二……二十！" }
      ]
    },
    {
      title: "名词复数与年龄表达",
      intro: "德语名词的复数形式要单独记，但**复数的定冠词永远是 die**。说年龄用 **Ich bin … Jahre alt.**，Jahr 在句子里用复数 Jahre。",
      table: {
        head: ["单数", "复数", "例句"],
        rows: [
          ["das Haus", "die Häuser", "Die Häuser sind groß."],
          ["die Tür", "die Türen", "Die Türen sind klein."],
          ["das Fenster", "die Fenster", "Die Fenster sind hier."],
          ["der Garten", "die Gärten", "Die Gärten sind schön."],
          ["das Kind", "die Kinder", "Viele Kinder sind hier."]
        ]
      },
      notes: [
        "复数定冠词一律是 die，和单数的性别没有关系。",
        "问年龄：Wie alt bist du? 回答：Ich bin zehn Jahre alt.",
        "只有「一年」说 ein Jahr；说岁数一定用复数：zehn Jahre alt。",
        "「岁」不用另外的词，Jahre alt 就把岁数说清楚了。"
      ],
      examples: [
        { de: "Wie alt bist du? — Ich bin zehn Jahre alt.", zh: "你几岁？——我十岁。" },
        { de: "Oasilia ist siebzehn Jahre alt.", zh: "欧亚西莉亚十七岁。" }
      ]
    }
  ],
  culture: {
    title: "宝可币与数字",
    text: "宝可币是圆形的金色硬币，一枚能换一小把树果。林缘村的孩子把它装在布袋里，赶集前数了又数，数错了就从头再来。这里的人问年龄不说「几岁」，而说 Ich bin sieben Jahre alt——把数字放回句子里。年纪小的孩子还爱掰着爪指数，欧亚西莉亚说她小时候也这样，数到二十就乱了。"
  },
  exercises: [
    {
      type: "fill",
      q: "Ich bin zehn ___ alt.（我十岁。）",
      answer: ["Jahre"],
      hint: "Jahr 的复数",
      explain: "说岁数用复数 Jahre：Ich bin zehn Jahre alt."
    },
    {
      type: "choice",
      q: "___ alt bist du?（你几岁？）",
      options: ["Wie", "Was", "Wer"],
      answer: 0,
      explain: "问年龄固定用 Wie alt bist du?，不能用 Was 或 Wer。"
    },
    {
      type: "match",
      q: "把数字和中文配对：",
      pairs: [["sieben", "七"], ["elf", "十一"], ["achtzehn", "十八"], ["zwanzig", "二十"]],
      explain: "sieben = 7，elf = 11，achtzehn = 18（acht + zehn），zwanzig = 20。"
    },
    {
      type: "listen",
      audio: "Ich bin zwölf Jahre alt.",
      options: ["Ich bin zwölf Jahre alt.", "Ich bin zwei Jahre alt.", "Ich bin zwanzig Jahre alt."],
      answer: 0,
      explain: "听到的是 zwölf（十二），不是 zwei（二）或 zwanzig（二十）。"
    },
    {
      type: "choice",
      q: "「十六」的德语写法是：",
      options: ["sechzehn", "sechszehn", "sechzig"],
      answer: 0,
      explain: "sechs 加 zehn 时要去掉一个 s，写成 sechzehn；sechzig 是「六十」。"
    },
    {
      type: "truefalse",
      q: "课文中，阿特拉斯十七岁。",
      answer: false,
      explain: "十七岁的是欧亚西莉亚；阿特拉斯说 Und ich bin zwanzig，他二十岁。"
    },
    {
      type: "order",
      q: "把单词排成正确的句子：",
      words: ["bin", "Ich", "Jahre", "zehn", "alt"],
      answer: "Ich bin zehn Jahre alt.",
      explain: "动词 bin 在第二位：Ich bin zehn Jahre alt. 岁数放在 Jahre alt 前面。"
    },
    {
      type: "choice",
      q: "das Haus 的复数是：",
      options: ["die Häuser", "der Häuser", "das Häuser"],
      answer: 0,
      explain: "复数的定冠词永远是 die，所以是 die Häuser。"
    },
    {
      type: "fill",
      q: "Das Kind ist klein. Die ___ sind klein.（这些孩子很小。）",
      answer: ["Kinder"],
      hint: "das Kind 的复数",
      explain: "Kind 的复数是 Kinder，加 -er：die Kinder。"
    }
  ]
};
