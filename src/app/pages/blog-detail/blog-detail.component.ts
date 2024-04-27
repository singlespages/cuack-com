import {Component, HostListener} from '@angular/core';
import {ActivatedRoute, Router, RouterLink, RouterLinkActive} from "@angular/router";
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
      "slug": "Explorando el mañana",
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
      contenidoDigital: {
        tituloDigital: '',
        subtituloDigital: '',
        pieDigital: '',
        extraDigital: ''
      },
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
      contenidoExtraAdicional: [],
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
      "titulo": "Delicias creativas",
      "subtitulo": '10 Estrategias de marketing para restaurantes',
      "slug": "10 Estrategias de marketing para restaurantes",
      "foto": "linear-gradient(277deg, rgba(26, 26, 26, 0.70) 46.33%, rgba(26, 26, 26, 0.00) 109.17%),url(/assets/img/post-2-bg.png)",
      "contenido": [
        {
          titulo: '10 Estrategias de Marketing para Restaurantes que Despiertan Paladares y Aumentan Clientes Felices',
          descripcion: 'En el dinámico universo de la comida rápida y las experiencias gastronómicas informales, la creatividad y la conexión con la comunidad son fundamentales. A continuación, te presento estrategias publicitarias específicas para estos establecimientos, diseñadas para atraer a clientes de manera efectiva sin requerir grandes inversiones.'
        },
      ],
      contenidoDigital: {
        tituloDigital: '',
        subtituloDigital: '',
        pieDigital: '',
        extraDigital: ''
      },
      contenidoExtra: [
        {
          titulo: '1. Ofertas de la Semana: Sabores Irresistibles, Precios Accesibles',
          contents: [
            {
              subtitulo: 'Campaña Creativa:',
              parrafo: 'Introduce ofertas especiales de la semana, como "Día del Sabor Urbano" o "Combo Especial". Ofrece precios atractivos para tus platillos más populares.'
            },
            {
              subtitulo: 'Técnica de Marketing:',
              parrafo: 'Publica las ofertas en tus redes sociales y coloca carteles visibles en tu local. La simplicidad de la campaña atrae a clientes en busca de sabores accesibles.'
            },
          ]
        },
        {
          titulo: '2. Promociones a Través de Aplicaciones Móviles: Conveniencia Digital',
          contents: [
            {
              subtitulo: 'Campaña Creativa:',
              parrafo: 'Colabora con aplicaciones de entrega de alimentos o descuentos. Ofrece promociones exclusivas para aquellos que realicen pedidos a través de estas plataformas.'
            },
            {
              subtitulo: 'Técnica de Marketing:',
              parrafo: 'Anuncia las promociones en tus redes sociales y coloca anuncios en tu local. Esto no solo aumenta la visibilidad sino que también atrae a clientes digitales.'
            },
          ]
        },
        {
          titulo: '3. Desafíos en Redes Sociales: Participación Activa de Clientes',
          contents: [
            {
              subtitulo: 'Campaña Creativa:',
              parrafo: 'Crea desafíos en redes sociales relacionados con tu comida, como "La Mejor Foto de tu Plato Favorito". Incentiva a los clientes a participar con premios modestos.'
            },
            {
              subtitulo: 'Técnica de Marketing:',
              parrafo: 'Promociona los desafíos en tus redes sociales y destaca las contribuciones de los clientes. La participación activa aumenta la visibilidad de tu marca.'
            },
          ]
        },
        {
          titulo: '4. Programa de Lealtad Sencillo: Recompensas para Clientes Frecuentes',
          contents: [
            {
              subtitulo: 'Campaña Creativa:',
              parrafo: 'Establece un programa de lealtad simple. Ofrece descuentos o productos gratuitos después de un cierto número de visitas.'
            },
            {
              subtitulo: 'Técnica de Marketing:',
              parrafo: 'Publicita tu programa de lealtad en el punto de venta y en redes sociales. Este enfoque sencillo motiva la repetición de negocios.'
            },
          ]
        },
        {
          titulo: '5. Colaboración con Empresas Locales: Alianzas de Sabor Urbano',
          contents: [
            {
              subtitulo: 'Campaña Creativa:',
              parrafo: 'Colabora con negocios locales para crear ofertas combinadas. Por ejemplo, asociarse con una heladería local para ofrecer un "Combo de Sabor Urbano'
            },
            {
              subtitulo: 'Técnica de Marketing:',
              parrafo: 'Anuncia estas colaboraciones en tus redes sociales y en los establecimientos asociados. El marketing cruzado es una estrategia rentable.'
            },
          ]
        },
        {
          titulo: '6. Cupones Impresos: Publicidad a la Antigua',
          contents: [
            {
              subtitulo: 'Campaña Creativa:',
              parrafo: 'Diseña cupones impresos con descuentos exclusivos. Distribúyelos localmente en áreas cercanas al epicentro de tu sabor urbano.'
            },
            {
              subtitulo: 'Técnica de Marketing:',
              parrafo: 'Coloca los cupones en lugares estratégicos, como tableros de anuncios locales. Esta táctica tradicional sigue siendo efectiva.'
            },
          ]
        },
        {
          titulo: '7. Especiales de Happy Hour: Sabor y Diversión a un Precio Accesible',
          contents: [
            {
              subtitulo: 'Campaña Creativa:',
              parrafo: 'Introduce "Horas Felices" con descuentos en ciertos platillos o combos durante ciertos horarios.'
            },
            {
              subtitulo: 'Técnica de Marketing:',
              parrafo: 'Publicita los especiales de Happy Hour en redes sociales y coloca carteles visibles en tu local. Esta estrategia atrae a aquellos en busca de ofertas.'
            },
          ]
        },
        {
          titulo: '8. Participación en Eventos Locales: Presencia en la Comunidad',
          contents: [
            {
              subtitulo: 'Campaña Creativa:',
              parrafo: 'Participa en eventos locales, como ferias o mercados urbanos. Ofrece muestras gratuitas o descuentos especiales durante estos eventos.'
            },
            {
              subtitulo: 'Técnica de Marketing:',
              parrafo: 'Anuncia tu participación en redes sociales y sitio web. La presencia local refuerza la conexión con la comunidad.'
            },
          ]
        },
        {
          titulo: '9. Publicidad en Redes Sociales Locales: Segmentación Eficiente',
          contents: [
            {
              subtitulo: 'Campaña Creativa:',
              parrafo: 'Utiliza publicidad pagada en redes sociales para llegar a tu audiencia local. Segmenta anuncios para maximizar la eficiencia.'
            },
            {
              subtitulo: 'Técnica de Marketing:',
              parrafo: 'Establece campañas publicitarias específicas para tu área local. Este enfoque maximiza la visibilidad en tu comunidad.'
            },
          ]
        },
        {
          titulo: '10. Simplicidad en el Menú: Enfócate en lo Esencial',
          contents: [
            {
              subtitulo: 'Campaña Creativa:',
              parrafo: 'Simplifica tu menú y destaca tus platillos más populares y únicos. Crea un sentido de especialidad y calidad urbana.'
            },
            {
              subtitulo: 'Técnica de Marketing:',
              parrafo: 'Anuncia la simplificación del menú en redes sociales y coloca letreros visibles en tu local. La simplicidad puede destacar y atraer a clientes indecisos.'
            },
          ]
        },

      ],
      pieExtra: 'Estas estrategias están diseñadas para destacar la accesibilidad y la creatividad, ajustándose a los presupuestos más modestos de restaurantes de comida rápida y experiencias gastronómicas únicas. ¡Experimenta con estas ideas y encuentra las que mejor se adapten a tu establecimiento!',
      contenidoAdicional: [],
      contenidoExtraAdicional: [],
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
      "titulo": "Revitalizando contenidos:",
      "subtitulo": 'Potenciando el contenido con IA',
      "slug": "Potenciando el contenido con IA",
      "foto": "linear-gradient(277deg, rgba(26, 26, 26, 0.70) 46.33%, rgba(26, 26, 26, 0.00) 109.17%),url(/assets/img/post-3-bg.png)",
      "contenido": [
        {
          titulo: 'Desenterrando Tesoros Digitales: Transformando Historias con la Magia de la Inteligencia Artificial.',
        },
      ],
      contenidoDigital: {
        tituloDigital: 'En un universo digital en constante evolución, el marketing ha evolucionado hacia una sofisticación sin precedentes, con la Inteligencia Artificial (IA) emergiendo como una fuerza transformadora. La IA en el marketing no es simplemente una tendencia, sino una revolución que redefine por completo la conexión entre las empresas y sus audiencias. Este artículo desentrañará el fascinante mundo del marketing potenciado por la IA, desmitificando su esencia, desvelando su funcionamiento, y explorando por qué se ha convertido en el cimiento del futuro del marketing digital.',
        subtituloDigital: 'Descubriendo el Marketing Basado en IA El Marketing Basado en IA implica la aplicación de algoritmos avanzados y análisis predictivos para comprender los comportamientos del consumidor y personalizar las interacciones de manera precisa y relevante. En lugar de depender de enfoques genéricos, la IA permite a las empresas analizar extensos volúmenes de datos para identificar patrones sutiles y tendencias que de otra manera serían difíciles de detectar.',
        pieDigital: 'El Proceso:',
        extraDigital: 'La Ciencia que Impulsa la Inteligencia Artificial En el núcleo del Marketing Basado en IA se encuentra el aprendizaje automático, un subcampo de la IA que habilita a las máquinas para mejorar su rendimiento a través de la experiencia. Los algoritmos de aprendizaje automático analizan datos históricos y actuales para prever comportamientos futuros. Esto permite a las empresas tomar decisiones más informadas y personalizar estrategias de marketing de manera única para cada cliente. '
      },
      contenidoEstrategico: [
        {
          imagen: '/assets/img/post-principal-2.png',
          titulo: 'Integración Estratégica de la IA en tus Campañas',
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

      ],
      contenidoExtraAdicional : [
        {
          titulo: 'Ventajas',
          subtitulo: 'El Marketing Basado en IA ofrece beneficios significativos que transforman el panorama del marketing digital:',
          articulo: 'Personalización Avanzada: La IA facilita experiencias de usuario altamente personalizadas, desde recomendaciones de productos hasta mensajes promocionales específicos, aumentando la satisfacción del cliente y la lealtad.',
          contents: [
            {
              descripcion: 'Optimización de Campañas: Los algoritmos de IA analizan datos de campañas pasadas para identificar estrategias efectivas, maximizando el retorno de la inversión y mejorando continuamente el rendimiento futuro.'
            },
            {
              descripcion: 'Análisis Predictivo: La capacidad de prever tendencias y comportamientos del consumidor permite a las empresas anticipar necesidades y adaptar estrategias, proporcionando una ventaja competitiva.'
            },
            {
              descripcion: 'Eficiencia Operativa: La automatización impulsada por la IA reduce la carga de trabajo manual, permitiendo a los profesionales centrarse en actividades estratégicas y creativas, optimizando recursos y aumentando la productividad.'
            },
            {
              descripcion: 'Retención de Clientes: La personalización y la anticipación de necesidades, posibles gracias a la IA, contribuyen a una mayor satisfacción del cliente y retención.'
            },
          ],
          piePagina: 'Crecimiento Sostenible: Al utilizar la IA para optimizar estrategias de marketing, las empresas pueden experimentar un crecimiento sostenible a largo plazo, adaptándose a las cambiantes preferencias del mercado. El Marketing Potenciado por IA no es solo una opción; es el futuro indiscutible del marketing digital.',
          subpie: 'Al adoptar esta tecnología innovadora y aprovechar su capacidad para personalizar, prever y optimizar, las empresas pueden establecer conexiones más profundas con sus audiencias. Aquellos que abrazan el Marketing Basado en IA no solo se mantendrán al día con la evolución del mercado, sino que también liderarán el camino hacia un futuro más inteligente y conectado en el mundo del marketing digital.',
          extrapie: 'El impacto de la Inteligencia Artificial puede llevar tus estrategias de marketing al siguiente nivel, creando un futuro más brillante y prometedor para tu empresa en el mundo digital en constante cambio.',
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

  ]


  isMenuOpen: boolean = false;

  screenWidth!: number;

  constructor(private router: Router, private route: ActivatedRoute) {
    this.screenWidth = window.innerWidth;
    this.route.paramMap.subscribe(params => {
      const id = params.get('id');
     const post = this.posts.filter((post: any) => {
        if (post.slug == id) {
          //console.log(post)
          return post
        }
      }).reduce((prev: any, curr: any) => {
       Object.assign(prev, curr);
       return prev;
     }, {});

     this.posts = post;
      console.log(this.posts)

    })
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
