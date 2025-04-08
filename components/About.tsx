"use client";

import { useEffect, useState } from "react";
import "../styles/about.css";

const manifestCode = [
  "const Mriyav = {",
  '  mission: "Transforming dreams into digital reality",',
  '  vision: "Empowering businesses through innovation",',
  "  values: [",
  '    "Creativity",',
  '    "Excellence",',
  '    "Collaboration"',
  "  ],",
  '  promise: "We build solutions that inspire",',
  "};",
  "Mriyav.execute();",
];

export default function About() {
  const [displayedLines, setDisplayedLines] = useState<string[]>(
    manifestCode.map(() => "")
  );
  const [isTypingComplete, setIsTypingComplete] = useState(false);

  useEffect(() => {
    let lineIndex = 0;
    let charIndex = 0;

    const typeLine = () => {
      if (lineIndex >= manifestCode.length) {
        setIsTypingComplete(true);
        return;
      }

      const currentLine = manifestCode[lineIndex];
      if (charIndex <= currentLine.length) {
        setDisplayedLines((prev) => {
          const newLines = [...prev];
          newLines[lineIndex] = currentLine.slice(0, charIndex);
          return newLines;
        });
        charIndex++;
        setTimeout(typeLine, 25); // Затримка між символами
      } else {
        charIndex = 0;
        lineIndex++;
        setTimeout(typeLine, 100); // Затримка між рядками
      }
    };

    typeLine();
  }, []);

  return (
    <section className="about">
      <div className="about-container">
        <h2 className="about-title">About Us</h2>
        <div className="manifest">
          {displayedLines.map((line, index) => (
            <div key={index} className="manifest-line">
              <span>{line}</span>
              {line.length === manifestCode[index].length &&
                !isTypingComplete &&
                index === displayedLines.length - 1 && (
                  <span className="cursor">|</span>
                )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
