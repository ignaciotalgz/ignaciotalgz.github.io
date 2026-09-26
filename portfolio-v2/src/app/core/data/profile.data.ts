import { Profile } from '../models/content.models';

export const PROFILE: Profile = {
  fullName: 'Ignacio Tomás Alvarez Gonzalez',
  role: $localize`:@@profile.role:Ingeniero en Computación · Backend & Arquitectura de Software`,
  photo: 'assets/img/profile.jpg',
  shortBio: $localize`:@@profile.shortBio:Desarrollo sistemas backend robustos y arquitecturas escalables full stack, con foco en .NET, MySQL y despliegue en producción.`,
  aboutShort: $localize`:@@profile.about.short:Soy Ingeniero en Computación con foco en desarrollo backend y arquitectura de software. Trabajo hoy en GRIBA SAS desarrollando y modernizando un ERP corporativo, y en paralelo llevé BoerisCreaciones —mi proyecto de graduación— a un sistema real en producción. Combino formación académica sólida con experiencia activa en la industria: diseño APIs robustas, optimizo bases de datos relacionales y traduzco requerimientos de negocio en arquitecturas escalables y bien documentadas.`,
  aboutFull: [
    $localize`:@@profile.about.full.1:Mi formación abarca todo el ciclo de la tecnología: desarrollo de software, arquitectura de hardware de bajo nivel, diseño de redes y gestión de proyectos de TI. Esa base amplia —estructuras de datos, sistemas operativos, redes LAN/WAN, sistemas embebidos— me da una visión integral a la hora de resolver problemas de ingeniería, no solo de escribir código.`,
    $localize`:@@profile.about.full.2:En la industria me especializo en traducir requerimientos de negocio en arquitecturas limpias y documentadas: diseño APIs en el backend, capas de presentación dinámicas, y optimizo el rendimiento de bases de datos relacionales mediante procedimientos almacenados y consultas complejas. También tengo experiencia integrando sistemas con servicios externos críticos —pasarelas de pago, facturación electrónica, APIs de comunicación— bajo metodologías ágiles y buenas prácticas de control de versiones.`,
    $localize`:@@profile.about.full.3:Complemento mi formación de grado con programas intensivos de la industria para mantener un stack moderno: desde ecosistemas backend corporativos como Java/Spring Boot hasta frameworks frontend flexibles como Blazor, adaptándome tanto a entornos empresariales tradicionales como a arquitecturas multiplataforma actuales.`
  ],
  cvUrlEs: 'assets/files/CV-AlvarezGonzalezIgnacioTomas-ES.pdf',
  cvUrlEn: 'assets/files/CV-AlvarezGonzalezIgnacioTomas-EN.pdf',
  email: 'ignaciotalgz@gmail.com',
  socials: [
    { label: 'GitHub', url: 'https://github.com/ignaciotalgz', icon: 'assets/icons/github-original.svg' },
    { label: 'LinkedIn', url: 'https://www.linkedin.com/in/ignaciotalgz/', icon: 'assets/icons/linkedin-original.svg' },
    { label: 'Email', url: 'mailto:ignaciotalgz@gmail.com', icon: 'assets/icons/gmail.svg' }
  ]
};