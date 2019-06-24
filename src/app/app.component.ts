import { Component } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import {ContactDetails } from './models/ContactDetails';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Creating an FDM User';
  contactDetails: ContactDetails;

  constructor(private httpClient: HttpClient) {}

  submit() {
   // this.contactDetails = {
   // //  firstName =
    // }
  }
}
