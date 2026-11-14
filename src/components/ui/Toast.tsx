import type { ToastState } from '@/hooks/useToast';
import { Icon } from '@/components/ui/Icon';

type ToastProps = {
  toast: ToastState;
};

export function Toast({ toast }: ToastProps) {
  return (
    <div
      role="status"
      aria-live="polite"
      className={`fixed bottom-20 left-1/2 z-50 flex -translate-x-1/2 items-center gap-2 rounded-full bg-inverse-surface px-4 py-2 font-label-sm text-label-sm text-inverse-on-surface shadow-xl transition-all duration-300 ${
        toast ? 'opacity-100' : 'pointer-events-none opacity-0'
      }`}
    >
      {toast?.icon && <Icon name={toast.icon} size={18} className="text-secondary-fixed" />}
      <span>{toast?.message}</span>
    </div>
  );
}
