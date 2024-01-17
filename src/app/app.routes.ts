import { Routes } from '@angular/router';
import {HomeComponent} from "./pages/home/home.component";
import {AboutComponent} from "./pages/about/about.component";
import {MeServicesComponent} from "./pages/me-services/me-services.component";

export const routes: Routes = [
  {
    path: 'inicio',
    component: HomeComponent
  },
  {
    path: 'quienes-somos',
    component: AboutComponent
  },
  {
    path: 'nuestros-servicios',
    component: MeServicesComponent
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
