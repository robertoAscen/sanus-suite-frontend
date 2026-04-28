// angular import
import { Component } from '@angular/core';

// project import
import { SharedModule } from 'src/app/theme/shared/shared.module';

@Component({
  selector: 'app-form-switch',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './form-switch.component.html',
  styleUrls: ['./form-switch.component.scss']
})
export class FormSwitchComponent {
  // public props
  SwitchGroup = [
    {
      title: 'Default Switch',
      switches: [
        { id: 'switch-1', checked: true, label: 'Checked' },
        { id: 'switch-2', checked: false, label: 'Uncheck' },
        { id: 'switch-3', disabled: true, label: 'Disabled' },
        { id: 'switch-4', disabled: true, checked: true, label: 'Disabled Checked' }
      ]
    },
    {
      title: 'Primary Switch',
      switches: [
        { id: 'switch-p-1', checked: true, label: 'Checked', color: 'switch-primary' },
        { id: 'switch-p-2', checked: false, label: 'Uncheck', color: 'switch-primary' },
        { id: 'switch-p-3', disabled: true, label: 'Disabled', color: 'switch-primary' },
        { id: 'switch-p-4', disabled: true, checked: true, label: 'Disabled Checked', color: 'switch-primary' }
      ]
    },
    {
      title: 'Danger Switch',
      switches: [
        { id: 'switch-d-1', checked: true, label: 'Checked', color: 'switch-danger' },
        { id: 'switch-d-2', checked: false, label: 'Uncheck', color: 'switch-danger' },
        { id: 'switch-d-3', disabled: true, label: 'Disabled', color: 'switch-danger' },
        { id: 'switch-d-4', disabled: true, checked: true, label: 'Disabled Checked', color: 'switch-danger' }
      ]
    },
    {
      title: 'Success Switch',
      switches: [
        { id: 'switch-s-1', checked: true, label: 'Checked', color: 'switch-success' },
        { id: 'switch-s-2', checked: false, label: 'Uncheck', color: 'switch-success' },
        { id: 'switch-s-3', disabled: true, label: 'Disabled', color: 'switch-success' },
        { id: 'switch-s-4', disabled: true, checked: true, label: 'Disabled Checked', color: 'switch-success' }
      ]
    },
    {
      title: 'Warning Switch',
      switches: [
        { id: 'switch-w-1', checked: true, label: 'Checked', color: 'switch-warning' },
        { id: 'switch-w-2', checked: false, label: 'Uncheck', color: 'switch-warning' },
        { id: 'switch-w-3', disabled: true, label: 'Disabled', color: 'switch-warning' },
        { id: 'switch-w-4', disabled: true, checked: true, label: 'Disabled Checked', color: 'switch-warning' }
      ]
    },
    {
      title: 'Info Switch',
      switches: [
        { id: 'switch-i-1', checked: true, label: 'Checked', color: 'switch-warning' },
        { id: 'switch-i-2', checked: false, label: 'Uncheck', color: 'switch-warning' },
        { id: 'switch-i-3', disabled: true, label: 'Disabled', color: 'switch-warning' },
        { id: 'switch-i-4', disabled: true, checked: true, label: 'Disabled Checked', color: 'switch-warning' }
      ]
    }
  ];
}
