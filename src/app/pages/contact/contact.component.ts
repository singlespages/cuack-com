import { Component } from '@angular/core';
import {RecaptchaModule} from "ng-recaptcha";

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [
    RecaptchaModule
  ],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {

  resolved(captchaResponse: any) {
    console.log(`Resolved captcha with response: ${captchaResponse}`);
  }

}
