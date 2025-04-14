export interface Candidate {
  id: string;
  name: string;
  position: string;
  skills: string[];
  experience: number;
  availability: string;
  location: string;
  profileImage: string;
}

export interface Mission {
  id: string;
  title: string;
  company: string;
  location: string;
  duration: string;
  salary: string;
  description: string;
  requiredSkills: string[];
  postedDate: string;
  companyLogo: string;
}

export interface Statistic {
  label: string;
  value: number;
  icon: string;
  change: number;
}

export const mockCandidates: Candidate[] = [
  {
    id: '1',
    name: 'Sophie Martin',
    position: 'Développeuse Web',
    skills: ['JavaScript', 'React', 'Node.js', 'TypeScript'],
    experience: 3,
    availability: 'Immédiate',
    location: 'Lyon',
    profileImage: 'https://randomuser.me/api/portraits/women/44.jpg'
  },
  {
    id: '2',
    name: 'Thomas Dubois',
    position: 'Designer UX/UI',
    skills: ['Figma', 'Adobe XD', 'Sketch', 'Prototypage'],
    experience: 5,
    availability: 'Dans 2 semaines',
    location: 'Paris',
    profileImage: 'https://randomuser.me/api/portraits/men/32.jpg'
  },
  {
    id: '3',
    name: 'Émilie Leroy',
    position: 'Cheffe de Projet Digital',
    skills: ['Gestion de projet', 'Agile', 'Scrum', 'Jira'],
    experience: 7,
    availability: 'Dans 1 mois',
    location: 'Bordeaux',
    profileImage: 'https://randomuser.me/api/portraits/women/68.jpg'
  },
  {
    id: '4',
    name: 'Lucas Bernard',
    position: 'Développeur Mobile',
    skills: ['Swift', 'Kotlin', 'Flutter', 'React Native'],
    experience: 4,
    availability: 'Immédiate',
    location: 'Marseille',
    profileImage: 'https://randomuser.me/api/portraits/men/55.jpg'
  },
  {
    id: '5',
    name: 'Julie Moreau',
    position: 'Data Analyst',
    skills: ['Python', 'SQL', 'Tableau', 'Power BI'],
    experience: 2,
    availability: 'Dans 3 semaines',
    location: 'Lille',
    profileImage: 'https://randomuser.me/api/portraits/women/33.jpg'
  }
];

export const mockMissions: Mission[] = [
  {
    id: '1',
    title: 'Développeur Frontend React',
    company: 'TechSolutions',
    location: 'Paris',
    duration: '3 mois',
    salary: '500€ / jour',
    description: 'Nous recherchons un développeur frontend React expérimenté pour travailler sur notre plateforme e-commerce. Vous serez responsable de l\'implémentation de nouvelles fonctionnalités et de l\'amélioration de l\'expérience utilisateur.',
    requiredSkills: ['React', 'TypeScript', 'CSS', 'Redux'],
    postedDate: '14/04/2025',
    companyLogo: 'https://logo.clearbit.com/techsolutions.com'
  },
  {
    id: '2',
    title: 'Designer UX/UI',
    company: 'CreativeAgency',
    location: 'Lyon',
    duration: '6 mois',
    salary: '450€ / jour',
    description: 'Rejoignez notre équipe créative pour concevoir des interfaces utilisateur innovantes pour nos clients dans le secteur du luxe. Vous travaillerez en étroite collaboration avec les développeurs et les chefs de projet.',
    requiredSkills: ['Figma', 'Adobe XD', 'Prototypage', 'Design System'],
    postedDate: '12/04/2025',
    companyLogo: 'https://logo.clearbit.com/creativeagency.io'
  },
  {
    id: '3',
    title: 'Chef de Projet Digital',
    company: 'InnovationLab',
    location: 'Bordeaux',
    duration: '12 mois',
    salary: '550€ / jour',
    description: 'Nous cherchons un chef de projet digital pour gérer le développement de notre nouvelle application mobile. Vous serez responsable de la coordination entre les équipes de design, de développement et de marketing.',
    requiredSkills: ['Gestion de projet', 'Agile', 'Scrum', 'Communication'],
    postedDate: '10/04/2025',
    companyLogo: 'https://logo.clearbit.com/innovationlab.fr'
  },
  {
    id: '4',
    title: 'Développeur Backend Node.js',
    company: 'DataFlow',
    location: 'Marseille',
    duration: '4 mois',
    salary: '480€ / jour',
    description: 'Participez au développement de notre API REST pour notre plateforme SaaS. Vous serez chargé d\'implémenter de nouvelles fonctionnalités et d\'optimiser les performances de notre backend.',
    requiredSkills: ['Node.js', 'Express', 'MongoDB', 'API REST'],
    postedDate: '08/04/2025',
    companyLogo: 'https://logo.clearbit.com/dataflow.io'
  },
  {
    id: '5',
    title: 'Data Scientist',
    company: 'AnalyticsPro',
    location: 'Lille',
    duration: '6 mois',
    salary: '520€ / jour',
    description: 'Rejoignez notre équipe d\'analyse de données pour développer des modèles prédictifs pour nos clients du secteur financier. Vous travaillerez sur des projets variés utilisant le machine learning et l\'intelligence artificielle.',
    requiredSkills: ['Python', 'Machine Learning', 'SQL', 'Statistiques'],
    postedDate: '05/04/2025',
    companyLogo: 'https://logo.clearbit.com/analyticspro.com'
  }
];

export const mockStatistics: Statistic[] = [
  {
    label: 'Candidats inscrits',
    value: 1250,
    icon: 'users',
    change: 12
  },
  {
    label: 'Missions actives',
    value: 348,
    icon: 'briefcase',
    change: 8
  },
  {
    label: 'Entreprises partenaires',
    value: 187,
    icon: 'building',
    change: 5
  },
  {
    label: 'Taux de placement',
    value: 78,
    icon: 'chart-line',
    change: 3
  }
];
