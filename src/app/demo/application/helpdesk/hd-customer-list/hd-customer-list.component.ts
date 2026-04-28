// angular import
import { Component, ElementRef } from '@angular/core';

// project import
import { SharedModule } from 'src/app/theme/shared/shared.module';

// bootstrap import
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-hd-customer-list',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './hd-customer-list.component.html',
  styleUrls: ['./hd-customer-list.component.scss']
})
export default class HdCustomerListComponent {
  // constructor
  constructor(private modalService: NgbModal) {}

  openVerticallyCentered(content2: ElementRef) {
    this.modalService.open(content2, { centered: true });
  }

  data = [
    {
      name: 'Mark Jason'
    },
    {
      name: 'Alice Nicola'
    },
    {
      name: 'Harry Cook'
    },
    {
      name: 'Tom Hannah'
    },
    {
      name: 'Martin Frank'
    },
    {
      name: 'Andrew Khan'
    },
    {
      name: 'Christina Mether'
    },
    {
      name: 'Jayson Jason'
    },
    {
      name: 'Nikolai JoHn'
    },
    {
      name: 'Nik Cage'
    }
  ];

  inputGroup = [
    {
      title: 'First Name',
      id: 'firstName',
      placeholder: 'Enter First Name',
      type: 'text'
    },
    {
      title: 'Last Name',
      id: 'lastName',
      placeholder: 'Enter Last Name',
      type: 'text'
    },
    {
      title: 'Email address',
      id: 'emailAddress',
      placeholder: 'Enter Email Address',
      type: 'email'
    },
    {
      title: 'Password',
      id: 'password',
      placeholder: 'Enter password',
      type: 'password'
    },
    {
      title: 'Confirm Password',
      id: 'confirmPassword',
      placeholder: 'Enter Confirm Password',
      type: 'password'
    }
  ];
}
