import { Component, OnInit } from '@angular/core';
import {
  UntypedFormBuilder,
  UntypedFormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
})
export class FooterComponent implements OnInit {
  subscribeForm: UntypedFormGroup;

  constructor(private form: UntypedFormBuilder) {
    this.subscribeForm = this.form.group({
      email: ['', [Validators.required, Validators.email]],
    });
  }

  ngOnInit(): void {}

  getCurrentYear(): number {
    return new Date().getFullYear();
  }

  subscribe() {
    console.log(this.subscribeForm.value);
  }
}
