import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { JuntaLocalPage } from './junta-local.page';

const routes: Routes = [
  {
    path: '',
    component: JuntaLocalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class JuntaLocalPageRoutingModule {}
