import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HombrestPage } from './hombrest.page';

const routes: Routes = [
  {
    path: '',
    component: HombrestPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HombrestPageRoutingModule {}
