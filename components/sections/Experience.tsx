'use client';

import { motion } from 'framer-motion';
import { useIntersectionObserver } from '@/lib/hooks/useIntersectionObserver';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Experience as ExperienceType } from '@/types';
import { Calendar, MapPin, ExternalLink } from 'lucide-react';

interface ExperienceSectionProps {
  experiences: ExperienceType[];
}

export default function ExperienceSection({ experiences }: ExperienceSectionProps) {
  const [ref, isIntersecting] = useIntersectionObserver({ threshold: 0.1 });

  const getOverallDateRange = (exp: ExperienceType) => {
    // Get the earliest start date and latest end date (or null if any role is current)
    const allStartDates = exp.roles.map(role => role.startDate);
    const allEndDates = exp.roles.map(role => role.endDate).filter(Boolean) as string[];
    const hasCurrentRole = exp.roles.some(role => role.endDate === null);
    
    // Simple string comparison for dates like "May 2024"
    const parseDate = (dateStr: string) => {
      const [month, year] = dateStr.split(' ');
      const monthMap: Record<string, number> = {
        'Jan': 1, 'Feb': 2, 'Mar': 3, 'Apr': 4, 'May': 5, 'Jun': 6,
        'Jul': 7, 'Aug': 8, 'Sep': 9, 'Oct': 10, 'Nov': 11, 'Dec': 12
      };
      return parseInt(year) * 100 + (monthMap[month] || 0);
    };
    
    const sortedStarts = allStartDates.sort((a, b) => parseDate(a) - parseDate(b));
    const sortedEnds = allEndDates.sort((a, b) => parseDate(a) - parseDate(b));
    
    const earliestStart = sortedStarts[0] || '';
    const latestEnd = hasCurrentRole ? null : (sortedEnds[sortedEnds.length - 1] || null);
    
    return { start: earliestStart, end: latestEnd };
  };

  return (
    <section
      id="experience"
      ref={ref}
      className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 relative"
    >
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isIntersecting ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-8 sm:mb-12 text-center">
            <span className="bg-gradient-to-r from-tech-purple-400 via-tech-pink-400 to-tech-purple-500 bg-clip-text text-transparent">
              Experience
            </span>
          </h2>

          <div className="space-y-8">
            {experiences.map((exp, index) => {
              const { start, end } = getOverallDateRange(exp);
              const allTechnologies = Array.from(new Set(exp.roles.flatMap(role => role.technologies)));
              
              return (
                <motion.div
                  key={exp.id}
                  initial={{ opacity: 0, x: -50 }}
                  animate={isIntersecting ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Card className="glass hover:border-primary/50 transition-all duration-300 glow-hover">
                  <CardHeader className="p-4 sm:p-6">
                    <div className="flex justify-between items-start">
                      {/* Left: Company name + link */}
                      <div className="flex-1">
                        <CardTitle className="text-2xl sm:text-3xl font-bold">
                          {exp.companyUrl ? (
                            <a
                              href={exp.companyUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="hover:text-primary transition-colors flex items-center gap-2"
                            >
                              {exp.company}
                              <ExternalLink className="h-4 w-4 sm:h-5 sm:w-5" />
                            </a>
                          ) : (
                            exp.company
                          )}
                        </CardTitle>
                      </div>

                      {/* Right: Location + date range */}
                      {exp.overallLocation && (
                        <div className="flex flex-col items-end text-xs sm:text-sm text-muted-foreground">
                          <div className="flex items-center gap-2">
                            <MapPin className="h-4 w-4" />
                            <span>{exp.overallLocation}</span>
                          </div>
                          <div className="flex items-center gap-2 mt-1">
                            <Calendar className="h-4 w-4" />
                            <span>
                              {start} - {end || 'Present'}
                            </span>
                          </div>
                        </div>
                      )}
                    </div>
                  </CardHeader>
                    <CardContent className="p-4 sm:p-6 pt-0">
                      {/* Roles Timeline */}
                      <div className="space-y-6 mb-6">
                      {exp.roles.map((role, roleIndex) => (
                          <div key={roleIndex} className="relative pl-6 border-l-2 border-primary/30">
                            {/* Timeline dot */}
                            <div className="absolute -left-[7px] top-0 w-3 h-3 rounded-full bg-primary border-2 border-background" />
                            
                            <div className="space-y-2">
                              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                                <div>
                                  <h4 className="text-base sm:text-lg font-semibold text-foreground">
                                    {role.position}
                                  </h4>
                                  {role.employmentType && (
                                    <span className="text-xs sm:text-sm text-muted-foreground">
                                      {role.employmentType}
                                    </span>
                                  )}
                                </div>
                                <div className="flex items-center gap-2 text-xs sm:text-sm text-muted-foreground">
                                  <Calendar className="h-3 w-3 sm:h-4 sm:w-4" />
                                  <span>
                                    {role.startDate} - {role.endDate || 'Present'}
                                  </span>
                                </div>
                              </div>
                              
                              {role.location && (
                                <div className="flex items-center gap-2 text-xs sm:text-sm text-muted-foreground">
                                  <MapPin className="h-3 w-3 sm:h-4 sm:w-4" />
                                  <span>{role.location}</span>
                                </div>
                              )}

                              <ul className="space-y-1.5 mt-3">
                                {role.description.map((item, idx) => (
                                  <li key={idx} className="flex items-start gap-2 text-sm sm:text-base text-muted-foreground">
                                    <span className="text-primary mt-0.5 flex-shrink-0 leading-tight">▹</span>
                                    <span>{item}</span>
                                  </li>
                                ))}
                              </ul>

                              {role.blogPostUrl && (
                                <div className="mt-3">
                                  <a
                                    href={role.blogPostUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-primary hover:underline text-sm sm:text-base flex items-center gap-2"
                                  >
                                    Read about my experience
                                    <ExternalLink className="h-3 w-3 sm:h-4 sm:w-4" />
                                  </a>
                                </div>
                              )}
                            </div>
                          </div>
                        ))}
                      </div>

                      {/* Combined Technologies */}
                      <div className="flex flex-wrap gap-2 mt-4 pt-4 border-t border-border/50">
                        {allTechnologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-2 sm:px-3 py-1 rounded-full bg-primary/10 text-primary text-xs sm:text-sm border border-primary/20"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
