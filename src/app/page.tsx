"use client";

import { useState } from "react";
import PrefectureMap from "@/components/japan-map/PrefectureMap";
import PrefectureDetailsSheet from "@/components/prefecture-details/PrefectureDetailsSheet";
import { InitialSetup } from "@/components/setup/InitialSetup";
import { useVisitedPrefectures } from "@/hooks/useVisitedPrefectures";
import { useUserProfile } from "@/hooks/useUserProfile";
import { PREF_CODE_TO_PREF } from "@/data/prefectures";
import { Button } from "@/components/ui/button";

export default function Home() {
  const { visited, toggle, clearAll } = useVisitedPrefectures();
  const { profile, isLoading, saveProfile, hasProfile } = useUserProfile();
  const [selected, setSelected] = useState<string | null>(null);
  const [open, setOpen] = useState(false);

  const handleSelect = (code: string) => {
    setSelected(code);
    setOpen(true);
  };

  const selectedPref = selected ? PREF_CODE_TO_PREF[selected] ?? null : null;
  const isVisited = selected ? visited.has(selected) : false;

  if (isLoading) {
    return (
      <main className="flex min-h-screen flex-col items-center justify-center">
        <div className="text-lg">読み込み中...</div>
      </main>
    );
  }

  return (
    <main className="flex min-h-screen flex-col items-center gap-8 py-10 px-4">
      <InitialSetup 
        open={!hasProfile} 
        onComplete={saveProfile}
      />

      <div className="text-center space-y-2">
        <h1 className="text-2xl font-semibold">旅の記録マップ</h1>
        <p className="text-sm text-muted-foreground">行った都道府県を色で記録し、クリックで名所や食べ物をチェック</p>
        {profile && (
          <p className="text-sm text-muted-foreground">ようこそ、{profile.nickname}さん</p>
        )}
      </div>

      <PrefectureMap visited={visited} onSelect={handleSelect} />

      <div className="flex gap-3">
        <Button variant="outline" onClick={() => setOpen(true)} disabled={!selected}>
          詳細を開く
        </Button>
        <Button variant="secondary" onClick={clearAll}>全てリセット</Button>
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
