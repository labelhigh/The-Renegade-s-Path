import { StoryData } from '../types';

const PLAYER_ID = 'player';
const LONG_XIAOTIAN_ID = 'long_xiaotian';
const TIE_NIU_ID = 'tien_niu';
const SHEN_CANG_ID = 'shen_cang';
const TRAITOR_ID = 'traitor';
const LAO_GUI_ID = 'lao_gui';
const XINGER_ID = 'xinger';


// --- Character Info ---
const PLAYER_NAME = '蕭遠';
const LONG_XIAOTIAN_NAME = '龍嘯天';
const LONG_XIAOTIAN_TITLE = '赤龍寨大當家';
const TIE_NIU_NAME = '鐵牛';
const TIE_NIU_TITLE = '赤龍寨先鋒';
const SHEN_CANG_NAME = '沈蒼';
const SHEN_CANG_TITLE = '繡衣使者指揮使';
const TRAITOR_NAME = '瘦猴';
const TRAITOR_TITLE = '赤龍寨兄弟';
const LAO_GUI_NAME = '老鬼';
const LAO_GUI_TITLE = '赤龍寨軍師';
const XINGER_NAME = '杏兒';
const XINGER_TITLE = '村民';


// --- Character Portraits ---
const PORTRAIT_LONG_XIAOTIAN = 'https://i.pinimg.com/1200x/de/41/a4/de41a42050ade0505f5bd16aa077a748.jpg'; // 龍嘯天頭像 (Long Xiaotian's portrait)
const PORTRAIT_PLAYER = 'https://i.pinimg.com/1200x/a3/fc/f5/a3fcf5ecd30980861fd6418171db8250.jpg'; // 玩家頭像 (Player's portrait)
const PORTRAIT_TIE_NIU = 'https://i2.kknews.cc/dTj4bHzgEqeM_pEv-SeJuV-Az95ODhz6LWJtUNw/0.jpg'; // 鐵牛頭像 (Tie Niu's portrait)
const PORTRAIT_SHEN_CANG = 'https://i.pinimg.com/736x/d1/66/92/d16692b78ee2dbb24a2dbb175ebcdf81.jpg'; // 沈蒼頭像 (Shen Cang's portrait)
const PORTRAIT_TRAITOR = 'https://i.pinimg.com/736x/eb/0a/64/eb0a641ab6a8c7da1e31d795b29d2f62.jpg'; // 瘦猴頭像 (Skinny Monkey's portrait)
const PORTRAIT_LAO_GUI = 'https://i.pinimg.com/1200x/38/91/d7/3891d7388809b0cfed0c1aa6d6b112e7.jpg'; // 老鬼頭像 (Lao Gui's portrait)
const PORTRAIT_XINGER = 'https://i.pinimg.com/736x/0a/bc/14/0abc144703659cc7fe4205c4c4308539.jpg'; // 杏兒頭像 (Xing'er's portrait)


export const story: StoryData = {
  // --- ACT 1: 開場，山神廟中的抉擇 ---
  start: {
    // SCENE: 破敗的山神廟內部，風雪交加的夜晚。
    // DESCRIPTION: 廟宇內部光線昏暗，只有一堆篝火提供微弱的光源，在斑駁的牆壁和殘破的神像上投下長長的影子。從破損的門窗可以看到外面的風雪。氣氛凝重、壓抑，充滿了絕望感。
    // PROMPT: Chinese ink wash painting, wuxia movie still. Interior of a dilapidated, ancient mountain temple at night. Wide shot. A single flickering campfire casts long, dramatic shadows. Three weary warriors huddle for warmth: a fierce leader (Long Xiaotian), a burly strongman (Tie Niu), and the player character (Xiao Yuan). Through a broken doorway, a fierce snowstorm is visible. Somber, tense atmosphere, muted colors, hyper-detailed, cinematic lighting.
    image: 'https://meee.com.tw/XnBy3jq.png',
    music: 'https://cdn.pixabay.com/audio/2025/09/23/audio_59ed1f351b.mp3',
    sprites: [
        { id: PLAYER_ID, image: PORTRAIT_PLAYER, position: 'left', visible: true, name: PLAYER_NAME },
        { id: LONG_XIAOTIAN_ID, image: PORTRAIT_LONG_XIAOTIAN, position: 'right', visible: true, name: LONG_XIAOTIAN_NAME, title: LONG_XIAOTIAN_TITLE },
        { id: TIE_NIU_ID, image: PORTRAIT_TIE_NIU, position: 'center', visible: true, name: TIE_NIU_NAME, title: TIE_NIU_TITLE },
    ],
    description: [
      '天色陰沉，冰冷的雨水混雜著雪粒抽打在你的斗笠上。',
      '你和大哥龍嘯天帶著赤龍寨剩下的十幾個兄弟，剛從一場繡衣使者的圍剿中死裡逃生。',
      '你們躲在一個破敗的山神廟裡，氣氛凝重。廟外，風聲鶴唳，似乎還能聽到遠處的搜山犬吠。',
    ],
    dialogue: {
      speaker: '龍嘯天',
      speakerId: LONG_XIAOTIAN_ID,
      lines: [
        '老二，我們斷糧了。',
        '鐵牛他們幾個都快扛不住了。',
        '東邊的山下有個張家村，雖然窮，但總有點存糧。你去一趟，「拿」些吃的回來。',
        '記住，要快，別留活口，免得暴露我們的行蹤。',
      ],
    },
    situation:
      '龍嘯天的命令充滿了血腥味，這與你們最初「只劫不義之財」的宗旨背道而馳。兄弟們都飢腸轆轆地看著你，等待你的決定。你是要執行命令，還是另有打算？',
    choices: [
      {
        text: '【執行命令】為了兄弟們，只能心狠手辣。',
        nextSceneId: 'slaughter_village',
        effects: { righteousness: -20, flags: { obeyed_long_xiaotian: true } },
      },
      {
        text: '【提出質疑】大哥，我們何時淪落到要對百姓動手了？',
        nextSceneId: 'question_order',
        effects: { righteousness: 5, flags: { questioned_long_xiaotian: true } },
      },
      {
        text: '【提出替代方案】大哥稍安勿躁，我去附近探查，或可打些野味，或尋他法。',
        nextSceneId: 'hunt_for_food',
        effects: { righteousness: 2, internalEnergy: -5 },
      },
    ],
  },
  // --- 路線: 執行命令，屠戮村莊 ---
  slaughter_village: {
    // SCENE: 被火焰吞噬的村莊，深夜。
    // DESCRIPTION: 一個貧窮的小村莊在黑夜中熊熊燃燒。茅草屋頂的房屋成為巨大的火炬，濃煙和火星竄入夜空。畫面中沒有平民，只有火光映照下，主角冷酷的身影，以及遠處同樣冷漠的大哥。這是一個充滿悲劇和殘酷的場景。
    // PROMPT: Chinese ink wash painting, wuxia movie still. A small, poor Chinese village at night is engulfed in flames. Wide shot. Burning thatched-roof huts send embers and thick black smoke into the night sky. The player character (Xiao Yuan) and his leader (Long Xiaotian) are silhouetted against the inferno, their faces grimly illuminated by fire. Tragic and brutal atmosphere, strong contrast between fire and darkness, hyper-detailed.
    image: 'https://meee.com.tw/0kJ52gW.png',
    music: 'https://cdn.pixabay.com/audio/2024/08/20/audio_243433888d.mp3',
    sprites: [
        { id: PLAYER_ID, image: PORTRAIT_PLAYER, position: 'left', visible: true, name: PLAYER_NAME },
        { id: LONG_XIAOTIAN_ID, image: PORTRAIT_LONG_XIAOTIAN, position: 'right', visible: true, name: LONG_XIAOTIAN_NAME, title: LONG_XIAOTIAN_TITLE },
    ],
    description: [
      '你握緊了手中的劍柄，壓下心中的不忍。生存，是現在唯一重要的事。',
      '你叫了幾個兄弟，藉著夜色摸進了張家村。村子很小，土坯房在寒風中瑟瑟發抖。',
      '行動異常順利，村民們手無寸鐵，面對你們這些如狼似虎的江湖人，只有絕望的哭喊。',
      '你們帶走了村裡僅存的糧食，身後，是沖天的火光和死一般的寂靜。',
    ],
    dialogue: {
      speaker: '龍嘯天',
      speakerId: LONG_XIAOTIAN_ID,
      lines: [
        '很好。老二，你果然沒讓我失望。',
        '這世道，仁慈是多餘的。只有活下去，才有資格談對錯。',
      ],
    },
    situation:
      '你帶回了足夠的糧食，山寨暫時擺脫了危機，但你腰間的劍似乎沉重了許多。你得到了龍嘯天的讚許，卻失去了一些東西。接下來該何去何從？',
    choices: [
      { text: '我們得盡快離開這裡。', nextSceneId: 'flee_mountain' },
    ],
  },
  // --- 路線: 質疑命令，引發衝突 ---
  question_order: {
    // SCENE: 破敗的山神廟內部，氣氛劍拔弩張。
    // DESCRIPTION: 與開場相同的場景，但焦點變為龍嘯天和主角的對峙。龍嘯天怒不可遏，他剛用刀劈砍了旁邊的柱子，木屑飛濺。鐵牛夾在中間，神色緊張。燈光應更具戲劇性，強調衝突。
    // PROMPT: Chinese ink wash painting, wuxia movie still. Interior of a dilapidated, ancient mountain temple. Medium shot focusing on a tense confrontation. A furious warrior leader (Long Xiaotian) stands with his broadsword embedded in a wooden pillar. The player character (Xiao Yuan) faces him defiantly. Another large warrior (Tie Niu) stands between them, looking worried. Dramatic, low-key lighting from a single lantern, creating deep shadows. Tense, confrontational atmosphere, muted colors, hyper-detailed.
    image: 'https://meee.com.tw/FVz8VON.png',
    music: 'https://cdn.pixabay.com/audio/2025/08/29/audio_c26df4b805.mp3',
     sprites: [
        { id: PLAYER_ID, image: PORTRAIT_PLAYER, position: 'left', visible: true, name: PLAYER_NAME },
        { id: LONG_XIAOTIAN_ID, image: PORTRAIT_LONG_XIAOTIAN, position: 'right', visible: true, name: LONG_XIAOTIAN_NAME, title: LONG_XIAOTIAN_TITLE },
        { id: TIE_NIU_ID, image: PORTRAIT_TIE_NIU, position: 'center', visible: true, name: TIE_NIU_NAME, title: TIE_NIU_TITLE },
    ],
    description: [
      '你直視著龍嘯天的眼睛，語氣沉重地問出了口。一旁的老鬼微微皺了皺眉。',
      '龍嘯天的臉色瞬間陰沉下來，他手中的鬼頭刀「哐」地一聲劈在旁邊的柱子上，留下深深的刀痕。',
      '鐵牛見狀，趕忙上前一步，神色緊張地說：「二當家，別惹大哥生氣了！」',
    ],
     dialogue: {
      speaker: '龍嘯天',
      speakerId: LONG_XIAOTIAN_ID,
      lines: [
          '老二，你是在教我做事嗎？',
          '你看看兄弟們！他們快餓死了！我們的理想？理想能當飯吃嗎！'
      ],
    },
    situation:
      '龍嘯天正在氣頭上，你的質疑讓他感到了冒犯。此時強硬對抗並不明智。',
    choices: [
      {
        text: '大哥息怒，是我糊塗了。我這就去。',
        nextSceneId: 'slaughter_village',
        effects: { righteousness: -15 },
      },
      {
        text: '大哥，我不是那個意思。但屠村動靜太大，更容易暴露。請三思。',
        nextSceneId: 'suggest_alternative_logic',
        effects: { righteousness: 5 },
      },
    ],
  },
  // --- 分支: 以暴露風險為由勸說龍嘯天 ---
  suggest_alternative_logic: {
    // SCENE: 破敗的山神廟內部，老鬼介入。
    // DESCRIPTION: 焦點轉向一旁的老鬼，他神態冷靜，正在出言勸說。龍嘯天在背景中，怒氣稍息但仍在聽。畫面從激烈的衝突轉為短暫的、充滿智謀的平靜。
    // PROMPT: Chinese ink wash painting, wuxia movie still. Interior of a dilapidated mountain temple. Focus on an old, wise strategist (Lao Gui) with a long beard, calmly speaking. The furious leader (Long Xiaotian) is slightly out of focus in the background, listening. The player character is also visible. The atmosphere is less heated, more contemplative. Soft, diffused lighting. Muted colors, hyper-detailed.
    image: 'https://meee.com.tw/YFnc3jn.png',
    music: 'https://cdn.pixabay.com/audio/2025/08/29/audio_c26df4b805.mp3',
    sprites: [
        { id: PLAYER_ID, image: PORTRAIT_PLAYER, position: 'left', visible: true, name: PLAYER_NAME },
        { id: LONG_XIAOTIAN_ID, image: PORTRAIT_LONG_XIAOTIAN, position: 'right', visible: false, name: LONG_XIAOTIAN_NAME, title: LONG_XIAOTIAN_TITLE },
        { id: LAO_GUI_ID, image: PORTRAIT_LAO_GUI, position: 'center', visible: true, name: LAO_GUI_NAME, title: LAO_GUI_TITLE },
    ],
    description: [
        '你的話讓龍嘯天稍微冷靜了一些。',
        '一旁沉默的老鬼此時也開口了。'
    ],
    dialogue: {
        speaker: '老鬼',
        speakerId: LAO_GUI_ID,
        lines: [
            '大當家，二當家言之有理。屠村風險太大，一旦引來大批繡衣使者，我們插翅難飛。',
            '不如讓二當家去試試，他身手好，打些野味回來，也能解燃眉之急。'
        ]
    },
    nextSceneId: 'alternative_accepted'
  },
  // --- 分支: 龍嘯天接受替代方案 ---
  alternative_accepted: {
      // SCENE: 破敗的山神廟內部，龍嘯天不耐煩地揮手。
      // DESCRIPTION: 龍嘯天一臉不悅，但還是接受了建議。他對主角揮手，示意他快去快回。緊張的氣氛有所緩和，但依然沉重。
      // PROMPT: Chinese ink wash painting, wuxia movie still. Interior of a dilapidated mountain temple. A powerful warrior leader (Long Xiaotian), looking annoyed, waves his hand dismissively at the player character (Xiao Yuan). The tension has subsided but the mood is still grim. Muted colors, hyper-detailed.
      image: 'https://i.meee.com.tw/pzCXQhr.png',
      music: 'https://cdn.pixabay.com/audio/2025/08/17/audio_2fc2fdbdd2.mp3',
      sprites: [
          { id: PLAYER_ID, image: PORTRAIT_PLAYER, position: 'left', visible: true, name: PLAYER_NAME },
          { id: LONG_XIAOTIAN_ID, image: PORTRAIT_LONG_XIAOTIAN, position: 'right', visible: true, name: LONG_XIAOTIAN_NAME, title: LONG_XIAOTIAN_TITLE },
      ],
      description: [
          '龍嘯天沉吟片刻，最終不耐煩地揮了揮手。'
      ],
      dialogue: {
          speaker: '龍嘯天',
          speakerId: LONG_XIAOTIAN_ID,
          lines: [
              '哼，好吧！老二，就按你說的辦！',
              '要是天黑前看不到吃的，我們就按原計畫行動！'
          ]
      },
      choices: [
          { text: '領命前去打獵。', nextSceneId: 'hunt_for_food', effects: { internalEnergy: -5 } }
      ]
  },
  // --- 路線: 替代方案，進山打獵 ---
  hunt_for_food: {
      // SCENE: 暴風雪中的深山密林。
      // DESCRIPTION: 主角獨自一人在深及膝蓋的雪地中艱難前行。周圍是枯槁的樹木，風雪遮蔽了視線，整個世界一片蒼茫。這是一個展現孤獨和惡劣自然環境的場景。
      // PROMPT: Chinese ink wash painting, wuxia movie still. A lone warrior (player character, Xiao Yuan) tracks through a dense, snowy forest during a blizzard. Wide shot showing the vast, unforgiving landscape. Deep snow, gnarled ancient trees, and falling snow obscure the view. The warrior looks determined but cold. Harsh, isolating atmosphere, monochromatic palette with shades of grey and white, hyper-detailed.
      image: 'https://i.meee.com.tw/R4tnXte.png',
      music: 'https://cdn.pixabay.com/audio/2025/05/21/audio_f8f411db55.mp3',
      sprites: [
          { id: PLAYER_ID, image: PORTRAIT_PLAYER, position: 'center', visible: true, name: PLAYER_NAME },
      ],
      description: [
          '你說服了龍嘯天，獨自一人走進了風雪交加的山林。',
          '林中積雪很深，野獸的蹤跡難尋。你消耗了大量內力，才在一處山坳發現了線索。',
          '追蹤過程中，你不慎被一個被積雪掩蓋的捕獸夾夾傷了腿。雖然傷勢不重,但鮮血直流，行動受到了影響。',
          '正當你處理傷口時，你聞到了一股淡淡的草藥味，不遠處似乎有微弱的光亮。'
      ],
      situation: '你的腿受了傷，但似乎附近有人家。',
      choices: [
          { text: '循著光亮和藥味找去。', nextSceneId: 'meet_xinger' },
          { text: '風險太大，自行處理傷口繼續打獵。', nextSceneId: 'hunt_alone_success' },
      ]
  },
  // --- 分支: 仁德路線，遇見杏兒 ---
  meet_xinger: {
      // SCENE: 雪林中的溫暖茅屋。
      // DESCRIPTION: 在一片白雪皚皚的林中空地上，有一間小小的茅草屋，門口掛著草藥，煙囪冒著炊煙，散發出溫暖的燈光。少女杏兒正在門口幫助受傷的主角，畫面溫馨、寧靜，與外界的殘酷形成鮮明對比。
      // PROMPT: Chinese ink wash painting, wuxia movie still. Exterior of a small, cozy thatched-roof hut in a snowy forest clearing. A gentle, kind-faced young woman (Xing'er) is tending to the leg wound of a weary warrior (player character, Xiao Yuan) at the entrance. Warm light spills from the open doorway. A feeling of sanctuary and kindness in a harsh world. Soft lighting, muted colors with a warm glow, hyper-detailed.
      image: 'https://i.meee.com.tw/0gDAqK1.png',
      music: 'https://cdn.pixabay.com/audio/2025/05/21/audio_f8f411db55.mp3',
      sprites: [
          { id: PLAYER_ID, image: PORTRAIT_PLAYER, position: 'left', visible: true, name: PLAYER_NAME },
          { id: XINGER_ID, image: PORTRAIT_XINGER, position: 'right', visible: true, name: XINGER_NAME, title: XINGER_TITLE },
      ],
      description: [
          '你一瘸一拐地靠近，發現那是一間隱藏在林中的茅屋。一個清秀的少女正在門口晾曬草藥，看到你腿上的傷，她驚呼一聲，立刻提著藥箱跑了過來。',
          '「這位大哥，你受傷了！快請進，我幫你包紮一下。」',
          '少女自稱杏兒，是村裡郎中的女兒，來山裡採藥。她的善良和純真，在這混亂的世道裡，如同一縷溫暖的陽光。',
          '她不僅為你處理了傷口，還分給你一些乾糧和肉乾。'
      ],
      dialogue: {
          speaker: '杏兒',
          speakerId: XINGER_ID,
          lines: [
              '這世道太亂了，大哥你一個人行走江湖要多加小心。',
              '這些食物你帶上吧，我們雖然窮，但互相幫助還是能做到的。'
          ]
      },
      situation: '杏兒的善舉讓你心中五味雜陳。你腰間的劍，是為了保護這樣的人，還是會成為傷害他們的兇器？',
      choices: [
          { text: '【道謝離開】記下這份恩情，繼續尋找食物。', nextSceneId: 'return_with_food_xinger', effects: { righteousness: 10, flags: { met_xinger: true } } },
          { text: '【留下銀兩】你不能白拿她的東西。', nextSceneId: 'return_with_food_xinger', effects: { righteousness: 15, money: -10, flags: { met_xinger: true, paid_xinger: true } } },
      ]
  },
  // --- 分支: 獨自打獵，成功但受傷 ---
  hunt_alone_success: {
      // SCENE: 雪地中的血腥戰利品。
      // DESCRIPTION: 主角雖然腿部受傷，但成功獵殺了一頭巨大的野豬。他站在野豬的屍體旁，身心俱疲，但眼神堅定。周圍的白雪被鮮血染紅，畫面充滿了原始的、殘酷的生存氣息。
      // PROMPT: Chinese ink wash painting, wuxia movie still. In a snowy, windswept forest, the lone warrior (player character, Xiao Yuan), looking exhausted and with a wounded leg, stands triumphantly over a massive, slain wild boar. Snow is stained with blood. Primal and victorious atmosphere. Muted colors with stark red contrast, hyper-detailed.
      image: 'https://i.meee.com.tw/ze3tWl4.png',
      music: 'https://cdn.pixabay.com/audio/2024/11/04/audio_1b51ca183b.mp3',
      sprites: [
          { id: PLAYER_ID, image: PORTRAIT_PLAYER, position: 'center', visible: true, name: PLAYER_NAME },
      ],
      description: [
          '你決定不節外生枝。你簡單包紮了傷口，忍著疼痛繼續追蹤。',
          '皇天不負苦心人，你最終成功獵殺了一頭巨大的野豬。',
          '拖著沉重的獵物和受傷的腿，你筋疲力盡地返回了山神廟。'
      ],
      nextSceneId: 'return_with_food_boar'
  },
  // --- 結局: 帶回食物（遇見杏兒後） ---
  return_with_food_xinger: {
      // SCENE: 山神廟內的短暫歡愉。
      // DESCRIPTION: 主角帶著獵物和食物歸來，兄弟們圍著篝火歡呼雀躍，暫時忘卻了飢餓和危險。老鬼在一旁若有所思，龍嘯天則表情複雜。這是在絕境中的一絲喘息。
      // PROMPT: Chinese ink wash painting, wuxia movie still. Interior of a dilapidated mountain temple. The player character (Xiao Yuan) presents a slain deer to his cheering, hungry comrades around a campfire. The wise strategist (Lao Gui) nods approvingly, while the leader (Long Xiaotian) looks on with a grudging expression. A moment of relief and hope in a grim setting. Warm firelight, muted colors, hyper-detailed.
      image: 'https://i.meee.com.tw/s8y4m9p.png',
      music: 'https://cdn.pixabay.com/audio/2024/11/04/audio_1b51ca183b.mp3',
      sprites: [
          { id: PLAYER_ID, image: PORTRAIT_PLAYER, position: 'left', visible: true, name: PLAYER_NAME },
          { id: LONG_XIAOTIAN_ID, image: PORTRAIT_LONG_XIAOTIAN, position: 'right', visible: true, name: LONG_XIAOTIAN_NAME, title: LONG_XIAOTIAN_TITLE },
          { id: LAO_GUI_ID, image: PORTRAIT_LAO_GUI, position: 'center', visible: true, name: LAO_GUI_NAME, title: LAO_GUI_TITLE },
      ],
      description: [
          '離開杏兒後，你的運氣似乎好了起來，很快便獵到了一隻肥碩的山鹿。',
          '你帶著獵物和杏兒給的食物回到山神廟，兄弟們發出了一陣歡呼。老鬼看著你包紮好的傷口，若有所思地點了點頭。'
      ],
      dialogue: {
          speaker: '龍嘯天',
          speakerId: LONG_XIAOTIAN_ID,
          lines: ['哼，算你運氣好。'],
      },
      situation: '你避免了一場殺戮，保住了自己的底線，也讓兄弟們填飽了肚子。雖然龍嘯天有些不悅，但總算解決了眼前的危機。',
      choices: [
         { text: '我們得盡快離開這裡。', nextSceneId: 'flee_mountain' },
      ],
  },
  // --- 結局: 帶回食物（獨自打獵） ---
  return_with_food_boar: {
      // SCENE: 山神廟內的短暫歡愉（野豬版）。
      // DESCRIPTION: 與前一個場景類似，但戰利品是巨大的野豬，更顯得原始和艱辛。主角的疲憊和傷勢也更為明顯。
      // PROMPT: Chinese ink wash painting, wuxia movie still. Interior of a dilapidated mountain temple. The player character (Xiao Yuan), visibly injured, drags a massive slain wild boar before his cheering comrades around a campfire. The leader (Long Xiaotian) looks on with a grudging expression. Atmosphere of raw survival and relief. Flickering firelight, muted colors, hyper-detailed.
      image: 'https://i.meee.com.tw/zwQ9kIu.png',
      music: 'https://cdn.pixabay.com/audio/2024/11/04/audio_1b51ca183b.mp3',
      sprites: [
          { id: PLAYER_ID, image: PORTRAIT_PLAYER, position: 'left', visible: true, name: PLAYER_NAME },
          { id: LONG_XIAOTIAN_ID, image: PORTRAIT_LONG_XIAOTIAN, position: 'right', visible: true, name: LONG_XIAOTIAN_NAME, title: LONG_XIAOTIAN_TITLE },
      ],
      description: [
          '你拖著數百斤的野豬回到山神廟，兄弟們發出了一陣歡呼。',
          '你的腿傷雖然不重，但也需要休養。'
      ],
      dialogue: {
          speaker: '龍嘯天',
          speakerId: LONG_XIAOTIAN_ID,
          lines: ['哼，總算沒讓我失望。'],
      },
      situation: '你避免了一場殺戮，保住了自己的底線，也讓兄弟們填飽了肚子。雖然龍嘯天有些不悅，但總算解決了眼前的危機。',
      choices: [
         { text: '我們得盡快離開這裡。', nextSceneId: 'flee_mountain' },
      ],
  },
  // --- ACT 1 結尾: 逃離山區，鐵牛犧牲 ---
  flee_mountain: {
      // SCENE: 險峻的雪山峽谷，悲壯的斷後。
      // DESCRIPTION: 在一個狹窄、險峻的雪山隘口，赤龍寨的殘部正在倉皇逃離。遠景處，高大魁梧的鐵牛獨自一人，面對著數倍於己的、身穿制式盔甲的繡衣使者，進行著一場註定失敗的戰鬥。這是一個充滿史詩感和悲劇色彩的畫面。
      // PROMPT: Chinese ink wash painting, wuxia movie still. A group of desperate warriors flee through a treacherous, narrow mountain gorge in a snowstorm. Low angle shot. In the distance, a heroic, muscular warrior (Tie Niu) makes a last stand, holding off numerous shadowy enemies to cover the retreat. Epic, tragic atmosphere, monochromatic palette, hyper-detailed.
      image: 'https://i.meee.com.tw/p8Zb1cg.png',
      music: 'https://cdn.pixabay.com/audio/2024/10/07/audio_401020d70a.mp3',
      sprites: [
        { id: PLAYER_ID, image: PORTRAIT_PLAYER, position: 'left', visible: true, name: PLAYER_NAME },
        { id: LONG_XIAOTIAN_ID, image: PORTRAIT_LONG_XIAOTIAN, position: 'right', visible: true, name: LONG_XIAOTIAN_NAME, title: LONG_XIAOTIAN_TITLE },
        { id: TIE_NIU_ID, image: PORTRAIT_TIE_NIU, position: 'center', visible: true, name: TIE_NIU_NAME, title: TIE_NIU_TITLE }
      ],
      description: [
          '簡單休整後，你們決定連夜突圍，前往南方的「洛城」尋找新的機會。',
          '繡衣使者的搜捕網果然在收緊。一路上，你們數次與巡邏的小隊遭遇，險象環生。',
          '在一處峽谷，你們中了埋伏。為了掩護大家撤退，寨中的先鋒「鐵牛」怒吼著獨自斷後，最終力竭被殺，身中數十刀。',
          '你們只能含淚遠去，悲傷和憤怒在每個人心中燃燒。'
      ],
      situation: '經歷了千辛萬苦，你們終於擺脫了追兵，抵達了洛城郊外。失去了家園和兄弟，僅存的希望，就是龍嘯天口中那「最後一票大的」。',
      choices: [
          { text: '（進入第二幕）', nextSceneId: 'act_2_start' }
      ]
  },
  // --- ACT 2: 開場，抵達洛城 ---
   act_2_start: {
      // SCENE: 洛城遠景，黃昏。
      // DESCRIPTION: 從城外的山丘上俯瞰，巨大的洛陽城盡收眼底。城牆高聳，城內燈火初上，宛如繁星。這座城市既代表著希望，也散發著未知的危險。主角和龍嘯天的身影在前景中顯得渺小。
      // PROMPT: Chinese ink wash painting, wuxia movie still. Panoramic wide shot of a massive, ancient Chinese walled city (Luocheng) at dusk, viewed from a nearby hill. The city is filled with countless lanterns and lights. Two warriors (player and Long Xiaotian) stand as small silhouettes on the hill, looking down at the sprawling metropolis. Atmosphere of awe and trepidation. Deep blues and oranges of twilight, hyper-detailed.
      image: 'https://i.meee.com.tw/fPo7Qsi.png',
      music: 'https://cdn.pixabay.com/audio/2025/06/10/audio_694646fccc.mp3',
      sprites: [
        { id: PLAYER_ID, image: PORTRAIT_PLAYER, position: 'left', visible: true, name: PLAYER_NAME },
        { id: LONG_XIAOTIAN_ID, image: PORTRAIT_LONG_XIAOTIAN, position: 'right', visible: true, name: LONG_XIAOTIAN_NAME, title: LONG_XIAOTIAN_TITLE },
      ],
      description: [
          '洛城，大乾王朝南方的明珠。這裡商賈雲集，三教九流混雜，是機會的天堂，也是罪惡的溫床。',
          '你們在城外的貧民窟找了個落腳點，昔日的江湖豪傑，如今只能與乞丐流寇為伍。',
          '龍嘯天的情緒愈發不穩定，鐵牛的死對他打擊很大，也讓他復仇的念頭更加瘋狂。'
      ],
      dialogue: {
          speaker: '龍嘯天',
          speakerId: LONG_XIAOTIAN_ID,
          lines: ['要幹那一票大的，我們需要錢，需要情報，還需要人手。', '老二，你去城裡轉轉，想辦法搞點銀子，順便打聽一下黑市的路子。別怕惹事，出了事，我擔著！']
      },
      situation: '你們初到洛城，人生地不熟。龍嘯天給了你一個模糊的指令，你該如何開始？',
      choices: [
          { text: '遵命，大哥。我這就進城。', nextSceneId: 'luocheng_hub' }
      ]
  },
  // --- 洛城探索中樞 ---
  luocheng_hub: {
      // SCENE: 洛城繁華的市井街道。
      // DESCRIPTION: 一條人來人往、充滿活力的古代城市街道。街道兩旁是各式各樣的店鋪、茶館和食肆，掛著形形色色的招幌。行人中有富商、小販、官差、藝人，三教九流匯聚於此。主角混在人群中，顯得格格不入。
      // PROMPT: Chinese ink wash painting, wuxia movie still. A bustling, crowded street market in a vibrant ancient Chinese city. Street-level view. The player character, in simple clothes, is lost in the crowd of merchants, guards, scholars, and beggars. Detailed traditional architecture, colorful banners, and steam rising from food stalls. Overwhelming, energetic atmosphere, muted but varied colors, hyper-detailed.
      image: 'https://i.meee.com.tw/luipW7v.png',
      music: 'https://cdn.pixabay.com/audio/2025/09/30/audio_6b98c6b208.mp3',
      sprites: [
          { id: PLAYER_ID, image: PORTRAIT_PLAYER, position: 'center', visible: true, name: PLAYER_NAME },
      ],
      description: [
          '你換上了一身不起眼的布衣，走進了洛城的喧囂之中。',
          '街道上人來人往，叫賣聲、馬蹄聲、孩童的嬉鬧聲不絕於耳，一片繁華景象之下，暗流湧動。',
          '你感覺有無數雙眼睛在暗中窺探，這裡的規矩，遠比山林更加複雜。'
      ],
      situation: '身處洛城，你決定先從何處著手？',
      choices: [
          { text: '【前往碼頭】漕幫的地盤，魚龍混雜，或許有賺錢的門路。', nextSceneId: 'heist_plan' },
          { text: '【前往市集】人多的地方，消息也多，先聽聽風聲。', nextSceneId: 'heist_plan' },
          { text: '【尋找黑市】最危險的地方，也藏著最大的機會。', nextSceneId: 'heist_plan' },
      ]
  },
  // --- 核心劇情：皇鏢計畫 ---
  heist_plan: {
      // SCENE: 貧民窟的秘密據點，昏暗的密室。
      // DESCRIPTION: 一個非常簡陋、髒亂的房間，是赤龍寨在洛城的藏身之處。龍嘯天在一張破桌子上攤開地圖，藉著一盞油燈的微光，神情狂熱地向眾人講解他的瘋狂計畫。
      // PROMPT: Chinese ink wash painting, wuxia movie still. A cramped, dimly lit secret room in a city slum hideout. A charismatic, crazed leader (Long Xiaotian) leans over a crude map on a table, his face intensely illuminated by a single flickering candle from below. Other warriors, including the player, are gathered around, their faces half in shadow, showing a mix of fear and excitement. Conspiratorial, tense atmosphere, chiaroscuro lighting, hyper-detailed.
      image: 'https://i.meee.com.tw/AHjXdmu.png',
      music: 'https://cdn.pixabay.com/audio/2025/09/30/audio_6b98c6b208.mp3',
      sprites: [
        { id: PLAYER_ID, image: PORTRAIT_PLAYER, position: 'left', visible: true, name: PLAYER_NAME },
        { id: LONG_XIAOTIAN_ID, image: PORTRAIT_LONG_XIAOTIAN, position: 'right', visible: true, name: LONG_XIAOTIAN_NAME, title: LONG_XIAOTIAN_TITLE },
      ],
      description: [
          '經過幾日的奔波，你初步摸清了洛城的勢力分佈，也搞到了一些銀兩。',
          '回到據點，龍嘯天召集了所有人，他的眼神中燃燒著瘋狂的火焰。'
      ],
      dialogue: {
          speaker: '龍嘯天',
          speakerId: LONG_XIAOTIAN_ID,
          lines: [
              '兄弟們，我查到了！三個月後，送往京城的南詔貢品會途經洛城！',
              '那可是價值百萬兩的奇珍異寶！只要幹成這一票，我們就能扯旗造反，為死去的兄弟們報仇！',
              '這就是我們的翻身仗！'
          ]
      },
      nextSceneId: 'heist_plan_reaction',
  },
  // --- 對皇鏢計畫的反應 ---
  heist_plan_reaction: {
      // SCENE: 昏暗的密室，眾人反應不一。
      // DESCRIPTION: 與前一場景相同，但焦點轉向眾人。主角和老鬼眉頭緊鎖，憂心忡忡，而其他兄弟則在龍嘯天的煽動下，露出了既興奮又恐懼的複雜表情。
      // PROMPT: Chinese ink wash painting, wuxia movie still. A cramped, dimly lit secret room in a city slum hideout. A charismatic, crazed leader (Long Xiaotian) leans over a crude map on a table. The player character and an old strategist (Lao Gui) look on with deep concern, while other gang members appear a mix of fearful and excited. Conspiratorial, tense atmosphere, chiaroscuro lighting, hyper-detailed.
      image: 'https://i.meee.com.tw/GrthTZj.png',
      music: 'https://cdn.pixabay.com/audio/2025/09/30/audio_6b98c6b208.mp3',
      sprites: [
        { id: PLAYER_ID, image: PORTRAIT_PLAYER, position: 'left', visible: true, name: PLAYER_NAME },
        { id: LONG_XIAOTIAN_ID, image: PORTRAIT_LONG_XIAOTIAN, position: 'right', visible: true, name: LONG_XIAOTIAN_TITLE, title: LONG_XIAOTIAN_TITLE },
        { id: LAO_GUI_ID, image: PORTRAIT_LAO_GUI, position: 'center', visible: true, name: LAO_GUI_NAME, title: LAO_GUI_TITLE },
      ],
      description: [
          '你心中一凜。搶劫皇鏢，這無異於自尋死路，與整個朝廷為敵。',
          '你看向周圍的兄弟，他們眼中既有興奮，也有恐懼。老鬼則眉頭緊鎖，顯然也意識到了其中的巨大風險。'
      ],
      situation: '龍嘯天的計畫無比瘋狂，你心中的不安日益加劇。',
      choices: [
          { text: '大哥，此事風險太大，是否應該從長計議？', nextSceneId: 'question_heist', effects: { righteousness: 2 } },
          { text: '富貴險中求！大哥，我跟你幹！', nextSceneId: 'support_heist', effects: { righteousness: -5 } },
      ]
  },
  // --- 路線: 質疑計畫 ---
  question_heist: {
      // SCENE: 昏暗的密室，龍嘯天因質疑而憤怒。
      // DESCRIPTION: 龍嘯天對主角的質疑感到憤怒，他用手指著主角，表情猙獰。老鬼在一旁對主角使眼色，示意他不要再激怒大哥。
      // PROMPT: Chinese ink wash painting, wuxia movie still. In a dimly lit hideout, the warrior leader (Long Xiaotian) angrily confronts the player character for questioning his plan. An old strategist (Lao Gui) stands nearby, subtly shaking his head at the player. The air is thick with tension. Dramatic, low-key lighting, deep shadows, hyper-detailed.
      image: 'https://i.meee.com.tw/cjrMOYE.png',
      music: 'https://cdn.pixabay.com/audio/2025/09/30/audio_6b98c6b208.mp3',
      sprites: [
        { id: PLAYER_ID, image: PORTRAIT_PLAYER, position: 'left', visible: true, name: PLAYER_NAME },
        { id: LONG_XIAOTIAN_ID, image: PORTRAIT_LONG_XIAOTIAN, position: 'right', visible: true, name: LONG_XIAOTIAN_NAME, title: LONG_XIAOTIAN_TITLE },
        { id: LAO_GUI_ID, image: PORTRAIT_LAO_GUI, position: 'center', visible: true, name: LAO_GUI_NAME, title: LAO_GUI_TITLE },
      ],
      description: [
        '你的質疑讓興頭上的龍嘯天臉色一沉。',
        '沒等他發作，一旁的老鬼先嘆了口氣，對你搖了搖頭，示意你不要再說了。'
      ],
      dialogue: {
          speaker: '龍嘯天',
          speakerId: LONG_XIAOTIAN_ID,
          lines: [
              '從長計議？我們還有多少時間！鐵牛的仇，你忘了嗎！',
              '我知道這很險，但這也是我們唯一的機會！我需要的是一個能跟我同生共死的兄弟，不是一個膽小鬼！'
          ]
      },
      nextSceneId: 'heist_prep_choice'
  },
  // --- 路線: 支持計畫 ---
  support_heist: {
      // SCENE: 昏暗的密室，龍嘯天因支持而大喜。
      // DESCRIPTION: 聽到主角的支持，龍嘯天一掃陰霾，放聲大笑，並重重地拍打主角的肩膀。周圍的兄弟們也受到感染，士氣高漲，氣氛變得狂熱。
      // PROMPT: Chinese ink wash painting, wuxia movie still. In a dimly lit hideout, the warrior leader (Long Xiaotian) laughs heartily and claps the player character on the shoulder, pleased with his support. The other gang members cheer, their morale boosted. The atmosphere is feverish and excited. Dramatic, low-key lighting, hyper-detailed.
      image: 'https://i.meee.com.tw/ffgO41W.png',
      music: 'https://cdn.pixabay.com/audio/2025/06/04/audio_78a58450f5.mp3',
      sprites: [
        { id: PLAYER_ID, image: PORTRAIT_PLAYER, position: 'left', visible: true, name: PLAYER_NAME },
        { id: LONG_XIAOTIAN_ID, image: PORTRAIT_LONG_XIAOTIAN, position: 'right', visible: true, name: LONG_XIAOTIAN_NAME, title: LONG_XIAOTIAN_TITLE },
      ],
      description: [
          '你的話語如同一劑強心針，讓龍嘯天精神大振。他重重地拍了拍你的肩膀，眼中滿是讚許。',
          '周圍的兄弟們見你表態，也紛紛附和，一時之間，群情激昂，似乎忘記了這個計畫的巨大風險。'
      ],
      dialogue: {
          speaker: '龍嘯天',
          speakerId: LONG_XIAOTIAN_ID,
          lines: [
              '哈哈哈！好！不愧是我的好兄弟！',
              '有你這句話，我心裡就有底了！放心，這次我絕不會讓兄弟們白白犧牲！'
          ]
      },
      nextSceneId: 'heist_prep_choice'
  },
  // --- 核心劇情：叛徒疑雲 ---
  heist_prep_choice: {
      // SCENE: 昏暗的密室，肅殺的指控。
      // DESCRIPTION: 氣氛突然轉冷。龍嘯天眼神冰冷地指著跪在地上的瘦猴，周圍的兄弟們則默默圍成一圈，神情複雜。光線集中在龍嘯天和瘦猴身上，營造出審判的氛圍。
      // PROMPT: Chinese ink wash painting, wuxia movie still. In a cramped, dimly lit hideout, the warrior leader (Long Xiaotian) menacingly points at a terrified, kneeling gang member (Shou Hou). The other gang members, including the player, form a circle around them. The air is thick with paranoia and fear. Dramatic spotlight lighting on the accuser and the accused, deep shadows, hyper-detailed.
      image: 'https://i.meee.com.tw/eAvDlsK.png',
      music: 'https://cdn.pixabay.com/audio/2025/04/11/audio_b29a3dec6f.mp3',
      sprites: [
        { id: PLAYER_ID, image: PORTRAIT_PLAYER, position: 'left', visible: true, name: PLAYER_NAME },
        { id: LONG_XIAOTIAN_ID, image: PORTRAIT_LONG_XIAOTIAN, position: 'right', visible: true, name: LONG_XIAOTIAN_NAME, title: LONG_XIAOTIAN_TITLE },
        { id: TRAITOR_ID, image: PORTRAIT_TRAITOR, position: 'center', visible: true, name: TRAITOR_NAME, title: TRAITOR_TITLE }
      ],
      description: [
          '龍嘯天攤開一張簡陋的地圖，開始佈置任務。',
          '這時，他忽然指著一個名叫「瘦猴」的兄弟，眼神變得冰冷。'
      ],
      dialogue: {
          speaker: '龍嘯天',
          speakerId: LONG_XIAOTIAN_ID,
          lines: [
              '瘦猴，我聽說你最近經常一個人去城南的賭坊。',
              '我們的行蹤，是不是你洩漏給繡衣使者的？'
          ]
      },
      nextSceneId: 'traitor_accusation'
  },
  // --- 對叛徒的處理選擇 ---
  traitor_accusation: {
      // SCENE: 昏暗的密室，生死一線。
      // DESCRIPTION: 瘦猴在地上拚命磕頭求饒，龍嘯天已經拔出刀，殺氣畢露，完全不為所動。主角站在一旁，面臨艱難的抉擇。
      // PROMPT: Chinese ink wash painting, wuxia movie still. In a cramped, dimly lit hideout, a terrified gang member (Shou Hou) kowtows desperately on the floor. The warrior leader (Long Xiaotian) stands over him with his sword drawn, his face cold and merciless, ready to execute him. The player character watches from the side, conflicted. Intense, dramatic atmosphere, chiaroscuro lighting, hyper-detailed.
      image: 'https://i.meee.com.tw/9BREamR.png',
      music: 'https://cdn.pixabay.com/audio/2025/08/30/audio_ff7ad0b091.mp3',
      sprites: [
        { id: PLAYER_ID, image: PORTRAIT_PLAYER, position: 'left', visible: true, name: PLAYER_NAME },
        { id: LONG_XIAOTIAN_ID, image: PORTRAIT_LONG_XIAOTIAN, position: 'right', visible: true, name: LONG_XIAOTIAN_NAME, title: LONG_XIAOTIAN_TITLE },
        { id: TRAITOR_ID, image: PORTRAIT_TRAITOR, position: 'center', visible: true, name: TRAITOR_NAME, title: TRAITOR_TITLE }
      ],
      description: [
          '瘦猴嚇得跪倒在地，拚命磕頭。',
          '「大哥饒命！我只是去賭兩把，絕沒有背叛兄弟們啊！」',
          '龍嘯天完全不聽解釋，他拔出刀，眼中殺機畢露。'
      ],
      situation: '龍嘯天的猜忌和多疑已經到了極點。瘦猴可能無辜，也可能真的有問題，但龍嘯天顯然已經動了殺心。',
      choices: [
          { text: '【阻止他】大哥！沒有證據，不能殺自家兄弟！', nextSceneId: 'heist_failure_betrayed', effects: { righteousness: 10, flags: { saved_monkey: true } } },
          { text: '【保持沉默】寧可錯殺，不可放過。', nextSceneId: 'heist_failure_classic', effects: { righteousness: -15 } },
      ]
  },
  // --- 結局: 皇鏢慘敗（沉默路線） ---
  heist_failure_classic: {
      // SCENE: 峽谷中的絕望埋伏戰。
      // DESCRIPTION: 一個狹窄的峽谷，赤龍寨陷入了繡衣使者的重重包圍。箭如雨下，火光沖天。繡衣使者指揮使沈蒼站在高處，冷漠地俯瞰著這場屠殺。
      // PROMPT: Chinese ink wash painting, wuxia movie still. A chaotic ambush in a narrow, rocky canyon pass. Wide shot. Arrows fly through the air like rain. Well-armored, disciplined imperial soldiers (Embroidered Uniform Guard) overwhelm a group of rag-tag bandits from the cliffs above. In the center, a cold, imposing commander (Shen Cang) watches the slaughter. Desperate, chaotic atmosphere, muted colors with flashes of fire and steel, hyper-detailed.
      image: 'https://i.meee.com.tw/scMeR0V.png',
      music: 'https://cdn.pixabay.com/audio/2024/07/25/audio_93d31baf34.mp3',
      sprites: [
          { id: PLAYER_ID, image: PORTRAIT_PLAYER, position: 'left', visible: true, name: PLAYER_NAME },
          { id: LONG_XIAOTIAN_ID, image: PORTRAIT_LONG_XIAOTIAN, position: 'right', visible: true, name: LONG_XIAOTIAN_NAME, title: LONG_XIAOTIAN_TITLE },
          { id: SHEN_CANG_ID, image: PORTRAIT_SHEN_CANG, position: 'center', visible: true, name: SHEN_CANG_NAME, title: SHEN_CANG_TITLE }
      ],
      description: [
          '你最終選擇了沉默，瘦猴在絕望中被龍嘯天一刀斬殺。',
          '寨中的氣氛變得更加壓抑，兄弟們看你的眼神也多了幾分畏懼。',
          '行動之日，你們在預定的峽谷設下埋伏。然而，皇鏢隊伍遲遲未到，等來的卻是四面方方湧出的繡衣使者！',
          '你們中了圈套！'
      ],
      dialogue: {
        speaker: '沈蒼',
        speakerId: SHEN_CANG_ID,
        lines: [
            '赤龍寨的餘孽，你們的末日到了。',
            '龍嘯天，你以為你的計畫天衣無縫？其實，你身邊的每一個人，都可能是我的眼睛。'
        ]
      },
      nextSceneId: 'heist_ending'
  },
  // --- 結局: 皇鏢慘敗（阻止路線，確認被背叛） ---
  heist_failure_betrayed: {
      // SCENE: 峽谷中的絕望埋伏戰。
      // DESCRIPTION: 與前一場景相同，同樣是慘烈的伏擊戰。但這次的重點是主角得知自己保下的人確實是叛徒時的震驚和悔恨。
      // PROMPT: Chinese ink wash painting, wuxia movie still. A chaotic ambush in a narrow, rocky canyon pass. Medium shot on the player character's shocked face as he realizes his mistake. Arrows fly past him. In the background, his comrades are being slaughtered by disciplined imperial soldiers. A cold, imposing commander (Shen Cang) watches from above. Desperate, chaotic atmosphere, hyper-detailed.
      image: 'https://i.meee.com.tw/IR4KG2g.png',
      music: 'https://cdn.pixabay.com/audio/2024/07/25/audio_523a4f97d0.mp3',
      sprites: [
          { id: PLAYER_ID, image: PORTRAIT_PLAYER, position: 'left', visible: true, name: PLAYER_NAME },
          { id: LONG_XIAOTIAN_ID, image: PORTRAIT_LONG_XIAOTIAN, position: 'right', visible: true, name: LONG_XIAOTIAN_NAME, title: LONG_XIAOTIAN_TITLE },
          { id: SHEN_CANG_ID, image: PORTRAIT_SHEN_CANG, position: 'center', visible: true, name: SHEN_CANG_NAME, title: SHEN_CANG_TITLE }
      ],
      description: [
          '你出面保下了瘦猴，龍嘯天雖然不悅，但最終還是給了你面子，只是將他關了起來。',
          '行動之日，你們在預定的峽谷設下埋伏。然而，皇鏢隊伍遲遲未到，等來的卻是四面方方湧出的繡衣使者！',
          '你們中了圈套！瘦猴，果然是叛徒！'
      ],
      dialogue: {
        speaker: '沈蒼',
        speakerId: SHEN_CANG_ID,
        lines: [
            '赤龍寨的餘孽，束手就擒吧。',
            '哦，對了，感謝你們的兄弟「瘦猴」，他為朝廷立了大功。'
        ]
      },
      nextSceneId: 'heist_ending'
  },
  // --- ACT 2 結尾: 目睹龍嘯天犧牲兄弟，徹底心寒 ---
  heist_ending: {
      // SCENE: 混亂的戰場，人性的泯滅。
      // DESCRIPTION: 在混亂的峽谷戰場上，焦點集中在一個令人心寒的瞬間：龍嘯天為了自己逃命，毫不猶豫地將一個忠心護主的兄弟推向敵人的刀口。主角在不遠處目睹了這一切，表情從震驚變為徹底的失望。
      // PROMPT: Chinese ink wash painting, wuxia movie still. In a chaotic battle, the warrior leader (Long Xiaotian) callously pushes one of his own loyal men into enemy swords to create an escape opportunity for himself. The player character witnesses this ultimate betrayal from a short distance, his face a mask of horror and disillusionment. Brutal, heart-wrenching atmosphere, hyper-detailed.
      image: 'https://i.meee.com.tw/oFaKXVb.png',
      music: 'https://cdn.pixabay.com/audio/2024/07/25/audio_523a4f97d0.mp3',
      sprites: [
          { id: PLAYER_ID, image: PORTRAIT_PLAYER, position: 'center', visible: true, name: PLAYER_NAME },
          { id: LONG_XIAOTIAN_ID, image: PORTRAIT_LONG_XIAOTIAN, position: 'right', visible: false, name: LONG_XIAOTIAN_NAME, title: LONG_XIAOTIAN_TITLE },
          { id: TIE_NIU_ID, image: PORTRAIT_TIE_NIU, position: 'left', visible: false, name: TIE_NIU_NAME, title: '忠誠的兄弟' }, // Re-using Tie Niu portrait for another loyal brother
      ],
      description: [
          '喊殺聲震天，繡衣使者訓練有素，你們節節敗退，傷亡慘重。',
          '混亂中，你看到龍嘯天被幾名高手圍攻，岌岌可危。一名忠心耿耿的兄弟奮不顧身衝上去為他擋刀。',
          '然而，龍嘯天眼中沒有絲毫感激，他看準機會，一掌將那名兄弟推向敵人的刀口，為自己創造了逃跑的空隙。',
          '那一刻，你看著他毫不猶豫的背影，心中有什麼東西徹底碎裂了。'
      ],
      situation: '行動慘敗，兄弟死傷殆盡。更讓你心寒的，是龍嘯天親手犧牲手足的無情。你對他最後的信任，已蕩然無存。',
      choices: [
          { text: '（進入第三幕）', nextSceneId: 'act_3_start' }
      ]
  },
  // --- ACT 3: 開場，龍嘯天的瘋狂與決裂 ---
  act_3_start: {
    // SCENE: 狼藉的據點，瘋狂的威脅。
    // DESCRIPTION: 據點內一片狼藉，失敗後的氣氛絕望而壓抑。龍嘯天徹底瘋狂，他威脅著角落裡一群無辜的婦孺。主角站在他的對面，臉上是決然的神情，決裂一觸即發。
    // PROMPT: Chinese ink wash painting, wuxia movie still. The secret hideout is in disarray, with overturned tables and debris. A completely unhinged warrior leader (Long Xiaotian) stands ranting, his eyes wild with madness. He gestures threateningly towards a group of terrified women and children cowering in a corner. The player character watches in horror, his hand on his sword. Atmosphere of despair and madness. Harsh, unstable lighting, hyper-detailed.
    image: 'https://i.meee.com.tw/sAVMWmS.png',
    music: 'https://cdn.pixabay.com/audio/2024/07/25/audio_523a4f97d0.mp3',
    sprites: [
      { id: PLAYER_ID, image: PORTRAIT_PLAYER, position: 'left', visible: true, name: PLAYER_NAME },
      { id: LONG_XIAOTIAN_ID, image: PORTRAIT_LONG_XIAOTIAN, position: 'right', visible: true, name: LONG_XIAOTIAN_NAME, title: LONG_XIAOTIAN_TITLE },
    ],
    description: [
      '皇鏢之役慘敗，赤龍寨僅存的數人逃回了洛城的據點，人人帶傷，士氣低迷。',
      '失敗和背叛，讓龍嘯天徹底陷入了瘋狂。他變得多疑、殘暴，將所有過錯都歸咎於他人。',
      '他甚至將跟隨你們多年的兄弟家眷——那些老弱婦孺——都集中看管起來，視為潛在的威脅。'
    ],
    dialogue: {
      speaker: '龍嘯天',
      speakerId: LONG_XIAOTIAN_ID,
      lines: [
        '都是叛徒！全是叛徒！這個世界背叛了我們！',
        '既然如此，我們就讓這個世界一起陪葬！我要火燒洛城，讓繡衣使者和這滿城偽善的螻蟻，都為我們的兄弟償命！',
        '誰敢不動手，他們（指向婦孺）就是下場！'
      ]
    },
    situation: '龍嘯天已經瘋了。他不僅要拖著僅存的兄弟去送死，更要脅持無辜的家眷。這已不再是復仇，而是純粹的瘋狂。你心中的那根弦，終於繃斷了。',
    choices: [
      { text: '【仁德路線】夠了！龍嘯天，你瘋了！我絕不會讓你傷害他們！', nextSceneId: 'rebel_path_start', effects: { righteousness: 25 } },
      { text: '【忠義路線】……大哥，我跟你幹到底。', nextSceneId: 'loyalty_path_dark_ending', effects: { righteousness: -50 } },
    ]
  },
  // --- 結局: 愚忠的輓歌（黑暗結局） ---
  loyalty_path_dark_ending: {
    // SCENE: 燃燒的洛城，最後的背靠背。
    // DESCRIPTION: 洛城陷入火海，主角和龍嘯天背靠著背，被無數官兵包圍。這是他們最後的、絕望的戰鬥。畫面充滿了毀滅和悲壯的美感。
    // PROMPT: Chinese ink wash painting, wuxia movie still. The streets of an ancient Chinese city are burning at night. Low angle shot. The last two bandits (player and a crazed Long Xiaotian) stand back-to-back, surrounded by a circle of heavily armed imperial soldiers. A hopeless, tragic final stand. Fiery, dramatic lighting, bodies litter the ground. Epic, grimdark atmosphere, hyper-detailed.
    image: 'https://i.meee.com.tw/z8DtPSC.png',
    music: 'https://cdn.pixabay.com/audio/2024/08/26/audio_9491d7b2db.mp3',
    sprites: [],
    description: [
      '你的良知在嘶吼，但你最終選擇了沉默，選擇了那份扭曲的「忠義」。',
      '你們的行動，與其說是襲擊，不如說是自殺。',
      '在洛城的沖天火光中，你們被繡衣使者和地方軍隊團團包圍。',
      '你和龍嘯天並肩作戰，直到最後一刻。你看到他猙獰的笑臉，也看到了自己倒映在敵人刀刃上的，那張麻木的臉。',
      '江湖，就這樣走到了末路。'
    ],
    situation: '【結局：愚忠的輓歌】\n你的忠誠，最終將你和所有剩下的人帶入了地獄。你們的故事，成為了繡衣使者功勞簿上的一筆，以及茶館說書人口中一個警示後人的反面故事。',
    choices: [
      { text: '【劇終】', nextSceneId: 'start' }
    ]
  },
  // --- 路線: 仁德之路，公開反抗 ---
  rebel_path_start: {
    // SCENE: 據點內的決裂。
    // DESCRIPTION: 主角拔劍，擋在婦孺身前，與龍嘯天正面對峙。老鬼默默站到主角身邊，表明立場。兄弟們分裂，場面極度緊張。
    // PROMPT: Chinese ink wash painting, wuxia movie still. A tense standoff in a messy, dimly lit hideout. The player character (Xiao Yuan) has his sword drawn, standing protectively before a group of women and children. An old, wise strategist (Lao Gui) stands with him. They face the furious, betrayed leader (Long Xiaotian). A moment of rebellion and breaking loyalties. Dramatic lighting, hyper-detailed.
    image: 'https://i.meee.com.tw/61h4HX0.png',
    music: 'https://cdn.pixabay.com/audio/2024/08/26/audio_9491d7b2db.mp3',
    sprites: [
      { id: PLAYER_ID, image: PORTRAIT_PLAYER, position: 'left', visible: true, name: PLAYER_NAME },
      { id: LONG_XIAOTIAN_ID, image: PORTRAIT_LONG_XIAOTIAN, position: 'right', visible: true, name: LONG_XIAOTIAN_NAME, title: LONG_XIAOTIAN_TITLE },
      { id: LAO_GUI_ID, image: PORTRAIT_LAO_GUI, position: 'center', visible: true, name: LAO_GUI_NAME, title: LAO_GUI_TITLE },
    ],
    description: [
      '你拔劍出鞘，擋在了那些瑟瑟發抖的婦孺面前。',
      '「我們的刀，從不對著弱小。這是你教我的，大哥。」',
      '話音未落，老鬼默默地站到了你的身邊，表示了他的立場。',
      '龍嘯天雙目赤紅，他沒想到你會公然反抗。',
      '「好…好一個我的好兄弟！連你也背叛我？給我殺了他們！」',
      '剩下幾個兄弟面面相覷，不知所措。'
    ],
    situation: '決裂的時刻已到。你必須為自己的信念而戰，帶領那些尚存良知的人殺出一條生路。',
    choices: [
      { text: '兄弟們，想想我們的初衷！想想鐵牛！跟他走只有死路一條！', nextSceneId: 'escape_from_hideout' }
    ]
  },
  // --- 逃亡之路的開始 ---
  escape_from_hideout: {
    // SCENE: 夜晚在混亂的城市小巷中逃亡。
    // DESCRIPTION: 一群人在主角的帶領下，在迷宮般的、黑暗狹窄的城市後巷中奔跑。月光從高牆的縫隙中灑下，製造出光影交錯的效果，充滿動感和緊迫感。
    // PROMPT: Chinese ink wash painting, wuxia movie still. A desperate chase through the narrow, labyrinthine back alleys of an ancient Chinese city at night. View from behind the player character as he leads a small group of people, running for their lives. The alleys are dark, oppressive, and claustrophobic. Motion blur effect. Tense, frantic atmosphere, deep shadows and moonlight, hyper-detailed.
    image: 'https://i.meee.com.tw/Fiml7F2.png',
    music: 'https://cdn.pixabay.com/audio/2024/08/20/audio_2368f84a21.mp3',
    sprites: [
      { id: PLAYER_ID, image: PORTRAIT_PLAYER, position: 'center', visible: true, name: PLAYER_NAME },
    ],
    description: [
      '你的話語和老鬼的支持動搖了大多數人。一場混亂的內鬥後，你帶著願意追隨你的兄弟和所有家眷，在老鬼的接應下，衝出了據點。',
      '龍嘯天帶著幾個死忠份子在身後窮追不捨，而城內的騷亂，也驚動了繡衣使者的巡邏隊。',
      '前有官兵，後有追殺。你們的逃亡之路，從一開始就充滿了血腥。'
    ],
    situation: '你們必須盡快逃出洛城。城外的渡口，是唯一的希望。',
    choices: [
      { text: '殺出重圍，前往渡口！', nextSceneId: 'final_stand_setup' }
    ]
  },
  // --- ACT 3 結尾: 渡口斷後 ---
  final_stand_setup: {
    // SCENE: 黎明時分，霧氣瀰漫的河邊渡口，一座孤橋。
    // DESCRIPTION: 天色微亮，寬闊的江面上籠罩著濃霧。一座長長的木橋是唯一的通道。主角獨自一人站在橋頭，身後是載著婦孺遠去的小船，面前是空無一人但殺機四伏的道路。畫面孤獨、悲壯而充滿詩意。
    // PROMPT: Chinese ink wash painting, wuxia movie still. An epic wide shot of a long, solitary wooden bridge over a wide, mist-covered river at dawn. A lone warrior (player character, Xiao Yuan) stands at the head of the bridge, sword in hand, facing the empty road. A small boat of refugees is visible in the distance on the water. A somber, resolute, and heroic atmosphere. Soft dawn light filtering through heavy mist, minimalist composition, hyper-detailed.
    image: 'https://i.meee.com.tw/ijVBk28.png',
    music: 'https://cdn.pixabay.com/audio/2024/08/20/audio_3cbe1c1099.mp3',
    sprites: [
      { id: PLAYER_ID, image: PORTRAIT_PLAYER, position: 'center', visible: true, name: PLAYER_NAME },
    ],
    description: [
      '你們且戰且退，終於在天亮前抵達了渡口。',
      '但追兵的馬蹄聲也越來越近。船只有一艘，根本來不及讓所有人安全撤離。',
      '你回望身後那些驚恐但充滿信任的眼神，心中做出了決定。',
      '「你們快走，我來斷後。」你轉過身，獨自一人，一柄劍，面對著身後塵煙滾滾的追兵。'
    ],
    situation: '這是你的選擇，也是你的道路。在這座決定命運的橋上，你將了結所有的恩怨。',
    choices: [
      { text: '（等待最終的對決）', nextSceneId: 'final_confrontation_long_xiaotian' }
    ]
  },
  // --- ACT 4: 開場，與龍嘯天的最終對決 ---
  final_confrontation_long_xiaotian: {
    // SCENE: 霧中橋上的宿命對決。
    // DESCRIPTION: 在被濃霧包圍的長橋上，主角與渾身是血、狀若瘋魔的龍嘯天對峙。這是昔日兄弟的最後一戰，背景簡潔，完全聚焦於二人之間悲傷而激烈的戰鬥。
    // PROMPT: Chinese ink wash painting, wuxia movie still. A dramatic duel between two sworn brothers on a long wooden bridge shrouded in thick morning mist. The player character (Xiao Yuan) faces off against his former leader (Long Xiaotian), who is disheveled, wounded, and enraged. A tragic confrontation. Minimalist background, focus on the characters' expressions. Somber atmosphere, hyper-detailed.
    image: 'https://i.meee.com.tw/X2h4Z41.png',
    music: 'https://cdn.pixabay.com/audio/2024/08/20/audio_2368f84a21.mp3',
    sprites: [
      { id: PLAYER_ID, image: PORTRAIT_PLAYER, position: 'left', visible: true, name: PLAYER_NAME },
      { id: LONG_XIAOTIAN_ID, image: PORTRAIT_LONG_XIAOTIAN, position: 'right', visible: true, name: LONG_XIAOTIAN_NAME, title: '瘋狂的復仇者' },
    ],
    description: [
      '霧氣中，一個踉蹌的身影率先出現。不是沈蒼，而是龍嘯天。',
      '他渾身是血，狀若瘋魔，顯然是擺脫了繡衣使者，獨自追來。他失去了一切，而他將這一切都歸咎於你。'
    ],
    dialogue: {
      speaker: '龍嘯天',
      speakerId: LONG_XIAOTIAN_ID,
      lines: [
        '叛徒！如果不是你，我們早就成功了！是你毀了我的一切！',
        '今天，我們兩個，只能活一個！'
      ]
    },
    situation: '與昔日大哥的恩怨，必須在此了結。這不僅是武力的較量，更是理念的碰撞。',
    choices: [
      { text: '【了結恩怨】拔劍相向。', nextSceneId: 'final_confrontation_long_xiaotian_aftermath' }
    ]
  },
  // --- 擊敗龍嘯天後，決定其生死 ---
  final_confrontation_long_xiaotian_aftermath: {
    // SCENE: 橋上的審判。
    // DESCRIPTION: 龍嘯天戰敗，跪倒在地。主角的劍停在他的喉嚨前。濃霧稍散，晨光灑下，照亮了這悲傷的一幕。
    // PROMPT: Chinese ink wash painting, wuxia movie still. On the misty bridge, the defeated leader (Long Xiaotian) is on his knees. The victorious player character (Xiao Yuan) holds his sword to his throat. A moment of final judgment between brothers. The morning sun begins to break through the mist, creating a somber, beautiful lighting effect. Tragic atmosphere, hyper-detailed.
    image: 'https://i.meee.com.tw/wQiV3dF.png',
    music: 'https://cdn.pixabay.com/audio/2025/06/06/audio_fee149d9d5.mp3',
    sprites: [
      { id: PLAYER_ID, image: PORTRAIT_PLAYER, position: 'center', visible: true, name: PLAYER_NAME },
    ],
    description: [
      '你們的戰鬥，激烈而悲傷。你們對彼此的招式太熟悉了。',
      '最終，你的劍鋒停在了他的喉嚨前。他已經耗盡了所有力氣，敗了。',
      '他閉上眼睛，等待死亡。'
    ],
    situation: '龍嘯天，這個帶你走進江湖，又將你推入深淵的人，他的性命就在你的一念之間。',
    choices: [
      { text: '【斬草除根】殺了他，結束這一切。', nextSceneId: 'final_boss_shen_cang', effects: { righteousness: -10, flags: { killed_long_xiaotian: true } } },
      { text: '【放他一馬】廢他武功，讓他自生自滅。', nextSceneId: 'final_boss_shen_cang', effects: { righteousness: 10, flags: { spared_long_xiaotian: true } } },
    ]
  },
  // --- 最終BOSS戰: 面對沈蒼 ---
  final_boss_shen_cang: {
    // SCENE: 橋上的最終對峙，一人對一軍。
    // DESCRIPTION: 主角精疲力盡，而橋的另一頭，霧氣散去，露出了沈蒼和他身後一排排的繡衣使者弓箭手。這是一個人面對整個國家機器的絕望場景，充滿了壓迫感。
    // PROMPT: Chinese ink wash painting, wuxia movie still. On a long misty bridge, the lone, exhausted warrior (player character, Xiao Yuan) faces his final opponent: an elite, imposing imperial commander (Shen Cang) flanked by a disciplined line of archers. One man against an army. Hopeless yet defiant atmosphere. The mist begins to clear, revealing the scale of the enemy force. Cinematic, epic scale, hyper-detailed.
    image: 'https://i.meee.com.tw/UG4SCv0.png',
    music: 'https://cdn.pixabay.com/audio/2025/06/04/audio_2c110ce0d0.mp3',
    sprites: [
      { id: PLAYER_ID, image: PORTRAIT_PLAYER, position: 'left', visible: true, name: PLAYER_NAME },
      { id: SHEN_CANG_ID, image: PORTRAIT_SHEN_CANG, position: 'right', visible: true, name: SHEN_CANG_NAME, title: SHEN_CANG_TITLE }
    ],
    description: [
      '無論你如何處置龍嘯天，他都已不再是威脅。',
      '此時，大批繡衣使者終於趕到，將橋的另一頭圍得水洩不通。為首的，正是指揮使沈蒼。',
      '他靜靜地看著你，眼神複雜。'
    ],
    dialogue: {
      speaker: '沈蒼',
      speakerId: SHEN_CANG_ID,
      lines: [
        '束手就擒吧，蕭遠。你的路，到頭了。'
      ]
    },
    situation: '宿命的終結。你將獨自面對整個朝廷的力量。你的結局，將由你一路走來的所作所為決定。',
    choices: [
      { text: '我命由我不由天！', nextSceneId: 'ending_high_righteousness', condition: ({ playerStats }) => playerStats.righteousness >= 30 },
      { text: '我命由我不由天！', nextSceneId: 'ending_low_righteousness', condition: ({ playerStats }) => playerStats.righteousness <= -30 },
      { text: '我命由我不由天！', nextSceneId: 'ending_neutral' },
    ]
  },
  // --- 結局: 俠之大者（高仁義值） ---
  ending_high_righteousness: {
    // SCENE: 英雄惜英雄，橋上的放行。
    // DESCRIPTION: 沈蒼揮手，他身後的繡衣使者們讓開了一條通路。重傷的主角獨自一人，拖著疲憊的身體，走過他們中間，消失在遠方的霧氣中。這是一個充滿敬意和江湖俠義的場景。
    // PROMPT: Chinese ink wash painting, wuxia movie still. On the misty bridge, the imperial commander (Shen Cang) gestures, and his soldiers part to create a path for the heavily wounded but victorious player character, who stumbles away into the mist. An act of respect and honor. Somber, respectful atmosphere, hyper-detailed.
    image: 'https://i.meee.com.tw/JSjEU9F.png',
    music: 'https://cdn.pixabay.com/audio/2024/08/20/audio_243433888d.mp3',
    sprites: [
      { id: PLAYER_ID, image: PORTRAIT_PLAYER, position: 'left', visible: true, name: PLAYER_NAME },
      { id: SHEN_CANG_ID, image: PORTRAIT_SHEN_CANG, position: 'right', visible: true, name: SHEN_CANG_NAME, title: SHEN_CANG_TITLE }
    ],
    description: [
      '沈蒼忽然抬起手，制止了身後準備放箭的部下。',
      '「你的事，我已有所耳聞。沿途不傷無辜，為救婦孺不惜與同夥決裂…你雖為亂黨，卻有俠義之心。」',
      '「我給你一個體面的死法。你我公平一戰，你若勝，我放你走。你若敗，自行了斷。」',
      '這是一場賭上性命與尊嚴的決鬥。你最終以微弱的優勢勝過了沈蒼。他看著你，眼神複雜，最終揮了揮手，讓開了一條路。'
    ],
    situation: '【結局：俠之大者】\n你拖著重傷的身體消失在迷霧之中。從此，江湖上少了一個赤龍寨的二當家，卻多出了一個無名俠客的傳說。你的故事，成為了舊江湖最後的光輝。',
    choices: [
      { text: '（查看尾聲）', nextSceneId: 'epilogue' }
    ]
  },
  // --- 結局: 一代梟雄（低仁義值） ---
  ending_low_righteousness: {
    // SCENE: 萬箭穿心，橋上的終結。
    // DESCRIPTION: 主角在橋頭被亂箭射殺，身體插滿了箭矢，倒在血泊中。沈蒼冷漠地看著他的屍體。這是一個殘酷、冰冷的結局。
    // PROMPT: Chinese ink wash painting, wuxia movie still. The lone warrior (player character) lies fallen on the wooden bridge, his body pierced by dozens of arrows. The imperial commander (Shen Cang) looks down on him without emotion as his soldiers stand ready with bows drawn. A brutal and grim end. Tragic atmosphere, hyper-detailed.
    image: 'https://i.meee.com.tw/SCeJEiP.png',
    music: 'https://cdn.pixabay.com/audio/2024/12/23/audio_d4537f2ec6.mp3',
    sprites: [
      { id: PLAYER_ID, image: PORTRAIT_PLAYER, position: 'center', visible: true, name: PLAYER_NAME },
      { id: SHEN_CANG_ID, image: PORTRAIT_SHEN_CANG, position: 'right', visible: true, name: SHEN_CANG_NAME, title: SHEN_CANG_TITLE }
    ],
    description: [
      '沈蒼冷笑一聲。',
      '「在我眼中，你和龍嘯天並無區別，都是製造混亂的根源。你們這些所謂的江湖人，從來只會給天下帶來災禍。」',
      '他沒有給你任何機會。一聲令下，箭如雨下。',
      '你奮力抵抗，劍光閃爍，但終究雙拳難敵四手。你的身体被數十支箭矢貫穿，倒在了橋頭。'
    ],
    situation: '【結局：一代梟雄】\n你的生命，終結在了朝廷的鐵蹄之下。你的所作所為，無論初衷如何，最終都讓你和你的兄弟們一同被釘在了歷史的恥辱柱上，身後留下千古罵名。',
    choices: [
      { text: '（查看尾聲）', nextSceneId: 'epilogue' }
    ]
  },
  // --- 結局: 無名之輩（中立仁義值） ---
  ending_neutral: {
    // SCENE: 歸隱漁村，江湖遠去。
    // DESCRIPTION: 一個寧靜的海邊漁村，夕陽西下。一個看不清面容的漁夫（主角）正在修補漁網，背對著鏡頭。遠處是平靜的大海，江湖的血雨腥風彷彿是另一個世界的故事。畫面平靜、祥和，但帶有一絲悵然。
    // PROMPT: Chinese ink wash painting, wuxia movie still. A quiet, peaceful coastal fishing village at sunset. An anonymous figure, dressed as a simple fisherman, mends his nets by the shore, his face hidden from view. The past is forgotten. A tranquil, melancholic atmosphere of retirement from a violent world. Warm sunset colors, serene mood, hyper-detailed.
    image: 'https://i.meee.com.tw/GB7a5ps.png',
    music: 'https://cdn.pixabay.com/audio/2021/12/01/audio_2fe16fd258.mp3',
    sprites: [],
    description: [
      '沈蒼一聲令下，繡衣使者如潮水般湧來。',
      '你知道硬拼無異於找死。在決戰的瞬間，你用盡最後的內力，製造了一場巨大的混亂，隨後縱身跳入了橋下湍急的河流。',
      '沈蒼派人搜查了數日，卻只找到了你那把斷裂的劍。',
      '你僥倖活了下來，但身負重傷，經脈盡斷，武功已廢。'
    ],
    situation: '【結局：無名之輩】\n你從此消失在人海中，在一個無人知曉你的海邊小村，成為了一個普通的漁民。江湖的風波，英雄的傳說，都與你再無關係。每當風雨欲來，你只會默默地加固自己的門窗。',
    choices: [
      { text: '（查看尾聲）', nextSceneId: 'epilogue' }
    ]
  },
  // --- 尾聲 ---
  epilogue: {
    // SCENE: 寧靜的村莊，新的生活。
    // DESCRIPTION: 與「無名之輩」結局類似的場景，但視角更為宏大。一個依山傍水、遠離塵囂的村莊，村民們過著平靜的生活。這是主角用生命換來的和平。
    // PROMPT: Chinese ink wash painting, wuxia movie still. A panoramic view of a hidden, peaceful village nestled by a river in a secluded valley. It is a place of tranquility and new beginnings, far from the troubles of the world. Hopeful, serene atmosphere. Soft lighting, hyper-detailed.
    image: 'https://i.meee.com.tw/HsKXuuL.png',
    music: 'https://cdn.pixabay.com/audio/2025/04/08/audio_d9c5192206.mp3',
    sprites: [],
    description: [
      '無論你的结局如何，你的犧牲，並非全無意義。',
      '那艘載著婦孺和兄弟們的小船，最終成功抵達了江對岸。他們隱姓埋名，在一個遠離是非的地方，開始了新的生活。',
      '他們會永遠記住，在那個血色的黎明，有一個人，為他們斬斷了過去，迎向了末路。',
      '江湖的時代或許結束了，但只要還有人記得「俠義」二字，希望的火種，便不會熄滅。'
    ],
    situation: '【末路江湖: 叛道 卷一 完】',
    choices: [
      { text: '【重整旗鼓】返回故事的開端', nextSceneId: 'start' }
    ]
  },
  // --- 錯誤處理場景 ---
  error_scene: {
    // SCENE: 斷裂的道路，混沌的空間。
    // DESCRIPTION: 一個抽象的、超現實的場景。一條由水墨筆觸構成的道路在虛空中延伸，然後突然斷裂，前方是扭曲、混沌的漩渦和迷霧。象徵著故事線的意外中斷。
    // PROMPT: Chinese ink wash painting, abstract and surreal. A path made of bold ink brushstrokes leads forward before crumbling into a formless void of swirling mist and dark shadows. A representation of a broken fate or a lost story. Ominous, confusing atmosphere, monochrome, highly conceptual.
    image: 'https://i.meee.com.tw/G4ZJnxf.png',
    music: 'https://cdn.pixabay.com/audio/2025/06/24/audio_19c3d82e97.mp3',
    sprites: [],
    description: [
      '江湖之路，似乎在此中斷...',
      '前方的道路一片混沌，或許是天意弄人，或許是命運的絲線在此糾纏不清。',
      '看來，只好回頭，另擇他路。'
    ],
    situation: '遊戲發生了一個意料之外的錯誤，導致劇情無法繼續。這通常是故事數據配置問題。',
    choices: [
      { text: '【重整旗鼓】返回故事的開端', nextSceneId: 'start' }
    ]
  }
};
