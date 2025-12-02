"use client";
import { useEffect, useState, useMemo, createContext } from "react";

import React, { Dispatch, SetStateAction, ReactNode } from "react";

type LoadingContextType = {
  loading: boolean;
  setLoading: Dispatch<SetStateAction<boolean>>;
};

export const LoadingContext = createContext<LoadingContextType>({
  loading: false,
  setLoading: () => { },
});

export function LoadingProvider({ children }: { children: ReactNode }) {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 800);
    return () => clearTimeout(timer);
  }, []);
  const value = useMemo(() => ({ loading, setLoading }), [loading]);
  return <LoadingContext.Provider value={value}>{children}</LoadingContext.Provider>;
}
