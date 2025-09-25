// --- 共通データ ---
// このファイルでデータを変更すると、選手用・コーチ用の両方のアプリに反映されます。

// ランク情報
const RANKS = {
    1: { name: 'BASIC',    name_jp: 'ベーシック', badgeUrl: 'img/basic.png' },
    2: { name: 'REGULAR',  name_jp: 'レギュラー', badgeUrl: 'img/regular.png' },
    3: { name: 'BRONZE',   name_jp: 'ブロンズ',   badgeUrl: 'img/bronze.png' },
    4: { name: 'SILVER',   name_jp: 'シルバー',   badgeUrl: 'img/silver.png' },
    5: { name: 'GOLD',     name_jp: 'ゴールド',   badgeUrl: 'img/gold.png' },
    6: { name: 'PLATINUM', name_jp: 'プラチナ',   badgeUrl: 'img/platinum.png' },
};

// クエスト情報
const MOCK_QUESTS = {
    1: [
        { id: 101, title: 'ドリブル 1分間連続', description: 'ボールを見ずに、1分間連続でドリブルを続ける。', videoUrl: 'https://www.youtube.com/shorts/abcdef123' },
        { id: 102, title: 'レイアップシュート 10本連続', description: '左右交互にレイアップシュートを10本連続で成功させる。', videoUrl: 'https://www.youtube.com/shorts/ghijkl456' },
    ],
    2: [
        { id: 201, title: 'フロントチェンジ 30秒', description: '30秒間でフロントチェンジをできるだけ多く行う。', videoUrl: 'https://www.youtube.com/shorts/mnopqr789' },
        { id: 202, title: 'ゴール下シュート 20本', description: 'ゴール下から20本シュートを決めきる。', videoUrl: 'https://www.youtube.com/shorts/stuvwx012' },
    ],
    3: [
        { id: 301, title: 'フリースロー 5本連続成功', description: 'フリースローを5本連続で成功させる。', videoUrl: 'https://www.youtube.com/shorts/yzabcd345' },
        { id: 302, title: 'レッグスルー 20回', description: '左右の足でレッグスルーを20回行う。', videoUrl: 'https://www.youtube.com/shorts/efghij678' },
    ],
    4: [{ id: 401, title: 'バックチェンジ 20回', description: 'バックチェンジを20回行う。', videoUrl: '#' }],
    5: [{ id: 501, title: '3ポイントシュート 5本連続', description: '3ポイントシュートを5本連続成功させる。', videoUrl: '#' }],
    6: [{ id: 601, title: 'スピンムーブからのシュート', description: 'スピンムーブからスムーズにシュートを打つ。', videoUrl: '#' }],
};


// --- 選手用アプリのモックデータ ---
const MOCK_PLAYER = {
    id: 1,
    name: '田中 翼',
    rankId: 3,
    completedQuests: { 1: [101, 102], 2: [201], 3: [301] }
};


// --- コーチ用アプリのモックデータ ---
const MOCK_PLAYERS = [
    { id: 1, name: '田中 翼', rankId: 3, avatarUrl: 'https://placehold.co/100x100/1a202c/48bb78?text=T', progress: 33 },
    { id: 2, name: '鈴木 大地', rankId: 2, avatarUrl: 'https://placehold.co/100x100/1a202c/48bb78?text=D', progress: 100 },
    { id: 3, name: '佐藤 海斗', rankId: 3, avatarUrl: 'https://placehold.co/100x100/1a202c/48bb78?text=K', progress: 0 },
    { id: 4, name: '高橋 蓮', rankId: 1, avatarUrl: 'https://placehold.co/100x100/1a202c/48bb78?text=R', progress: 50 },
];

const MOCK_APPROVALS = [
    { id: 1, playerId: 3, playerName: '佐藤 海斗', questTitle: 'レッグスルー 20回' },
    { id: 2, playerId: 4, playerName: '高橋 蓮', questTitle: 'レイアップシュート 10本連続' },
];
