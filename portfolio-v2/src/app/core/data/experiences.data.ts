import { Experience } from '../models/content.models';

export const EXPERIENCES: Experience[] = [
  {
    id: 'griba-sas',
    title: $localize`:@@exp.griba.title:Desarrollador Full Stack`,
    organization: 'GRIBA SAS',
    period: $localize`:@@exp.griba.period:Dic 2024 — Actualidad`,
    logo: 'assets/icons/griba.svg',
    coverImage: 'assets/img/covers/griba-cover.webp',
    current: true,
    cardSize: 'lg',
    shortDescription: $localize`:@@exp.griba.short:Desarrollo backend en .NET 6 y migración progresiva de un ERP corporativo desde escritorio a Blazor.`,
    fullDescription: [
      $localize`:@@exp.griba.full.1:Desempeño como Desarrollador Full Stack con foco principal en la ingeniería backend de un sistema ERP corporativo altamente distribuido.`,
      $localize`:@@exp.griba.full.2:Diseño e implementación de nuevos módulos y requerimientos de negocio con C# y .NET 6. Para la interfaz de soluciones heredadas, integración de componentes dinámicos con DevExpress 23.2.`,
      $localize`:@@exp.griba.full.3:Participación activa en la modernización tecnológica: migración paulatina de funcionalidades core desde escritorio hacia una plataforma web unificada con Blazor.`,
      $localize`:@@exp.griba.full.4:Optimización de la capa de persistencia mediante análisis y reescritura de consultas complejas, vistas y procedimientos almacenados bajo SQL Server, con mejoras medibles en tiempos de respuesta.`,
      $localize`:@@exp.griba.full.5:Integración del ERP con servicios de terceros: diseño y consumo de APIs REST de alta disponibilidad (ARCA, Mercado Libre, Evolution API).`
    ],
    stack: [
      { label: '.NET 6', icon: 'assets/icons/dotnetcore-original.svg' },
      { label: 'C#', icon: 'assets/icons/csharp-original.svg' },
      { label: 'Blazor', icon: 'assets/icons/blazor-original.svg' },
      { label: 'SQL Server', icon: 'assets/icons/microsoftsqlserver-original.svg' },
      { label: 'DevExpress', icon: 'assets/icons/devexpress.svg' }
    ]
  },
  {
    id: 'ente-tucuman-turismo',
    title: $localize`:@@exp.eattv.title:Desarrollo Web Institucional`,
    organization: 'Ente Tucumán Turismo',
    period: $localize`:@@exp.eattv.period:Abril 2021`,
    logo: 'assets/img/entetucumanturismo.png',
    coverImage: 'assets/img/covers/web-eatt-cover.webp',
    cardSize: 'md',
    shortDescription: $localize`:@@exp.eattv.short:Web institucional dinámica con sistema CRUD interno para gestión de contenido y control de accesos por roles.`,
    fullDescription: [
      $localize`:@@exp.eattv.full.1:Desarrollo de una página web dinámica para mostrar información institucional, cargable por personal sin conocimiento técnico mediante un sistema propio de administración.`,
      $localize`:@@exp.eattv.full.2:Diseño de base de datos relacional en MySQL junto al equipo de IT, con usuarios diferenciados de lectura, escritura y administración, vistas y procedimientos almacenados.`,
      $localize`:@@exp.eattv.full.3:Frontend con Bootstrap y jQuery, backend en PHP nativo, arquitectura cliente-servidor bajo el patrón MVC.`
    ],
    stack: [
      { label: 'PHP', icon: 'assets/icons/php-original.svg' },
      { label: 'MySQL', icon: 'assets/icons/mysql-original.svg' },
      { label: 'JavaScript', icon: 'assets/icons/javascript-original.svg' },
      { label: 'JQuery', icon: 'assets/icons/jquery-original.svg' },
      { label: 'HTML', icon: 'assets/icons/html5-original.svg' },
      { label: 'CSS', icon: 'assets/icons/javascript-original.svg' },
      { label: 'Bootstrap', icon: 'assets/icons/bootstrap-original.svg' }
    ]
  }
];