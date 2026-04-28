// angular import
import { Component } from '@angular/core';

// project import
import { SharedModule } from 'src/app/theme/shared/shared.module';

@Component({
  selector: 'app-user-card-clip',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './user-card-clip.component.html',
  styleUrls: ['./user-card-clip.component.scss']
})
export class UserCardClipComponent {}
