export type Prefecture = {
  code: string;
  nameJa: string;
  nameEn: string;
  famousSpots: string[];
  foods: string[];
};

// 最低限のデータを先に用意。後で拡張可能。
export const PREFECTURES: Prefecture[] = [
  {
    code: "hokkaido",
    nameJa: "北海道",
    nameEn: "Hokkaido",
    famousSpots: ["札幌時計台", "小樽運河", "函館山"],
    foods: ["ジンギスカン", "海鮮丼", "スープカレー"],
  },
  {
    code: "aomori",
    nameJa: "青森県",
    nameEn: "Aomori",
    famousSpots: ["弘前城", "奥入瀬渓流", "十和田湖"],
    foods: ["りんご", "せんべい汁", "いちご煮"],
  },
  {
    code: "tokyo",
    nameJa: "東京都",
    nameEn: "Tokyo",
    famousSpots: ["東京タワー", "浅草寺", "明治神宮"],
    foods: ["もんじゃ焼き", "寿司", "ラーメン"],
  },
  {
    code: "kyoto",
    nameJa: "京都府",
    nameEn: "Kyoto",
    famousSpots: ["清水寺", "伏見稲荷大社", "金閣寺"],
    foods: ["湯葉", "京漬物", "抹茶スイーツ"],
  },
  {
    code: "osaka",
    nameJa: "大阪府",
    nameEn: "Osaka",
    famousSpots: ["大阪城", "道頓堀", "通天閣"],
    foods: ["たこ焼き", "お好み焼き", "串カツ"],
  },
  {
    code: "okinawa",
    nameJa: "沖縄県",
    nameEn: "Okinawa",
    famousSpots: ["首里城", "美ら海水族館", "国際通り"],
    foods: ["ソーキそば", "ゴーヤーチャンプルー", "タコライス"],
  },
];

export const PREF_CODE_TO_PREF = Object.fromEntries(
  PREFECTURES.map((p) => [p.code, p])
) as Record<string, Prefecture>;


