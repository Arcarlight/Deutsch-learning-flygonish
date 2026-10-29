window.LESSON = {
  id: 12,
  chapter: "Kapitel 12",
  title: "Ein Abend zu Hause",
  subtitle: "夜晚的家",
  blurb: "夜里回家，洗澡、吃饭、写今天的第一句德语日记。窗外星光很亮，你忽然有点想家。",
  scene: "night",
  goal: [
    "用 um … Uhr 说出时间和日程",
    "掌握可分动词 aufstehen / einschlafen / einkaufen 的框型结构",
    "学会描述夜晚的常用词",
    "读懂主角想家时被温柔陪伴的一晚"
  ],
  friend: [],
  warmup: {
    title: "Wie spät ist es?",
    lead: "先听一段小对话，不用背。注意 um … Uhr 放在句首时，动词还是紧跟在它后面。",
    pattern: "Wie spät ist es? — Es ist zehn Uhr. / Um sieben Uhr stehe ich auf.",
    lines: [
      { who: "hero", emo: "normal", de: "Wie spät ist es?", zh: "现在几点了？" },
      { who: "oasilia", emo: "happy", de: "Es ist zehn Uhr. Es ist spät.", zh: "十点了。天晚了。" },
      { who: "hero", emo: "normal", de: "Um zehn Uhr schlafe ich ein.", zh: "十点我就睡着了。" },
      { who: "oasilia", emo: "happy", de: "Ja. Und um sieben Uhr stehst du auf.", zh: "对。早上七点你起床。" },
      { who: "hero", emo: "worried", de: "Um sieben Uhr? Das ist früh!", zh: "七点？那太早了！" },
      { who: "oasilia", emo: "happy", de: "Gute Nacht, {{name}}!", zh: "晚安，{{name}}！" }
    ],
    forms: {
      verb: "aufstehen / einschlafen（可分动词）",
      items: [
        ["ich（aufstehen）", "stehe … auf", "Ich stehe früh auf."],
        ["du（aufstehen）", "stehst … auf", "Du stehst um acht Uhr auf."],
        ["ich（einschlafen）", "schlafe … ein", "Ich schlafe um zehn Uhr ein."],
        ["du（einschlafen）", "schläfst … ein", "Du schläfst schnell ein."]
      ]
    }
  },
  vocab: [
    { de: "der Abend, die Abende", zh: "傍晚；晚上", pos: "名词", ipa: "[ˈaːbn̩t]", note: "am Abend = 在傍晚。", ex: { de: "Du schreibst am Abend.", zh: "你在傍晚写。" } },
    { de: "die Nacht, die Nächte", zh: "夜晚", pos: "名词", ipa: "[naxt]", note: "Gute Nacht! = 晚安！", ex: { de: "Gute Nacht!", zh: "晚安！" } },
    { de: "die Uhr, die Uhren", zh: "钟；点（钟）", pos: "名词", ipa: "[uːɐ̯]", note: "Es ist sieben Uhr. = 现在七点。", ex: { de: "Es ist sieben Uhr.", zh: "现在七点。" } },
    { de: "früh", zh: "早", pos: "形容词", ipa: "[fʁyː]", ex: { de: "Sieben Uhr ist früh.", zh: "七点算早。" } },
    { de: "spät", zh: "晚", pos: "形容词", ipa: "[ʃpɛːt]", note: "Wie spät ist es? = 现在几点？", ex: { de: "Es ist spät.", zh: "天晚了。" } },
    { de: "schlafen", zh: "睡觉", pos: "动词", ipa: "[ˈʃlaːfn̩]", ex: { de: "Dann schläfst du.", zh: "然后你就睡了。" } },
    { de: "aufstehen", zh: "起床；站起来", pos: "动词", ipa: "[ˈaʊfʃteːən]", note: "可分动词：Ich stehe um sieben Uhr auf.", ex: { de: "Ich stehe um sieben Uhr auf.", zh: "我七点起床。" } },
    { de: "einschlafen", zh: "睡着；入睡", pos: "动词", ipa: "[ˈaɪnʃlaːfn̩]", note: "可分动词，小词 ein 放在句末。", ex: { de: "Schlaf ein!", zh: "睡吧！" } },
    { de: "waschen", zh: "洗", pos: "动词", ipa: "[ˈvaʃn̩]", note: "sich waschen = 洗一洗：Ich wasche mich.", ex: { de: "Ich wasche die Muscheln.", zh: "我来洗贝壳。" } },
    { de: "die Kerze, die Kerzen", zh: "蜡烛", pos: "名词", ipa: "[ˈkɛʁtsə]", ex: { de: "Die Kerze ist warm.", zh: "蜡烛是暖的。" } },
    { de: "das Licht, die Lichter", zh: "光；灯", pos: "名词", ipa: "[lɪçt]", ex: { de: "Das Licht ist warm.", zh: "灯光是暖的。" } },
    { de: "der Stern, die Sterne", zh: "星星", pos: "名词", ipa: "[ʃtɛʁn]", ex: { de: "Es gibt viele Sterne am Himmel.", zh: "天上有很多星星。" } },
    { de: "der Mond, die Monde", zh: "月亮", pos: "名词", ipa: "[moːnt]", ex: { de: "Der Mond ist groß.", zh: "月亮很大。" } },
    { de: "der Traum, die Träume", zh: "梦", pos: "名词", ipa: "[tʁaʊm]", note: "Schöne Träume! = 做个好梦！", ex: { de: "Schöne Träume!", zh: "做个好梦！" } },
    { de: "träumen", zh: "做梦；梦想", pos: "动词", ipa: "[ˈtʁɔɪmən]", note: "träumen von + 第三格：Ich träume vom Meer.", ex: { de: "Ich träume vom Meer.", zh: "我梦见大海。" } },
    { de: "das Tagebuch, die Tagebücher", zh: "日记", pos: "名词", ipa: "[ˈtaːɡəbuːx]", note: "Tag（日）+ Buch（书）合成。", ex: { de: "Ein Tagebuch für dich.", zh: "给你的一本日记。" } },
    { de: "arbeiten", zh: "工作；干活", pos: "动词", ipa: "[ˈaʁbaɪtn̩]", ex: { de: "Ich arbeite am Boot.", zh: "我在修船。" } },
    { de: "nach Hause", zh: "回家（方向）", pos: "短语", ipa: "[naːx ˈhaʊzə]", note: "表示「往家走」；「在家」用 zu Hause。", ex: { de: "Ich möchte nach Hause.", zh: "我想回家。" } }
  ],
  texts: [
    {
      title: "Am Abend",
      subtitle: "傍晚",
      lines: [
        { n: "天黑了。大家从海边回到家里，屋里点起了油灯。" },
        { who: "oasilia", emo: "happy", de: "Es ist spät. Zuerst waschen, dann essen!", zh: "天晚了。先洗一洗，再吃饭！" },
        { who: "hero", emo: "normal", de: "Ich wasche mich.", zh: "我洗一洗。" },
        { who: "oasilia", emo: "happy", de: "Komm, wir essen zusammen. Das Brot ist frisch.", zh: "来，我们一起吃。面包很新鲜。" },
        { who: "hero", emo: "happy", de: "Lecker! Danke, Atlas.", zh: "好吃！谢谢你，阿特拉斯。" },
        { n: "吃完饭，阿特拉斯把旧船放到桌上，在灯下干活。欧亚西莉亚哼起了歌。" },
        { who: "atlas", emo: "normal", de: "Das Licht ist warm. Ich arbeite am Boot.", zh: "灯光是暖的。我在修船。" },
        { who: "oasilia", emo: "happy", de: "Ich wasche die Muscheln. Sie sind schön!", zh: "我来洗贝壳。它们真好看！" },
        { who: "oasilia", emo: "happy", de: "Hier, ein Tagebuch für dich. Du schreibst am Abend.", zh: "这儿，给你一本日记。你在傍晚写。" },
        { who: "hero", emo: "happy", de: "Ich schreibe: „Das Meer ist schön.“", zh: "我写：「大海很美。」" },
        { who: "oasilia", emo: "normal", de: "Dann schläfst du. Um sieben Uhr stehst du auf.", zh: "然后你就睡了。早上七点你起床。" },
        { who: "hero", emo: "worried", de: "Um sieben Uhr? So früh!", zh: "七点？这么早！" },
        { n: "你把本子抱在怀里，看了看窗外的夜空。" }
      ]
    },
    {
      title: "Die Nacht",
      subtitle: "夜里",
      lines: [
        { n: "夜深了。屋里点着一支蜡烛，窗外有很多星星。" },
        { who: "hero", emo: "normal", de: "Die Kerze ist warm. Der Mond ist groß.", zh: "蜡烛是暖的。月亮很大。" },
        { who: "oasilia", emo: "happy", de: "Ja. Und es gibt viele Sterne am Himmel.", zh: "是啊。天上还有好多星星。" },
        { who: "hero", emo: "sad", de: "Oasilia … ich möchte nach Hause.", zh: "欧亚西莉亚……我想回家。" },
        { who: "oasilia", emo: "normal", de: "Ja.", zh: "嗯。" },
        { n: "屋里安静下来。她在你旁边坐下，没有再问什么。你看着窗外的星星，看了很久。" },
        { who: "oasilia", emo: "normal", de: "Schlaf ein, {{name}}. Ich bin hier.", zh: "睡吧，{{name}}。我在这儿。" },
        { who: "hero", emo: "normal", de: "Danke, Oasilia. Ich träume vom Meer.", zh: "谢谢你，欧亚西莉亚。我会梦见海。" },
        { who: "oasilia", emo: "happy", de: "Schöne Träume. Gute Nacht.", zh: "好梦。晚安。" },
        { n: "灯灭了。那一夜，你梦见海，也梦见自己的家。" }
      ]
    }
  ],
  grammar: [
    {
      title: "时间：um … Uhr / Wie spät ist es?",
      intro: "问「现在几点」说 **Wie spät ist es?**，回答用 **Es ist … Uhr**。表示「在几点做某事」，用 **um + 数字 + Uhr**。把时间放到句首时，动词仍然要占第二位。",
      table: {
        head: ["德语", "中文", "说明"],
        rows: [
          ["Wie spät ist es?", "现在几点？", "问时间"],
          ["Es ist sieben Uhr.", "现在七点。", "回答时间"],
          ["Um sieben Uhr stehe ich auf.", "我七点起床。", "um … Uhr 表示「在几点」"],
          ["Am Abend schreibe ich.", "傍晚我写日记。", "am + 时段"]
        ]
      },
      notes: [
        "um 只跟钟点：um sieben Uhr、um acht Uhr；am 跟时段：am Morgen、am Abend。",
        "时间放句首时，动词紧跟其后：Um sieben Uhr **stehe** ich auf. 不能写成 Um sieben Uhr ich stehe auf.",
        "「太早了」可以说 So früh!"
      ],
      examples: [
        { de: "Um acht Uhr lernen wir Deutsch.", zh: "我们八点学德语。" },
        { de: "Es ist spät.", zh: "天晚了。" }
      ]
    },
    {
      title: "可分动词：aufstehen / einschlafen / einkaufen",
      intro: "这三个动词都由「动词 + 小词」组成：auf-、ein-。变位时小词跑到句末，形成框型结构；小词要重读。",
      table: {
        head: ["原形", "句子", "中文"],
        rows: [
          ["aufstehen", "Ich stehe um sieben Uhr auf.", "我七点起床。"],
          ["einschlafen", "Das Kind schläft ein.", "孩子睡着了。"],
          ["einkaufen", "Oasilia kauft am Markt ein.", "欧亚西莉亚在集市买东西。"]
        ]
      },
      notes: [
        "框型结构：Ich **stehe** um sieben Uhr **auf**. 时间和地点都放在框中间。",
        "einkaufen = ein- + kaufen（买），意思是「采购」。",
        "顺序词帮你把一天串起来：**Zuerst** wasche ich mich, **dann** esse ich, **danach** schlafe ich."
      ],
      examples: [
        { de: "Zuerst wasche ich mich, dann esse ich.", zh: "我先洗一洗，然后吃饭。" },
        { de: "Schlaf ein! Ich bin hier.", zh: "睡吧！我在这儿。" }
      ]
    }
  ],
  culture: {
    title: "林缘村的夜晚",
    text: "林缘村没有电，太阳一落山，家家就点起油灯和蜡烛。风车停住，集市收了摊，路上只剩晚归的脚步声。孩子们早早洗漱，听大人讲几句故事就上床。手艺人常在灯下多干一会儿活，欧亚西莉亚这样爱唱的人会小声哼歌。这里的人说，把日子写下来，日子就不会丢——所以很多人家都有本子。"
  },
  exercises: [
    {
      type: "choice",
      q: "「我七点起床。」用德语怎么说？",
      options: ["Ich stehe um sieben Uhr auf.", "Ich aufstehe um sieben Uhr.", "Ich stehe auf um sieben Uhr."],
      answer: 0,
      explain: "aufstehen 是可分动词：stehe 在第二位，小词 auf 在句末，时间状语 um sieben Uhr 放在框中间。"
    },
    {
      type: "fill",
      q: "Ich stehe um sieben Uhr ___.（我七点起床。）",
      answer: ["auf"],
      hint: "aufstehen",
      explain: "可分动词的小词必须放在句末：Ich stehe um sieben Uhr auf."
    },
    {
      type: "fill",
      q: "Es ___ sieben Uhr.（现在七点。）",
      answer: ["ist"],
      hint: "sein 的第三人称单数",
      explain: "说钟点用 Es ist … Uhr：Es ist sieben Uhr. es 后面的 sein 用 ist。"
    },
    {
      type: "order",
      q: "把单词排成正确的句子（「我七点起床。」）：",
      words: ["um", "Ich", "sieben", "stehe", "Uhr", "auf"],
      answer: "Ich stehe um sieben Uhr auf.",
      explain: "框型结构：变位动词 stehe 在第二位，时间 um sieben Uhr 在中间，小词 auf 在句末。"
    },
    {
      type: "match",
      q: "把德语和中文配对：",
      pairs: [
        ["aufstehen", "起床"],
        ["einschlafen", "睡着"],
        ["die Kerze", "蜡烛"],
        ["das Tagebuch", "日记"]
      ],
      explain: "aufstehen 是「起床」，einschlafen 是「睡着」；die Kerze 是夜里桌上的蜡烛，das Tagebuch 是欧亚西莉亚送给主角的日记本。"
    },
    {
      type: "listen",
      audio: "Wie spät ist es?",
      options: ["Wie spät ist es?", "Wie heißt du?", "Wo ist das Boot?"],
      answer: 0,
      explain: "听到的是 Wie spät ist es?（现在几点？）。spät 在这里是「晚、几点」的意思。"
    },
    {
      type: "truefalse",
      q: "主角在日记里写下的第一句德语是 „Das Meer ist schön.“",
      answer: true,
      explain: "课文里主角说：Ich schreibe: „Das Meer ist schön.“"
    },
    {
      type: "choice",
      q: "主角想家的时候，欧亚西莉亚做了什么？",
      options: ["她问主角为什么想家", "她安静地坐在旁边陪着", "她把阿特拉斯叫了过来"],
      answer: 1,
      explain: "课文里她只说了「Ja.」和「Ich bin hier.」，然后在旁边坐下，什么也没有多问——她只是陪着。"
    },
    {
      type: "fill",
      q: "Zuerst wasche ich mich, ___ esse ich.（我先洗一洗，然后吃饭。）",
      answer: ["dann"],
      hint: "顺序词：zuerst → ___ → danach",
      explain: "顺序词 zuerst（先）→ dann（然后）→ danach（之后），用来把一天的事情串起来。"
    }
  ]
};
