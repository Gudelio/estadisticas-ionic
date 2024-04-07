import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TribunalArbitrajePage } from './tribunal-arbitraje.page';

const routes: Routes = [
  {
    path: '',
    component: TribunalArbitrajePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TribunalArbitrajePageRoutingModule {}
