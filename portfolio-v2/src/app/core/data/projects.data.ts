import { Project } from '../models/content.models';

export const PROJECTS: Project[] = [
  {
    id: 'boeris-creaciones',
    title: 'BoerisCreaciones',
    category: 'production',
    period: $localize`:@@proj.boeris.period:2025 — Actualidad`,
    logo: 'assets/img/logo-boeris.png',
    featured: true,
    cardSize: 'lg',
    shortDescription: $localize`:@@proj.boeris.short:Sistema de gestión de stock y manufactura en producción real: Angular 19 SSR, .NET 9 y MySQL.`,
    fullDescription: [
      $localize`:@@proj.boeris.full.1:Nació como trabajo de graduación para la carrera de Ingeniería en Computación: diseño y documentación exhaustiva de un sistema web corporativo para gestión integral de stock, trazabilidad de materia prima y flujos de producción y ventas.`,
      $localize`:@@proj.boeris.full.2:Arquitectura en tres capas: presentación SPA con Angular 19 y TypeScript, capa de negocio RESTful en .NET 9 con C#, y persistencia en MySQL con transacciones ACID (InnoDB), vistas y stored procedures.`,
      $localize`:@@proj.boeris.full.3:Modelado completo bajo UML con PlantUML: diagramas de contexto, subsistemas, actividades para 68 casos de uso, modelo de datos y diagramas de despliegue en la nube (AWS EC2).`,
      $localize`:@@proj.boeris.full.4:Hoy el sistema está desplegado en producción real: backend en Render, base de datos en Aiven for MySQL y frontend en Vercel, incluyendo automatizaciones como reseteo semanal de datos de demo vía cron job.`
    ],
    stack: [
      { label: 'Angular 19', icon: 'assets/icons/angular.png' },
      { label: '.NET 9', icon: 'assets/icons/netcore.svg' },
      { label: 'MySQL', icon: 'assets/icons/mysql.svg' },
      { label: 'TypeScript', icon: 'assets/icons/typescript.svg' }
    ],
    links: [
      { label: $localize`:@@proj.boeris.link.demo:Ver demo en vivo`, url: 'https://boeris-creaciones-client.vercel.app', external: true },
      { label: $localize`:@@proj.boeris.link.swagger:Ver documentación API (Swagger)`, url: 'https://boeris-creaciones-backend.onrender.com/swagger', external: true },
      { label: $localize`:@@proj.boeris.link.pdf:Ver PDF de tesis`, url: 'assets/files/TG_Boeri_Alvarez.pdf', external: true }
    ]
  },
  {
    id: 'expo-app-v2',
    title: $localize`:@@proj.expoapp.title:Aplicación para Exposiciones v2`,
    category: 'personal',
    period: $localize`:@@proj.expoapp.period:En desarrollo`,
    logo: 'assets/img/logo-expoapp.svg',
    cardSize: 'md',
    shortDescription: $localize`:@@proj.expoapp.short:Migración de una aplicación multimedia de Unity hacia una PWA moderna y liviana.`,
    fullDescription: [
      $localize`:@@proj.expoapp.full.1:Reingeniería orientada a migrar la solución multimedia previa (desarrollada en Unity) hacia una arquitectura web moderna, eliminando la sobrecarga de un motor de videojuegos para una interfaz de navegación.`,
      $localize`:@@proj.expoapp.full.2:Progressive Web App (PWA) con despliegue ligero, instalación multiplataforma sin intermediarios y almacenamiento en caché eficiente para entornos con conectividad limitada.`,
      $localize`:@@proj.expoapp.full.3:Service worker con caché en dos niveles, banner de instalación personalizado interceptando beforeinstallprompt, y fallback específico para iOS Safari.`
    ],
    stack: [
      { label: 'JavaScript', icon: 'assets/icons/javascript.svg' },
      { label: 'PWA', icon: 'assets/icons/pwa.svg' },
      { label: 'Service Workers', icon: 'assets/icons/sw.svg' }
    ],
    links: [{ label: $localize`:@@proj.expoapp.link.demo:Ver demo`, url: '/jobs/ExpoAppv2/index.html', external: true }]
  },
  {
    id: 'sistema-seguimiento-envases',
    title: $localize`:@@proj.envases.title:Sistema de Seguimiento de Envases`,
    category: 'academic',
    period: $localize`:@@proj.envases.period:2023`,
    logo: 'assets/img/logo-unt.svg',
    cardSize: 'sm',
    shortDescription: $localize`:@@proj.envases.short:Análisis funcional y documentación arquitectónica UML para un sistema logístico real.`,
    fullDescription: [
      $localize`:@@proj.envases.full.1:Diseño del modelo arquitectónico y relevamiento de requerimientos para un sistema logístico de trazabilidad de envases en un entorno comercial real, desde entrevistas con el cliente hasta documentación técnica exhaustiva bajo UML.`,
      $localize`:@@proj.envases.full.2:Diagramas de casos de uso, especificaciones de escenarios, diagramas de secuencia y modelos de entidad-relación.`
    ],
    stack: [{ label: 'UML', icon: 'assets/icons/uml.svg' }],
    links: [{ label: $localize`:@@proj.envases.link.pdf:Ver PDF`, url: 'assets/files/UML_SistemaSegEnv.pdf', external: true }]
  },
  {
    id: 'android-validacion',
    title: $localize`:@@proj.android.title:Aplicación Móvil Nativa — Fundamentos Android`,
    category: 'academic',
    period: $localize`:@@proj.android.period:2022`,
    logo: 'assets/img/logo-android.svg',
    cardSize: 'sm',
    shortDescription: $localize`:@@proj.android.short:Aplicación nativa para validación de datos y gestión de estados en entornos móviles.`,
    fullDescription: [
      $localize`:@@proj.android.full.1:Evaluación final integradora para la certificación en Desarrollo de Aplicaciones Móviles: validación y comparación lógica de cadenas de texto.`,
      $localize`:@@proj.android.full.2:Consolidación del ciclo de vida de actividades en Android, manejo de estados de interfaz, validación de datos en tiempo real y gestión eficiente de recursos.`
    ],
    stack: [{ label: 'Android', icon: 'assets/icons/android.svg' }, { label: 'Java', icon: 'assets/icons/java.svg' }],
    links: [{ label: $localize`:@@proj.android.link.repo:Ver código`, url: 'https://github.com/nachoalgz/ArgProgAndroidProyectoFinal', external: true }]
  }
];