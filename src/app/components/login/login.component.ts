import { Component, OnInit } from '@angular/core';
import { LoginServiceService } from './../../services/login/login-service.service';
import { AppComponent } from './../../app.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [LoginServiceService]
})
export class LoginComponent implements OnInit {
  public user:any;
  constructor(private service: LoginServiceService , private app: AppComponent) {
     this.user = {
     };
  }

  ngOnInit() {
  }

  submitData() {
    this.app.submit(this.service.setValidity(this.user));
  }

  resetBtn() {
    this.user = {};
  }

}
