import React from 'react';
import Image, { StaticImageData } from 'next/image';

interface FutureProps {
  iconSrc: StaticImageData;
  title: string;
}

const Future: React.FC<FutureProps> = ({
  iconSrc,
  title,
}) => {
  const iconSrcString = iconSrc.src as string;
  const width = 200; // Placeholder value for width
  const height = 200; // Placeholder value for height

  return (
    <div className="max-w-md mx-auto bg-white shadow-2xl rounded-lg overflow-hidden mb-4 transform transition-all hover:scale-105 hover:shadow-lg">
      <div className="relative">
        <Image src={iconSrcString} alt="Project Icon" className="w-full" width={width} height={height} />
      </div>
      <h3 className="text-xl text-center font-bold bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 bg-clip-text text-transparent py-2">{title}</h3>
    </div>
  );
};

export default Future;