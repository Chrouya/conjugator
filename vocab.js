var irregular_exist = [
  new Term('だ', '', 'to be'),
  new Term('いる', '', 'to exist (animate)'),
  new Term('ある', '', 'to exist (inanimate)'),
]

var irregular_do = [
  new Term('する', '', 'to do'),
  new Term('くる', '来る', 'to come'),
]

var ichidan = [
    new Term('おきる', '起きる', 'to wake up; to occur'),
    new Term('でる', '出る', 'to leave; to come out'),
    new Term('くわえる', '加える', 'to add to, include'),
    new Term('みとめる', '認める', 'to admit, recognize'),
    new Term('こたえる', '答える', 'to answer'),
    new Term('さける', '避ける', 'to avoid, dodge'),
    new Term('きんじる', '禁じる', 'to ban, prohibit'),
    new Term('あびる', '浴びる', 'to bathe, take a shower'),
    new Term('いる', '居る', 'to be'),
    new Term('できる', '来る', 'to be able'),
    new Term('いきる', '生きる', 'to be alive'),
    new Term('きこえる', '聞こえる', 'to be audible, able to hear'),
    new Term('うまれる', '生まれる', 'to be born'),
    new Term('おれる', '折れる', 'to be broken, snap'),
    new Term('こげる', '焦げる', 'to be burned, charred'),
    new Term('まける', '負ける', 'to be defeated, lose a game'),
    new Term('たりる', '足りる', 'to be enough, suffient'),
    new Term('おくれる', '遅れる', 'to be late, lag behind'),
    new Term('なまける', '怠ける', 'to be lazy'),
    new Term('もてる', null, 'to be popular'),
    new Term('みえる', '見える', 'to be visible, able to see'),
    new Term('ぬれる', '濡れる', 'to become wet'),
    new Term('はじめる', '始める', 'to begin'),
    new Term('しんじる', '信じる', 'to believe, trust'),
    new Term('まげる', '曲げる', 'to bend, twist'),
    new Term('かりる', '借りる', 'to borrow, rent'),
    new Term('こわれる', '壊れる', 'to break'),
    new Term('きれる', '切れる', 'to break, cut off, expire'),
    new Term('そだてる', '育てる', 'to bring up a child, train'),
    new Term('たてる', '立てる', 'to build'),
    new Term('やける', '焼ける', 'to burn'),
    new Term('かえる', '変える', 'to change'),
    new Term('しらべる', '調べる', 'to check, investigate'),
    new Term('はれる', '晴れる', 'to clear up, tidy up'),
    new Term('くずれる', '崩れる', 'to collapse, cave in'),
    new Term('とれる', '取れる', 'to come off'),
    new Term('はずれる', '外れる', 'to come off, go wide'),
    new Term('ほどける', '解ける', 'to come untied, loose'),
    new Term('なぐさめる', '慰める', 'to comfort, console'),
    new Term('いいつける', '言いつける', 'to command'),
    new Term('くらべる', '比べる', 'to compare'),
    new Term('つづける', '続ける', 'to continue, proceed'),
    new Term('かぞえる', '数える', 'to count'),
    new Term('きめる', '決める', 'to decide, choose'),
    new Term('さだめる', '定める', 'to decide, establish'),
    new Term('たべる', '食べる', 'to eat'),
    new Term('すぐれる', '優れる', 'to excel, be excellent, be superior'),
    new Term('とりかえる', '取り換える', 'to exchange'),
    new Term('たおれる', '倒れる', 'to fall down, collapse'),
    new Term('ほれる', '惚れる', 'to fall in love'),
    new Term('おちる', '落ちる', 'to fall, fail, go down'),
    new Term('おそれる', '恐れる', 'to fear, be in awe of'),
    new Term('かんじる', '感じる', 'to feel, sense'),
    new Term('みつける', '見つける', 'to find'),
    new Term('かたづける', '付ける', 'to finish, tidy up'),
    new Term('ながれる', '流れる', 'to flow, be called off'),
    new Term('わすれる', '忘れる', 'to forget'),
    new Term('あつめる', '集める', 'to gather, collect'),
    new Term('える', '得る', 'to get'),
    new Term('きかえる', '換える', 'to get changed'),
    new Term('こえる', null, 'to get fat, grow fertile / cross over, exceed'),
    new Term('おりる', '降りる', 'to get off, go down'),
    new Term('つかれる', '疲れる', 'to get tired'),
    new Term('おきる', '起きる', 'to get up'),
    new Term('なれる', '慣れる', 'to get used to, become familiar with'),
    new Term('あげる', null, 'to give'),
    new Term('くれる', '呉れる', 'to give (the giver is not the speaker)'),
    new Term('かじる', '齧る', 'to gnaw, nibble'),
    new Term('でかける', '出かける', 'to go out, leave home'),
    new Term('むかえる', '迎える', 'to greet, meet, welcome'),
    new Term('くれる', '暮れる', 'to grow dark (sunset)'),
    new Term('かける', null, 'to hang, sit, telephone, risk'),
    new Term('たすける', '助ける', 'to help'),
    new Term('さまたげる', '妨げる', 'to hinder, obstruct'),
    new Term('ぶつける', null, 'to hit against, throw at'),
    new Term('かかえる', '抱える', 'to hold (in your arms), have'),
    new Term('ふえる', '増える', 'to increase'),
    new Term('くるしませる', '苦しませる', 'to inflict pain, torment'),
    new Term('ふせる', '伏せる', 'to lay face down'),
    new Term('つれる', '連れる', 'to lead'),
    new Term('もれる', '漏れる', 'to leak, escape'),
    new Term('なめる', '舐める', 'to lick'),
    new Term('ならべる', '並べる', 'to line up, list, arrange in order'),
    new Term('みる', '見る', 'to look'),
    new Term('さげる', '下げる', 'to lower, hang'),
    new Term('まちがえる', '違える', 'to make a mistake'),
    new Term('こしらえる', '拵える', 'to make manufacture'),
    new Term('まぜる', '混ぜる', 'to mix'),
    new Term('しらせる', '知らせる', 'to notify'),
    new Term('あける', '開ける', 'to open'),
    new Term('あわてる', '慌てる', 'to panic, be flustered'),
    new Term('わかれる', '別れる', 'to part, separate from, be divided, divorced'),
    new Term('へる', '減る', 'to pass through, go by'),
    new Term('すぎる', '過ぎる', 'to pass, exceed'),
    new Term('かさねる', '重ねる', 'to pile up, repeat'),
    new Term('くわだてる', '企てる', 'to plan, scheme'),
    new Term('ほめる', '褒める', 'to praise'),
    new Term('もうける', '儲ける', 'to profit, make money'),
    new Term('いれる', '入れる', 'to put in, let in'),
    new Term('のせる', null, 'to put on top off, put on board'),
    new Term('かかげる', '掲げる', 'to raise (a flag), hold up'),
    new Term('おぼえる', '覚える', 'to remember, learn'),
    new Term('もとめる', '求める', 'to request, seek, buy, ask'),
    new Term('にる', '似る', 'to resemble, be similar to'),
    new Term('おさえる', '抑える', 'to restrain, control'),
    new Term('にげる', '逃げる', 'to run away, escape'),
    new Term('たくわえる', '蓄える', 'to save money, put aside, store'),
    new Term('ためる', null, 'to save, store, accumulate'),
    new Term('みせる', '見せる', 'to show'),
    new Term('しめる', '閉める', 'to shut'),
    new Term('こしかける', '掛ける', 'to sit in (western style)'),
    new Term('ねる', '寝る', 'to sleep, go to bed'),
    new Term('こぼれる', null, 'to spill, overflow'),
    new Term('ひろめる', '広める', 'to spread, make popular'),
    new Term('かまえる', '構える', 'to stand prepared'),
    new Term('とめる', '止める', 'to stop, fasten'),
    new Term('やめる', '止める', 'to stop, give up, resign'),
    new Term('つよめる', '強める', 'to strengthen'),
    new Term('かためる', '固める', 'to strengthen, harden'),
    new Term('ささえる', '支える', 'to support'),
    new Term('ひきうける', '引き受ける', 'to take charge of'),
    new Term('教える', null, 'to teach, show'),
    new Term('いましめる', '戒める', 'to tell off, caution'),
    new Term('かんがえる', '考える', 'to think'),
    new Term('なげる', '投げる', 'to throw away'),
    new Term('すてる', '捨てる', 'to throw away'),
    new Term('そだてる', '育てる', 'to rear, to bring up'),
    new Term('いじめる', '虐める', 'to torment, bully'),
    new Term('ふれる', '触れる', 'to touch'),
    new Term('のりかえる', '乗り換える', 'to transit'),
    new Term('つける', '点ける', 'to turn on, light'),
    new Term('きえる', '消える', 'to vanish, go out, be extinguished'),
    new Term('ながめる', '眺める', 'to watch, view'),
    new Term('きる', '着る', 'to wear'),
    new Term('かれる', '枯れる', 'to wither'),
    new Term('つとめる', '勤める', 'to work for'),
    new Term('きずつける', '傷つける', 'to wound, damage, harm'),
]


var godan = [
  new Term('ののしる', '', 'to abuse verbally, curse'),
  new Term('たける', '', 'to act violently'),
  new Term('たす', '足す', 'to add'),
  new Term('つく', '着く', 'to arrive'),
  new Term('こころざす', '志す', 'to aspire to'),
  new Term('おそう', '襲う', 'to attack'),
  new Term('侍る', '', 'to attend on'),
  new Term('めだつ', '目立つ', 'to attract attention, stand out'),
  new Term('焼く', '', 'to bake, grill'),
  new Term('ふける', '', 'to be absorbed in'),
  new Term('もとづく', '基づく', 'to be based on'),
  new Term('くらむ', '眩む', 'to be blinded, get dizzy'),
  new Term('なおる', '治る', 'to be cured, healed'),
  new Term('きまる', '決まる', 'to be decided, agreed upon'),
  new Term('ことなる', '異なる', 'to be different from'),
  new Term('ちがう', '違う', 'to be different, wrong'),
  new Term('みつかる', '見つかる', 'to be found'),
  new Term('喜ぶ', '', 'to be glad, pleased'),
  new Term('脂ぎる', '', 'to be greasy'),
  new Term('あせる', '焦る', 'to be in a hurry, panic'),
  new Term('こまる', '困る', 'to be in trouble'),
  new Term('なくなる', '無くなる', 'to be missing, vanish'),
  new Term('まちがう', '間違う', 'to be mistaken, make a mistake'),
  new Term('まじる', '混じる', 'to be mixed, get mingled with, join'),
  new Term('つぐ', '次ぐ', 'to be next'),
  new Term('かさなる', '重なる', 'to be piled up, overlap'),
  new Term('もうかる', '儲かる', 'to be profitable, make money'),
  new Term('まよう', '迷う', 'to be puzzled'),
  new Term('かなしむ', '悲しむ', 'to be sad, grieve'),
  new Term('たまる', '', 'to be saved, accumulated'),
  new Term('びびる', '', 'to be suprised'),
  new Term('おどろく', '驚く', 'to be suprised, amazed'),
  new Term('おとる', '劣る', 'to be worse than, inferior to'),
  new Term('なる', '', 'to become'),
  new Term('かすむ', '霞む', 'to become blurred, hazy'),
  new Term('こむ', '込む', 'to become crowded'),
  new Term('かわく', '乾く', 'to become dry'),
  new Term('すく', '空く', 'to become empty, uncrowded'),
  new Term('かたまる', '固まる', 'to become hard, bunch up'),
  new Term('いたむ', '痛む', 'to become hurt, damaged'),
  new Term('はやる', '流行る', 'to become popular'),
  new Term('つよまる', '強まる', 'to become stronger'),
  new Term('はじまる', '始まる', 'to begin'),
  new Term('ひねる', '捻る', 'to bend, twist'),
  new Term('かむ', '噛む', 'to bite'),
  new Term('さく', '咲く', 'to bloom'),
  new Term('ふく', '吹く', 'to blow, wipe'),
  new Term('のる', '乗る', 'to board, ride on'),
  new Term('いばる', '威張る', 'to boast'),
  new Term('かう', '買う', 'to buy'),
  new Term('よぶ', '呼ぶ', 'to call'),
  new Term('かまう', '構う', 'to care about, mind'),
  new Term('はこぶ', '運ぶ', 'to carry'),
  new Term('かつぐ', '担ぐ', 'to carry on one&#39;s shoulders'),
  new Term('はさむ', '挟む', 'to catch, hold (between two things)'),
  new Term('いわう', '祝う', 'to celebrate, congratulate'),
  new Term('かわる', '変わる', 'to change'),
  new Term('おう', '追う', 'to chase, drive away'),
  new Term('しゃべる', '喋る', 'to chatter'),
  new Term('えらぶ', '選ぶ', 'to choose, select'),
  new Term('くいちがう', '食い違う', 'to clash, disagree'),
  new Term('のぼる', '登る', 'to climb'),
  new Term('しまる', '閉まる', 'to close, be closed'),
  new Term('くる', '来る', 'to come'),
  new Term('まいる', '参る', 'to come/go (humble)'),
  new Term('かよう', '通う', 'to commute'),
  new Term('こらす', '凝らす', 'to concentrate'),
  new Term('つづく', '続く', 'to continue, follow'),
  new Term('ひやす', '冷やす', 'to cool, refridgerate'),
  new Term('わたる', '渡る', 'to cross'),
  new Term('こす', '越す', 'to cross, pass, move ahead'),
  new Term('くだく', '砕く', 'to crush,  smash'),
  new Term('なく', '鳴く', 'to cry'),
  new Term('きる', '切る', 'to cut'),
  new Term('おどる', '踊る', 'to dance'),
  new Term('くさる', '腐る', 'to decay, go bad, be depressed'),
  new Term('いつわる', '偽る', 'to deceive, lie'),
  new Term('かざる', '飾る', 'to decorate, display'),
  new Term('減る', '', 'to decrease, reduce'),
  new Term('まかす', '負かす', 'to defeat'),
  new Term('いいあらわす', '言い表す', 'to describe'),
  new Term('くずす', '崩す', 'to destroy, break down'),
  new Term('ほろぼす', '滅ぼす', 'to destroy, ruin'),
  new Term('しぬ', '死ぬ', 'to die'),
  new Term('ほる', '掘る', 'to dig'),
  new Term('はなしあう', '話し合う', 'to Discuss'),
  new Term('いやがる', '嫌がる', 'to dislike, hate'),
  new Term('やる', '', 'to do, give'),
  new Term('する', '', 'to do, make'),
  new Term('のむ', '飲む', 'to drink'),
  new Term('かわかす', '乾かす', 'to dry'),
  new Term('ほす', '干す', 'to dry, air'),
  new Term('だく', '抱く', 'to embrace, hug'),
  new Term('はげます', '励ます', 'to encourage'),
  new Term('おわる', '終わる', 'to end'),
  new Term('たのしむ', '楽しむ', 'to enjoy, have fun'),
  new Term('はいる', '入る', 'to enter'),
  new Term('だす', '出す', 'to extract, take out'),
  new Term('むかう', '向かう', 'to face, turn/head toward'),
  new Term('ねむる', '眠る', 'to fall asleep'),
  new Term('ころぶ', '転ぶ', 'to fall down'),
  new Term('ふる', '降る', 'to fall from the sky'),
  new Term('さがる', '下がる', 'to fall, drop, hang'),
  new Term('ちる', '散る', 'to fall, scatter'),
  new Term('こわがる', '怖がる', 'to fear'),
  new Term('しずむ', '沈む', 'to feel depressed, sink'),
  new Term('つる', '釣る', 'to fish'),
  new Term('たたむ', '畳む', 'to fold'),
  new Term('ならぶ', '並ぶ', 'to form a line, equal'),
  new Term('あつまる', '集まる', 'to gather, assemble'),
  new Term('あおぐ', '仰ぐ', 'to gaze, look up, respect, fan oneself'),
  new Term('おこる', '怒る', 'to get angry'),
  new Term('くもる', '曇る', 'to get cloudy'),
  new Term('ふとる', '太る', 'to get fat, put on weight'),
  new Term('なじむ', '馴染む', 'to get used to, adapt to'),
  new Term('あたたまる', '暖まる', 'to get warm, warm up'),
  new Term('かえす', '返す', 'to give back, return (something to someone)'),
  new Term('にらむ', '睨む', 'to glare at, keep an eye on'),
  new Term('いく', '行く', 'to go'),
  new Term('すすむ', '進む', 'to go forward, advance'),
  new Term('くるう', '狂う', 'to go mad, be out of order'),
  new Term('まわる', '回る', 'to go round'),
  new Term('あがる', '上がる', 'to go up, rise'),
  new Term('にぎる', '握る', 'to grasp'),
  new Term('しずまる', '静まる', 'to grow quiet'),
  new Term('そだつ', '育つ', 'to grow up, be raised'),
  new Term('わたす', '渡す', 'to hand over'),
  new Term('ある', '有る', 'to have, exist'),
  new Term('もつ', '持つ', 'to have, hold, own'),
  new Term('てつだう', '手伝う', 'to help'),
  new Term('かくれる', '隠れる', 'to hide (oneself)'),
  new Term('かくす', '隠す', 'to hide (something)'),
  new Term('ほのめかす', '仄めかす', 'to hint'),
  new Term('ぶつかる', '', 'to hit, collide with, clash'),
  new Term('いそぐ', '急ぐ', 'to hurry'),
  new Term('しめす', '示す', 'to indicate, point out'),
  new Term('すう', '吸う', 'to inhale, sip, smoke'),
  new Term('まねく', '招く', 'to invite, beckon to'),
  new Term('さそう', '誘う', 'to invite, tempt'),
  new Term('とぶ', '飛ぶ', 'to jump, fly'),
  new Term('かう', '飼う', 'to Keep (a pet), raise, rear'),
  new Term('ける', '蹴る', 'to kick'),
  new Term('ころす', '殺す', 'to kill'),
  new Term('しる', '知る', 'to know'),
  new Term('わらう', '笑う', 'to laugh'),
  new Term('もらす', '漏らす', 'to leak, disclose'),
  new Term('かたむく', '傾く', 'to lean towards, tilt'),
  new Term('習う', '', 'to learn'),
  new Term('まなぶ', '学ぶ', 'to learn, study'),
  new Term('のこす', '残す', 'to leave behind, save'),
  new Term('のこる', '残る', 'to left over, remain'),
  new Term('かす', '貸す', 'to lend'),
  new Term('ふせる', '臥せる', 'to lie down'),
  new Term('このむ', '好む', 'to like'),
  new Term('かぎる', '限る', 'to limit'),
  new Term('きく', '聞く', 'to listen'),
  new Term('くらす', '暮らす', 'to live'),
  new Term('すむ', '住む', 'to live, reside'),
  new Term('みなす', '見做す', 'to look upon, consider'),
  new Term('おとす', '落とす', 'to lose, drop'),
  new Term('失う', '', 'to lose, part with'),
  new Term('なくす', '無くす', 'to lose, remove'),
  new Term('かわいがる', '可愛がる', 'to love, be affectionate, tender'),
  new Term('さわぐ', '騒ぐ', 'to make a noise, be rowdy'),
  new Term('からかう', '', 'to make fun of, play jokes on'),
  new Term('かせぐ', '稼ぐ', 'to make money, earn a living'),
  new Term('つくる', '作る', 'to make, build, create'),
  new Term('あう', '合う', 'to match, fit'),
  new Term('じゅくす', '熟す', 'to mature, ripen'),
  new Term('あう', '会う', 'to meet'),
  new Term('どじる', '', 'to mess up'),
  new Term('うごく', '動く', 'to move'),
  new Term('いる', '要る', 'to need'),
  new Term('おこる', '起こる', 'to occur, happen'),
  new Term('あく', '開く', 'to open, become vacant'),
  new Term('ひらく', '開く', 'to open, hold (an event, party etc)'),
  new Term('みのがす', '見逃す', 'to overlook, let pass'),
  new Term('たおす', '倒す', 'to overthrow, knock down'),
  new Term('ぬる', '塗る', 'to paint'),
  new Term('払う', '', 'to pay'),
  new Term('ほろびる', '滅びる', 'to perish'),
  new Term('くどく', '口説く', 'to persuade, make advances (to a woman)'),
  new Term('ひろう', '拾う', 'to pick up, find'),
  new Term('あそぶ', '遊ぶ', 'to play'),
  new Term('ひく', '弾く', 'to play (string instrument)'),
  new Term('たくらむ', '企む', 'to plot, scheme'),
  new Term('さす', '刺す', 'to point out, sting, stab'),
  new Term('みがく', '磨く', 'to polish'),
  new Term('のばす', '', 'to postpone, extend'),
  new Term('ながす', '流がす', 'to pour, let flow'),
  new Term('いのる', '祈る', 'to pray, wish for'),
  new Term('まもる', '守る', 'to protect'),
  new Term('かばう', '庇う', 'to protect, look after'),
  new Term('ひく', '引く', 'to pull'),
  new Term('なぐる', '殴る', 'to punch, hit'),
  new Term('おす', '押す', 'to push, press'),
  new Term('しまう', '', 'to put away'),
  new Term('はく', '履く', 'to put on, wear (on feet or legs - trousers/shoes etc)'),
  new Term('おく', '置く', 'to put, place'),
  new Term('とどく', '届く', 'to reach'),
  new Term('およぶ', '及ぶ', 'to reach, extend to'),
  new Term('よむ', '読む', 'to read'),
  new Term('もらう', '貰う', 'to receive, get'),
  new Term('へらす', '減らす', 'to reduce, decrease'),
  new Term('ことわる', '断わる', 'to refuse, decline'),
  new Term('おしむ', '惜しむ', 'to regret, be reluctant'),
  new Term('ぬぐ', '脱ぐ', 'to remove'),
  new Term('はずす', '外す', 'to remove, unfasten'),
  new Term('なおす', '直す', 'to repair, cure'),
  new Term('くりかえす', '繰り返す', 'to repeat'),
  new Term('たのむ', '頼む', 'to request, order, ask favour'),
  new Term('すくう', '救う', 'to rescue, save'),
  new Term('やすむ', '休む', 'to rest, sleep'),
  new Term('かえる', '帰る', 'to return'),
  new Term('もどる', '戻る', 'to return, go back'),
  new Term('もどす', '戻す', 'to return, put back, vomit'),
  new Term('みのる', '実る', 'to ripen, bear fruit'),
  new Term('はしる', '走る', 'to run'),
  new Term('かける', '', 'to run, canter, gallop'),
  new Term('いう', '言う', 'to say'),
  new Term('しかる', '叱る', 'to scold, tell off'),
  new Term('さがす', '探す', 'to search for'),
  new Term('うる', '売る', 'to sell'),
  new Term('おくる', '送る', 'to send, see off'),
  new Term('きづく', '気付く', 'to sense, realize, notice'),
  new Term('はなれる', '離れる', 'to separate from, leave'),
  new Term('ひかる', '光る', 'to shine, glitter'),
  new Term('かがやく', '輝く', 'to shine, sparkle'),
  new Term('うたう', '歌う', 'to sing'),
  new Term('すわる', '座る', 'to sit'),
  new Term('すべる', '滑る', 'to slip'),
  new Term('こわす', '壊す', 'to smash'),
  new Term('ぬる', '塗る', 'to smear on'),
  new Term('はなす', '話す', 'to speak'),
  new Term('こぼす', '', 'to spill'),
  new Term('いいふらす', '言いふらす', 'to spread a rumour/story'),
  new Term('しく', '敷く', 'to spread out, lay'),
  new Term('ひろまる', '広まる', 'to spread, become popular'),
  new Term('がんばる', '頑張る', 'to stand firm, try your best'),
  new Term('みはる', '見張る', 'to stand guard, keep lookout'),
  new Term('立つ', '', 'to stand up'),
  new Term('ぬすむ', '盗む', 'to steal'),
  new Term('ふむ', '踏む', 'to step on'),
  new Term('はる', '張る', 'to stick, put something on'),
  new Term('とまる', '止まる', 'to stop'),
  new Term('だまる', '黙る', 'to stop talking'),
  new Term('はげむ', '励む', 'to strive, make every effort'),
  new Term('くるしむ', '苦しむ', 'to suffer'),
  new Term('いいだす', '言い出す', 'to suggest, start talking'),
  new Term('かなう', '適う', 'to suit, conform to'),
  new Term('かこむ', '囲む', 'to surround, enclose'),
  new Term('およぐ', '泳ぐ', 'to swim'),
  new Term('ぬぐ', '脱ぐ', 'to take off, remove (shoes, clothes)'),
  new Term('かかわる', '関わる', 'to take part in, affect'),
  new Term('かかる', '掛かる', 'to take, begin, be hanging'),
  new Term('とる', '取る', 'to take, steal'),
  new Term('いいかえる', '言い換える', 'to talk back, retort'),
  new Term('ひやかす', '冷やかす', 'to tease, make fun of'),
  new Term('ためす', '試す', 'to test, try, taste'),
  new Term('おもう', '思う', 'to think'),
  new Term('思いつく', '', 'to Think of / come into your mind'),
  new Term('しばる', '縛る', 'to tie up, bind'),
  new Term('むすぶ', '結ぶ', 'to tie, knot, make a contract'),
  new Term('さわる', '触る', 'to touch or feel (with hands)'),
  new Term('だます', '騙す', 'to trick'),
  new Term('けす', '消す', 'to turn off, erase'),
  new Term('まがる', '曲がる', 'to turn, bend'),
  new Term('捩じる', '', 'to twist'),
  new Term('わかる', '分かる', 'to understand'),
  new Term('くむ', '組む', 'to unite, put together'),
  new Term('ほどく', '解く', 'to untie'),
  new Term('つかう', '使う', 'to use, operate'),
  new Term('まつ', '待つ', 'to wait'),
  new Term('おこす', '起こす', 'to wake (somebody) up'),
  new Term('あるく', '歩く', 'to walk'),
  new Term('ほしがる', '欲しがる', 'to want, desire'),
  new Term('あらう', '洗う', 'to wash'),
  new Term('かぶる', '被る', 'to wear (on your head), put on'),
  new Term('勝つ', '', 'to win'),
  new Term('はたらく', '働く', 'to work'),
  new Term('きづかう', '気遣う', 'to worry about, consider'),
  new Term('まつる', '祀る', 'to worship'),
  new Term('つつむ', '包む', 'to wrap'),
  new Term('かく', '書く', 'to write'),
]

var ii_adjective = [
  new Term("あぶない","危ない","dangerous"),
  new Term("あかい","赤い","red"),
  new Term("あかるい","明るい","bright"),
  new Term("あまい","甘い","sweet"),
  new Term("あおい","青い","blue"),
  new Term("あたらしい","新しい","new"),
  new Term("あたたかい","温かい","warm"),
  new Term("あつい","暑い","hot"),
  new Term("ちいさい","小さい","small"),
  new Term("ちいさい","小さい","small"),
  new Term("ちかい","近い","near, close"),
  new Term("ふかい","深い","deep"),
  new Term("ふるい","古い","old"),
  new Term("ふとい","太い","thick - fat"),
  new Term("はやい","速い","fast"),
  new Term("はやい","早い","early"),
  new Term("ひどい","酷い","awful"),
  new Term("ひくい","低い","low"),
  new Term("ひろい","広い","wide"),
  new Term("ほそい","細い","thin - fine"),
  new Term("いそがしい","忙しい","busy"),
  new Term("いたい","痛い","painful"),
  new Term("からい","辛い","hot, spicy"),
  new Term("かるい","軽い","light (not heavy)"),
  new Term("かわいい","可愛い","cute, pretty"),
  new Term("きびしい","厳しい","strict"),
  new Term("きいろい","黄色い","yellow"),
  new Term("きたない","汚い","dirty"),
  new Term("こわい","怖い","friightening"),
  new Term("くらい","暗い","dark"),
  new Term("くろい","黒い","black"),
  new Term("まるい","丸い","round"),
  new Term("まずい","不味い","bad tasting"),
  new Term("めずらしい","珍しい","rare"),
  new Term("みじかい","短い","short"),
  new Term("むずかしい","難しい","difficult"),
  new Term("ながい","長い","long"),
  new Term("ねむい","眠い","sleepy"),
  new Term("にがい","苦い","bitter"),
  new Term("おいしい","美味しい","delicious"),
  new Term("おもい","重い","heavy"),
  new Term("おもしろい","面白い","interesting - funny"),
  new Term("おおきい","大きい","big"),
  new Term("おそい","遅い","late, slow"),
  new Term("さびしい","寂しい","lonely"),
  new Term("さむい","寒い","cold"),
  new Term("せまい","狭い","narrow"),
  new Term("しろい","白い","white"),
  new Term("すばらしい","素晴らしい","wonderful"),
  new Term("すごい","凄い","terrific"),
  new Term("すずしい","涼しい","cool"),
  new Term("ただしい","正しい","correct"),
  new Term("たかい","高い","expensive, high, tall"),
  new Term("たのしい","楽しい","enjoyable, fun"),
  new Term("つまらない","詰らない","uninteresting"),
  new Term("つめたい","冷たたい","cold"),
  new Term("つよい","強い","strong"),
  new Term("うすい","薄い","thin"),
  new Term("わかい","若い","young"),
  new Term("やさしい","優しい","gentle"),
  new Term("やすい","安い","cheap"),
  new Term("やわらかい","柔らかい","tender - soft"),
]

var na_adjective = [
  new Term("すき", "好き", "Like, love"),
  new Term("けっこう", "結構", "wonderful,enviable"),
  new Term("ゆうめい", "有名", "Famous"),
  new Term("きれい", "きれい", "Pretty, beautiful"),
  new Term("ていねい", "丁寧", "polite"),
  new Term("きらい", "嫌い", "to not like"),
  new Term("しずか", "静か", "quiet"),
  new Term("ひま", "暇", "free (time)"),
  new Term("にぎやか", "賑やか", "lively"),
  new Term("べんり", "便利", "useful, convenient"),
  new Term("げんき", "元気", "healthy"),
  new Term("いろいろ", "色々", "various"),
  new Term("だいじょうぶ", "大丈夫", "OK,fine"),
  new Term("じょうぶ", "丈夫", "Healthy, robust"),
  new Term("たいへん", "大変", "Terrible"),
  new Term("らく", "楽", "comfortable, easy"),
  new Term("いや", null, "unpleasant"),
  new Term("たいせつ", "大切", "important,precious"),
  new Term("じょうず", "上手", "good, skilled"),
  new Term("へた", "下手", "bad at, unskilled"),
  new Term("いっしょうけんめい", "一生懸命", "to one’s fullest possibility"),
  new Term("きけん", "危険", "Dangerous"),
  new Term("ざんねん", "残念", "regrettable, dissapointing"),
  new Term("しんぱい", "心配", "care, worry"),
  new Term("じゆう", "自由", "free, unrestrained"),
  new Term("じゅうぶん", "十分", "sufficient"),
  new Term("だいすき", "大好き", "Passionate"),
  new Term("てきとう", "適当", "proper, suitable"),
  new Term("とくべつ", "特別", "special"),
  new Term("ねっしん", "熱心", "eager, enthusiastic"),
  new Term("ひつよう", "必要", "necessary"),
  new Term("まじめ", null , "serious, earnest"),
  new Term("まっすぐ", "真直ぐ", "straight"),
  new Term("むり", "無理", "unreasonnable"),
  new Term("りっぱ", "立派", "Excellent, splendid,fine"),
  new Term("すき", "好き", "Like, love"),
  new Term("たいせつ", "大切", "important, great"),
  new Term("けっこう", "結構", "wonderful,enviable"),
  new Term("おおぜい", "大勢", "lots of people, crowded"),
  new Term("ゆうめい", "有名", "Famous"),
  new Term("きれい", null, "Pretty, beautiful"),
  new Term("かんたん", "簡単", "Easy"),
  new Term("ていねい", "丁寧", "polite"),
  new Term("しずか", "静か", "Quiet"),
  new Term("きらい", "嫌い", "to not like"),
  new Term("しずか", "静か", "quiet"),
  new Term("ひま", "暇", "free (time)"),
  new Term("にぎやか", "賑やか", "lively"),
  new Term("べんり", "便利", "useful, convenient"),
  new Term("げんき", "元気", "healthy"),
  new Term("いろいろ", "色々", "various"),
  new Term("だいじょうぶ", "大丈夫", "OK, fine"),
  new Term("じょうぶ", "丈夫", "Healthy, robust"),
  new Term("たいへん", "大変", "Terrible"),
  new Term("らく", "楽", "comfortable, easy"),
  new Term("いや", "嫌", "unpleasant"),
  new Term("たいせつ", "大切", "important,precious"),
  new Term("じょうず", "上手", "good, skilled"),
  new Term("へた", "下手", "bad at, unskilled"),
  new Term("いっしょうけんめい", "一生懸命", "to one’s fullest possibility"),
  new Term("きけん", "危険", "Dangerous"),
  new Term("ざんねん", "残念", "regrettable, dissapointing"),
  new Term("しんぱい", "心配", "care, worry"),
  new Term("じゆう", "自由", "free, unrestrained"),
  new Term("じゅうぶん", "十分", "sufficient"),
  new Term("だいすき", "大好き", "Passionate"),
  new Term("てきとう", "適当", "proper, suitable"),
  new Term("とくべつ", "特別", "special"),
  new Term("ねっしん", "熱心", "eager, enthusiastic"),
  new Term("ひつよう", "必要", "necessary"),
  new Term("まじめ", "真面目", "serious, earnest"),
  new Term("まっすぐ", "真直ぐ", "straight"),
  new Term("むり", "無理", "unreasonnable"),
  new Term("りっぱ", "立派", "Excellent, splendid,fine"),
  new Term("ふべん", "不便", "Inconvenient"),

]