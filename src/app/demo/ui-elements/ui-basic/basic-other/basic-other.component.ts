// angular import
import { Component } from '@angular/core';

// project import
import { SharedModule } from 'src/app/theme/shared/shared.module';

@Component({
  selector: 'app-basic-other',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './basic-other.component.html',
  styleUrls: ['./basic-other.component.scss']
})
export default class BasicOtherComponent {}
