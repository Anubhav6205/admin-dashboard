import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  Validators,
  ValidatorFn,
  AbstractControl,
} from '@angular/forms';
import { Register } from 'src/model/Register';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  registerData: Register;
  registerForm: any;
  constructor(private fb: FormBuilder) {
    this.registerData = {
      name: '',
      email: '',
      password: '',
      confirmPassword: '',
    };
  }

  ngOnInit(): void {
    this.registerForm = this.fb.group({
      name: this.fb.control('', [Validators.required]),
      email: this.fb.control(''),
      password: this.fb.control(''),
      confirmPassword: this.fb.control(''),
    });
  }

 

  userRegister() {
    console.log(this.registerForm);
  }
}
