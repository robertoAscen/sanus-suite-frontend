// angular import
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

// project import
import { SharedModule } from 'src/app/theme/shared/shared.module';

// third Party
import { QuillModule } from 'ngx-quill';

@Component({
  selector: 'app-mail-compose',
  standalone: true,
  imports: [SharedModule, RouterModule, QuillModule],
  templateUrl: './mail-compose.component.html',
  styleUrls: ['./mail-compose.component.scss']
})
export default class MailComposeComponent {
  // public props
  isCollapsed: boolean;

  // constructor
  constructor() {
    this.isCollapsed = false;
  }
}
