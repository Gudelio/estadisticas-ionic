import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MujeresupdatePage } from './mujeresupdate.page';

const routes: Routes = [
  {
    path: '',
    component: MujeresupdatePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MujeresupdatePageRoutingModule {}
