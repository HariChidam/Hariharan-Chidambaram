import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Michigan from '../public/michigan.svg';
import github from '../public/git.svg';
import linkedin from '../public/linkedin.svg';
import email from '../public/gmail.svg';

const Footer = () => {
  return (
    <footer className="flex justify-between bg-white py-8 px-6">
      <div className="flex items-center float-left justify-start">
        <Image src={Michigan} alt="Michigan Logo" className="h-6 w-6 mr-2" />
        <span className="font-bold text-blue-1000">Class of &apos;24</span>
      </div>
      <div className="flex items-center float-right justify-end space-x-2">
        <Link legacyBehavior href="https://github.com/HariChidam">
          <a target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-800">
            <Image src={github} alt="Github Logo" className="h-6 w-6 mr-2" />
          </a>
        </Link>
        <Link legacyBehavior href="https://www.linkedin.com/in/hariharan-chidambaram/">
          <a target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-800">
            <Image src={linkedin} alt="Linkedin Logo" className="h-6 w-6 mr-2" />
          </a>
        </Link>
        <Link legacyBehavior href="mailto:hari.chidam@gmail.com">
          <a className="text-gray-600 hover:text-gray-800">
            <Image src={email} alt="Email Logo" className="h-6 w-6 mr-2" />
          </a>
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
