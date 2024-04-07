import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TasadesocupacionPage } from './tasadesocupacion.page';

const routes: Routes = [
  {
    path: '',
    component: TasadesocupacionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TasadesocupacionPageRoutingModule {}
