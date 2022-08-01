import React, { useEffect, useMemo, useRef } from 'react';
import Jazzicon from '@metamask/jazzicon';
import clsx from 'clsx';

export interface IdentIconProps {
  address: string;
  size?: number;
  className?: string;
}

export function IdentIcon({ address, size = 16, className }: IdentIconProps) {
  const iconElementRef = useRef<HTMLDivElement>(null);
  const jazzIconElement = useMemo(() => {
    return Jazzicon(size, parseInt(address.slice(2, 10), 16));
  }, [address, size]);

  useEffect(() => {
    if (iconElementRef.current) {
      iconElementRef.current.innerHTML = '';
      iconElementRef.current.appendChild(jazzIconElement);
    }
  }, [jazzIconElement]);

  return (
    <div
      ref={iconElementRef}
      className={clsx(
        'inline-block leading-[0px] rounded-full overflow-hidden',
        className,
      )}
    />
  );
}
