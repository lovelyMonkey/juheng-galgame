window.STORY_DATA = {
  "meta": {
    "title": "巨哼的五重身份",
    "version": "v3-story-driven-beijing",
    "start": "start",
    "assets": {
      "images": {
        "lolita": "assets/lolita.png",
        "office": "assets/office.png",
        "nurse": "assets/nurse.png"
      },
      "bgm": {
        "common": "assets/bgm/01_warm_daily_loop.mp3",
        "lolita": "assets/bgm/02_lolita_teahouse_waltz.mp3",
        "office": "assets/bgm/03_office_light_city_loop.mp3",
        "nurse": "assets/bgm/04_nurse_healing_day_loop.mp3"
      }
    },
    "setting": {
      "city": "北京",
      "locations": [
        "北京南站",
        "五道营胡同复古茶室",
        "国贸 CBD",
        "北京协和医院",
        "亮马河步道",
        "朝阳公园",
        "鼓楼旧书店"
      ]
    }
  },
  "nodes": [
    {
      "id": "start",
      "chapter": "第0章：北京的第一天",
      "bgm": "common",
      "image": "lolita",
      "speaker": "旁白",
      "text": "北京的第一天，天空像刚洗过的玻璃，北京南站出口的风带着咖啡、雨后长安街柏油路和北京秋天特有的凉意。\n你把行李箱拖到路边，手机地图却在最关键的时候卡住。屏幕上只剩几个模糊的地点：复古五道营茶室、国贸写字楼、北京协和医院、旧书店、亮马河步道。\n你本来只是来这里重新开始，却隐约觉得，今天会遇到某个改变你生活节奏的人。",
      "next": "p_01"
    },
    {
      "id": "p_01",
      "chapter": "第0章：北京的第一天",
      "bgm": "common",
      "image": "lolita",
      "speaker": "旁白",
      "text": "路口的电子屏滚动着“北京北京城市影像展”的广告。画面里有一双清澈的眼睛，被圆框眼镜挡住一点光。\n你停下脚步，总觉得这张宣传图有些说不出的熟悉。还没等你细看，屏幕就切成了国贸 CBD 招聘广告。\n北京像故意把线索藏进胡同和高楼之间，只给你看一秒。",
      "next": "p_02"
    },
    {
      "id": "p_02",
      "chapter": "第0章：北京的第一天",
      "bgm": "common",
      "image": "lolita",
      "speaker": "旁白",
      "text": "手机终于恢复网络，几条消息同时弹出来。\n旧友让你去五道营胡同的复古茶室帮忙拍照；面试通知提醒你下午到国贸 CBD；朋友说自己在北京协和医院输液，问你能不能顺路过去。\n三个方向像三条不同的人生支线，而你只能先选一个。",
      "choices": [
        {
          "text": "去复古五道营茶室：先帮旧友拍照",
          "next": "l_01",
          "delta": {
            "love": 1
          },
          "set": {
            "routeHint": "lolita"
          }
        },
        {
          "text": "去国贸 CBD：不能错过面试",
          "next": "o_01",
          "delta": {
            "trust": 1
          },
          "set": {
            "routeHint": "office"
          }
        },
        {
          "text": "去北京协和医院：先探望朋友",
          "next": "n_01",
          "delta": {
            "understand": 1
          },
          "set": {
            "routeHint": "nurse"
          }
        },
        {
          "text": "去亮马河步道走走：看看北京城市影像展",
          "next": "cross_gate",
          "require": {
            "anyMemory": [
              "lolita_good",
              "office_good",
              "nurse_good"
            ]
          }
        }
      ]
    },
    {
      "id": "l_01",
      "chapter": "Lolita线 第一章：红茶与误会",
      "bgm": "lolita",
      "image": "lolita",
      "speaker": "旁白",
      "text": "复古五道营茶室藏在五道营胡同的一条安静岔路里。门口挂着铜铃，推门时发出很轻的响声，像提醒里面的人不要把现实世界带进来。\n旧友说要晚到十分钟，于是你先举起相机找光。窗边坐着一个穿浅色裙装的女生，蕾丝、蝴蝶结和红茶杯在画面里恰好构成一幅完整的构图。\n你按下快门的那一刻，她抬起头。",
      "next": "l_02"
    },
    {
      "id": "l_02",
      "chapter": "Lolita线 第一章：红茶与误会",
      "bgm": "lolita",
      "image": "lolita",
      "speaker": "巨哼",
      "text": "你是在拍杯子，还是在拍我？\n她的声音不大，却让整个五道营茶室都安静了一瞬。\n如果是后者，我希望你现在就删掉。不是每个穿得精致的人，都愿意被当成背景道具。",
      "choices": [
        {
          "text": "立刻道歉，并把相机递给她检查",
          "next": "l_03a",
          "delta": {
            "trust": 2,
            "understand": 1
          },
          "set": {
            "honest_camera": true
          }
        },
        {
          "text": "解释自己只是在找光线和构图",
          "next": "l_03a",
          "delta": {
            "trust": 1,
            "understand": 1
          }
        },
        {
          "text": "夸她太适合这个画面了",
          "next": "l_03b",
          "delta": {
            "love": 1,
            "understand": -1
          },
          "set": {
            "surface_praise": true
          }
        }
      ]
    },
    {
      "id": "l_03a",
      "chapter": "Lolita线 第一章：红茶与误会",
      "bgm": "lolita",
      "image": "lolita",
      "speaker": "巨哼",
      "text": "……你倒是比我想象中老实。\n她低头翻看照片，指尖停在那张刚才的构图上。照片里她并没有完全入镜，只有半侧身影和一只握着茶杯的手。\n这张可以留下。但下次拍人之前，至少先问一句。",
      "next": "l_04"
    },
    {
      "id": "l_03b",
      "chapter": "Lolita线 第一章：红茶与误会",
      "bgm": "lolita",
      "image": "lolita",
      "speaker": "巨哼",
      "text": "“适合画面”这种话，我听得太多了。\n她把茶杯放下，眼神里没有生气，更多像是疲惫。你忽然意识到，她介意的并不是照片，而是别人理所当然地把她当成“漂亮物件”。\n你想补救，却一时找不到合适的话。",
      "next": "l_04"
    },
    {
      "id": "l_04",
      "chapter": "Lolita线 第一章：红茶与误会",
      "bgm": "lolita",
      "image": "lolita",
      "speaker": "旁白",
      "text": "旧友匆匆赶来，原来今天要拍的宣传照主角正是她。\n“巨哼，我们摄影师临时来不了，这位朋友可以先帮忙顶一下。”旧友双手合十。\n女生看向你，像在重新评估一个麻烦是否值得忍耐。",
      "next": "l_05"
    },
    {
      "id": "l_05",
      "chapter": "Lolita线 第一章：红茶与误会",
      "bgm": "lolita",
      "image": "lolita",
      "speaker": "巨哼",
      "text": "我叫巨哼。\n如果你只是想拍“可爱的裙子”，那我们现在就结束。我要的是一组能让人记住我的照片，不是让人截图问裙子链接的照片。\n你第一次发现，她说“可爱”两个字时，语气里没有半点可爱。",
      "choices": [
        {
          "text": "我想先听你想表达什么",
          "next": "l_06",
          "delta": {
            "understand": 2,
            "trust": 1
          }
        },
        {
          "text": "那我们先试拍，边拍边找感觉",
          "next": "l_06",
          "delta": {
            "trust": 1
          }
        },
        {
          "text": "你穿成这样，不就是希望别人看见吗",
          "next": "l_06_bad",
          "delta": {
            "understand": -2
          }
        }
      ]
    },
    {
      "id": "l_06_bad",
      "chapter": "Lolita线 第一章：红茶与误会",
      "bgm": "lolita",
      "image": "lolita",
      "speaker": "巨哼",
      "text": "她眨了眨眼，像是确认自己没有听错。\n穿成这样，是因为我喜欢。不是为了让任何人替我解释我应该被怎么看。\n你被她一句话堵住，只好尴尬地调整相机参数。拍摄还没开始，气氛已经像冷掉的红茶。",
      "next": "l_07"
    },
    {
      "id": "l_06",
      "chapter": "Lolita线 第一章：红茶与误会",
      "bgm": "lolita",
      "image": "lolita",
      "speaker": "巨哼",
      "text": "她沉默了几秒，才把视线移向窗外。\n我想拍“任性”。不是讨好镜头的甜，也不是橱窗人偶那种精致。\n我想让人看见，一个人可以认真喜欢某种东西，也可以不被这种东西困住。",
      "next": "l_07"
    },
    {
      "id": "l_07",
      "chapter": "Lolita线 第二章：蕾丝背后的疲惫",
      "bgm": "lolita",
      "image": "lolita",
      "speaker": "旁白",
      "text": "拍摄开始后，巨哼几乎不需要指导。她知道怎样转头、怎样让裙摆的弧度刚好停在画面中央，也知道什么时候该让眼神稍微离开镜头。\n可越是完美，你越觉得哪里不对。\n她像一个熟练的演员，准确、漂亮，却把真正的情绪藏在镜头后面。",
      "next": "l_08"
    },
    {
      "id": "l_08",
      "chapter": "Lolita线 第二章：蕾丝背后的疲惫",
      "bgm": "lolita",
      "image": "lolita",
      "speaker": "旁白",
      "text": "午后，茶室老板把几张花絮传到社交平台。没过多久，评论区开始出现刺眼的话。\n“装嫩”“太用力”“这种人现实里肯定很难相处”。\n巨哼扫了一眼，笑着说没关系。可她后来连续三次把同一只手套整理错方向。",
      "choices": [
        {
          "text": "不要追问，只把手机屏幕扣下，递给她一杯热茶",
          "next": "l_09a",
          "delta": {
            "understand": 2,
            "trust": 1
          },
          "set": {
            "gentle_silence": true
          }
        },
        {
          "text": "直接说那些人就是酸，不用理他们",
          "next": "l_09b",
          "delta": {
            "love": 1
          }
        },
        {
          "text": "建议她发一条更强硬的回怼",
          "next": "l_09c",
          "delta": {
            "trust": -1
          }
        }
      ]
    },
    {
      "id": "l_09a",
      "chapter": "Lolita线 第二章：蕾丝背后的疲惫",
      "bgm": "lolita",
      "image": "lolita",
      "speaker": "巨哼",
      "text": "她看着被扣下的手机，忽然很轻地笑了一下。\n你不问我“怎么了”吗？\n你说，如果你想说，我就在这里听；如果不想说，茶先喝掉也可以。\n巨哼低头握住杯子，指尖慢慢放松。",
      "next": "l_10"
    },
    {
      "id": "l_09b",
      "chapter": "Lolita线 第二章：蕾丝背后的疲惫",
      "bgm": "lolita",
      "image": "lolita",
      "speaker": "巨哼",
      "text": "我知道他们不用理。\n她说得很平静，可平静里有一点薄薄的倔强。\n只是知道和不难过，不是一回事。人又不是关掉通知就能关掉心情。",
      "next": "l_10"
    },
    {
      "id": "l_09c",
      "chapter": "Lolita线 第二章：蕾丝背后的疲惫",
      "bgm": "lolita",
      "image": "lolita",
      "speaker": "巨哼",
      "text": "回怼当然很爽，但爽完之后呢？\n她望着窗外，语气变得有些远。\n我不想把所有喜欢的东西都变成战场。可有时候，不战斗又好像只能被人随便定义。",
      "next": "l_10"
    },
    {
      "id": "l_10",
      "chapter": "Lolita线 第二章：蕾丝背后的疲惫",
      "bgm": "lolita",
      "image": "lolita",
      "speaker": "旁白",
      "text": "你陪她整理照片。文件夹里除了今天的裙装，还有很多完全不同的照片：普通卫衣、便利蜂门口、图书馆窗边，甚至一张在国贸写字楼大厅的背影。\n你多看了一眼那张背影。玻璃门上倒映出一个拿文件夹的女人，和巨哼有几分相似。",
      "next": "l_11"
    },
    {
      "id": "l_11",
      "chapter": "Lolita线 第二章：蕾丝背后的疲惫",
      "bgm": "lolita",
      "image": "lolita",
      "speaker": "巨哼",
      "text": "别看那张。\n她关掉文件夹，动作快得像藏起一封没寄出的信。\n每个人都有不想被解释的部分。你现在认识的是坐在茶室里的我，这就够了。",
      "choices": [
        {
          "text": "尊重她，不继续追问",
          "next": "l_12a",
          "delta": {
            "trust": 2,
            "understand": 1
          },
          "set": {
            "respect_secret": true
          }
        },
        {
          "text": "开玩笑说你是不是还有隐藏身份",
          "next": "l_12b",
          "delta": {
            "love": 1
          }
        },
        {
          "text": "追问那是不是你的工作照",
          "next": "l_12c",
          "delta": {
            "trust": -2
          }
        }
      ]
    },
    {
      "id": "l_12a",
      "chapter": "Lolita线 第三章：不是人偶",
      "bgm": "lolita",
      "image": "lolita",
      "speaker": "旁白",
      "text": "你点点头，把话题转回照片。巨哼没有立刻说谢谢，但她重新坐回你旁边，距离比刚才近了一点。\n那种小小的信任不明显，像茶杯边缘残留的温度，要靠手指贴近才感觉得到。",
      "next": "l_13"
    },
    {
      "id": "l_12b",
      "chapter": "Lolita线 第三章：不是人偶",
      "bgm": "lolita",
      "image": "lolita",
      "speaker": "巨哼",
      "text": "如果我真的有隐藏身份，你这种问法第一集就会被灭口。\n她终于露出一点轻松的表情。\n不过你说对了一半。每个人在不同地方，都不可能完全是同一个样子。",
      "next": "l_13"
    },
    {
      "id": "l_12c",
      "chapter": "Lolita线 第三章：不是人偶",
      "bgm": "lolita",
      "image": "lolita",
      "speaker": "巨哼",
      "text": "她的表情淡了下去。\n你刚才还说想拍真正的我，现在却急着给我贴另一个标签。\n有些门不是看见了就能推开。至少现在，不行。",
      "next": "l_13"
    },
    {
      "id": "l_13",
      "chapter": "Lolita线 第三章：不是人偶",
      "bgm": "lolita",
      "image": "lolita",
      "speaker": "旁白",
      "text": "第二次拍摄，巨哼提出一个奇怪的要求：她想拍一组“完全不像Lolita”的照片。\n不换城市，不换人，只换掉那些让别人一眼定义她的东西。\n她站在试衣间门口，抱着一套普通外套，像要把自己从精致的壳里暂时放出来。",
      "next": "l_14"
    },
    {
      "id": "l_14",
      "chapter": "Lolita线 第三章：不是人偶",
      "bgm": "lolita",
      "image": "lolita",
      "speaker": "巨哼",
      "text": "如果我没有裙子，没有头饰，没有精致滤镜，你还拍得下去吗？\n她问得像玩笑，可眼神并没有笑。\n你忽然明白，这不是拍摄企划，而是一场小心翼翼的试探。",
      "choices": [
        {
          "text": "拍得下去，因为我拍的是你看世界的样子",
          "next": "l_15_best",
          "delta": {
            "love": 2,
            "understand": 2,
            "trust": 1
          },
          "set": {
            "see_real": true
          }
        },
        {
          "text": "当然，反差感也会很好看",
          "next": "l_15_mid",
          "delta": {
            "love": 1
          }
        },
        {
          "text": "可是你的粉丝可能更想看裙装",
          "next": "l_15_bad",
          "delta": {
            "understand": -2
          }
        }
      ]
    },
    {
      "id": "l_15_best",
      "chapter": "Lolita线 第三章：不是人偶",
      "bgm": "lolita",
      "image": "lolita",
      "speaker": "巨哼",
      "text": "她怔了一下，随即把外套抱得更紧。\n你这种话，说得太认真了。\n但她没有否认，只是转身进了试衣间。门合上的瞬间，你听见里面传来一声很轻的呼吸，像是终于允许自己松懈。",
      "next": "l_16"
    },
    {
      "id": "l_15_mid",
      "chapter": "Lolita线 第三章：不是人偶",
      "bgm": "lolita",
      "image": "lolita",
      "speaker": "巨哼",
      "text": "反差感啊。\n她重复了一遍，像是在衡量这个词有没有伤人。\n也可以。至少比“还是穿裙子好看”进步一点。",
      "next": "l_16"
    },
    {
      "id": "l_15_bad",
      "chapter": "Lolita线 第三章：不是人偶",
      "bgm": "lolita",
      "image": "lolita",
      "speaker": "巨哼",
      "text": "所以你担心的是粉丝想看什么。\n她把外套放回椅背，笑意变得很淡。\n我还以为你已经开始关心我想成为什么样子了。",
      "next": "l_16"
    },
    {
      "id": "l_16",
      "chapter": "Lolita线 第三章：不是人偶",
      "bgm": "lolita",
      "image": "lolita",
      "speaker": "旁白",
      "text": "你们去了五道营胡同深处的便利蜂、亮马河边的长椅和一面爬满藤蔓的胡同灰墙。\n没有蕾丝和蝴蝶结后，巨哼反而变得更难拍。她会突然走神，会因为自动门的欢迎声笑场，也会在镜头前下意识想摆出“正确”的姿势。\n你按下快门，记录下那些不够完美的瞬间。",
      "next": "l_17"
    },
    {
      "id": "l_17",
      "chapter": "Lolita线 第三章：不是人偶",
      "bgm": "lolita",
      "image": "lolita",
      "speaker": "巨哼",
      "text": "我以前很怕别人说我“不像”。\n不像大人，不像职场人，不像温柔的人，不像他们想象里该有的样子。\n后来我发现，只要我足够精致，他们就会先忙着夸外表，没空问我到底是谁。",
      "next": "l_18"
    },
    {
      "id": "l_18",
      "chapter": "Lolita线 第三章：不是人偶",
      "bgm": "lolita",
      "image": "lolita",
      "speaker": "旁白",
      "text": "夕阳落到她的眼镜边缘，镜片反射出一小块金色的光。\n你忽然想起那张写字楼背影。那不像是偶然混进文件夹的照片，更像是她故意留下，又故意不让人看懂的线索。\n但这次，你没有追问。",
      "next": "l_19"
    },
    {
      "id": "l_19",
      "chapter": "Lolita线 第四章：茶会终幕",
      "bgm": "lolita",
      "image": "lolita",
      "speaker": "旁白",
      "text": "一周后，五道营茶室举办小型展览，主题叫“我不是人偶”。\n你的照片被挂在最里面的墙上：裙装的巨哼、普通外套的巨哼、低头喝便利蜂热饮的巨哼，以及一张只拍到她影子的照片。\n观众在照片前停留，比在最华丽的那张前更久。",
      "next": "l_20"
    },
    {
      "id": "l_20",
      "chapter": "Lolita线 第四章：茶会终幕",
      "bgm": "lolita",
      "image": "lolita",
      "speaker": "巨哼",
      "text": "我一直以为，只要别人喜欢某一种我，我就必须把那一种演得更好。\n她站在展览灯下，声音很轻，却没有发抖。\n可今天我想说，我不是人偶，也不是任何一种标签。我可以精致，也可以普通；可以任性，也可以认真。",
      "next": "l_21"
    },
    {
      "id": "l_21",
      "chapter": "Lolita线 第四章：茶会终幕",
      "bgm": "lolita",
      "image": "lolita",
      "speaker": "旁白",
      "text": "掌声响起的时候，巨哼没有立刻看观众，而是看向你。\n那一眼里没有求证，也没有逃避，像是在问：你看见了吗？\n你知道，接下来的一句话会影响你们之间的距离。",
      "choices": [
        {
          "text": "我喜欢的不是某一种样子，是全部的你",
          "next": "l_end_good",
          "delta": {
            "love": 2,
            "understand": 3,
            "trust": 2
          },
          "set": {
            "confessed_lolita": true
          }
        },
        {
          "text": "今天的展览很成功，你真的很耀眼",
          "next": "l_end_normal",
          "delta": {
            "love": 1,
            "understand": 1
          }
        },
        {
          "text": "其实我还是最喜欢你穿裙子的样子",
          "next": "l_end_bad",
          "delta": {
            "understand": -3
          }
        }
      ]
    },
    {
      "id": "l_end_good",
      "chapter": "Lolita线 结局：你眼中的我",
      "bgm": "lolita",
      "image": "lolita",
      "speaker": "巨哼",
      "text": "她低下头，摘掉发间的装饰，又重新看向你。\n那以后，你要负责看见真正的我。\n不是每天都好看，不是每天都温柔，也不是每天都知道自己要去哪里。这样的我，你也要慢慢认识。",
      "memory": {
        "lolita_good": true
      },
      "ending": "good",
      "title": "Good Ending：《你眼中的我》"
    },
    {
      "id": "l_end_normal",
      "chapter": "Lolita线 结局：茶会之后",
      "bgm": "lolita",
      "image": "lolita",
      "speaker": "旁白",
      "text": "展览结束后，你们继续一起拍照。巨哼会把新的构思发给你，也会偶尔吐槽评论区的奇怪发言。\n你们变得亲近，却始终隔着一层没有说破的玻璃。也许某天，她会愿意让你再靠近一点。",
      "memory": {
        "lolita_normal": true
      },
      "ending": "normal",
      "title": "Normal Ending：《茶会之后》"
    },
    {
      "id": "l_end_bad",
      "chapter": "Lolita线 结局：漂亮的人偶",
      "bgm": "lolita",
      "image": "lolita",
      "speaker": "旁白",
      "text": "巨哼的笑容停顿了一秒。\n后来，她依然更新照片，只是再也没有约你拍摄。你偶尔在屏幕上看见她，精致、完美、遥远。\n你终于明白，她并不是拒绝被喜欢，她只是拒绝只被喜欢一种样子。",
      "memory": {
        "lolita_bad": true
      },
      "ending": "bad",
      "title": "Bad Ending：《漂亮的人偶》"
    },
    {
      "id": "o_01",
      "chapter": "职业装线 第一章：新人的第一份报告",
      "bgm": "office",
      "image": "office",
      "speaker": "旁白",
      "text": "国贸写字楼的电梯上升得很快，楼层数字一格格跳动。窗外是东三环和密密麻麻的车流，像某种倒计时。\n你手里握着简历和入职资料，指尖微微出汗。国贸写字楼国贸写字楼二十七层电梯门打开，白色灯光、玻璃隔断和键盘声一起涌来。\n前台指向会议室：项目经理已经在等你了。",
      "next": "o_02"
    },
    {
      "id": "o_02",
      "chapter": "职业装线 第一章：新人的第一份报告",
      "bgm": "office",
      "image": "office",
      "speaker": "巨哼",
      "text": "你迟到了两分钟。\n会议室里的女人抬起头，圆框眼镜后的视线冷静得近乎锐利。\n我是巨哼，项目组负责人。欢迎加入，但欢迎不等于降低标准。你的第一份任务，下午下班前给我一版竞品分析。",
      "next": "o_03"
    },
    {
      "id": "o_03",
      "chapter": "职业装线 第一章：新人的第一份报告",
      "bgm": "office",
      "image": "office",
      "speaker": "旁白",
      "text": "她说话不快，却没有一句废话。你原本准备好的寒暄全被堵回去，只能坐下打开电脑。\n午休前，你交出第一版报告。巨哼翻了三页，拿起笔在第一页画了一个圈。\n不是错别字，而是逻辑漏洞。",
      "choices": [
        {
          "text": "承认问题，请她指出判断标准",
          "next": "o_04a",
          "delta": {
            "trust": 2,
            "understand": 1
          }
        },
        {
          "text": "解释自己刚入职，资料还不全",
          "next": "o_04b",
          "delta": {
            "trust": -1
          }
        },
        {
          "text": "默默记下所有修改意见，晚上重做",
          "next": "o_04a",
          "delta": {
            "trust": 1
          }
        }
      ]
    },
    {
      "id": "o_04a",
      "chapter": "职业装线 第一章：新人的第一份报告",
      "bgm": "office",
      "image": "office",
      "speaker": "巨哼",
      "text": "她看了你一眼，像是对你的反应有一点意外。\n判断标准很简单：你的结论必须能被数据支撑，不能靠“感觉应该”。\n她把自己的笔记推过来。字迹很整齐，旁边还标了资料来源。",
      "next": "o_05"
    },
    {
      "id": "o_04b",
      "chapter": "职业装线 第一章：新人的第一份报告",
      "bgm": "office",
      "image": "office",
      "speaker": "巨哼",
      "text": "资料不全是事实，但不是结论站不住的理由。\n她合上文件夹，语气没有提高，却比责备更让人坐立不安。\n新人可以不会，但不能把“不会”当成挡箭牌。",
      "next": "o_05"
    },
    {
      "id": "o_05",
      "chapter": "职业装线 第二章：便利蜂的晚饭",
      "bgm": "office",
      "image": "office",
      "speaker": "旁白",
      "text": "接下来的三天，你逐渐明白为什么大家提起巨哼时又敬又怕。\n她能在十分钟内找到方案漏洞，也会在客户电话里把风险拆得清清楚楚。她几乎没有情绪化的时刻，像一台精准运行的机器。\n直到你在深夜便利蜂看见她。",
      "next": "o_06"
    },
    {
      "id": "o_06",
      "chapter": "职业装线 第二章：便利蜂的晚饭",
      "bgm": "office",
      "image": "office",
      "speaker": "旁白",
      "text": "玻璃窗外是加班后凌晨的东三环辅路。巨哼坐在靠窗的位置，面前是一份已经凉掉的便当。\n她没有穿外套，肩膀微微塌着，手机屏幕亮了又暗。那一刻，她不像白天的项目经理，更像终于被城市按下暂停键的人。",
      "next": "o_07"
    },
    {
      "id": "o_07",
      "chapter": "职业装线 第二章：便利蜂的晚饭",
      "bgm": "office",
      "image": "office",
      "speaker": "巨哼",
      "text": "你也加班到现在？\n她抬头看见你，第一反应竟然是把桌上的药盒往文件下面推。\n别误会，只是维生素。项目到这个阶段，谁都会累。\n她说得太熟练，像早就准备好应付所有关心。",
      "choices": [
        {
          "text": "买一份热汤坐下，不追问药盒",
          "next": "o_08a",
          "delta": {
            "understand": 2,
            "trust": 1
          },
          "set": {
            "office_soup": true
          }
        },
        {
          "text": "直接问她是不是身体不舒服",
          "next": "o_08b",
          "delta": {
            "love": 1,
            "trust": -1
          }
        },
        {
          "text": "提出帮她处理剩下的表格",
          "next": "o_08c",
          "delta": {
            "trust": 2
          }
        }
      ]
    },
    {
      "id": "o_08a",
      "chapter": "职业装线 第二章：便利蜂的晚饭",
      "bgm": "office",
      "image": "office",
      "speaker": "巨哼",
      "text": "她看着你把热汤推过来，沉默了几秒。\n你们新人现在都这么会观察空气吗？\n你说不是会观察，只是觉得凉便当不适合凌晨一点。她没再反驳，拿起勺子的动作却比刚才慢了很多。",
      "next": "o_09"
    },
    {
      "id": "o_08b",
      "chapter": "职业装线 第二章：便利蜂的晚饭",
      "bgm": "office",
      "image": "office",
      "speaker": "巨哼",
      "text": "不舒服也不能让客户需求自己稳定下来。\n她把药盒收进包里，语气恢复了白天的距离感。\n关心有时候很珍贵，但如果它只会让问题停在原地，我宁愿先解决问题。",
      "next": "o_09"
    },
    {
      "id": "o_08c",
      "chapter": "职业装线 第二章：便利蜂的晚饭",
      "bgm": "office",
      "image": "office",
      "speaker": "巨哼",
      "text": "你知道表格里每一列代表什么吗？\n她本来像要拒绝，可你把下午整理的字段说明递过去。她翻了两页，终于把电脑转向你。\n好，那你先帮我核第一组数据。",
      "next": "o_09"
    },
    {
      "id": "o_09",
      "chapter": "职业装线 第二章：便利蜂的晚饭",
      "bgm": "office",
      "image": "office",
      "speaker": "旁白",
      "text": "凌晨的便利蜂成了临时会议室。你们一边吃东西，一边把客户需求拆成可执行的清单。\n巨哼偶尔会停下来揉眉心。你发现她不是不会累，只是把疲惫压缩得太小，小到其他人看不见。",
      "next": "o_10"
    },
    {
      "id": "o_10",
      "chapter": "职业装线 第二章：便利蜂的晚饭",
      "bgm": "office",
      "image": "office",
      "speaker": "巨哼",
      "text": "我以前也试过依赖团队。\n她低头看着电脑屏幕，声音被便利蜂音乐盖住一点。\n后来发现，一旦出了问题，承担责任的人只有负责人。久而久之，我就不太习惯把重的东西交给别人了。",
      "choices": [
        {
          "text": "责任可以由你承担，但重量可以一起分",
          "next": "o_11a",
          "delta": {
            "understand": 3,
            "trust": 2
          },
          "set": {
            "office_weight": true
          }
        },
        {
          "text": "那你肯定很辛苦",
          "next": "o_11b",
          "delta": {
            "love": 1
          }
        },
        {
          "text": "所以你才对新人这么严格吗",
          "next": "o_11c",
          "delta": {
            "understand": 1
          }
        }
      ]
    },
    {
      "id": "o_11a",
      "chapter": "职业装线 第二章：便利蜂的晚饭",
      "bgm": "office",
      "image": "office",
      "speaker": "巨哼",
      "text": "她敲键盘的手停了一下。\n这句话听起来很理想主义。\n但她没有否定。过了一会儿，她把一份风险清单发给你。\n如果你真的想分，那从这份开始。",
      "next": "o_12"
    },
    {
      "id": "o_11b",
      "chapter": "职业装线 第二章：便利蜂的晚饭",
      "bgm": "office",
      "image": "office",
      "speaker": "巨哼",
      "text": "辛苦不是重点。\n她摇摇头，像是在纠正一个常见误解。\n重点是辛苦之后事情有没有往前走。如果只是被同情，那我宁愿别人别看见。",
      "next": "o_12"
    },
    {
      "id": "o_11c",
      "chapter": "职业装线 第二章：便利蜂的晚饭",
      "bgm": "office",
      "image": "office",
      "speaker": "巨哼",
      "text": "严格不完全是坏事。\n她抬眼看你，神情比白天柔和一点。\n我希望你们在小问题上被我骂，而不是在客户会议上被现实打得更疼。",
      "next": "o_12"
    },
    {
      "id": "o_12",
      "chapter": "职业装线 第三章：项目崩盘前夜",
      "bgm": "office",
      "image": "office",
      "speaker": "旁白",
      "text": "项目交付前三天，客户临时改需求。会议室里的空气瞬间紧绷。\n上级希望巨哼“先答应下来再想办法”，客户希望“不延期不加钱”，团队成员则看着她，等一个能让所有人安心的结论。\n你第一次看见她沉默那么久。",
      "next": "o_13"
    },
    {
      "id": "o_13",
      "chapter": "职业装线 第三章：项目崩盘前夜",
      "bgm": "office",
      "image": "office",
      "speaker": "巨哼",
      "text": "我会重新排计划。\n她说出这句话时，所有人都松了一口气，只有你注意到她握着笔的手指用力到发白。\n会议结束后，她一个人留在白板前，把原计划一项项擦掉，又重新写上新的时间表。",
      "choices": [
        {
          "text": "留下来帮她拆风险和优先级",
          "next": "o_14a",
          "delta": {
            "trust": 2,
            "understand": 2
          },
          "set": {
            "office_stayed": true
          }
        },
        {
          "text": "劝她把压力分给团队",
          "next": "o_14b",
          "delta": {
            "understand": 1
          }
        },
        {
          "text": "去找上级质问不合理安排",
          "next": "o_14c",
          "delta": {
            "trust": -1
          }
        }
      ]
    },
    {
      "id": "o_14a",
      "chapter": "职业装线 第三章：项目崩盘前夜",
      "bgm": "office",
      "image": "office",
      "speaker": "旁白",
      "text": "你拿起另一支马克笔，把需求分成“必须交付”“可延期”“需要客户确认”三栏。\n巨哼看着白板，眼神从惊讶变成专注。\n你们没有说太多安慰的话，却在凌晨前把一团混乱拆成了能被执行的计划。",
      "next": "o_15"
    },
    {
      "id": "o_14b",
      "chapter": "职业装线 第三章：项目崩盘前夜",
      "bgm": "office",
      "image": "office",
      "speaker": "巨哼",
      "text": "我知道应该分。\n她低声说。\n可不是每个人都能接住。把压力分出去，不等于压力会消失，有时候只是让更多人一起慌。\n你意识到，她缺的不是道理，而是能真正落地的人。",
      "next": "o_15"
    },
    {
      "id": "o_14c",
      "chapter": "职业装线 第三章：项目崩盘前夜",
      "bgm": "office",
      "image": "office",
      "speaker": "旁白",
      "text": "你冲进上级办公室，情绪比证据先到。\n结果并不理想。上级用一句“新人不要越级”结束谈话，巨哼不得不替你收场。\n她没有责备你，只是说：出头之前，先想好能不能把人带回来。",
      "next": "o_15"
    },
    {
      "id": "o_15",
      "chapter": "职业装线 第三章：项目崩盘前夜",
      "bgm": "office",
      "image": "office",
      "speaker": "旁白",
      "text": "接连两天，你们几乎住在公司。茶水间的咖啡机坏了又修，白板上的便利贴换了三轮。\n某个清晨，巨哼趴在桌上睡着了。你想叫醒她，却看见她桌面上压着一张旧照片：照片里的她穿着浅色裙装，站在五道营茶室窗边。",
      "choices": [
        {
          "text": "把照片原样放回，不提这件事",
          "next": "o_16a",
          "delta": {
            "trust": 2,
            "understand": 1
          },
          "set": {
            "office_respect_photo": true
          }
        },
        {
          "text": "轻声问：你也去过那家五道营茶室吗",
          "next": "o_16b",
          "delta": {
            "understand": 1
          },
          "require": {
            "memory": "lolita_good"
          }
        },
        {
          "text": "拍照发给她开玩笑",
          "next": "o_16c",
          "delta": {
            "trust": -3
          }
        }
      ]
    },
    {
      "id": "o_16a",
      "chapter": "职业装线 第三章：项目崩盘前夜",
      "bgm": "office",
      "image": "office",
      "speaker": "旁白",
      "text": "你把照片压回原来的角度，又替她关掉快要没电的笔记本。\n她醒来时看了桌面一眼，似乎知道你看见了什么，却没有追问。\n有些信任不是来自交换秘密，而是来自你没有趁机打开秘密。",
      "next": "o_17"
    },
    {
      "id": "o_16b",
      "chapter": "职业装线 第三章：项目崩盘前夜",
      "bgm": "office",
      "image": "office",
      "speaker": "巨哼",
      "text": "她醒来后听见你的问题，眼神微微一动。\n你果然见过那个我。\n她没有否认，反而像终于确认了某条线索。\n如果你喜欢茶室里的巨哼，也请别讨厌现在这个会骂人的项目经理。",
      "next": "o_17"
    },
    {
      "id": "o_16c",
      "chapter": "职业装线 第三章：项目崩盘前夜",
      "bgm": "office",
      "image": "office",
      "speaker": "巨哼",
      "text": "她看见你举起手机，表情瞬间冷下来。\n工作场合不是玩笑的安全区。尤其是别人的私人照片。\n那天之后，她仍然和你讨论工作，但所有温度都退回了礼貌边界之外。",
      "next": "o_17"
    },
    {
      "id": "o_17",
      "chapter": "职业装线 第四章：并肩作战",
      "bgm": "office",
      "image": "office",
      "speaker": "旁白",
      "text": "交付前夜，系统测试出现重大异常。团队所有人的目光再次落到巨哼身上。\n她站在会议室中央，像一根绷到极限的弦。你知道，如果这次她再一个人扛下去，就算项目成功，她也会被消耗得所剩无几。",
      "choices": [
        {
          "text": "站出来分配排查任务，先稳住团队",
          "next": "o_18a",
          "delta": {
            "trust": 3,
            "understand": 2
          },
          "set": {
            "office_lead": true
          }
        },
        {
          "text": "把你整理的备用方案交给她",
          "next": "o_18b",
          "delta": {
            "trust": 2
          }
        },
        {
          "text": "让她先回去休息，你来处理全部",
          "next": "o_18c",
          "delta": {
            "love": 1,
            "understand": -1
          }
        }
      ]
    },
    {
      "id": "o_18a",
      "chapter": "职业装线 第四章：并肩作战",
      "bgm": "office",
      "image": "office",
      "speaker": "旁白",
      "text": "你把异常拆成接口、数据、权限三条线，让每个人认领二十分钟内能验证的部分。\n巨哼看了你一眼，没有打断。等你说完，她接上最关键的客户沟通方案。\n那一刻，你们像终于对上节拍的双人舞。",
      "next": "o_19"
    },
    {
      "id": "o_18b",
      "chapter": "职业装线 第四章：并肩作战",
      "bgm": "office",
      "image": "office",
      "speaker": "巨哼",
      "text": "她接过备用方案，快速扫完，眼底的紧绷终于松了一点。\n你什么时候准备的？\n你说从便利蜂那晚开始。她沉默几秒，轻声说：看来我不是唯一一个会偷偷加班的人。",
      "next": "o_19"
    },
    {
      "id": "o_18c",
      "chapter": "职业装线 第四章：并肩作战",
      "bgm": "office",
      "image": "office",
      "speaker": "巨哼",
      "text": "她摇头。\n你不是来替我牺牲的。并肩不是把我推开，然后自己站到火里。\n她的语气很重，却不是生气。你第一次听见她明确说出“并肩”两个字。",
      "next": "o_19"
    },
    {
      "id": "o_19",
      "chapter": "职业装线 第四章：并肩作战",
      "bgm": "office",
      "image": "office",
      "speaker": "旁白",
      "text": "凌晨四点，异常定位完成。清晨七点，客户确认验收。上午十点，项目正式交付。\n办公室里爆发出压抑很久的欢呼。巨哼站在人群边缘，手里握着纸杯，像还没从连续几天的高压里回到现实。",
      "next": "o_20"
    },
    {
      "id": "o_20",
      "chapter": "职业装线 第四章：并肩作战",
      "bgm": "office",
      "image": "office",
      "speaker": "巨哼",
      "text": "谢谢。\n她说得很轻，几乎被同事的笑声盖住。\n不是谢谢你救了项目，是谢谢你没有把我当成一台不会累的机器。\n这句话比任何表扬都更像一次告白的预告。",
      "choices": [
        {
          "text": "以后，我想继续站在你旁边",
          "next": "o_end_good",
          "delta": {
            "love": 3,
            "trust": 2,
            "understand": 2
          },
          "set": {
            "office_confess": true
          }
        },
        {
          "text": "我们会是很可靠的搭档",
          "next": "o_end_normal",
          "delta": {
            "trust": 2
          }
        },
        {
          "text": "其实你早点听我的就不会这么累",
          "next": "o_end_bad",
          "delta": {
            "understand": -3
          }
        }
      ]
    },
    {
      "id": "o_end_good",
      "chapter": "职业装线 结局：并肩的人",
      "bgm": "office",
      "image": "office",
      "speaker": "巨哼",
      "text": "庆功宴后，她陪你回公司取落下的电脑。\n空荡的办公室只剩北京 CBD 的灯光。巨哼站在窗前，忽然说：以后，我想试着依赖你一点。\n她看向你，补了一句：不是因为我变弱了，是因为我终于相信，有些路两个人走会更远。",
      "memory": {
        "office_good": true
      },
      "ending": "good",
      "title": "Good Ending：《并肩的人》"
    },
    {
      "id": "o_end_normal",
      "chapter": "职业装线 结局：可靠的同事",
      "bgm": "office",
      "image": "office",
      "speaker": "旁白",
      "text": "你们成了项目组里最默契的搭档。她会在会议前把重点发给你，你也会在她忘记吃饭时放一份便当在桌边。\n关系停在同事以上、恋人未满。也许只是差一个更勇敢的夜晚。",
      "memory": {
        "office_normal": true
      },
      "ending": "normal",
      "title": "Normal Ending：《可靠的同事》"
    },
    {
      "id": "o_end_bad",
      "chapter": "职业装线 结局：无声的离职信",
      "bgm": "office",
      "image": "office",
      "speaker": "旁白",
      "text": "你以为自己理解她，却只是用另一种方式要求她按照你的节奏停下。\n一个月后，巨哼离开公司。她把所有交接文档整理得完美，却没有给你留下任何私人消息。\n国贸写字楼的窗户依然明亮，只是你再也找不到那个熟悉的身影。",
      "memory": {
        "office_bad": true
      },
      "ending": "bad",
      "title": "Bad Ending：《无声的离职信》"
    },
    {
      "id": "n_01",
      "chapter": "护士线 第一章：白色走廊",
      "bgm": "nurse",
      "image": "nurse",
      "speaker": "旁白",
      "text": "北京协和医院比你想象中更忙。挂号机前排着长队，电梯门不停开合，空气里有消毒水、早餐豆浆和北京医院大厅特有的匆忙感。\n你只是来探望发烧的朋友，却因为协和的楼号和科室绕得头大，在白色走廊里转了三圈。\n第四次经过护士站时，一个声音叫住了你。",
      "next": "n_02"
    },
    {
      "id": "n_02",
      "chapter": "护士线 第一章：白色走廊",
      "bgm": "nurse",
      "image": "nurse",
      "speaker": "巨哼",
      "text": "你已经第三次从这里路过了。\n她递给你一只纸杯，里面是温水。\n如果你是在找住院部，往左。如果你是在挑战自己的方向感，我建议先补充水分。",
      "next": "n_03"
    },
    {
      "id": "n_03",
      "chapter": "护士线 第一章：白色走廊",
      "bgm": "nurse",
      "image": "nurse",
      "speaker": "旁白",
      "text": "你接过水，才看清她胸牌上的名字：巨哼。\n她的语气带一点小小的吐槽，动作却很细心。她一边给你指路，一边提醒旁边的小朋友不要跑。\n在一片忙乱里，她像一盏不会太亮、但足够让人安心的灯。",
      "choices": [
        {
          "text": "认真道谢，并问她是不是一直这么忙",
          "next": "n_04a",
          "delta": {
            "love": 1,
            "understand": 1
          }
        },
        {
          "text": "开玩笑说自己方向感确实需要治疗",
          "next": "n_04b",
          "delta": {
            "love": 1
          }
        },
        {
          "text": "抱怨医院标识太乱",
          "next": "n_04c",
          "delta": {
            "understand": -1
          }
        }
      ]
    },
    {
      "id": "n_04a",
      "chapter": "护士线 第一章：白色走廊",
      "bgm": "nurse",
      "image": "nurse",
      "speaker": "巨哼",
      "text": "忙是正常状态，不忙才要担心是不是排班系统坏了。\n她笑了一下，把另一只纸杯递给刚做完检查的老人。\n不过你能发现别人忙，说明你至少不是完全没救。",
      "next": "n_05"
    },
    {
      "id": "n_04b",
      "chapter": "护士线 第一章：白色走廊",
      "bgm": "nurse",
      "image": "nurse",
      "speaker": "巨哼",
      "text": "方向感暂时不归我们科负责。\n她一本正经地回答，嘴角却忍不住弯了一下。\n但如果你继续在走廊里打转，可能会被我登记成“疑似迷路患者”。",
      "next": "n_05"
    },
    {
      "id": "n_04c",
      "chapter": "护士线 第一章：白色走廊",
      "bgm": "nurse",
      "image": "nurse",
      "speaker": "巨哼",
      "text": "标识确实有可以改进的地方。\n她没有反驳，只是语气淡了一点。\n但在你抱怨的时候，旁边那位老人可能已经听不清叫号了。先把路找到，再吐槽也来得及。",
      "next": "n_05"
    },
    {
      "id": "n_05",
      "chapter": "护士线 第二章：夜班灯光",
      "bgm": "nurse",
      "image": "nurse",
      "speaker": "旁白",
      "text": "朋友需要住院观察，你开始频繁出入医院。\n你发现巨哼总在不同时间出现：早上帮病人换药，中午协调检查，夜里在护士站写记录。\n她似乎永远温柔，永远有耐心。直到某个凌晨，你看见她靠在护士站边，闭着眼睛睡着了三十秒。",
      "next": "n_06"
    },
    {
      "id": "n_06",
      "chapter": "护士线 第二章：夜班灯光",
      "bgm": "nurse",
      "image": "nurse",
      "speaker": "旁白",
      "text": "她醒得很快，像身体早就训练出不允许自己真正休息的本能。\n你手里拎着便利蜂买来的热咖啡和饭团，一时不知道该不该递过去。\n如果递得太刻意，也许会变成负担；如果什么都不做，她又真的很累。",
      "choices": [
        {
          "text": "把咖啡放在护士站边，只说“多买了一杯”",
          "next": "n_07a",
          "delta": {
            "understand": 2,
            "trust": 1
          },
          "set": {
            "nurse_coffee": true
          }
        },
        {
          "text": "坚持让她马上喝，不然对身体不好",
          "next": "n_07b",
          "delta": {
            "love": 1,
            "trust": -1
          }
        },
        {
          "text": "问她为什么不请假休息",
          "next": "n_07c",
          "delta": {
            "understand": 0
          }
        }
      ]
    },
    {
      "id": "n_07a",
      "chapter": "护士线 第二章：夜班灯光",
      "bgm": "nurse",
      "image": "nurse",
      "speaker": "巨哼",
      "text": "她看了看咖啡，又看了看你。\n多买一杯这种借口，通常只在电视剧里比较自然。\n话虽这么说，她还是把咖啡拿起来，掌心贴着杯壁。热气模糊了她镜片边缘，也让她的表情柔和下来。",
      "next": "n_08"
    },
    {
      "id": "n_07b",
      "chapter": "护士线 第二章：夜班灯光",
      "bgm": "nurse",
      "image": "nurse",
      "speaker": "巨哼",
      "text": "我知道你是好意。\n她接过咖啡，却没有立刻喝。\n但在这里，“必须马上”这种词太多了。必须打针，必须检查，必须处理突发情况。你能不能让我自己决定什么时候喝？",
      "next": "n_08"
    },
    {
      "id": "n_07c",
      "chapter": "护士线 第二章：夜班灯光",
      "bgm": "nurse",
      "image": "nurse",
      "speaker": "巨哼",
      "text": "请假当然可以。\n她整理着病历，语气很轻。\n只是我请假的时候，另一个人就要替我多上一段。大家都累，所以谁也不太愿意先说自己撑不住。",
      "next": "n_08"
    },
    {
      "id": "n_08",
      "chapter": "护士线 第二章：夜班灯光",
      "bgm": "nurse",
      "image": "nurse",
      "speaker": "旁白",
      "text": "凌晨三点的医院有一种奇怪的安静。不是没有声音，而是所有声音都被压低：输液泵的提示音、远处的脚步声、家属翻身时椅子的轻响。\n巨哼坐在护士站写记录，你坐在等候椅上。你们隔着几米，却像共同守着一盏夜灯。",
      "next": "n_09"
    },
    {
      "id": "n_09",
      "chapter": "护士线 第二章：夜班灯光",
      "bgm": "nurse",
      "image": "nurse",
      "speaker": "巨哼",
      "text": "其实我以前不太喜欢别人说我温柔。\n她忽然开口。\n温柔听起来像一种理所当然的义务。好像你温柔，就应该永远不生气，永远先照顾别人，永远把自己的疲惫往后放。",
      "choices": [
        {
          "text": "温柔不应该是你被消耗的理由",
          "next": "n_10a",
          "delta": {
            "understand": 3,
            "trust": 1
          },
          "set": {
            "nurse_understand": true
          }
        },
        {
          "text": "但你的温柔真的让人安心",
          "next": "n_10b",
          "delta": {
            "love": 1
          }
        },
        {
          "text": "那你可以不用对所有人温柔",
          "next": "n_10c",
          "delta": {
            "understand": 1
          }
        }
      ]
    },
    {
      "id": "n_10a",
      "chapter": "护士线 第二章：夜班灯光",
      "bgm": "nurse",
      "image": "nurse",
      "speaker": "巨哼",
      "text": "她握着笔的手停住。\n这句话……我应该早点听见。\n她没有看你，眼睛仍在病历上，可声音明显软了一点。\n照顾别人是我的工作，也是我愿意做的事。但我也希望有人记得，我不是只会照顾别人。",
      "next": "n_11"
    },
    {
      "id": "n_10b",
      "chapter": "护士线 第二章：夜班灯光",
      "bgm": "nurse",
      "image": "nurse",
      "speaker": "巨哼",
      "text": "谢谢。\n她笑了笑，那笑容很真，却也很累。\n如果只是让人安心，我会高兴。但如果别人因此忘记我也会不安，那就有点麻烦。",
      "next": "n_11"
    },
    {
      "id": "n_10c",
      "chapter": "护士线 第二章：夜班灯光",
      "bgm": "nurse",
      "image": "nurse",
      "speaker": "巨哼",
      "text": "听起来很潇洒，但病人不会因为我今天累就少疼一点。\n她抬头看向走廊尽头。\n我可以有情绪，可我不能把情绪丢给需要帮助的人。这大概就是工作难的地方。",
      "next": "n_11"
    },
    {
      "id": "n_11",
      "chapter": "护士线 第三章：被误解的人",
      "bgm": "nurse",
      "image": "nurse",
      "speaker": "旁白",
      "text": "第二天下午，协和病房里突然传来争吵。一位患者家属情绪失控，指责医护没有及时处理。\n巨哼站在门口，声音始终平稳。她解释流程，安抚老人，联系医生，几乎同时做了三件事。\n可对方的怒气还是落在她身上。",
      "next": "n_12"
    },
    {
      "id": "n_12",
      "chapter": "护士线 第三章：被误解的人",
      "bgm": "nurse",
      "image": "nurse",
      "speaker": "家属",
      "text": "你们天天说等医生，等检查，等通知！出事了谁负责？\n声音越来越大，走廊里的人都看过来。\n你看见巨哼的肩膀微微僵了一下，但她仍然挡在病床和家属之间，没有后退。",
      "choices": [
        {
          "text": "先帮她把围观的人请开，保护处理空间",
          "next": "n_13a",
          "delta": {
            "trust": 2,
            "understand": 2
          },
          "set": {
            "nurse_space": true
          }
        },
        {
          "text": "站出来替她解释她已经做得够多了",
          "next": "n_13b",
          "delta": {
            "love": 1,
            "trust": 1
          }
        },
        {
          "text": "直接和家属吵起来",
          "next": "n_13c",
          "delta": {
            "trust": -2
          }
        }
      ]
    },
    {
      "id": "n_13a",
      "chapter": "护士线 第三章：被误解的人",
      "bgm": "nurse",
      "image": "nurse",
      "speaker": "旁白",
      "text": "你没有抢走她的处理权，而是轻声请围观的人往后退，帮另一位护士把病房门口留出通道。\n巨哼回头看了你一眼，只有一秒，却足够让你明白：她注意到了。\n混乱没有立刻结束，但至少不再继续扩大。",
      "next": "n_14"
    },
    {
      "id": "n_13b",
      "chapter": "护士线 第三章：被误解的人",
      "bgm": "nurse",
      "image": "nurse",
      "speaker": "旁白",
      "text": "你替她解释了几句。家属的情绪稍微缓了一点，但巨哼很快接回话头，把重点重新拉回病人的检查安排。\n事后她对你说谢谢，也说：下次先看情况，不要让对方觉得我们在联合压他。",
      "next": "n_14"
    },
    {
      "id": "n_13c",
      "chapter": "护士线 第三章：被误解的人",
      "bgm": "nurse",
      "image": "nurse",
      "speaker": "旁白",
      "text": "你没忍住提高声音，结果家属的情绪更激动。\n巨哼不得不一边安抚对方，一边把你请出病房。她没有生气，却明显比刚才更累。\n你想帮她，却把她要处理的事情变得更复杂。",
      "next": "n_14"
    },
    {
      "id": "n_14",
      "chapter": "护士线 第三章：被误解的人",
      "bgm": "nurse",
      "image": "nurse",
      "speaker": "旁白",
      "text": "事件结束后，巨哼一个人坐在楼梯间。她没有哭，只是把脸埋在掌心里，像想暂时从护士这个身份里退出来几分钟。\n你站在门口，第一次意识到，温柔的人崩溃时往往没有声音。",
      "choices": [
        {
          "text": "坐到旁边，不说大道理，只陪她安静一会儿",
          "next": "n_15a",
          "delta": {
            "understand": 2,
            "trust": 2
          },
          "set": {
            "nurse_silence": true
          }
        },
        {
          "text": "告诉她不要把那些话放在心上",
          "next": "n_15b",
          "delta": {
            "love": 1
          }
        },
        {
          "text": "追问她是不是经常遇到这种事",
          "next": "n_15c",
          "delta": {
            "understand": 1
          }
        }
      ]
    },
    {
      "id": "n_15a",
      "chapter": "护士线 第三章：被误解的人",
      "bgm": "nurse",
      "image": "nurse",
      "speaker": "巨哼",
      "text": "过了很久，她才开口。\n你怎么不劝我？\n你说，因为你现在可能不需要被教育，只需要有人确认你已经很努力了。\n她的眼眶红了一点，却仍然倔强地没有让眼泪掉下来。",
      "next": "n_16"
    },
    {
      "id": "n_15b",
      "chapter": "护士线 第三章：被误解的人",
      "bgm": "nurse",
      "image": "nurse",
      "speaker": "巨哼",
      "text": "放不放在心上，不是按开关。\n她抬起头，声音有些哑。\n我能理解他们着急，也知道很多话不是冲我个人。但理解不代表不会疼。",
      "next": "n_16"
    },
    {
      "id": "n_15c",
      "chapter": "护士线 第三章：被误解的人",
      "bgm": "nurse",
      "image": "nurse",
      "speaker": "巨哼",
      "text": "经常。\n她回答得太快，快到像不想让自己犹豫。\n但也经常会有人认真说谢谢。人不能只记得坏的，不然很难继续做下去。",
      "next": "n_16"
    },
    {
      "id": "n_16",
      "chapter": "护士线 第四章：今天换我照顾你",
      "bgm": "nurse",
      "image": "nurse",
      "speaker": "旁白",
      "text": "几天后，朋友出院。你本以为和巨哼的交集会到此结束，却在协和医院门口看见她扶着墙站了一会儿。\n她脸色比平时白，额头有细汗。可她抬头看见你时，第一句话仍然是：你朋友出院手续办完了吗？",
      "next": "n_17"
    },
    {
      "id": "n_17",
      "chapter": "护士线 第四章：今天换我照顾你",
      "bgm": "nurse",
      "image": "nurse",
      "speaker": "巨哼",
      "text": "我没事，只是有点低血糖。\n她试图站直，结果动作明显慢了一拍。\n你忽然有点生气。不是对她，而是对那个总把“没事”说得太顺口的习惯。",
      "choices": [
        {
          "text": "去买糖和热粥，请她坐下休息",
          "next": "n_18a",
          "delta": {
            "love": 2,
            "understand": 2
          },
          "set": {
            "nurse_care": true
          }
        },
        {
          "text": "联系她同事，说明她可能需要换班",
          "next": "n_18b",
          "delta": {
            "trust": 2,
            "understand": 1
          }
        },
        {
          "text": "责备她怎么这么不会照顾自己",
          "next": "n_18c",
          "delta": {
            "love": 1,
            "trust": -1
          }
        }
      ]
    },
    {
      "id": "n_18a",
      "chapter": "护士线 第四章：今天换我照顾你",
      "bgm": "nurse",
      "image": "nurse",
      "speaker": "旁白",
      "text": "你没有给她争辩的机会，只是把热粥放到她手边，又把糖拆开。\n巨哼本来想说什么，最后只是小声嘀咕：你们患者家属现在都这么熟练了吗？\n她吃了一口粥，眼神终于从紧绷里松下来。",
      "next": "n_19"
    },
    {
      "id": "n_18b",
      "chapter": "护士线 第四章：今天换我照顾你",
      "bgm": "nurse",
      "image": "nurse",
      "speaker": "巨哼",
      "text": "她听见你联系同事，第一反应是想阻止。\n可电话那头的护士长只说：让她休息，别逞强。\n巨哼挂断电话后沉默很久，像一个总是照顾别人的人，突然被整个世界按回椅子上。",
      "next": "n_19"
    },
    {
      "id": "n_18c",
      "chapter": "护士线 第四章：今天换我照顾你",
      "bgm": "nurse",
      "image": "nurse",
      "speaker": "巨哼",
      "text": "她低下头，没有立刻反驳。\n我知道你是担心。\n但“不会照顾自己”这句话，听起来像我做错了什么。其实有时候，我只是没有余力了。\n你的责备变成了她新的负担。",
      "next": "n_19"
    },
    {
      "id": "n_19",
      "chapter": "护士线 第四章：今天换我照顾你",
      "bgm": "nurse",
      "image": "nurse",
      "speaker": "旁白",
      "text": "休息室里，窗外的阳光落在白色墙面上，干净得不像医院。\n巨哼捧着热粥，忽然说自己以前也想过换一份轻松一点的工作。\n但每次看到病人出院时松一口气的样子，她又会觉得，至少今天坚持下来是有意义的。",
      "next": "n_20"
    },
    {
      "id": "n_20",
      "chapter": "护士线 第四章：今天换我照顾你",
      "bgm": "nurse",
      "image": "nurse",
      "speaker": "巨哼",
      "text": "照顾别人很习惯，被照顾……反而有点不适应。\n她看着你，眼神里有一点难为情。\n如果我以后又说“没事”，你能不能不要急着拆穿我？可以先坐在旁边，等我自己承认。",
      "choices": [
        {
          "text": "可以。我会等，也会记得给你留一杯热的",
          "next": "n_end_good",
          "delta": {
            "love": 3,
            "understand": 2,
            "trust": 2
          },
          "set": {
            "nurse_promise": true
          }
        },
        {
          "text": "那我以后常来看你",
          "next": "n_end_normal",
          "delta": {
            "love": 1,
            "trust": 1
          }
        },
        {
          "text": "你这样太让人操心了",
          "next": "n_end_bad",
          "delta": {
            "understand": -2
          }
        }
      ]
    },
    {
      "id": "n_end_good",
      "chapter": "护士线 结局：今天换我照顾你",
      "bgm": "nurse",
      "image": "nurse",
      "speaker": "巨哼",
      "text": "休假那天，你们去了朝阳公园。风从湖面吹过来，远处有人遛狗，也有人在草地上晒太阳。\n她靠在长椅上，阳光从树叶缝里落下来。巨哼闭着眼睛说：原来被人惦记，是这种感觉。\n你没有回答，只是把外套轻轻盖在她肩上。她没有拒绝。",
      "memory": {
        "nurse_good": true
      },
      "ending": "good",
      "title": "Good Ending：《今天换我照顾你》"
    },
    {
      "id": "n_end_normal",
      "chapter": "护士线 结局：护士站的便签",
      "bgm": "nurse",
      "image": "nurse",
      "speaker": "旁白",
      "text": "你们保持着温暖的联系。她偶尔会在护士站收到你送来的便当，你也会收到她写的便签：不要熬夜，按时吃饭。\n关系像一杯温水，不够热烈，却一直在。",
      "memory": {
        "nurse_normal": true
      },
      "ending": "normal",
      "title": "Normal Ending：《护士站的便签》"
    },
    {
      "id": "n_end_bad",
      "chapter": "护士线 结局：空掉的夜班座位",
      "bgm": "nurse",
      "image": "nurse",
      "speaker": "旁白",
      "text": "你的关心渐渐变成压力。巨哼开始减少和你的联系。\n后来你再去医院，护士站的人说她调去了其他科室。那个曾经递给你温水的位置空了下来，像一盏被悄悄关掉的灯。",
      "memory": {
        "nurse_bad": true
      },
      "ending": "bad",
      "title": "Bad Ending：《空掉的夜班座位》"
    },
    {
      "id": "cross_gate",
      "chapter": "交叉线：雨夜展览",
      "bgm": "common",
      "image": "lolita",
      "speaker": "旁白",
      "text": "亮马河步道的北京城市影像展在雨夜亮起。三里屯方向的灯光隔着水面晃动，像把整个城市揉进了倒影里。你看见三张照片被并排放在同一面墙上：五道营茶室窗边的裙装少女、国贸玻璃幕墙里的项目经理、医院走廊尽头的护士。\n你越看越觉得，她们像同一个人在人生不同选择下留下的回声。",
      "next": "cross_01"
    },
    {
      "id": "cross_01",
      "chapter": "交叉线：雨夜展览",
      "bgm": "common",
      "image": "office",
      "speaker": "旁白",
      "text": "展板下面写着一句话：你喜欢的到底是她的样子，还是她真正的自己？\n雨声落在伞面上，你忽然收到一条没有署名的消息。\n“如果我不再是你见过的任何一种样子，你还会来见我吗？”",
      "choices": [
        {
          "text": "回复：我想见真正的你",
          "next": "true_teaser",
          "delta": {
            "understand": 2,
            "trust": 1
          },
          "require": {
            "goodCount": 2
          }
        },
        {
          "text": "先回到分线选择，继续了解她的其他样子",
          "next": "start"
        }
      ]
    },
    {
      "id": "true_teaser",
      "chapter": "Final 预告：巨哼，就是巨哼",
      "bgm": "common",
      "image": "nurse",
      "speaker": "巨哼",
      "text": "那就继续走下去吧。\n真正的路线还没有完全打开。等你收集更多 Good Ending，烟火大会那天，我会以最自然的样子出现。\n到时候，不许只喜欢我的某一种样子。",
      "memory": {
        "true_teaser": true
      },
      "ending": "teaser",
      "title": "True Ending 预告：《巨哼，就是巨哼》"
    }
  ]
};
