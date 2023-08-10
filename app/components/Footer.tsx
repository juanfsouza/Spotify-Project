import { faShuffle, faForwardStep, faRotateRight, faVolumeDown } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useState } from "react";
import { FaPlay } from "react-icons/fa"
import Image from 'next/image';
import IconMixOne from '@/public/images/mix (1).jpg';


export default function Footer() {
    const [volume, setVolume] = useState(50)
    const [isDragging, setIsDragging] = useState(false);
                      
    
        {/* Volume  */}

  const handleVolumeChange = (newVolume: React.SetStateAction<number>) => {
    setVolume(newVolume);
  };

    const handleCircleDrag = (event: { currentTarget: { getBoundingClientRect: () => any; }; clientY: number; }) => {
      if (isDragging) {
        const containerRect = event.currentTarget.getBoundingClientRect();
        const offsetY = containerRect.bottom - event.clientY;
        const newVolume = Math.max(0, Math.min(100, 100 - offsetY));
        setVolume(newVolume);
      }
    };
    return (
        <div className="flex items-center justify-between w-full fixed i bottom-0 left-0 right-0 p-6 bg-zinc-950">
           {/* Barra de reprodução */}
            <div>
                <Image
                    src={IconMixOne}
                    alt="Like Songs"
                    className="inline mr-5 rounded-lg"
                    width={60}
                    height={50} />
                <div className='py-0 inline-flex flex-col justify-center'>
                    <p className='text-lg px-1'>Liked Songs</p>
                    <p className='text-xs px-1'>2 de ago. 42min</p>
                </div>
            </div>
            <div className="flex items-center">
                    <button className="text-white text-2xl mr-8">
                        <FontAwesomeIcon icon={faShuffle} />
                    </button>
                    <button className="text-white text-2xl mr-8">
                        <FontAwesomeIcon icon={faForwardStep} rotation={180} />
                    </button>
                    <button className="w-10 h-10 pl-3.5 rounded-full bg-white text-black ml-auto mr-8 group-hover:visible transform hover:scale-110 transition-transform">
                        <FaPlay />
                    </button>
                    <button className="text-white text-2xl">
                        <FontAwesomeIcon icon={faForwardStep} />
                    </button>
                    <button className="text-white text-2xl ml-8">
                        <FontAwesomeIcon icon={faRotateRight} />
                    </button>
                </div>
                    {/* Ícone de controle de volume */}
            <div className='flex items-center justify-center'>
                <button className="text-white text-2xl ml-4">
                <FontAwesomeIcon icon={faVolumeDown} />
                </button>
                    {/* Barra de controle de volume */}
                <div className="volume-bar ml-4">
                <input
                    type="range"
                    min="0"
                    max="100"
                    value={volume}
                    onChange={handleVolumeChange}
                    className="volume-track"
                />
                <div className="volume-fill"></div>
                <div
                    className="volume-circle"
                    onMouseDown={() => setIsDragging(true)}
                    onMouseUp={() => setIsDragging(false)}
                    onMouseLeave={() => setIsDragging(false)}
                    onMouseMove={handleCircleDrag}
                >
                </div>
            </div>
        </div>
    </div>
  );
}
