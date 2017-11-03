import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  emailValid: boolean = false;
  allFieldsFilled: boolean = false;
  messageToUser: string = "<h5><strong>Please fill in everything</strong></h5>";

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http.get(environment.equitiseAPI)
    .subscribe((data)=>console.log(data));
  }

  submit(name: string, email: string) {
    this.validateFields(name, email);
    this.validateEmail(email);
    if (this.allFieldsFilled) {
      let intakeForm = {
        name: name,
        email: email,
      };
      if (this.emailValid) {
        this.messageToUser = "<h5><strong>Successfully Registered!</strong></h5>";
        console.log(intakeForm);
      } else {
        this.messageToUser = "<h5><strong>Please enter a valid email!</strong></h5>";
      }
    } else {
      this.messageToUser = "<h5><strong>Both field required!</strong></h5>";
    }
  }

  validateEmail(email: string) {
    const pattern = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    (pattern.exec(email) !== null) ? this.emailValid = true : this.emailValid = false;
  }

  validateFields(name: string, email: string) {
    (name && email) ? this.allFieldsFilled = true : this.allFieldsFilled = false;
  }
}
