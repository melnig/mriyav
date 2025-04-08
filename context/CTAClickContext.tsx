"use client";

import { createContext, useContext, ReactNode } from "react";

interface CTAClickContextType {
  onCTAClick: () => void;
}

const CTAClickContext = createContext<CTAClickContextType | undefined>(
  undefined
);

export function CTAClickProvider({
  children,
  onCTAClick,
}: {
  children: ReactNode;
  onCTAClick: () => void;
}) {
  return (
    <CTAClickContext.Provider value={{ onCTAClick }}>
      {children}
    </CTAClickContext.Provider>
  );
}

export function useCTAClick() {
  const context = useContext(CTAClickContext);
  if (!context) {
    throw new Error("useCTAClick must be used within a CTAClickProvider");
  }
  return context;
}
