import { Project } from '@/types';
import V1 from '@/public/V1.png';
import THT from '@/public/THT.png';
import blueline from '@/public/blueline.png';
import gotPhished from '@/public/gotPhished.png';
import rushbook from '@/public/rushbook.png';
import TB from '@/public/TB.png';

export const projects: Project[] = [
  {
    id: 'v1-platform',
    title: 'V1 Platform',
    description: 'A central hub for the V1 community (+2000 users) to access events, resources, and newsletters. Built the Dashboard and Startups pages, now leading an 8-person team to develop new platform features.',
    image: V1.src,
    techStack: ['TypeScript', 'React', 'Next.js', 'TailwindCSS', 'Railway', 'Supabase (PostgreSQL)', 'Netlify'],
    links: {
      live: 'https://v1michigan.com/',
    },
    status: 'active',
    learned: [
      'Collaborating on a large codebase with multiple engineers.',
      'Creating new API routes, middleware integrations, and dynamic dashboards.',
      'Breaking high-level projects into actionable Jira stories and tickets.',
      'Writing clean, reusable, and maintainable components.',
    ],
  },
  {
    id: 'theta-tau',
    title: 'Theta Tau Website',
    description: 'Full-stack platform for my professional engineering fraternity. Provides public information and internal tools to manage events, track pledging progress, and access resources.',
    image: THT.src,
    techStack: ['JavaScript', 'React', 'SCSS', 'Supabase (PostgreSQL)', 'Netlify', 'Figma'],
    links: {
      live: 'https://thetatau-umich.org/',
      documentation: 'https://docs.google.com/document/d/145fpROTqI8W12CXS3GU0BrKJSOi3ZzT70IefLqMbxks',
    },
    status: 'active',
    learned: [
      'Designing interfaces using Figma and refining through user feedback.',
      'Configuring and optimizing relational databases.',
      'Integrating frontend with Supabase and implementing Google OAuth authentication.',
      'Writing documentation and planning future feature enhancements.',
    ],
  },
  {
    id: 'blueline',
    title: 'blueline',
    description: 'Crowdsourced line-checking app for Ann Arbor bars and clubs. Provides real-time information on wait times, cover fees, bouncer strictness, and venue vibe.',
    image: blueline.src,
    techStack: ['Geolocation API', 'TypeScript', 'React', 'Next.js', 'TailwindCSS', 'Figma', 'Vercel', 'Supabase (PostgreSQL)'],
    links: {
      github: 'https://github.com/HariChidam/blueline',
    },
    status: 'archived',
  },
  {
    id: 'tablevision',
    title: 'TableVision',
    description: 'Helps students find available study spots. Uses a custom computer vision model to detect occupied tables from camera footage and displays availability by building.',
    image: TB.src,
    techStack: ['JavaScript', 'Python', 'React', 'Next.js', 'TailwindCSS', 'Flask', 'YOLOv5', 'Roboflow', 'Google Colab', 'Netlify'],
    links: {
      github: 'https://github.com/HariChidam/TableVision',
    },
    status: 'archived',
  },
  {
    id: 'gotphished',
    title: 'GotPhished',
    description: 'Gmail add-on proof-of-concept that analyzes incoming emails and flags potential phishing attacks.',
    image: gotPhished.src,
    techStack: ['OpenAI API', 'TypeScript', 'React', 'Next.js', 'TailwindCSS', 'Vercel'],
    links: {
      github: 'https://github.com/HariChidam/GotPhished',
    },
    status: 'archived',
  },
  {
    id: 'rushbook',
    title: 'Rushbook',
    description: 'Platform to manage and track potential new members joining a club, allowing feedback (likes, dislikes, comments) on each applicant, replacing an external $600/semester service.',
    image: rushbook.src,
    techStack: ['TypeScript', 'React', 'Next.js', 'TailwindCSS', 'Supabase (PostgreSQL)', 'Figma', 'Vercel'],
    links: {
      github: 'https://github.com/thetatauthetagamma/rushbook',
    },
    status: 'archived',
  },
];
