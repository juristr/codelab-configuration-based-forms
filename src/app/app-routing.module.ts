import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'config-forms',
    pathMatch: 'full'
  },
  {
    path: 'config-forms',
    loadChildren:
      './configuration-forms/configuration-forms.module#ConfigurationFormsModule'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
