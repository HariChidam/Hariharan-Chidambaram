'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import hari from '@/public/hari.jpg';
import cartoonHari from '@/public/cartoonHari.jpeg';
import { Github, Linkedin, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function Hero() {
  const [isHovered, setIsHovered] = useState(false);
  const [activeLink, setActiveLink] = useState<'github' | 'linkedin' | 'email' | null>(null);

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden py-12 md:py-0">
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-tech-purple-950/20" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(168,85,247,0.1),transparent_50%)]" />
      
      {/* Floating particles effect */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(15)].map((_, i) => {
          const size = Math.random() * 2 + 1;
          const duration = Math.random() * 15 + 15;
          return (
            <motion.div
              key={i}
              className="absolute rounded-full bg-tech-pink-500/20"
              style={{
                width: `${size}px`,
                height: `${size}px`,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, Math.random() * 200 - 100],
                x: [0, Math.random() * 200 - 100],
                opacity: [0.2, 0.5, 0.2],
              }}
              transition={{
                duration,
                repeat: Infinity,
                repeatType: 'reverse',
                ease: 'easeInOut',
              }}
            />
          );
        })}
      </div>

      <div className="container mx-auto px-4 sm:px-6 z-10">
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12 pt-20 md:pt-0">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex-1 text-center md:text-left"
          >
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-4xl sm:text-5xl md:text-7xl font-bold mb-6"
            >
              <span className="bg-gradient-to-r from-tech-purple-400 via-tech-pink-400 to-tech-purple-500 bg-clip-text text-transparent">
                Hi! I&apos;m Hariharan
              </span>
              <br />
              <span className="text-foreground">(Hari) Chidambaram</span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-lg sm:text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed"
            >
              Software Engineer passionate about building scalable solutions and innovative products.
              Currently working at{' '}
              <a
                href="https://valon.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline glow-hover"
              >
                Valon
              </a>{' '}
              on the Product Infra Team building the Task Management product.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-wrap gap-3 justify-center md:justify-start"
            >
              <div
                onMouseEnter={() => setActiveLink('linkedin')}
                onMouseLeave={() => setActiveLink(null)}
                onClick={() => setActiveLink('linkedin')}
              >
                <Button
                  variant={activeLink === 'linkedin' ? 'gradient' : 'outline'}
                  size="default"
                  asChild
                  className="glow-hover text-sm sm:text-base transition-all"
                >
                  <a href="https://www.linkedin.com/in/hariharan-chidambaram/" target="_blank" rel="noopener noreferrer">
                    <Linkedin className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
                    LinkedIn
                  </a>
                </Button>
              </div>
              <div
                onMouseEnter={() => setActiveLink('github')}
                onMouseLeave={() => setActiveLink(null)}
                onClick={() => setActiveLink('github')}
              >
                <Button
                  variant={activeLink === 'github' ? 'gradient' : 'outline'}
                  size="default"
                  asChild
                  className="glow-hover text-sm sm:text-base transition-all"
                >
                  <a href="https://github.com/HariChidam" target="_blank" rel="noopener noreferrer">
                    <Github className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
                    GitHub
                  </a>
                </Button>
              </div>
              <div
                onMouseEnter={() => setActiveLink('email')}
                onMouseLeave={() => setActiveLink(null)}
                onClick={() => setActiveLink('email')}
              >
                <Button
                  variant={activeLink === 'email' ? 'gradient' : 'outline'}
                  size="default"
                  asChild
                  className="glow-hover text-sm sm:text-base transition-all"
                >
                  <a href="mailto:hari.chidam@gmail.com">
                    <Mail className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
                    Email
                  </a>
                </Button>
              </div>
            </motion.div>
          </motion.div>

          {/* Image with hover effect */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <div className="relative w-64 h-64 sm:w-80 sm:h-80 rounded-full overflow-hidden border-4 border-primary/30 glow">
              <Image
                src={hari}
                alt="Hari's Photo"
                fill
                className={`object-cover transition-opacity duration-500 ${
                  isHovered ? 'opacity-0' : 'opacity-100'
                }`}
                priority
              />
              <Image
                src={cartoonHari}
                alt="Hari's Cartoon"
                fill
                className={`object-cover absolute top-0 left-0 transition-opacity duration-500 ${
                  isHovered ? 'opacity-100' : 'opacity-0'
                }`}
              />
            </div>
            {/* Glow effect on hover */}
            {isHovered && (
              <motion.div
                className="absolute inset-0 rounded-full bg-tech-pink-500/20 blur-3xl -z-10"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1.2, opacity: 1 }}
                transition={{ duration: 0.3 }}
              />
            )}
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-6 h-10 border-2 border-primary/50 rounded-full flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1 h-3 bg-primary rounded-full mt-2"
          />
        </motion.div>
      </motion.div>
    </section>
  );
}

