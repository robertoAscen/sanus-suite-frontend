// angular import
import { Component } from '@angular/core';

// project import
import { SharedModule } from 'src/app/theme/shared/shared.module';

@Component({
  selector: 'app-basic-dropdowns',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './basic-dropdowns.component.html',
  styleUrls: ['./basic-dropdowns.component.scss']
})
export default class BasicDropdownsComponent {}
