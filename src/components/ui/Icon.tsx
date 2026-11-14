import type { CSSProperties } from 'react';

type IconProps = {
  name: string;
  size?: number;
  filled?: boolean;
  className?: string;
};

export function Icon({ name, size = 20, filled = false, className = '' }: IconProps) {
  const style: CSSProperties = {
    fontSize: `${size}px`,
    fontVariationSettings: filled ? "'FILL' 1" : "'FILL' 0",
  };
  return (
    <span
      aria-hidden="true"
      className={`material-symbols-outlined inline-flex select-none items-center justify-center leading-none ${className}`}
      style={style}
    >
      {name}
    </span>
  );
}
