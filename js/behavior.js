const toggleBtn = document.getElementById('navbar-toggler');
// const aboutBtn = document.getElementById('about-button');
const worksBtn = document.getElementById('works-button');
const contactBtn = document.getElementById('contact-button');

const navLinks = document.getElementsByClassName('navbar-list');
const sectionArray = document.getElementsByTagName('section');

const form = document.querySelector('#form');
const alert = document.getElementById('alert');

toggleBtn.addEventListener('click', function () {
    for (let index = 0; index < navLinks.length; index++) {
        const element = navLinks[index];
        element.classList.toggle("active");
    }
});

worksBtn.addEventListener('click', function () {
    changeView('works');
});

contactBtn.addEventListener('click', function () {
    changeView('contact');
});

form.addEventListener('submit', submitHandler);


function changeView(viewId) {
    for (const section of sectionArray) {
        if (section == sectionArray.namedItem(viewId)) {
            section.classList.remove('hidden-section');
        } else {
            section.classList.add('hidden-section');
        }
    }
    toggleBtn.click();
}

function setActive(idWork) {
    const modal = document.getElementsByClassName('modal')[0];
    const titulo = document.getElementById('titulo-modal');
    let texto;
    while (modal.children[0].children[1].firstChild) {
        modal.children[0].children[1].removeChild(modal.children[0].children[1].firstChild);
    }
    switch (idWork) {
        case 0:
            titulo.textContent = "Web institucional de Ente Tucuman Turismo";
            texto = ["En abril del 2021 fui contratado por el Ente Tucumán Turismo para desarrollar una pagina web dinámica en la cual se mostraría información institucional a ser cargada por personal de la institución, sin conocimiento técnico, por lo cual en paralelo debió desarrollar un sistema de creación, modificación y borrado de la misma.",
                "Entonces con el equipo de IT del Ente diseñamos la base de datos con los requerimientos del area encargada de gestionar la información, luego implementamos el frontend del diseño hecho y acordado con otra area y por ultimo diseñamos e implementamos el sistema de carga de información",
                "La base de datos sea diseño según el modelo relacional, en el motor MySQL, ademas de los respectivos usuarios de lectura, escritura y administración, se generaron vistas y procedimientos almacenados para la obtención de los datos",
                "El frontend fue desarrollado con Bootstrap y Jquery como únicos frameworks y el backend con PHP nativo, ambos mediante la arquitectura cliente-servidor, basados en el patron de diseño Modelo, vista, controlador (MVC)."
            ];
            texto.forEach(parrafo => {
                const p = document.createElement('p');
                p.textContent = parrafo;
                modal.children[0].children[1].appendChild(p);
            });
            break;
        case 1:
            titulo.textContent = "Aplicación para exposiciones";
            texto = ["A pedido de la presidencia del Ente Tucumán Turismo, se desarrollo la siguiente aplicacion a fin de presentar videos promocionales de algunas areas de la provincia, con la posibilidad de elegir entre 6 temas a desarrollar en cada conferencia",
                "Debido al corto tiempo dado para el desarrollo y el requisito de ser soportado en todas las plataformas, se opto por desarrollarla mediante el motor de videojuegos Unity, encargandome personalmente del mismo",
                "Durante el desarrollo del proyecto, asumí un rol central en la implementación y gestión del motor subyacente en el que se basaba nuestra aplicación. Esta responsabilidad surgió naturalmente debido a mi experiencia previa con el motor y mi profundo conocimiento de su funcionamiento. Trabajar en estrecha colaboración con mis compañeros de equipo, me dediqué en un 95% a esta tarea específica, lo que nos permitió avanzar de manera eficiente en esta área crítica del proyecto.",
                "Cabe destacar que este enfoque no se debió a una falta de confianza en el equipo, sino más bien a la sinergia que creamos al aprovechar nuestras habilidades individuales. La distribución de tareas se basó en la especialización de cada miembro y en la necesidad de cumplir los plazos (10 días) y requisitos del proyecto de manera efectiva. Mi objetivo siempre fue apoyar a mis colegas y garantizar que cada uno pudiera destacar en sus áreas de experiencia."
            ];
            texto.forEach(parrafo => {
                const p = document.createElement('p');
                p.textContent = parrafo;
                modal.children[0].children[1].appendChild(p);
            });
            break;
        case 2:
            titulo.textContent = "Sistema ERP Empresarial - GRIBA SAS";
            texto = [
                "Desde diciembre de 2024 formo parte del equipo técnico de GRIBA SAS, desempeñándome como Desarrollador Full Stack con foco principal en la ingeniería backend de un sistema ERP corporativo altamente distribuido.",
                "Mis responsabilidades principales abarcan el diseño y la implementación de nuevos módulos y requerimientos de negocio utilizando C# y .NET 6. Para la interfaz de usuario de las soluciones heredadas, implementamos e integramos componentes dinámicos con DevExpress 23.2.",
                "Actualmente, la empresa se encuentra en un proceso estratégico de modernización tecnológica. Formo parte del equipo encargado de migrar paulatinamente las funcionalidades core del sistema desde su entorno clásico de escritorio hacia una plataforma web unificada, adoptando Blazor como framework principal para construir interfaces SPA potentes, interactivas y directamente integradas al ecosistema .NET.",
                "A nivel de infraestructura de datos, trabajo en la optimización de la capa de persistencia mediante el análisis riguroso y la reescritura de consultas complejas, vistas y procedimientos almacenados bajo el motor SQL Server, logrando mejoras medibles en el rendimiento general y los tiempos de respuesta de los reportes críticos del sistema.",
                "Asimismo, participo en la interconexión del ERP con servicios de terceros, encargándome del diseño lógico y consumo de APIs REST de alta disponibilidad, incluyendo integraciones clave con ARCA, Mercado Libre y soluciones de comunicación automatizada como Evolution API."
            ];
            texto.forEach(parrafo => {
                const p = document.createElement('p');
                p.textContent = parrafo;
                modal.children[0].children[1].appendChild(p);
            });
            break;
        case 3:
            titulo.textContent = "Trabajo de Graduación: SGBoeris";
            texto = [
                "Para la obtención del título de Ingeniero en Computación, diseñé y documenté de forma exhaustiva un sistema web corporativo (SGBoeris) destinado a la gestión integral de stock, trazabilidad de materia prima y administración de flujos de producción y ventas.",
                "Siguiendo el estándar ANSI/IEEE 830, lideré el análisis y la especificación de requisitos complementarios del software, modelando un sistema flexible bajo un ciclo de vida de prototipado evolutivo y la metodología de desarrollo en V-Script.",
                "Diseñé la arquitectura de software estructurada en tres capas independientes: una capa de presentación basada en una aplicación Single Page (SPA) con Angular 19 y TypeScript; una capa de negocio RESTful con un servidor de aplicaciones en .NET 9.0 utilizando C#; y una capa de persistencia de datos implementada bajo el motor relacional MySQL (utilizando transacciones ACID con el motor InnoDB, vistas y stored procedures).",
                "El modelado arquitectónico completo fue desarrollado bajo el estándar UML a través de PlantUML, confeccionando diagramas de contexto, diagramas de subsistemas detallados, especificaciones textuales y diagramas de actividades para 68 casos de uso, modelado lógico-relacional de datos, diagramas de secuencia e interacciones de componentes en tiempo de ejecución representadas en diagramas de despliegue en la nube sobre instancias EC2 de AWS.",
                "Adicionalmente, se planificó y estructuró la estrategia de calidad de software mediante la implementación teórica de suites de pruebas automatizadas con el framework xUnit para .NET, cubriendo flujos de testing de unidad e integración (procesos críticos de compras, manufactura, ventas y transiciones dinámicas de estado), validados de forma exitosa junto al cliente final a través de pruebas de aceptación alfa y beta."
            ];
            texto.forEach(parrafo => {
                const p = document.createElement('p');
                p.textContent = parrafo;
                modal.children[0].children[1].appendChild(p);
            });
            break;
        default:
            break;
    }
    modal.classList.toggle('active');

}

async function submitHandler(event) {
    event.preventDefault();
    const formulario = new FormData(this);
    const response = await fetch(this.action, {
        method: this.method,
        body: formulario,
        headers: {
            'Accept': 'application/json'
        }
    });
    console.log(response);
    if (response.ok) {
        this.reset();
        alert.innerHTML = "Mensaje enviado, pronto estaré en contacto";
        alert.classList.add('alert-success');
    } else {
        alert.innerHTML = "Error al enviar, intenta más tarde";
        alert.classList.add('alert-danger');
    }
}