// angular import
import { Component } from '@angular/core';

import { SharedModule } from 'src/app/theme/shared/shared.module';

// third party
import { NgxMaskDirective, NgxMaskPipe, provideNgxMask } from 'ngx-mask';

@Component({
  selector: 'app-form-masking',
  standalone: true,
  imports: [SharedModule, NgxMaskDirective, NgxMaskPipe],
  templateUrl: './form-masking.component.html',
  styleUrls: ['./form-masking.component.scss'],
  providers: [provideNgxMask()]
})
export default class FormMaskingComponent {}
