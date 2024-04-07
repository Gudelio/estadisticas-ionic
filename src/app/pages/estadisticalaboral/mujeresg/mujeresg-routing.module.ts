import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MujeresgPage } from './mujeresg.page';

const routes: Routes = [
  {
    path: '',
    component: MujeresgPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MujeresgPageRoutingModule {}
