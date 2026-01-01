export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  techStack: string[];
  links: {
    live?: string;
    github?: string;
    documentation?: string;
    pitch?: string;
    spec?: string;
  };
  status: 'active' | 'archived';
  learned?: string[];
}

export interface Role {
  position: string;
  location: string;
  startDate: string;
  endDate: string | null;
  description: string[];
  technologies: string[];
  blogPostUrl?: string;
  employmentType?: 'Full-time' | 'Part-time' | 'Internship';
}

export interface Experience {
  id: string;
  company: string;
  companyUrl?: string;
  roles: Role[];
  overallLocation?: string;
}

export interface Education {
  school: string;
  degree: string;
  field: string;
  location: string;
  startDate: string;
  endDate: string | null;
  gpa?: string;
  relevantCoursework?: string[];
}

export interface SocialLink {
  name: string;
  url: string;
  icon: string;
}

export interface Section {
  id: string;
  name: string;
  href: string;
}

