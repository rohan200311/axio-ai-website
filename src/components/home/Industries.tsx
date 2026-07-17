import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import ScrollReveal from "../ScrollReveal";
import MorphSection from "../MorphSection";

const words = [
  { word: "SAASPLATFORM", row: 0, start: 4 },
  { word: "YOUTUBECHANNEL", row: 2, start: 1 },
  { word: "CONTENTWRITER", row: 6, start: 2 },
  { word: "GROWTHAGENCY", row: 9, start: 5 },
];

const ROWS = 10;
const COLS = 18;

function buildGrid() {
  const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const grid: string[][] = Array.from({ length: ROWS }, () =>
    Array.from({ length: COLS }, () =>
      letters[Math.floor(Math.random() * letters.length)]
    )
  );
  words.forEach(({ word, row, start }) => {
    for (let i = 0; i < word.length; i++) {
      if (start + i < COLS) grid[row][start + i] = word[i];
    }
  });
  return grid;
}

export default function Industries() {
  const [grid] = useState(buildGrid);
  const [activeWord, setActiveWord] = useState(0);

  useEffect(() => {
    const t = setInterval(() => {
      setActiveWord((w) => (w + 1) % words.length);
    }, 2500);
    return () => clearInterval(t);
  }, []);

  const current = words[activeWord];

  return (
    <MorphSection className="py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl dark:text-white">
            Engineering for every industry
          </h2>
          <p className="mt-3 text-zinc-600 dark:text-zinc-400">
            From SaaS platforms to fintech, healthtech, and marketplaces —
            mirai builds software that works in the real world.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.1} className="mx-auto mt-12 max-w-3xl overflow-x-auto">
          <div className="inline-block min-w-full font-mono text-[10px] sm:text-xs md:text-sm">
            {grid.map((row, ri) => (
              <div key={ri} className="flex justify-center gap-1 sm:gap-1.5">
                {row.map((cell, ci) => {
                  const inWord =
                    ri === current.row &&
                    ci >= current.start &&
                    ci < current.start + current.word.length;
                  return (
                    <motion.span
                      key={`${ri}-${ci}`}
                      animate={{
                        scale: inWord ? 1.08 : 1,
                        backgroundColor: inWord
                          ? "rgba(14,165,233,0.15)"
                          : "transparent",
                      }}
                      className={`flex h-6 w-5 items-center justify-center rounded-md sm:h-8 sm:w-6 md:h-9 md:w-7 ${
                        inWord
                          ? "font-bold text-sky-600 dark:text-sky-400"
                          : "text-zinc-400 dark:text-zinc-600"
                      }`}
                    >
                      {cell}
                    </motion.span>
                  );
                })}
              </div>
            ))}
          </div>
        </ScrollReveal>

        <div className="mt-8 flex flex-wrap justify-center gap-2">
          {words.map((w, i) => (
            <button
              key={w.word}
              type="button"
              onClick={() => setActiveWord(i)}
              className={`rounded-full px-3 py-1 text-xs font-medium transition ${
                i === activeWord
                  ? "bg-sky-500 text-white"
                  : "bg-zinc-100 text-zinc-600 hover:bg-zinc-200 dark:bg-zinc-800 dark:text-zinc-300"
              }`}
            >
              {w.word.replace(/([A-Z])/g, " $1").trim()}
            </button>
          ))}
        </div>
      </div>
    </MorphSection>
  );
}
