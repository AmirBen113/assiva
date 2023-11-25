import { Component, OnInit } from '@angular/core';
import { FadeInAnimation } from './animations/fade-in.animation';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [FadeInAnimation],
})
export class AppComponent implements OnInit {
  title = 'assiva';

  ngOnInit(): void {}
}
