"use client";

import { useEffect } from "react";
import Clarity from "@microsoft/clarity";

export function ClarityAnalytics() {
  useEffect(() => {
    Clarity.init("u0xk1z2w20");
  }, []);

  return null;
}
