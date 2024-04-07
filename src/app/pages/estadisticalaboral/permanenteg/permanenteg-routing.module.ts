import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PermanentegPage } from './permanenteg.page';

const routes: Routes = [
  {
    path: '',
    component: PermanentegPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PermanentegPageRoutingModule {}
