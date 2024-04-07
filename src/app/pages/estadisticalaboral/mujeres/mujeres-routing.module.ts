import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MujeresPage } from './mujeres.page';

const routes: Routes = [
  {
    path: 'mujeres',
    component: MujeresPage,
    children:[
      {path:"mujerest", loadChildren:()=> import('src/app/pages/estadisticalaboral/mujerest/mujerest.module').then(res => res.MujerestPageModule)},
      {path:"mujeresg", loadChildren:()=> import ('src/app/pages/estadisticalaboral/mujeresg/mujeresg.module').then( res => res.MujeresgPageModule)},
    ]
  },
  {
    path:"",
    redirectTo: "mujeres/mujerest",
    pathMatch: "full"
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MujeresPageRoutingModule {}
