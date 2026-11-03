export const SKILLS = [
  {
    label: 'Frontend',
    items: [
      'TypeScript',
      'JavaScript',
      'React',
      'Next.js',
      'Vue.js',
      'Gatsby.js',
      'AngularJS',
      'jQuery',
      'Bootstrap',
      'Jamstack',
      'SCSS',
    ],
  },
  {
    label: 'Backend',
    items: ['Node.js', 'Nest.js', 'PHP', 'C++'],
  },
  {
    label: 'Database & Caching',
    items: ['MySQL', 'PostgreSQL', 'MongoDB', 'Redis'],
  },
  {
    label: 'DevOps',
    items: ['Docker'],
  },
  {
    label: 'Cloud infrastructure',
    items: ['Microsoft Azure'],
  },
  {
    label: 'Mobile',
    items: ['React Native', 'Ionic', 'Unity'],
  },
  {
    label: 'Graphics',
    items: ['Adobe Photoshop', 'Adobe Illustrator', 'Blender'],
  },
  {
    label: 'UI',
    items: ['Sketch', 'Adobe XD'],
  },
  {
    label: 'Marketing',
    items: ['Google AdWords', 'Doubleclick for Publishers'],
  },
  {
    label: 'CMS',
    items: ['Sanity', 'Strapi', 'Prismic', 'WordPress'],
  },
  {
    label: 'Industry knowledge',
    items: ['Scrum'],
  },
] as const;

export const LANGUAGES = 'English, Chinese (Cantonese, Mandarin)';

export interface CredItem {
  year: number;
  title: string;
  meta?: string;
  url?: string;
}

export const CERTIFICATIONS: CredItem[] = [
  {
    year: 2020,
    title: 'Professional Scrum Master I',
    meta: 'Scrum.org',
    url: 'https://www.scrum.org/certificates/580649',
  },
  {
    year: 2020,
    title: 'Microsoft Certified: Azure Fundamentals',
    meta: 'Microsoft',
    url: 'https://www.youracclaim.com/badges/622eae0f-df86-412a-ac15-a1e2d0c6e80d',
  },
  {
    year: 2017,
    title: 'Google AdWords Display Advertising Certification',
    meta: 'Google',
    url: 'https://www.google.com/partners/?hl=en-US#i_profile;idtf=114936479272046410029',
  },
  {
    year: 2017,
    title: 'Google Mobile Sites Certification',
    meta: 'Google',
    url: 'https://www.google.com/partners/?hl=en-US#i_profile;idtf=114936479272046410029',
  },
  {
    year: 2016,
    title: 'Google AdWords Search Advertising Certification',
    meta: 'Google',
    url: 'https://www.google.com/partners/?hl=en-US#i_profile;idtf=114936479272046410029',
  },
];

export const AWARDS: CredItem[] = [
  {
    year: 2011,
    title: 'Second Runner-up Award',
    meta: 'Cisco Hong Kong & Macau Youth Networking Skills Competition',
  },
];

export interface Talk {
  year: number;
  title: string;
  venue?: string;
  url?: string;
}

export const TALKS: Talk[] = [
  {
    year: 2020,
    title: 'Web Accessibility',
    url: 'https://github.com/andrewmmc/share/blob/master/20200521-web-accessibility/index.pdf',
  },
  {
    year: 2020,
    title: 'Data Visualization with Observable',
    url: 'https://github.com/andrewmmc/share/blob/master/20200320-observable/index.pdf',
  },
  {
    year: 2019,
    title: 'Why we build our UI library?',
    venue: 'Show Me The Code Meetup #9',
    url: 'https://github.com/andrewmmc/share/blob/master/20190301-ui-library/README.md',
  },
  {
    year: 2016,
    title: 'Arming Your Idea: Digital Media Design & Marketing',
    venue: 'Lingnan University',
  },
  {
    year: 2016,
    title: 'Fall in Love to Tech: Build Your Own App as an Entrepreneur',
    venue: 'Lingnan University',
  },
];
