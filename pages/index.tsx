import Image from 'next/image';
import hari from '../public/hari.jpg';

export default function Home() {
  return (
    <div className="flex justify-center items-center">
      <div className="w-2/5 mr-4 flex flex-col justify-center">
        <p className="text-lg">
          Hi, My name is Hariharan (Hari) Chidambaram! I am a student at the University of Michigan studying Computer Science and I am particularly interested in Security Engineering and Cloud Engineering! I love Tennis and every endurance sport, especially Nordic Skiing and biking.
        </p>
      </div>
      <div className="w-1/5 rounded-full overflow-hidden">
        <Image src={hari} alt="Hari's Photo" layout="responsive" objectFit="cover" />
      </div>
    </div>
  );
}