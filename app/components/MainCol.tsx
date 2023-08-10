import { FaChevronLeft, FaChevronRight, FaPlay } from "react-icons/fa";
import Image from 'next/image';
import { useState } from "react";

import IconOne from '@/public/images/liked-songs-640.png';
import IconTwo from '@/public/images/ab6761610000101f9c30c6b69a55d48decd71600.webp';
import IconThree from '@/public/images/ab6761610000101fc4902f080d3620b3e6da80c3.webp';
import IconFour from '@/public/images/ab6761610000101fd8b9980db67272cb4d2c3daf.webp';
import IconFive from '@/public/images/ab6761610000101f214f3cf1cbe7139c1e26ffbb.webp';
import IconMixOne from '@/public/images/mix (1).jpg';
import IconMixTwo from '@/public/images/mix (2).jpg';
import IconMixThree from '@/public/images/mix (3).jpg';
import IconMixFour from '@/public/images/mix (4).jpg';
import IconMixFive from '@/public/images/mix (5).jpg';
import IconMixSix from '@/public/images/mix (6).jpg';

export default function Main () {
    const [scrolling, setScrolling] = useState(false);


         {/* Scroll Edition */}

  let scrollTimeout: string | number | NodeJS.Timeout | undefined;

  const handleScroll = () => {
    setScrolling(true);

    clearTimeout(scrollTimeout);
    scrollTimeout = setTimeout(() => {
      setScrolling(false);
    }, 2000);
  };

    return (
        <div className={`bg-zinc-900/70 rounded-3xl m-2 ${scrolling ? 'scroll-visible' : ''}`}>
                    {/* Scroll Edition */}
            <div className="flex items-center mb-6 m-5">
                <button className="px-2.5 py-1.5 bg-zinc-950 bg-opacity-60 rounded-3xl mr-2 cursor-pointer">
                    <FaChevronLeft className="inline" />
                </button>
                <button className="px-2.5 py-1.5 bg-zinc-950 bg-opacity-60 rounded-3xl mr-2 cursor-pointer">
                    <FaChevronRight className="inline" />
                </button>
                <div className="flex justify-end ml-auto mb-0">
                    <div className="px-4 p-0 mr-3 bg-slate-100 rounded-3xl cursor-pointer transition-transform transform hover:scale-110">
                        <h2 className="py-2.5 text-zinc-800 text-xs font-semibold">Ver Planos Premium</h2>
                    </div>
                    <div className="px-4 p-0 mr-3 bg-zinc-900 bg-opacity-60 rounded-3xl transition-transform transform hover:scale-110 cursor-pointer">
                        <h2 className="py-2 text-white text-sm font-semibold">Instalar aplicativo</h2>
                    </div>
                </div>
            </div>
        <div
            className={`rounded-xl mx-1 my-2 flex-1 p-8 ${scroll() ? 'scroll-visible' : ''}`}
            style={{ maxHeight: 'calc(100% - 5rem)', overflowY: 'auto', scrollbarWidth: 'thin', scrollbarColor: 'black transparent' }}
            onScroll={handleScroll}
        >
                <h2 className="text-3xl font-bold mb-4">Boa noite</h2>
                <div className='py-2 columns-3'>
                    <ul>
                        <li
                          className="group text-lg p-2 px-0 py-0 text-zinc-300 font-semibold mb-4 hover:text-zinc-200 bg-zinc-800 hover:bg-zinc-700 rounded-lg hover:rounded-lg hover:cursor-pointer hover:"
                        >
                            <Image
                                src={IconMixOne}
                                alt="Like Songs"
                                className="inline mr-5 rounded-lg"
                                width={80}
                                height={80} 
                            />
                            <div className='mr-40 py-7 inline-flex flex-col justify-center'>
                                <p className='text-lg'>Liked Songs</p>
                            </div>
                            <button className="w-14 h-14 pl-5 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible transform hover:scale-110 transition-transform shadow-2xl">
                                <FaPlay />
                            </button>
                        </li>
                        <li className="group text-lg p-2 px-0 py-0 text-zinc-300 font-semibold mb-4 hover:text-zinc-200 bg-zinc-800 hover:bg-zinc-700 rounded-lg hover:rounded-lg hover:cursor-pointer hover:">
                            <Image
                                src={IconMixOne}
                                alt="Like Songs"
                                className="inline mr-5 rounded-lg"
                                width={80}
                                height={80} 
                            />
                            <div className='mr-40 py-7 inline-flex flex-col justify-center'>
                                <p className='text-lg'>Liked Songs</p>
                            </div>
                            <button className="w-14 h-14 pl-5 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible transform hover:scale-110 transition-transform shadow-2xl">
                                <FaPlay />
                            </button>
                        </li>
                        <li className="group text-lg p-2 px-0 py-0 text-zinc-300 font-semibold mb-4 hover:text-zinc-200 bg-zinc-800 hover:bg-zinc-700 rounded-lg hover:rounded-lg hover:cursor-pointer hover:">
                            <Image
                                src={IconMixOne}
                                alt="Like Songs"
                                className="inline mr-5 rounded-lg"
                                width={80}
                                height={80} />
                            <div className='mr-40 py-7 inline-flex flex-col justify-center'>
                                <p className='text-lg'>Liked Songs</p>
                            </div>
                            <button className="w-14 h-14 pl-5 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible transform hover:scale-110 transition-transform shadow-2xl">
                                <FaPlay />
                            </button>
                        </li>
                        <li className="group text-lg p-2 px-0 py-0 text-zinc-300 font-semibold mb-4 hover:text-zinc-200 bg-zinc-800 hover:bg-zinc-700 rounded-lg hover:rounded-lg hover:cursor-pointer hover:">
                            <Image
                                src={IconMixOne}
                                alt="Like Songs"
                                className="inline mr-5 rounded-lg"
                                width={80}
                                height={80} 
                            />
                            <div className='mr-40 py-7 inline-flex flex-col justify-center'>
                                <p className='text-lg'>Liked Songs</p>
                            </div>
                            <button className="w-14 h-14 pl-5 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible transform hover:scale-110 transition-transform shadow-2xl">
                                <FaPlay />
                            </button>
                        </li>
                        <li className="group text-lg p-2 px-0 py-0 text-zinc-300 font-semibold mb-4 hover:text-zinc-200 bg-zinc-800 hover:bg-zinc-700 rounded-lg hover:rounded-lg hover:cursor-pointer hover:">
                            <Image
                                src={IconMixOne}
                                alt="Like Songs"
                                className="inline mr-5 rounded-lg"
                                width={80}
                                height={80} />
                            <div className='mr-40 py-7 inline-flex flex-col justify-center'>
                                <p className='text-lg'>Liked Songs</p>
                            </div>
                            <button className="w-14 h-14 pl-5 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible transform hover:scale-110 transition-transform shadow-2xl">
                                <FaPlay />
                            </button>
                        </li>
                        <li className="group text-lg p-2 px-0 py-0 text-zinc-300 font-semibold mb-4 hover:text-zinc-200 bg-zinc-800 hover:bg-zinc-700 rounded-lg hover:rounded-lg hover:cursor-pointer hover:">
                            <Image
                                src={IconMixOne}
                                alt="Like Songs"
                                className="inline mr-5 rounded-lg"
                                width={80}
                                height={80} 
                            />
                            <div className='mr-40 py-7 inline-flex flex-col justify-center'>
                                <p className='text-lg'>Liked Songs</p>
                            </div>
                            <button className="w-14 h-14 pl-5 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible transform hover:scale-110 transition-transform shadow-2xl">
                                <FaPlay />
                            </button>
                        </li>
                    </ul>
                </div>
                <h2 className="text-2xl font-bold mb-4 py-4 hover:underline cursor-pointer">Os Maiore Hits do momentos</h2>
                <div className='py-2 columns-7'>
                    <ul>
                        <li className="group px-5 py-1 pt-5 text-zinc-300 font-semibold mb-4 hover:text-zinc-200 bg-zinc-800/30 hover:bg-zinc-800/50 rounded-lg hover:rounded-lg hover:cursor-pointer">
                            <Image
                                src={IconMixOne}
                                alt="Like Songs"
                                className="inline mr-5 rounded-lg"
                                width={150}
                                height={120} 
                            />
                            <div className='flex -my-12 -mx-8 mb-1'>
                                <button className="w-12 h-12 pl-4 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible transform hover:scale-110 transition-transform shadow-2xl">
                                    <FaPlay />
                                </button>
                            </div>
                            <div className='py-4 inline-flex flex-col justify-center'>
                                <p className='text-lg px-1'>Liked Songs</p>
                                <p className='text-xs px-1 py-2'>2 de ago. 42min</p>
                            </div>
                        </li>
                        <li className="group px-5 py-1 pt-5 text-zinc-300 font-semibold mb-4 hover:text-zinc-200 bg-zinc-800/30 hover:bg-zinc-800/50 rounded-lg hover:rounded-lg hover:cursor-pointer">
                            <Image
                                src={IconMixOne}
                                alt="Like Songs"
                                className="inline mr-5 rounded-lg"
                                width={150}
                                height={120} 
                            />
                            <div className='flex -my-12 -mx-8 mb-1'>
                                <button className="w-12 h-12 pl-4 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible transform hover:scale-110 transition-transform shadow-2xl">
                                    <FaPlay />
                                </button>
                            </div>
                            <div className='py-4 inline-flex flex-col justify-center'>
                                <p className='text-lg px-1'>Liked Songs</p>
                                <p className='text-xs px-1 py-2'>2 de ago. 42min</p>
                            </div>
                        </li>
                        <li className="group px-5 py-1 pt-5 text-zinc-300 font-semibold mb-4 hover:text-zinc-200 bg-zinc-800/30 hover:bg-zinc-800/50 rounded-lg hover:rounded-lg hover:cursor-pointer">
                            <Image
                                src={IconMixOne}
                                alt="Like Songs"
                                className="inline mr-5 rounded-lg"
                                width={150}
                                height={120} 
                            />
                            <div className='flex -my-12 -mx-8 mb-1'>
                                <button className="w-12 h-12 pl-4 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible transform hover:scale-110 transition-transform shadow-2xl">
                                    <FaPlay />
                                </button>
                            </div>
                            <div className='py-4 inline-flex flex-col justify-center'>
                                <p className='text-lg px-1'>Liked Songs</p>
                                <p className='text-xs px-1 py-2'>2 de ago. 42min</p>
                            </div>
                        </li>
                        <li className="group px-5 py-1 pt-5 text-zinc-300 font-semibold mb-4 hover:text-zinc-200 bg-zinc-800/30 hover:bg-zinc-800/50 rounded-lg hover:rounded-lg hover:cursor-pointer">
                            <Image
                                src={IconMixOne}
                                alt="Like Songs"
                                className="inline mr-5 rounded-lg"
                                width={150}
                                height={120} 
                            />
                            <div className='flex -my-12 -mx-8 mb-1'>
                                <button className="w-12 h-12 pl-4 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible transform hover:scale-110 transition-transform shadow-2xl">
                                    <FaPlay />
                                </button>
                            </div>
                            <div className='py-4 inline-flex flex-col justify-center'>
                                <p className='text-lg px-1'>Liked Songs</p>
                                <p className='text-xs px-1 py-2'>2 de ago. 42min</p>
                            </div>
                        </li>
                        <li className="group px-5 py-1 pt-5 text-zinc-300 font-semibold mb-4 hover:text-zinc-200 bg-zinc-800/30 hover:bg-zinc-800/50 rounded-lg hover:rounded-lg hover:cursor-pointer">
                            <Image
                                src={IconMixOne}
                                alt="Like Songs"
                                className="inline mr-5 rounded-lg"
                                width={150}
                                height={120} 
                            />
                            <div className='flex -my-12 -mx-8 mb-1'>
                                <button className="w-12 h-12 pl-4 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible transform hover:scale-110 transition-transform shadow-2xl">
                                    <FaPlay />
                                </button>
                            </div>
                            <div className='py-4 inline-flex flex-col justify-center'>
                                <p className='text-lg px-1'>Liked Songs</p>
                                <p className='text-xs px-1 py-2'>2 de ago. 42min</p>
                            </div>
                        </li>
                        <li className="group px-5 py-1 pt-5 text-zinc-300 font-semibold mb-4 hover:text-zinc-200 bg-zinc-800/30 hover:bg-zinc-800/50 rounded-lg hover:rounded-lg hover:cursor-pointer">
                            <Image
                                src={IconMixOne}
                                alt="Like Songs"
                                className="inline mr-5 rounded-lg"
                                width={150}
                                height={120} 
                            />
                            <div className='flex -my-12 -mx-8 mb-1'>
                                <button className="w-12 h-12 pl-4 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible transform hover:scale-110 transition-transform shadow-2xl">
                                    <FaPlay />
                                </button>
                            </div>
                            <div className='py-4 inline-flex flex-col justify-center'>
                                <p className='text-lg px-1'>Liked Songs</p>
                                <p className='text-xs px-1 py-2'>2 de ago. 42min</p>
                            </div>
                        </li>
                        <li className="group px-5 py-1 pt-5 text-zinc-300 font-semibold mb-4 hover:text-zinc-200 bg-zinc-800/30 hover:bg-zinc-800/50 rounded-lg hover:rounded-lg hover:cursor-pointer">
                            <Image
                                src={IconMixOne}
                                alt="Like Songs"
                                className="inline mr-5 rounded-lg"
                                width={150}
                                height={120} />
                            <div className='flex -my-12 -mx-8 mb-1'>
                                <button className="w-12 h-12 pl-4 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible transform hover:scale-110 transition-transform shadow-2xl">
                                    <FaPlay />
                                </button>
                            </div>
                            <div className='py-4 inline-flex flex-col justify-center'>
                                <p className='text-lg px-1'>Liked Songs</p>
                                <p className='text-xs px-1 py-2'>2 de ago. 42min</p>
                            </div>
                        </li>
                    </ul>
                </div>
                <h2 className="text-2xl font-bold mb-4 py-4 hover:underline cursor-pointer">Os maiores hits do momento</h2>
                <div className='py-2 columns-7'>
                    <ul>
                        <li className="group px-5 py-1 pt-5 text-zinc-300 font-semibold mb-4 hover:text-zinc-200 bg-zinc-800/30 hover:bg-zinc-800/50 rounded-lg hover:rounded-lg hover:cursor-pointer">
                            <Image
                                src={IconMixOne}
                                alt="Like Songs"
                                className="inline mr-5 rounded-lg"
                                width={150}
                                height={120} />
                            <div className='flex -my-12 -mx-8 mb-1'>
                                <button className="w-12 h-12 pl-4 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible transform hover:scale-110 transition-transform shadow-2xl">
                                    <FaPlay />
                                </button>
                            </div>
                            <div className='py-4 inline-flex flex-col justify-center'>
                                <p className='text-lg px-1'>Liked Songs</p>
                                <p className='text-xs px-1 py-2'>2 de ago. 42min</p>
                            </div>
                        </li>
                        <li className="group px-5 py-1 pt-5 text-zinc-300 font-semibold mb-4 hover:text-zinc-200 bg-zinc-800/30 hover:bg-zinc-800/50 rounded-lg hover:rounded-lg hover:cursor-pointer">
                            <Image
                                src={IconMixOne}
                                alt="Like Songs"
                                className="inline mr-5 rounded-lg"
                                width={150}
                                height={120} />
                            <div className='flex -my-12 -mx-8 mb-1'>
                                <button className="w-12 h-12 pl-4 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible transform hover:scale-110 transition-transform shadow-2xl">
                                    <FaPlay />
                                </button>
                            </div>
                            <div className='py-4 inline-flex flex-col justify-center'>
                                <p className='text-lg px-1'>Liked Songs</p>
                                <p className='text-xs px-1 py-2'>2 de ago. 42min</p>
                            </div>
                        </li>
                        <li className="group px-5 py-1 pt-5 text-zinc-300 font-semibold mb-4 hover:text-zinc-200 bg-zinc-800/30 hover:bg-zinc-800/50 rounded-lg hover:rounded-lg hover:cursor-pointer">
                            <Image
                                src={IconMixOne}
                                alt="Like Songs"
                                className="inline mr-5 rounded-lg"
                                width={150}
                                height={120} />
                            <div className='flex -my-12 -mx-8 mb-1'>
                                <button className="w-12 h-12 pl-4 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible transform hover:scale-110 transition-transform shadow-2xl">
                                    <FaPlay />
                                </button>
                            </div>
                            <div className='py-4 inline-flex flex-col justify-center'>
                                <p className='text-lg px-1'>Liked Songs</p>
                                <p className='text-xs px-1 py-2'>2 de ago. 42min</p>
                            </div>
                        </li>
                        <li className="group px-5 py-1 pt-5 text-zinc-300 font-semibold mb-4 hover:text-zinc-200 bg-zinc-800/30 hover:bg-zinc-800/50 rounded-lg hover:rounded-lg hover:cursor-pointer">
                            <Image
                                src={IconMixOne}
                                alt="Like Songs"
                                className="inline mr-5 rounded-lg"
                                width={150}
                                height={120} />
                            <div className='flex -my-12 -mx-8 mb-1'>
                                <button className="w-12 h-12 pl-4 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible transform hover:scale-110 transition-transform shadow-2xl">
                                    <FaPlay />
                                </button>
                            </div>
                            <div className='py-4 inline-flex flex-col justify-center'>
                                <p className='text-lg px-1'>Liked Songs</p>
                                <p className='text-xs px-1 py-2'>2 de ago. 42min</p>
                            </div>
                        </li>
                        <li className="group px-5 py-1 pt-5 text-zinc-300 font-semibold mb-4 hover:text-zinc-200 bg-zinc-800/30 hover:bg-zinc-800/50 rounded-lg hover:rounded-lg hover:cursor-pointer">
                            <Image
                                src={IconMixOne}
                                alt="Like Songs"
                                className="inline mr-5 rounded-lg"
                                width={150}
                                height={120} />
                            <div className='flex -my-12 -mx-8 mb-1'>
                                <button className="w-12 h-12 pl-4 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible transform hover:scale-110 transition-transform shadow-2xl">
                                    <FaPlay />
                                </button>
                            </div>
                            <div className='py-4 inline-flex flex-col justify-center'>
                                <p className='text-lg px-1'>Liked Songs</p>
                                <p className='text-xs px-1 py-2'>2 de ago. 42min</p>
                            </div>
                        </li>
                        <li className="group px-5 py-1 pt-5 text-zinc-300 font-semibold mb-4 hover:text-zinc-200 bg-zinc-800/30 hover:bg-zinc-800/50 rounded-lg hover:rounded-lg hover:cursor-pointer">
                            <Image
                                src={IconMixOne}
                                alt="Like Songs"
                                className="inline mr-5 rounded-lg"
                                width={150}
                                height={120} />
                            <div className='flex -my-12 -mx-8 mb-1'>
                                <button className="w-12 h-12 pl-4 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible transform hover:scale-110 transition-transform shadow-2xl">
                                    <FaPlay />
                                </button>
                            </div>
                            <div className='py-4 inline-flex flex-col justify-center'>
                                <p className='text-lg px-1'>Liked Songs</p>
                                <p className='text-xs px-1 py-2'>2 de ago. 42min</p>
                            </div>
                        </li>
                        <li className="group px-5 py-1 pt-5 text-zinc-300 font-semibold mb-4 hover:text-zinc-200 bg-zinc-800/30 hover:bg-zinc-800/50 rounded-lg hover:rounded-lg hover:cursor-pointer">
                            <Image
                                src={IconMixOne}
                                alt="Like Songs"
                                className="inline mr-5 rounded-lg"
                                width={150}
                                height={120} />
                            <div className='flex -my-12 -mx-8 mb-1'>
                                <button className="w-12 h-12 pl-4 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible transform hover:scale-110 transition-transform shadow-2xl">
                                    <FaPlay />
                                </button>
                            </div>
                            <div className='py-4 inline-flex flex-col justify-center'>
                                <p className='text-lg px-1'>Liked Songs</p>
                                <p className='text-xs px-1 py-2'>2 de ago. 42min</p>
                            </div>
                        </li>
                    </ul>
                </div>
                <h2 className="text-2xl font-bold mb-4 py-4 hover:underline cursor-pointer">Feito para você</h2>
                <div className='py-2 columns-7'>
                    <ul>
                        <li className="group px-5 py-1 pt-5 text-zinc-300 font-semibold mb-4 hover:text-zinc-200 bg-zinc-800/30 hover:bg-zinc-800/50 rounded-lg hover:rounded-lg hover:cursor-pointer">
                            <Image
                                src={IconMixOne}
                                alt="Like Songs"
                                className="inline mr-5 rounded-lg"
                                width={150}
                                height={120} />
                            <div className='flex -my-12 -mx-8 mb-1'>
                                <button className="w-12 h-12 pl-4 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible transform hover:scale-110 transition-transform shadow-2xl">
                                    <FaPlay />
                                </button>
                            </div>
                            <div className='py-4 inline-flex flex-col justify-center'>
                                <p className='text-lg px-1'>Liked Songs</p>
                                <p className='text-xs px-1 py-2'>2 de ago. 42min</p>
                            </div>
                        </li>
                        <li className="group px-5 py-1 pt-5 text-zinc-300 font-semibold mb-4 hover:text-zinc-200 bg-zinc-800/30 hover:bg-zinc-800/50 rounded-lg hover:rounded-lg hover:cursor-pointer">
                            <Image
                                src={IconMixOne}
                                alt="Like Songs"
                                className="inline mr-5 rounded-lg"
                                width={150}
                                height={120} />
                            <div className='flex -my-12 -mx-8 mb-1'>
                                <button className="w-12 h-12 pl-4 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible transform hover:scale-110 transition-transform shadow-2xl">
                                    <FaPlay />
                                </button>
                            </div>
                            <div className='py-4 inline-flex flex-col justify-center'>
                                <p className='text-lg px-1'>Liked Songs</p>
                                <p className='text-xs px-1 py-2'>2 de ago. 42min</p>
                            </div>
                        </li>
                        <li className="group px-5 py-1 pt-5 text-zinc-300 font-semibold mb-4 hover:text-zinc-200 bg-zinc-800/30 hover:bg-zinc-800/50 rounded-lg hover:rounded-lg hover:cursor-pointer">
                            <Image
                                src={IconMixOne}
                                alt="Like Songs"
                                className="inline mr-5 rounded-lg"
                                width={150}
                                height={120} />
                            <div className='flex -my-12 -mx-8 mb-1'>
                                <button className="w-12 h-12 pl-4 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible transform hover:scale-110 transition-transform shadow-2xl">
                                    <FaPlay />
                                </button>
                            </div>
                            <div className='py-4 inline-flex flex-col justify-center'>
                                <p className='text-lg px-1'>Liked Songs</p>
                                <p className='text-xs px-1 py-2'>2 de ago. 42min</p>
                            </div>
                        </li>
                        <li className="group px-5 py-1 pt-5 text-zinc-300 font-semibold mb-4 hover:text-zinc-200 bg-zinc-800/30 hover:bg-zinc-800/50 rounded-lg hover:rounded-lg hover:cursor-pointer">
                            <Image
                                src={IconMixOne}
                                alt="Like Songs"
                                className="inline mr-5 rounded-lg"
                                width={150}
                                height={120} />
                            <div className='flex -my-12 -mx-8 mb-1'>
                                <button className="w-12 h-12 pl-4 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible transform hover:scale-110 transition-transform shadow-2xl">
                                    <FaPlay />
                                </button>
                            </div>
                            <div className='py-4 inline-flex flex-col justify-center'>
                                <p className='text-lg px-1'>Liked Songs</p>
                                <p className='text-xs px-1 py-2'>2 de ago. 42min</p>
                            </div>
                        </li>
                        <li className="group px-5 py-1 pt-5 text-zinc-300 font-semibold mb-4 hover:text-zinc-200 bg-zinc-800/30 hover:bg-zinc-800/50 rounded-lg hover:rounded-lg hover:cursor-pointer">
                            <Image
                                src={IconMixOne}
                                alt="Like Songs"
                                className="inline mr-5 rounded-lg"
                                width={150}
                                height={120} />
                            <div className='flex -my-12 -mx-8 mb-1'>
                                <button className="w-12 h-12 pl-4 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible transform hover:scale-110 transition-transform shadow-2xl">
                                    <FaPlay />
                                </button>
                            </div>
                            <div className='py-4 inline-flex flex-col justify-center'>
                                <p className='text-lg px-1'>Liked Songs</p>
                                <p className='text-xs px-1 py-2'>2 de ago. 42min</p>
                            </div>
                        </li>
                        <li className="group px-5 py-1 pt-5 text-zinc-300 font-semibold mb-4 hover:text-zinc-200 bg-zinc-800/30 hover:bg-zinc-800/50 rounded-lg hover:rounded-lg hover:cursor-pointer">
                            <Image
                                src={IconMixOne}
                                alt="Like Songs"
                                className="inline mr-5 rounded-lg"
                                width={150}
                                height={120} />
                            <div className='flex -my-12 -mx-8 mb-1'>
                                <button className="w-12 h-12 pl-4 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible transform hover:scale-110 transition-transform shadow-2xl">
                                    <FaPlay />
                                </button>
                            </div>
                            <div className='py-4 inline-flex flex-col justify-center'>
                                <p className='text-lg px-1'>Liked Songs</p>
                                <p className='text-xs px-1 py-2'>2 de ago. 42min</p>
                            </div>
                        </li>
                        <li className="group px-5 py-1 pt-5 text-zinc-300 font-semibold mb-4 hover:text-zinc-200 bg-zinc-800/30 hover:bg-zinc-800/50 rounded-lg hover:rounded-lg hover:cursor-pointer">
                            <Image
                                src={IconMixOne}
                                alt="Like Songs"
                                className="inline mr-5 rounded-lg"
                                width={150}
                                height={120} />
                            <div className='flex -my-12 -mx-8 mb-1'>
                                <button className="w-12 h-12 pl-4 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible transform hover:scale-110 transition-transform shadow-2xl">
                                    <FaPlay />
                                </button>
                            </div>
                            <div className='py-4 inline-flex flex-col justify-center'>
                                <p className='text-lg px-1'>Liked Songs</p>
                                <p className='text-xs px-1 py-2'>2 de ago. 42min</p>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}