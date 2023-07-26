"use client"
import React, { useState } from 'react';
import { FaHome, FaSearch, FaBook, FaPlus, FaArrowRight, FaTimes, FaChevronRight, FaChevronLeft } from 'react-icons/fa';
import Image from 'next/image';
import IconOne from '../public/images/liked-songs-640.png';
import IconTwo from '../public/images/ab6761610000101f9c30c6b69a55d48decd71600.webp';
import IconThree from '../public/images/ab6761610000101fc4902f080d3620b3e6da80c3.webp';
import IconFour from '../public/images/ab6761610000101fd8b9980db67272cb4d2c3daf.webp';
import IconFive from '../public/images/ab6761610000101f214f3cf1cbe7139c1e26ffbb.webp';
import IconMixOne from '../public/images/mix (1).jpg';
import IconMixTwo from '../public/images/mix (2).jpg';
import IconMixThree from '../public/images/mix (3).jpg';
import IconMixFour from '../public/images/mix (4).jpg';
import IconMixFive from '../public/images/mix (5).jpg';
import IconMixSix from '../public/images/mix (6).jpg';


export default function Home() {
  const [searchVisible, setSearchVisible] = useState(false);
  const [searchText, setSearchText] = useState('');

  const handleSearchClick = () => setSearchVisible(!searchVisible);

  const handleSearchInputChange = (event: { target: { value: React.SetStateAction<string>; }; }) => {
    setSearchText(event.target.value);
    // You can add your search functionality here (e.g., search API call).
  };

  // This function prevents click events from propagating to parent elements.
  const stopClickPropagation = (event: { stopPropagation: () => void; }) => {
    event.stopPropagation();
  };

  return (
    <div className="bg-black-800">
      <div className="flex h-screen">
        <div className="">
          <div className="rounded-xl mx-1 my-2 bg-zinc-900 w-1/1 max-h-32 p-8">
                            {/* Conteúdo da coluna menor acima */}
            <h2 className="text-lg text-zinc-500 font-semibold mb-4 hover:text-zinc-200 cursor-pointer">
              <FaHome className="inline mr-4" />
              Inicio
            </h2>
            <h2 className="text-lg text-zinc-500 font-semibold mb-4 hover:text-zinc-200 cursor-pointer">
              <FaSearch className="inline mr-4 md" />
              Buscar
            </h2>
          </div>
          <div className="rounded-xl mx-1 my-2 bg-zinc-900 w-1/1 h-5/6 p-8">
            <div className="flex justify-between">
                          {/* Conteúdo da segunda coluna menor abaixo */}
          <div className="flex items-center">
            <h2 className="text-lg text-zinc-500 font-semibold mb-4 hover:text-zinc-200 cursor-pointer">
              <FaBook className="inline mr-4" />
              Livros
            </h2>
              <div className="flex ml-40 mb-5">
                <button className="text-white px-3 py-2 rounded-md mr-2 hover:text-zinc-200 hover:bg-zinc-800 cursor-pointer ">
                  <FaPlus className="" />
                </button>
                <button className="text-white px-3 py-2 rounded-md hover:text-zinc-200 hover:bg-zinc-800 cursor-pointer">
                  <FaArrowRight className="" />
                </button>
              </div>
              </div>
            </div>
              <button className="mr-2 bg-zinc-800 text-white text-sm px-3 py-2 rounded-3xl hover:text-zinc-200 hover:bg-zinc-700">
                    <p>Playlist</p>
              </button>
              <button className="bg-zinc-800 text-white text-sm px-3 py-2 rounded-3xl hover:text-zinc-200 hover:bg-zinc-700">
                    <p>Artists</p>
              </button>
              <button onClick={handleSearchClick} className="flex align-middle py-5 text-lg text-zinc-500 font-semibold mb-4 hover:text-zinc-200 cursor-pointer">
              {searchVisible ? null : <FaSearch className="absolute inline mr-4" />}
                {searchVisible && ( 
              <div className="absolute">
              <input
                type="text"
                value={searchText}
                onChange={handleSearchInputChange}
                onClick={stopClickPropagation}
                placeholder="Buscar sua Biblioteca"
                className="bg-zinc-800 pl-8 pr-1 py-0 rounded-md text-zinc-200 placeholder:text-xs"
              />
              <FaTimes
                className="absolute top-1.5 left-2 text-zinc-300 p-0"
              />
            </div>
            )}
              </button>
            <div>
              <ul>
                <li className="text-lg p-1 text-zinc-500 font-semibold mb-4 hover:text-zinc-200 hover:bg-zinc-800  hover:rounded-lg cursor-pointer">
                  <Image
                    src={IconOne}
                    alt="Like Songs"
                    className="inline mr-3 rounded-3xl"
                    width={50}
                    height={50}
                  />
                  <div className='inline-flex flex-col justify-center absolute '>
                    <p className='text-lg'>Liked Songs</p>
                    <p className='text-sm'>Playlist </p>               
                    </div>
                </li>
              </ul>
            </div>
            <div>
              <ul>
                <li className="text-lg p-1 text-zinc-500 font-semibold mb-4 hover:text-zinc-200 hover:bg-zinc-800  hover:rounded-lg cursor-pointer">
                  <Image
                    src={IconTwo}
                    alt="Like Songs"
                    className="inline mr-3 rounded-3xl"
                    width={50}
                    height={50}
                  />
                  <div className='inline-flex flex-col justify-center absolute '>
                    <p className='text-lg'>Liked Songs</p>
                    <p className='text-sm'>Playlist </p>               
                    </div>
                </li>
              </ul>
            </div>
            <div>
              <ul>
                <li className="text-lg p-1 text-zinc-500 font-semibold mb-4 hover:text-zinc-200 hover:bg-zinc-800  hover:rounded-lg cursor-pointer">
                  <Image
                    src={IconThree}
                    alt="Like Songs"
                    className="inline mr-3 rounded-3xl"
                    width={50}
                    height={50}
                  />
                  <div className='inline-flex flex-col justify-center absolute '>
                    <p className='text-lg'>Liked Songs</p>
                    <p className='text-sm'>Playlist </p>               
                    </div>
                </li>
              </ul>
            </div>
            <div>
              <ul>
                <li className="text-lg p-1 text-zinc-500 font-semibold mb-4 hover:text-zinc-200 hover:bg-zinc-800  hover:rounded-lg cursor-pointer">
                  <Image
                    src={IconFour}
                    alt="Like Songs"
                    className="inline mr-3 rounded-3xl"
                    width={50}
                    height={50}
                  />
                  <div className='inline-flex flex-col justify-center absolute '>
                    <p className='text-lg'>Liked Songs</p>
                    <p className='text-sm'>Playlist </p>               
                    </div>
                </li>
              </ul>
            </div>
            <div>
              <ul>
                <li className="text-lg p-1 text-zinc-500 font-semibold mb-4 hover:text-zinc-200 hover:bg-zinc-800  hover:rounded-lg hover:cursor-pointer">
                  <Image
                    src={IconFive}
                    alt="Like Songs"
                    className="inline mr-3 rounded-3xl"
                    width={50}
                    height={50}
                  />
                  <div className='inline-flex flex-col justify-center absolute '>
                    <p className='text-lg'>Liked Songs</p>
                    <p className='text-sm'>Playlist </p>               
                    </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="mx-0"></div> {/* Espaço entre as colunas */}
        <div className="rounded-xl mx-1 my-2 bg-zinc-900 flex-1 p-8">
                          {/* Conteúdo da coluna maior */}
        <div className="flex items-center mb-5" style={{ maxHeight: 'calc(100% - 5rem)', overflowY: 'auto' }}>
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
                <div className="px-4 p-0 mr-3 bg-zinc-950 bg-opacity-60 rounded-3xl transition-transform transform hover:scale-110 cursor-pointer">
                  <h2 className="py-2 text-white text-sm font-semibold">Instalar aplicativo</h2>
                </div>
              </div>
        </div>
          <h2 className="text-3xl font-bold mb-4">Boa noite</h2>
          <div className='py-2 columns-3'>
              <ul>
                <li className="text-lg p-2 px-0 py-0 text-zinc-300 font-semibold mb-4 hover:text-zinc-200 bg-zinc-800 hover:bg-zinc-700 rounded-lg hover:rounded-lg hover:cursor-pointer">
                  <Image
                    src={IconMixOne}
                    alt="Like Songs"
                    className="inline mr-5 rounded-lg"
                    width={80}
                    height={80}
                  />
                  <div className='py-7 inline-flex flex-col justify-center absolute '>
                    <p className='text-lg'>Liked Songs</p>             
                  </div>
                </li>
                <li className="text-lg p-2 px-0 py-0 text-zinc-300 font-semibold mb-4 hover:text-zinc-200 bg-zinc-800 hover:bg-zinc-700 rounded-lg hover:rounded-lg hover:cursor-pointer">
                  <Image
                    src={IconMixTwo}
                    alt="Like Songs"
                    className="inline mr-5 rounded-lg"
                    width={80}
                    height={80}
                  />
                  <div className='py-7 inline-flex flex-col justify-center absolute '>
                    <p className='text-lg'>Liked Songs</p>             
                  </div>
                </li>
                <li className="text-lg p-2 px-0 py-0 text-zinc-300 font-semibold mb-4 hover:text-zinc-200 bg-zinc-800 hover:bg-zinc-700 rounded-lg hover:rounded-lg hover:cursor-pointer">
                  <Image
                    src={IconMixThree}
                    alt="Like Songs"
                    className="inline mr-5 rounded-lg"
                    width={80}
                    height={80}
                  />
                  <div className='py-7 inline-flex flex-col justify-center absolute '>
                    <p className='text-lg'>Liked Songs</p>             
                  </div>
                </li>
                <li className="text-lg p-2 px-0 py-0 text-zinc-300 font-semibold mb-4 hover:text-zinc-200 bg-zinc-800 hover:bg-zinc-700 rounded-lg hover:rounded-lg hover:cursor-pointer">
                  <Image
                    src={IconMixFour}
                    alt="Like Songs"
                    className="inline mr-5 rounded-lg"
                    width={80}
                    height={80}
                  />
                  <div className='py-7 inline-flex flex-col justify-center absolute '>
                    <p className='text-lg'>Liked Songs</p>             
                  </div>
                </li>
                <li className="text-lg p-2 px-0 py-0 text-zinc-300 font-semibold mb-4 hover:text-zinc-200 bg-zinc-800 hover:bg-zinc-700 rounded-lg hover:rounded-lg hover:cursor-pointer">
                  <Image
                    src={IconMixFive}
                    alt="Like Songs"
                    className="inline mr-5 rounded-lg"
                    width={80}
                    height={80}
                  />
                  <div className='py-7 inline-flex flex-col justify-center absolute '>
                    <p className='text-lg'>Liked Songs</p>             
                  </div>
                </li>
                <li className="text-lg p-2 px-0 py-0 text-zinc-300 font-semibold mb-4 hover:text-zinc-200 bg-zinc-800 hover:bg-zinc-700 rounded-lg hover:rounded-lg hover:cursor-pointer">
                  <Image
                    src={IconMixSix}
                    alt="Like Songs"
                    className="inline mr-5 rounded-lg"
                    width={80}
                    height={80}
                  />
                  <div className='py-7 inline-flex flex-col justify-center absolute '>
                    <p className='text-lg'>Liked Songs</p>             
                  </div>
                </li>
              </ul>
            </div>
            <h2 className="text-2xl font-bold mb-4 py-4">Os Maiore Hits do momentos</h2>
            <div className='py-2 columns-3'>
              <ul>
                <li className="text-lg p-2 px-0 py-0 text-zinc-300 font-semibold mb-4 hover:text-zinc-200 bg-zinc-800 hover:bg-zinc-700 rounded-lg hover:rounded-lg hover:cursor-pointer">
                  <Image
                    src={IconMixOne}
                    alt="Like Songs"
                    className="inline mr-5 rounded-lg"
                    width={80}
                    height={80}
                  />
                  <div className='py-7 inline-flex flex-col justify-center absolute '>
                    <p className='text-lg'>Liked Songs</p>             
                  </div>
                </li>
                <li className="text-lg p-2 px-0 py-0 text-zinc-300 font-semibold mb-4 hover:text-zinc-200 bg-zinc-800 hover:bg-zinc-700 rounded-lg hover:rounded-lg hover:cursor-pointer">
                  <Image
                    src={IconMixTwo}
                    alt="Like Songs"
                    className="inline mr-5 rounded-lg"
                    width={80}
                    height={80}
                  />
                  <div className='py-7 inline-flex flex-col justify-center absolute '>
                    <p className='text-lg'>Liked Songs</p>             
                  </div>
                </li>
                <li className="text-lg p-2 px-0 py-0 text-zinc-300 font-semibold mb-4 hover:text-zinc-200 bg-zinc-800 hover:bg-zinc-700 rounded-lg hover:rounded-lg hover:cursor-pointer">
                  <Image
                    src={IconMixThree}
                    alt="Like Songs"
                    className="inline mr-5 rounded-lg"
                    width={80}
                    height={80}
                  />
                  <div className='py-7 inline-flex flex-col justify-center absolute '>
                    <p className='text-lg'>Liked Songs</p>             
                  </div>
                </li>
                <li className="text-lg p-2 px-0 py-0 text-zinc-300 font-semibold mb-4 hover:text-zinc-200 bg-zinc-800 hover:bg-zinc-700 rounded-lg hover:rounded-lg hover:cursor-pointer">
                  <Image
                    src={IconMixFour}
                    alt="Like Songs"
                    className="inline mr-5 rounded-lg"
                    width={80}
                    height={80}
                  />
                  <div className='py-7 inline-flex flex-col justify-center absolute '>
                    <p className='text-lg'>Liked Songs</p>             
                  </div>
                </li>
                <li className="text-lg p-2 px-0 py-0 text-zinc-300 font-semibold mb-4 hover:text-zinc-200 bg-zinc-800 hover:bg-zinc-700 rounded-lg hover:rounded-lg hover:cursor-pointer">
                  <Image
                    src={IconMixFive}
                    alt="Like Songs"
                    className="inline mr-5 rounded-lg"
                    width={80}
                    height={80}
                  />
                  <div className='py-7 inline-flex flex-col justify-center absolute '>
                    <p className='text-lg'>Liked Songs</p>             
                  </div>
                </li>
                <li className="text-lg p-2 px-0 py-0 text-zinc-300 font-semibold mb-4 hover:text-zinc-200 bg-zinc-800 hover:bg-zinc-700 rounded-lg hover:rounded-lg hover:cursor-pointer">
                  <Image
                    src={IconMixSix}
                    alt="Like Songs"
                    className="inline mr-5 rounded-lg"
                    width={80}
                    height={80}
                  />
                  <div className='py-7 inline-flex flex-col justify-center absolute '>
                    <p className='text-lg'>Liked Songs</p>             
                  </div>
                </li>
              </ul>
            </div>
            <h2 className="text-2xl font-bold mb-4 py-4">Feito para você</h2>
            <div className='py-2 columns-3'>
              <ul>
                <li className="text-lg p-2 px-0 py-0 text-zinc-300 font-semibold mb-4 hover:text-zinc-200 bg-zinc-800 hover:bg-zinc-700 rounded-lg hover:rounded-lg hover:cursor-pointer">
                  <Image
                    src={IconMixOne}
                    alt="Like Songs"
                    className="inline mr-5 rounded-lg"
                    width={80}
                    height={80}
                  />
                  <div className='py-7 inline-flex flex-col justify-center absolute '>
                    <p className='text-lg'>Liked Songs</p>             
                  </div>
                </li>
                <li className="text-lg p-2 px-0 py-0 text-zinc-300 font-semibold mb-4 hover:text-zinc-200 bg-zinc-800 hover:bg-zinc-700 rounded-lg hover:rounded-lg hover:cursor-pointer">
                  <Image
                    src={IconMixTwo}
                    alt="Like Songs"
                    className="inline mr-5 rounded-lg"
                    width={80}
                    height={80}
                  />
                  <div className='py-7 inline-flex flex-col justify-center absolute '>
                    <p className='text-lg'>Liked Songs</p>             
                  </div>
                </li>
                <li className="text-lg p-2 px-0 py-0 text-zinc-300 font-semibold mb-4 hover:text-zinc-200 bg-zinc-800 hover:bg-zinc-700 rounded-lg hover:rounded-lg hover:cursor-pointer">
                  <Image
                    src={IconMixThree}
                    alt="Like Songs"
                    className="inline mr-5 rounded-lg"
                    width={80}
                    height={80}
                  />
                  <div className='py-7 inline-flex flex-col justify-center absolute '>
                    <p className='text-lg'>Liked Songs</p>             
                  </div>
                </li>
                <li className="text-lg p-2 px-0 py-0 text-zinc-300 font-semibold mb-4 hover:text-zinc-200 bg-zinc-800 hover:bg-zinc-700 rounded-lg hover:rounded-lg hover:cursor-pointer">
                  <Image
                    src={IconMixFour}
                    alt="Like Songs"
                    className="inline mr-5 rounded-lg"
                    width={80}
                    height={80}
                  />
                  <div className='py-7 inline-flex flex-col justify-center absolute '>
                    <p className='text-lg'>Liked Songs</p>             
                  </div>
                </li>
                <li className="text-lg p-2 px-0 py-0 text-zinc-300 font-semibold mb-4 hover:text-zinc-200 bg-zinc-800 hover:bg-zinc-700 rounded-lg hover:rounded-lg hover:cursor-pointer">
                  <Image
                    src={IconMixFive}
                    alt="Like Songs"
                    className="inline mr-5 rounded-lg"
                    width={80}
                    height={80}
                  />
                  <div className='py-7 inline-flex flex-col justify-center absolute '>
                    <p className='text-lg'>Liked Songs</p>             
                  </div>
                </li>
                <li className="text-lg p-2 px-0 py-0 text-zinc-300 font-semibold mb-4 hover:text-zinc-200 bg-zinc-800 hover:bg-zinc-700 rounded-lg hover:rounded-lg hover:cursor-pointer">
                  <Image
                    src={IconMixSix}
                    alt="Like Songs"
                    className="inline mr-5 rounded-lg"
                    width={80}
                    height={80}
                  />
                  <div className='py-7 inline-flex flex-col justify-center absolute '>
                    <p className='text-lg'>Liked Songs</p>             
                  </div>
                </li>
              </ul>
            </div>    
        </div>
      </div>
    </div>
  );
}