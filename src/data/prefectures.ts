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
      { title: "札幌時計台", imageUrl: "/images/hokkaido_clock_tower.jpg", description: "札幌の象徴的な歴史建造物" },
      { title: "小樽運河", imageUrl: "/images/otaru_canal.jpg", description: "ガス灯が灯るロマンチックな運河" },
      { title: "函館山", imageUrl: "/images/hakodayama.jpg", description: "世界三大夜景の一つ" },
    ], foods: [
      { title: "ジンギスカン", imageUrl: "/images/jingisukan01.jpg" },
      { title: "海鮮丼", imageUrl: "/images/kaisendon_sapporo.jpg" },
      { title: "スープカレー", imageUrl: "https://images.unsplash.com/photo-1604908554007-63ca1d4cde1f?q=80&w=1600&auto=format&fit=crop" },
    ]
  },
  { code: "aomori", nameJa: "青森県", nameEn: "Aomori", famousSpots: [
      { title: "弘前城", imageUrl: "/images/hirosakijou_2.jpg", description: "桜の名所として知られる城" },
      { title: "奥入瀬渓流", imageUrl: "/images/okunyukawa.jpg", description: "美しい渓流と滝の散策路" },
      { title: "十和田湖", imageUrl: "/images/towadako.jpg", description: "神秘的なカルデラ湖" }
    ], foods: [
      { title: "りんご", imageUrl: "/images/aomoririnngo.jpg" },
      { title: "せんべい汁", imageUrl: "/images/senbeiziru.jpg" },
      { title: "いちご煮", imageUrl: "/images/ichigoni.jpg" }
    ]
  },
  { code: "iwate", nameJa: "岩手県", nameEn: "Iwate", famousSpots: [
      { title: "中尊寺", imageUrl: "https://images.unsplash.com/photo-1545569341-9eb8b30979d0?q=80&w=1600&auto=format&fit=crop", description: "平安時代の金色堂で有名" },
      { title: "厳美渓", imageUrl: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=1600&auto=format&fit=crop", description: "奇岩と渓流の美しい景観" },
      { title: "平泉", imageUrl: "https://images.unsplash.com/photo-1545569341-9eb8b30979d0?q=80&w=1600&auto=format&fit=crop", description: "世界遺産の歴史的遺跡" }
    ], foods: [
      { title: "わんこそば", imageUrl: "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?q=80&w=1600&auto=format&fit=crop" },
      { title: "盛岡冷麺", imageUrl: "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?q=80&w=1600&auto=format&fit=crop" },
      { title: "前沢牛", imageUrl: "https://images.unsplash.com/photo-1529973565453-c9e1db1479ed?q=80&w=1600&auto=format&fit=crop" }
    ]
  },
  { code: "miyagi", nameJa: "宮城県", nameEn: "Miyagi", famousSpots: [
      { title: "松島", imageUrl: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=1600&auto=format&fit=crop", description: "日本三景の一つ" },
      { title: "仙台城跡", imageUrl: "https://images.unsplash.com/photo-1567411315763-6107f47b0f38?q=80&w=1600&auto=format&fit=crop", description: "伊達政宗の居城跡" },
      { title: "瑞巌寺", imageUrl: "https://images.unsplash.com/photo-1545569341-9eb8b30979d0?q=80&w=1600&auto=format&fit=crop", description: "松島の名刹" }
    ], foods: [
      { title: "牛タン", imageUrl: "https://images.unsplash.com/photo-1529973565453-c9e1db1479ed?q=80&w=1600&auto=format&fit=crop" },
      { title: "ずんだ餅", imageUrl: "https://images.unsplash.com/photo-1542996966-2e31c00bae24?q=80&w=1600&auto=format&fit=crop" },
      { title: "笹かまぼこ", imageUrl: "https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=1600&auto=format&fit=crop" }
    ]
  },
  { code: "akita", nameJa: "秋田県", nameEn: "Akita", famousSpots: [
      { title: "角館", imageUrl: "https://images.unsplash.com/photo-1567411315763-6107f47b0f38?q=80&w=1600&auto=format&fit=crop", description: "武家屋敷の町並み" },
      { title: "田沢湖", imageUrl: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=1600&auto=format&fit=crop", description: "神秘的な青い湖" },
      { title: "男鹿半島", imageUrl: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=1600&auto=format&fit=crop", description: "なまはげの里" }
    ], foods: [
      { title: "きりたんぽ", imageUrl: "https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=1600&auto=format&fit=crop" },
      { title: "比内鶏", imageUrl: "https://images.unsplash.com/photo-1529973565453-c9e1db1479ed?q=80&w=1600&auto=format&fit=crop" },
      { title: "いぶりがっこ", imageUrl: "https://images.unsplash.com/photo-1587593810167-d929f6b6ad69?q=80&w=1600&auto=format&fit=crop" }
    ]
  },
  { code: "yamagata", nameJa: "山形県", nameEn: "Yamagata", famousSpots: [
      { title: "山寺", imageUrl: "https://images.unsplash.com/photo-1545569341-9eb8b30979d0?q=80&w=1600&auto=format&fit=crop", description: "松尾芭蕉が訪れた名刹" },
      { title: "蔵王温泉", imageUrl: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=1600&auto=format&fit=crop", description: "樹氷で有名な温泉地" },
      { title: "銀山温泉", imageUrl: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=1600&auto=format&fit=crop", description: "大正ロマンの温泉街" }
    ], foods: [
      { title: "さくらんぼ", imageUrl: "https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6?q=80&w=1600&auto=format&fit=crop" },
      { title: "米沢牛", imageUrl: "https://images.unsplash.com/photo-1529973565453-c9e1db1479ed?q=80&w=1600&auto=format&fit=crop" },
      { title: "芋煮", imageUrl: "https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=1600&auto=format&fit=crop" }
    ]
  },
  { code: "fukushima", nameJa: "福島県", nameEn: "Fukushima", famousSpots: [
      { title: "会津若松城", imageUrl: "https://images.unsplash.com/photo-1567411315763-6107f47b0f38?q=80&w=1600&auto=format&fit=crop", description: "白虎隊で有名な城" },
      { title: "大内宿", imageUrl: "https://images.unsplash.com/photo-1567411315763-6107f47b0f38?q=80&w=1600&auto=format&fit=crop", description: "江戸時代の宿場町" },
      { title: "五色沼", imageUrl: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=1600&auto=format&fit=crop", description: "神秘的な色の沼" }
    ], foods: [
      { title: "喜多方ラーメン", imageUrl: "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?q=80&w=1600&auto=format&fit=crop" },
      { title: "会津地鶏", imageUrl: "https://images.unsplash.com/photo-1529973565453-c9e1db1479ed?q=80&w=1600&auto=format&fit=crop" },
      { title: "輪箱飯", imageUrl: "https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=1600&auto=format&fit=crop" }
    ]
  },
  { code: "ibaraki", nameJa: "茨城県", nameEn: "Ibaraki", famousSpots: [
      { title: "偕楽園", imageUrl: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=1600&auto=format&fit=crop", description: "日本三名園の一つ" },
      { title: "鹿島神宮", imageUrl: "https://images.unsplash.com/photo-1545569341-9eb8b30979d0?q=80&w=1600&auto=format&fit=crop", description: "関東最古の神社" },
      { title: "大洗磯前神社", imageUrl: "https://images.unsplash.com/photo-1545569341-9eb8b30979d0?q=80&w=1600&auto=format&fit=crop", description: "海に面した神秘的な神社" }
    ], foods: [
      { title: "納豆", imageUrl: "https://images.unsplash.com/photo-1587593810167-d929f6b6ad69?q=80&w=1600&auto=format&fit=crop" },
      { title: "常陸牛", imageUrl: "https://images.unsplash.com/photo-1529973565453-c9e1db1479ed?q=80&w=1600&auto=format&fit=crop" },
      { title: "あんこう鍋", imageUrl: "https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=1600&auto=format&fit=crop" }
    ]
  },
  { code: "tochigi", nameJa: "栃木県", nameEn: "Tochigi", famousSpots: [
      { title: "日光東照宮", imageUrl: "https://images.unsplash.com/photo-1545569341-9eb8b30979d0?q=80&w=1600&auto=format&fit=crop", description: "世界遺産の華麗な神社" },
      { title: "華厳の滝", imageUrl: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=1600&auto=format&fit=crop", description: "日本三大名瀑の一つ" },
      { title: "鬼怒川温泉", imageUrl: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=1600&auto=format&fit=crop", description: "関東有数の温泉地" }
    ], foods: [
      { title: "宇都宮餃子", imageUrl: "https://images.unsplash.com/photo-1604908176997-5f2ff2ea0582?q=80&w=1600&auto=format&fit=crop" },
      { title: "いちご", imageUrl: "https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6?q=80&w=1600&auto=format&fit=crop" },
      { title: "那須牛", imageUrl: "https://images.unsplash.com/photo-1529973565453-c9e1db1479ed?q=80&w=1600&auto=format&fit=crop" }
    ]
  },
  { code: "gunma", nameJa: "群馬県", nameEn: "Gunma", famousSpots: [
      { title: "草津温泉", imageUrl: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=1600&auto=format&fit=crop", description: "日本三名泉の一つ" },
      { title: "富岡製糸場", imageUrl: "https://images.unsplash.com/photo-1567411315763-6107f47b0f38?q=80&w=1600&auto=format&fit=crop", description: "世界遺産の製糸工場" },
      { title: "尾瀬", imageUrl: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=1600&auto=format&fit=crop", description: "湿原の美しい自然" }
    ], foods: [
      { title: "水沢うどん", imageUrl: "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?q=80&w=1600&auto=format&fit=crop" },
      { title: "下仁田ねぎ", imageUrl: "https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=1600&auto=format&fit=crop" },
      { title: "こんにゃく", imageUrl: "https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=1600&auto=format&fit=crop" }
    ]
  },
  { code: "saitama", nameJa: "埼玉県", nameEn: "Saitama", famousSpots: [
      { title: "川越", imageUrl: "https://images.unsplash.com/photo-1567411315763-6107f47b0f38?q=80&w=1600&auto=format&fit=crop", description: "小江戸と呼ばれる城下町" },
      { title: "秩父神社", imageUrl: "https://images.unsplash.com/photo-1545569341-9eb8b30979d0?q=80&w=1600&auto=format&fit=crop", description: "秩父夜祭で有名な神社" },
      { title: "長瀞", imageUrl: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=1600&auto=format&fit=crop", description: "荒川の渓谷美" }
    ], foods: [
      { title: "草加せんべい", imageUrl: "https://images.unsplash.com/photo-1542996966-2e31c00bae24?q=80&w=1600&auto=format&fit=crop" },
      { title: "深谷ねぎ", imageUrl: "https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=1600&auto=format&fit=crop" },
      { title: "武蔵野うどん", imageUrl: "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?q=80&w=1600&auto=format&fit=crop" }
    ]
  },
  { code: "chiba", nameJa: "千葉県", nameEn: "Chiba", famousSpots: [
      { title: "成田山新勝寺", imageUrl: "https://images.unsplash.com/photo-1545569341-9eb8b30979d0?q=80&w=1600&auto=format&fit=crop", description: "関東三大不動の一つ" },
      { title: "東京ディズニーランド", imageUrl: "https://images.unsplash.com/photo-1518546305927-5a555bb7020d?q=80&w=1600&auto=format&fit=crop", description: "世界有数のテーマパーク" },
      { title: "銚子", imageUrl: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=1600&auto=format&fit=crop", description: "犬吠埼の絶景" }
    ], foods: [
      { title: "落花生", imageUrl: "https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6?q=80&w=1600&auto=format&fit=crop" },
      { title: "銚子電鉄", imageUrl: "https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=1600&auto=format&fit=crop" },
      { title: "房総牛", imageUrl: "https://images.unsplash.com/photo-1529973565453-c9e1db1479ed?q=80&w=1600&auto=format&fit=crop" }
    ]
  },
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
  { code: "kanagawa", nameJa: "神奈川県", nameEn: "Kanagawa", famousSpots: [
      { title: "鎌倉", imageUrl: "https://images.unsplash.com/photo-1545569341-9eb8b30979d0?q=80&w=1600&auto=format&fit=crop", description: "古都の歴史と文化" },
      { title: "箱根", imageUrl: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=1600&auto=format&fit=crop", description: "温泉と富士山の絶景" },
      { title: "横浜中華街", imageUrl: "https://images.unsplash.com/photo-1536098561742-ca998e48cbcc?q=80&w=1600&auto=format&fit=crop", description: "日本最大の中華街" }
    ], foods: [
      { title: "しらす", imageUrl: "https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=1600&auto=format&fit=crop" },
      { title: "鎌倉野菜", imageUrl: "https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=1600&auto=format&fit=crop" },
      { title: "横浜ラーメン", imageUrl: "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?q=80&w=1600&auto=format&fit=crop" }
    ]
  },
  { code: "niigata", nameJa: "新潟県", nameEn: "Niigata", famousSpots: [
      { title: "佐渡島", imageUrl: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=1600&auto=format&fit=crop", description: "日本海の離島" },
      { title: "越後湯沢", imageUrl: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=1600&auto=format&fit=crop", description: "スキーと温泉のリゾート" },
      { title: "弥彦神社", imageUrl: "https://images.unsplash.com/photo-1545569341-9eb8b30979d0?q=80&w=1600&auto=format&fit=crop", description: "越後一宮の神社" }
    ], foods: [
      { title: "新潟米", imageUrl: "https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=1600&auto=format&fit=crop" },
      { title: "へぎそば", imageUrl: "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?q=80&w=1600&auto=format&fit=crop" },
      { title: "笹団子", imageUrl: "https://images.unsplash.com/photo-1542996966-2e31c00bae24?q=80&w=1600&auto=format&fit=crop" }
    ]
  },
  { code: "toyama", nameJa: "富山県", nameEn: "Toyama", famousSpots: [
      { title: "立山黒部アルペンルート", imageUrl: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=1600&auto=format&fit=crop", description: "日本アルプスの絶景ルート" },
      { title: "五箇山合掌造り集落", imageUrl: "https://images.unsplash.com/photo-1567411315763-6107f47b0f38?q=80&w=1600&auto=format&fit=crop", description: "世界遺産の合掌造り" },
      { title: "雨晴海岸", imageUrl: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=1600&auto=format&fit=crop", description: "立山連峰の絶景" }
    ], foods: [
      { title: "白エビ", imageUrl: "https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=1600&auto=format&fit=crop" },
      { title: "ますのすし", imageUrl: "https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=1600&auto=format&fit=crop" },
      { title: "富山ブラックラーメン", imageUrl: "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?q=80&w=1600&auto=format&fit=crop" }
    ]
  },
  { code: "ishikawa", nameJa: "石川県", nameEn: "Ishikawa", famousSpots: [
      { title: "兼六園", imageUrl: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=1600&auto=format&fit=crop", description: "日本三名園の一つ" },
      { title: "金沢城", imageUrl: "https://images.unsplash.com/photo-1567411315763-6107f47b0f38?q=80&w=1600&auto=format&fit=crop", description: "加賀百万石の城" },
      { title: "東茶屋街", imageUrl: "https://images.unsplash.com/photo-1567411315763-6107f47b0f38?q=80&w=1600&auto=format&fit=crop", description: "江戸時代の茶屋街" }
    ], foods: [
      { title: "加賀料理", imageUrl: "https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=1600&auto=format&fit=crop" },
      { title: "金沢カレー", imageUrl: "https://images.unsplash.com/photo-1604908554007-63ca1d4cde1f?q=80&w=1600&auto=format&fit=crop" },
      { title: "能登牛", imageUrl: "https://images.unsplash.com/photo-1529973565453-c9e1db1479ed?q=80&w=1600&auto=format&fit=crop" }
    ]
  },
  { code: "fukui", nameJa: "福井県", nameEn: "Fukui", famousSpots: [
      { title: "東尋坊", imageUrl: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=1600&auto=format&fit=crop", description: "柱状節理の奇岩" },
      { title: "永平寺", imageUrl: "https://images.unsplash.com/photo-1545569341-9eb8b30979d0?q=80&w=1600&auto=format&fit=crop", description: "曹洞宗の大本山" },
      { title: "恐竜博物館", imageUrl: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=1600&auto=format&fit=crop", description: "世界有数の恐竜博物館" }
    ], foods: [
      { title: "越前がに", imageUrl: "https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=1600&auto=format&fit=crop" },
      { title: "ソースカツ丼", imageUrl: "https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=1600&auto=format&fit=crop" },
      { title: "越前そば", imageUrl: "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?q=80&w=1600&auto=format&fit=crop" }
    ]
  },
  { code: "yamanashi", nameJa: "山梨県", nameEn: "Yamanashi", famousSpots: [
      { title: "富士山", imageUrl: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=1600&auto=format&fit=crop", description: "日本最高峰の山" },
      { title: "河口湖", imageUrl: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=1600&auto=format&fit=crop", description: "富士五湖の一つ" },
      { title: "忍野八海", imageUrl: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=1600&auto=format&fit=crop", description: "富士山の湧水" }
    ], foods: [
      { title: "ぶどう", imageUrl: "https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6?q=80&w=1600&auto=format&fit=crop" },
      { title: "ほうとう", imageUrl: "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?q=80&w=1600&auto=format&fit=crop" },
      { title: "甲州牛", imageUrl: "https://images.unsplash.com/photo-1529973565453-c9e1db1479ed?q=80&w=1600&auto=format&fit=crop" }
    ]
  },
  { code: "nagano", nameJa: "長野県", nameEn: "Nagano", famousSpots: [
      { title: "善光寺", imageUrl: "https://images.unsplash.com/photo-1545569341-9eb8b30979d0?q=80&w=1600&auto=format&fit=crop", description: "無宗派の総本山" },
      { title: "軽井沢", imageUrl: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=1600&auto=format&fit=crop", description: "高原リゾート地" },
      { title: "上高地", imageUrl: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=1600&auto=format&fit=crop", description: "日本アルプスの玄関口" }
    ], foods: [
      { title: "信州そば", imageUrl: "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?q=80&w=1600&auto=format&fit=crop" },
      { title: "野沢菜", imageUrl: "https://images.unsplash.com/photo-1587593810167-d929f6b6ad69?q=80&w=1600&auto=format&fit=crop" },
      { title: "信州牛", imageUrl: "https://images.unsplash.com/photo-1529973565453-c9e1db1479ed?q=80&w=1600&auto=format&fit=crop" }
    ]
  },
  { code: "gifu", nameJa: "岐阜県", nameEn: "Gifu", famousSpots: [
      { title: "白川郷", imageUrl: "https://images.unsplash.com/photo-1567411315763-6107f47b0f38?q=80&w=1600&auto=format&fit=crop", description: "世界遺産の合掌造り集落" },
      { title: "高山", imageUrl: "https://images.unsplash.com/photo-1567411315763-6107f47b0f38?q=80&w=1600&auto=format&fit=crop", description: "古い町並みが残る城下町" },
      { title: "下呂温泉", imageUrl: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=1600&auto=format&fit=crop", description: "日本三名泉の一つ" }
    ], foods: [
      { title: "飛騨牛", imageUrl: "https://images.unsplash.com/photo-1529973565453-c9e1db1479ed?q=80&w=1600&auto=format&fit=crop" },
      { title: "高山ラーメン", imageUrl: "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?q=80&w=1600&auto=format&fit=crop" },
      { title: "朴葉味噌", imageUrl: "https://images.unsplash.com/photo-1587593810167-d929f6b6ad69?q=80&w=1600&auto=format&fit=crop" }
    ]
  },
  { code: "shizuoka", nameJa: "静岡県", nameEn: "Shizuoka", famousSpots: [
      { title: "富士山", imageUrl: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=1600&auto=format&fit=crop", description: "日本最高峰の山" },
      { title: "熱海温泉", imageUrl: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=1600&auto=format&fit=crop", description: "関東有数の温泉地" },
      { title: "伊豆半島", imageUrl: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=1600&auto=format&fit=crop", description: "温泉と海のリゾート" }
    ], foods: [
      { title: "静岡茶", imageUrl: "https://images.unsplash.com/photo-1542996966-2e31c00bae24?q=80&w=1600&auto=format&fit=crop" },
      { title: "桜エビ", imageUrl: "https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=1600&auto=format&fit=crop" },
      { title: "静岡おでん", imageUrl: "https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=1600&auto=format&fit=crop" }
    ]
  },
  { code: "aichi", nameJa: "愛知県", nameEn: "Aichi", famousSpots: [
      { title: "名古屋城", imageUrl: "https://images.unsplash.com/photo-1567411315763-6107f47b0f38?q=80&w=1600&auto=format&fit=crop", description: "金の鯱で有名な城" },
      { title: "熱田神宮", imageUrl: "https://images.unsplash.com/photo-1545569341-9eb8b30979d0?q=80&w=1600&auto=format&fit=crop", description: "三種の神器の一つを祀る" },
      { title: "犬山城", imageUrl: "https://images.unsplash.com/photo-1567411315763-6107f47b0f38?q=80&w=1600&auto=format&fit=crop", description: "国宝の天守閣" }
    ], foods: [
      { title: "味噌カツ", imageUrl: "https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=1600&auto=format&fit=crop" },
      { title: "きしめん", imageUrl: "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?q=80&w=1600&auto=format&fit=crop" },
      { title: "名古屋コーチン", imageUrl: "https://images.unsplash.com/photo-1529973565453-c9e1db1479ed?q=80&w=1600&auto=format&fit=crop" }
    ]
  },
  { code: "mie", nameJa: "三重県", nameEn: "Mie", famousSpots: [
      { title: "伊勢神宮", imageUrl: "https://images.unsplash.com/photo-1545569341-9eb8b30979d0?q=80&w=1600&auto=format&fit=crop", description: "日本の総氏神" },
      { title: "志摩スペイン村", imageUrl: "https://images.unsplash.com/photo-1518546305927-5a555bb7020d?q=80&w=1600&auto=format&fit=crop", description: "スペインをテーマにしたテーマパーク" },
      { title: "熊野古道", imageUrl: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=1600&auto=format&fit=crop", description: "世界遺産の参詣道" }
    ], foods: [
      { title: "松阪牛", imageUrl: "https://images.unsplash.com/photo-1529973565453-c9e1db1479ed?q=80&w=1600&auto=format&fit=crop" },
      { title: "伊勢うどん", imageUrl: "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?q=80&w=1600&auto=format&fit=crop" },
      { title: "伊勢エビ", imageUrl: "https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=1600&auto=format&fit=crop" }
    ]
  },
  { code: "shiga", nameJa: "滋賀県", nameEn: "Shiga", famousSpots: [
      { title: "琵琶湖", imageUrl: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=1600&auto=format&fit=crop", description: "日本最大の湖" },
      { title: "彦根城", imageUrl: "https://images.unsplash.com/photo-1567411315763-6107f47b0f38?q=80&w=1600&auto=format&fit=crop", description: "国宝の天守閣" },
      { title: "比叡山延暦寺", imageUrl: "https://images.unsplash.com/photo-1545569341-9eb8b30979d0?q=80&w=1600&auto=format&fit=crop", description: "天台宗の総本山" }
    ], foods: [
      { title: "近江牛", imageUrl: "https://images.unsplash.com/photo-1529973565453-c9e1db1479ed?q=80&w=1600&auto=format&fit=crop" },
      { title: "鮒ずし", imageUrl: "https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=1600&auto=format&fit=crop" },
      { title: "近江米", imageUrl: "https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=1600&auto=format&fit=crop" }
    ]
  },
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
  { code: "hyogo", nameJa: "兵庫県", nameEn: "Hyogo", famousSpots: [
      { title: "姫路城", imageUrl: "https://images.unsplash.com/photo-1567411315763-6107f47b0f38?q=80&w=1600&auto=format&fit=crop", description: "白鷺城の美しい城" },
      { title: "神戸", imageUrl: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=1600&auto=format&fit=crop", description: "港町の夜景" },
      { title: "有馬温泉", imageUrl: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=1600&auto=format&fit=crop", description: "日本最古の温泉" }
    ], foods: [
      { title: "神戸牛", imageUrl: "https://images.unsplash.com/photo-1529973565453-c9e1db1479ed?q=80&w=1600&auto=format&fit=crop" },
      { title: "明石焼き", imageUrl: "https://images.unsplash.com/photo-1604908176997-5f2ff2ea0582?q=80&w=1600&auto=format&fit=crop" },
      { title: "灘の酒", imageUrl: "https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=1600&auto=format&fit=crop" }
    ]
  },
  { code: "nara", nameJa: "奈良県", nameEn: "Nara", famousSpots: [
      { title: "東大寺", imageUrl: "https://images.unsplash.com/photo-1545569341-9eb8b30979d0?q=80&w=1600&auto=format&fit=crop", description: "大仏で有名な寺院" },
      { title: "奈良公園", imageUrl: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=1600&auto=format&fit=crop", description: "鹿がいる公園" },
      { title: "法隆寺", imageUrl: "https://images.unsplash.com/photo-1545569341-9eb8b30979d0?q=80&w=1600&auto=format&fit=crop", description: "世界最古の木造建築" }
    ], foods: [
      { title: "柿の葉寿司", imageUrl: "https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=1600&auto=format&fit=crop" },
      { title: "奈良漬け", imageUrl: "https://images.unsplash.com/photo-1587593810167-d929f6b6ad69?q=80&w=1600&auto=format&fit=crop" },
      { title: "大和牛", imageUrl: "https://images.unsplash.com/photo-1529973565453-c9e1db1479ed?q=80&w=1600&auto=format&fit=crop" }
    ]
  },
  { code: "wakayama", nameJa: "和歌山県", nameEn: "Wakayama", famousSpots: [
      { title: "高野山", imageUrl: "https://images.unsplash.com/photo-1545569341-9eb8b30979d0?q=80&w=1600&auto=format&fit=crop", description: "真言宗の聖地" },
      { title: "白浜温泉", imageUrl: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=1600&auto=format&fit=crop", description: "南紀の温泉地" },
      { title: "那智の滝", imageUrl: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=1600&auto=format&fit=crop", description: "日本三大名瀑の一つ" }
    ], foods: [
      { title: "みかん", imageUrl: "https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6?q=80&w=1600&auto=format&fit=crop" },
      { title: "梅干し", imageUrl: "https://images.unsplash.com/photo-1587593810167-d929f6b6ad69?q=80&w=1600&auto=format&fit=crop" },
      { title: "マグロ", imageUrl: "https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=1600&auto=format&fit=crop" }
    ]
  },
  { code: "tottori", nameJa: "鳥取県", nameEn: "Tottori", famousSpots: [
      { title: "鳥取砂丘", imageUrl: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=1600&auto=format&fit=crop", description: "日本最大の砂丘" },
      { title: "大山", imageUrl: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=1600&auto=format&fit=crop", description: "中国地方最高峰" },
      { title: "三朝温泉", imageUrl: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=1600&auto=format&fit=crop", description: "ラドン温泉で有名" }
    ], foods: [
      { title: "松葉ガニ", imageUrl: "https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=1600&auto=format&fit=crop" },
      { title: "二十世紀梨", imageUrl: "https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6?q=80&w=1600&auto=format&fit=crop" },
      { title: "鳥取牛", imageUrl: "https://images.unsplash.com/photo-1529973565453-c9e1db1479ed?q=80&w=1600&auto=format&fit=crop" }
    ]
  },
  { code: "shimane", nameJa: "島根県", nameEn: "Shimane", famousSpots: [
      { title: "出雲大社", imageUrl: "https://images.unsplash.com/photo-1545569341-9eb8b30979d0?q=80&w=1600&auto=format&fit=crop", description: "縁結びの神様" },
      { title: "石見銀山", imageUrl: "https://images.unsplash.com/photo-1567411315763-6107f47b0f38?q=80&w=1600&auto=format&fit=crop", description: "世界遺産の銀山" },
      { title: "宍道湖", imageUrl: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=1600&auto=format&fit=crop", description: "夕日の美しい湖" }
    ], foods: [
      { title: "出雲そば", imageUrl: "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?q=80&w=1600&auto=format&fit=crop" },
      { title: "しじみ", imageUrl: "https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=1600&auto=format&fit=crop" },
      { title: "島根牛", imageUrl: "https://images.unsplash.com/photo-1529973565453-c9e1db1479ed?q=80&w=1600&auto=format&fit=crop" }
    ]
  },
  { code: "okayama", nameJa: "岡山県", nameEn: "Okayama", famousSpots: [
      { title: "後楽園", imageUrl: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=1600&auto=format&fit=crop", description: "日本三名園の一つ" },
      { title: "倉敷美観地区", imageUrl: "https://images.unsplash.com/photo-1567411315763-6107f47b0f38?q=80&w=1600&auto=format&fit=crop", description: "白壁の町並み" },
      { title: "瀬戸大橋", imageUrl: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=1600&auto=format&fit=crop", description: "本州四国連絡橋" }
    ], foods: [
      { title: "白桃", imageUrl: "https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6?q=80&w=1600&auto=format&fit=crop" },
      { title: "きびだんご", imageUrl: "https://images.unsplash.com/photo-1542996966-2e31c00bae24?q=80&w=1600&auto=format&fit=crop" },
      { title: "岡山牛", imageUrl: "https://images.unsplash.com/photo-1529973565453-c9e1db1479ed?q=80&w=1600&auto=format&fit=crop" }
    ]
  },
  { code: "hiroshima", nameJa: "広島県", nameEn: "Hiroshima", famousSpots: [
      { title: "原爆ドーム", imageUrl: "https://images.unsplash.com/photo-1567411315763-6107f47b0f38?q=80&w=1600&auto=format&fit=crop", description: "世界遺産の平和記念碑" },
      { title: "宮島", imageUrl: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=1600&auto=format&fit=crop", description: "厳島神社の島" },
      { title: "広島城", imageUrl: "https://images.unsplash.com/photo-1567411315763-6107f47b0f38?q=80&w=1600&auto=format&fit=crop", description: "鯉城の別名" }
    ], foods: [
      { title: "広島焼き", imageUrl: "https://images.unsplash.com/photo-1598138382141-8703b1e36b80?q=80&w=1600&auto=format&fit=crop" },
      { title: "牡蠣", imageUrl: "https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=1600&auto=format&fit=crop" },
      { title: "広島牛", imageUrl: "https://images.unsplash.com/photo-1529973565453-c9e1db1479ed?q=80&w=1600&auto=format&fit=crop" }
    ]
  },
  { code: "yamaguchi", nameJa: "山口県", nameEn: "Yamaguchi", famousSpots: [
      { title: "錦帯橋", imageUrl: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=1600&auto=format&fit=crop", description: "日本三名橋の一つ" },
      { title: "秋芳洞", imageUrl: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=1600&auto=format&fit=crop", description: "日本最大の鍾乳洞" },
      { title: "角島大橋", imageUrl: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=1600&auto=format&fit=crop", description: "美しい海の橋" }
    ], foods: [
      { title: "ふぐ", imageUrl: "https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=1600&auto=format&fit=crop" },
      { title: "瓦そば", imageUrl: "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?q=80&w=1600&auto=format&fit=crop" },
      { title: "山口牛", imageUrl: "https://images.unsplash.com/photo-1529973565453-c9e1db1479ed?q=80&w=1600&auto=format&fit=crop" }
    ]
  },
  { code: "tokushima", nameJa: "徳島県", nameEn: "Tokushima", famousSpots: [
      { title: "阿波踊り", imageUrl: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=1600&auto=format&fit=crop", description: "日本三大盆踊りの一つ" },
      { title: "鳴門の渦潮", imageUrl: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=1600&auto=format&fit=crop", description: "世界最大級の渦潮" },
      { title: "祖谷のかずら橋", imageUrl: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=1600&auto=format&fit=crop", description: "秘境のつり橋" }
    ], foods: [
      { title: "すだち", imageUrl: "https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6?q=80&w=1600&auto=format&fit=crop" },
      { title: "阿波尾鶏", imageUrl: "https://images.unsplash.com/photo-1529973565453-c9e1db1479ed?q=80&w=1600&auto=format&fit=crop" },
      { title: "鳴門金時", imageUrl: "https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6?q=80&w=1600&auto=format&fit=crop" }
    ]
  },
  { code: "kagawa", nameJa: "香川県", nameEn: "Kagawa", famousSpots: [
      { title: "金刀比羅宮", imageUrl: "https://images.unsplash.com/photo-1545569341-9eb8b30979d0?q=80&w=1600&auto=format&fit=crop", description: "こんぴらさんで親しまれる" },
      { title: "栗林公園", imageUrl: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=1600&auto=format&fit=crop", description: "日本三名園の一つ" },
      { title: "直島", imageUrl: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=1600&auto=format&fit=crop", description: "アートの島" }
    ], foods: [
      { title: "讃岐うどん", imageUrl: "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?q=80&w=1600&auto=format&fit=crop" },
      { title: "オリーブ", imageUrl: "https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6?q=80&w=1600&auto=format&fit=crop" },
      { title: "讃岐牛", imageUrl: "https://images.unsplash.com/photo-1529973565453-c9e1db1479ed?q=80&w=1600&auto=format&fit=crop" }
    ]
  },
  { code: "ehime", nameJa: "愛媛県", nameEn: "Ehime", famousSpots: [
      { title: "道後温泉", imageUrl: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=1600&auto=format&fit=crop", description: "日本最古の温泉" },
      { title: "松山城", imageUrl: "https://images.unsplash.com/photo-1567411315763-6107f47b0f38?q=80&w=1600&auto=format&fit=crop", description: "現存12天守の一つ" },
      { title: "しまなみ海道", imageUrl: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=1600&auto=format&fit=crop", description: "瀬戸内海のサイクリングロード" }
    ], foods: [
      { title: "みかん", imageUrl: "https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6?q=80&w=1600&auto=format&fit=crop" },
      { title: "鯛めし", imageUrl: "https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=1600&auto=format&fit=crop" },
      { title: "愛媛牛", imageUrl: "https://images.unsplash.com/photo-1529973565453-c9e1db1479ed?q=80&w=1600&auto=format&fit=crop" }
    ]
  },
  { code: "kochi", nameJa: "高知県", nameEn: "Kochi", famousSpots: [
      { title: "高知城", imageUrl: "https://images.unsplash.com/photo-1567411315763-6107f47b0f38?q=80&w=1600&auto=format&fit=crop", description: "現存12天守の一つ" },
      { title: "桂浜", imageUrl: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=1600&auto=format&fit=crop", description: "龍馬の銅像がある海岸" },
      { title: "四万十川", imageUrl: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=1600&auto=format&fit=crop", description: "日本最後の清流" }
    ], foods: [
      { title: "かつおのたたき", imageUrl: "https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=1600&auto=format&fit=crop" },
      { title: "土佐牛", imageUrl: "https://images.unsplash.com/photo-1529973565453-c9e1db1479ed?q=80&w=1600&auto=format&fit=crop" },
      { title: "ゆず", imageUrl: "https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6?q=80&w=1600&auto=format&fit=crop" }
    ]
  },
  { code: "fukuoka", nameJa: "福岡県", nameEn: "Fukuoka", famousSpots: [
      { title: "太宰府天満宮", imageUrl: "https://images.unsplash.com/photo-1545569341-9eb8b30979d0?q=80&w=1600&auto=format&fit=crop", description: "学問の神様" },
      { title: "博多", imageUrl: "https://images.unsplash.com/photo-1536098561742-ca998e48cbcc?q=80&w=1600&auto=format&fit=crop", description: "ラーメンの聖地" },
      { title: "門司港", imageUrl: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=1600&auto=format&fit=crop", description: "レトロな港町" }
    ], foods: [
      { title: "博多ラーメン", imageUrl: "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?q=80&w=1600&auto=format&fit=crop" },
      { title: "もつ鍋", imageUrl: "https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=1600&auto=format&fit=crop" },
      { title: "明太子", imageUrl: "https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=1600&auto=format&fit=crop" }
    ]
  },
  { code: "saga", nameJa: "佐賀県", nameEn: "Saga", famousSpots: [
      { title: "吉野ヶ里遺跡", imageUrl: "https://images.unsplash.com/photo-1567411315763-6107f47b0f38?q=80&w=1600&auto=format&fit=crop", description: "弥生時代の環濠集落" },
      { title: "唐津城", imageUrl: "https://images.unsplash.com/photo-1567411315763-6107f47b0f38?q=80&w=1600&auto=format&fit=crop", description: "虹の松原に面した城" },
      { title: "有田", imageUrl: "https://images.unsplash.com/photo-1567411315763-6107f47b0f38?q=80&w=1600&auto=format&fit=crop", description: "有田焼の産地" }
    ], foods: [
      { title: "佐賀牛", imageUrl: "https://images.unsplash.com/photo-1529973565453-c9e1db1479ed?q=80&w=1600&auto=format&fit=crop" },
      { title: "有田みかん", imageUrl: "https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6?q=80&w=1600&auto=format&fit=crop" },
      { title: "呼子のイカ", imageUrl: "https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=1600&auto=format&fit=crop" }
    ]
  },
  { code: "nagasaki", nameJa: "長崎県", nameEn: "Nagasaki", famousSpots: [
      { title: "長崎原爆資料館", imageUrl: "https://images.unsplash.com/photo-1567411315763-6107f47b0f38?q=80&w=1600&auto=format&fit=crop", description: "平和の大切さを伝える" },
      { title: "ハウステンボス", imageUrl: "https://images.unsplash.com/photo-1518546305927-5a555bb7020d?q=80&w=1600&auto=format&fit=crop", description: "オランダをテーマにしたテーマパーク" },
      { title: "軍艦島", imageUrl: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=1600&auto=format&fit=crop", description: "世界遺産の廃墟の島" }
    ], foods: [
      { title: "長崎ちゃんぽん", imageUrl: "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?q=80&w=1600&auto=format&fit=crop" },
      { title: "カステラ", imageUrl: "https://images.unsplash.com/photo-1542996966-2e31c00bae24?q=80&w=1600&auto=format&fit=crop" },
      { title: "長崎牛", imageUrl: "https://images.unsplash.com/photo-1529973565453-c9e1db1479ed?q=80&w=1600&auto=format&fit=crop" }
    ]
  },
  { code: "kumamoto", nameJa: "熊本県", nameEn: "Kumamoto", famousSpots: [
      { title: "熊本城", imageUrl: "https://images.unsplash.com/photo-1567411315763-6107f47b0f38?q=80&w=1600&auto=format&fit=crop", description: "加藤清正が築いた名城" },
      { title: "阿蘇山", imageUrl: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=1600&auto=format&fit=crop", description: "世界最大級のカルデラ" },
      { title: "黒川温泉", imageUrl: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=1600&auto=format&fit=crop", description: "秘湯の温泉地" }
    ], foods: [
      { title: "馬刺し", imageUrl: "https://images.unsplash.com/photo-1529973565453-c9e1db1479ed?q=80&w=1600&auto=format&fit=crop" },
      { title: "熊本ラーメン", imageUrl: "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?q=80&w=1600&auto=format&fit=crop" },
      { title: "いきなり団子", imageUrl: "https://images.unsplash.com/photo-1542996966-2e31c00bae24?q=80&w=1600&auto=format&fit=crop" }
    ]
  },
  { code: "oita", nameJa: "大分県", nameEn: "Oita", famousSpots: [
      { title: "別府温泉", imageUrl: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=1600&auto=format&fit=crop", description: "日本一の温泉湧出量" },
      { title: "由布院", imageUrl: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=1600&auto=format&fit=crop", description: "人気の温泉リゾート" },
      { title: "高崎山", imageUrl: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=1600&auto=format&fit=crop", description: "野生のサルがいる山" }
    ], foods: [
      { title: "とり天", imageUrl: "https://images.unsplash.com/photo-1529973565453-c9e1db1479ed?q=80&w=1600&auto=format&fit=crop" },
      { title: "豊後牛", imageUrl: "https://images.unsplash.com/photo-1529973565453-c9e1db1479ed?q=80&w=1600&auto=format&fit=crop" },
      { title: "かぼす", imageUrl: "https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6?q=80&w=1600&auto=format&fit=crop" }
    ]
  },
  { code: "miyazaki", nameJa: "宮崎県", nameEn: "Miyazaki", famousSpots: [
      { title: "高千穂", imageUrl: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=1600&auto=format&fit=crop", description: "天孫降臨の地" },
      { title: "青島", imageUrl: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=1600&auto=format&fit=crop", description: "鬼の洗濯板の奇岩" },
      { title: "日南海岸", imageUrl: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=1600&auto=format&fit=crop", description: "南国の美しい海岸" }
    ], foods: [
      { title: "宮崎牛", imageUrl: "https://images.unsplash.com/photo-1529973565453-c9e1db1479ed?q=80&w=1600&auto=format&fit=crop" },
      { title: "チキン南蛮", imageUrl: "https://images.unsplash.com/photo-1529973565453-c9e1db1479ed?q=80&w=1600&auto=format&fit=crop" },
      { title: "マンゴー", imageUrl: "https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6?q=80&w=1600&auto=format&fit=crop" }
    ]
  },
  { code: "kagoshima", nameJa: "鹿児島県", nameEn: "Kagoshima", famousSpots: [
      { title: "桜島", imageUrl: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=1600&auto=format&fit=crop", description: "活火山の島" },
      { title: "屋久島", imageUrl: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=1600&auto=format&fit=crop", description: "世界遺産の自然の島" },
      { title: "知覧", imageUrl: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=1600&auto=format&fit=crop", description: "薩摩の小京都" }
    ], foods: [
      { title: "黒豚", imageUrl: "https://images.unsplash.com/photo-1529973565453-c9e1db1479ed?q=80&w=1600&auto=format&fit=crop" },
      { title: "さつまいも", imageUrl: "https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6?q=80&w=1600&auto=format&fit=crop" },
      { title: "白熊", imageUrl: "https://images.unsplash.com/photo-1542996966-2e31c00bae24?q=80&w=1600&auto=format&fit=crop" }
    ]
  },
  { code: "okinawa", nameJa: "沖縄県", nameEn: "Okinawa", famousSpots: [
      { title: "首里城", imageUrl: "https://images.unsplash.com/photo-1567411315763-6107f47b0f38?q=80&w=1600&auto=format&fit=crop", description: "琉球王国の王城" },
      { title: "美ら海水族館", imageUrl: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=1600&auto=format&fit=crop", description: "ジンベエザメで有名" },
      { title: "国際通り", imageUrl: "https://images.unsplash.com/photo-1536098561742-ca998e48cbcc?q=80&w=1600&auto=format&fit=crop", description: "那覇のメインストリート" }
    ], foods: [
      { title: "ソーキそば", imageUrl: "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?q=80&w=1600&auto=format&fit=crop" },
      { title: "ゴーヤーチャンプルー", imageUrl: "https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=1600&auto=format&fit=crop" },
      { title: "タコライス", imageUrl: "https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=1600&auto=format&fit=crop" }
    ]
  },
];

export const PREF_CODE_TO_PREF = Object.fromEntries(
  PREFECTURES.map((p) => [p.code, p])
) as Record<string, Prefecture>;


