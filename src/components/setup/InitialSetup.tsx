"use client";

import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

type UserProfile = {
  nickname: string;
  age: string;
  gender: string;
  email: string;
};

type InitialSetupProps = {
  open: boolean;
  onComplete: (profile: UserProfile) => void;
};

export function InitialSetup({ open, onComplete }: InitialSetupProps) {
  const [nickname, setNickname] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!nickname || !age || !gender || !email) {
      alert("すべての項目を入力してください");
      return;
    }

    const profile: UserProfile = {
      nickname,
      age,
      gender,
      email,
    };

    onComplete(profile);
  };

  return (
    <Dialog open={open}>
      <DialogContent className="sm:max-w-md" onPointerDownOutside={(e) => e.preventDefault()} onEscapeKeyDown={(e) => e.preventDefault()}>
        <DialogHeader>
          <DialogTitle>初期設定</DialogTitle>
          <DialogDescription>
            あなたの情報を入力してください
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4 mt-4">
          <div>
            <label htmlFor="nickname" className="block text-sm font-medium mb-1">
              ニックネーム
            </label>
            <input
              id="nickname"
              type="text"
              value={nickname}
              onChange={(e) => setNickname(e.target.value)}
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="例: 太郎"
              required
            />
          </div>

          <div>
            <label htmlFor="age" className="block text-sm font-medium mb-1">
              年齢
            </label>
            <input
              id="age"
              type="number"
              value={age}
              onChange={(e) => setAge(e.target.value)}
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="例: 25"
              min="1"
              max="150"
              required
            />
          </div>

          <div>
            <label htmlFor="gender" className="block text-sm font-medium mb-1">
              性別
            </label>
            <select
              id="gender"
              value={gender}
              onChange={(e) => setGender(e.target.value)}
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            >
              <option value="">選択してください</option>
              <option value="male">男性</option>
              <option value="female">女性</option>
              <option value="other">その他</option>
              <option value="no-answer">回答しない</option>
            </select>
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium mb-1">
              メールアドレス
            </label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="例: example@example.com"
              required
            />
          </div>

          <Button type="submit" className="w-full">
            完了
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
}

