import { Profile } from '../models/content.models';

export const PROFILE: Profile = {
  fullName: 'Ignacio Tomás Alvarez Gonzalez',
  role: $localize`:@@profile.role:Ingeniero en Computación · Backend & Arquitectura de Software`,
  photo: 'assets/img/profile.jpg',
  shortBio: $localize`:@@profile.shortBio:Desarrollo sistemas backend robustos y arquitecturas escalables full stack, con foco en .NET, MySQL y despliegue en producción.`,
  cvUrl: 'assets/files/CV-AlvarezGonzalezIgnacioTomas.pdf',
  email: 'ignaciotalgz@gmail.com',
  socials: [
    { label: 'GitHub', url: 'https://github.com/ignaciotalgz', icon: 'assets/icons/github-original.svg' },
    { label: 'LinkedIn', url: 'https://www.linkedin.com/in/ignaciotalgz/', icon: 'assets/icons/linkedin-original.svg' },
    { label: 'Email', url: 'mailto:ignaciotalgz@gmail.com', icon: 'assets/icons/gmail.svg' }
  ]
};