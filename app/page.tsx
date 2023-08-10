"use client"
import React, { useState } from 'react';
import { FaHome, FaSearch, FaBook, FaPlus, FaArrowRight, FaTimes, FaPlay, FaChevronRight, FaChevronLeft, FaFrownOpen, FaStepForward } from 'react-icons/fa';
import Image from 'next/image';

import IconOne from '../public/images/liked-songs-640.png';
import IconTwo from '../public/images/ab6761610000101f9c30c6b69a55d48decd71600.webp';
import IconThree from '../public/images/ab6761610000101fc4902f080d3620b3e6da80c3.webp';
import IconFour from '../public/images/ab6761610000101fd8b9980db67272cb4d2c3daf.webp';
import IconFive from '../public/images/ab6761610000101f214f3cf1cbe7139c1e26ffbb.webp';

import Footer from './components/Footer';
import Main from './components/MainCol';



export default function Home() {
  const [searchVisible, setSearchVisible] = useState(false);
  const [searchText, setSearchText] = useState('');


  const handleSearchClick = () => setSearchVisible(!searchVisible);

  const handleSearchInputChange = (event: { target: { value: React.SetStateAction<string>; }; }) => {
    setSearchText(event.target.value);
  };

  const stopClickPropagation = (event: { stopPropagation: () => void; }) => {
    event.stopPropagation();
  };


  return (
    <div className="bg-black-800">
      <div className="flex h-screen">
        <div className="">
          <div className="rounded-xl mx-1 my-2 bg-zinc-900/70 w-1/1 max-h-32 p-8">
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
          <div className="rounded-xl mx-1 my-2 bg-zinc-900/70 w-1/1 h-5/6 p-8">
            <div className="flex justify-between">
                          {/* Conteúdo da segunda coluna menor abaixo */}
          <div className="flex items-center">
            <h2 className="text-lg text-zinc-500 font-semibold mb-4 hover:text-zinc-200 cursor-pointer">
              Livros
              <FaBook className="inline justify-start mr-4" />
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
              {/* Conteúdo da coluna maior */}  
            <Main />
              {/* Barra de reprodução */}
            <Footer /> 
        </div>
      </div>
  );
}