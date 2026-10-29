window.LESSON = {
  id: 10,
  chapter: "Kapitel 10",
  title: "Farben und Streiche",
  subtitle: "颜色与恶作剧",
  blurb: "薇丝第一次坐进教室：她把米拉的围巾变成粉色，又把阿尔科的笔记本画成一道彩虹。米拉很难过。你和米拉在教室后面的草地上找到了她。",
  scene: "classroom",
  goal: [
    "学会九种颜色，并会用 Welche Farbe hat …? 提问",
    "掌握形容词作谓语：Die Blume ist rot.",
    "用德语说难过、抱歉和原谅"
  ],
  friend: ["wiss"],
  warmup: {
    title: "Welche Farbe?",
    lead: "课文开始前，先和米拉玩一个说颜色的小游戏。",
    pattern: "Welche Farbe hat …? — … ist …",
    lines: [
      { who: "mira", emo: "normal", de: "{{name}}, welche Farbe hat die Blume?", zh: "{{name}}，这朵花是什么颜色？" },
      { who: "hero", emo: "normal", de: "Die Blume ist gelb.", zh: "花是黄色的。" },
      { who: "mira", emo: "happy", de: "Ja! Und die Blätter?", zh: "对！那叶子呢？" },
      { who: "hero", emo: "normal", de: "Die Blätter sind grün.", zh: "叶子是绿色的。" },
      { who: "mira", emo: "normal", de: "Und der Himmel?", zh: "那天空呢？" },
      { who: "hero", emo: "happy", de: "Der Himmel ist blau!", zh: "天空是蓝色的！" }
    ],
    forms: {
      verb: "形容词 + sein（作谓语）",
      items: [
        ["ich", "bin", "Ich bin müde."],
        ["du", "bist", "Du bist nett."],
        ["er / sie / es", "ist", "Die Blume ist rot."],
        ["wir", "sind", "Wir sind froh."],
        ["ihr", "seid", "Ihr seid nett."],
        ["sie（复数）", "sind", "Die Blätter sind gelb."]
      ]
    }
  },
  vocab: [
    { de: "die Farbe, die Farben", zh: "颜色", pos: "名词", ipa: "[ˈfaʁbə]", note: "问颜色：Welche Farbe hat …?", ex: { de: "Welche Farbe hat die Blume?", zh: "这朵花是什么颜色？" } },
    { de: "rot", zh: "红色的", pos: "形容词", ipa: "[ʁoːt]", ex: { de: "Die Blume ist rot.", zh: "花是红色的。" } },
    { de: "blau", zh: "蓝色的", pos: "形容词", ipa: "[blaʊ]", ex: { de: "Der Himmel ist blau.", zh: "天空是蓝色的。" } },
    { de: "gelb", zh: "黄色的", pos: "形容词", ipa: "[ɡɛlp]", ex: { de: "Die Blätter sind gelb.", zh: "叶子是黄色的。" } },
    { de: "grün", zh: "绿色的", pos: "形容词", ipa: "[ɡʁyːn]", ex: { de: "Der Baum ist grün.", zh: "树是绿色的。" } },
    { de: "schwarz", zh: "黑色的", pos: "形容词", ipa: "[ʃvaʁt͡s]", ex: { de: "Das Heft ist schwarz.", zh: "本子是黑色的。" } },
    { de: "weiß", zh: "白色的", pos: "形容词", ipa: "[vaɪs]", ex: { de: "Die Wolke ist weiß.", zh: "云是白色的。" } },
    { de: "braun", zh: "棕色的", pos: "形容词", ipa: "[bʁaʊn]", ex: { de: "Der Baum ist braun.", zh: "树是棕色的。" } },
    { de: "orange", zh: "橙色的", pos: "形容词", ipa: "[oˈʁaŋʒə]", note: "和英语拼写一样，重音在第二音节。", ex: { de: "Die Blume ist orange.", zh: "花是橙色的。" } },
    { de: "rosa", zh: "粉色的", pos: "形容词", ipa: "[ˈʁoːza]", note: "rosa 作谓语时永远不变词尾。", ex: { de: "Der Schal ist rosa.", zh: "围巾是粉色的。" } },
    { de: "die Blume, die Blumen", zh: "花", pos: "名词", ipa: "[ˈbluːmə]", ex: { de: "Die Blumen sind schön.", zh: "花很好看。" } },
    { de: "der Baum, die Bäume", zh: "树", pos: "名词", ipa: "[baʊm]", ex: { de: "Der Baum ist grün.", zh: "树是绿色的。" } },
    { de: "das Blatt, die Blätter", zh: "叶子；纸页", pos: "名词", ipa: "[blat]", note: "复数 Blätter，a 变 ä。", ex: { de: "Die Blätter sind gelb.", zh: "叶子是黄色的。" } },
    { de: "lustig", zh: "有趣的；好笑的", pos: "形容词", ipa: "[ˈlʊstɪç]", ex: { de: "Das ist lustig!", zh: "这真好笑！" } },
    { de: "böse", zh: "生气的；坏的", pos: "形容词", ipa: "[ˈbøːzə]", note: "Bist du böse? = 你生气了吗？", ex: { de: "Bist du noch böse?", zh: "你还生气吗？" } },
    { de: "nett", zh: "友好的；和气的", pos: "形容词", ipa: "[nɛt]", ex: { de: "Du bist nett.", zh: "你人很好。" } },
    { de: "müde", zh: "累的", pos: "形容词", ipa: "[ˈmyːdə]", ex: { de: "Ich bin müde.", zh: "我累了。" } },
    { de: "traurig", zh: "难过的", pos: "形容词", ipa: "[ˈtʁaʊʁɪç]", ex: { de: "Mira ist traurig.", zh: "米拉很难过。" } },
    { de: "froh", zh: "高兴的", pos: "形容词", ipa: "[fʁoː]", ex: { de: "Ich bin froh.", zh: "我很高兴。" } },
    { de: "der Schal, die Schals", zh: "围巾", pos: "名词", ipa: "[ʃaːl]", ex: { de: "Der Schal ist rosa.", zh: "围巾是粉色的。" } }
  ],
  texts: [
    {
      title: "Der rosa Schal",
      subtitle: "粉色的围巾",
      lines: [
        { n: "早上，大家走进教室。窗外的树是绿的，叶子也是绿的。" },
        { who: "licht", emo: "happy", de: "Guten Morgen! Der Himmel ist blau.", zh: "早上好！天空是蓝色的。" },
        { who: "licht", emo: "normal", de: "Der Baum ist grün, und die Blätter sind grün. Heute lernen wir die Farben.", zh: "树是绿色的，叶子也是绿色的。今天我们来学颜色。" },
        { n: "米拉低着头走进来。她的围巾变成了粉色。" },
        { who: "mira", emo: "sad", de: "Mein Schal ist rosa. Er ist nicht mehr schwarz.", zh: "我的围巾是粉色的。它不再是黑色的了。" },
        { who: "hero", emo: "surprised", de: "Rosa ist schön.", zh: "粉色很好看呀。" },
        { who: "mira", emo: "sad", de: "Aber ich bin traurig.", zh: "可是我很难过。" },
        { who: "arko", emo: "surprised", de: "Mein Heft ist rot, blau und gelb!", zh: "我的本子是红、蓝、黄的！" },
        { who: "arko", emo: "happy", de: "Das ist ein Regenbogen!", zh: "这是一道彩虹！" },
        { n: "教室门口，一个小小的身影飘了进来，笑得很开心。门边还放着阿特拉斯修好的工具，柄上系了一条彩色缎带。" },
        { who: "wiss", emo: "happy", de: "Hallo! Ich bin Wiss! Das ist lustig, oder?", zh: "大家好！我是薇丝！这很好玩，对吧？" },
        { who: "mira", emo: "sad", de: "Das ist nicht lustig.", zh: "这一点都不好玩。" },
        { who: "wiss", emo: "normal", de: "Nicht?", zh: "不好玩吗？" },
        { who: "hero", emo: "normal", de: "Mira ist traurig.", zh: "米拉很难过。" },
        { who: "wiss", emo: "surprised", de: "Oh.", zh: "哦。" },
        { n: "薇丝不说话，转身飘出了教室。" },
        { who: "hero", emo: "normal", de: "Komm, Mira!", zh: "米拉，跟我来！" },
        { n: "米拉低下头，眼睛红了，跟你一起走了出去。" }
      ]
    },
    {
      title: "Blumen für Mira",
      subtitle: "给米拉的花",
      lines: [
        { n: "教室后面有一片草地，草地上开着许多小花：黄色的、白色的，还有一点橙色。" },
        { who: "hero", emo: "happy", de: "Da ist Wiss!", zh: "薇丝在那儿！" },
        { who: "wiss", emo: "surprised", de: "Oh! Ihr zwei.", zh: "哦！是你们俩。" },
        { who: "mira", emo: "sad", de: "Wiss, mein Schal ist rosa.", zh: "薇丝，我的围巾是粉色的。" },
        { who: "wiss", emo: "sigh", de: "Ja. Ich bin nicht nett.", zh: "嗯。我不友好。" },
        { who: "mira", emo: "normal", de: "Du bist nicht nett?", zh: "你不友好？" },
        { who: "wiss", emo: "sigh", de: "Nein. Ich bin traurig. Du bist traurig. Das ist nicht lustig.", zh: "对。我难过。你难过。这一点都不好玩。" },
        { who: "hero", emo: "normal", de: "Wiss, die Blumen sind schön.", zh: "薇丝，这些花真好看。" },
        { n: "薇丝看看草地上的花，低下头，然后采了一小把。" },
        { who: "wiss", emo: "normal", de: "Hier, Mira. Blumen. Bitte!", zh: "给你，米拉。花。请收下！" },
        { who: "mira", emo: "surprised", de: "Blumen?", zh: "花？" },
        { who: "wiss", emo: "happy", de: "Ja. Gelb und weiß. Wie die Sonne.", zh: "对。黄色和白色。像太阳一样。" },
        { who: "mira", emo: "happy", de: "Danke, Wiss. Die Blumen sind schön. Du bist nett.", zh: "谢谢你，薇丝。花很好看。你人很好。" },
        { who: "wiss", emo: "happy", de: "Bitte! Bist du noch böse?", zh: "不客气！你还生气吗？" },
        { who: "mira", emo: "normal", de: "Nein. Ich bin froh.", zh: "不生气了。我很高兴。" },
        { n: "你们一起回到教室。大家把花放进窗台上的瓶子里。" },
        { who: "licht", emo: "happy", de: "Blumen! Wie schön!", zh: "花！真好看！" },
        { who: "arko", emo: "happy", de: "Und mein Heft ist ein Regenbogen!", zh: "而且我的本子是一道彩虹！" },
        { who: "hero", emo: "normal", de: "Ich bin müde. Aber ich bin froh.", zh: "我累了。不过我很高兴。" }
      ]
    }
  ],
  grammar: [
    {
      title: "形容词作谓语：Die Blume ist rot.",
      intro: "形容词放在 **sein** 后面作谓语时，表示主语的状态。这时形容词**不变格、不加词尾**，永远是原形。",
      table: {
        head: ["主语", "sein", "形容词", "中文"],
        rows: [
          ["Die Blume", "ist", "rot.", "花是红色的。"],
          ["Der Schal", "ist", "rosa.", "围巾是粉色的。"],
          ["Die Blätter", "sind", "gelb.", "叶子是黄色的。"],
          ["Der Himmel", "ist", "blau.", "天空是蓝色的。"],
          ["Ich", "bin", "müde.", "我累了。"],
          ["Mira", "ist", "traurig.", "米拉很难过。"]
        ]
      },
      notes: [
        "形容词作谓语不带词尾：Die Blume ist rot.（不是 rote）",
        "主语是复数时，sein 用 sind：Die Blätter sind gelb.",
        "颜色词是形容词，小写：rot、blau、grün；作名词时才大写：die Farbe。"
      ],
      examples: [
        { de: "Die Blume ist rot.", zh: "花是红色的。" },
        { de: "Die Blätter sind gelb.", zh: "叶子是黄色的。" }
      ]
    },
    {
      title: "问颜色：Welche Farbe hat …?",
      intro: "问某物是什么颜色，用 **Welche Farbe hat …?**。动词用 haben 的第三人称单数 **hat**（第 5 课学过 haben）。回答用「主语 + ist/sind + 颜色」。",
      table: {
        head: ["问句", "回答", "中文"],
        rows: [
          ["Welche Farbe hat die Blume?", "Die Blume ist rot.", "花是什么颜色？——红色。"],
          ["Welche Farbe hat der Schal?", "Der Schal ist rosa.", "围巾是什么颜色？——粉色。"],
          ["Welche Farbe hat das Blatt?", "Das Blatt ist grün.", "叶子是什么颜色？——绿色。"],
          ["Welche Farbe haben die Blumen?", "Die Blumen sind gelb.", "这些花是什么颜色？——黄色。"]
        ]
      },
      notes: [
        "主语是单数时用 hat，是复数时用 haben：Welche Farbe haben die Blumen?",
        "Welche 后面直接跟名词，名词的性和数不变：der Schal、die Blume、das Blatt。",
        "回答时颜色词放在句末，句号别忘：Der Schal ist rosa."
      ],
      examples: [
        { de: "Welche Farbe hat der Schal?", zh: "围巾是什么颜色？" },
        { de: "Der Schal ist rosa.", zh: "围巾是粉色的。" }
      ]
    }
  ],
  culture: {
    title: "林缘村的颜色",
    text: "林缘村的孩子们爱用颜色玩。春天，他们把花瓣贴在木窗上；秋天，叶子变黄的时候，谁都能挑出一片最好看的。村里的染坊用草根和树皮做颜料，颜色淡淡的，洗几次就变浅。薇丝说，风妖精最喜欢把一切都弄乱：围巾、本子、缎带。可她也说，颜色弄乱了没关系，人要开心。所以村里人常说：被恶作剧了，先看看有没有花。"
  },
  exercises: [
    {
      type: "match",
      q: "把德语和中文配对：",
      pairs: [["rot", "红色"], ["blau", "蓝色"], ["gelb", "黄色"], ["grün", "绿色"]],
      explain: "四个基本颜色词：rot、blau、gelb、grün。颜色词是形容词，句中小写。"
    },
    {
      type: "fill",
      q: "Die Blume ___ rot.（花是红色的。）",
      answer: ["ist"],
      hint: "sein 的第三人称单数",
      explain: "主语 Die Blume 是单数，动词用 ist：Die Blume ist rot."
    },
    {
      type: "fill",
      q: "Welche Farbe ___ der Schal?（围巾是什么颜色？）",
      answer: ["hat"],
      hint: "haben 的第三人称单数",
      explain: "问颜色用 Welche Farbe hat …?，主语是单数 der Schal，所以用 hat。"
    },
    {
      type: "choice",
      q: "Die Blumen ___ gelb.（花是黄色的。）",
      options: ["sind", "ist", "hat"],
      answer: 0,
      explain: "主语 Die Blumen 是复数，sein 要用 sind：Die Blumen sind gelb."
    },
    {
      type: "order",
      q: "把单词排成正确的句子：",
      words: ["Der", "Baum", "ist", "grün"],
      answer: "Der Baum ist grün.",
      explain: "形容词作谓语：主语 + ist + 颜色。颜色词小写、不加词尾。"
    },
    {
      type: "listen",
      audio: "Die Blätter sind braun.",
      options: ["Die Blätter sind braun.", "Die Blumen sind rot.", "Der Himmel ist blau."],
      answer: 0,
      explain: "听到的是 Die Blätter sind braun.（叶子是棕色的。）braun 是棕色。"
    },
    {
      type: "truefalse",
      q: "薇丝恶作剧以后，采了花送给米拉，还问她是不是还在生气。",
      answer: true,
      explain: "课文里薇丝说 Hier, Mira. Blumen. Bitte!，后来又问 Bist du noch böse?"
    },
    {
      type: "choice",
      q: "「米拉很难过。」用德语怎么说？",
      options: ["Mira ist traurig.", "Mira ist müde.", "Mira ist böse."],
      answer: 0,
      explain: "traurig 是「难过的」，müde 是「累的」，böse 是「生气的」。所以选 Mira ist traurig."
    }
  ]
};
