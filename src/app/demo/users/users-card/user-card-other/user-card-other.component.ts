// angular import
import { Component } from '@angular/core';

// project import
import { SharedModule } from 'src/app/theme/shared/shared.module';

@Component({
  selector: 'app-user-card-other',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './user-card-other.component.html',
  styleUrls: ['./user-card-other.component.scss']
})
export class UserCardOtherComponent {}
