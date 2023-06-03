import Image from 'next/image';
import hari from '../public/hari.jpg';

export default function Home() {
  return (
    <div className="flex justify-center items-center">
      <div className="w-2/5 mr-4 flex flex-col justify-center">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 bg-clip-text text-transparent py-2">Hi! I&apos;m Hariharan (Hari) Chidambaram </h1>
        <p className="text-lg font-bold">
           I am a student at the University of Michigan studying Computer Science 
          and am particularly interested in Security and Cloud Engineering!
          I am currently a Security Engineering intern at <a href="https://flywheel.io/" className="text-blue-500 hover:underline"> Flywheel.io </a> and 
          I am leading an investigation looking for abnormal activity concerning traffic through nginx ingress
          to our Kubernetes clusters. 
          Outside of the tech world I love Tennis and every endurance sport especially Nordic Skiing!
        </p>
      </div>
      <div className="w-1/5 rounded-full overflow-hidden">
        <Image src={hari} alt="Hari's Photo" layout="responsive" objectFit="cover" />
      </div>
    </div>
  );
}