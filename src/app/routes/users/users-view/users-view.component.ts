import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserServiceService } from 'src/services/user/user-service.service';

import { User } from 'src/model/User';
import { Router } from '@angular/router';
@Component({
  selector: 'app-users-view',
  templateUrl: './users-view.component.html',
  styleUrls: ['./users-view.component.css'],
})
export class UsersViewComponent {
  currentIndex: number = -1;
  userFormData: any;
  currentUser: any;
  modalHide: boolean = true;
  constructor(
    private router: ActivatedRoute,
    private userService: UserServiceService,

    private routerNav: Router
  ) {
    this.router.params.subscribe((params) => {
      this.currentIndex = parseInt(params['id']);

      this.currentUser = this.userService.usersData[this.currentIndex];
      console.log(this.currentUser);
    });
  }
}
