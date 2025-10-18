'use client';

import { useEffect, useState, useCallback } from 'react';

export default function TextType({
  text = ["Coco Shen"],
  typingSpeed = 75,
  pauseDuration = 1500,
  deletingSpeed = 50,
  showCursor = true,
  cursorCharacter = '|',
  loop = true,
  onComplete = null
}) {
  const texts = Array.isArray(text) ? text : [text];
  const [displayedText, setDisplayedText] = useState('');
  const [textIndex, setTextIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [cursorVisible, setCursorVisible] = useState(true);
  const [isTypingComplete, setIsTypingComplete] = useState(false);

  // Memoize onComplete to prevent re-renders
  const memoizedOnComplete = useCallback(() => {
    if (onComplete) {
      onComplete();
    }
  }, [onComplete]);

  // Cursor blink - only blink while typing
  useEffect(() => {
    if (!showCursor || isTypingComplete) return;
    const interval = setInterval(() => {
      setCursorVisible(v => !v);
    }, 530);
    return () => clearInterval(interval);
  }, [showCursor, isTypingComplete]);

  // Typing logic
  useEffect(() => {
    if (texts.length === 0) return;

    const currentFullText = texts[textIndex];

    const handleType = () => {
      if (!isDeleting) {
        // Typing forward
        if (charIndex < currentFullText.length) {
          setDisplayedText(currentFullText.substring(0, charIndex + 1));
          setCharIndex(charIndex + 1);
        } else {
          // Finished typing
          if (!loop && textIndex === texts.length - 1) {
            // Don't loop and this is the last text - mark as complete
            setIsTypingComplete(true);
            setCursorVisible(false);
            memoizedOnComplete();
          } else if (loop || textIndex < texts.length - 1) {
            // Wait then delete
            setTimeout(() => setIsDeleting(true), pauseDuration);
          }
        }
      } else {
        // Deleting backward
        if (charIndex > 0) {
          setDisplayedText(currentFullText.substring(0, charIndex - 1));
          setCharIndex(charIndex - 1);
        } else {
          // Finished deleting, move to next text
          setIsDeleting(false);
          setTextIndex((textIndex + 1) % texts.length);
        }
      }
    };

    const speed = isDeleting ? deletingSpeed : typingSpeed;
    const timer = setTimeout(handleType, speed);

    return () => clearTimeout(timer);
  }, [charIndex, isDeleting, textIndex, texts, typingSpeed, deletingSpeed, pauseDuration, loop, memoizedOnComplete]);

  return (
    <span className="inline-block min-h-[1.5em]">
      {displayedText}
      {showCursor && (
        <span className={`ml-1 inline-block ${cursorVisible ? 'opacity-100' : 'opacity-0'}`}>
          {cursorCharacter}
        </span>
      )}
    </span>
  );
}
