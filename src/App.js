import React, { useState } from 'react';
import { Button } from "./components/ui/button";
import { Card, CardContent } from "./components/ui/card";
import { motion } from 'framer-motion';
import Confetti from 'react-confetti';

export default function BirthdayApp() {
  const [boxMoved, setBoxMoved] = useState(false);
  const [sorryCount, setSorryCount] = useState(0);
  const [puzzleComplete, setPuzzleComplete] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);
  const [showSecret, setShowSecret] = useState(false);

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
    <div className="min-h-screen bg-yellow-50 flex flex-col items-center justify-center text-center p-4 overflow-x-hidden">
      {showConfetti && <Confetti />}

      {puzzleComplete ? (
        <div className="w-full flex flex-col items-center justify-center p-6">
          {/* Initial secret message */}
          <Card className="max-w-md bg-white mt-6">
            <CardContent className="p-4 space-y-3">
              <p className="text-md text-green-700 font-medium">You did it, Mannu!</p>
              <p className="text-lg font-bold">Here’s a secret: I love you ❤️</p>
              <p className="text-sm text-gray-500 italic">
                (Don’t get tensed! I love you as just friend😎)
              </p>
            </CardContent>
          </Card>

          {/* Prompt to continue */}
          <p className="mt-6 text-xl font-semibold text-purple-700">Let's continue the game... 🎮</p>

          {/* PUBG-themed quiz section */}
          <div
            className="relative w-full min-h-screen bg-cover bg-center flex flex-col items-center justify-center p-6 text-white mt-6"
            style={{
              backgroundImage: "url('https://4kwallpapers.com/images/wallpapers/pubg-playerunknowns-battlegrounds-black-background-3840x2160-660.jpg')",
            }}
          >
            {/* Mangoes and Grapes decorations */}

            {/* Funny Story Card */}
            <Card className="bg-black/70 backdrop-blur-md border-white border-2 max-w-lg text-left z-10">
              <CardContent className="p-6 space-y-3">
                <h2 className="text-xl font-bold text-yellow-400">Story Time 🎮</h2>
                <p>
                  Once upon a drop in Erangel, <strong>Mercury</strong> spotted an enemy but got distracted by flying mangoes 🥭.
                  Meanwhile, <strong>Potti</strong> shouted, “Focus, you noob!” — but ended up looting grapes instead 🍇.
                  Together, they lost the paneer dinner… but won the <em>bond of best-friendship forever</em>. 💛
                </p>
              </CardContent>
            </Card>

            {/* Trick Quiz */}
            <div className="mt-10 text-center z-10">
              <p className="text-2xl font-semibold mb-4">Quick Question 🔥</p>
              <p className="mb-6">Am I a good girl or a bad girl? 😏</p>

              <div className="flex gap-6 justify-center">
                <button
                  className="bg-green-500 hover:bg-green-600 px-6 py-2 rounded-full font-bold"
                  onClick={() => setShowSecret(true)}
                >
                  Good Girl 😇
                </button>

                <motion.button
                  className="bg-red-500 px-6 py-2 rounded-full font-bold cursor-pointer"
                  whileHover={{ x: [0, 80, -80, 0] }}
                  transition={{ duration: 0.5 }}
                >
                  Bad Girl 😈
                </motion.button>
              </div>
            </div>

            {/* Emotional Birthday Message */}
            {showSecret && (
              <div className="mt-10 max-w-xl bg-white/10 backdrop-blur-lg p-6 rounded-xl border border-yellow-300 z-10">
                <h3 className="text-2xl text-yellow-400 font-bold mb-2">Dear Mannu ❤️</h3>
                <p>
                  Advance Happy Birthday, idiot! 🎂 I want to say thank you for being the craziest,
                  funniest, most dependable PUBG warrior and best friend I could ask for. From our mango fights to
                  gym gossips, from coding crashes to paneer dinners, every moment with you is priceless.
                </p>
                <p className="mt-2 italic">You’re not just a friend — you’re family. I love you (as a friend 😎) forever.</p>
                <p className="mt-2 text-right">– Yours forever, Potti 💛</p>
              </div>
            )}
          </div>
        </div>
      ) : (
        <motion.div
          className={`bg-pink-200 p-6 rounded-2xl shadow-xl transition-all ${boxMoved ? 'translate-x-20 rotate-6' : ''}`}
          onClick={handleBoxClick}
          whileHover={{ scale: 1.05 }}
        >
          <p className="text-xl font-semibold">Click me to unlock a surprise! 🎁</p>
        </motion.div>
      )}

      {/* Sorry input logic */}
      {boxMoved && !puzzleComplete && sorryCount < 5 && (
  <div className="mt-6">
    <p className="text-red-600 font-bold">Oops! Say sorry 5 times to continue 😜</p>
    <input
      type="text"
      placeholder="Type 'sorry' and press Enter"
      className="border p-2 rounded-md mt-2"
      onKeyDown={(e) => {
        if (e.key === 'Enter' && e.target.value.toLowerCase() === 'sorry') {
          setSorryCount((prev) => Math.min(prev + 1, 5));
          e.target.value = '';
        }
      }}
    />
    <p className="text-gray-500 text-sm mt-1">
      You have said sorry {sorryCount} time{sorryCount !== 1 ? 's' : ''}.{' '}
      {5 - sorryCount > 0 ? `${5 - sorryCount} left.` : ''}
    </p>
  </div>
)}


      {/* Footer placeholder */}
      <div className="mt-10 text-sm text-gray-600 max-w-md">
        <p>We’ll add more surprises soon! 🍰</p>
      </div>
    </div>
  );
}
