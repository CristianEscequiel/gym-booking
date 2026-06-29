import { Component, inject, OnInit, signal } from '@angular/core';
import { BookingService } from '../../../../service/booking.service';
import { Booking } from '../../../../models/booking.model';
import { ClassDetail } from '../class-detail/class-detail';
@Component({
  selector: 'app-class-list',
  imports: [ClassDetail],
  templateUrl: './class-list.html',
  styleUrl: './class-list.scss',
})
export class ClassList implements OnInit {

bookingService = inject(BookingService);
$classList = signal<Booking[]>([]);
$classSelected = signal<Booking | null>(null);

ngOnInit() {
  this.bookingService.getBookings().subscribe(bookings => {
    console.log('Bookings:', bookings);
    this.$classList.set(bookings);
  });
}
showClassDetails(classId: number): void {
  const selectedClass = this.$classList().find(
    classItem => classItem.id === classId
  );
  this.$classSelected.set(selectedClass ?? null);
}
}
