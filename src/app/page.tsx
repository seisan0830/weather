"use client";

import { useState } from "react";
import PrefectureMap from "@/components/japan-map/PrefectureMap";
import PrefectureDetailsSheet from "@/components/prefecture-details/PrefectureDetailsSheet";
import { useVisitedPrefectures } from "@/hooks/useVisitedPrefectures";
import { PREF_CODE_TO_PREF } from "@/data/prefectures";
import { Button } from "@/components/ui/button";

export default function Home() {
  const { visited, toggle, clearAll } = useVisitedPrefectures();
  const [selected, setSelected] = useState<string | null>(null);
  const [open, setOpen] = useState(false);

  const handleSelect = (code: string) => {
    setSelected(code);
    setOpen(true);
  };

  const selectedPref = selected ? PREF_CODE_TO_PREF[selected] ?? null : null;
  const isVisited = selected ? visited.has(selected) : false;

  return (
    <main className="flex min-h-screen flex-col items-center gap-8 py-10 px-4">
      <div className="text-center space-y-2">
        <h1 className="text-2xl font-semibold">旅の記録マップ</h1>
        <p className="text-sm text-muted-foreground">行った都道府県を色で記録し、クリックで名所や食べ物をチェック</p>
      </div>

      <PrefectureMap visited={visited} onSelect={handleSelect} />

      <div className="flex gap-3">
        <Button variant="outline" onClick={() => setOpen(true)} disabled={!selected}>
          詳細を開く
        </Button>
        <Button variant={`${"secondary"}`} onClick={clearAll}>全てリセット</Button>
      </div>

      <PrefectureDetailsSheet
        open={open}
        onOpenChange={setOpen}
        prefecture={selectedPref}
        isVisited={isVisited}
        onToggleVisited={() => selected && toggle(selected)}
      />
    </main>
  );
}
