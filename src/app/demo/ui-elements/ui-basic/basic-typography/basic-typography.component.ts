// angular import
import { Component } from '@angular/core';

// project import
import { SharedModule } from 'src/app/theme/shared/shared.module';

@Component({
  selector: 'app-basic-typography',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './basic-typography.component.html',
  styleUrls: ['./basic-typography.component.scss']
})
export default class BasicTypographyComponent {}
