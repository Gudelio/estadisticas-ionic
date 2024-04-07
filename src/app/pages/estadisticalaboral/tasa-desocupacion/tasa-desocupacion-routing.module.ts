import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TasaDesocupacionPage } from './tasa-desocupacion.page';

const routes: Routes = [
  {
    path: 'tasa-desocupacion',
    component: TasaDesocupacionPage,
    children:[
      {path:"tasa-desocupaciont", loadChildren:()=> import('src/app/pages/estadisticalaboral/tasa-desocupaciont/tasa-desocupaciont.module').then(res => res.TasaDesocupaciontPageModule)},
      {path:"tasa-desocupaciong", loadChildren:()=> import ('src/app/pages/estadisticalaboral/tasa-desocupaciong/tasa-desocupaciong.module').then( res => res.TasaDesocupaciongPageModule)},
    ]
  },
  {
    path:"",
    redirectTo: "tasa-desocupacion/tasa-desocupaciont",
    pathMatch: "full"
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TasaDesocupacionPageRoutingModule {}
