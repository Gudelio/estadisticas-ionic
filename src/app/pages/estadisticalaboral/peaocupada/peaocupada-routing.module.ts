import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { PEAOcupadaPage } from './peaocupada.page';

const routes: Routes = [
  {
    path: 'peaocupada',
    component: PEAOcupadaPage,
    children:[
      {path:"peaocupadat", loadChildren:()=> import('src/app/pages/estadisticalaboral/peaocupadat/peaocupadat.module').then(res => res.PEAOcupadatPageModule)},
      {path:"peaocupadag", loadChildren:()=> import ('src/app/pages/estadisticalaboral/peaocupadag/peaocupadag.module').then( res => res.PEAOcupadagPageModule)},
    ]
  },
  {
    path:"",
    redirectTo: "peaocupada/peaocupadat",
    pathMatch: "full"
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PEAOcupadaPageRoutingModule {}
