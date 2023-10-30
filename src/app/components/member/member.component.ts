import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-member',
  templateUrl: './member.component.html',
  styleUrls: ['./member.component.css'],
})
export class MemberComponent implements OnInit {
  eventCount: number = 0;
  memberCount: number = 0;
  reposCount: number = 0;
  webinarCount: number = 0;
  repoCountLoaded: boolean = false;

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.initCardListeners();
  }

  initCardListeners() {
    const boxes = document.querySelectorAll('.counter-box');
    boxes.forEach((box) => {
      box.addEventListener('mouseenter', () => {
        document.querySelectorAll('.counter-box').forEach((b) => {
          b.classList.remove('colored');
        });
        box.classList.add('colored');
        this.toggleCardColors(0, true);
        Array.from(box.children).forEach((child: HTMLElement) => {
          child.style.setProperty('color', '#ffffff', 'important');
        });
      });
      box.addEventListener('mouseleave', () => {
        box.classList.remove('colored');
        document.querySelectorAll('.counter-box')[0].classList.add('colored');
        Array.from(box.children).forEach((child: HTMLElement) => {
          child.style.removeProperty('color');
        });
        this.toggleCardColors(0);
      });
    });
    if (localStorage.getItem('theme') === 'light') this.toggleCardColors(0);
  }
  toggleCardColors(index: number, remove: boolean = false) {
    const elements = Array.from(
      document.querySelectorAll('.counter-box')[index].children
    );
    if (!remove) {
      elements.forEach((child: HTMLElement) => {
        child.style.setProperty('color', '#ffffff', 'important');
      });
    } else {
      elements.forEach((child: HTMLElement) => {
        child.style.removeProperty('color');
      });
    }
  }
}
