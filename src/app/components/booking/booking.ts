import { Component } from '@angular/core';

@Component({
  selector: 'app-booking',
  standalone: true,
  templateUrl: './booking.html',
  styleUrl: './booking.scss',
})
export class Booking {
  steps = [
    {
      num: '01',
      title: 'Pick a Date',
      desc: 'Choose a weekday drop-off that fits your schedule during our 9am–5pm hours.',
    },
    {
      num: '02',
      title: 'Bring It In',
      desc: 'Bring your vehicle to 4501 Asher Ave in Little Rock for an in-person assessment.',
    },
    {
      num: '03',
      title: 'We Take Care of It',
      desc: "You'll get daily updates by text. Pick up when she's good as new.",
    },
  ];

  handleBooking(event: Event) {
    event.preventDefault();
    alert(
      'Appointment requested! We will confirm by phone shortly.\n\n(In production, this would create a calendar event or send to your scheduling system.)'
    );
    (event.target as HTMLFormElement).reset();
  }
}
