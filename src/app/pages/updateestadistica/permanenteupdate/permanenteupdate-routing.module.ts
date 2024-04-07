import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PermanenteupdatePage } from './permanenteupdate.page';

const routes: Routes = [
  {
    path: '',
    component: PermanenteupdatePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PermanenteupdatePageRoutingModule {}
