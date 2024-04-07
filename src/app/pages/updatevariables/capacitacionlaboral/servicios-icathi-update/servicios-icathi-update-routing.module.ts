import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ServiciosIcathiUpdatePage } from './servicios-icathi-update.page';

const routes: Routes = [
  {
    path: '',
    component: ServiciosIcathiUpdatePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ServiciosIcathiUpdatePageRoutingModule {}
