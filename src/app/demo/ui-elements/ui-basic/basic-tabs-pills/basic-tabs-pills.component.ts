// angular import
import { Component } from '@angular/core';

// project import
import { SharedModule } from 'src/app/theme/shared/shared.module';

@Component({
  selector: 'app-basic-tabs-pills',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './basic-tabs-pills.component.html',
  styleUrls: ['./basic-tabs-pills.component.scss']
})
export default class BasicTabsPillsComponent {}
