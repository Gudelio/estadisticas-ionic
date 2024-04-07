import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PermanentePage } from './permanente.page';

const routes: Routes = [
  {
    path: 'permanente',
    component: PermanentePage,
    children:[
      {path:"permanentet", loadChildren:()=> import('src/app/pages/estadisticalaboral/permanentet/permanentet.module').then(res => res.PermanentetPageModule)},
      {path:"permanenteg", loadChildren:()=> import ('src/app/pages/estadisticalaboral/permanenteg/permanenteg.module').then( res => res.PermanentegPageModule)},
    ]
  },
  {
    path:"",
    redirectTo: "permanente/permanentet",
    pathMatch: "full"
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PermanentePageRoutingModule {}
