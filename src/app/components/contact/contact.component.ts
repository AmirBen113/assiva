import { Component, OnInit } from '@angular/core';
import {
  UntypedFormBuilder,
  UntypedFormGroup,
  Validators,
} from '@angular/forms';
import emailjs from 'emailjs-com';
import {
  faAddressBook,
  faEnvelope,
  faPhoneAlt,
} from '@fortawesome/free-solid-svg-icons';
import { environment } from '../../../environments/environment.prod';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent implements OnInit {
  contactForm: UntypedFormGroup;

  constructor(private fb: UntypedFormBuilder, private router: Router) {}

  faAddressBook = faAddressBook;
  faEnvelope = faEnvelope;
  faPhoneAlt = faPhoneAlt;

  ngOnInit() {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      subject: ['', Validators.required],
      message: ['', Validators.required],
      recaptcha: ['', Validators.required],
    });
  }

  resolved(captchaResponse: string) {
    console.log(`Resolved captcha with response: ${captchaResponse}`);
  }

  contact(e: Event) {
    if (this.contactForm.status === 'VALID') {
      emailjs.init('Wy0XJ_0uBsfzHfxnW');
      emailjs
        .sendForm(
          environment.emailServiceId,
          environment.emailTemplateId,
          e.target as HTMLFormElement,
          environment.emailUserId
        )
        .then(
          () => {
            this.contactForm.reset();
            this.router.navigate(['/contact-success']);
          },
          (error) => {
            console.log(error.text);
          }
        );
    }
  }
}
