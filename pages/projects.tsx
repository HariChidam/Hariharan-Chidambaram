import React from 'react';
import Project from '../components/Project';
import THT from '../public/THT.png';
import V1 from '../public/V1.png';
import TB from '../public/TB.png';

export default function Projects() {
  return (
    <div>
      <div className="flex items-center justify-center py-6">
        <h2 className="text-4xl font-bold bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 bg-clip-text text-transparent py-8">
          This is what I am building!
        </h2>
      </div>
      <div className="grid grid-cols-2 gap-4">
        <Project
          iconSrc={THT}
          title="Theta Tau Website"
          description="This is the new website I built for my professional engineering fraternity"
          buttonText="Check it out!"
          buttonLink='https://thetatau-umich.org/'
        />
        <Project
          iconSrc={V1}
          title="V1 Platform"
          description="This is the V1 Plaform which I have maintained and added too"
          buttonText="Check it out!"
          buttonLink='https://v1michigan.com/'
        />
        <Project
          iconSrc={TB}
          title="TableVision"
          description="This is a state-of-the-art product for instantaneous object detection to assist students in better finding thier favorite study spots"
          buttonText="Check it out!"
          buttonLink='https://pitch.com/public/d8126c2f-9acb-48a5-bb90-d086556c168d'
        />
      </div>
    </div>
  );
}

