'use client';

import { motion } from 'framer-motion';
import { useIntersectionObserver } from '@/lib/hooks/useIntersectionObserver';
import { Button } from '@/components/ui/button';
import { Github, Linkedin, Mail } from 'lucide-react';

export default function ContactSection() {
  const [ref, isIntersecting] = useIntersectionObserver({ threshold: 0.2 });

  return (
    <section
      id="contact"
      ref={ref}
      className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 relative"
    >
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isIntersecting ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">
            <span className="bg-gradient-to-r from-tech-purple-400 via-tech-pink-400 to-tech-purple-500 bg-clip-text text-transparent">
              Get In Touch
            </span>
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground mb-8 sm:mb-12 max-w-2xl mx-auto px-4">
            I&apos;m always open to discussing new opportunities, interesting projects, or just having a chat about technology!
          </p>

          <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
            <Button
              variant="gradient"
              size="default"
              asChild
              className="glow-hover text-sm sm:text-base"
            >
              <a href="https://github.com/HariChidam" target="_blank" rel="noopener noreferrer">
                <Github className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
                GitHub
              </a>
            </Button>
            <Button
              variant="gradient"
              size="default"
              asChild
              className="glow-hover text-sm sm:text-base"
            >
              <a href="https://www.linkedin.com/in/hariharan-chidambaram/" target="_blank" rel="noopener noreferrer">
                <Linkedin className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
                LinkedIn
              </a>
            </Button>
            <Button
              variant="gradient"
              size="default"
              asChild
              className="glow-hover text-sm sm:text-base"
            >
              <a href="mailto:hari.chidam@gmail.com">
                <Mail className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
                Email
              </a>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

