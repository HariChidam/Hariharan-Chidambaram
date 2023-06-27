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
          description="This is the platform I have built for my professional engineering fraternity and my first fullstack project on my own! Externally, it serves as an informational website. Internally, it is used to view upcoming events, track pledging progress, and provide easy access to the organization's resources."
          learnedText1="I learned how to design an idea using Figma and refine it through user interviews."
          learnedText2="I learned how to configure and design efficient relational databases."
          learnedText3="I learned how to connect a frontend to a database (Supabase) for storing information and implementing authentication using Google OAuth."
          learnedText4="I learned how to write documentation and outlined new features to be added down the line so that future members can keep the site up and running!"
          techUsed="Javascript, React, SCSS, Supabase, Netlify, Figma"
          buttonText1="Check it out!"
          buttonLink1="https://thetatau-umich.org/"
          buttonText2='Documentation'
          buttonLink2='https://docs.google.com/document/d/145fpROTqI8W12CXS3GU0BrKJSOi3ZzT70IefLqMbxks'
        />
        <Project
          iconSrc={V1}
          title="V1 Platform"
          description="This is the V1 Platform! This is where the V1 community (+2000 users) can come to find a one-stop-shop for everything startup-related. From a newsletter to a dashboard of all the events we do and the resources from them! I personally created the Dashboard and Startups Pages! I am now the Platform Lead for V1 and manage a team of 8 to add new features to the platform!"
          learnedText1='I learned how to work on a project with many other engineers and add features to a large codebase.'
          learnedText2='I learned how to create new API routes, work with our Middleware (Railway), create an infintie scrolling dashboard, and many other features!'
          learnedText3='Now as Platform Lead I have learned a lot about how to think about high level projects and then create a Jira story and tickets for the team to work on'
          learnedText4='I have also learned a lot about writing clean code and reusing components as much as possible!'
          techUsed="Typescript, React, Next.js, TailwindCSS, Railway, Supabase, Netlify"
          buttonText1="Check it out!"
          buttonLink1="https://v1michigan.com/"
        />
        <Project
          iconSrc={TB}
          title="TableVision"
          description="This is a product I created for students to find study spots. I built a custom CV model to accurately tell if tables are occupied or not from security camera footage and then display the number of open tables in each building. This is my first time building out an entire project from an idea of my own and I am very excited that we are currently working with the school to implement TableVision at UMich!"
          learnedText1='This was my first time working with Computer Vision, and I learned a lot about how it works and its capabilities'
          learnedText2='I learned how to use YOLOv5, Roboflow, and Google Colab to create and train a custom model'
          learnedText3='This was my first time working with Flask and I learned how to create my own API and use it to make requests to my custom YOLOv5 model'
          learnedText4='I am now managing a team of 4 to help me implement TableVision at UMich!'
          techUsed="Javascript, Python, React, Next.js, TailwindCSS, Flask, YOLOv5, Roboflow, Google Colab, Netlify"
          buttonText1="Pitch Deck"
          buttonLink1="https://pitch.com/public/d8126c2f-9acb-48a5-bb90-d086556c168d"
          buttonText2="Github Repo"
          buttonLink2="https://github.com/HariChidam/TableVision"

        />
        <Project
          iconSrc={gotPhished}
          title="GotPhished"
          description="This is a Proof of Concept for a GMail add-on I am working on. This can take in incoming email information and flag it for phishing attacks. I have really loved exploring the computer security field and hope to make more products that can create a safe and secure internet for everyone! In class we learned that even with all the computer security defenses in place most successful attacks are social engineering attacks like Phishing. Hopefully this can help!"
          learnedText1='I learned how to make API requests from my Next.js frontend without having to set up a backend.'
          learnedText2='I also learned a lot about GPT-3, LLMs, and Prompt Engineering to create accurate responses to my requests.'
          learnedText3='I also have been learning a lot about GMail add-on scripts and how annoying they can be to make :)'
          techUsed="OpenAI API, Typescript, React, Next.js, TailwindCSS, Vercel"
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


