export interface Job {
  id: string;
  title: string;
  company: string;
  location: string;
  type: 'Full-time' | 'Part-time' | 'Contract' | 'Internship' | 'Remote';
  category: 'Engineering' | 'Design' | 'Marketing' | 'Sales' | 'Customer Service' | 'Finance' | 'HR' | 'Other';
  salary: string;
  experience: 'Entry Level' | 'Mid Level' | 'Senior Level' | 'Executive Level';
  description: string;
  requirements: string[];
  postedDate: string;
  logo: string;
}

export const jobsData: Job[] = [
  {
    id: '1',
    title: 'Frontend Developer',
    company: 'TechCorp',
    location: 'San Francisco, CA',
    type: 'Full-time',
    category: 'Engineering',
    salary: '$90,000 - $120,000',
    experience: 'Mid Level',
    description: 'We are looking for a skilled Frontend Developer to join our team. You will be responsible for building beautiful, responsive web applications.',
    requirements: [
      'Proficient in React, TypeScript, and modern CSS',
      '3+ years of professional experience in frontend development',
      'Experience with state management libraries',
      'Excellent problem-solving skills'
    ],
    postedDate: '2023-07-10',
    logo: 'https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?q=80&w=250&auto=format&fit=crop'
  },
  {
    id: '2',
    title: 'UX/UI Designer',
    company: 'DesignHub',
    location: 'New York, NY',
    type: 'Full-time',
    category: 'Design',
    salary: '$85,000 - $110,000',
    experience: 'Mid Level',
    description: 'Join our creative team to design intuitive and beautiful user experiences for our products.',
    requirements: [
      'Strong portfolio showcasing UX/UI design skills',
      'Experience with Figma, Sketch, or similar design tools',
      'Understanding of user-centered design principles',
      'Ability to collaborate with developers'
    ],
    postedDate: '2023-07-12',
    logo: 'https://images.unsplash.com/photo-1572044162444-ad60f128bdea?q=80&w=250&auto=format&fit=crop'
  },
  {
    id: '3',
    title: 'Data Scientist',
    company: 'DataInsights',
    location: 'Remote',
    type: 'Remote',
    category: 'Engineering',
    salary: '$110,000 - $140,000',
    experience: 'Senior Level',
    description: 'Leverage our vast datasets to derive insights and build predictive models for our clients.',
    requirements: [
      'Advanced degree in Statistics, Computer Science, or related field',
      'Experience with Python, R, and data visualization tools',
      'Strong background in machine learning algorithms',
      'Excellent communication skills to explain complex findings'
    ],
    postedDate: '2023-07-14',
    logo: 'https://images.unsplash.com/photo-1568633594556-5d038be7c808?q=80&w=250&auto=format&fit=crop'
  },
  {
    id: '4',
    title: 'Marketing Manager',
    company: 'GrowthBoost',
    location: 'Chicago, IL',
    type: 'Full-time',
    category: 'Marketing',
    salary: '$80,000 - $100,000',
    experience: 'Mid Level',
    description: 'Lead our marketing efforts to increase brand awareness and drive customer acquisition.',
    requirements: [
      'Bachelor\'s degree in Marketing or related field',
      '3+ years of experience in digital marketing',
      'Knowledge of SEO, content marketing, and social media strategies',
      'Analytical mindset to track and report on campaign performance'
    ],
    postedDate: '2023-07-16',
    logo: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=250&auto=format&fit=crop'
  },
  {
    id: '5',
    title: 'Backend Engineer',
    company: 'ServerStack',
    location: 'Austin, TX',
    type: 'Full-time',
    category: 'Engineering',
    salary: '$95,000 - $125,000',
    experience: 'Mid Level',
    description: 'Design and implement scalable backend systems for our growing platform.',
    requirements: [
      'Strong experience with Node.js, Python, or Java',
      'Familiarity with database systems (SQL and NoSQL)',
      'Understanding of RESTful API design principles',
      'Experience with cloud platforms (AWS, GCP, or Azure)'
    ],
    postedDate: '2023-07-18',
    logo: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=250&auto=format&fit=crop'
  },
  {
    id: '6',
    title: 'Product Manager',
    company: 'ProductFirst',
    location: 'Seattle, WA',
    type: 'Full-time',
    category: 'Other',
    salary: '$105,000 - $135,000',
    experience: 'Senior Level',
    description: 'Lead the product development lifecycle from conception to launch.',
    requirements: [
      'Proven experience as a Product Manager',
      'Strong understanding of user-centered design and agile methodologies',
      'Excellent communication and stakeholder management skills',
      'Analytical skills to make data-driven decisions'
    ],
    postedDate: '2023-07-20',
    logo: 'https://images.unsplash.com/photo-1560179707-f14e90ef3623?q=80&w=250&auto=format&fit=crop'
  },
  {
    id: '7',
    title: 'DevOps Engineer',
    company: 'CloudInfra',
    location: 'Remote',
    type: 'Remote',
    category: 'Engineering',
    salary: '$100,000 - $130,000',
    experience: 'Senior Level',
    description: 'Build and maintain our CI/CD pipelines and infrastructure as code.',
    requirements: [
      'Experience with infrastructure as code (Terraform, CloudFormation)',
      'Proficiency with containerization technologies (Docker, Kubernetes)',
      'Knowledge of CI/CD tools (Jenkins, GitLab CI, GitHub Actions)',
      'Strong scripting skills in Bash, Python, or similar'
    ],
    postedDate: '2023-07-22',
    logo: 'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?q=80&w=250&auto=format&fit=crop'
  },
  {
    id: '8',
    title: 'Sales Representative',
    company: 'SalesPro',
    location: 'Miami, FL',
    type: 'Full-time',
    category: 'Sales',
    salary: '$60,000 + Commission',
    experience: 'Entry Level',
    description: 'Join our sales team to build relationships with clients and drive revenue growth.',
    requirements: [
      'Bachelor\'s degree in Business or related field',
      'Excellent communication and negotiation skills',
      'Goal-oriented mindset',
      'Ability to understand customer needs and provide solutions'
    ],
    postedDate: '2023-07-24',
    logo: 'https://images.unsplash.com/photo-1549924231-f129b911e442?q=80&w=250&auto=format&fit=crop'
  },
  {
    id: '9',
    title: 'Customer Support Specialist',
    company: 'HelpDesk',
    location: 'Denver, CO',
    type: 'Part-time',
    category: 'Customer Service',
    salary: '$45,000 - $55,000',
    experience: 'Entry Level',
    description: 'Provide exceptional support to our customers through various channels.',
    requirements: [
      'Strong communication and problem-solving skills',
      'Patience and empathy when dealing with customer issues',
      'Ability to learn and explain technical concepts simply',
      'Experience with helpdesk or ticketing systems a plus'
    ],
    postedDate: '2023-07-26',
    logo: 'https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=250&auto=format&fit=crop'
  },
  {
    id: '10',
    title: 'Financial Analyst',
    company: 'MoneyMatters',
    location: 'Boston, MA',
    type: 'Full-time',
    category: 'Finance',
    salary: '$75,000 - $95,000',
    experience: 'Mid Level',
    description: 'Analyze financial data and prepare reports to guide business decisions.',
    requirements: [
      'Bachelor\'s degree in Finance, Accounting, or related field',
      'Strong analytical and financial modeling skills',
      'Proficiency in Excel and financial software',
      'Attention to detail and ability to work with deadlines'
    ],
    postedDate: '2023-07-28',
    logo: 'https://images.unsplash.com/photo-1444653614773-995cb1ef9efa?q=80&w=250&auto=format&fit=crop'
  },
  {
    id: '11',
    title: 'HR Specialist',
    company: 'PeopleFirst',
    location: 'Chicago, IL',
    type: 'Full-time',
    category: 'HR',
    salary: '$65,000 - $85,000',
    experience: 'Mid Level',
    description: 'Support our HR operations including recruitment, onboarding, and employee relations.',
    requirements: [
      'Bachelor\'s degree in Human Resources or related field',
      'Knowledge of HR policies, procedures, and regulations',
      'Excellent interpersonal and communication skills',
      'Experience with HRIS systems'
    ],
    postedDate: '2023-07-30',
    logo: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=250&auto=format&fit=crop'
  },
  {
    id: '12',
    title: 'Mobile Developer',
    company: 'AppMakers',
    location: 'Remote',
    type: 'Contract',
    category: 'Engineering',
    salary: '$95/hour',
    experience: 'Senior Level',
    description: 'Develop mobile applications for iOS and Android platforms using React Native.',
    requirements: [
      'Strong experience with React Native and mobile development',
      'Knowledge of native modules and mobile-specific considerations',
      'Experience with state management in mobile applications',
      'Understanding of app store deployment processes'
    ],
    postedDate: '2023-08-01',
    logo: 'https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?q=80&w=250&auto=format&fit=crop'
  }
];

// Helper functions for working with job data
export const getUniqueLocations = (): string[] => {
  const locations = jobsData.map(job => job.location);
  return [...new Set(locations)];
};

export const getUniqueCategories = (): string[] => {
  const categories = jobsData.map(job => job.category);
  return [...new Set(categories)];
};

export const getUniqueTypes = (): string[] => {
  const types = jobsData.map(job => job.type);
  return [...new Set(types)];
};

export const getUniqueExperienceLevels = (): string[] => {
  const experiences = jobsData.map(job => job.experience);
  return [...new Set(experiences)];
};

export const filterJobs = (
  jobs: Job[],
  filters: {
    search?: string;
    location?: string;
    category?: string;
    type?: string;
    experience?: string;
  }
): Job[] => {
  return jobs.filter(job => {
    // Search filter (checks title, company, and description)
    if (
      filters.search &&
      !job.title.toLowerCase().includes(filters.search.toLowerCase()) &&
      !job.company.toLowerCase().includes(filters.search.toLowerCase()) &&
      !job.description.toLowerCase().includes(filters.search.toLowerCase())
    ) {
      return false;
    }

    // Location filter
    if (filters.location && job.location !== filters.location) {
      return false;
    }

    // Category filter
    if (filters.category && job.category !== filters.category) {
      return false;
    }

    // Job Type filter
    if (filters.type && job.type !== filters.type) {
      return false;
    }

    // Experience filter
    if (filters.experience && job.experience !== filters.experience) {
      return false;
    }

    return true;
  });
};