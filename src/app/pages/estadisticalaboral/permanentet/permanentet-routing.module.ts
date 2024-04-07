import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PermanentetPage } from './permanentet.page';

const routes: Routes = [
  {
    path: '',
    component: PermanentetPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PermanentetPageRoutingModule {}
