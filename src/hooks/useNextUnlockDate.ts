import { useMemo } from 'react';

interface NextUnlockDateHook {
  nextUnlockDate: Date;
  // time: {
  //   d: number;
  //   h: number;
  //   m: number;
  //   s: number;
  // };
}

export function useNextUnlockDate(
  fromDate: Date,
  params: { daysBetween: number },
): NextUnlockDateHook {
  return useMemo(() => {
    const now = Date.now();
    let unlockTime = fromDate.getTime();
    const offset = params.daysBetween * 24 * 60 * 60 * 1000;
    while (unlockTime <= now) {
      unlockTime += offset;
    }

    return { nextUnlockDate: new Date(unlockTime) };
  }, [fromDate, params.daysBetween]);
}
