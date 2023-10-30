import { Injectable, OnInit } from '@angular/core';
import { User } from '../../model/User';

@Injectable({
  providedIn: 'root',
})
export class UserServiceService implements OnInit {
  usersData: User[] = [];

  constructor() {
    this.usersData = JSON.parse(localStorage.getItem('users') || '[]');
  }

  ngOnInit(): void {}

  getUserData() {
    console.log('getting from services');

    return this.usersData;
  }

  addUser(userData:User) {
    this.usersData = JSON.parse(localStorage.getItem('users') || '[]');

    this.usersData.push(userData);

    localStorage.setItem('users', JSON.stringify(this.usersData));
  }

  userDelete(index: number) {
    console.log('delete in services');
    console.log(index);

    this.usersData = JSON.parse(localStorage.getItem('users') || '[]');
    console.log(this.usersData);

    this.usersData.splice(index, 1);
    localStorage.setItem('users', JSON.stringify(this.usersData));
    console.log(this.usersData);
  }

  userUpdate(index: number, userData: User) {
    this.usersData = JSON.parse(localStorage.getItem('users') || '[]');
    console.log(this.usersData);

    this.usersData[index] = userData;
    localStorage.setItem('users', JSON.stringify(this.usersData));

    console.log('updated');
  }
}
