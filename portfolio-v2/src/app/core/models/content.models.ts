export type CardSize = 'lg' | 'md' | 'sm';

export interface TechTag {
  label: string;
  icon?: string; // ruta relativa dentro de assets/icons/
}

export interface LinkRef {
  label: string;
  url: string;
  external?: boolean; // true = target="_blank"
}

export interface SocialLink {
  label: string;
  url: string;
  icon: string;
}

export interface Profile {
  fullName: string;
  role: string;
  photo: string;
  shortBio: string;
  cvUrl: string;
  email: string;
  socials: SocialLink[];
}

export interface Experience {
  id: string; // slug: 'griba-sas', usado en /experiencia/:id
  title: string;
  organization: string;
  period: string;
  logo: string;
  shortDescription: string;
  fullDescription: string[]; // un string por párrafo
  stack: TechTag[];
  cardSize: CardSize;
  links?: LinkRef[];
  current?: boolean;
}

export interface Project {
  id: string; // slug: 'boeris-creaciones', usado en /proyecto/:id
  title: string;
  category: 'production' | 'personal' | 'academic';
  period: string;
  logo: string;
  shortDescription: string;
  fullDescription: string[];
  stack: TechTag[];
  cardSize: CardSize;
  links?: LinkRef[];
  featured?: boolean; // usado para destacar visualmente en el bento
}