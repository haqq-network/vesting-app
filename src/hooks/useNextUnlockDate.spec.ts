import { renderHook } from '@testing-library/react';
import { useNextUnlockDate } from './useNextUnlockDate';

jest.useFakeTimers().setSystemTime(new Date('2022-05-01'));

const periods = [
  [20, '2022-05-21T00:00:00.000Z'],
  [50, '2022-05-31T00:00:00.000Z'],
];

test.each(periods)(
  'should return correct next date with period',
  (period, expectedReturnDate) => {
    const startDate = new Date('2022-01-01T00:00:00.000Z');
    const { result } = renderHook(() =>
      useNextUnlockDate(startDate, { daysBetween: +period }),
    );

    expect(result.current.nextUnlockDate.toISOString()).toEqual(
      expectedReturnDate,
    );
  },
);
