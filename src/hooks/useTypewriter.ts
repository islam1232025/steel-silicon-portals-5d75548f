import { useState, useEffect } from "react";

interface UseTypewriterOptions {
  text: string;
  speed?: number;
  delay?: number;
}

export const useTypewriter = ({ text, speed = 50, delay = 0 }: UseTypewriterOptions) => {
  const [displayText, setDisplayText] = useState("");
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    let timeoutId: ReturnType<typeof setTimeout>;
    let currentIndex = 0;

    const startTyping = () => {
      const intervalId = setInterval(() => {
        if (currentIndex < text.length) {
          setDisplayText(text.slice(0, currentIndex + 1));
          currentIndex++;
        } else {
          clearInterval(intervalId);
          setIsComplete(true);
        }
      }, speed);

      return intervalId;
    };

    timeoutId = setTimeout(() => {
      const intervalId = startTyping();
      return () => clearInterval(intervalId);
    }, delay);

    return () => {
      clearTimeout(timeoutId);
    };
  }, [text, speed, delay]);

  return { displayText, isComplete };
};
