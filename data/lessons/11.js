window.LESSON = {
  id: 11,
  chapter: "Kapitel 11",
  title: "Ein Tag am Meer",
  subtitle: "海边的一天",
  blurb: "周末，大家一起去海边野餐：贝壳、浪花、沙丘，还有一场把海和天都染红的日落。",
  scene: "sea",
  goal: [
    "用 am / im / ans 说出地点",
    "掌握可分动词 einladen / mitkommen 的框型结构",
    "学会海边与野餐的常用词",
    "读懂一篇温暖的海边小故事"
  ],
  friend: [],
  warmup: {
    title: "Ein Picknick am Meer",
    lead: "先听一段小对话，不用背。注意 am / im 说的是「在哪里」，ans 说的是「去哪里」。",
    pattern: "am Meer / im Korb / am Strand — Komm mit ans Meer!",
    lines: [
      { who: "oasilia", emo: "happy", de: "Wir machen ein Picknick am Meer. Kommst du mit?", zh: "我们要去海边野餐。你一起去吗？" },
      { who: "hero", emo: "normal", de: "Ja! Ich komme mit!", zh: "去！我一起去！" },
      { who: "oasilia", emo: "happy", de: "Brot und Wasser sind im Korb.", zh: "面包和水在篮子里。" },
      { who: "hero", emo: "normal", de: "Und das Boot? Ist es am Strand?", zh: "那小船呢？它停在海滩上吗？" },
      { who: "oasilia", emo: "happy", de: "Ja, am Strand. Komm mit ans Meer!", zh: "对，在海滩上。跟我去海边吧！" },
      { who: "hero", emo: "happy", de: "Ans Meer!", zh: "去海边！" }
    ],
    forms: {
      verb: "einladen / mitkommen（可分动词）",
      items: [
        ["ich（einladen）", "lade … ein", "Ich lade Emi ein."],
        ["du（einladen）", "lädst … ein", "Du lädst Arko ein."],
        ["ich（mitkommen）", "komme … mit", "Ich komme auch mit."],
        ["du（mitkommen）", "kommst … mit", "Kommst du auch mit?"]
      ]
    }
  },
  vocab: [
    { de: "das Meer, die Meere", zh: "海；大海", pos: "名词", ipa: "[meːɐ̯]", note: "am Meer 表示「在海边」。", ex: { de: "Das Meer ist blau und groß.", zh: "大海又蓝又大。" } },
    { de: "der Strand, die Strände", zh: "海滩；沙滩", pos: "名词", ipa: "[ʃtʁant]", note: "am Strand = 在海滩上。", ex: { de: "Das Boot ist am Strand.", zh: "小船停在海滩上。" } },
    { de: "der Sand", zh: "沙子", pos: "名词", ipa: "[zant]", note: "通常不加冠词复数。", ex: { de: "Der Sand ist warm.", zh: "沙子是暖的。" } },
    { de: "die Muschel, die Muscheln", zh: "贝壳", pos: "名词", ipa: "[ˈmʊʃl̩]", ex: { de: "Mira hat viele Muscheln.", zh: "米拉有很多贝壳。" } },
    { de: "das Boot, die Boote", zh: "小船", pos: "名词", ipa: "[boːt]", ex: { de: "Dort ist ein Boot.", zh: "那儿有一条小船。" } },
    { de: "die Welle, die Wellen", zh: "浪；浪头", pos: "名词", ipa: "[ˈvɛlə]", ex: { de: "Die Wellen sind hoch.", zh: "浪很高。" } },
    { de: "die Decke, die Decken", zh: "毯子；野餐垫", pos: "名词", ipa: "[ˈdɛkə]", note: "野餐时铺在沙上的毯子。", ex: { de: "Wir sitzen auf der Decke.", zh: "我们坐在毯子上。" } },
    { de: "der Korb, die Körbe", zh: "篮子", pos: "名词", ipa: "[kɔʁp]", ex: { de: "Brot und Wasser sind im Korb.", zh: "面包和水在篮子里。" } },
    { de: "das Picknick, die Picknicks", zh: "野餐", pos: "名词", ipa: "[ˈpɪknɪk]", note: "ein Picknick machen = 去野餐。", ex: { de: "Wir machen ein Picknick am Meer.", zh: "我们去海边野餐。" } },
    { de: "der Sonnenuntergang, die Sonnenuntergänge", zh: "日落", pos: "名词", ipa: "[ˈzɔnənʔʊntɐɡaŋ]", note: "Sonne（太阳）+ Untergang（落下）合成。", ex: { de: "Der Sonnenuntergang ist rot und orange.", zh: "日落又红又橙。" } },
    { de: "schwimmen", zh: "游泳", pos: "动词", ipa: "[ˈʃvɪmən]", ex: { de: "Wir können hier schwimmen.", zh: "我们可以在这里游泳。" } },
    { de: "tauchen", zh: "潜水；扎进水里", pos: "动词", ipa: "[ˈtaʊxn̩]", ex: { de: "Wiss will tauchen.", zh: "薇丝想潜水。" } },
    { de: "sitzen", zh: "坐", pos: "动词", ipa: "[ˈzɪtsn̩]", ex: { de: "Wir sitzen auf der Decke.", zh: "我们坐在毯子上。" } },
    { de: "machen", zh: "做；进行", pos: "动词", ipa: "[ˈmaxn̩]", note: "ein Picknick machen = 去野餐。", ex: { de: "Wir machen ein Picknick.", zh: "我们去野餐。" } },
    { de: "einladen", zh: "邀请", pos: "动词", ipa: "[ˈaɪnlaːdn̩]", note: "可分动词：Ich lade Mira ein.", ex: { de: "Ich lade Mira, Arko und Emi ein.", zh: "我邀请米拉、阿尔科和艾米。" } },
    { de: "mitkommen", zh: "一起来；（跟着）去", pos: "动词", ipa: "[ˈmɪtkɔmən]", note: "可分动词：Ich komme mit.", ex: { de: "Wiss kommt auch mit.", zh: "薇丝也一起来。" } },
    { de: "am", zh: "在……旁（an + dem）", pos: "介词", ipa: "[am]", note: "am Meer 在海边，am Strand 在海滩上。", ex: { de: "Am Abend sind wir am Meer.", zh: "傍晚时我们在海边。" } },
    { de: "im", zh: "在……里（in + dem）", pos: "介词", ipa: "[ɪm]", note: "im Korb 在篮子里，im Wasser 在水里。", ex: { de: "Das Wasser ist im Korb.", zh: "水在篮子里。" } },
    { de: "ans", zh: "到……旁（an + das）", pos: "介词", ipa: "[ans]", note: "表示方向：Kommt mit ans Meer! 跟我去海边吧！", ex: { de: "Kommt mit ans Meer!", zh: "跟我去海边吧！" } }
  ],
  texts: [
    {
      title: "Die Einladung",
      subtitle: "邀请",
      lines: [
        { n: "早上，欧亚西莉亚拿着一张小纸片跑进厨房，眼睛亮亮的。" },
        { who: "oasilia", emo: "happy", de: "Kommt mit ans Meer! Wir machen ein Picknick!", zh: "跟我去海边吧！我们去野餐！" },
        { who: "hero", emo: "surprised", de: "Ein Picknick? Am Meer?", zh: "野餐？在海边？" },
        { who: "oasilia", emo: "happy", de: "Ja! Ich lade Mira, Arko und Emi ein.", zh: "对呀！我邀请米拉、阿尔科和艾米。" },
        { who: "hero", emo: "happy", de: "Ich komme mit!", zh: "我也去！" },
        { n: "阿特拉斯提着一只大篮子走进来，把它放在桌上。" },
        { who: "atlas", emo: "normal", de: "Ich habe den Korb. Brot, Käse und Wasser sind im Korb.", zh: "篮子我拿了。面包、奶酪和水都在篮子里。" },
        { who: "oasilia", emo: "happy", de: "Danke, Atlas! Du bist nett.", zh: "谢谢你，阿特拉斯！你真好。" },
        { who: "atlas", emo: "normal", de: "Der Strand ist schön. Wir können dort schwimmen.", zh: "海滩很漂亮。我们可以在那儿游泳。" },
        { who: "hero", emo: "worried", de: "Ist das Wasser kalt?", zh: "水冷吗？" },
        { who: "atlas", emo: "normal", de: "Ein wenig. Aber die Sonne ist warm.", zh: "有一点。不过太阳是暖的。" },
        { who: "oasilia", emo: "happy", de: "Wiss kommt auch mit. Sie will tauchen.", zh: "薇丝也一起来。她想潜水呢。" },
        { who: "oasilia", emo: "normal", de: "Lehrer Licht ist im Garten. Er liest ein Buch.", zh: "利希特老师在花园里看书呢。" },
        { n: "大家带上篮子，一起出发了。" }
      ]
    },
    {
      title: "Der Sonnenuntergang",
      subtitle: "日落",
      lines: [
        { n: "海边到了。沙是白的，浪一层一层涌过来。" },
        { who: "mira", emo: "happy", de: "So viele Muscheln!", zh: "好多贝壳！" },
        { who: "emi", emo: "happy", de: "Dort ist ein Boot! Ich fliege über die Wellen!", zh: "那儿有条小船！我在浪上飞！" },
        { who: "oasilia", emo: "happy", de: "Kommt, wir sitzen auf der Decke. Das Picknick ist hier!", zh: "来，我们坐在毯子上。野餐在这儿呢！" },
        { who: "hero", emo: "happy", de: "Tsitrubeeren! Danke, Oasilia!", zh: "文柚果！谢谢你，欧亚西莉亚！" },
        { who: "wiss", emo: "happy", de: "Mira, hier ist eine Muschel für dich!", zh: "米拉，这儿有个贝壳给你！" },
        { n: "阿尔科跑到一座小沙丘上，张开翅膀跳了下去——只飞了一下，就摔进了沙里。阿特拉斯飞快地跑过去，把他抱起来。" },
        { who: "atlas", emo: "normal", de: "Arko, du bist mutig. Aber du bist nass.", zh: "阿尔科，你很勇敢。可你湿透了。" },
        { who: "arko", emo: "happy", de: "Ha! Der Sand ist warm!", zh: "哈！沙子是热的！" },
        { who: "oasilia", emo: "happy", de: "Es ist Abend! Der Sonnenuntergang ist rot und orange!", zh: "到傍晚了！日落又红又橙！" },
        { who: "oasilia", emo: "normal", de: "In der Wüste ist der Himmel am Abend auch rot und orange.", zh: "在沙漠里，傍晚的天空也是又红又橙的。" },
        { n: "大家坐在沙丘上，看太阳慢慢沉进海里。" },
        { who: "hero", emo: "happy", de: "Oasilia, ich bin froh.", zh: "欧亚西莉亚，我很开心。" },
        { who: "oasilia", emo: "happy", de: "Ich auch. Ich liebe das Meer.", zh: "我也是。我爱大海。" }
      ]
    }
  ],
  grammar: [
    {
      title: "地点介词 am / im / ans",
      intro: "德语里「在海边」「在沙里」这样说，要把介词和定冠词缩合成一个词：`an + dem = am`，`in + dem = im`。它们表示**在哪里**（Wo?）。如果要表示**去哪里**，就用 `an + das = ans`。",
      table: {
        head: ["表达", "中文", "例句"],
        rows: [
          ["am Meer", "在海边", "Wir machen ein Picknick am Meer."],
          ["am Strand", "在海滩上", "Das Boot ist am Strand."],
          ["im Korb", "在篮子里", "Brot und Wasser sind im Korb."],
          ["im Wasser", "在水里", "Wir schwimmen im Wasser."],
          ["ans Meer", "到海边去", "Kommt mit ans Meer!"]
        ]
      },
      notes: [
        "am = an + dem，im = in + dem：两个词合成一个，回答「在哪里」。",
        "ans = an + das，回答「去哪里」：Kommt mit ans Meer! 跟我去海边。",
        "固定搭配要整个记住：am Meer、am Strand、am Himmel、im Wasser、im Sand。",
        "am 还能表示时间：am Abend（傍晚）、am Morgen（早上）。"
      ],
      examples: [
        { de: "Am Abend sitzen wir am Strand.", zh: "傍晚我们坐在海滩上。" },
        { de: "Kommt mit ans Meer!", zh: "跟我去海边吧！" }
      ]
    },
    {
      title: "可分动词：einladen / mitkommen",
      intro: "有些动词由两部分组成：动词本身 + 一个小词（ein-、mit-）。变位时只变动词部分，小词**分出去**跑到句子末尾。这样句子就形成一个「框」：变位动词占第二位，小词占最后一位。",
      table: {
        head: ["原形", "句子", "中文"],
        rows: [
          ["einladen", "Ich lade Mira ein.", "我邀请米拉。"],
          ["einladen", "Wir laden Freunde ein.", "我们邀请朋友。"],
          ["mitkommen", "Ich komme mit.", "我一起去。"],
          ["mitkommen", "Kommst du mit?", "你一起去吗？"]
        ]
      },
      notes: [
        "框型结构：Ich **lade** Mira **ein**. 中间可以放人名、时间、地点。",
        "一般疑问句也一样：**Kommst** du **mit**? 小词还是在最后。",
        "别把小词丢掉，也别把它放到句子中间去。"
      ],
      examples: [
        { de: "Ich lade Mira, Arko und Emi ein.", zh: "我邀请米拉、阿尔科和艾米。" },
        { de: "Wiss kommt auch mit.", zh: "薇丝也一起来。" }
      ]
    }
  ],
  culture: {
    title: "林缘村的海",
    text: "从林缘村往北走半天，就是一片白色的沙滩，风里带着盐味。这里的海很温和，浪一层一层推上来，又慢慢退下去，在沙上留下小贝壳和细细的纹路。村里有几条旧木船，天气好的时候，有人划出去，傍晚再回来。孩子们爱在沙丘上跑，跑累了就躺下来看云。欧亚西莉亚说，海边的日落和沙漠的黄昏是同一种颜色。"
  },
  exercises: [
    {
      type: "choice",
      q: "「我们在海边野餐。」用德语怎么说？",
      options: ["Wir machen ein Picknick am Meer.", "Wir machen ein Picknick im Meer.", "Wir machen ein Picknick ans Meer."],
      answer: 0,
      explain: "「在海边」用 am Meer（an + dem）。im Meer 是「在海里」，ans Meer 是「到海边去」，都表示不了「在海边」。"
    },
    {
      type: "choice",
      q: "课文里，谁想潜水（tauchen）？",
      options: ["Mira", "Wiss", "Emi"],
      answer: 1,
      explain: "欧亚西莉亚说：Wiss kommt auch mit. Sie will tauchen.（薇丝也一起来，她想潜水。）"
    },
    {
      type: "fill",
      q: "Das Boot ist ___ Strand.（小船停在海滩上。）",
      answer: ["am"],
      hint: "an + dem",
      explain: "an + dem 缩合成 am：Das Boot ist am Strand. 「在海滩上」是 am Strand。"
    },
    {
      type: "fill",
      q: "Brot und Wasser sind ___ Korb.（面包和水在篮子里。）",
      answer: ["im"],
      hint: "in + dem",
      explain: "in + dem 缩合成 im：Brot und Wasser sind im Korb. 「在篮子里」用 im。"
    },
    {
      type: "order",
      q: "把单词排成正确的句子（「我邀请米拉。」）：",
      words: ["Mira", "Ich", "ein", "lade"],
      answer: "Ich lade Mira ein.",
      explain: "einladen 是可分动词：变位部分 lade 在第二位，小词 ein 跑到句末，形成框型结构 Ich lade Mira ein."
    },
    {
      type: "fill",
      q: "Ich komme ___!（我也去！）",
      answer: ["mit"],
      hint: "mitkommen",
      explain: "mitkommen 可分：Ich komme mit! 小词 mit 必须放在句末。"
    },
    {
      type: "match",
      q: "把德语和中文配对：",
      pairs: [
        ["das Meer", "大海"],
        ["der Strand", "海滩"],
        ["die Muschel", "贝壳"],
        ["der Sonnenuntergang", "日落"]
      ],
      explain: "der Strand 是海滩，die Muschel 是米拉捡的贝壳，der Sonnenuntergang 是傍晚把海和天染红的日落。"
    },
    {
      type: "listen",
      audio: "Kommt mit ans Meer!",
      options: ["Kommt mit ans Meer!", "Das Boot ist am Strand.", "Ich komme mit!"],
      answer: 0,
      explain: "听到的是 Kommt mit ans Meer!（跟我去海边吧！）。"
    },
    {
      type: "truefalse",
      q: "阿尔科从沙丘上跳下来，摔进了沙里。",
      answer: true,
      explain: "旁白里说：他张开翅膀跳了下去，只飞了一下就摔进沙里，阿特拉斯跑过去把他抱起来。"
    }
  ]
};
