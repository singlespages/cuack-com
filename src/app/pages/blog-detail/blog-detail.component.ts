import {Component, HostListener} from '@angular/core';
import {Router, RouterLink, RouterLinkActive} from "@angular/router";
import {NavMobileComponent} from "../nav-mobile/nav-mobile.component";
import {NgForOf, NgIf} from "@angular/common";
import {FooterComponent} from "../footer/footer.component";

@Component({
  selector: 'app-blog-detail',
  standalone: true,
  imports: [
    RouterLink,
    RouterLinkActive,
    NavMobileComponent,
    NgIf,
    NgForOf,
    FooterComponent
  ],
  templateUrl: './blog-detail.component.html',
  styleUrl: './blog-detail.component.scss'
})
export class BlogDetailComponent {

  public posts: any  =  [
    {
      "titulo": "Explorando el mañana:",
      "subtitulo": 'Marketing potenciado por IA',
      "slug": "titulo-del-post",
      "foto": "linear-gradient(277deg, rgba(26, 26, 26, 0.70) 46.33%, rgba(26, 26, 26, 0.00) 109.17%),url(/assets/img/post-1-bg.png)",
      "contenido": [
        {
          titulo: 'Explorando el Mañana: Potenciando el Marketing con Inteligencia Artificial',
          descripcion: 'En la era digital en constante evolución, el marketing se ha convertido en una disciplina cada vez más sofisticada. En particular, la Inteligencia Artificial (IA) ha emergido como una fuerza transformadora que va más allá de ser simplemente una tendencia; es una revolución que redefine por completo la manera en que las empresas se conectan con sus audiencias.'
        },
        {
          subtitulo: '¿Qué es el Marketing Potenciado por IA?',
          descripcion: 'El Marketing Potenciado por IA implica el uso de algoritmos complejos y análisis predictivos para comprender los comportamientos del consumidor y personalizar las interacciones de manera precisa y relevante. En lugar de depender de enfoques genéricos, la IA permite a las empresas analizar grandes volúmenes de datos para identificar patrones sutiles y tendencias que de otra manera serían difíciles de detectar.'
        },
        {
          subtitulo: 'El Motor: Ciencia Detrás de la Inteligencia Artificial',
          descripcion: 'En el corazón del Marketing Potenciado por IA se encuentra el aprendizaje automático, un subcampo de la IA que permite a las máquinas mejorar su rendimiento a través de la experiencia. Los algoritmos de aprendizaje automático analizan datos históricos y actuales para prever comportamientos futuros, permitiendo a las empresas tomar decisiones más informadas y personalizar estrategias de marketing de manera única para cada cliente.'
        },
      ],
      contenidoPrincipal: [
        {
          imagen: '/assets/img/post-principal-1.png',
          titulo: 'Implementación Exitosa del Marketing Potenciado por IA',
          subtitulo: 'La implementación de estrategias de Marketing Potenciado por IA requiere una cuidadosa integración y consideración:',
          contents: [
            {
              titulo: 'Evaluación de Datos:',
              descripcion: 'Analizar datos pasados y presentes para identificar patrones y comportamientos del consumidor que puedan aprovecharse mediante algoritmos de IA.'
            },
            {
              titulo: 'Selección de Herramientas:',
              descripcion: 'Explorar y seleccionar las herramientas de IA adecuadas que se alineen con los objetivos de marketing, desde chatbots impulsados por IA hasta plataformas de análisis predictivo.'
            },
            {
              titulo: 'Capacitación del Equipo:',
              descripcion: 'Asegurar que el equipo de marketing esté familiarizado con las nuevas herramientas y técnicas, fomentando una comprensión profunda de cómo la IA puede mejorar las estrategias existentes.'
            },
            {
              titulo: 'Pruebas y Optimización Continua:',
              descripcion: 'Implementar pruebas piloto y ajustar estrategias según los resultados obtenidos, aprovechando la capacidad de la IA para adaptarse y mejorar constantemente.'
            },
            {
              titulo: 'Automatización Inteligente:',
              descripcion: 'Utilizar la IA para automatizar tareas repetitivas y procesos complejos, mejorando la eficiencia operativa y permitiendo al equipo enfocarse en iniciativas estratégicas.'
            },
            {
              titulo: 'Monitoreo y Análisis Continuo:',
              descripcion: 'Establecer sistemas de monitoreo para evaluar el rendimiento de las campañas basadas en IA y ajustarlas según la retroalimentación en tiempo real, optimizando así los resultados.'
            },
          ]
        }
      ],
      contenidoAdicional: [
        {
          titulo: 'Beneficios de Adoptar el Marketing Potenciado por IA',
          subtitulo: 'El Marketing Potenciado por IA ofrece beneficios significativos que están transformando el panorama del marketing digital:',
          contents: [
            {
              titulo: 'Personalización Avanzada:',
              descripcion: 'La IA permite experiencias de usuario altamente personalizadas, aumentando la satisfacción del cliente y la lealtad a la marca.'
            },
            {
              titulo: 'Optimización de Campañas:',
              descripcion: 'Algoritmos de IA maximizan el retorno de inversión y mejoran continuamente el rendimiento de campañas futuras.'
            },
            {
              titulo: 'Análisis Predictivo:',
              descripcion: 'La capacidad de prever tendencias y comportamientos del consumidor permite a las empresas anticipar las necesidades del mercado.'
            },
            {
              titulo: 'Eficiencia Operativa:',
              descripcion: 'La automatización impulsada por la IA reduce la carga de trabajo manual, optimizando recursos y aumentando la productividad.'
            },
            {
              titulo: 'Retención de Clientes:',
              descripcion: ' La personalización y la anticipación de necesidades, posibles gracias a la IA, contribuyen a una mayor satisfacción del cliente y retención.'
            },
          ],
          piePagina: 'En conclusión, el Marketing Potenciado por IA no es simplemente una opción; es el futuro del marketing digital. Aquellos que adoptan esta tecnología innovadora liderarán el camino hacia un futuro más inteligente y conectado en el mundo del marketing digital, estableciendo conexiones más profundas con sus audiencias en un mundo digital en constante cambio.\n',
          subpie: 'El poder de la Inteligencia Artificial puede llevar tus estrategias de marketing al siguiente nivel, creando así un futuro más brillante y prometedor para tu empresa en este emocionante viaje hacia lo que está por venir.'
        }
      ],
      "metadata": {
        "descripcion": "Breve descripción del contenido del post para SEO",
        "palabras_clave": ["keyword1", "keyword2", "keyword3"],
        "autor": "Nombre del autor del post",
        "fecha_publicacion": "Fecha de publicación del post en formato YYYY-MM-DD",
        "categoria": "Categoría del post",
        "etiquetas": ["etiqueta1", "etiqueta2", "etiqueta3"]
      }
    },
    {
      "titulo": "Título del segundo post",
      "slug": "titulo-del-segundo-post",
      "foto": "url_de_la_imagen2.jpg",
      "contenido": "Contenido del segundo post...",
      "metadata": {
        "descripcion": "Breve descripción del contenido del segundo post para SEO",
        "palabras_clave": ["keyword4", "keyword5", "keyword6"],
        "autor": "Nombre del autor del segundo post",
        "fecha_publicacion": "Fecha de publicación del segundo post en formato YYYY-MM-DD",
        "categoria": "Categoría del segundo post",
        "etiquetas": ["etiqueta4", "etiqueta5", "etiqueta6"]
      }
    }
  ]

  isMenuOpen: boolean = false;

  screenWidth!: number;

  constructor(private router: Router) {
    this.screenWidth = window.innerWidth;
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.screenWidth = window.innerWidth;
  }

  scrollToTop() {
    window.scrollTo(0, 0);
  }

  navigateTo(route: string) {
    this.router.navigateByUrl(route);
    this.scrollToTop();
  }

  toggleMenu(event: Event): void {
    event.preventDefault();
    this.isMenuOpen = !this.isMenuOpen;
  }




}
