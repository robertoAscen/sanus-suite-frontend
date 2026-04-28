// angular import
import { Component, DoCheck } from '@angular/core';
import { animate, style, transition, trigger } from '@angular/animations';

// bootstrap import
import { NgbDropdownConfig } from '@ng-bootstrap/ng-bootstrap';
import { AuthenticationService } from 'src/app/theme/shared/service/authentication.service';

// project import
import { SharedModule } from 'src/app/theme/shared/shared.module';
import { ChatUserListComponent } from './chat-user-list/chat-user-list.component';
import { ChatMsgComponent } from './chat-msg/chat-msg.component';
import { GradientConfig } from 'src/app/app-config';

// third party
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-nav-right',
  standalone: true,
  imports: [SharedModule, ChatUserListComponent, ChatMsgComponent],
  templateUrl: './nav-right.component.html',
  styleUrls: ['./nav-right.component.scss'],
  providers: [NgbDropdownConfig],
  animations: [
    trigger('slideInOutLeft', [
      transition(':enter', [style({ transform: 'translateX(100%)' }), animate('300ms ease-in', style({ transform: 'translateX(0%)' }))]),
      transition(':leave', [animate('300ms ease-in', style({ transform: 'translateX(100%)' }))])
    ]),
    trigger('slideInOutRight', [
      transition(':enter', [style({ transform: 'translateX(-100%)' }), animate('300ms ease-in', style({ transform: 'translateX(0%)' }))]),
      transition(':leave', [animate('300ms ease-in', style({ transform: 'translateX(-100%)' }))])
    ])
  ]
})
export class NavRightComponent implements DoCheck {
  // public props
  visibleUserList: boolean;
  chatMessage: boolean;
  friendId!: number;
  gradientConfig = GradientConfig;

  // constructor
  constructor(
    private authenticationService: AuthenticationService,
    private translate: TranslateService
  ) {
    this.visibleUserList = false;
    this.chatMessage = false;
  }

  // public method
  onChatToggle(friendID: number) {
    this.friendId = friendID;
    this.chatMessage = !this.chatMessage;
  }

  ngDoCheck() {
    if (document.querySelector('body')?.classList.contains('elite-rtl')) {
      this.gradientConfig.isRtlLayout = true;
    } else {
      this.gradientConfig.isRtlLayout = false;
    }
  }

  logout() {
    this.authenticationService.logout();
  }

  // user according language change of sidebar menu item
  useLanguage(language: string) {
    this.translate.use(language);
  }
}
