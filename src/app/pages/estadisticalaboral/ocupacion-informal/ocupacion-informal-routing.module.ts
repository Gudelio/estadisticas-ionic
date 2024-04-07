import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OcupacionInformalPage } from './ocupacion-informal.page';

const routes: Routes = [
  {
    path: 'ocupacion-informal',
    component: OcupacionInformalPage,
    children:[
      {path:"ocupacion-informalt", loadChildren:()=> import('src/app/pages/estadisticalaboral/ocupacion-informalt/ocupacion-informalt.module').then(res => res.OcupacionInformaltPageModule)},
      {path:"ocupacion-informalg", loadChildren:()=> import ('src/app/pages/estadisticalaboral/ocupacion-informalg/ocupacion-informalg.module').then( res => res.OcupacionInformalgPageModule)},
    ]
  },
  {
    path:"",
    redirectTo: "ocupacion-informal/ocupacion-informalt",
    pathMatch: "full"
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OcupacionInformalPageRoutingModule {}
