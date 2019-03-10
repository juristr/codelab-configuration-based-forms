import { NgModule } from '@angular/core';
import {
  ReactiveFormsModule,
  FormControl,
  ValidationErrors
} from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormlyModule } from '@ngx-formly/core';
import { FormlyMaterialModule } from '@ngx-formly/material';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared';
import { RepeatTypeComponent } from './formly-types/repeat-section.type';

export function onlyItaliansValidator(control: FormControl): ValidationErrors {
  if (control.value) {
    return control.value === 1 ? null : { onlyItalians: true };
  } else {
    return null;
  }
}

@NgModule({
  declarations: [AppComponent, RepeatTypeComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    SharedModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormlyModule.forRoot({
      validationMessages: [
        { name: 'required', message: 'This field is required' },
        { name: 'onlyItalians', message: 'Sorry, solo italiani!' }
      ],
      validators: [{ name: 'onlyItalians', validation: onlyItaliansValidator }]
    }),
    FormlyMaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
