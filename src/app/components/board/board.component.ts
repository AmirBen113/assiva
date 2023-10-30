import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css'],
})
export class BoardComponent implements OnInit {
  board: any = { 2021: [] };
  selectedYear = new Date().getFullYear();
  loading: Boolean = false;

  selectChangeHandler(event: any) {
    this.selectedYear = event.value;
  }

   ngOnInit(){
  }
}
