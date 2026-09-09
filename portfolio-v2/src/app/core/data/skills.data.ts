import { TechTag } from '../models/content.models';

export interface SkillGroup {
  category: string;
  items: TechTag[];
}

export const SKILLS: SkillGroup[] = [
  {
    category: $localize`:@@skills.lowlevel:Sistemas y bajo nivel`,
    items: [
      { label: 'C', icon: 'assets/icons/c-original.svg' },
      { label: 'Assembler', icon: 'assets/icons/assemblyscript.svg' },
      { label: 'UNIX', icon: 'assets/icons/unix-original.svg' }
    ]
  },
  {
    category: $localize`:@@skills.backend:Backend`,
    items: [
      { label: 'C#', icon: 'assets/icons/csharp-original.svg' },
      { label: 'Java', icon: 'assets/icons/java-original-wordmark.svg' },
      { label: '.NET', icon: 'assets/icons/dotnetcore-original.svg' },
      { label: 'PHP', icon: 'assets/icons/php-original.svg' },
      { label: 'SpringBoot', icon: 'assets/icons/springboot.svg' },
      { label: 'MAVEN', icon: 'assets/icons/maven-original.svg' },
      { label: 'JUnit', icon: 'assets/icons/junit-original.svg' },
      { label: 'Python', icon: 'assets/icons/python-original.svg' }
    ]
  },
  {
    category: $localize`:@@skills.frontend:Frontend`,
    items: [
      { label: 'Angular', icon: 'assets/icons/angular-original.svg' },
      { label: 'TypeScript', icon: 'assets/icons/typescript-original.svg' },
      { label: 'Blazor', icon: 'assets/icons/blazor-original.svg' },
      { label: 'DevExpress', icon: 'assets/icons/devexpress.svg' },
      { label: 'JavaScript', icon: 'assets/icons/javascript-original.svg' },
      { label: 'JQuery', icon: 'assets/icons/jquery-original.svg' },
      { label: 'HTML', icon: 'assets/icons/html5-original.svg' },
      { label: 'CSS', icon: 'assets/icons/css3-original.svg' },
      { label: 'Boostrap', icon: 'assets/icons/bootstrap-original.svg' },
      { label: 'Tailwind', icon: 'assets/icons/tailwindcss-original.svg' },
      { label: 'Unity', icon: 'assets/icons/unity-original.svg' }
    ]
  },
  {
    category: $localize`:@@skills.databases:Bases de datos`,
    items: [
      { label: 'MySQL', icon: 'assets/icons/mysql-original.svg' },
      { label: 'SQL Server', icon: 'assets/icons/microsoftsqlserver-original.svg' },
      { label: 'PostgreSQL', icon: 'assets/icons/postgresql-original.svg' }
    ]
  },
  {
    category: $localize`:@@skills.tools:Herramientas`,
    items: [
      { label: 'Git', icon: 'assets/icons/git-original.svg' },
      { label: 'UML', icon: 'assets/icons/unifiedmodelinglanguage-original.svg' },
      { label: 'LaTex', icon: 'assets/icons/latex-original.svg' },
    ]
  }  
];