import { useState, useEffect, useRef } from 'react';

export default function useOutsideActions() {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    if (!isOpen) return;

    const closeOptionOnClick = (e) => {
      if (ref.current && !ref.current.contains(e.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', closeOptionOnClick);
    return () => document.removeEventListener('mousedown', closeOptionOnClick);
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) return;

    const closeOptionOnEscape = (e) => {
      if (e.key === 'Escape') {
        setIsOpen(false);
      }
    };
    document.addEventListener('keydown', closeOptionOnEscape);
    return () => document.removeEventListener('keydown', closeOptionOnEscape);
  }, [isOpen]);

  return { ref, isOpen, setIsOpen };
}
