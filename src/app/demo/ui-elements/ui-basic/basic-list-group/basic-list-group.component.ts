// angular import
import { Component } from '@angular/core';

// project import
import { SharedModule } from 'src/app/theme/shared/shared.module';

@Component({
  selector: 'app-basic-list-group',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './basic-list-group.component.html',
  styleUrls: ['./basic-list-group.component.scss']
})
export default class BasicListGroupComponent {
  // private Method
  item = [
    {
      text: 'Cras justo odio'
    },
    {
      text: 'Dapibus ac facilisis in'
    },
    {
      text: 'Morbi leo risus'
    },
    {
      text: 'Porta ac consectetur ac'
    },
    {
      text: 'Vestibulum at eros'
    }
  ];
}
