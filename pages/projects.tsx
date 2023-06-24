import React from 'react';
import Project from '../components/Project';
import Future from '../components/Future';
import THT from '../public/THT.png';
import V1 from '../public/V1.png';
import TB from '../public/TB.png';
import blueline from '../public/blueline.png';
import gotPhished from '../public/gotPhished.png';

export default function Projects() {
  return (
    <div>
      <div className="flex items-center justify-center py-6">
        <h2 className="text-6xl text-center font-bold bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 bg-clip-text text-transparent py-8">
          This is what I am building!
        </h2>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <Project
          iconSrc={THT}
          title="Theta Tau Website"
          description="This is the platform I have built for my professional engineering fraternity! Externally, it serves as an informational website. Internally, it is used to view upcoming events, track pledging progress, and provide easy access to the organization's resources."
          learnedText="This was my first full-stack project on my own! I learned how to design an idea using Figma and refine it through user interviews. I also learned how to connect a frontend to a backend and utilize a database (Supabase) for storing information. Additionally, I gained knowledge in implementing authentication through Google OAuth. Now, I outline new features to be added and assist other members in implementing these changes to ensure the platform continues to be used and maintained after my graduation!"
          techUsed="React, TailwindCSS, Supabase, Netlify, Figma"
          buttonText1="Check it out!"
          buttonLink1="https://thetatau-umich.org/"
          buttonText2='Documentation'
          buttonLink2='https://docs.google.com/document/d/145fpROTqI8W12CXS3GU0BrKJSOi3ZzT70IefLqMbxks'
        />
        <Project
          iconSrc={V1}
          title="V1 Platform"
          description="This is the V1 Platform! This is where the V1 community can come to find a one-stop-shop for everything startup-related. From a newsletter to a page with all the startups and founders at UMich, to a dashboard of all the events we do and the resources from them!"
          learnedText="This was my first time working on a project with many other engineers and managing a team. I personally developed the dashboard page and startups page! I am now the platform lead and have learned a lot about dividing up a feature into tasks on Jira and working with a team of mixed-level engineers to build a product! I have also learned a lot about writing clean code and reusing components as much as possible. We have over 2000 users and are growing every day!"
          techUsed="React, Next JS, TailwindCSS, Railway, Supabase, Netlify"
          buttonText1="Check it out!"
          buttonLink1="https://v1michigan.com/"
        />
        <Project
          iconSrc={TB}
          title="TableVision"
          description="This is a state-of-the-art product for students to find study spots. I built a custom CV model to accurately tell if tables are occupied or not from security camera footage and then display the number of open tables in each building. I am currently working with the school to implement TableVision at UMich!"
          learnedText="This was my first time working with Computer Vision, and I learned a lot about the process of building a model. I learned how to use YOLOv5 and Roboflow to create and train a model and then how to deploy it using Flask and Next JS. This was my first time using Flask, and I learned how to create my own API and use it to make requests to my custom YOLOv5 model. I am now managing a team of 4 to help me implement TableVision at UMich!"
          techUsed="React, Next JS, TailwindCSS, Flask, YOLOv5, Roboflow, Google Colab, Netlify"
          buttonText1="Pitch Deck"
          buttonLink1="https://pitch.com/public/d8126c2f-9acb-48a5-bb90-d086556c168d"
          buttonText2="Github Repo"
          buttonLink2="https://github.com/HariChidam/TableVision"

        />
        <Project
          iconSrc={gotPhished}
          title="GotPhished"
          description="This is a Proof of Concept for a GMail add-on I am working on. This can take in imcoming email information and flag it for phishing attacks."
          learnedText="I learned alot about how to make requests from the Next.js fronted. I also got to play around with alot of prompt engineering to find the best responses to my request. I am also learning alot about the GMail add-on scripts and how annoying it can be :)"
          techUsed="OpenAI API, React, Next JS, TailwindCSS"
          buttonText1="Check it Out!"
          buttonLink1="https://got-phished.vercel.app/"
          buttonText2="Github Repo"
          buttonLink2="https://github.com/HariChidam/GotPhished"

        />
        <Future
          iconSrc={blueline}
          title="Coming Soon!"
        />
      </div>
    </div>
  );
}


