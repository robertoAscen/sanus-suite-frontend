// angular import
import { Component } from '@angular/core';

// project import
import { SharedModule } from 'src/app/theme/shared/shared.module';

// third Party
import { QuillModule } from 'ngx-quill';

@Component({
  selector: 'app-quill-editor',
  standalone: true,
  imports: [QuillModule, SharedModule],
  templateUrl: './quill-editor.component.html',
  styleUrls: ['./quill-editor.component.scss']
})
export default class QuillEditorComponent {}
