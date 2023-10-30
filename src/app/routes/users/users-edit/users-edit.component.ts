import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserServiceService } from 'src/services/user/user-service.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { User } from 'src/model/User';
import {Router} from '@angular/router';
@Component({
  selector: 'app-users-edit',
  templateUrl: './users-edit.component.html',
  styleUrls: ['./users-edit.component.css'],
})
export class UsersEditComponent implements OnInit {
  currentIndex: number = -1;
  userFormData:any;
  currentUser: any;
  modalHide:boolean=true;
  constructor(
    private router: ActivatedRoute,
    private userService: UserServiceService,
    private fb: FormBuilder,
    private routerNav:Router
  ) {
    this.router.params.subscribe((params) => {
      this.currentIndex = parseInt(params['id']);

      this.currentUser = this.userService.usersData[this.currentIndex];
      console.log(this.currentUser);


      this.userFormData=this.fb.group({
        name:this.fb.control(this.currentUser.name),
        email:this.fb.control(this.currentUser.email),
        contact:this.fb.control(this.currentUser.contact),
        address:this.fb.control(this.currentUser.address),
      })





      
    });
  }
  ngOnInit(): void {

  }

  userUpdate()
  {
    const userData:User={
      name:this.userFormData.value.name,
      email:this.userFormData.value.email,
      contact:this.userFormData.value.contact,
      address:this.userFormData.value.address




    }
    this.userService.userUpdate(this.currentIndex,userData);

 
    this.modalHide=false;
    setTimeout(()=>{
      this.modalHide=true;
      this.routerNav.navigate(['/user'])

    },2000)
  }
}
