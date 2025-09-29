export type Prefecture = {
  code: string;
  nameJa: string;
  nameEn: string;
  famousSpots: string[];
  foods: string[];
};

// 最低限のデータを先に用意。後で拡張可能。
export const PREFECTURES: Prefecture[] = [
  { code: "hokkaido", nameJa: "北海道", nameEn: "Hokkaido", famousSpots: ["札幌時計台", "小樽運河", "函館山"], foods: ["ジンギスカン", "海鮮丼", "スープカレー"] },
  { code: "aomori", nameJa: "青森県", nameEn: "Aomori", famousSpots: ["弘前城", "奥入瀬渓流", "十和田湖"], foods: ["りんご", "せんべい汁", "いちご煮"] },
  { code: "iwate", nameJa: "岩手県", nameEn: "Iwate", famousSpots: [], foods: [] },
  { code: "miyagi", nameJa: "宮城県", nameEn: "Miyagi", famousSpots: [], foods: [] },
  { code: "akita", nameJa: "秋田県", nameEn: "Akita", famousSpots: [], foods: [] },
  { code: "yamagata", nameJa: "山形県", nameEn: "Yamagata", famousSpots: [], foods: [] },
  { code: "fukushima", nameJa: "福島県", nameEn: "Fukushima", famousSpots: [], foods: [] },
  { code: "ibaraki", nameJa: "茨城県", nameEn: "Ibaraki", famousSpots: [], foods: [] },
  { code: "tochigi", nameJa: "栃木県", nameEn: "Tochigi", famousSpots: [], foods: [] },
  { code: "gunma", nameJa: "群馬県", nameEn: "Gunma", famousSpots: [], foods: [] },
  { code: "saitama", nameJa: "埼玉県", nameEn: "Saitama", famousSpots: [], foods: [] },
  { code: "chiba", nameJa: "千葉県", nameEn: "Chiba", famousSpots: [], foods: [] },
  { code: "tokyo", nameJa: "東京都", nameEn: "Tokyo", famousSpots: ["東京タワー", "浅草寺", "明治神宮"], foods: ["もんじゃ焼き", "寿司", "ラーメン"] },
  { code: "kanagawa", nameJa: "神奈川県", nameEn: "Kanagawa", famousSpots: [], foods: [] },
  { code: "niigata", nameJa: "新潟県", nameEn: "Niigata", famousSpots: [], foods: [] },
  { code: "toyama", nameJa: "富山県", nameEn: "Toyama", famousSpots: [], foods: [] },
  { code: "ishikawa", nameJa: "石川県", nameEn: "Ishikawa", famousSpots: [], foods: [] },
  { code: "fukui", nameJa: "福井県", nameEn: "Fukui", famousSpots: [], foods: [] },
  { code: "yamanashi", nameJa: "山梨県", nameEn: "Yamanashi", famousSpots: [], foods: [] },
  { code: "nagano", nameJa: "長野県", nameEn: "Nagano", famousSpots: [], foods: [] },
  { code: "gifu", nameJa: "岐阜県", nameEn: "Gifu", famousSpots: [], foods: [] },
  { code: "shizuoka", nameJa: "静岡県", nameEn: "Shizuoka", famousSpots: [], foods: [] },
  { code: "aichi", nameJa: "愛知県", nameEn: "Aichi", famousSpots: [], foods: [] },
  { code: "mie", nameJa: "三重県", nameEn: "Mie", famousSpots: [], foods: [] },
  { code: "shiga", nameJa: "滋賀県", nameEn: "Shiga", famousSpots: [], foods: [] },
  { code: "kyoto", nameJa: "京都府", nameEn: "Kyoto", famousSpots: ["清水寺", "伏見稲荷大社", "金閣寺"], foods: ["湯葉", "京漬物", "抹茶スイーツ"] },
  { code: "osaka", nameJa: "大阪府", nameEn: "Osaka", famousSpots: ["大阪城", "道頓堀", "通天閣"], foods: ["たこ焼き", "お好み焼き", "串カツ"] },
  { code: "hyogo", nameJa: "兵庫県", nameEn: "Hyogo", famousSpots: [], foods: [] },
  { code: "nara", nameJa: "奈良県", nameEn: "Nara", famousSpots: [], foods: [] },
  { code: "wakayama", nameJa: "和歌山県", nameEn: "Wakayama", famousSpots: [], foods: [] },
  { code: "tottori", nameJa: "鳥取県", nameEn: "Tottori", famousSpots: [], foods: [] },
  { code: "shimane", nameJa: "島根県", nameEn: "Shimane", famousSpots: [], foods: [] },
  { code: "okayama", nameJa: "岡山県", nameEn: "Okayama", famousSpots: [], foods: [] },
  { code: "hiroshima", nameJa: "広島県", nameEn: "Hiroshima", famousSpots: [], foods: [] },
  { code: "yamaguchi", nameJa: "山口県", nameEn: "Yamaguchi", famousSpots: [], foods: [] },
  { code: "tokushima", nameJa: "徳島県", nameEn: "Tokushima", famousSpots: [], foods: [] },
  { code: "kagawa", nameJa: "香川県", nameEn: "Kagawa", famousSpots: [], foods: [] },
  { code: "ehime", nameJa: "愛媛県", nameEn: "Ehime", famousSpots: [], foods: [] },
  { code: "kochi", nameJa: "高知県", nameEn: "Kochi", famousSpots: [], foods: [] },
  { code: "fukuoka", nameJa: "福岡県", nameEn: "Fukuoka", famousSpots: [], foods: [] },
  { code: "saga", nameJa: "佐賀県", nameEn: "Saga", famousSpots: [], foods: [] },
  { code: "nagasaki", nameJa: "長崎県", nameEn: "Nagasaki", famousSpots: [], foods: [] },
  { code: "kumamoto", nameJa: "熊本県", nameEn: "Kumamoto", famousSpots: [], foods: [] },
  { code: "oita", nameJa: "大分県", nameEn: "Oita", famousSpots: [], foods: [] },
  { code: "miyazaki", nameJa: "宮崎県", nameEn: "Miyazaki", famousSpots: [], foods: [] },
  { code: "kagoshima", nameJa: "鹿児島県", nameEn: "Kagoshima", famousSpots: [], foods: [] },
  { code: "okinawa", nameJa: "沖縄県", nameEn: "Okinawa", famousSpots: ["首里城", "美ら海水族館", "国際通り"], foods: ["ソーキそば", "ゴーヤーチャンプルー", "タコライス"] },
];

export const PREF_CODE_TO_PREF = Object.fromEntries(
  PREFECTURES.map((p) => [p.code, p])
) as Record<string, Prefecture>;


