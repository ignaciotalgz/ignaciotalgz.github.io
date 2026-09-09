import { Project } from '../models/content.models';

export const PROJECTS: Project[] = [
  {
    id: 'boeris-creaciones',
    title: 'BoerisCreaciones',
    category: 'production',
    period: $localize`:@@proj.boeris.period:2025 — Actualidad`,
    logo: 'assets/img/logo-boeris.png',
    coverImage: 'assets/img/covers/sgspm-cover.webp',
    featured: true,
    cardSize: 'lg',
    shortDescription: $localize`:@@proj.boeris.short:Sistema de gestión de stock y manufactura en producción real: Angular 19 SSR, .NET 9 y MySQL.`,
    fullDescription: [
      $localize`:@@proj.boeris.full.1:Nació como trabajo de graduación para la carrera de Ingeniería en Computación: diseño y documentación exhaustiva de un sistema web corporativo para gestión integral de stock, trazabilidad de materia prima y flujos de producción y ventas.`,
      $localize`:@@proj.boeris.full.2:Arquitectura en tres capas: presentación SPA con Angular 19 y TypeScript, capa de negocio RESTful en .NET 9 con C#, y persistencia en MySQL con transacciones ACID (InnoDB), vistas y stored procedures.`,
      $localize`:@@proj.boeris.full.3:Modelado completo bajo UML con PlantUML: diagramas de contexto, subsistemas, actividades para 68 casos de uso, modelo de datos y diagramas de despliegue en la nube (AWS EC2).`,
      $localize`:@@proj.boeris.full.4:Hoy el sistema cuenta con una demo pública disponible para probarlo en vivo: frontend en Vercel, backend en Render y base de datos en Aiven for MySQL.`
    ],
    stack: [
      { label: 'Angular 19', icon: 'assets/icons/angular-original.svg' },
      { label: '.NET 9', icon: 'assets/icons/dotnetcore-original.svg' },
      { label: 'MySQL', icon: 'assets/icons/mysql-original.svg' },
      { label: 'TypeScript', icon: 'assets/icons/typescript-original.svg' },
      { label: 'PrimeNG', icon: 'assets/icons/primeng-original.svg' },
      { label: 'Git', icon: 'assets/icons/git-original.svg' },
      { label: 'Git', icon: 'assets/icons/git-original.svg' },
      { label: 'UML', icon: 'assets/icons/unifiedmodelinglanguage-original.svg' }      
    ],
    links: [
      { label: $localize`:@@proj.boeris.link.demo:Ver demo en vivo`, url: 'https://boeris-creaciones-client.vercel.app', external: true },
      { label: $localize`:@@proj.boeris.link.swagger:Ver documentación API (Swagger)`, url: 'https://boeris-creaciones-backend.onrender.com/swagger', external: true },
      { label: $localize`:@@proj.boeris.link.pdf:Ver PDF de tesis`, url: 'assets/files/TG_Boeri_Alvarez.pdf', external: true }
    ]
  },
  {
    id: 'expo-app-v1',
    title: $localize`:@@proj.expoappv1.title:Aplicación para Exposiciones v1`,
    category: 'personal',
    period: $localize`:@@proj.expoappv1.period:2022`,
    logo: 'assets/img/entetucumanturismo.png',
    coverImage: 'assets/img/covers/expo-cover.webp',
    cardSize: 'sm',
    shortDescription: $localize`:@@proj.expoappv1.short:Primera versión de la aplicación multimedia para exposiciones, desarrollada sobre motor de videojuegos Unity.`,
    fullDescription: [
      $localize`:@@proj.expoappv1.full.1:Solución multimedia para pantallas de exposición, construida originalmente sobre el motor Unity, con navegación interactiva entre contenidos de video.`,
      $localize`:@@proj.expoappv1.full.2:Es una solución multiplataforma, pensada para funcionar tanto en dispositivos de escritorio como móviles. Dejé disponible una demo web para poder probarla directamente desde el navegador.`
    ],
    stack: [
      { label: 'Unity', icon: 'assets/icons/unity-original.svg' },
      { label: 'C#', icon: 'assets/icons/csharp-original.svg' }
    ],
    links: [
      { label: $localize`:@@proj.expoappv1.link.repo:Ver demo`, url: '/jobs/expoWebDemo/index.html', external: true }
    ]
  },
  {
    id: 'expo-app-v2',
    title: $localize`:@@proj.expoapp.title:Aplicación para Exposiciones v2`,
    category: 'personal',
    period: $localize`:@@proj.expoapp.period:En desarrollo`,
    logo: 'assets/icons/AlGz.svg',
    coverImage: 'assets/img/covers/expov2-cover.webp',
    cardSize: 'md',
    shortDescription: $localize`:@@proj.expoapp.short:Migración de una aplicación multimedia de Unity hacia una PWA moderna y liviana.`,
    fullDescription: [
      $localize`:@@proj.expoapp.full.1:Reingeniería orientada a migrar la solución multimedia previa (desarrollada en Unity) hacia una arquitectura web moderna, eliminando la sobrecarga de un motor de videojuegos para una interfaz de navegación.`,
      $localize`:@@proj.expoapp.full.2:Progressive Web App (PWA) con despliegue ligero, instalación multiplataforma sin intermediarios y almacenamiento en caché eficiente para entornos con conectividad limitada.`,
      $localize`:@@proj.expoapp.full.3:Service worker con caché en dos niveles, banner de instalación personalizado interceptando beforeinstallprompt, y fallback específico para iOS Safari.`
    ],
    stack: [
      { label: 'JavaScript', icon: 'assets/icons/javascript-original.svg' },
      { label: 'PWA', icon: 'assets/icons/pwa.svg' },
      { label: 'Service Workers', icon: 'assets/icons/service-worker.svg' }
    ],
    links: [{ label: $localize`:@@proj.expoapp.link.demo:Ver demo`, url: '/jobs/ExpoAppv2/index.html', external: true }]
  },
  {
    id: 'sistema-seguimiento-envases',
    title: $localize`:@@proj.envases.title:Sistema de Seguimiento de Envases`,
    category: 'academic',
    period: $localize`:@@proj.envases.period:2023`,
    logo: 'assets/img/unt.png',
    coverImage: 'assets/img/covers/facet-cover.webp',
    cardSize: 'sm',
    shortDescription: $localize`:@@proj.envases.short:Análisis funcional y documentación arquitectónica UML para un sistema logístico real.`,
    fullDescription: [
      $localize`:@@proj.envases.full.1:Diseño del modelo arquitectónico y relevamiento de requerimientos para un sistema logístico de trazabilidad de envases en un entorno comercial real, desde entrevistas con el cliente hasta documentación técnica exhaustiva bajo UML.`,
      $localize`:@@proj.envases.full.2:Diagramas de casos de uso, especificaciones de escenarios, diagramas de secuencia y modelos de entidad-relación.`
    ],
    stack: [{ label: 'UML', icon: 'assets/icons/unifiedmodelinglanguage-original.svg' }],
    links: [{ label: $localize`:@@proj.envases.link.pdf:Ver PDF`, url: 'assets/files/UML_SistemaSegEnv.pdf', external: true }]
  },
  {
    id: 'android-validacion',
    title: $localize`:@@proj.android.title:Aplicación Móvil Nativa — Fundamentos Android`,
    category: 'academic',
    period: $localize`:@@proj.android.period:2022`,
    logo: 'assets/img/covers/arg-programa-cover.webp',
    coverImage: 'assets/img/covers/arg-programa-cover.webp',
    cardSize: 'sm',
    shortDescription: $localize`:@@proj.android.short:Aplicación nativa para validación de datos y gestión de estados en entornos móviles.`,
    fullDescription: [
      $localize`:@@proj.android.full.1:Evaluación final integradora para la certificación en Desarrollo de Aplicaciones Móviles: validación y comparación lógica de cadenas de texto.`,
      $localize`:@@proj.android.full.2:Consolidación del ciclo de vida de actividades en Android, manejo de estados de interfaz, validación de datos en tiempo real y gestión eficiente de recursos.`
    ],
    stack: [{ label: 'Android Studio', icon: 'assets/icons/androidstudio-original.svg' }, { label: 'Android', icon: 'assets/icons/android-original.svg' }, { label: 'Kotlin', icon: 'assets/icons/kotlin-original.svg' }],
    links: [{ label: $localize`:@@proj.android.link.repo:Ver código`, url: 'https://github.com/nachoalgz/ArgProgAndroidProyectoFinal', external: true }]
  },
  {
    id: 'analizador-vocales',
    title: $localize`:@@proj.vocales.title:Analizador de Vocales`,
    category: 'academic',
    period: $localize`:@@proj.vocales.period:2025`,
    logo: 'assets/img/unt.png', 
    coverImage: 'assets/img/covers/facet-cover.webp',
    cardSize: 'sm',
    shortDescription: $localize`:@@proj.vocales.short:Análisis de señales de audio para detectar automáticamente qué vocal y de qué género es la persona que la pronunció.`,
    fullDescription: [
      $localize`:@@proj.vocales.full.1:Trabajo integrador de la materia Procesamiento de Señales, desarrollado en grupo, que aplica en conjunto los conceptos centrales de la asignatura: análisis temporal y en frecuencia, espectrogramas, filtrado y extracción de características de audio.`,
      $localize`:@@proj.vocales.full.2:A partir de una grabación de audio, se extrae el espectrograma y se calculan los formantes F1 y F2 de cada vocal pronunciada. La clasificación se resuelve comparando esos valores contra una tabla de referencia por vocal y género, usando distancia euclídea para encontrar la coincidencia más cercana.`,
      $localize`:@@proj.vocales.full.3:Implementado en Python con NumPy, SciPy y Matplotlib para el procesamiento de señales y la visualización de espectrogramas y espacios vocálicos.`
    ],
    stack: [
      { label: 'Python', icon: 'assets/icons/python-original.svg' },
      { label: 'NumPy', icon: 'assets/icons/numpy-original.svg' },
      { label: 'SciPy', icon: 'assets/icons/scipy.svg' },
      { label: 'Matplotlib', icon: 'assets/icons/matplotlib-original.svg' }
    ],
    links: [
      { label: $localize`:@@proj.vocales.link.docs:Ver documentación (notebook)`, url: '/notebooks/analizador-vocales.html', external: true },
      { label: $localize`:@@proj.vocales.link.demo:Ver demo interactiva`, url: '/analizador-vocales/', external: true }
    ]
  }
];