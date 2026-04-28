// angular import
import { Component } from '@angular/core';

// project import
import { SharedModule } from 'src/app/theme/shared/shared.module';

@Component({
  selector: 'app-form-checkbox',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './form-checkbox.component.html',
  styleUrls: ['./form-checkbox.component.scss']
})
export class FormCheckboxComponent {
  // public props
  checkboxGroups = [
    {
      title: 'Default checkbox',
      checkboxes: [
        { id: 'checkbox-1', name: 'checkbox-1', checked: true, label: 'Checked' },
        { id: 'checkbox-2', name: 'checkbox-2', checked: false, label: 'Uncheck' },
        { id: 'checkbox-3', name: 'checkbox-3', disabled: true, label: 'Disabled' },
        { id: 'checkbox-4', name: 'checkbox-4', disabled: true, checked: true, label: 'Disabled Checked' }
      ],
      title2: 'Bordered checkbox',
      checkboxes2: [
        { id: 'checkbox-fill-1', name: 'checkbox-fill-1', checked: true, label: 'Checked' },
        { id: 'checkbox-fill-2', name: 'checkbox-fill-2', checked: false, label: 'Uncheck' },
        { id: 'checkbox-fill-3', name: 'checkbox-fill-3', disabled: true, label: 'Disabled' },
        { id: 'checkbox-fill-4', name: 'checkbox-fill-4', disabled: true, checked: true, label: 'Disabled Checked' }
      ]
    },
    {
      title: 'Primary checkbox',
      checkboxes: [
        { id: 'checkbox-p-1', name: 'checkbox-p-1', checked: true, label: 'Checked', color: 'checkbox-primary' },
        { id: 'checkbox-p-2', name: 'checkbox-p-2', checked: false, label: 'Uncheck', color: 'checkbox-primary' },
        { id: 'checkbox-p-3', name: 'checkbox-p-3', disabled: true, label: 'Disabled', color: 'checkbox-primary' },
        { id: 'checkbox-p-4', name: 'checkbox-p-4', disabled: true, checked: true, color: 'checkbox-primary', label: 'Disabled Checked' }
      ],
      title2: 'Bordered checkbox',
      checkboxes2: [
        { id: 'checkbox-fill-p-1', name: 'checkbox-fill-p-1', checked: true, label: 'Checked', color: 'checkbox-primary' },
        { id: 'checkbox-fill-p-2', name: 'checkbox-fill-p-2', checked: false, label: 'Uncheck', color: 'checkbox-primary' },
        { id: 'checkbox-fill-p-3', name: 'checkbox-fill-p-3', disabled: true, label: 'Disabled', color: 'checkbox-primary' },
        {
          id: 'checkbox-fill-p-4',
          name: 'checkbox-fill-p-4',
          disabled: true,
          checked: true,
          label: 'Disabled Checked',
          color: 'checkbox-primary'
        }
      ]
    },
    {
      title: 'Danger checkbox',
      checkboxes: [
        { id: 'checkbox-d-1', name: 'checkbox-d-1', checked: true, label: 'Checked', color: 'checkbox-danger' },
        { id: 'checkbox-d-2', name: 'checkbox-d-2', checked: false, label: 'Uncheck', color: 'checkbox-danger' },
        { id: 'checkbox-d-3', name: 'checkbox-d-3', disabled: true, label: 'Disabled', color: 'checkbox-danger' },
        { id: 'checkbox-d-4', name: 'checkbox-d-4', disabled: true, checked: true, label: 'Disabled Checked', color: 'checkbox-danger' }
      ],
      title2: 'Bordered checkbox',
      checkboxes2: [
        { id: 'checkbox-fill-d-1', name: 'checkbox-fill-d-1', checked: true, label: 'Checked', color: 'checkbox-danger' },
        { id: 'checkbox-fill-d-2', name: 'checkbox-fill-d-2', checked: false, label: 'Uncheck', color: 'checkbox-danger' },
        { id: 'checkbox-fill-d-3', name: 'checkbox-fill-d-3', disabled: true, label: 'Disabled', color: 'checkbox-danger' },
        {
          id: 'checkbox-fill-d-4',
          name: 'checkbox-fill-d-4',
          disabled: true,
          checked: true,
          label: 'Disabled Checked',
          color: 'checkbox-danger'
        }
      ]
    },
    {
      title: 'Success checkbox',
      checkboxes: [
        { id: 'checkbox-s-1', name: 'checkbox-s-1', checked: true, label: 'Checked', color: 'checkbox-success' },
        { id: 'checkbox-s-2', name: 'checkbox-s-2', checked: false, label: 'Uncheck', color: 'checkbox-success' },
        { id: 'checkbox-s-3', name: 'checkbox-s-3', disabled: true, label: 'Disabled', color: 'checkbox-success' },
        { id: 'checkbox-s-4', name: 'checkbox-s-4', disabled: true, checked: true, label: 'Disabled Checked', color: 'checkbox-success' }
      ],
      title2: 'Bordered checkbox',
      checkboxes2: [
        { id: 'checkbox-fill-s-1', name: 'checkbox-fill-s-1', checked: true, label: 'Checked', color: 'checkbox-success' },
        { id: 'checkbox-fill-s-2', name: 'checkbox-fill-s-2', checked: false, label: 'Uncheck', color: 'checkbox-success' },
        { id: 'checkbox-fill-s-3', name: 'checkbox-fill-s-3', disabled: true, label: 'Disabled', color: 'checkbox-success' },
        {
          id: 'checkbox-fill-s-4',
          name: 'checkbox-fill-s-4',
          disabled: true,
          checked: true,
          label: 'Disabled Checked',
          color: 'checkbox-success'
        }
      ]
    },
    {
      title: 'Warning checkbox',
      checkboxes: [
        { id: 'checkbox-w-1', name: 'checkbox-w-1', checked: true, label: 'Checked', color: 'checkbox-warning' },
        { id: 'checkbox-w-2', name: 'checkbox-w-2', checked: false, label: 'Uncheck', color: 'checkbox-warning' },
        { id: 'checkbox-w-3', name: 'checkbox-w-3', disabled: true, label: 'Disabled', color: 'checkbox-warning' },
        { id: 'checkbox-w-4', name: 'checkbox-w-4', disabled: true, checked: true, label: 'Disabled Checked', color: 'checkbox-warning' }
      ],
      title2: 'Bordered checkbox',
      checkboxes2: [
        { id: 'checkbox-fill-w-1', name: 'checkbox-fill-w-1', checked: true, label: 'Checked', color: 'checkbox-warning' },
        { id: 'checkbox-fill-w-2', name: 'checkbox-fill-w-2', checked: false, label: 'Uncheck', color: 'checkbox-warning' },
        { id: 'checkbox-fill-w-3', name: 'checkbox-fill-w-3', disabled: true, label: 'Disabled', color: 'checkbox-warning' },
        {
          id: 'checkbox-fill-w-4',
          name: 'checkbox-fill-w-4',
          disabled: true,
          checked: true,
          label: 'Disabled Checked',
          color: 'checkbox-warning'
        }
      ]
    },
    {
      title: 'Info checkbox',
      checkboxes: [
        { id: 'checkbox-i-1', name: 'checkbox-i-1', checked: true, label: 'Checked', color: 'checkbox-info' },
        { id: 'checkbox-i-2', name: 'checkbox-i-2', checked: false, label: 'Uncheck', color: 'checkbox-info' },
        { id: 'checkbox-i-3', name: 'checkbox-i-3', disabled: true, label: 'Disabled', color: 'checkbox-info' },
        { id: 'checkbox-i-4', name: 'checkbox-i-4', disabled: true, checked: true, label: 'Disabled Checked', color: 'checkbox-info' }
      ],
      title2: 'Bordered checkbox',
      checkboxes2: [
        { id: 'checkbox-fill-i-1', name: 'checkbox-fill-i-1', checked: true, label: 'Checked', color: 'checkbox-info' },
        { id: 'checkbox-fill-i-2', name: 'checkbox-fill-i-2', checked: false, label: 'Uncheck', color: 'checkbox-info' },
        { id: 'checkbox-fill-i-3', name: 'checkbox-fill-i-3', disabled: true, label: 'Disabled', color: 'checkbox-info' },
        {
          id: 'checkbox-fill-i-4',
          name: 'checkbox-fill-i-4',
          disabled: true,
          checked: true,
          label: 'Disabled Checked',
          color: 'checkbox-info'
        }
      ]
    }
  ];
}
