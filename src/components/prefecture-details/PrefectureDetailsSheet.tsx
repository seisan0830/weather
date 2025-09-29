"use client";

import Image from "next/image";
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
                <div className="mt-3 grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {prefecture.famousSpots.map((s, idx) => {
                    if (typeof s === "string") {
                      return (
                        <div key={`${s}-${idx}`} className="border rounded-md p-3 text-sm">
                          <div className="font-medium">{s}</div>
                        </div>
                      );
                    }
                    return (
                      <div key={`${s.title}-${idx}`} className="border rounded-md overflow-hidden">
                        <div className="relative w-full h-40">
                          <Image src={s.imageUrl} alt={s.title} fill className="object-cover" />
                        </div>
                        <div className="p-3">
                          <div className="font-medium">{s.title}</div>
                          {s.description ? (
                            <div className="text-xs text-muted-foreground mt-1">{s.description}</div>
                          ) : null}
                        </div>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>

            <Separator />

            <div>
              <div className="text-sm text-muted-foreground">Foods</div>
              {prefecture.foods.length === 0 ? (
                <div className="mt-2 text-sm text-muted-foreground">準備中…</div>
              ) : (
                <div className="mt-3 grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {prefecture.foods.map((f, idx) => {
                    if (typeof f === "string") {
                      return (
                        <div key={`${f}-${idx}`} className="border rounded-md p-3 text-sm">
                          <div className="font-medium">{f}</div>
                        </div>
                      );
                    }
                    return (
                      <div key={`${f.title}-${idx}`} className="border rounded-md overflow-hidden">
                        <div className="relative w-full h-40">
                          <Image src={f.imageUrl} alt={f.title} fill className="object-cover" />
                        </div>
                        <div className="p-3">
                          <div className="font-medium">{f.title}</div>
                          {f.description ? (
                            <div className="text-xs text-muted-foreground mt-1">{f.description}</div>
                          ) : null}
                        </div>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>

            <Separator />

            <div>
              <div className="text-sm text-muted-foreground">Stays</div>
              {!prefecture.stays || prefecture.stays.length === 0 ? (
                <div className="mt-2 text-sm text-muted-foreground">準備中…</div>
              ) : (
                <div className="mt-3 grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {prefecture.stays.map((h, idx) => (
                    <a key={`${h.title}-${idx}`} href={h.url} target="_blank" rel="noreferrer" className="border rounded-md overflow-hidden hover:shadow-sm transition">
                      <div className="relative w-full h-40">
                        <Image src={h.imageUrl} alt={h.title} fill className="object-cover" />
                      </div>
                      <div className="p-3">
                        <div className="font-medium">{h.title}</div>
                        {h.description ? (
                          <div className="text-xs text-muted-foreground mt-1">{h.description}</div>
                        ) : null}
                      </div>
                    </a>
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


