// angular import
import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule, FormGroup, FormControl } from '@angular/forms';

// project import
import { SharedModule } from 'src/app/theme/shared/shared.module';

// third party
import { FileUploadModule } from '@iplab/ngx-file-upload';
import { FileUploadValidators } from '@iplab/ngx-file-upload';

@Component({
  selector: 'app-file-upload',
  standalone: true,
  imports: [SharedModule, FileUploadModule, FormsModule, ReactiveFormsModule],
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.scss']
})
export default class FileUploadComponent {
  // private props
  private filesControl = new FormControl(null, FileUploadValidators.filesLimit(2));

  // public method
  demoForm = new FormGroup({
    files: this.filesControl
  });

  toggleStatus() {
    this.filesControl.disabled ? this.filesControl.enable() : this.filesControl.disable();
  }
}
