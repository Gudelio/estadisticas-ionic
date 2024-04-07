import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HombresupdatePage } from './hombresupdate.page';

const routes: Routes = [
  {
    path: '',
    component: HombresupdatePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HombresupdatePageRoutingModule {}
