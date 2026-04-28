// Angular Import
import { Component } from '@angular/core';
import { UntypedFormControl } from '@angular/forms';

// project import
import { FormCheckboxComponent } from './form-checkbox/form-checkbox.component';
import { FormRadioComponent } from './form-radio/form-radio.component';
import { FormSwitchComponent } from './form-switch/form-switch.component';
import { SharedModule } from 'src/app/theme/shared/shared.module';

// third party
import { TagInputModule } from 'ngx-chips';

@Component({
  selector: 'app-form-advance',
  standalone: true,
  imports: [FormCheckboxComponent, FormRadioComponent, FormSwitchComponent, SharedModule, TagInputModule],
  templateUrl: './form-advance.component.html',
  styleUrls: ['./form-advance.component.scss']
})
export default class FormAdvanceComponent {
  //  public method
  items = ['Amsterdam', 'Washington', 'Sydney', 'Beijing', 'Cairo'];
  itemsEdit = ['Amsterdam', 'Washington', 'Sydney', 'Beijing', 'Cairo'];

  itemsAsObjects = [
    { id: 0, name: 'Amsterdam', readonly: true },
    { id: 1, name: 'Washington' },
    { id: 2, name: 'Sydney', readonly: true },
    { id: 3, name: 'Beijing', readonly: true },
    { id: 4, name: 'Cairo' }
  ];

  errorMessages = {
    'startsWithAt@': "Your items need to start with '@'",
    endsWith$: "Your items need to end with '$'"
  };

  validators = [this.startsWithAt, this.endsWith$];

  // private Method
  private startsWithAt(control: UntypedFormControl) {
    if (control.value.charAt(0) !== '@') {
      return {
        'startsWithAt@': true
      };
    }

    return null;
  }

  private endsWith$(control: UntypedFormControl) {
    if (control.value.charAt(control.value.length - 1) !== '$') {
      return {
        endsWith$: true
      };
    }

    return null;
  }

  colorTypes = [
    {
      title: 'Color States',
      colors: [
        { id: 'customCheck1', checked: true, label: 'primary', type: 'input-primary' },
        { id: 'customCheck2', checked: true, label: 'secondary', type: 'input-secondary' },
        { id: 'customCheck3', checked: true, label: 'success', type: 'input-success' },
        { id: 'customCheck4', checked: true, label: 'danger', type: 'input-danger' },
        { id: 'customCheck5', checked: true, label: 'warning', type: 'input-warning' },
        { id: 'customCheck6', checked: true, label: 'info', type: 'input-info' },
        { id: 'customCheck7', checked: true, label: 'dark', type: 'input-dark' }
      ]
    },
    {
      title: 'Color Light States',
      colors: [
        { id: 'customCheckLight1', checked: true, label: 'primary', type: 'input-light-primary' },
        { id: 'customCheckLight2', checked: true, label: 'secondary', type: 'input-light-secondary' },
        { id: 'customCheckLight3', checked: true, label: 'success', type: 'input-light-success' },
        { id: 'customCheckLight4', checked: true, label: 'danger', type: 'input-light-danger' },
        { id: 'customCheckLight5', checked: true, label: 'warning', type: 'input-light-warning' },
        { id: 'customCheckLight6', checked: true, label: 'info', type: 'input-light-info' },
        { id: 'customCheckLight7', checked: true, label: 'dark', type: 'input-light-dark' }
      ]
    }
  ];
}
