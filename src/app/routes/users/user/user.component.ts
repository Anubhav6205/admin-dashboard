import { Component, OnInit } from '@angular/core';
import { UserServiceService } from 'src/services/user/user-service.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
})
export class UserComponent implements OnInit {
  usersData: any[] = [];

  constructor(private router: Router, public userService: UserServiceService) {}

  ngOnInit(): void {
    console.log('getitng from user component ');

    this.usersData = this.userService.getUserData();
  }

  userDelete(index: number) {
    this.userService.userDelete(index);
    this.usersData = this.userService.getUserData();
  }

  userEdit(index: number) {
    console.log(index);
    this.router.navigate(['/users/edit', index]);
  }

  userView(index: number) {
    this.router.navigate(['/users',index])
    


  }
}
