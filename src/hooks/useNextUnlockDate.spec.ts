import React from 'react';
import { renderHook } from '@testing-library/react';
import { useNextUnlockDate } from './useNextUnlockDate';

const now = new Date();
const tommorowISO = new Date(
  new Date().valueOf() + 24 * 60 * 60 * 1000,
).toISOString();

describe('useNextUnlockDate()', () => {
  it('should return correct next date', () => {
    const period = 30;
    const sourceDate = new Date(now.setDate(now.getDate() - (period - 1)));
    const expectedDate = tommorowISO;
    const { result } = renderHook(() =>
      useNextUnlockDate(sourceDate, { daysBetween: period }),
    );

    expect(result.current.nextUnlockDate.toISOString()).toEqual(expectedDate);
  });
});
