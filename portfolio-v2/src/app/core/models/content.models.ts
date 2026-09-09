export type CardSize = 'lg' | 'md' | 'sm';

export interface TechTag {
  label: string;
  icon?: string;
}

export interface LinkRef {
  label: string;
  url: string;
  external?: boolean;
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
  aboutShort: string;
  aboutFull: string[];
  cvUrl: string;
  email: string;
  socials: SocialLink[];
}

export interface Experience {
  id: string;
  title: string;
  organization: string;
  period: string;
  logo: string;
  coverImage: string;
  shortDescription: string;
  fullDescription: string[];
  stack: TechTag[];
  cardSize: CardSize;
  links?: LinkRef[];
  current?: boolean;
}

export interface Project {
  id: string;
  title: string;
  category: 'production' | 'personal' | 'academic';
  period: string;
  logo: string;
  coverImage: string;
  shortDescription: string;
  fullDescription: string[];
  stack: TechTag[];
  cardSize: CardSize;
  links?: LinkRef[];
  featured?: boolean;
  comingSoon?: boolean;
}

export interface DetailContent {
  title: string;
  subtitle: string;
  logo: string;
  fullDescription: string[];
  stack: TechTag[];
  links?: LinkRef[];
}