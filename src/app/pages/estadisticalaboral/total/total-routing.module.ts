import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TotalPage } from './total.page';

const routes: Routes = [
  {
    path: 'total',
    component: TotalPage,
    children:[
      {path:"totalt", loadChildren:()=> import('src/app/pages/estadisticalaboral/totalt/totalt.module').then(res => res.TotaltPageModule)},
      {path:"totalg", loadChildren:()=> import ('src/app/pages/estadisticalaboral/totalg/totalg.module').then( res => res.TotalgPageModule)},
    ]
  },
  {
    path:"",
    redirectTo: "total/totalt",
    pathMatch: "full"
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TotalPageRoutingModule {}
