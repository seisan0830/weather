"use client";

import { useState, useEffect } from "react";

export type UserProfile = {
  nickname: string;
  age: string;
  gender: string;
  email: string;
};

const STORAGE_KEY = "user_profile";

export function useUserProfile() {
  const [profile, setProfile] = useState<UserProfile | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // ローカルストレージからプロファイルを読み込む
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      try {
        setProfile(JSON.parse(stored));
      } catch (error) {
        console.error("Failed to parse user profile:", error);
      }
    }
    setIsLoading(false);
  }, []);

  const saveProfile = (newProfile: UserProfile) => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(newProfile));
    setProfile(newProfile);
  };

  const clearProfile = () => {
    localStorage.removeItem(STORAGE_KEY);
    setProfile(null);
  };

  return {
    profile,
    isLoading,
    saveProfile,
    clearProfile,
    hasProfile: profile !== null,
  };
}

