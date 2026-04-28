// angular import
import { Component, EventEmitter, Output } from '@angular/core';

// project import
import { FriendsList } from 'src/app/fack-db/friends-list';
import { SharedModule } from 'src/app/theme/shared/shared.module';
import { FriendComponent } from './friend/friend.component';

@Component({
  selector: 'app-chat-user-list',
  standalone: true,
  imports: [SharedModule, FriendComponent],
  templateUrl: './chat-user-list.component.html',
  styleUrls: ['./chat-user-list.component.scss']
})
export class ChatUserListComponent {
  @Output() ChatCollapse = new EventEmitter();
  @Output() ChatToggle = new EventEmitter();
  // eslint-disable-next-line
  friendsList: any;
  searchFriends!: string;

  constructor() {
    this.friendsList = FriendsList.friends;
  }

  ChatOn() {
    this.ChatToggle.emit();
  }
}
