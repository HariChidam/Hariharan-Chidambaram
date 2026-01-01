import { experiences } from '@/constants/experience';
import { education } from '@/constants/education';
import Hero from '@/components/sections/Hero';
import About from '@/components/sections/About';
import ExperienceSection from '@/components/sections/Experience';
import ProjectsSection from '@/components/sections/Projects';
import EducationSection from '@/components/sections/Education';
import ContactSection from '@/components/sections/Contact';
import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>Hariharan Chidambaram - Software Engineer</title>
        <meta
          name="description"
          content="“I’m a business-driven software engineer who loves security and building products that matter. When I’m not coding, I’m playing tennis, chasing endurance challenges, Nordic skiing, and hopefully qualifying for Kona one day.”"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <Hero />
      <About />
      <ExperienceSection experiences={experiences} />
      <ProjectsSection />
      <EducationSection education={education} />
      <ContactSection />
    </>
  );
}
