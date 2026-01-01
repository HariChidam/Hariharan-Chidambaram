'use client';

import { motion } from 'framer-motion';
import { useIntersectionObserver } from '@/lib/hooks/useIntersectionObserver';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Education as EducationType } from '@/types';
import { Calendar, MapPin, GraduationCap } from 'lucide-react';

interface EducationSectionProps {
  education: EducationType;
}

export default function EducationSection({ education }: EducationSectionProps) {
  const [ref, isIntersecting] = useIntersectionObserver({ threshold: 0.2 });

  return (
    <section
      id="education"
      ref={ref}
      className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 relative"
    >
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isIntersecting ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-8 sm:mb-12 text-center">
            <span className="bg-gradient-to-r from-tech-purple-400 via-tech-pink-400 to-tech-purple-500 bg-clip-text text-transparent">
              Education
            </span>
          </h2>

          <Card className="glass glow-hover">
            <CardHeader className="p-4 sm:p-6">
              <div className="flex items-start gap-3 sm:gap-4">
                <GraduationCap className="h-6 w-6 sm:h-8 sm:w-8 text-primary flex-shrink-0 mt-1" />
                <div className="flex-1">
                  <CardTitle className="text-xl sm:text-2xl mb-2">{education.school}</CardTitle>
                  <CardDescription className="text-base sm:text-lg text-foreground/80">
                    {education.degree} in {education.field}
                  </CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent className="p-4 sm:p-6 pt-0">
              <div className="space-y-3 sm:space-y-4">
                <div className="flex items-center gap-2 text-sm sm:text-base text-muted-foreground">
                  <Calendar className="h-3 w-3 sm:h-4 sm:w-4 flex-shrink-0" />
                  <span>
                    {education.startDate} - {education.endDate || 'Present'}
                  </span>
                </div>
                <div className="flex items-center gap-2 text-sm sm:text-base text-muted-foreground">
                  <MapPin className="h-3 w-3 sm:h-4 sm:w-4 flex-shrink-0" />
                  <span>{education.location}</span>
                </div>
                {education.gpa && (
                  <div className="text-sm sm:text-base text-muted-foreground">
                    <span className="font-semibold">GPA: </span>
                    {education.gpa}
                  </div>
                )}
                {education.relevantCoursework && education.relevantCoursework.length > 0 && (
                  <div>
                    <h4 className="font-semibold mb-2 text-sm sm:text-base text-foreground">Relevant Coursework:</h4>
                    <div className="flex flex-wrap gap-1.5 sm:gap-2">
                      {education.relevantCoursework.map((course) => (
                        <span
                          key={course}
                          className="px-2 sm:px-3 py-0.5 sm:py-1 rounded-full bg-primary/10 text-primary text-xs sm:text-sm border border-primary/20"
                        >
                          {course}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}

