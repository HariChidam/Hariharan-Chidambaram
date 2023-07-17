import React from 'react';
import Image, { StaticImageData } from 'next/image';

interface ProjectProps {
  iconSrc: StaticImageData;
  title: string;
  description: string;
  learnedText1: string;
  learnedText2: string;
  learnedText3: string;
  learnedText4?: string;
  techUsed: string;
  buttonText1: string;
  buttonLink1: string;
  buttonText2?: string; // Made buttonText2 optional with the "?"
  buttonLink2?: string; // Made buttonLink2 optional with the "?"
}

const Project: React.FC<ProjectProps> = ({
  iconSrc,
  title,
  description,
  learnedText1,
  learnedText2,
  learnedText3,
  learnedText4,
  techUsed,
  buttonText1,
  buttonLink1,
  buttonText2,
  buttonLink2
}) => {
  const iconSrcString = iconSrc.src as string;
  const width = 200; // Placeholder value for width
  const height = 200; // Placeholder value for height

  return (
    <div className="max-w-md mx-auto bg-white shadow-2xl rounded-lg overflow-hidden mb-4 border border-slate-900 transform transition-all hover:scale-105 ease-in duration-400">
      <div className="relative">
        <Image src={iconSrcString} alt="Project Icon" className="w-full" width={width} height={height} />
      </div>
      <div className="p-4 flex flex-col items-center">
        <h3 className="text-xl font-bold bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 bg-clip-text text-transparent">{title}</h3>
        <p className="text-gray-600 mb-4 text-center">{description}</p>
        <div className= "flex flex-col items-center">
          <h3 className="text-lg text-center font-bold bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 bg-clip-text text-transparent">
            What I learned!
          </h3>
            <ul className='flex flex-col list-disc text-gray-600 mb-4 px-4'>
              <li>{learnedText1}</li>
              <li>{learnedText2}</li>
              <li>{learnedText3}</li>
              {learnedText4 &&
                <li>{learnedText4}</li>
              }
            </ul>
         </div>
        <div className = "flex flex-col items-center py-4">
          <h3 className="text-lg font-bold bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 bg-clip-text text-transparent">
           Technologies Used 
          </h3>
          <p className="text-gray-600 mb-4 text-center">
            {techUsed}
          </p>
        </div> 
        <div className="flex items-center justify-between">
          <a href={buttonLink1} className="bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 hover:from-purple-600 hover:via-pink-600 hover:to-red-600 text-white font-semibold py-2 px-4 rounded mr-2">
            {buttonText1}
          </a>
          {buttonText2 && buttonLink2 && (
            <a href={buttonLink2} className="bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 hover:from-purple-600 hover:via-pink-600 hover:to-red-600 text-white font-semibold py-2 px-4 rounded ml-2">
              {buttonText2}
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default Project;
