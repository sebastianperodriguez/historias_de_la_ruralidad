import { vi } from 'vitest';
import '@testing-library/jest-dom/vitest';

// jsdom does not implement media element playback.
window.HTMLMediaElement.prototype.play = vi.fn().mockResolvedValue(undefined);
window.HTMLMediaElement.prototype.pause = vi.fn();

// jsdom does not implement window.scrollTo.
window.scrollTo = vi.fn();

// jsdom does not implement the fullscreen API.
Element.prototype.requestFullscreen = vi.fn().mockResolvedValue(undefined);
document.exitFullscreen = vi.fn().mockResolvedValue(undefined);
