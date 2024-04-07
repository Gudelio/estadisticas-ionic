import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TribunalArbitrajeUpdatePage } from './tribunal-arbitraje-update.page';

const routes: Routes = [
  {
    path: '',
    component: TribunalArbitrajeUpdatePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TribunalArbitrajeUpdatePageRoutingModule {}
