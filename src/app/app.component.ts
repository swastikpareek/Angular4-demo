import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  public loggedInStatus:Boolean = false;
  public errorMessage:Boolean = false;

  constructor() {

  }

  submit(validity) {
   this.loggedInStatus =  validity;
   this.errorMessage = !validity;
  }

}


