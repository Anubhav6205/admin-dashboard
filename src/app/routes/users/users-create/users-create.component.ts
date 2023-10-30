import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { User } from 'src/model/User';
import { UserServiceService } from 'src/services/user/user-service.service';
import {Router} from "@angular/router"
@Component({
  selector: 'app-users-create',
  templateUrl: './users-create.component.html',
  styleUrls: ['./users-create.component.css'],
})
export class UsersCreateComponent implements OnInit {
  userFormData: FormGroup;
  usersData: User[] = [];
  modalHide:boolean=true;
  constructor(
    private fb: FormBuilder,
    private userService: UserServiceService,
    private router:Router
  ) {
    this.userFormData = this.fb.group({
      name: this.fb.control(''),
      email: this.fb.control(''),
      contact: this.fb.control(''),
      address: this.fb.control(''),
    });
  }

  ngOnInit(): void {}

  addUser() {
    //square brackets in string as it will parse to JSON
    const userData: User = {
      name: this.userFormData.value.name,
      email: this.userFormData.value.email,
      contact: this.userFormData.value.contact,
      address: this.userFormData.value.address,
    };
    this.userService.addUser(userData);
    this.modalHide=false;
    setTimeout(()=>{
      this.modalHide=true;
      this.router.navigate(['/user'])

    },2000)
    
  }
}
