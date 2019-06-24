import { Component, OnInit } from '@angular/core';
import { LevelUpdateService} from '../../service/level-update.service';

@Component({
  selector: 'app-contact-details',
  templateUrl: './contact-details.component.html',
  styleUrls: ['./contact-details.component.css']
})

export class ContactDetailsComponent implements OnInit {

  firstName: string;
  lastName: string;
  emailAddress: string;
  addressLineOne: string;
  addressLineTwo: string;
  city: string;
  stateCode: string;
  postalCode: string;
  countryCode: string;
  phoneNumber: string;
  userId: string;
  password: string;

  level: string;

  constructor(private levelUpdateService: LevelUpdateService) { }

  ngOnInit() {
    this.level = this.levelUpdateService.getLevel();

    this.firstName = 'FistNameHere';
    this.lastName = 'LastNameHere';
    this.emailAddress = 'Fake@Fake.Fake';

    this.addressLineOne = '2519 W Royal Ln';
    this.addressLineTwo = 'Apt 208';
    this.postalCode = '75063';
    this.city = 'IRVING';
    this.stateCode = 'TX';

    let timeStamp = new Date().toISOString().substr(0, 19);
    timeStamp = this.replaceAll(timeStamp, '-', '');
    timeStamp = this.replaceAll(timeStamp, ':', '');
    timeStamp = this.replaceAll(timeStamp, ' ', '');

    this.phoneNumber = '9011234567';
    this.countryCode = 'US';

    this.userId = this.level + 'Fdm' + timeStamp;
    this.password = 'Test1234';
  }

  makeRandomString(length) {
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;
    for ( let i = 0; i < length; i++ ) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  }

  replaceAll(str, find, replace) {
    return str.replace(new RegExp(find, 'g'), replace);
  }



}
