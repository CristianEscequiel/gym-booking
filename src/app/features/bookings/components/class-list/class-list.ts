import { Component, inject, OnInit, signal } from '@angular/core';
import { BookingService } from '../../../../service/booking.service';
import { Booking } from '../../../../models/booking.model';
@Component({
  selector: 'app-class-list',
  imports: [],
  templateUrl: './class-list.html',
  styleUrl: './class-list.scss',
})
export class ClassList implements OnInit {

bookingService = inject(BookingService);
$classList = signal<Booking[]>([]);

ngOnInit() {
  this.bookingService.getBookings().subscribe(bookings => {
    console.log('Bookings:', bookings);
    this.$classList.set(bookings);
  });
}
}
