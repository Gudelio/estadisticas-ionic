import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HombresPage } from './hombres.page';

const routes: Routes = [
  {
    path: 'hombres',
    component: HombresPage,
    children:[
      {path:"hombrest", loadChildren:()=> import('src/app/pages/estadisticalaboral/hombrest/hombrest.module').then(res => res.HombrestPageModule)},
      {path:"hombresg", loadChildren:()=> import ('src/app/pages/estadisticalaboral/hombresg/hombresg.module').then( res => res.HombresgPageModule)},
    ]
  },
  {
    path:"",
    redirectTo: "hombres/hombrest",
    pathMatch: "full"
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HombresPageRoutingModule {}
