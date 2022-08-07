import {} from 'react';

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
  const now = new Date();
  let currentDate = fromDate.getTime();
  const offset = params.daysBetween * 24 * 60 * 60 * 1000;
  while (currentDate <= now.valueOf()) currentDate += offset;

  return { nextUnlockDate: new Date(currentDate) };
}
