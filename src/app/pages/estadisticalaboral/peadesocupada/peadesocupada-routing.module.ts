import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PEADesocupadaPage } from './peadesocupada.page';

const routes: Routes = [
  {
    path: 'peadesocupada',
    component: PEADesocupadaPage,
    children:[
      {path:"peadesocupadat", loadChildren:()=> import('src/app/pages/estadisticalaboral/peadesocupadat/peadesocupadat.module').then(res => res.PEADesocupadatPageModule)},
      {path:"peadesocupadag", loadChildren:()=> import ('src/app/pages/estadisticalaboral/peadesocupadag/peadesocupadag.module').then( res => res.PEADesocupadagPageModule)},
    ]
  },
  {
    path:"",
    redirectTo: "peadesocupada/peadesocupadat",
    pathMatch: "full"
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PEADesocupadaPageRoutingModule {}
