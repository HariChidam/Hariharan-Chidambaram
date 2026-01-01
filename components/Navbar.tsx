'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { sections } from '@/constants/sections';
import { cn } from '@/lib/utils';

export default function Navbar() {
  const [activeSection, setActiveSection] = useState('hero');
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // Determine active section based on scroll position
      const sectionElements = sections.map((section) => ({
        id: section.id,
        element: document.getElementById(section.id),
      }));

      const currentSection = sectionElements
        .reverse()
        .find(({ element }) => {
          if (!element) return false;
          const rect = element.getBoundingClientRect();
          return rect.top <= 100;
        });

      if (currentSection) {
        setActiveSection(currentSection.id);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled
          ? 'glass border-b border-border/50 shadow-lg'
          : 'bg-transparent'
      )}
    >
      <div className="container mx-auto px-3 sm:px-4">
        <div className="flex items-center justify-center">
          <ul className="flex flex-wrap justify-center gap-1 py-3 sm:py-4">
            {sections.map((section) => (
              <li key={section.id}>
                <a
                  href={section.href}
                  onClick={(e) => handleClick(e, section.href)}
                  className={cn(
                    'px-3 sm:px-4 py-2 rounded-lg text-xs sm:text-sm font-medium transition-all duration-300 relative',
                    activeSection === section.id
                      ? 'text-primary'
                      : 'text-muted-foreground hover:text-foreground'
                  )}
                  aria-label={`Navigate to ${section.name} section`}
                >
                  {section.name}
                  {activeSection === section.id && (
                    <motion.div
                      layoutId="activeSection"
                      className="absolute inset-0 bg-primary/10 rounded-lg border border-primary/20"
                      transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
                      aria-hidden="true"
                    />
                  )}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </motion.nav>
  );
}
