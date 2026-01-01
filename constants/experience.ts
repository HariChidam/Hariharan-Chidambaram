import { Experience } from '@/types';

export const experiences: Experience[] = [
  {
    id: 'valon',
    company: 'Valon Mortgage',
    companyUrl: 'https://valon.com/',
    overallLocation: 'New York, New York, United States',
    roles: [
      {
        position: 'Software Engineer',
        location: 'New York, New York, United States',
        startDate: 'Jul 2025',
        endDate: null,
        employmentType: 'Full-time',
        description: [
          'Developing the Task Management product on the Product Infrastructure team.',
          'Building scalable infrastructure and features for the mortgage servicing platform.',
          'Collaborating with cross-functional teams to deliver high-quality software solutions.',
        ],
        technologies: ['TypeScript', 'React', 'Python', 'AWS', 'PostgreSQL'],
      },
      {
        position: 'Software Engineer',
        location: 'New York City Metropolitan Area',
        startDate: 'Aug 2024',
        endDate: 'Jul 2025',
        employmentType: 'Part-time',
        description: [
          'Worked on the Escrow team to maintain and enhance virtual credit card infrastructure.',
          'Extended automated payment systems to additional escrow payment workflows.',
          'Implemented reliable and scalable solutions for processing high-volume transactions.',
        ],
        technologies: ['TypeScript', 'React', 'Python', 'AWS', 'PostgreSQL'],
      },
      {
        position: 'Software Engineering Intern',
        location: 'New York City Metropolitan Area',
        startDate: 'May 2024',
        endDate: 'Aug 2024',
        employmentType: 'Internship',
        description: [
          'Built and scaled virtual credit card infrastructure to process hundreds of property insurance payments daily.',
          'Designed provider-agnostic architecture for easy integration with multiple payment providers.',
          'Developed resilient state machines to manage asynchronous API operations.',
          'Created dashboards for monitoring refunds and transaction reconciliation.',
          'Delivered over $1M in business impact through faster insurance payments.',
        ],
        technologies: ['TypeScript', 'Python', 'AWS', 'PostgreSQL', 'State Machines'],
        blogPostUrl: 'https://valon.com/blog/my-summer-as-a-valonian/',
      },
    ],
  },
  {
    id: 'umich-ta',
    company: 'University of Michigan',
    companyUrl: 'https://umich.edu/',
    overallLocation: 'Ann Arbor, Michigan, United States',
    roles: [
      {
        position: 'Undergraduate Teaching Assistant - Advanced Operating Systems (EECS 482)',
        location: 'Ann Arbor, Michigan, United States',
        startDate: 'Aug 2024',
        endDate: 'Dec 2024',
        employmentType: 'Part-time',
        description: [
          'Supported students in mastering complex operating systems topics, including process and memory management, and file systems.',
          'Graded assignments and provided detailed feedback to reinforce learning.',
        ],
        technologies: ['C++', 'Operating Systems'],
      },
      {
        position: 'Undergraduate Teaching Assistant - Computer Security (EECS 388)',
        location: 'Ann Arbor, Michigan, United States',
        startDate: 'Aug 2023',
        endDate: 'Dec 2024',
        employmentType: 'Part-time',
        description: [
          'Guided students through security fundamentals including cryptography, network security, and secure coding practices.',
          'Reviewed and graded security projects and assignments over multiple semesters.',
        ],
        technologies: ['Python', 'Security', 'Cryptography'],
      },
    ],
  },
  {
    id: 'flywheel',
    company: 'Flywheel.io',
    companyUrl: 'https://flywheel.io/',
    overallLocation: 'Minneapolis, Minnesota, United States',
    roles: [
      {
        position: 'Software Engineer Intern',
        location: 'Remote',
        startDate: 'Jan 2024',
        endDate: 'May 2024',
        employmentType: 'Part-time',
        description: [
          'Developed and maintained Kubernetes infrastructure on the Platform Team.',
          'Implemented modern DevOps practices to improve cloud platform reliability and scalability.',
          'Collaborated with teammates to enhance platform performance and monitoring.',
        ],
        technologies: ['Kubernetes', 'Bash', 'Terraform', 'Docker', 'DevOps'],
      },
      {
        position: 'Software Engineering Intern',
        location: 'Minneapolis, Minnesota, United States',
        startDate: 'Aug 2023',
        endDate: 'Jan 2024',
        employmentType: 'Part-time',
        description: [
          'Designed secure cloud infrastructure in Kubernetes on the Application Security Team.',
          'Implemented security best practices for containerized applications.',
          'Automated security scanning and compliance workflows.',
        ],
        technologies: ['Kubernetes', 'Docker', 'Security', 'Helm Charts'],
      },
      {
        position: 'Software Engineering Intern - Infrastructure/Security',
        location: 'Minneapolis, Minnesota, United States',
        startDate: 'May 2023',
        endDate: 'Aug 2023',
        employmentType: 'Internship',
        description: [
          'Contributed to infrastructure and security initiatives.',
          'Developed Helm charts for Kubernetes deployments.',
          'Enhanced Docker containerization and security processes.',
        ],
        technologies: ['Kubernetes', 'Docker', 'Helm Charts', 'Security'],
      },
    ],
  },
];
