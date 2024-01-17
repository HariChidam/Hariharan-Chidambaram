import React from 'react';
import Project from '../components/Project';
import Future from '../components/Future';
import THT from '../public/THT.png';
import V1 from '../public/V1.png';
import TB from '../public/TB.png';
import blueline from '../public/blueline.png';
import gotPhished from '../public/gotPhished.png';
import rushbook from '../public/rushbook.png';

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
          iconSrc={blueline}
          title="blueline (In Progress)"
          description='This is going to be a crowdsourced line checking app for the Bars/Clubs of Ann Arbor. It will provide students with realtime info wait times, cover fees, bouncer strictness, vibe, and more! This is something I wished I knew and would be super useful for students so they can make plans more effectively. I am currently developing the product and I hope to release this to the public in the fall!' 
          learnedText1='how to think like a consumer and see what features would be most beneficial through user interviews and surveys.'
          learnedText2='how to set up and use cookies to gather user information and help me create a consumer flow and tailor the site to the user'
          learnedText3='how to use Geolocation API to validate update requests to Bar/Club information and learned how to think about how Good actors and Bad actors would use the site'
          learnedText4='how to use seamlessly set up tables/storage in supabase and set up a project using Goolge Cloud Console'
          techUsed='Geolocation API, Typescript, React, Next.js, Tailwind CSS, Figma, Vercel, Supabase(PostgreSQL)'
          buttonText1='Check it out!'
          buttonLink1='https://blueline-umich.vercel.app/'
          buttonText2='Github Repo'
          buttonLink2='https://github.com/HariChidam/blueline'
          
        />
        <Project
          iconSrc={V1}
          title="V1 Platform"
          description="This is the V1 Platform! This is where the V1 community (+2000 users) can come to find a one-stop-shop for everything startup-related. From a newsletter to a dashboard of all the events we do and the resources from them! I personally created the Dashboard and Startups Pages! I am now the Platform Lead for V1 and manage a team of 8 to add new features to the platform!"
          learnedText1='how to work on a project with many other engineers and add features to a large codebase.'
          learnedText2='how to create new API routes, work with our Middleware (Railway), create an infintie scrolling dashboard, and many other features!'
          learnedText3='how to think about high level projects and then create a Jira story and tickets for the team to work on'
          learnedText4='a lot about writing clean code and reusing components as much as possible!'
          techUsed="Typescript, React, Next.js, TailwindCSS, Railway, Supabase(PostgreSQL), Netlify"
          buttonText1="Check it out!"
          buttonLink1="https://v1michigan.com/"
        />
        <Project
          iconSrc={TB}
          title="TableVision"
          description="This is a product I created for students to find study spots. I built a custom CV model to accurately tell if tables are occupied or not from security camera footage and then display the number of open tables in each building. This is my first time building out an entire project from an idea of my own and I am very excited that we are currently working with the school to implement TableVision at UMich!"
          learnedText1='how Computer Vision works in the background and the basics of linear algebra that it uses'
          learnedText2='how to use YOLOv5, Roboflow, and Google Colab to create and train a custom model'
          learnedText3='how to create my own API using Python Flask and use it to make requests to my custom YOLOv5 model'
          learnedText4='how to manage a team of 4 to help me implement TableVision at UMich!'
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
          learnedText1='how to make API requests from my Next.js frontend without having to set up a backend.'
          learnedText2='a lot about GPT-3, LLMs, and Prompt Engineering to create accurate responses to my requests.'
          learnedText3='how GMail add-on scripts work and how annoying they can be to make :)'
          learnedText4='how to 1 click deploy a site using vercel and how to use their environment variables to keep my API keys safe!'
          techUsed="OpenAI API, Typescript, React, Next.js, TailwindCSS, Vercel"
          buttonText1="Check it Out!"
          buttonLink1="https://got-phished.vercel.app/"
          buttonText2="Github Repo"
          buttonLink2="https://github.com/HariChidam/GotPhished"

        />
        <Project
          iconSrc={rushbook}
          title="Rushbook"
          description='The Rushbook is something I created to replace a service we pay $600 a semester for. It is a platform to see all potential new members joining a club and leave input (Likes, Dislikes, Comments) for each rushee. It restricts access to only members and if you are an admin you can add rushees. It is collaborative and secure and I am very proud of it!'
          learnedText1='how to write up a project spec and outline the features that would be required for the product to be successful'
          learnedText2='how to use Github actions to set up a pipeline the when pushed to an Orgs repo would copy files to my personal Repo (using ssh key) and deploy to Vercel'
          learnedText3='how to efficiently structure a database to store the needed information in the best format possible'
          learnedText4='how to create protected routes, use Next.js router, and adapt to user input and requests'
          techUsed='Typescript, React, Next.js, Tailwind CSS, Supabase(PostgreSQL), Figma, Vercel'
          buttonText1='Project Spec'
          buttonLink1='https://docs.google.com/document/d/1Suu0fqOIhkCT84SjrMxBhrxQwSXqYxRAbO1Vvj2BlMs/edit#heading=h.ujbqmqoq6bg'
          buttonText2='Check it out'
          buttonLink2='https://rushbook.vercel.app/'
          buttonText3='Github Repo'
          buttonLink3='https://github.com/thetatauthetagamma/rushbook'
        />
        <Project
          iconSrc={THT}
          title="Theta Tau Website"
          description="This is the platform I have built for my professional engineering fraternity and my first fullstack project on my own! Externally, it serves as an informational website. Internally, it is used to view upcoming events, track pledging progress, and provide easy access to the organization's resources."
          learnedText1="how to design an idea using Figma and refine it through user interviews."
          learnedText2="how to configure and design efficient relational databases."
          learnedText3="how to connect a frontend to a database (Supabase) for storing information and implementing authentication using Google OAuth."
          learnedText4="how to write documentation and outlined new features to be added down the line so that future members can keep the site up and running!"
          techUsed="Javascript, React, SCSS, Supabase(PostgreSQL), Netlify, Figma"
          buttonText1="Check it out!"
          buttonLink1="https://thetatau-umich.org/"
          buttonText2='Documentation'
          buttonLink2='https://docs.google.com/document/d/145fpROTqI8W12CXS3GU0BrKJSOi3ZzT70IefLqMbxks'
        />
      </div>
    </div>
  );
}


