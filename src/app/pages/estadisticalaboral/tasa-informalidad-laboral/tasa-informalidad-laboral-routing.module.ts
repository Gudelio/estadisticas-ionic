import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TasaInformalidadLaboralPage } from './tasa-informalidad-laboral.page';

const routes: Routes = [
  {
    path: 'tasa-informalidad-laboral',
    component: TasaInformalidadLaboralPage,
    children:[
      {path:"tasa-informalidad-laboralt", loadChildren:()=> import('src/app/pages/estadisticalaboral/tasa-informalidad-laboralt/tasa-informalidad-laboralt.module').then(res => res.TasaInformalidadLaboraltPageModule)},
      {path:"tasa-informalidad-laboralg", loadChildren:()=> import ('src/app/pages/estadisticalaboral/tasa-informalidad-laboralg/tasa-informalidad-laboralg.module').then( res => res.TasaInformalidadLaboralgPageModule)},
    ]
  },
  {
    path:"",
    redirectTo: "tasa-informalidad-laboral/tasa-informalidad-laboralt",
    pathMatch: "full"
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TasaInformalidadLaboralPageRoutingModule {}
