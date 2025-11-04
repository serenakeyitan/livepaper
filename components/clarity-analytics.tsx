'use client';

import { useEffect } from 'react';
import Clarity from '@microsoft/clarity';

export function ClarityAnalytics() {
  useEffect(() => {
    // 初始化 Clarity
    Clarity.init('u0xk1z2w20');
  }, []);

  return null;
}
