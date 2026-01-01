'use client';

import { memo } from 'react';
import { motion } from 'framer-motion';
import { useIntersectionObserver } from '@/lib/hooks/useIntersectionObserver';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Project as ProjectType } from '@/types';
import { projects } from '@/constants/projects';
import Image from 'next/image';
import { ExternalLink, Github } from 'lucide-react';

const activeProjects = projects.filter((p) => p.status === 'active');
const archivedProjects = projects.filter((p) => p.status === 'archived');

interface ProjectCardProps {
  project: ProjectType;
  index: number;
  isIntersecting: boolean;
}

const ProjectCard = memo(function ProjectCard({ project, index, isIntersecting }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={isIntersecting ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
    >
      <Card className="glass hover:border-primary/50 transition-all duration-300 glow-hover h-full flex flex-col overflow-hidden">
        <div className="relative w-full h-40 sm:h-48 overflow-hidden">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover transition-transform duration-300 hover:scale-110"
          />
        </div>
        <CardHeader className="p-4 sm:p-6">
          <CardTitle className="text-lg sm:text-xl mb-2">{project.title}</CardTitle>
          <CardDescription className="text-sm sm:text-base">{project.description}</CardDescription>
        </CardHeader>
        <CardContent className="flex-1 p-4 sm:p-6 pt-0">
          {project.learned && project.learned.length > 0 && (
            <div className="mb-4">
              <h4 className="text-xs sm:text-sm font-semibold mb-2 text-primary">What I Learned:</h4>
              <ul className="space-y-1 text-xs sm:text-sm text-muted-foreground">
                {project.learned.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-primary mt-1 flex-shrink-0">▹</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
          <div className="flex flex-wrap gap-1.5 sm:gap-2">
            {project.techStack.map((tech) => (
              <span
                key={tech}
                className="px-2 py-0.5 sm:py-1 rounded-md bg-primary/10 text-primary text-xs border border-primary/20"
              >
                {tech}
              </span>
            ))}
          </div>
        </CardContent>
        <CardFooter className="flex gap-2 flex-wrap p-4 sm:p-6 pt-0">
          {project.links.live && (
            <Button variant="gradient" size="sm" asChild className="glow-hover">
              <a href={project.links.live} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="mr-2 h-4 w-4" />
                Live Site
              </a>
            </Button>
          )}
          {project.links.github && (
            <Button variant="outline" size="sm" asChild className="glow-hover">
              <a href={project.links.github} target="_blank" rel="noopener noreferrer">
                <Github className="mr-2 h-4 w-4" />
                GitHub
              </a>
            </Button>
          )}
          {project.links.documentation && (
            <Button variant="outline" size="sm" asChild className="glow-hover">
              <a href={project.links.documentation} target="_blank" rel="noopener noreferrer">
                Docs
              </a>
            </Button>
          )}
        </CardFooter>
      </Card>
    </motion.div>
  );
});

const ArchivedProjectCard = memo(function ArchivedProjectCard({ project, index, isIntersecting }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={isIntersecting ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
    >
      <Card className="glass hover:border-primary/50 transition-all duration-300 glow-hover opacity-75 h-full flex flex-col">
        <CardHeader className="p-4 sm:p-6 flex-1">
          <CardTitle className="text-base sm:text-lg mb-2">{project.title}</CardTitle>
          <CardDescription className="text-xs sm:text-sm">{project.description}</CardDescription>
        </CardHeader>
        <CardFooter className="p-4 sm:p-6 pt-0 mt-auto">
          {project.links.github && (
            <Button variant="outline" size="sm" asChild className="glow-hover">
              <a href={project.links.github} target="_blank" rel="noopener noreferrer">
                <Github className="mr-2 h-4 w-4" />
                GitHub
              </a>
            </Button>
          )}
        </CardFooter>
      </Card>
    </motion.div>
  );
});

export default function ProjectsSection() {
  const [ref, isIntersecting] = useIntersectionObserver({ threshold: 0.1 });

  return (
    <section
      id="projects"
      ref={ref}
      className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 relative"
    >
      <div className="container mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isIntersecting ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-8 sm:mb-12 text-center">
            <span className="bg-gradient-to-r from-tech-purple-400 via-tech-pink-400 to-tech-purple-500 bg-clip-text text-transparent">
              Projects
            </span>
          </h2>

          {/* Active Projects */}
          <div className="mb-12 sm:mb-16">
            <h3 className="text-xl sm:text-2xl font-semibold mb-4 sm:mb-6 text-foreground">Active Projects</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
              {activeProjects.map((project, index) => (
                <ProjectCard
                  key={project.id}
                  project={project}
                  index={index}
                  isIntersecting={isIntersecting}
                />
              ))}
            </div>
          </div>

          {/* Archived Projects */}
          <div>
            <h3 className="text-xl sm:text-2xl font-semibold mb-4 sm:mb-6 text-muted-foreground">Archived Projects</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
              {archivedProjects.map((project, index) => (
                <ArchivedProjectCard
                  key={project.id}
                  project={project}
                  index={index}
                  isIntersecting={isIntersecting}
                />
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

