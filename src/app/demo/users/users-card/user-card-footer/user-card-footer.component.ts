// angular import
import { Component } from '@angular/core';

// project import
import { SharedModule } from 'src/app/theme/shared/shared.module';

@Component({
  selector: 'app-user-card-footer',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './user-card-footer.component.html',
  styleUrls: ['./user-card-footer.component.scss']
})
export class UserCardFooterComponent {}
