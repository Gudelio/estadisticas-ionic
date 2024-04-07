import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { JuntaLocalUpdatePage } from './junta-local-update.page';

const routes: Routes = [
  {
    path: '',
    component: JuntaLocalUpdatePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class JuntaLocalUpdatePageRoutingModule {}
