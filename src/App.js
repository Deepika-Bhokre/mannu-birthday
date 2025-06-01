
import React, { useState } from 'react';
import { Button } from "./components/ui/button";
import { Card, CardContent } from "./components/ui/card";
import { motion } from 'framer-motion';
import Confetti from 'react-confetti';

export default function BirthdayApp() {
  const [boxMoved, setBoxMoved] = useState(false);
  const [sorryCount, setSorryCount] = useState(0);
  const [showSecret, setShowSecret] = useState(false);
  const [puzzleComplete, setPuzzleComplete] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);

  const handleBoxClick = () => {
    if (!boxMoved) {
      setBoxMoved(true);
    } else if (sorryCount >= 5) {
      setPuzzleComplete(true);
      setShowConfetti(true);
    }
  };

  const handleSorryInput = (e) => {
    if (e.target.value.toLowerCase() === "sorry") {
      setSorryCount((prev) => Math.min(prev + 1, 5));
      e.target.value = "";
    }
  };

  return (
    <div className="min-h-screen bg-yellow-50 flex flex-col items-center justify-center text-center p-4">
      {showConfetti && <Confetti />}

      <h1 className="text-4xl font-bold text-purple-800 mb-6 animate-pulse">
        Happy Birthday Mannu 🎉
      </h1>
      <p className="text-lg text-gray-700 mb-4">From your best friend, Potti 💛</p>

      {!puzzleComplete ? (
        <motion.div
          className={`bg-pink-200 p-6 rounded-2xl shadow-xl transition-all ${boxMoved ? 'translate-x-20 rotate-6' : ''}`}
          onClick={handleBoxClick}
          whileHover={{ scale: 1.05 }}
        >
          <p className="text-xl font-semibold">Click me to unlock a surprise! 🎁</p>
        </motion.div>
      ) : (
        <Card className="max-w-md bg-white mt-6">
          <CardContent className="p-4 space-y-3">
            <p className="text-md text-green-700 font-medium">You did it, Mannu!</p>
            <p className="text-lg font-bold">Here’s a secret: I love you ❤️</p>
            <p className="text-sm text-gray-500 italic">
              (Don’t get tensed! I love you as a friend, bro 😎)
            </p>
          </CardContent>
        </Card>
      )}

      {boxMoved && !puzzleComplete && (
        <div className="mt-6">
          <p className="text-red-600 font-bold">Oops! Say sorry 5 times to continue 😜</p>
          <input
            type="text"
            placeholder="Type 'sorry'"
            className="border p-2 rounded-md mt-2"
            onBlur={handleSorryInput}
          />
          <p className="text-gray-500 text-sm mt-1">You have said sorry {sorryCount} times.</p>
        </div>
      )}

      <div className="mt-10 text-sm text-gray-600 max-w-md">
        <p>We’ll add a fun puzzle here next with questions about PUBG, gym, mangoes, and grapes 🍇💪</p>
      </div>
    </div>
  );
}
