window.LESSON = {
  id: 2,
  chapter: "Kapitel 2",
  title: "Das Haus am Waldrand",
  subtitle: "林边的家",
  blurb: "欧亚西莉亚牵着你的手走进森林边的家。工坊的门开着，一只高大的暴飞龙抬起头来。",
  scene: "house",
  goal: [
    "认识房子里的物品和房间",
    "掌握定冠词 der / die / das 与不定冠词 ein / eine",
    "学会用 Was ist das? 提问和回答",
    "认识新朋友阿特拉斯"
  ],
  friend: ["atlas"],
  warmup: {
    title: "Was ist das?",
    lead: "进门之前，先学两句问东西的话。等会儿在课文里还会再听一次。",
    pattern: "Was ist das? — Das ist ein … / Das ist eine …",
    lines: [
      { who: "oasilia", emo: "happy", de: "Hallo, {{name}}! Das ist ein Haus.", zh: "你好，{{name}}！这是一座房子。" },
      { who: "hero", emo: "normal", de: "Was ist das?", zh: "这是什么？" },
      { who: "oasilia", emo: "happy", de: "Das ist eine Tür.", zh: "这是一扇门。" },
      { who: "hero", emo: "normal", de: "Und was ist das?", zh: "那这个又是什么？" },
      { who: "oasilia", emo: "happy", de: "Das ist ein Fenster.", zh: "这是一扇窗。" },
      { who: "hero", emo: "happy", de: "Ein Haus, eine Tür, ein Fenster!", zh: "房子、门、窗！" },
      { who: "oasilia", emo: "happy", de: "Ja! Komm, {{name}}!", zh: "对呀！来吧，{{name}}！" }
    ],
    forms: {
      verb: "ein / eine（不定冠词）",
      items: [
        ["der Tisch（阳性）", "ein Tisch", "Das ist ein Tisch."],
        ["die Tür（阴性）", "eine Tür", "Das ist eine Tür."],
        ["das Fenster（中性）", "ein Fenster", "Das ist ein Fenster."],
        ["die Türen（复数）", "die Türen", "Das sind die Türen."]
      ]
    }
  },
  vocab: [
    { de: "was", zh: "什么", pos: "疑问词", ipa: "[vas]", note: "问东西时用：Was ist das?", ex: { de: "Was ist das?", zh: "这是什么？" } },
    { de: "das Haus, die Häuser", zh: "房子", pos: "名词", ipa: "[haʊs]", note: "名词首字母大写；复数 Häuser。", ex: { de: "Das Haus ist groß und schön.", zh: "这房子又大又漂亮。" } },
    { de: "die Tür, die Türen", zh: "门", pos: "名词", ipa: "[tyːɐ̯]", note: "阴性名词，不定冠词用 eine。", ex: { de: "Das ist die Tür.", zh: "这是那扇门。" } },
    { de: "das Fenster, die Fenster", zh: "窗户", pos: "名词", ipa: "[ˈfɛnstɐ]", note: "单数和复数写法一样。", ex: { de: "Das Fenster ist groß.", zh: "这扇窗很大。" } },
    { de: "der Tisch, die Tische", zh: "桌子", pos: "名词", ipa: "[deːɐ̯ tɪʃ]", note: "阳性名词，不定冠词用 ein。", ex: { de: "Das ist ein Tisch.", zh: "这是一张桌子。" } },
    { de: "der Stuhl, die Stühle", zh: "椅子", pos: "名词", ipa: "[deːɐ̯ ʃtuːl]", ex: { de: "Der Stuhl ist hier.", zh: "椅子在这里。" } },
    { de: "das Bett, die Betten", zh: "床", pos: "名词", ipa: "[bɛt]", ex: { de: "Das Bett ist dort.", zh: "床在那边。" } },
    { de: "die Küche, die Küchen", zh: "厨房", pos: "名词", ipa: "[ˈkʏçə]", note: "ch 在这里读 [ç]，轻轻的「希」。", ex: { de: "Das ist die Küche.", zh: "这是厨房。" } },
    { de: "der Garten, die Gärten", zh: "花园", pos: "名词", ipa: "[deːɐ̯ ˈɡaʁtn̩]", ex: { de: "Der Garten ist schön.", zh: "花园很漂亮。" } },
    { de: "der Wald, die Wälder", zh: "森林", pos: "名词", ipa: "[deːɐ̯ valt]", note: "ä 是 a 的变音。", ex: { de: "Der Wald ist groß.", zh: "森林很大。" } },
    { de: "das Meer, die Meere", zh: "海", pos: "名词", ipa: "[meːɐ̯]", ex: { de: "Das Meer ist dort.", zh: "海在那边。" } },
    { de: "hier", zh: "这里", pos: "副词", ipa: "[hiːɐ̯]", note: "离说话人近的地方。", ex: { de: "Hier ist das Haus.", zh: "房子在这里。" } },
    { de: "dort", zh: "那里", pos: "副词", ipa: "[dɔʁt]", note: "离说话人远的地方。", ex: { de: "Dort ist der Garten.", zh: "花园在那边。" } },
    { de: "wohnen", zh: "居住", pos: "动词", ipa: "[ˈvoːnən]", note: "规则动词：ich wohne, du wohnst。", ex: { de: "Wir wohnen hier.", zh: "我们住在这里。" } },
    { de: "schön", zh: "美的；漂亮的", pos: "形容词", ipa: "[ʃøːn]", ex: { de: "Das Haus ist schön.", zh: "这房子很漂亮。" } },
    { de: "klein", zh: "小的", pos: "形容词", ipa: "[klaɪn]", ex: { de: "Du bist klein.", zh: "你很小。" } },
    { de: "groß", zh: "大的", pos: "形容词", ipa: "[ɡʁoːs]", note: "ß 读 [s]，像清清的一声「s」。", ex: { de: "Der Wald ist groß.", zh: "森林很大。" } },
    { de: "ein", zh: "一个（阳性/中性）", pos: "冠词", ipa: "[aɪn]", note: "后面的名词是阳性或中性时用 ein。", ex: { de: "Das ist ein Haus.", zh: "这是一座房子。" } },
    { de: "eine", zh: "一个（阴性）", pos: "冠词", ipa: "[ˈaɪnə]", note: "后面的名词是阴性时用 eine。", ex: { de: "Das ist eine Küche.", zh: "这是一间厨房。" } },
    { de: "und", zh: "和", pos: "连词", ipa: "[ʊnt]", ex: { de: "Der Tisch und der Stuhl sind hier.", zh: "桌子和椅子在这里。" } },
    { de: "müde", zh: "累的", pos: "形容词", ipa: "[ˈmyːdə]", note: "ü 把嘴唇撮圆再发 i。", ex: { de: "Du bist müde.", zh: "你累了。" } }
  ],
  texts: [
    {
      title: "Das Haus",
      subtitle: "回家的路",
      lines: [
        { n: "森林边的小路拐过最后一丛蕨草，一间木头房子从树影里露出来。烟囱里冒着细细的烟。" },
        { who: "oasilia", emo: "happy", de: "Hier ist das Haus!", zh: "房子就在这里！" },
        { who: "hero", emo: "surprised", de: "Das Haus ist schön!", zh: "这房子好漂亮！" },
        { who: "oasilia", emo: "happy", de: "Ja! Es ist klein und schön.", zh: "是啊！它又小又漂亮。" },
        { who: "oasilia", emo: "normal", de: "Komm! Das ist die Tür.", zh: "来吧！就是这扇门。" },
        { n: "她推开门。屋里是厨房，桌上点着一盏油灯，窗子开着，风把窗帘吹起来。" },
        { who: "oasilia", emo: "normal", de: "Das ist die Küche. Das Fenster ist groß.", zh: "这是厨房。这扇窗很大。" },
        { who: "oasilia", emo: "happy", de: "Hier ist der Tisch.", zh: "桌子在这里。" },
        { who: "hero", emo: "normal", de: "Und was ist das?", zh: "那这个又是什么？" },
        { who: "oasilia", emo: "happy", de: "Das ist ein Stuhl!", zh: "这是一把椅子！" },
        { who: "hero", emo: "happy", de: "Ein Stuhl. Ich bin klein. Der Stuhl ist klein.", zh: "一把椅子。我小。椅子也小。" },
        { n: "后院传来轻轻的一声响，像是谁在敲木头。" }
      ]
    },
    {
      title: "Atlas",
      subtitle: "阿特拉斯",
      lines: [
        { n: "工坊的门开着。一只高大的暴飞龙站在门里，手里拿着一把小刀，围裙上落着木屑。" },
        { who: "atlas", emo: "normal", de: "Hallo. Wer bist du?", zh: "你好。你是谁？" },
        { who: "hero", emo: "worried", de: "Ich bin {{name}}. Ich bin ein Pokémon.", zh: "我是{{name}}。我是一只宝可梦。" },
        { who: "atlas", emo: "normal", de: "Ich bin Atlas. Du bist klein.", zh: "我是阿特拉斯。你很小。" },
        { who: "atlas", emo: "happy", de: "Du bist ein Freund.", zh: "你是朋友。" },
        { who: "oasilia", emo: "happy", de: "Komm, {{name}}! Hier ist der Garten.", zh: "来吧，{{name}}！这里是花园。" },
        { n: "后院里是一小块花园。篱笆外面就是森林，树干高得望不到顶。" },
        { who: "oasilia", emo: "normal", de: "Der Garten ist klein. Der Wald ist groß.", zh: "花园很小。森林很大。" },
        { who: "hero", emo: "surprised", de: "Und das Meer?", zh: "那大海呢？" },
        { who: "oasilia", emo: "happy", de: "Das Meer ist dort. Es ist schön!", zh: "海在那边。它很漂亮！" },
        { n: "你打了一个长长的哈欠。眼睛快要睁不开了。" },
        { who: "oasilia", emo: "normal", de: "Du bist müde. Das Bett ist dort.", zh: "你累了。床在那边。" },
        { who: "hero", emo: "happy", de: "Danke, Oasilia. Danke, Atlas.", zh: "谢谢你，欧亚西莉亚。谢谢你，阿特拉斯。" },
        { n: "你躺进被子里。窗外的森林轻轻响着，像很远很远的海。" }
      ]
    }
  ],
  grammar: [
    {
      title: "定冠词 der / die / das 与不定冠词 ein / eine",
      intro: "德语的名词都有性别：阳性、阴性、中性。**定冠词**（der / die / das）指「那个、这个」，**不定冠词**（ein / eine）指「一个」，用在第一次提到的东西上。名词的性别要在背单词的时候一起记住。",
      table: {
        head: ["名词", "定冠词", "不定冠词"],
        rows: [
          ["der Tisch（桌子，阳性）", "der Tisch", "ein Tisch"],
          ["die Tür（门，阴性）", "die Tür", "eine Tür"],
          ["das Fenster（窗，中性）", "das Fenster", "ein Fenster"],
          ["die Türen（复数）", "die Türen", "—（复数不用不定冠词）"]
        ]
      },
      notes: [
        "名词的首字母永远大写：das Haus、der Wald、die Küche。",
        "不定冠词只有 ein 和 eine 两种：阳性和中性用 ein，阴性用 eine。",
        "复数名词的定冠词永远是 die，和单数的性别无关：die Tische、die Häuser。"
      ],
      examples: [
        { de: "Das ist ein Tisch.", zh: "这是一张桌子。" },
        { de: "Das ist eine Tür.", zh: "这是一扇门。" },
        { de: "Das ist das Fenster.", zh: "这是那扇窗。" }
      ]
    },
    {
      title: "Was ist das? — Das ist ein / eine …",
      intro: "想知道一个东西叫什么，就问 **Was ist das?**（这是什么？）。回答用 **Das ist …**，后面接不定冠词；指认已经知道的东西时，用定冠词。指远处的东西，加上 dort。",
      table: {
        head: ["问句", "回答", "中文"],
        rows: [
          ["Was ist das?", "Das ist ein Stuhl.", "这是什么？——这是一把椅子。"],
          ["Was ist das dort?", "Das ist eine Küche.", "那边是什么？——那是一间厨房。"],
          ["Ist das eine Tür?", "Ja, das ist eine Tür.", "这是一扇门吗？——是的。"],
          ["Ist das ein Tisch?", "Nein, das ist ein Bett.", "这是一张桌子吗？——不，这是一张床。"]
        ]
      },
      notes: [
        "Was 的 w 读 [v]：上齿轻轻碰下唇，声带振动，was 读 [vas]。",
        "答句里的动词还是在第二位：Das **ist** ein Bett.",
        "问句把动词放到第一位：**Ist** das eine Tür? 回答用 Ja 或 Nein。"
      ],
      examples: [
        { de: "Was ist das? — Das ist ein Fenster.", zh: "这是什么？——这是一扇窗户。" },
        { de: "Was ist das dort? — Das ist das Meer.", zh: "那边是什么？——那是海。" }
      ]
    }
  ],
  culture: {
    title: "林边的家",
    text: "林缘村的房子是村里人自己盖的：木头墙，石片屋顶，烟囱里总有一缕细烟。屋里没有电，晚上点油灯；厨房是全家最暖和的地方，灶火一天不熄。留宿的客人睡在靠后的小房间，床上铺草垫和羊毛毯。屋外通常有一小块菜地和一口水井。阿特拉斯说，房子不用大，能挡风就够了。"
  },
  exercises: [
    {
      type: "choice",
      q: "「这是什么？」用德语怎么说？",
      options: ["Was ist das?", "Wer ist das?", "Wo ist das?"],
      answer: 0,
      explain: "Was 问东西，Wer 问人，Wo 问地点。「这是什么？」是 Was ist das?"
    },
    {
      type: "choice",
      q: "Das ist ___ Tür.（这是一扇门。）",
      options: ["der", "die", "das"],
      answer: 1,
      explain: "Tür 是阴性名词，定冠词是 die，不定冠词是 eine。"
    },
    {
      type: "fill",
      q: "Das ist ___ Haus.（这是一座房子。）",
      answer: ["ein"],
      hint: "das Haus 是中性名词",
      explain: "中性名词和阳性名词的不定冠词都是 ein：ein Haus。"
    },
    {
      type: "fill",
      q: "Das ist ___ Küche.（这是一间厨房。）",
      answer: ["eine"],
      hint: "die Küche 是阴性名词",
      explain: "阴性名词的不定冠词是 eine：eine Küche。"
    },
    {
      type: "match",
      q: "把德语和中文配对：",
      pairs: [["Haus", "房子"], ["Fenster", "窗户"], ["Stuhl", "椅子"], ["Garten", "花园"]],
      explain: "这四个都是本课的房屋与物品名词：das Haus、das Fenster、der Stuhl、der Garten。"
    },
    {
      type: "order",
      q: "把单词排成正确的句子：",
      words: ["ist", "Das", "ein", "Tisch"],
      answer: "Das ist ein Tisch.",
      explain: "陈述句动词放第二位：Das ist ein Tisch. 句首字母大写，句末用句号。"
    },
    {
      type: "listen",
      audio: "Wo wohnst du?",
      options: ["Wo wohnst du?", "Was ist das?", "Wer bist du?"],
      answer: 0,
      explain: "听到的是 Wo wohnst du?（你住在哪里？）。wohnen 的 du 形式是 wohnst。"
    },
    {
      type: "choice",
      q: "指着一扇窗问「这是什么？」，最合适的回答是：",
      options: ["Das ist ein Fenster.", "Das ist eine Fenster.", "Das bin ein Fenster."],
      answer: 0,
      explain: "Fenster 是中性名词，用 ein；回答的动词用 ist，不用 bin。"
    },
    {
      type: "truefalse",
      q: "课文里，床在厨房里。",
      answer: false,
      explain: "厨房里是桌子和椅子；床不在厨房，欧亚西莉亚最后指了指那边：Das Bett ist dort."
    }
  ]
};
