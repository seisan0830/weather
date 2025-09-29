"use client";

import { Sheet, SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Prefecture } from "@/data/prefectures";

type PrefectureDetailsSheetProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  prefecture: Prefecture | null;
  isVisited: boolean;
  onToggleVisited: () => void;
};

export function PrefectureDetailsSheet({ open, onOpenChange, prefecture, isVisited, onToggleVisited }: PrefectureDetailsSheetProps) {
  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent side="right" className="w-full sm:max-w-md">
        <SheetHeader>
          <SheetTitle className="flex items-center justify-between">
            <span>{prefecture ? prefecture.nameJa : "都道府県"}</span>
            <button
              onClick={onToggleVisited}
              className={`text-xs px-2 py-1 rounded border ${isVisited ? "bg-blue-600 text-white border-blue-700" : "bg-white text-gray-700 border-gray-300"}`}
            >
              {isVisited ? "訪問済みを解除" : "訪問済みにする"}
            </button>
          </SheetTitle>
        </SheetHeader>
        {!prefecture ? (
          <div className="text-sm text-muted-foreground mt-4">地図から都道府県を選択してください。</div>
        ) : (
          <div className="space-y-6 mt-4">
            <div>
              <div className="text-sm text-muted-foreground">Famous Spots</div>
              {prefecture.famousSpots.length === 0 ? (
                <div className="mt-2 text-sm text-muted-foreground">準備中…</div>
              ) : (
                <div className="mt-2 flex flex-wrap gap-2">
                  {prefecture.famousSpots.map((s) => (
                    <Badge key={s} variant="secondary">{s}</Badge>
                  ))}
                </div>
              )}
            </div>

            <Separator />

            <div>
              <div className="text-sm text-muted-foreground">Foods</div>
              {prefecture.foods.length === 0 ? (
                <div className="mt-2 text-sm text-muted-foreground">準備中…</div>
              ) : (
                <div className="mt-2 flex flex-wrap gap-2">
                  {prefecture.foods.map((f) => (
                    <Badge key={f}>{f}</Badge>
                  ))}
                </div>
              )}
            </div>
          </div>
        )}
      </SheetContent>
    </Sheet>
  );
}

export default PrefectureDetailsSheet;


