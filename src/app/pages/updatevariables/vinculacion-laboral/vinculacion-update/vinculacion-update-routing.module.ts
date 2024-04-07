import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VinculacionUpdatePage } from './vinculacion-update.page';

const routes: Routes = [
  {
    path: '',
    component: VinculacionUpdatePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VinculacionUpdatePageRoutingModule {}
