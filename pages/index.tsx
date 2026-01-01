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
  const siteTitle = 'Hariharan Chidambaram - Software Engineer';
  const siteDescription =
    'I’m a business-driven software engineer who loves security and building products that matter. When I’m not coding, I’m playing tennis, chasing endurance challenges, Nordic skiing, and hopefully qualifying for Kona one day.';
  const previewImage = '/preview.png';

  return (
    <>
      <Head>
        <title>{siteTitle}</title>
        <meta name="description" content={siteDescription} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.png" />

        {/* Open Graph / Facebook */}
        <meta property="og:title" content={siteTitle} />
        <meta property="og:description" content={siteDescription} />
        <meta property="og:image" content={previewImage} />
        <meta property="og:url" content="https://hariharanchidambaram.me/" />
        <meta property="og:type" content="website" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={siteTitle} />
        <meta name="twitter:description" content={siteDescription} />
        <meta name="twitter:image" content={previewImage} />
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
