import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProcuraduriaDefensaUpdatePage } from './procuraduria-defensa-update.page';

const routes: Routes = [
  {
    path: '',
    component: ProcuraduriaDefensaUpdatePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProcuraduriaDefensaUpdatePageRoutingModule {}
