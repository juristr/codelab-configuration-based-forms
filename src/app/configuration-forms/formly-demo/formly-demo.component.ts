import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFieldConfig } from '@ngx-formly/core';
import { CityService } from 'src/app/services/city.service';
import { switchMap, startWith } from 'rxjs/operators';

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

  fields: FormlyFieldConfig[] = [
    {
      key: 'firstname',
      type: 'input',
      templateOptions: {
        label: 'Firstname'
      }
    },
    {
      key: 'age',
      type: 'input',
      templateOptions: {
        label: 'Age',
        type: 'number'
      }
    },
    {
      key: 'nationId',
      type: 'select',
      templateOptions: {
        label: 'Nation',
        options: this.cityService.getNations()
      }
    },
    {
      key: 'cityId',
      type: 'select',
      templateOptions: {
        label: 'City',
        options: []
      },
      hooks: {
        onInit: (field: FormlyFieldConfig) => {
          const nationIdCtrl = field.form.get('nationId');
          nationIdCtrl.valueChanges
            .pipe(
              startWith(this.model.cityId),
              switchMap(nationId => this.cityService.getCities(nationId))
            )
            .subscribe(cities => {
              field.templateOptions.options = cities;
            });
        }
      }
    }
  ];

  constructor(private cityService: CityService) {}

  ngOnInit() {}

  onSubmit(form: FormGroup) {
    if (form.valid) {
      alert('submitted');
    } else {
      alert('Form not valid');
    }
  }
}
