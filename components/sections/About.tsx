'use client';

import { motion } from 'framer-motion';
import { useIntersectionObserver } from '@/lib/hooks/useIntersectionObserver';

export default function About() {
  const [ref, isIntersecting] = useIntersectionObserver({ threshold: 0.2 });

  return (
    <section
      id="about"
      ref={ref}
      className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 relative"
    >
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isIntersecting ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 sm:mb-8 text-center">
            <span className="bg-gradient-to-r from-tech-purple-400 via-tech-pink-400 to-tech-purple-500 bg-clip-text text-transparent">
              About Me
            </span>
          </h2>
          
          <div className="glass rounded-2xl p-6 sm:p-8 md:p-12 space-y-4 sm:space-y-6">
            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
              I&apos;m a Software Engineer with a passion for building scalable, innovative solutions. 
              Currently, I&apos;m working at{' '}
              <a
                href="https://valon.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                Valon
              </a>{' '}
              on the Product Infra Team, where I&apos;m building the Task Management product and developing robust infrastructure for mortgage servicing operations.
            </p>
            
            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
              My interests span across Security, Cloud Engineering, and Full-Stack Development. 
              I love tackling complex problems and turning ideas into reality through clean, 
              maintainable code.
            </p>
            
            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
              Outside of the tech world, I have a passion for tennis and various endurance sports, 
              particularly Nordic Skiing and Triathlons! These activities keep me balanced and 
              help me bring the same discipline and determination to my work.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

