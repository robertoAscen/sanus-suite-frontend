// angular import
import { Component } from '@angular/core';

// project import
import { SharedModule } from 'src/app/theme/shared/shared.module';

@Component({
  selector: 'app-form-radio',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './form-radio.component.html',
  styleUrls: ['./form-radio.component.scss']
})
export class FormRadioComponent {
  // public props
  RadioGroups = [
    {
      title: 'Default Radio',
      defaultRadios: [
        { id: 'radio-1', name: 'radio-1', checked: true, label: 'Checked' },
        { id: 'radio-2', name: 'radio-2', checked: false, label: 'Uncheck' },
        { id: 'radio-3', name: 'radio-3', disabled: true, label: 'Disabled' },
        { id: 'radio-4', name: 'radio-4', disabled: true, checked: true, label: 'Disabled Checked' }
      ]
    },
    {
      title: 'Primary Radio',
      defaultRadios: [
        { id: 'radio-p-1', name: 'radio-p-1', checked: true, label: 'Checked', color: 'radio-primary' },
        { id: 'radio-p-2', name: 'radio-p-2', checked: false, label: 'Uncheck', color: 'radio-primary' },
        { id: 'radio-p-3', name: 'radio-p-3', disabled: true, label: 'Disabled', color: 'radio-primary' },
        { id: 'radio-p-4', name: 'radio-p-4', disabled: true, checked: true, label: 'Disabled Checked', color: 'radio-primary' }
      ]
    },
    {
      title: 'Danger Radio',
      defaultRadios: [
        { id: 'radio-d-1', name: 'radio-d-1', checked: true, label: 'Checked', color: 'radio-danger' },
        { id: 'radio-d-2', name: 'radio-d-2', checked: false, label: 'Uncheck', color: 'radio-danger' },
        { id: 'radio-d-3', name: 'radio-d-3', disabled: true, label: 'Disabled', color: 'radio-danger' },
        { id: 'radio-d-4', name: 'radio-d-4', disabled: true, checked: true, label: 'Disabled Checked', color: 'radio-danger' }
      ]
    },
    {
      title: 'Success Radio',
      defaultRadios: [
        { id: 'radio-s-1', name: 'radio-s-1', checked: true, label: 'Checked', color: 'radio-success' },
        { id: 'radio-s-2', name: 'radio-s-2', checked: false, label: 'Uncheck', color: 'radio-success' },
        { id: 'radio-s-3', name: 'radio-s-3', disabled: true, label: 'Disabled', color: 'radio-success' },
        { id: 'radio-s-4', name: 'radio-s-4', disabled: true, checked: true, label: 'Disabled Checked', color: 'radio-success' }
      ]
    },
    {
      title: 'Warning Radio',
      defaultRadios: [
        { id: 'radio-w-1', name: 'radio-w-1', checked: true, label: 'Checked', color: 'radio-warning' },
        { id: 'radio-w-2', name: 'radio-w-2', checked: false, label: 'Uncheck', color: 'radio-warning' },
        { id: 'radio-w-3', name: 'radio-w-3', disabled: true, label: 'Disabled', color: 'radio-warning' },
        { id: 'radio-w-4', name: 'radio-w-4', disabled: true, checked: true, label: 'Disabled Checked', color: 'radio-warning' }
      ]
    },
    {
      title: 'Info Radio',
      defaultRadios: [
        { id: 'radio-i-1', name: 'radio-i-1', checked: true, label: 'Checked', color: 'radio-info' },
        { id: 'radio-i-2', name: 'radio-i-2', checked: false, label: 'Uncheck', color: 'radio-info' },
        { id: 'radio-i-3', name: 'radio-i-3', disabled: true, label: 'Disabled', color: 'radio-info' },
        { id: 'radio-i-4', name: 'radio-i-4', disabled: true, checked: true, label: 'Disabled Checked', color: 'radio-info' }
      ]
    }
  ];
}
