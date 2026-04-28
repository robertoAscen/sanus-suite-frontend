// angular import
import { Component } from '@angular/core';

// project import
import { SharedModule } from 'src/app/theme/shared/shared.module';

@Component({
  selector: 'app-basic-button',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './basic-button.component.html',
  styleUrls: ['./basic-button.component.scss']
})
export default class BasicButtonComponent {}
