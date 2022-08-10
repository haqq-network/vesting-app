import { useMemo } from 'react';

export function useNextUnlockDate(
  startDate: Date,
  { period }: { period: number },
): Date {
  const nextUnlockDate = useMemo(() => {
    const now = Date.now();
    const offset = period * 24 * 60 * 60 * 1000;
    let unlockTime = startDate.getTime();

    while (unlockTime <= now) {
      unlockTime += offset;
    }

    return new Date(unlockTime);
  }, [startDate, period]);

  return nextUnlockDate;
}
