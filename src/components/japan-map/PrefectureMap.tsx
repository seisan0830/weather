"use client";

import React from "react";
// パッケージは型を提供しないため、最小限の型を与える
import japan from "@svg-maps/japan";

type JapanMapData = {
  viewBox: string;
  locations: Array<{
    id: string;
    name: string;
    path: string;
  }>;
};

type PrefectureMapProps = {
  visited: Set<string>;
  onSelect: (code: string) => void;
};

type Location = {
  id: string; // e.g. JP-01 for 北海道
  name: string; // English name
  path: string; // SVG path 'd'
};

export function PrefectureMap({ visited, onSelect }: PrefectureMapProps) {
  const mapData: JapanMapData = japan as unknown as JapanMapData;
  const viewBox = mapData.viewBox ?? "0 0 1000 1000";
  const locations: Location[] = mapData.locations.map((l) => ({
    id: l.id,
    name: l.name,
    path: l.path,
  }));

  // id をアプリ内コードに変換（JP-XX → prefecture code）。
  const idToCode = (id: string) => {
    // JP-01 = hokkaido, JP-13 = tokyo, JP-26 = kyoto, JP-27 = osaka, JP-47 = okinawa
    const map: Record<string, string> = {
      "JP-01": "hokkaido",
      "JP-02": "aomori",
      "JP-03": "iwate",
      "JP-04": "miyagi",
      "JP-05": "akita",
      "JP-06": "yamagata",
      "JP-07": "fukushima",
      "JP-08": "ibaraki",
      "JP-09": "tochigi",
      "JP-10": "gunma",
      "JP-11": "saitama",
      "JP-12": "chiba",
      "JP-13": "tokyo",
      "JP-14": "kanagawa",
      "JP-15": "niigata",
      "JP-16": "toyama",
      "JP-17": "ishikawa",
      "JP-18": "fukui",
      "JP-19": "yamanashi",
      "JP-20": "nagano",
      "JP-21": "gifu",
      "JP-22": "shizuoka",
      "JP-23": "aichi",
      "JP-24": "mie",
      "JP-25": "shiga",
      "JP-26": "kyoto",
      "JP-27": "osaka",
      "JP-28": "hyogo",
      "JP-29": "nara",
      "JP-30": "wakayama",
      "JP-31": "tottori",
      "JP-32": "shimane",
      "JP-33": "okayama",
      "JP-34": "hiroshima",
      "JP-35": "yamaguchi",
      "JP-36": "tokushima",
      "JP-37": "kagawa",
      "JP-38": "ehime",
      "JP-39": "kochi",
      "JP-40": "fukuoka",
      "JP-41": "saga",
      "JP-42": "nagasaki",
      "JP-43": "kumamoto",
      "JP-44": "oita",
      "JP-45": "miyazaki",
      "JP-46": "kagoshima",
      "JP-47": "okinawa",
    };
    return map[id] ?? id;
  };

  return (
    <svg
      viewBox={viewBox}
      role="img"
      aria-label="日本地図"
      className="w-full max-w-[900px] h-auto select-none"
    >
      <title>日本地図</title>
      {locations.map((loc) => {
        const code = idToCode(loc.id);
        const isVisited = visited.has(code);
        const fill = isVisited ? "#60a5fa" : "#e5e7eb";
        const stroke = isVisited ? "#2563eb" : "#9ca3af";
        return (
          <path
            key={loc.id}
            d={loc.path}
            fill={fill}
            stroke={stroke}
            strokeWidth={1}
            className="cursor-pointer transition-colors hover:fill-blue-300"
            onClick={() => onSelect(code)}
          >
            <title>{loc.name}</title>
          </path>
        );
      })}
    </svg>
  );
}

export default PrefectureMap;


