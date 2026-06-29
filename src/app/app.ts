import { Component, signal } from '@angular/core';
import { ClassList } from './features/bookings/components/class-list/class-list';

@Component({
  selector: 'app-root',
  imports: [ClassList],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('gym-booking');
}
