import { renderHook } from '@testing-library/react';
import { useNextUnlockDate } from './useNextUnlockDate';

describe('useNextUnlockDate()', () => {
  it('should return correct next date with period === 20', () => {
    const startDate = new Date('2022-01-01T00:00:00.000Z');
    const period = 20;
    const nowDate = new Date('2022-05-01T00:00:00.000Z');
    const expectedReturnDate = '2022-05-21T00:00:00.000Z';
    const { result } = renderHook(() =>
      useNextUnlockDate(startDate, { daysBetween: period }, nowDate),
    );

    expect(result.current.nextUnlockDate.toISOString()).toEqual(
      expectedReturnDate,
    );
  });
});

describe('useNextUnlockDate()', () => {
  it('should return correct next date with period === 50', () => {
    const startDate = new Date('2022-01-01T00:00:00.000Z');
    const period = 50;
    const nowDate = new Date('2022-05-01T00:00:00.000Z');
    const expectedReturnDate = '2022-05-31T00:00:00.000Z';
    const { result } = renderHook(() =>
      useNextUnlockDate(startDate, { daysBetween: period }, nowDate),
    );

    expect(result.current.nextUnlockDate.toISOString()).toEqual(
      expectedReturnDate,
    );
  });
});
