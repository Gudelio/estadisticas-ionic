import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MujerestPage } from './mujerest.page';

const routes: Routes = [
  {
    path: '',
    component: MujerestPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MujerestPageRoutingModule {}
