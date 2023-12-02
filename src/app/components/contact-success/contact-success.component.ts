import { Component, OnInit } from '@angular/core';
import {
  faAddressBook,
  faEnvelope,
  faPhoneAlt,
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-contact-success',
  templateUrl: './contact-success.component.html',
  styleUrls: ['./contact-success.component.css'],
})
export class ContactSuccessComponent implements OnInit {
  constructor() {}

  faAddressBook = faAddressBook;
  faEnvelope = faEnvelope;
  faPhoneAlt = faPhoneAlt;

  ngOnInit(): void {}
}
