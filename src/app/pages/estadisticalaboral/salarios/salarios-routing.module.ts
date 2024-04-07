import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SalariosPage } from './salarios.page';

const routes: Routes = [
  {
    path: 'salarios',
    component: SalariosPage,
    children:[
      {path:"salariost", loadChildren:()=> import('src/app/pages/estadisticalaboral/salariost/salariost.module').then(res => res.SalariostPageModule)},
      {path:"salariosg", loadChildren:()=> import ('src/app/pages/estadisticalaboral/salariosg/salariosg.module').then( res => res.SalariosgPageModule)},
    ]
  },
  {
    path:"",
    redirectTo: "salarios/salariost",
    pathMatch: "full"
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SalariosPageRoutingModule {}

