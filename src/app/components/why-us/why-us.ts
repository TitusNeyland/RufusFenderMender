import { Component } from '@angular/core';

@Component({
  selector: 'app-why-us',
  standalone: true,
  templateUrl: './why-us.html',
  styleUrl: './why-us.scss',
})
export class WhyUs {
  cards = [
    {
      icon: 'fa-solid fa-screwdriver-wrench',
      title: 'Skilled Technicians',
      desc: 'Experienced team specializing in collision repair, dent removal, paint work, and other vehicle body damage.',
    },
    {
      icon: 'fa-solid fa-star',
      title: 'Reputable Shop',
      desc: 'A long-standing Little Rock auto body shop trusted by locals for honest, dependable repair work.',
    },
    {
      icon: 'fa-solid fa-shield-halved',
      title: 'Quality Repairs',
      desc: 'From minor dents to major collision damage, we focus on getting your vehicle back on the road safely.',
    },
    {
      icon: 'fa-solid fa-house',
      title: 'Locally Owned',
      desc: 'Serving Little Rock from 4501 Asher Ave. Shop: (501) 376-3966 · Cell: (501) 680-8926.',
    },
  ];
}
