"use client"

import React, { useState } from 'react';
import Game from './components/Game';

export default function Home() {
  const [startGame, setStartGame] = useState(false);

  const handleClick = () => {
    setStartGame(true);
  };

  return (
    <main className='flex flex-col items-center justify-center'>
      <h1 className='mb-[300px] mt-32 font-mono text-5xl hover:text-blue-100 duration-100'>
        GLOBAL ECONOMY QUIZ
      </h1>
      {startGame ? (
        <Game />
      ) : (
        <button className='bg-white rounded-2xl w-[172px] h-[66px] text-xl text-slate-950 font-mono text-black hover:bg-slate-100 duration-150' onClick={handleClick}>
          PLAY
        </button>
      )}
    </main>
  );
}