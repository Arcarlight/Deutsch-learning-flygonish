window.LESSON = {
  id: 7,
  chapter: "Kapitel 7",
  title: "Auf dem Markt",
  subtitle: "集市买东西",
  blurb: "周末，欧亚西莉亚带你和米拉去集市。你在米拉的摊位前第一次问价，又用自己攒下的宝可币买了一小袋文柚果。",
  scene: "market",
  goal: [
    "说出 20 到 100 的数字",
    "用 Was kostet das? 问价并听懂价格",
    "掌握第四格复数 die Äpfel",
    "学会说 teuer / billig / frisch，完成一次买卖"
  ],
  friend: [],
  warmup: {
    title: "Was kostet das?",
    lead: "先听一小段对话，不用背。等会儿在集市上，你会用到这几句话。",
    pattern: "Was kostet das? — Das kostet zehn Poké. / Was kosten die Äpfel?",
    lines: [
      { who: "hero", emo: "normal", de: "Oasilia, was kostet das?", zh: "欧亚西莉亚，这个多少钱？" },
      { who: "oasilia", emo: "happy", de: "Das ist ein Apfel. Er kostet fünf Poké.", zh: "这是一个苹果。它五宝可币。" },
      { who: "hero", emo: "surprised", de: "Nur fünf Poké? Das ist billig!", zh: "只要五宝可币？真便宜！" },
      { who: "oasilia", emo: "happy", de: "Ja. Und ein Beutel Tsitrubeeren kostet zwanzig Poké.", zh: "是呀。一袋文柚果二十宝可币。" },
      { who: "hero", emo: "normal", de: "Zwanzig Poké. Das ist teuer.", zh: "二十宝可币。这可真贵。" },
      { who: "oasilia", emo: "happy", de: "Dann kaufen wir Äpfel, {{name}}!", zh: "那我们就买苹果吧，{{name}}！" }
    ],
    forms: {
      verb: "kosten（值……钱）",
      items: [
        ["das（单数）", "kostet", "Das kostet acht Poké."],
        ["die Äpfel（复数）", "kosten", "Die Äpfel kosten fünf Poké."],
        ["ein Kilo（单数）", "kostet", "Ein Kilo Beeren kostet dreißig Poké."],
        ["der Beutel（单数）", "kostet", "Ein Beutel kostet zwanzig Poké."]
      ]
    }
  },
  vocab: [
    { de: "der Markt, die Märkte", zh: "集市", pos: "名词", ipa: "[maʁkt]", ex: { de: "Der Markt ist heute groß.", zh: "今天的集市很大。" } },
    { de: "kaufen", zh: "买", pos: "动词", ipa: "[ˈkaʊfn̩]", ex: { de: "Ich kaufe zehn Äpfel.", zh: "我买十个苹果。" } },
    { de: "verkaufen", zh: "卖", pos: "动词", ipa: "[fɛɐ̯ˈkaʊfn̩]", ex: { de: "Mira verkauft Äpfel und Beeren.", zh: "米拉卖苹果和浆果。" } },
    { de: "kosten", zh: "值……钱；价钱是", pos: "动词", ipa: "[ˈkɔstn̩]", ex: { de: "Die Äpfel kosten fünf Poké.", zh: "苹果五宝可币。" } },
    { de: "der Preis, die Preise", zh: "价格", pos: "名词", ipa: "[pʁaɪs]", ex: { de: "Der Preis ist fünfzig Poké.", zh: "价格是五十宝可币。" } },
    { de: "das Geld", zh: "钱", pos: "名词", ipa: "[ɡɛlt]", note: "不可数名词，没有复数。", ex: { de: "Hier ist das Geld.", zh: "钱在这里。" } },
    { de: "der Poké, die Poké", zh: "宝可币", pos: "名词", ipa: "[poˈkeː]", img: "assets/img/poke.png", note: "这个世界的货币，单复数同形。", ex: { de: "Das kostet zehn Poké.", zh: "这个十宝可币。" } },
    { de: "teuer", zh: "贵的", pos: "形容词", ipa: "[ˈtɔɪɐ]", ex: { de: "Zwanzig Poké? Das ist teuer!", zh: "二十宝可币？太贵了！" } },
    { de: "billig", zh: "便宜的", pos: "形容词", ipa: "[ˈbɪlɪç]", ex: { de: "Fünf Poké? Das ist billig!", zh: "五宝可币？真便宜！" } },
    { de: "das Kilo, die Kilos", zh: "公斤", pos: "名词", ipa: "[ˈkiːlo]", ex: { de: "Ein Kilo Äpfel kostet zwanzig Poké.", zh: "一公斤苹果二十宝可币。" } },
    { de: "der Beutel, die Beutel", zh: "袋子", pos: "名词", ipa: "[ˈbɔɪtl̩]", ex: { de: "Hier ist ein Beutel Äpfel.", zh: "这里是一袋苹果。" } },
    { de: "frisch", zh: "新鲜的", pos: "形容词", ipa: "[fʁɪʃ]", ex: { de: "Die Äpfel sind frisch.", zh: "苹果很新鲜。" } },
    { de: "süß", zh: "甜的", pos: "形容词", ipa: "[zyːs]", ex: { de: "Die Beeren sind süß.", zh: "浆果是甜的。" } },
    { de: "sauer", zh: "酸的", pos: "形容词", ipa: "[ˈzaʊɐ]", ex: { de: "Die Tsitrubeeren sind sauer.", zh: "文柚果是酸的。" } },
    { de: "der Verkäufer, die Verkäufer", zh: "卖家；摊主", pos: "名词", ipa: "[fɛɐ̯ˈkɔɪfɐ]", note: "女摊主说 die Verkäuferin。", ex: { de: "Alle Verkäufer hier sind Freunde.", zh: "这里所有的摊主都是朋友。" } },
    { de: "bezahlen", zh: "付钱", pos: "动词", ipa: "[bəˈtsaːln̩]", ex: { de: "Ich bezahle zehn Poké.", zh: "我付十宝可币。" } },
    { de: "die Familie, die Familien", zh: "家人；家庭", pos: "名词", ipa: "[faˈmiːli̯ə]", ex: { de: "Meine Familie verkauft Äpfel.", zh: "我的家人卖苹果。" } },
    { de: "wie viel", zh: "多少", pos: "短语", ipa: "[viː fiːl]", note: "问价格或数量：Wie viel kostet das?", ex: { de: "Wie viel kostet das Kilo?", zh: "一公斤多少钱？" } }
  ],
  texts: [
    {
      title: "Der Markt",
      subtitle: "集市",
      lines: [
        { n: "休息日的早上，风里有面包和果子的味道。欧亚西莉亚拿着袋子，米拉已经在村口等了。" },
        { who: "oasilia", emo: "happy", de: "Guten Morgen, Mira!", zh: "早上好，米拉！" },
        { who: "mira", emo: "normal", de: "Guten Morgen, Oasilia! Guten Morgen, {{name}}!", zh: "早上好，欧亚西莉亚！早上好，{{name}}！" },
        { who: "hero", emo: "happy", de: "Guten Morgen! Wo ist der Markt?", zh: "早上好！集市在哪里？" },
        { who: "mira", emo: "normal", de: "Dort. Meine Familie verkauft dort.", zh: "在那边。我的家人在那里卖东西。" },
        { who: "mira", emo: "normal", de: "Ich verkaufe Äpfel und Beeren.", zh: "我卖苹果和浆果。" },
        { n: "集市到了。木棚下面摆着一筐一筐的果子，人声慢慢的，暖暖的。" },
        { who: "oasilia", emo: "happy", de: "Alle Verkäufer hier sind Freunde.", zh: "这里的摊主都是朋友。" },
        { who: "mira", emo: "normal", de: "Die Äpfel sind frisch.", zh: "苹果很新鲜。" },
        { who: "hero", emo: "normal", de: "Was kostet das?", zh: "这个多少钱？" },
        { who: "mira", emo: "normal", de: "Fünf Poké.", zh: "五宝可币。" },
        { who: "hero", emo: "surprised", de: "Fünf Poké? Das ist billig!", zh: "五宝可币？真便宜！" },
        { who: "hero", emo: "normal", de: "Ich möchte Äpfel kaufen. Zehn Äpfel, bitte.", zh: "我想买苹果。十个苹果，谢谢。" },
        { who: "mira", emo: "normal", de: "Zehn Äpfel. Der Preis ist fünfzig Poké.", zh: "十个苹果。价格是五十宝可币。" },
        { who: "oasilia", emo: "normal", de: "Hier ist das Geld.", zh: "钱在这里。" },
        { who: "mira", emo: "happy", de: "Danke! Hier sind die Äpfel.", zh: "谢谢！苹果给你。" },
        { who: "hero", emo: "happy", de: "Danke, Oasilia!", zh: "谢谢你，欧亚西莉亚！" },
        { who: "oasilia", emo: "happy", de: "Und die Beeren kosten acht Poké. Möchtest du auch Beeren, {{name}}?", zh: "浆果是八宝可币。你也想要浆果吗，{{name}}？" },
        { who: "hero", emo: "happy", de: "Ja, bitte! Der Markt ist schön.", zh: "好呀，谢谢！这个集市真好。" }
      ]
    },
    {
      title: "Ein Beutel Tsitrubeeren",
      subtitle: "一袋文柚果",
      lines: [
        { n: "摊位旁边忽然传来翅膀的响声。艾米在集市上飞来飞去。" },
        { who: "emi", emo: "happy", de: "{{name}}! Kaufst du Beeren?", zh: "{{name}}！你在买浆果吗？" },
        { who: "hero", emo: "normal", de: "Ja! Ich kaufe Tsitrubeeren.", zh: "是呀！我在买文柚果。" },
        { who: "emi", emo: "normal", de: "Die Tsitrubeeren sind sauer und süß. Und sehr frisch!", zh: "文柚果又酸又甜。而且很新鲜！" },
        { who: "oasilia", emo: "happy", de: "Mira, wie viel kostet ein Kilo Tsitrubeeren?", zh: "米拉，一公斤文柚果多少钱？" },
        { who: "mira", emo: "normal", de: "Dreißig Poké.", zh: "三十宝可币。" },
        { who: "hero", emo: "surprised", de: "Dreißig Poké? Das ist teuer! Ich habe nur zwanzig Poké.", zh: "三十宝可币？太贵了！我只有二十宝可币。" },
        { who: "mira", emo: "normal", de: "Dann nimm einen Beutel. Ein Beutel kostet zwanzig Poké.", zh: "那就拿一袋吧。一袋二十宝可币。" },
        { who: "hero", emo: "happy", de: "Ja! Ich nehme einen Beutel Tsitrubeeren.", zh: "好！我要一袋文柚果。" },
        { who: "mira", emo: "normal", de: "Hier, bitte. Ein Beutel Tsitrubeeren.", zh: "给，请。一袋文柚果。" },
        { who: "hero", emo: "happy", de: "Danke! Ich bezahle. Hier sind zwanzig Poké.", zh: "谢谢！我付钱。这里是二十宝可币。" },
        { who: "mira", emo: "happy", de: "Danke!", zh: "谢谢！" },
        { n: "你刚把硬币放好，一个影子从木棚后面闪过。一片叶子轻轻挠了挠艾米的尾巴。" },
        { who: "emi", emo: "surprised", de: "Ah! Was ist das?", zh: "啊！那是什么？" },
        { who: "hero", emo: "surprised", de: "Ein Pokémon?", zh: "一只宝可梦？" },
        { who: "oasilia", emo: "normal", de: "Nur ein Pokémon.", zh: "只是一只宝可梦。" },
        { who: "hero", emo: "normal", de: "Wo?", zh: "在哪儿？" },
        { who: "oasilia", emo: "happy", de: "Dort … oder dort.", zh: "那边……或者那边。" }
      ]
    }
  ],
  grammar: [
    {
      title: "数字 20–100",
      intro: "整十的数字都以 **-zig** 结尾，只有 30 是 **dreißig**（带 ß）。21 到 99 的规则很特别：先读**个位**，加 **und**，再读**十位**，而且写成一个词。",
      table: {
        head: ["数字", "德语", "提示"],
        rows: [
          ["20", "zwanzig", "整十：-zig 结尾"],
          ["21", "einundzwanzig", "一 + und + 二十"],
          ["30", "dreißig", "注意 ß，不是 dreizig"],
          ["40", "vierzig", "vier + zig"],
          ["50", "fünfzig", "fünf + zig"],
          ["60", "sechzig", "不是 sechszig"],
          ["70", "siebzig", "不是 siebenzig"],
          ["80", "achtzig", "acht + zig"],
          ["90", "neunzig", "neun + zig"],
          ["100", "hundert", "也可以说 einhundert"]
        ]
      },
      notes: [
        "45 就是 **fünfundvierzig**：先说 fünf，再说 und，最后说 vierzig。德语里全都连在一起写。",
        "价格里的数字最常见：fünf Poké、zwanzig Poké、fünfzig Poké。",
        "21 以上先读个位，这一点和中文正好相反，要多念几遍。"
      ],
      examples: [
        { de: "Ein Kilo Äpfel kostet zwanzig Poké.", zh: "一公斤苹果二十宝可币。" },
        { de: "Das kostet fünfundvierzig Poké.", zh: "这个四十五宝可币。" }
      ]
    },
    {
      title: "问价：Was kostet das?",
      intro: "问一样东西多少钱，用 **Was kostet das?**。如果问的是复数（好几个东西），动词 kosten 也要跟着变成 **kosten**。货币 Poké 单复数同形，不用加词尾。",
      table: {
        head: ["问句", "回答", "说明"],
        rows: [
          ["Was kostet das?", "Das kostet zehn Poké.", "单数"],
          ["Was kosten die Äpfel?", "Die kosten fünf Poké.", "复数，用 kosten"],
          ["Was kostet ein Kilo Äpfel?", "Ein Kilo kostet dreißig Poké.", "带量词"],
          ["Wie viel kostet das?", "Zehn Poké.", "口语里也常说"]
        ]
      },
      notes: [
        "**第四格复数**：复数名词的冠词在第四格仍然是 **die**，不用变：Ich kaufe **die Äpfel**. Ich nehme **die Beeren**.",
        "只有阳性**单数**才变成 einen：Ich kaufe **einen** Beutel. Ich nehme **einen** Apfel.",
        "回答价格时可以省略主语，只说数字加货币：Fünf Poké."
      ],
      examples: [
        { de: "Ich kaufe die Äpfel.", zh: "我买这些苹果。" },
        { de: "Was kostet ein Beutel Äpfel?", zh: "一袋苹果多少钱？" }
      ]
    }
  ],
  culture: {
    title: "周末的集市",
    text: "集市每周末在村子中央开。木棚一排排搭起来，卖果子的、卖面包的、卖奶酪的都来了，空气里全是新鲜的味道。这里不用纸笔算账，一枚宝可币就是一枚硬币，孩子们帮家里看摊，一边数钱一边学着说价格。熟人之间很少争价钱，米拉说，摊子前多说几句话，比多赚一枚硬币更让人高兴。"
  },
  exercises: [
    {
      type: "choice",
      q: "45 用德语怎么说？",
      options: ["fünfundvierzig", "vierundfünfzig", "fünfvierzig"],
      answer: 0,
      explain: "21–99 先说个位再说十位：45 = fünf + und + vierzig = fünfundvierzig。"
    },
    {
      type: "fill",
      q: "Was ___ die Äpfel?（这些苹果多少钱？）",
      answer: ["kosten"],
      hint: "kosten 的复数形式",
      explain: "die Äpfel 是复数，动词用 kosten：Was kosten die Äpfel?"
    },
    {
      type: "fill",
      q: "Ich kaufe ___ Äpfel.（我买这些苹果。）",
      answer: ["die"],
      hint: "第四格复数冠词",
      explain: "复数名词的冠词在第四格仍然是 die：Ich kaufe die Äpfel."
    },
    {
      type: "fill",
      q: "Ein Kilo Äpfel ___ zwanzig Poké.（一公斤苹果二十宝可币。）",
      answer: ["kostet"],
      hint: "主语是 ein Kilo，单数",
      explain: "主语 ein Kilo 是单数，动词用 kostet。"
    },
    {
      type: "order",
      q: "把单词排成正确的句子：",
      words: ["Was", "kostet", "das"],
      answer: "Was kostet das?",
      explain: "W-问句里动词放第二位：Was kostet das?"
    },
    {
      type: "match",
      q: "把德语和中文配对：",
      pairs: [["teuer", "贵的"], ["billig", "便宜的"], ["frisch", "新鲜的"], ["sauer", "酸的"]],
      explain: "teuer 贵、billig 便宜、frisch 新鲜、sauer 酸。可以成对来记：teuer ↔ billig，süß ↔ sauer。"
    },
    {
      type: "listen",
      audio: "Die Äpfel kosten fünfzig Poké.",
      options: ["Die Äpfel kosten fünfzig Poké.", "Die Äpfel kosten fünfzehn Poké.", "Die Beeren kosten fünfzig Poké."],
      answer: 0,
      explain: "听到的是 Die Äpfel kosten fünfzig Poké.（苹果五十宝可币。），注意 fünfzig 和 fünfzehn 的区别。"
    },
    {
      type: "truefalse",
      q: "米拉的苹果又贵又不新鲜。",
      answer: false,
      explain: "课文里米拉说 Die Äpfel sind frisch.，一个五宝可币，主角还说 Das ist billig!。"
    },
    {
      type: "choice",
      q: "「我想买一袋苹果。」用德语怎么说？",
      options: ["Ich möchte einen Beutel Äpfel kaufen.", "Ich möchte eine Beutel Äpfel kaufen.", "Ich möchte ein Beutel Äpfel kaufen."],
      answer: 0,
      explain: "Beutel 是阳性名词（der Beutel），第四格用 einen：einen Beutel Äpfel。"
    }
  ]
};
