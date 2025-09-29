"use client";

import { useEffect, useMemo, useState } from "react";

const STORAGE_KEY = "visited-prefectures";

export function useVisitedPrefectures() {
  const [visited, setVisited] = useState<Set<string>>(new Set());

  // 初回ロードで localStorage から復元
  useEffect(() => {
    try {
      const raw = typeof window !== "undefined" ? localStorage.getItem(STORAGE_KEY) : null;
      if (!raw) return;
      const arr: string[] = JSON.parse(raw);
      setVisited(new Set(arr));
    } catch {
      // 破損時は無視
    }
  }, []);

  // 変更時に保存
  useEffect(() => {
    try {
      if (typeof window === "undefined") return;
      localStorage.setItem(STORAGE_KEY, JSON.stringify(Array.from(visited)));
    } catch {}
  }, [visited]);

  const actions = useMemo(() => {
    const toggle = (code: string) => {
      setVisited((prev) => {
        const next = new Set(prev);
        if (next.has(code)) next.delete(code);
        else next.add(code);
        return next;
      });
    };

    const clearAll = () => setVisited(new Set());

    const markMany = (codes: string[]) => {
      setVisited(() => new Set(codes));
    };

    return { toggle, clearAll, markMany };
  }, []);

  return { visited, ...actions } as const;
}


