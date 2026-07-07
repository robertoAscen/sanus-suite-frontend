// angular import
import { Component, DoCheck, OnInit } from '@angular/core';
import { animate, style, transition, trigger } from '@angular/animations';
import { Router } from '@angular/router'; // <-- NUEVO IMPORT

// bootstrap import
import { NgbDropdownConfig } from '@ng-bootstrap/ng-bootstrap';

// project import
import { SharedModule } from 'src/app/theme/shared/shared.module';
import { ChatUserListComponent } from './chat-user-list/chat-user-list.component';
import { ChatMsgComponent } from './chat-msg/chat-msg.component';
import { GradientConfig } from 'src/app/app-config';
import { TokenStorageService } from '../../../../../services/tokenStorage.service'; // <-- NUEVO IMPORT (Ajusta la ruta según tus carpetas)

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
export class NavRightComponent implements OnInit, DoCheck {
  // public props
  visibleUserList: boolean;
  chatMessage: boolean;
  friendId!: number;
  gradientConfig = GradientConfig;
  currentUser: any = null; // <-- Propiedad para almacenar los datos del usuario logueado

  // constructor
  constructor(
    private tokenStorage: TokenStorageService, // <-- Usamos tu almacén real
    private router: Router,                    // <-- Inyectamos el router para redirigir
    private translate: TranslateService
  ) {
    this.visibleUserList = false;
    this.chatMessage = false;
  }

  ngOnInit() {
    // Recuperamos el usuario logueado al iniciar el componente de navegación
    this.currentUser = this.tokenStorage.getUser();
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
    // 1. Limpiamos tanto sessionStorage como localStorage
    this.tokenStorage.logout();
    
    // 2. Redirigimos explícitamente a la pantalla de firma
    this.router.navigate(['auth', 'signin-v2']);
  }

  // user according language change of sidebar menu item
  useLanguage(language: string) {
    this.translate.use(language);
  }
}