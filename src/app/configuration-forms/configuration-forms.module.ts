import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared';
import { Routes, RouterModule } from '@angular/router';
import { FormlyDemoComponent } from './formly-demo/formly-demo.component';

const routes: Routes = [
  {
    path: '',
    component: FormlyDemoComponent
  }
];

@NgModule({
  imports: [CommonModule, SharedModule, RouterModule.forChild(routes)],
  declarations: [FormlyDemoComponent]
})
export class ConfigurationFormsModule {}
