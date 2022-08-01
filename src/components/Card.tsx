import React, { ReactElement, ReactNode } from 'react';

export function Card({ children }: { children: ReactNode }): ReactElement {
  return <div className="bg-white text-black rounded-[32px]">{children}</div>;
}
