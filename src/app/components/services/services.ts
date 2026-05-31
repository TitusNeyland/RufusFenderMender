import { Component } from '@angular/core';

@Component({
  selector: 'app-services',
  standalone: true,
  templateUrl: './services.html',
  styleUrl: './services.scss',
})
export class Services {
  services = [
    {
      num: '01',
      name: 'COLLISION REPAIR',
      icon: 'fa-solid fa-car-burst',
      desc: 'Full structural and panel restoration after accidents. From minor fender benders to total restoration.',
    },
    {
      num: '02',
      name: 'DENT REMOVAL',
      icon: 'fa-solid fa-car',
      desc: 'Paintless dent repair for dings, hail damage, and door dents. Quick turnaround, no repaint needed.',
    },
    {
      num: '03',
      name: 'PAINT MATCHING',
      icon: 'fa-solid fa-paint-roller',
      desc: 'Computerized color matching ensures a seamless, factory-quality finish on every repair.',
    },
    {
      num: '04',
      name: 'FRAME STRAIGHTENING',
      icon: 'fa-solid fa-ruler-combined',
      desc: 'Precision laser alignment for frame and unibody damage. We restore vehicles to factory specifications.',
    },
    {
      num: '05',
      name: 'INSURANCE CLAIMS',
      icon: 'fa-solid fa-file-contract',
      desc: "We work directly with all major insurance providers and handle the paperwork so you don't have to.",
    },
    {
      num: '06',
      name: 'SCRATCH & SCUFF REPAIR',
      icon: 'fa-solid fa-eraser',
      desc: 'Surface and deep scratch restoration. Bumper scuffs, key scratches, parking lot damage, all handled.',
    },
  ];
}
