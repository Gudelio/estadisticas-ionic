import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TasadesocupacionupdatePage } from './tasadesocupacionupdate.page';

const routes: Routes = [
  {
    path: '',
    component: TasadesocupacionupdatePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TasadesocupacionupdatePageRoutingModule {}
