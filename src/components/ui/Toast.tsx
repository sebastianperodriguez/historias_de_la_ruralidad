import type { ToastState } from '@/hooks/useToast';

type ToastProps = {
  toast: ToastState;
};

export function Toast({ toast }: ToastProps) {
  return (
    <div
      role="status"
      aria-live="polite"
      className={`fixed bottom-6 left-1/2 z-50 flex -translate-x-1/2 items-center gap-2 rounded-full bg-inverse-surface px-4 py-2 font-label-sm text-label-sm text-inverse-on-surface shadow-xl transition-all duration-300 ${
        toast ? 'opacity-100' : 'pointer-events-none opacity-0'
      }`}
    >
      <span>{toast?.message}</span>
    </div>
  );
}
