'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Github, Linkedin, Mail } from 'lucide-react';
import Michigan from '@/public/michigan.svg';

export default function Footer() {
  return (
    <footer className="border-t border-border/50 glass">
      <div className="container mx-auto px-4 sm:px-6 py-6 sm:py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <a
              href="https://www.youtube.com/watch?v=9ak9Uxtntfk"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:opacity-80 transition-opacity"
            >
              <Image src={Michigan} alt="Michigan Logo" className="h-5 w-5 sm:h-6 sm:w-6" />
              <span className="font-semibold text-sm sm:text-base text-muted-foreground">Class of &apos;25</span>
            </a>
          </div>
          <div className="flex items-center gap-3 sm:gap-4">
            <Link
              href="https://github.com/HariChidam"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors p-1"
              aria-label="GitHub"
            >
              <Github className="h-5 w-5 sm:h-6 sm:w-6" />
            </Link>
            <Link
              href="https://www.linkedin.com/in/hariharan-chidambaram/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors p-1"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-5 w-5 sm:h-6 sm:w-6" />
            </Link>
            <Link
              href="mailto:hari.chidam@gmail.com"
              className="text-muted-foreground hover:text-primary transition-colors p-1"
              aria-label="Email"
            >
              <Mail className="h-5 w-5 sm:h-6 sm:w-6" />
            </Link>
          </div>
        </div>
        <div className="mt-4 text-center text-xs sm:text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Hariharan Chidambaram. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
