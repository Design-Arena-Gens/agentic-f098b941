"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface ScriptSegment {
  text: string;
  broll: string;
  duration: number;
}

const scriptSegments: ScriptSegment[] = [
  {
    text: "People are saving HOURS every week using new free AI tools…",
    broll: "clock",
    duration: 4000,
  },
  {
    text: "but most people still don't know they exist.",
    broll: "tech",
    duration: 3000,
  },
  {
    text: "Today, I'll show you 5 powerful AI tools that can boost your productivity instantly",
    broll: "tools",
    duration: 5000,
  },
  {
    text: "— and every one of them is completely free.",
    broll: "dashboard",
    duration: 3000,
  },
];

const BrollVisual = ({ type }: { type: string }) => {
  const variants = {
    initial: { opacity: 0, scale: 0.9 },
    animate: { opacity: 1, scale: 1 },
    exit: { opacity: 0, scale: 1.1 },
  };

  const renderBroll = () => {
    switch (type) {
      case "clock":
        return (
          <div className="relative w-full h-full flex items-center justify-center">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-purple-600/20" />
            <motion.div
              className="relative"
              animate={{ rotate: 360 }}
              transition={{ duration: 4, ease: "linear" }}
            >
              <svg width="300" height="300" viewBox="0 0 300 300" className="drop-shadow-2xl">
                <circle cx="150" cy="150" r="140" fill="rgba(59, 130, 246, 0.1)" stroke="rgba(59, 130, 246, 0.5)" strokeWidth="4" />
                <circle cx="150" cy="150" r="120" fill="rgba(147, 51, 234, 0.1)" stroke="rgba(147, 51, 234, 0.5)" strokeWidth="3" />
                {[...Array(12)].map((_, i) => {
                  const angle = (i * 30 - 90) * (Math.PI / 180);
                  const x1 = 150 + 110 * Math.cos(angle);
                  const y1 = 150 + 110 * Math.sin(angle);
                  const x2 = 150 + 130 * Math.cos(angle);
                  const y2 = 150 + 130 * Math.sin(angle);
                  return (
                    <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke="rgba(255, 255, 255, 0.6)" strokeWidth="3" strokeLinecap="round" />
                  );
                })}
                <line x1="150" y1="150" x2="150" y2="80" stroke="#60A5FA" strokeWidth="6" strokeLinecap="round" />
                <line x1="150" y1="150" x2="200" y2="150" stroke="#A78BFA" strokeWidth="5" strokeLinecap="round" />
                <circle cx="150" cy="150" r="10" fill="#FFF" />
              </svg>
            </motion.div>
            <motion.div
              className="absolute top-20 left-20 text-6xl font-bold text-blue-400"
              animate={{ scale: [1, 1.2, 1], opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              ⏱️
            </motion.div>
            <motion.div
              className="absolute bottom-20 right-20 text-5xl font-bold text-purple-400"
              animate={{ scale: [1, 1.2, 1], opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 2, repeat: Infinity, delay: 1 }}
            >
              📅
            </motion.div>
          </div>
        );

      case "tech":
        return (
          <div className="relative w-full h-full flex items-center justify-center overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-600/20 to-pink-600/20" />
            {[...Array(8)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-32 h-32 border-2 border-cyan-400/30 rounded-lg"
                initial={{ x: Math.random() * 800, y: Math.random() * 600, rotate: 0 }}
                animate={{
                  x: [null, Math.random() * 800],
                  y: [null, Math.random() * 600],
                  rotate: 360,
                }}
                transition={{ duration: 3 + i, repeat: Infinity, ease: "linear" }}
              />
            ))}
            <div className="relative z-10 text-center">
              <motion.div
                className="text-8xl font-bold bg-gradient-to-r from-cyan-400 to-pink-400 bg-clip-text text-transparent"
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                AI
              </motion.div>
              <motion.div
                className="text-2xl text-gray-300 mt-4"
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                Neural Networks • Machine Learning • Deep Learning
              </motion.div>
            </div>
          </div>
        );

      case "tools":
        return (
          <div className="relative w-full h-full flex items-center justify-center">
            <div className="absolute inset-0 bg-gradient-to-br from-green-600/20 to-blue-600/20" />
            <div className="grid grid-cols-3 gap-8">
              {[1, 2, 3, 4, 5].map((num, i) => (
                <motion.div
                  key={num}
                  className="w-32 h-32 bg-gradient-to-br from-green-500 to-blue-500 rounded-2xl flex items-center justify-center text-6xl font-bold text-white shadow-2xl"
                  initial={{ scale: 0, rotate: -180 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{ delay: i * 0.2, duration: 0.5, type: "spring" }}
                  whileHover={{ scale: 1.1 }}
                >
                  {num}
                </motion.div>
              ))}
            </div>
          </div>
        );

      case "dashboard":
        return (
          <div className="relative w-full h-full flex items-center justify-center p-12">
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-600/20 to-purple-600/20" />
            <motion.div
              className="relative w-full max-w-4xl bg-gray-900/50 backdrop-blur-xl rounded-3xl p-8 border border-gray-700 shadow-2xl"
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-4 h-4 bg-red-500 rounded-full" />
                <div className="w-4 h-4 bg-yellow-500 rounded-full" />
                <div className="w-4 h-4 bg-green-500 rounded-full" />
              </div>
              <div className="grid grid-cols-2 gap-6">
                {[...Array(4)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="bg-gradient-to-br from-indigo-500/20 to-purple-500/20 rounded-xl p-6 border border-indigo-400/30"
                    animate={{ opacity: [0.7, 1, 0.7] }}
                    transition={{ duration: 2, repeat: Infinity, delay: i * 0.3 }}
                  >
                    <div className="h-3 bg-indigo-400 rounded mb-3 w-3/4" />
                    <div className="h-2 bg-gray-600 rounded mb-2 w-full" />
                    <div className="h-2 bg-gray-600 rounded w-2/3" />
                  </motion.div>
                ))}
              </div>
              <motion.div
                className="mt-6 text-center text-4xl font-bold bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent"
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                100% FREE
              </motion.div>
            </motion.div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <motion.div
      className="absolute inset-0 w-full h-full"
      variants={variants}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={{ duration: 0.6 }}
    >
      {renderBroll()}
    </motion.div>
  );
};

const Avatar = ({ isSpeaking }: { isSpeaking: boolean }) => {
  return (
    <div className="relative w-full h-full flex items-center justify-center">
      <motion.div
        className="relative w-64 h-64"
        animate={isSpeaking ? { scale: [1, 1.02, 1] } : {}}
        transition={{ duration: 0.5, repeat: Infinity }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full blur-2xl opacity-50" />
        <motion.div
          className="relative w-full h-full bg-gradient-to-br from-blue-400 to-purple-500 rounded-full flex items-center justify-center text-8xl shadow-2xl"
          animate={isSpeaking ? { boxShadow: ["0 0 20px rgba(147, 51, 234, 0.5)", "0 0 40px rgba(59, 130, 246, 0.8)", "0 0 20px rgba(147, 51, 234, 0.5)"] } : {}}
          transition={{ duration: 1, repeat: Infinity }}
        >
          🤖
        </motion.div>
        {isSpeaking && (
          <motion.div
            className="absolute -bottom-4 left-1/2 -translate-x-1/2 flex gap-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            {[...Array(3)].map((_, i) => (
              <motion.div
                key={i}
                className="w-3 h-3 bg-blue-400 rounded-full"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 0.6, repeat: Infinity, delay: i * 0.2 }}
              />
            ))}
          </motion.div>
        )}
      </motion.div>
    </div>
  );
};

export default function Home() {
  const [currentSegment, setCurrentSegment] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const utteranceRef = useRef<SpeechSynthesisUtterance | null>(null);

  const startPresentation = () => {
    setIsPlaying(true);
    setCurrentSegment(0);
    playSegment(0);
  };

  const playSegment = (index: number) => {
    if (index >= scriptSegments.length) {
      setIsPlaying(false);
      setIsSpeaking(false);
      return;
    }

    const segment = scriptSegments[index];

    if ('speechSynthesis' in window) {
      const utterance = new SpeechSynthesisUtterance(segment.text);
      utterance.rate = 0.95;
      utterance.pitch = 1.05;
      utterance.volume = 1;

      utterance.onstart = () => setIsSpeaking(true);
      utterance.onend = () => {
        setIsSpeaking(false);
        setTimeout(() => {
          setCurrentSegment(index + 1);
          playSegment(index + 1);
        }, 500);
      };

      utteranceRef.current = utterance;
      speechSynthesis.speak(utterance);
    } else {
      setTimeout(() => {
        setCurrentSegment(index + 1);
        playSegment(index + 1);
      }, segment.duration);
    }
  };

  const stopPresentation = () => {
    setIsPlaying(false);
    setIsSpeaking(false);
    speechSynthesis.cancel();
    setCurrentSegment(0);
  };

  useEffect(() => {
    return () => {
      speechSynthesis.cancel();
    };
  }, []);

  return (
    <main className="min-h-screen bg-black text-white overflow-hidden">
      <div className="relative w-full h-screen">
        <AnimatePresence mode="wait">
          {isPlaying && currentSegment < scriptSegments.length && (
            <BrollVisual key={currentSegment} type={scriptSegments[currentSegment].broll} />
          )}
        </AnimatePresence>

        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/60" />

        <div className="absolute top-8 left-8 z-20">
          <motion.div
            className="w-48 h-48"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2 }}
          >
            <Avatar isSpeaking={isSpeaking} />
          </motion.div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 p-12 z-20">
          <AnimatePresence mode="wait">
            {isPlaying && currentSegment < scriptSegments.length && (
              <motion.div
                key={currentSegment}
                className="bg-black/70 backdrop-blur-xl rounded-2xl p-8 border border-white/10"
                initial={{ y: 100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -50, opacity: 0 }}
                transition={{ duration: 0.5 }}
              >
                <p className="text-3xl font-medium leading-relaxed text-center">
                  {scriptSegments[currentSegment].text}
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
          {!isPlaying && (
            <motion.button
              onClick={startPresentation}
              className="px-12 py-6 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full text-2xl font-bold shadow-2xl hover:shadow-purple-500/50 transition-all"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              ▶ Start Presentation
            </motion.button>
          )}
        </div>

        {isPlaying && (
          <motion.button
            onClick={stopPresentation}
            className="absolute top-8 right-8 z-20 px-6 py-3 bg-red-600 rounded-full text-lg font-semibold shadow-xl hover:bg-red-700 transition-colors"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            ⬛ Stop
          </motion.button>
        )}

        <div className="absolute bottom-8 right-8 z-20 flex gap-2">
          {scriptSegments.map((_, i) => (
            <div
              key={i}
              className={`w-3 h-3 rounded-full transition-all ${
                i === currentSegment ? "bg-blue-500 w-8" : i < currentSegment ? "bg-green-500" : "bg-gray-600"
              }`}
            />
          ))}
        </div>
      </div>
    </main>
  );
}
