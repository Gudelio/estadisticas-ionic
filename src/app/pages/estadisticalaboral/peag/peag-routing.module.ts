import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PEAgPage } from './peag.page';

const routes: Routes = [
  {
    path: '',
    component: PEAgPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PEAgPageRoutingModule {}
