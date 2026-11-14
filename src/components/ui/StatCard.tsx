type StatCardProps = {
  value: string | number;
  label: string;
  colorClass?: string;
  className?: string;
};

export function StatCard({
  value,
  label,
  colorClass = 'text-primary',
  className = '',
}: StatCardProps) {
  return (
    <div
      className={`flex flex-col items-center rounded bg-surface-container-lowest p-space-sm text-center shadow-sm ${className}`}
    >
      <span
        className={`font-headline-lg-mobile text-headline-lg-mobile font-semibold leading-none ${colorClass}`}
      >
        {value}
      </span>
      <span className="mt-1 font-label-sm text-label-sm text-on-surface-variant">{label}</span>
    </div>
  );
}
