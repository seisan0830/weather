"use client";

import React from "react";

type PrefectureRegion = {
  code: string;
  nameJa: string;
  d: string; // SVG path
};

type PrefectureMapProps = {
  visited: Set<string>;
  onSelect: (code: string) => void;
};

// 簡易版の日本地図パス（主要都道府県のシンボル）。精密な地図は後で差し替え可能。
const PREF_PATHS: PrefectureRegion[] = [
  {
    code: "hokkaido",
    nameJa: "北海道",
    d: "M50,10 L90,20 L80,40 L60,35 L45,25 Z",
  },
  {
    code: "aomori",
    nameJa: "青森",
    d: "M55,45 L70,48 L68,60 L52,58 Z",
  },
  {
    code: "tokyo",
    nameJa: "東京",
    d: "M85,85 L92,86 L90,94 L83,93 Z",
  },
  {
    code: "kyoto",
    nameJa: "京都",
    d: "M70,78 L78,78 L78,84 L70,84 Z",
  },
  {
    code: "osaka",
    nameJa: "大阪",
    d: "M74,85 L80,85 L80,90 L74,90 Z",
  },
  {
    code: "okinawa",
    nameJa: "沖縄",
    d: "M20,110 L26,112 L24,118 L18,116 Z",
  },
];

export function PrefectureMap({ visited, onSelect }: PrefectureMapProps) {
  return (
    <svg
      viewBox="0 0 120 130"
      role="img"
      aria-label="日本地図"
      className="w-full max-w-[540px] h-auto select-none"
    >
      <title>日本地図（簡易）</title>
      <rect x="0" y="0" width="120" height="130" fill="transparent" />
      {PREF_PATHS.map((p) => {
        const isVisited = visited.has(p.code);
        const fill = isVisited ? "#60a5fa" : "#e5e7eb"; // visited: blue-400, default: gray-200
        const stroke = isVisited ? "#2563eb" : "#9ca3af"; // visited: blue-600
        return (
          <path
            key={p.code}
            d={p.d}
            fill={fill}
            stroke={stroke}
            strokeWidth={0.8}
            className="cursor-pointer transition-colors hover:fill-blue-300"
            onClick={() => onSelect(p.code)}
          >
            <title>{p.nameJa}</title>
          </path>
        );
      })}
    </svg>
  );
}

export default PrefectureMap;


