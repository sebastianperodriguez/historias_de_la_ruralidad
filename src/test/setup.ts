import { vi } from 'vitest';
import '@testing-library/jest-dom/vitest';

// jsdom does not implement media element playback.
window.HTMLMediaElement.prototype.play = vi.fn().mockResolvedValue(undefined);
window.HTMLMediaElement.prototype.pause = vi.fn();
