window.LESSON = {
  id: 5,
  chapter: "Kapitel 5",
  title: "Im Klassenzimmer",
  subtitle: "借文具",
  blurb: "课堂上要画画，你却没有铅笔。米拉借给你一支，阿尔科又递来橡皮和另一支短短的铅笔。",
  scene: "classroom",
  goal: [
    "掌握 haben（有）的现在时变位",
    "学会第四格不定冠词 einen / eine / ein",
    "用 kein / keine 说「没有」",
    "向同学借文具、说谢谢"
  ],
  friend: [],
  warmup: {
    title: "Hast du einen Bleistift?",
    lead: "先听一小段对话，不用背。等会儿课文里还会再听到这些句子。",
    pattern: "Hast du einen Bleistift? — Ja, ich habe einen. / Nein, ich habe keinen.",
    lines: [
      { who: "licht", emo: "happy", de: "Guten Morgen, Kinder! Habt ihr einen Bleistift?", zh: "早上好，孩子们！你们有铅笔吗？" },
      { who: "mira", emo: "normal", de: "Ja. Ich habe einen Bleistift.", zh: "有。我有一支铅笔。" },
      { who: "arko", emo: "happy", de: "Ich habe zwei Bleistifte!", zh: "我有两支铅笔！" },
      { who: "hero", emo: "worried", de: "Ich habe keinen Bleistift.", zh: "我没有铅笔。" },
      { who: "mira", emo: "happy", de: "Hier, bitte! Ich habe zwei.", zh: "给，请！我有两支。" },
      { who: "hero", emo: "happy", de: "Danke, Mira! Jetzt male ich ein Bild.", zh: "谢谢你，米拉！现在我可以画画了。" }
    ],
    forms: {
      verb: "haben（有）",
      items: [
        ["ich", "habe", "Ich habe ein Heft."],
        ["du", "hast", "Hast du einen Stift?"],
        ["er", "hat", "Er hat einen Radiergummi."],
        ["sie", "hat", "Sie hat zwei Hefte."],
        ["wir", "haben", "Wir haben viele Hefte."],
        ["ihr", "habt", "Habt ihr ein Heft?"]
      ]
    }
  },
  vocab: [
    { de: "haben", zh: "有", pos: "动词", ipa: "[ˈhaːbn̩]", note: "不规则动词：du hast，er/sie/es hat。", ex: { de: "Ich habe einen Bleistift.", zh: "我有一支铅笔。" } },
    { de: "der Bleistift, die Bleistifte", zh: "铅笔", pos: "名词", ipa: "[ˈblaɪʃtɪft]", ex: { de: "Hast du einen Bleistift?", zh: "你有铅笔吗？" } },
    { de: "der Radiergummi, die Radiergummis", zh: "橡皮", pos: "名词", ipa: "[ʁaˈdiːɐ̯ɡʊmi]", ex: { de: "Hier ist ein Radiergummi.", zh: "这里有一块橡皮。" } },
    { de: "das Heft, die Hefte", zh: "本子；练习本", pos: "名词", ipa: "[hɛft]", ex: { de: "Ich habe kein Heft.", zh: "我没有本子。" } },
    { de: "das Papier, die Papiere", zh: "纸", pos: "名词", ipa: "[paˈpiːɐ̯]", ex: { de: "Ich brauche Papier.", zh: "我需要纸。" } },
    { de: "die Schere, die Scheren", zh: "剪刀", pos: "名词", ipa: "[ˈʃeːʁə]", ex: { de: "Hier ist eine Schere.", zh: "这里有一把剪刀。" } },
    { de: "die Lampe, die Lampen", zh: "灯", pos: "名词", ipa: "[ˈlampə]", ex: { de: "Die Lampe ist groß.", zh: "这盏灯很大。" } },
    { de: "brauchen", zh: "需要", pos: "动词", ipa: "[ˈbʁaʊxn̩]", ex: { de: "Ich brauche ein Heft.", zh: "我需要一个本子。" } },
    { de: "geben", zh: "给", pos: "动词", ipa: "[ˈɡeːbn̩]", note: "不规则动词：du gibst，er gibt。", ex: { de: "Mira gibt Arko eine Schere.", zh: "米拉给阿尔科一把剪刀。" } },
    { de: "nehmen", zh: "拿；取", pos: "动词", ipa: "[ˈneːmən]", note: "不规则动词：du nimmst，er nimmt。", ex: { de: "Ich nehme ein Papier.", zh: "我拿一张纸。" } },
    { de: "kein", zh: "没有（阳性、中性名词前）", pos: "代词", ipa: "[kaɪn]", note: "否定名词用 kein；阳性名词在第四格变成 keinen。", ex: { de: "Ich habe keinen Bleistift.", zh: "我没有铅笔。" } },
    { de: "keine", zh: "没有（阴性、复数名词前）", pos: "代词", ipa: "[ˈkaɪnə]", ex: { de: "Ich habe keine Schere.", zh: "我没有剪刀。" } },
    { de: "der Tisch, die Tische", zh: "桌子", pos: "名词", ipa: "[tɪʃ]", ex: { de: "Der Tisch ist groß.", zh: "这张桌子很大。" } },
    { de: "das Fenster, die Fenster", zh: "窗户", pos: "名词", ipa: "[ˈfɛnstɐ]", ex: { de: "Das Fenster ist groß.", zh: "这扇窗户很大。" } },
    { de: "malen", zh: "画画", pos: "动词", ipa: "[ˈmaːlən]", ex: { de: "Wir malen ein Bild.", zh: "我们画一幅画。" } },
    { de: "das Bild, die Bilder", zh: "图画", pos: "名词", ipa: "[bɪlt]", ex: { de: "Das Bild ist schön.", zh: "这幅画很美。" } },
    { de: "das Klassenzimmer, die Klassenzimmer", zh: "教室", pos: "名词", ipa: "[ˈklasn̩tsɪmɐ]", ex: { de: "Das Klassenzimmer ist groß.", zh: "教室很大。" } }
  ],
  texts: [
    {
      title: "Malen im Klassenzimmer",
      subtitle: "在教室里画画",
      lines: [
        { n: "教室里很安静，阳光落在黑板上。利希特老师的尾巴发出柔和的光。" },
        { who: "licht", emo: "happy", de: "Guten Morgen, Kinder!", zh: "早上好，孩子们！" },
        { who: "licht", emo: "normal", de: "Heute malen wir. Ihr braucht Papier und einen Bleistift.", zh: "今天我们画画。你们需要纸和一支铅笔。" },
        { who: "hero", emo: "worried", de: "Ich habe keinen Bleistift.", zh: "我没有铅笔。" },
        { who: "mira", emo: "normal", de: "Ich habe zwei Bleistifte. Hier, bitte!", zh: "我有两支铅笔。给，请拿一支！" },
        { who: "hero", emo: "happy", de: "Danke, Mira!", zh: "谢谢你，米拉！" },
        { who: "arko", emo: "happy", de: "Und ich habe einen Radiergummi! Hier!", zh: "我还有一块橡皮！给你！" },
        { who: "hero", emo: "happy", de: "Danke, Arko!", zh: "谢谢你，阿尔科！" },
        { who: "arko", emo: "normal", de: "Hier ist noch ein Bleistift. Er ist klein, aber schön.", zh: "这里还有一支铅笔。它很小，不过很漂亮。" },
        { who: "hero", emo: "happy", de: "Jetzt habe ich einen Bleistift und einen Radiergummi. Danke!", zh: "现在我有铅笔和橡皮了。谢谢！" },
        { who: "licht", emo: "happy", de: "Sehr schön! Jetzt malen wir ein Bild.", zh: "很好！现在我们画一幅画。" },
        { who: "arko", emo: "happy", de: "Ich male ein Pokémon!", zh: "我要画一只宝可梦！" },
        { n: "你在纸上画了一座小房子、一扇窗，还有一条通向海边的小路。手里那支笔的笔头上，还有一圈小小的牙印。" }
      ]
    },
    {
      title: "Unter dem Tisch",
      subtitle: "桌子底下",
      lines: [
        { n: "图画到一半，米拉的橡皮从桌上滚下去，一直滚到桌子底下。" },
        { who: "mira", emo: "sad", de: "Oh! Mein Radiergummi!", zh: "啊！我的橡皮！" },
        { who: "hero", emo: "normal", de: "Wo ist er?", zh: "它在哪里？" },
        { who: "mira", emo: "normal", de: "Dort! Unter dem Tisch.", zh: "在那儿！桌子底下。" },
        { who: "hero", emo: "happy", de: "Hier, bitte! Dein Radiergummi.", zh: "给，请拿好！你的橡皮。" },
        { who: "mira", emo: "happy", de: "Danke, {{name}}!", zh: "谢谢你，{{name}}！" },
        { who: "hero", emo: "happy", de: "Bitte! Wir sind Freunde.", zh: "不客气！我们是朋友。" },
        { who: "arko", emo: "normal", de: "Mira, hast du eine Schere? Ich habe keine Schere.", zh: "米拉，你有剪刀吗？我没有剪刀。" },
        { who: "mira", emo: "normal", de: "Ja. Hier ist eine Schere.", zh: "有。这里有一把剪刀。" },
        { who: "arko", emo: "happy", de: "Danke! Und hast du ein Heft? Ich brauche ein Heft.", zh: "谢谢！你还有本子吗？我需要一个本子。" },
        { who: "mira", emo: "normal", de: "Nein, ich habe kein Heft. Aber {{name}} hat ein Heft.", zh: "没有，我没有本子。不过{{name}}有本子。" },
        { who: "hero", emo: "normal", de: "Ja. Hier, bitte!", zh: "对。给，请拿好！" },
        { who: "arko", emo: "happy", de: "Danke! Jetzt habe ich ein Heft und eine Schere.", zh: "谢谢！现在我有本子和剪刀了。" },
        { who: "licht", emo: "happy", de: "Kinder, ihr habt viele Bilder!", zh: "孩子们，你们画了好多画！" },
        { n: "下课的时候，利希特老师把大家的画挂在窗边。阳光把一张张纸照得暖暖的。" }
      ]
    }
  ],
  grammar: [
    {
      title: "haben（有）的现在时",
      intro: "**haben** 表示「有」，是德语里最常用的动词之一。它的变位不完全规则：`du` 和 `er/sie/es` 的形式要去掉词干里的 -b，需要单独记。",
      table: {
        head: ["人称", "haben", "例句"],
        rows: [
          ["ich（我）", "habe", "Ich habe einen Bleistift."],
          ["du（你）", "hast", "Hast du ein Heft?"],
          ["er / sie / es（他 / 她 / 它）", "hat", "Mira hat zwei Bleistifte."],
          ["wir（我们）", "haben", "Wir haben viele Bilder."],
          ["ihr（你们）", "habt", "Ihr habt Papier."],
          ["sie（他们 / 她们）", "haben", "Sie haben eine Schere."]
        ]
      },
      notes: [
        "`haben` 的 du 形式是 hast，不是 habst；er/sie/es 形式是 hat，不是 habt。",
        "问「你有……吗？」时，把动词放在句首：**Hast** du einen Bleistift? 回答可以只说 Ja 或 Nein。"
      ],
      examples: [
        { de: "Ich habe einen Radiergummi.", zh: "我有一块橡皮。" },
        { de: "Habt ihr Papier?", zh: "你们有纸吗？" }
      ]
    },
    {
      title: "第四格：einen / eine / ein 与 kein / keine",
      intro: "「有」「需要」「拿」这类动词后面的名词要用第四格（Akkusativ）。不定冠词在**阳性**名词前从 ein 变成 **einen**，阴性和中性不变。否定名词时用 kein：阳性第四格是 **keinen**，阴性是 **keine**，中性是 **kein**。",
      table: {
        head: ["性", "肯定", "否定", "例句"],
        rows: [
          ["阳性（der）", "einen Bleistift", "keinen Bleistift", "Ich habe einen Bleistift."],
          ["阴性（die）", "eine Schere", "keine Schere", "Ich brauche eine Schere."],
          ["中性（das）", "ein Heft", "kein Heft", "Ich habe ein Heft."],
          ["复数（die）", "—", "keine Hefte", "Ich habe keine Hefte."]
        ]
      },
      notes: [
        "只有阳性名词的冠词在第四格会变：der → einen，kein → keinen。die 和 das 看起来和第一格一样。",
        "复数名词前没有不定冠词，肯定句直接说 Ich habe Hefte.，否定句说 Ich habe keine Hefte.",
        "课文里的 **unter dem Tisch**（在桌子底下）是固定说法，先整体记住；第三格以后再学。"
      ],
      examples: [
        { de: "Ich habe keinen Bleistift, aber ich habe einen Radiergummi.", zh: "我没有铅笔，但我有一块橡皮。" },
        { de: "Mira braucht keine Schere.", zh: "米拉不需要剪刀。" }
      ]
    }
  ],
  culture: {
    title: "利希特老师的教室",
    text: "教室在村子中间，是一间很大的木屋。墙上有一块黑板，老师用粉笔在上面写字、画画；窗边有一排矮书架，放着薄薄的课本。屋顶挂着两盏油灯，傍晚的时候，利希特老师的尾巴也会亮起来，像第三盏灯。孩子们坐在一条长桌边，谁没有铅笔，就小声向旁边的同学借。"
  },
  exercises: [
    {
      type: "choice",
      q: "Ich brauche ___ Schere.（我需要一把剪刀。）",
      options: ["ein", "einen", "eine"],
      answer: 2,
      explain: "Schere 是阴性名词（die Schere），第四格不变，仍然用 eine。"
    },
    {
      type: "choice",
      q: "Ich habe ___ Bleistift.（我没有铅笔。）",
      options: ["kein", "keine", "keinen"],
      answer: 2,
      explain: "Bleistift 是阳性名词（der Bleistift），第四格变成 einen；否定就是 keinen。"
    },
    {
      type: "fill",
      q: "Mira ___ zwei Bleistifte.（米拉有两支铅笔。）",
      answer: ["hat"],
      hint: "haben 的 er/sie/es 形式",
      explain: "Mira 是第三人称单数（sie），haben 要变成 hat。"
    },
    {
      type: "fill",
      q: "Ihr ___ Papier und einen Bleistift.（你们需要纸和一支铅笔。）",
      answer: ["braucht"],
      hint: "brauchen 的 ihr 形式",
      explain: "ihr 后面的规则动词词尾是 -t：ihr braucht。"
    },
    {
      type: "order",
      q: "把单词排成正确的句子：",
      words: ["Ich", "habe", "einen", "Radiergummi"],
      answer: "Ich habe einen Radiergummi.",
      explain: "陈述句动词放第二位：Ich habe einen Radiergummi."
    },
    {
      type: "match",
      q: "把德语和中文配对：",
      pairs: [["der Bleistift", "铅笔"], ["der Radiergummi", "橡皮"], ["die Schere", "剪刀"], ["das Heft", "本子"]],
      explain: "这四个都是文具名词：der Bleistift 铅笔、der Radiergummi 橡皮、die Schere 剪刀、das Heft 本子。冠词记牢，第四格才不容易错。"
    },
    {
      type: "listen",
      audio: "Ich habe keine Schere.",
      options: ["Ich habe keine Schere.", "Ich habe eine Schere.", "Ich habe keinen Bleistift."],
      answer: 0,
      explain: "听到的是 Ich habe keine Schere.（我没有剪刀。），否定词是 keine。"
    },
    {
      type: "truefalse",
      q: "阿尔科向米拉借剪刀，米拉把剪刀借给了他。",
      answer: true,
      explain: "课文里阿尔科说 Ich habe keine Schere.，米拉回答 Ja. Hier ist eine Schere."
    },
    {
      type: "fill",
      q: "___ du ein Heft?（你有本子吗？）",
      answer: ["Hast"],
      hint: "haben 的 du 形式，注意首字母大写",
      explain: "一般疑问句把动词放句首：Hast du ein Heft? du 搭配 hast。"
    }
  ]
};
