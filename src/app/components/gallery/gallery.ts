import { Component } from '@angular/core';

@Component({
  selector: 'app-gallery',
  standalone: true,
  templateUrl: './gallery.html',
  styleUrl: './gallery.scss',
})
export class Gallery {
  tags = ['Collision Repair', 'Paint Matching', 'Panel Alignment', 'Structural Repair'];
}
