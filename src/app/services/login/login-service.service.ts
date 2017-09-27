import { Injectable } from '@angular/core';
import ValidPairs from './../../creds';

@Injectable()
export class LoginServiceService {

  private ValidPairs: any;
  private status:Boolean = false;

  constructor() {
    this.ValidPairs= ValidPairs.pairs;
  }

 setValidity(obj) {
    for(let i=0; i< this.ValidPairs.length; i++){
      if(this.ValidPairs[i].email == obj.email && this.ValidPairs[i].pass == obj.pass) {
        this.status = true;
      }
    }
    return this.status
  };

   getValidity() {
   return this.status;
  };
}
