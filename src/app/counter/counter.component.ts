import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss']
})
export class CounterComponent implements OnInit {
 value = 123;
 text = 'ala ma kota';

 onClick() {
   this.text = 'asd';
 }

  constructor() { }

  ngOnInit(): void {
  }

}
