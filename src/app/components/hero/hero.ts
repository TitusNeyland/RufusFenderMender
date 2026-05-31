import { Component } from '@angular/core';

@Component({
  selector: 'app-hero',
  standalone: true,
  templateUrl: './hero.html',
  styleUrl: './hero.scss',
})
export class Hero {
  stats = [
    { value: '5.0', label: 'GOOGLE RATING' },
    { value: '2', label: 'GOOGLE REVIEWS' },
    { value: '9–5', label: 'MON–FRI HOURS' },
  ];
}
