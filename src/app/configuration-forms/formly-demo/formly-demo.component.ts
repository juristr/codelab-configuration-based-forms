import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFieldConfig } from '@ngx-formly/core';

@Component({
  selector: 'app-formly-demo',
  templateUrl: './formly-demo.component.html'
})
export class FormlyDemoComponent implements OnInit {
  form = new FormGroup({});
  model: any = {
    id: 1223,
    firstname: 'Juri',
    age: 33,
    nationId: 1,
    cityId: 1,
    zipCode: 39100,
    phoneNumbers: [{ contactTypeId: 1, number: '' }]
  };

  fields: FormlyFieldConfig[] = [];

  constructor() {}

  ngOnInit() {}

  onSubmit(form: FormGroup) {
    if (form.valid) {
      alert('submitted');
    } else {
      alert('Form not valid');
    }
  }
}
