export type Media = {
  title: string;
  imageUrl: string;
  url?: string;
  description?: string;
};

export type Prefecture = {
  code: string;
  nameJa: string;
  nameEn: string;
  famousSpots: (string | Media)[];
  foods: (string | Media)[];
  stays?: Media[];
};

// 最低限のデータを先に用意。後で拡張可能。
export const PREFECTURES: Prefecture[] = [
  { code: "hokkaido", nameJa: "北海道", nameEn: "Hokkaido", famousSpots: [
      { title: "札幌時計台", imageUrl: "https://images.unsplash.com/photo-1569974494847-8779b3e6f0aa?q=80&w=1600&auto=format&fit=crop", description: "札幌の象徴的な歴史建造物" },
      { title: "小樽運河", imageUrl: "https://images.unsplash.com/photo-1583417319070-4bc7f1da1138?q=80&w=1600&auto=format&fit=crop", description: "ガス灯が灯るロマンチックな運河" },
      { title: "函館山", imageUrl: "https://images.unsplash.com/photo-1602132321264-4f2b0fda8c18?q=80&w=1600&auto=format&fit=crop", description: "世界三大夜景の一つ" },
    ], foods: [
      { title: "ジンギスカン", imageUrl: "https://images.unsplash.com/photo-1529973565453-c9e1db1479ed?q=80&w=1600&auto=format&fit=crop" },
      { title: "海鮮丼", imageUrl: "https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=1600&auto=format&fit=crop" },
      { title: "スープカレー", imageUrl: "https://images.unsplash.com/photo-1604908554007-63ca1d4cde1f?q=80&w=1600&auto=format&fit=crop" },
    ], stays: [
      { title: "星野リゾート トマム", imageUrl: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?q=80&w=1600&auto=format&fit=crop", url: "https://www.hoshinoresorts.com/" }
    ]
  },
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
  { code: "tokyo", nameJa: "東京都", nameEn: "Tokyo", famousSpots: [
      { title: "東京タワー", imageUrl: "https://images.unsplash.com/photo-1518546305927-5a555bb7020d?q=80&w=1600&auto=format&fit=crop" },
      { title: "浅草寺", imageUrl: "https://images.unsplash.com/photo-1545569341-9eb8b30979d0?q=80&w=1600&auto=format&fit=crop" },
      { title: "明治神宮", imageUrl: "https://images.unsplash.com/photo-1549899610-656b5d0e1f91?q=80&w=1600&auto=format&fit=crop" },
    ], foods: [
      { title: "もんじゃ焼き", imageUrl: "https://images.unsplash.com/photo-1604908176997-5f2ff2ea0582?q=80&w=1600&auto=format&fit=crop" },
      { title: "寿司", imageUrl: "https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=1600&auto=format&fit=crop" },
      { title: "ラーメン", imageUrl: "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?q=80&w=1600&auto=format&fit=crop" },
    ], stays: [
      { title: "パークハイアット東京", imageUrl: "https://images.unsplash.com/photo-1559595500-e15296bdb0d1?q=80&w=1600&auto=format&fit=crop", url: "https://www.hyatt.com/" }
    ]
  },
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
  { code: "kyoto", nameJa: "京都府", nameEn: "Kyoto", famousSpots: [
      { title: "清水寺", imageUrl: "https://images.unsplash.com/photo-1536098561742-ca998e48cbcc?q=80&w=1600&auto=format&fit=crop" },
      { title: "伏見稲荷大社", imageUrl: "https://images.unsplash.com/photo-1545569341-9eb8b30979d0?q=80&w=1600&auto=format&fit=crop" },
      { title: "金閣寺", imageUrl: "https://images.unsplash.com/photo-1589466277994-3c46c2135043?q=80&w=1600&auto=format&fit=crop" },
    ], foods: [
      { title: "湯葉", imageUrl: "https://images.unsplash.com/photo-1619535860420-2b7aa0ebdc80?q=80&w=1600&auto=format&fit=crop" },
      { title: "京漬物", imageUrl: "https://images.unsplash.com/photo-1587593810167-d929f6b6ad69?q=80&w=1600&auto=format&fit=crop" },
      { title: "抹茶スイーツ", imageUrl: "https://images.unsplash.com/photo-1542996966-2e31c00bae24?q=80&w=1600&auto=format&fit=crop" },
    ], stays: [
      { title: "星のや京都", imageUrl: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?q=80&w=1600&auto=format&fit=crop", url: "https://hoshinoya.com/kyoto/" }
    ]
  },
  { code: "osaka", nameJa: "大阪府", nameEn: "Osaka", famousSpots: [
      { title: "大阪城", imageUrl: "https://images.unsplash.com/photo-1567411315763-6107f47b0f38?q=80&w=1600&auto=format&fit=crop" },
      { title: "道頓堀", imageUrl: "https://images.unsplash.com/photo-1536098561742-ca998e48cbcc?q=80&w=1600&auto=format&fit=crop" },
      { title: "通天閣", imageUrl: "https://images.unsplash.com/photo-1609042450875-76e8864c8ad5?q=80&w=1600&auto=format&fit=crop" },
    ], foods: [
      { title: "たこ焼き", imageUrl: "https://images.unsplash.com/photo-1593510987043-1c9b87222e23?q=80&w=1600&auto=format&fit=crop" },
      { title: "お好み焼き", imageUrl: "https://images.unsplash.com/photo-1598138382141-8703b1e36b80?q=80&w=1600&auto=format&fit=crop" },
      { title: "串カツ", imageUrl: "https://images.unsplash.com/photo-1598514983115-3ff4466e295e?q=80&w=1600&auto=format&fit=crop" },
    ], stays: [
      { title: "コンラッド大阪", imageUrl: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=1600&auto=format&fit=crop", url: "https://conradhotels3.hilton.com/" }
    ]
  },
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


