import { useRef, useCallback } from 'react';

interface SwipeGestureConfig {
  onSwipeLeft?: () => void;
  onSwipeRight?: () => void;
  threshold?: number;
  restrained?: number;
}

export function useSwipeGesture({
  onSwipeLeft,
  onSwipeRight,
  threshold = 50,
  restrained = 100
}: SwipeGestureConfig) {
  const startX = useRef<number>(0);
  const startY = useRef<number>(0);
  const startTime = useRef<number>(0);

  const handleTouchStart = useCallback((e: React.TouchEvent) => {
    const touch = e.touches[0];
    startX.current = touch.clientX;
    startY.current = touch.clientY;
    startTime.current = Date.now();
  }, []);

  const handleTouchEnd = useCallback((e: React.TouchEvent) => {
    if (!e.changedTouches[0]) return;

    const touch = e.changedTouches[0];
    const deltaX = touch.clientX - startX.current;
    const deltaY = touch.clientY - startY.current;
    const deltaTime = Date.now() - startTime.current;

    // Ignore if the swipe took too long (over 300ms)
    if (deltaTime > 300) return;

    // Ignore if the vertical movement is too large (not a horizontal swipe)
    if (Math.abs(deltaY) > restrained) return;

    // Check if horizontal movement exceeds threshold
    if (Math.abs(deltaX) > threshold) {
      if (deltaX > 0 && onSwipeRight) {
        // Haptic feedback for swipe gesture
        if ('vibrate' in navigator) {
          navigator.vibrate(25);
        }
        onSwipeRight();
      } else if (deltaX < 0 && onSwipeLeft) {
        // Haptic feedback for swipe gesture
        if ('vibrate' in navigator) {
          navigator.vibrate(25);
        }
        onSwipeLeft();
      }
    }
  }, [onSwipeLeft, onSwipeRight, threshold, restrained]);

  return {
    onTouchStart: handleTouchStart,
    onTouchEnd: handleTouchEnd,
  };
}