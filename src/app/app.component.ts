import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  numbers: number[] = [1, 2, 3, 4, 5]
  onlyOdd: boolean = false;
  oddNumbers: number[] = this.numbers.filter((el: number) => el % 2 !== 0);
  evenNumbers: number[] = this.numbers.filter((el: number) => el % 2 === 0)
  value: number = 50
}
