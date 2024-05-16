import { Routes } from '@angular/router';
import {HomeComponent} from "./pages/home/home.component";
import {AboutComponent} from "./pages/about/about.component";
import {MeServicesComponent} from "./pages/me-services/me-services.component";
import {DigitalDesignComponent} from "./pages/digital-design/digital-design.component";
import {SubpageDesignWebComponent} from "./pages/subpages/subpage-design-web/subpage-design-web.component";
import {BriefcaseComponent} from "./pages/briefcase/briefcase.component";
import {BlogComponent} from "./pages/blog/blog.component";
import {ContactUsComponent} from "./pages/contact-us/contact-us.component";
import {BlogDetailComponent} from "./pages/blog-detail/blog-detail.component";

export const routes: Routes = [
  {
    path: 'inicio',
    component: HomeComponent
  },
  {
    path: 'quienes-somos',
    component: AboutComponent,
    data: {title: 'Conoce a Cuackcolombia: Nuestra Historia y Valores', description: 'En Cuackcolombia, somos más que una agencia de publicidad. Descubre nuestra historia, nuestra pasión inquebrantable por el diseño gráfico y cómo estamos redefiniendo el estándar en la industria publicitaria en Colombia.'}
  },
  {
    path: 'nuestros-servicios',
    component: MeServicesComponent
  },
  {
    path: 'diseno-digital/:id',
    component: DigitalDesignComponent
  },
  {
    path: 'diseno-web',
    component: SubpageDesignWebComponent
  },
  {
    path: 'portafolio',
    component: BriefcaseComponent
  },
  {
    path: 'blog',
    component: BlogComponent
  },
  {
    path: 'blog/:id',
    component: BlogDetailComponent
  },
  {
    path: 'contacto',
    component: ContactUsComponent
  },
  {
    path: '',
    component: HomeComponent
  },
  {
    path: '**',
    pathMatch: 'full',
    redirectTo: '/inicio'
  }
];
