import { Component } from '@angular/core';
import { Nav } from './components/nav/nav';
import { Hero } from './components/hero/hero';
import { Services } from './components/services/services';
import { Gallery } from './components/gallery/gallery';
import { WhyUs } from './components/why-us/why-us';
import { Estimate } from './components/estimate/estimate';
// import { Booking } from './components/booking/booking';
import { Footer } from './components/footer/footer';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [Nav, Hero, Services, Gallery, WhyUs, Estimate, Footer],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {}
