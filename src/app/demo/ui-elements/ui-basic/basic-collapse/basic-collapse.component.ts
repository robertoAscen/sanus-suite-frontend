// angular import
import { Component } from '@angular/core';

// project import
import { SharedModule } from 'src/app/theme/shared/shared.module';

@Component({
  selector: 'app-basic-collapse',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './basic-collapse.component.html',
  styleUrls: ['./basic-collapse.component.scss']
})
export default class BasicCollapseComponent {
  // Public props
  isCollapsed = true;
  isMultiCollapsed1 = true;
  isMultiCollapsed2 = true;
  panels = ['First', 'Second', 'Third'];
}
