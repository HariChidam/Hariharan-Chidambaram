import React from 'react';
import Image, { StaticImageData } from 'next/image';

interface ProjectProps {
  iconSrc: StaticImageData;
  title: string;
  description: string;
  learnedText: string;
  techUsed: string;
  buttonText: string;
  buttonLink: string;
}

const Project: React.FC<ProjectProps> = ({
  iconSrc,
  title,
  description,
  learnedText,
  techUsed,
  buttonText,
  buttonLink,
}) => {
  const iconSrcString = iconSrc.src as string;
  const width = 200; // Placeholder value for width
  const height = 200; // Placeholder value for height

  return (
    <div className="max-w-md mx-auto bg-white shadow-2xl rounded-lg overflow-hidden mb-4 transform transition-all hover:scale-105 hover:shadow-lg">
      <div className="relative">
        <Image src={iconSrcString} alt="Project Icon" className="w-full" width={width} height={height} />
      </div>
      <div className="p-4 flex flex-col items-center">
        <h3 className="text-xl font-bold bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 bg-clip-text text-transparent">{title}</h3>
        <p className="text-gray-600 mb-4 text-center">{description}</p>
        <div className= "flex flex-col items-center">
          <h3 className="text-lg text-center font-bold bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 bg-clip-text text-transparent" >
            What I learned!
          </h3>
          <p className="text-gray-600 mb-4 text-center">
            {learnedText}
          </p>
        </div>
        <div className = "flex flex-col items-center py-4">
          <h3 className="text-lg font-bold bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 bg-clip-text text-transparent" >
           Technologies Used 
          </h3>
          <p className="text-gray-600 mb-4 text-center">
            {techUsed}
          </p>
        </div> 
        <a href={buttonLink} className="bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 hover:from-purple-600 hover:via-pink-600 hover:to-red-600 text-white font-semibold py-2 px-4 rounded">
          {buttonText}
        </a>
      </div>
    </div>
  );
};

export default Project;
