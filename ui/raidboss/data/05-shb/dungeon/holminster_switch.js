'use strict';

[{
  zoneId: ZoneId.HolminsterSwitch,
  timelineFile: 'holminster_switch.txt',
  triggers: [
    {
      id: 'Holminster Path of Light',
      netRegex: NetRegexes.startsUsing({ id: '3DC5', source: 'Forgiven Dissonance', capture: false }),
      netRegexDe: NetRegexes.startsUsing({ id: '3DC5', source: 'Geläutert(?:e|er|es|en) Widerspruch', capture: false }),
      netRegexFr: NetRegexes.startsUsing({ id: '3DC5', source: 'Dissonance Pardonnée', capture: false }),
      netRegexJa: NetRegexes.startsUsing({ id: '3DC5', source: 'フォーギヴン・ディソナンス', capture: false }),
      netRegexCn: NetRegexes.startsUsing({ id: '3DC5', source: '得到宽恕的失调', capture: false }),
      netRegexKo: NetRegexes.startsUsing({ id: '3DC5', source: '면죄된 불화', capture: false }),
      condition: function(data) {
        return data.role == 'healer';
      },
      response: Responses.aoe(),
    },
    {
      id: 'Holminster Pillory',
      netRegex: NetRegexes.startsUsing({ id: '3DC4', source: 'Forgiven Dissonance' }),
      netRegexDe: NetRegexes.startsUsing({ id: '3DC4', source: 'Geläutert(?:e|er|es|en) Widerspruch' }),
      netRegexFr: NetRegexes.startsUsing({ id: '3DC4', source: 'Dissonance Pardonnée' }),
      netRegexJa: NetRegexes.startsUsing({ id: '3DC4', source: 'フォーギヴン・ディソナンス' }),
      netRegexCn: NetRegexes.startsUsing({ id: '3DC4', source: '得到宽恕的失调' }),
      netRegexKo: NetRegexes.startsUsing({ id: '3DC4', source: '면죄된 불화' }),
      condition: function(data, matches) {
        return matches.target == data.me || data.role == 'healer';
      },
      response: Responses.tankBuster(),
    },
    {
      id: 'Holminster Tickler',
      netRegex: NetRegexes.startsUsing({ id: '3DCF', source: 'Tesleen, The Forgiven' }),
      netRegexDe: NetRegexes.startsUsing({ id: '3DCF', source: 'Tesleen (?:der|die|das) Bekehrt(?:e|er|es|en)' }),
      netRegexFr: NetRegexes.startsUsing({ id: '3DCF', source: 'Tesleen Pardonnée' }),
      netRegexJa: NetRegexes.startsUsing({ id: '3DCF', source: 'フォーギヴン・テスリーン' }),
      netRegexCn: NetRegexes.startsUsing({ id: '3DCF', source: '得到宽恕的泰丝琳' }),
      netRegexKo: NetRegexes.startsUsing({ id: '3DCF', source: '면죄된 테슬린' }),
      condition: function(data, matches) {
        return matches.target == data.me || data.role == 'healer';
      },
      response: Responses.tankBuster(),
    },
    {
      id: 'Holminster Bridle',
      netRegex: NetRegexes.startsUsing({ id: '3DD0', source: 'Tesleen, The Forgiven', capture: false }),
      netRegexDe: NetRegexes.startsUsing({ id: '3DD0', source: 'Tesleen (?:der|die|das) Bekehrt(?:e|er|es|en)', capture: false }),
      netRegexFr: NetRegexes.startsUsing({ id: '3DD0', source: 'Tesleen Pardonnée', capture: false }),
      netRegexJa: NetRegexes.startsUsing({ id: '3DD0', source: 'フォーギヴン・テスリーン', capture: false }),
      netRegexCn: NetRegexes.startsUsing({ id: '3DD0', source: '得到宽恕的泰丝琳', capture: false }),
      netRegexKo: NetRegexes.startsUsing({ id: '3DD0', source: '면죄된 테슬린', capture: false }),
      condition: function(data) {
        return data.role == 'healer';
      },
      response: Responses.aoe(),
    },
    {
      id: 'Holminster Flagellation',
      netRegex: NetRegexes.startsUsing({ id: '3DD5', source: 'Tesleen, The Forgiven', capture: false }),
      netRegexDe: NetRegexes.startsUsing({ id: '3DD5', source: 'Tesleen (?:der|die|das) Bekehrt(?:e|er|es|en)', capture: false }),
      netRegexFr: NetRegexes.startsUsing({ id: '3DD5', source: 'Tesleen Pardonnée', capture: false }),
      netRegexJa: NetRegexes.startsUsing({ id: '3DD5', source: 'フォーギヴン・テスリーン', capture: false }),
      netRegexCn: NetRegexes.startsUsing({ id: '3DD5', source: '得到宽恕的泰丝琳', capture: false }),
      netRegexKo: NetRegexes.startsUsing({ id: '3DD5', source: '면죄된 테슬린', capture: false }),
      response: Responses.spread(),
    },
    {
      id: 'Holminster Exorcise Stack',
      netRegex: NetRegexes.headMarker({ id: '003E' }),
      response: Responses.stackMarkerOn(),
    },
    {
      id: 'Holminster Scavenger',
      netRegex: NetRegexes.startsUsing({ id: '3DD8', source: 'Philia', capture: false }),
      netRegexDe: NetRegexes.startsUsing({ id: '3DD8', source: 'Philia', capture: false }),
      netRegexFr: NetRegexes.startsUsing({ id: '3DD8', source: 'Philia', capture: false }),
      netRegexJa: NetRegexes.startsUsing({ id: '3DD8', source: 'フィリア', capture: false }),
      netRegexCn: NetRegexes.startsUsing({ id: '3DD8', source: '斐利亚', capture: false }),
      netRegexKo: NetRegexes.startsUsing({ id: '3DD8', source: '필리아', capture: false }),
      condition: function(data) {
        return data.role == 'healer';
      },
      response: Responses.aoe(),
    },
    {
      id: 'Holminster Head Crusher',
      netRegex: NetRegexes.startsUsing({ id: '3DD7', source: 'Philia' }),
      netRegexDe: NetRegexes.startsUsing({ id: '3DD7', source: 'Philia' }),
      netRegexFr: NetRegexes.startsUsing({ id: '3DD7', source: 'Philia' }),
      netRegexJa: NetRegexes.startsUsing({ id: '3DD7', source: 'フィリア' }),
      netRegexCn: NetRegexes.startsUsing({ id: '3DD7', source: '斐利亚' }),
      netRegexKo: NetRegexes.startsUsing({ id: '3DD7', source: '필리아' }),
      condition: function(data, matches) {
        return matches.target == data.me || data.role == 'healer';
      },
      response: Responses.tankBuster(),
    },
    {
      id: 'Holminster Chain Down',
      netRegex: NetRegexes.headMarker({ id: '005C' }),
      condition: Conditions.targetIsNotYou(),
      infoText: function(data, matches, output) {
        return output.text({ player: data.ShortName(matches.target) });
      },
      outputStrings: {
        text: {
          en: 'Break chain on ${player}',
          de: 'Kette von ${player} brechen',
          fr: 'Cassez les chaînes de ${player}',
          ja: '${player}の線を取る',
          cn: '截断${player}的线',
          ko: '${player}의 사슬 부수기',
        },
      },
    },
    {
      id: 'Holminster Taphephobia',
      netRegex: NetRegexes.headMarker({ id: '008B' }),
      condition: Conditions.targetIsYou(),
      response: Responses.spread(),
    },
    {
      id: 'Holminster Into The Light',
      netRegex: NetRegexes.startsUsing({ id: '4350', source: 'Philia', capture: false }),
      netRegexDe: NetRegexes.startsUsing({ id: '4350', source: 'Philia', capture: false }),
      netRegexFr: NetRegexes.startsUsing({ id: '4350', source: 'Philia', capture: false }),
      netRegexJa: NetRegexes.startsUsing({ id: '4350', source: 'フィリア', capture: false }),
      netRegexCn: NetRegexes.startsUsing({ id: '4350', source: '斐利亚', capture: false }),
      netRegexKo: NetRegexes.startsUsing({ id: '4350', source: '필리아', capture: false }),
      infoText: (data, _, output) => output.text(),
      outputStrings: {
        text: {
          en: 'Line Stack',
          de: 'Sammeln in einer Linie',
          fr: 'Packez-vous en ligne',
          ja: '頭割り',
          cn: '直线分摊',
          ko: '직선 쉐어',
        },
      },
    },
    {
      id: 'Holminster Left Knout',
      netRegex: NetRegexes.startsUsing({ id: '3DE7', source: 'Philia', capture: false }),
      netRegexDe: NetRegexes.startsUsing({ id: '3DE7', source: 'Philia', capture: false }),
      netRegexFr: NetRegexes.startsUsing({ id: '3DE7', source: 'Philia', capture: false }),
      netRegexJa: NetRegexes.startsUsing({ id: '3DE7', source: 'フィリア', capture: false }),
      netRegexCn: NetRegexes.startsUsing({ id: '3DE7', source: '斐利亚', capture: false }),
      netRegexKo: NetRegexes.startsUsing({ id: '3DE7', source: '필리아', capture: false }),
      response: Responses.goRight(),
    },
    {
      id: 'Holminster Right Knout',
      netRegex: NetRegexes.startsUsing({ id: '3DE6', source: 'Philia', capture: false }),
      netRegexDe: NetRegexes.startsUsing({ id: '3DE6', source: 'Philia', capture: false }),
      netRegexFr: NetRegexes.startsUsing({ id: '3DE6', source: 'Philia', capture: false }),
      netRegexJa: NetRegexes.startsUsing({ id: '3DE6', source: 'フィリア', capture: false }),
      netRegexCn: NetRegexes.startsUsing({ id: '3DE6', source: '斐利亚', capture: false }),
      netRegexKo: NetRegexes.startsUsing({ id: '3DE6', source: '필리아', capture: false }),
      response: Responses.goLeft(),
    },
  ],
  timelineReplace: [
    {
      'locale': 'de',
      'replaceSync': {
        'The Wound': 'Lavendellichtung',
        'The Auction': 'Viehmarkt',
        'The manor house courtyard': 'Garten des Herrenhauses',
        'Forgiven Dissonance': 'Geläutert(?:e|er|es|en) Widerspruch',
        'Tesleen, the Forgiven': 'Tesleen (?:der|die|das) Bekehrt(?:e|er|es|en)',
        'Philia': 'Philia',
      },
      'replaceText': {
        'Aethersup': 'Ätherfresser',
        'Brazen Bull': 'Garotte',
        'Chain Down': 'Schneidende Fesseln',
        'Exorcise': 'Ikonenschreck',
        'Fevered Flagellation': 'Grimmige Geißelung',
        'Fierce Beating': 'Gnadenlose Geißel',
        'Gibbet Cage': 'Eiserne Jungfrau',
        'Head Crusher': 'Knochenmalmer',
        'Heretic\'s Fork': 'Blutadler',
        'Holy Water': 'Segenszeichen',
        'Into The Light': 'Läuterndes Licht',
        'Left/Right Knout': 'Linker/Rechter Staupenschlag',
        'Light Shot': 'Lichtschuss',
        'Pendulum': 'Grube und Pendel',
        'Pillory': 'Herzreißer',
        'Right/Left Knout': 'Rechter/Linker Staupenschlag',
        'Scavenger\'s Daughter': 'Radebrechen',
        'Scold\'s Bridle': 'Schandmal',
        'Taphephobia': 'Taphephobie',
        'The Path Of Light': 'Pfad des Lichts',
        'The Tickler': 'Handauflegung',
        'Thumbscrew': 'Pfählung',
        'Wooden Horse': 'Estrapade',
      },
    },
    {
      'locale': 'fr',
      'replaceSync': {
        'Philia': 'Philia',
        'Forgiven Dissonance': 'Dissonance pardonnée',
        'Tesleen, the Forgiven': 'Tesleen pardonnée',
        'The Auction': 'la place du Cheptel',
        'The manor house courtyard': 'l\'esplanade du Manoir',
        'The Wound': 'La Talure',
      },
      'replaceText': {
        'The Path Of Light': 'Voie de lumière',
        'Brazen Bull': 'Taureau d\'airain',
        'Gibbet Cage': 'Gibet de fer',
        'Thumbscrew': 'Écraseur à vis',
        'Heretic\'s Fork': 'Fourche hérétique',
        'Light Shot': 'Tir de lumière',
        'Wooden Horse': 'Chevalet',
        'Pillory': 'Pilori',
        'The Tickler': 'Chatouillement',
        'Scold\'s Bridle': 'Bride-Bavarde',
        'Fevered Flagellation': 'Flagellation frénétique',
        'Exorcise': 'Exorcisme',
        'Holy Water': 'Eau bénite',
        'Into The Light': 'Dans la lumière',
        'Pendulum Tank': 'Lame pendulaire Tank',
        'Pendulum Center': 'Lame pendulaire Centre',
        'Left/Right Knout': 'Knout Gauche/Droit',
        'Right/Left Knout': 'Knout Droit/Gauche',
        'Chain Down': 'Enchaînement',
        'Aethersup': 'Sapement éthéréen',
        'Scavenger\'s Daughter': 'Fille du Boueur',
        'Head Crusher': 'Écraseur de tête',
        'Fierce Beating': 'Raclée brutale',
        'Taphephobia': 'Taphophobie',
      },
    },
    {
      'locale': 'ja',
      'replaceSync': {
        'Philia': 'フィリア',
        'Forgiven Dissonance': 'フォーギヴン・ディソナンス',
        'Tesleen, the Forgiven': 'フォーギヴン・テスリーン',
        'The Auction': '家畜市広場',
        'The manor house courtyard': 'マナーハウスの前庭',
        'The Wound': '紫黒のギャップ',
      },
      'replaceText': {
        'The Path Of Light': '光の波動',
        'Brazen Bull': 'ブレイズンブル',
        'Gibbet Cage': 'ジベットケージ',
        'Thumbscrew': 'サムスクリュー',
        'Heretic\'s Fork': 'ヘレティックフォーク',
        'Light Shot': 'ライトショット',
        'Wooden Horse': 'ウッデンホース',
        'Pillory': 'ピロリー',
        'The Tickler': 'ティッカー',
        'Scold\'s Bridle': 'スコルドブライダル',
        'Fevered Flagellation': 'フィバードフラジレーション',
        'Exorcise': 'エクソサイズ',
        'Holy Water': 'ホリーウォーター',
        'Into The Light': 'インツーライト',
        'Pendulum Tank': 'ペンデュラム：タンク',
        'Pendulum Center': 'ペンデュラム：中央',
        'Left/Right Knout': 'クヌート：左／右',
        'Right/Left Knout': 'クヌート：右／左',
        'Chain Down': 'チェーンダウン',
        'Aethersup': 'エーテルサップ',
        'Scavenger\'s Daughter': 'スカベンジャーズドーター',
        'Head Crusher': 'ヘッドクラッシャー',
        'Fierce Beating': 'フィアスビーティング',
        'Taphephobia': 'タフィフォビア',
      },
    },
    {
      'locale': 'ko',
      'replaceSync': {
        'The Wound': '검보라 틈',
        'The Auction': '가축 시장',
        'The manor house courtyard': '저택 앞뜰',
        'Forgiven Dissonance': '면죄된 불화',
        'Tesleen, the Forgiven': '면죄된 테슬린',
        'Philia': '필리아',
      },
      'replaceText': {
        'The Path Of Light': '빛의 파동',
        'Brazen Bull': '빛올가미',
        'Gibbet Cage': '교형틀',
        'Thumbscrew': '손가락 으깨기',
        'Heretic\'s Fork': '이단자의 창',
        'Light Shot': '빛 발사',
        'Wooden Horse': '삼각목마',
        'Pillory': '항쇄',
        'The Tickler': '심장 찌르기',
        'Scold\'s Bridle': '입막음 굴레',
        'Fevered Flagellation': '불타는 채찍질',
        'Exorcise': '구마 의식',
        'Holy Water': '성수',
        'Into The Light': '빛 속으로',
        'Pendulum Tank': '진자 (탱커)',
        'Pendulum Center': '진자 (중앙)',
        'Left/Right Knout': '왼쪽/오른쪽 잡아채기',
        'Right/Left Knout': '오른쪽/왼쪽 잡아채기',
        'Chain Down': '사슬 구속',
        'Aethersup': '에테르 섭취',
        'Scavenger\'s Daughter': '쇠고랑',
        'Head Crusher': '머리 부수기',
        'Fierce Beating': '공포의 매질',
        'Taphephobia': '공포의 생매장',
      },
    },
    {
      'locale': 'cn',
      'replaceSync': {
        'The Wound': '紫黑裂痕',
        'The Auction': '家畜卖场',
        'The manor house courtyard': '领主府前院',
        'Forgiven Dissonance': '得到宽恕的失调',
        'Tesleen, the Forgiven': '得到宽恕的泰丝琳',
        'Philia': '斐利亚',
      },
      'replaceText': {
        'Aethersup': '吸取以太',
        'Brazen Bull': '铜牛',
        'Chain Down': '束缚',
        'Exorcise': '驱魔',
        'Fevered Flagellation': '鞭笞',
        'Fierce Beating': '激烈捶打',
        'Gibbet Cage': '绞刑笼',
        'Head Crusher': '裂脑',
        'Heretic\'s Fork': '异端十字叉',
        'Holy Water': '圣水',
        'Into The Light': '埋没之光',
        'Left/Right Knout': '左/右鞭打',
        'Light Shot': '光线射击',
        'Pendulum': '钟摆',
        'Pillory': '颈手枷',
        'Right/Left Knout': '右/左鞭打',
        'Scavenger\'s Daughter': '拾荒者之女',
        'Scold\'s Bridle': '毒舌钩',
        'Taphephobia': '土埋',
        'The Path Of Light': '光之波动',
        'The Tickler': '抓挠',
        'Thumbscrew': '螺旋突刺',
        'Wooden Horse': '木马',
        'Tank': '坦克',
        'Center': '中心',
      },
    },
  ],
}];
