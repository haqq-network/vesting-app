import React, { useEffect, useMemo, useRef } from 'react';
import Jazzicon from '@metamask/jazzicon';

export interface IdentIconProps {
  address: string;
  size?: number;
}

export function IdentIcon({ address, size = 16 }: IdentIconProps) {
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
      className="inline-block leading-[0px] rounded-full overflow-hidden"
    />
  );
}
