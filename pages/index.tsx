import Image from 'next/image';
import hari from '../public/hari.jpg';

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center md:flex-row">
      <div className="w-3/4 md:w-1/2 mr-4">
        <h1 className="text-3xl font-bold bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 bg-clip-text text-transparent py-2 text-center">
          Hi! I&apos;m Hariharan (Hari) Chidambaram
        </h1>
        <p className="text-lg font-bold text-center">
          I am a student at the University of Michigan studying Computer Science and am particularly interested in Security
          and Cloud Engineering! I am currently a Security Engineering intern at{' '}
          <a href="https://flywheel.io/" className="text-blue-500 hover:underline">
            Flywheel.io
          </a>{' '}
          and I am leading an investigation looking for abnormal activity concerning traffic through nginx ingress to our
          Kubernetes clusters. Outside of the tech world, I love Tennis and every endurance sport, especially Nordic Skiing!
        </p>
      </div>
      <div className="w-1/4 rounded-full overflow-hidden">
        <Image src={hari} alt="Hari's Photo" layout="responsive" objectFit="cover" height={200} width={200} />
      </div>
    </div>
  );
}

