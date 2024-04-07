import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PEADesocupadaPage } from './peadesocupada.page';

const routes: Routes = [
  {
    path: '',
    component: PEADesocupadaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PEADesocupadaPageRoutingModule {}
