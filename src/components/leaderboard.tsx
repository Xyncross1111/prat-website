'use client';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { ChevronUpIcon, ChevronDownIcon } from '@heroicons/react/24/solid';
import { Press_Start_2P, JetBrains_Mono } from 'next/font/google';

const press2pstart = Press_Start_2P({
    weight: '400',
    subsets: ['latin'],
});

const jetbrains = JetBrains_Mono({
    weight: '700',
    subsets: ['latin'],
});

const ITEMS_PER_PAGE = 5;

const topRankColors = ['bg-yellow-400', 'bg-gray-300', 'bg-orange-500'];

export default function Leaderboard() {

    const [scores, setScores] = useState([]);

    useEffect(() => {

        const getScores = async () => {
            const response = await fetch("api/getScores");
            const data = await response.json();
            setScores(data);
        };
        getScores();
    }, []);

    const sortedData = [...scores].sort((a, b) => b.score - a.score);

    const rankedData = sortedData.map((item, index) => ({
        ...item,
        color: index < 3 ? topRankColors[index] : item.color || 'bg-gray-900',
        textColor: index < 3 ? 'text-black' : 'text-white',
    }));

    const [startIndex, setStartIndex] = useState(0);
    const visibleData = rankedData.slice(startIndex, startIndex + ITEMS_PER_PAGE);

    const handleScrollUp = () => {
        if (startIndex > 0) setStartIndex(startIndex - 1);
    };

    const handleScrollDown = () => {
        if (startIndex + ITEMS_PER_PAGE < rankedData.length) setStartIndex(startIndex + 1);
    };

    return (
        <>
            <div className="z-10 relative flex flex-col gap-10 items-center justify-center min-h-screen p-4">
                <div className='mt-10 flex items-center justify-center z-50'>
                </div>
                <div className="relative w-full max-w-md">
                    <Image
                        src={"/assets/image/LEADERBOARD.png"}
                        alt="Leaderboard"
                        layout="responsive"
                        width={100}
                        height={100}
                        className='-mt-14 object-contain'
                        onDragStart={(e) => e.preventDefault()}
                        onContextMenu={(e) => e.preventDefault()}
                    />

                    <div className="absolute top-[23%] left-1/2 transform -translate-x-1/2 w-[60%] h-[55%] flex flex-col items-center">
                        <button
                            className="mb-3 p-1 bg-gray-200 rounded-full hover:bg-gray-300"
                            onClick={handleScrollUp}
                        >
                            <ChevronUpIcon className="h-6 w-6 text-gray-700" />
                        </button>

                        {visibleData.map((item) => (
                            <div key={item.section} className="flex justify-between items-center w-[85%] mb-3">
                                <div className={`px-5 py-1.5 rounded border-2 border-dotted ${item.border} ${item.color} ${item.textColor} font-bold text-md`}>
                                    <p className={jetbrains.className}>{item.section}</p>
                                </div>

                                <div className="flex items-center justify-center text-white text-sm font-mono tracking-widest">
                                    <p className={press2pstart.className}>{item.score}</p>
                                </div>
                            </div>
                        ))}

                        <button
                            className="mt-1 p-1 bg-gray-200 rounded-full hover:bg-gray-300"
                            onClick={handleScrollDown}
                        >
                            <ChevronDownIcon className="h-6 w-6 text-gray-700" />
                        </button>
                    </div>
                </div>
                <div className={`flex flex-col items-center justify-center ${jetbrains.className}`}>
                    <a href="https://linktr.ee/rbu.src" target='_blank'>
                        <Image
                            src={"/assets/image/src.png"}
                            alt="RBU SRC"
                            height={40}
                            width={40}
                            onDragStart={(e) => e.preventDefault()}
                            onContextMenu={(e) => e.preventDefault()}
                        />
                    </a>
                    <p className='mt-2 text-[8px]'>Students&apos; Representative Council, RBU</p>
                </div>
            </div>
        </>
    );
}
