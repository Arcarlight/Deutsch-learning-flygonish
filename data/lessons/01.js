window.LESSON = {
  id: 1,
  chapter: "Kapitel 1",
  title: "Hallo, Welt!",
  subtitle: "醒来的早晨",
  blurb: "你在森林边的草地上醒来，身体变成了一只小小的宝可梦。一只背着篮子的沙漠蜻蜓向你走来。",
  scene: "forest",
  goal: [
    "用德语打招呼、道谢、回答「不客气」",
    "用 Ich bin … / Ich heiße … 介绍自己",
    "认识动词的原形与变位，掌握 sein 的现在时",
    "学会用 Wie / Wer / Wo 提问"
  ],
  friend: ["oasilia"],
  warmup: {
    title: "Wer bist du?",
    lead: "先听一段小对话，不用背。等会儿在课文里，它还会再出现一次。",
    pattern: "Wer bist du? — Ich bin … / Ich heiße …",
    lines: [
      { who: "oasilia", emo: "happy", de: "Hallo! Wer bist du?", zh: "你好！你是谁？" },
      { who: "hero", emo: "normal", de: "Ich bin {{name}}.", zh: "我是{{name}}。" },
      { who: "oasilia", emo: "happy", de: "Wie heißt du?", zh: "你叫什么名字？" },
      { who: "hero", emo: "normal", de: "Ich heiße {{name}}.", zh: "我叫{{name}}。" },
      { who: "oasilia", emo: "happy", de: "Guten Morgen, {{name}}!", zh: "早上好，{{name}}！" },
      { who: "hero", emo: "happy", de: "Guten Morgen!", zh: "早上好！" }
    ],
    forms: {
      verb: "sein（是）",
      items: [
        ["ich", "bin", "Ich bin {{name}}."],
        ["du", "bist", "Du bist ein Freund."],
        ["er", "ist", "Er ist ein Pokémon."],
        ["sie", "ist", "Sie ist Oasilia."]
      ]
    }
  },
  vocab: [
    { de: "hallo", zh: "你好", pos: "感叹词", ipa: "[haˈloː]", note: "最常用的打招呼，任何时间都可以。", ex: { de: "Hallo, ich bin Oasilia.", zh: "你好，我是欧亚西莉亚。" } },
    { de: "guten Morgen", zh: "早上好", pos: "短语", ipa: "[ˌɡuːtn̩ ˈmɔʁɡn̩]", note: "上午见面时用。", ex: { de: "Guten Morgen, Oasilia!", zh: "早上好，欧亚西莉亚！" } },
    { de: "guten Tag", zh: "你好（白天）", pos: "短语", ipa: "[ˌɡuːtn̩ ˈtaːk]", note: "白天较正式的问候。", ex: { de: "Guten Tag, Oasilia!", zh: "你好，欧亚西莉亚！" } },
    { de: "danke", zh: "谢谢", pos: "感叹词", ipa: "[ˈdaŋkə]", ex: { de: "Danke, Oasilia!", zh: "谢谢你，欧亚西莉亚！" } },
    { de: "bitte", zh: "请；不客气", pos: "感叹词", ipa: "[ˈbɪtə]", note: "既可以表示「请」，也可以回答「不客气」。", ex: { de: "Bitte! Komm, {{name}}!", zh: "不客气！来吧，{{name}}！" } },
    { de: "ja", zh: "是；对", pos: "感叹词", ipa: "[jaː]", ex: { de: "Ja, ich bin ein Pokémon.", zh: "是的，我是一只宝可梦。" } },
    { de: "nein", zh: "不；不是", pos: "感叹词", ipa: "[naɪn]", ex: { de: "Nein, danke.", zh: "不，谢谢。" } },
    { de: "ich", zh: "我", pos: "代词", ipa: "[ɪç]", ex: { de: "Ich bin {{name}}.", zh: "我是{{name}}。" } },
    { de: "du", zh: "你", pos: "代词", ipa: "[duː]", ex: { de: "Woher kommst du?", zh: "你从哪里来？" } },
    { de: "heißen", zh: "名叫；叫做", pos: "动词", ipa: "[ˈhaɪsn̩]", ex: { de: "Wie heißt du?", zh: "你叫什么名字？" } },
    { de: "sein", zh: "是", pos: "动词", ipa: "[zaɪn]", note: "德语最重要的动词，变位不规则。", ex: { de: "Ich bin ein Pokémon.", zh: "我是一只宝可梦。" } },
    { de: "wer", zh: "谁", pos: "疑问词", ipa: "[veːɐ̯]", ex: { de: "Wer bist du?", zh: "你是谁？" } },
    { de: "wie", zh: "怎样；如何", pos: "疑问词", ipa: "[viː]", ex: { de: "Wie heißt du?", zh: "你叫什么名字？" } },
    { de: "wo", zh: "哪里", pos: "疑问词", ipa: "[voː]", ex: { de: "Wo bin ich?", zh: "我在哪里？" } },
    { de: "hier", zh: "这里", pos: "副词", ipa: "[hiːɐ̯]", note: "表示说话人所在的地方。", ex: { de: "Du bist hier.", zh: "你在这里。" } },
    { de: "kommen", zh: "来", pos: "动词", ipa: "[ˈkɔmən]", ex: { de: "Komm, {{name}}!", zh: "来吧，{{name}}！" } },
    { de: "aus", zh: "从……出来", pos: "介词", ipa: "[aʊs]", note: "和 kommen 搭配：Ich komme aus …", ex: { de: "Ich komme aus der Wüste.", zh: "我来自沙漠。" } },
    { de: "der Freund, die Freunde", zh: "朋友", pos: "名词", ipa: "[fʁɔɪnt]", ex: { de: "Wir sind Freunde.", zh: "我们是朋友。" } },
    { de: "lieben", zh: "爱；喜爱", pos: "动词", ipa: "[ˈliːbn̩]", note: "表示很深的喜欢。", ex: { de: "Ich liebe die Wüste.", zh: "我爱沙漠。" } },
    { de: "die Wüste, die Wüsten", zh: "沙漠", pos: "名词", ipa: "[ˈvyːstə]", note: "欧亚西莉亚的故乡。", ex: { de: "Ich komme aus der Wüste.", zh: "我来自沙漠。" } },
    { de: "das Pokémon, die Pokémon", zh: "宝可梦", pos: "名词", ipa: "[ˈpoːkemon]", note: "这个世界里所有居民的统称。", ex: { de: "Ich bin ein Pokémon.", zh: "我是一只宝可梦。" } }
  ],
  texts: [
    {
      title: "Erwachen",
      subtitle: "醒来",
      lines: [
        { n: "阳光从树叶间落下来，落在你的脸上。你睁开眼睛。" },
        { who: "hero", emo: "worried", de: "Wo … wo bin ich?", zh: "我……我在哪里？" },
        { n: "这不是你熟悉的房间。你想站起来，可是身体变得又短又圆，脚也变成了小小的爪子。" },
        { who: "hero", emo: "stunned", de: "Was? Ich bin … ein Pokémon?", zh: "什么？我……变成宝可梦了？" },
        { n: "草丛沙沙地响。一只沙漠蜻蜓探出头来，背上背着一个小小的篮子。" },
        { who: "oasilia", emo: "happy", de: "Hallo! Guten Morgen!", zh: "你好！早上好！" },
        { who: "hero", emo: "worried", de: "Ah … hallo.", zh: "啊……你好。" },
        { who: "oasilia", emo: "happy", de: "Wie heißt du?", zh: "你叫什么名字？" },
        { who: "hero", emo: "normal", de: "Ich heiße {{name}}.", zh: "我叫{{name}}。" },
        { who: "oasilia", emo: "happy", de: "{{name}}? Ich bin Oasilia.", zh: "{{name}}？我是欧亚西莉亚。" },
        { n: "她伸出手来。手心里是一颗亮晶晶的文柚果。" }
      ]
    },
    {
      title: "Oasilia stellt sich vor",
      subtitle: "欧亚西莉亚的自我介绍",
      lines: [
        { who: "oasilia", emo: "normal", de: "Du bist ein {{species}}. Ich bin Oasilia.", zh: "你是一只{{species}}。我是欧亚西莉亚。" },
        { who: "hero", emo: "surprised", de: "Ein {{species}}?", zh: "一只{{species}}？" },
        { who: "oasilia", emo: "happy", de: "Ja! Ich komme aus der Wüste.", zh: "对呀！我来自沙漠。" },
        { who: "hero", emo: "surprised", de: "Du kommst aus der Wüste?", zh: "你来自沙漠？" },
        { who: "oasilia", emo: "happy", de: "Ja! Ich liebe die Wüste.", zh: "对！我爱沙漠。" },
        { who: "hero", emo: "worried", de: "Ich bin {{name}}. Ich komme aus … aus …", zh: "我是{{name}}。我来自……来自……" },
        { n: "你不知道该怎么说。那个地方的名字，好像卡在了喉咙里。" },
        { who: "oasilia", emo: "normal", de: "Du bist hier.", zh: "你在这里。" },
        { n: "她指了指脚下的草地，又拍了拍你的头。" },
        { who: "oasilia", emo: "happy", de: "Komm, {{name}}! Wir sind Freunde.", zh: "来吧，{{name}}！我们是朋友了。" },
        { who: "hero", emo: "happy", de: "Danke, Oasilia!", zh: "谢谢你，欧亚西莉亚！" },
        { who: "oasilia", emo: "happy", de: "Bitte!", zh: "不客气！" }
      ]
    }
  ],
  grammar: [
    {
      title: "人称代词与 sein（是）",
      intro: "德语动词在词典里的样子叫**原形**，大多以 -en 结尾（kommen、heißen）。变位时先去掉 -en 得到**词干**，再按人称换词尾：ich komme、du kommst、er kommt——这种变化就叫**变位**。规则动词的完整词尾第 4 课系统学；这一课先把最特殊的 **sein** 记住。",
      table: {
        head: ["人称", "sein", "例句"],
        rows: [
          ["ich（我）", "bin", "Ich bin Oasilia."],
          ["du（你）", "bist", "Du bist ein Freund."],
          ["er（他）", "ist", "Er ist ein Freund."],
          ["sie（她）", "ist", "Sie ist Oasilia."],
          ["es（它）", "ist", "Das ist ein Pokémon."],
          ["wir（我们）", "sind", "Wir sind Freunde."],
          ["ihr（你们）", "seid", "Ihr seid Freunde."],
          ["sie（他们/她们）", "sind", "Sie sind Freunde."]
        ]
      },
      notes: [
        "先感受一下动词的格式：kommen（原形）→ komm-（词干）→ ich **komme** / du **kommst** / er **kommt**。现在不用背，第 4 课再系统练规则词尾。",
        "sein 不按 komm- 这种规则走，所以它的每一格都要单独记。",
        "`du` 用于朋友、家人和小孩之间；本课的所有对话都用 du。",
        "德语的名词首字母永远大写：das Pokémon、die Wüste。",
        "sie 既可以表示「她」，也可以表示「他们/她们」，看动词形式区分：sie ist / sie sind。"
      ],
      examples: [
        { de: "Ich bin {{name}}.", zh: "我是{{name}}。" },
        { de: "Ich komme aus der Wüste.", zh: "我来自沙漠。" },
        { de: "Du bist ein Freund.", zh: "你是一个朋友。" }
      ]
    },
    {
      title: "动词第二位与 W-问句：Wie / Wer / Wo / Woher",
      intro: "把德语句子想成一排格子：第一个位置、第二个位置、第三个位置……**动词永远站在第二个位置**。W-问句就是用 wer / wie / wo / woher 这类 W 开头的词提问的句子：疑问词占第一个位置，动词仍然在第二个位置。",
      table: {
        head: ["第一个位置", "第二个位置", "后面"],
        rows: [
          ["Ich", "bin", "Oasilia."],
          ["Wo", "bin", "ich?"],
          ["Du", "bist", "ein Freund."],
          ["Woher", "kommst", "du?"]
        ]
      },
      notes: [
        "数位置时，把主语、动词、其他成分各算一块：Ich / bin / Oasilia 只有三块，bin 正好在第二个位置。",
        "回答 W-问句时，动词不用搬家：Woher **kommst** du? → Ich **komme** aus der Wüste. komme 仍然在第二个位置。",
        "把动词搬到第一个位置，就变成一般疑问句：Bist du …? 这个第 4 课再细讲。",
        "句子里的标点别忘：德语问句结尾是 ?，陈述句是 ."
      ],
      examples: [
        { de: "Wo bin ich? — Du bist hier.", zh: "我在哪里？——你在这里。" },
        { de: "Woher kommst du? — Ich komme aus der Wüste.", zh: "你从哪里来？——我来自沙漠。" }
      ]
    }
  ],
  culture: {
    title: "林缘村 Waldrand",
    text: "林缘村夹在森林与沙丘之间，走上半天就能看见海。这里的房子大多是木头搭的，屋顶压着石头，烟囱里总是冒着细细的烟。村里没有电，晚上点油灯；信件靠走路的宝可梦一封封送。孩子们用宝可币买糖和树果，一枚硬币就能换一小把。欧亚西莉亚说，这里最好的东西是早上森林里的味道。"
  },
  exercises: [
    {
      type: "choice",
      q: "早上见到欧亚西莉亚，你应该说什么？",
      options: ["Guten Morgen!", "Danke!", "Nein!"],
      answer: 0,
      explain: "Guten Morgen 是「早上好」。Danke 是「谢谢」，Nein 是「不」。"
    },
    {
      type: "fill",
      q: "Ich ___ Oasilia.（我是欧亚西莉亚。）",
      answer: ["bin"],
      hint: "sein 的 ich 形式",
      explain: "ich 搭配 bin：Ich bin Oasilia."
    },
    {
      type: "fill",
      q: "Wie ___ du?（你叫什么名字？）",
      answer: ["heißt", "heisst"],
      hint: "heißen 的 du 形式",
      explain: "heißen 在 du 后面变位为 heißt：Wie heißt du? 注意 ß 也可以写成 ss。"
    },
    {
      type: "order",
      q: "把单词排成正确的句子：",
      words: ["bin", "Ich", "ein", "Pokémon"],
      answer: "Ich bin ein Pokémon.",
      explain: "陈述句动词放第二位：Ich bin ein Pokémon."
    },
    {
      type: "match",
      q: "把德语和中文配对：",
      pairs: [["Hallo", "你好"], ["Danke", "谢谢"], ["Nein", "不"], ["Freund", "朋友"]],
      explain: "这四个都是第 1 课的基础词：Hallo 你好、Danke 谢谢、Nein 不、Freund 朋友。"
    },
    {
      type: "listen",
      audio: "Wie heißt du?",
      options: ["Wie heißt du?", "Wo bin ich?", "Wer bist du?"],
      answer: 0,
      explain: "听到的是 Wie heißt du?（你叫什么名字？）。"
    },
    {
      type: "choice",
      q: "「我来自沙漠。」用德语怎么说？",
      options: ["Ich bin aus der Wüste.", "Ich komme aus der Wüste.", "Ich heiße aus der Wüste."],
      answer: 1,
      explain: "「来自」用 kommen aus：Ich komme aus der Wüste. sein 和 heißen 都不能和 aus 这样搭配。"
    },
    {
      type: "truefalse",
      q: "欧亚西莉亚来自沙漠。",
      answer: true,
      explain: "课文里她说：Ich komme aus der Wüste."
    }
  ]
};
