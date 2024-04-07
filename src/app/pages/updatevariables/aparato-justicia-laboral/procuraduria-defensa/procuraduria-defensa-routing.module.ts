import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProcuraduriaDefensaPage } from './procuraduria-defensa.page';

const routes: Routes = [
  {
    path: '',
    component: ProcuraduriaDefensaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProcuraduriaDefensaPageRoutingModule {}
