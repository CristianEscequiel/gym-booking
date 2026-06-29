import { Component, inject, OnInit, signal } from '@angular/core';
import { BookingService } from '../../../../service/booking.service';
import { Booking } from '../../../../models/booking.model';
import { ClassDetail } from '../class-detail/class-detail';
import { FeedbackModal } from '../../../../shared/components/feedback-modal/feedback-modal';
@Component({
  selector: 'app-class-list',
  imports: [ClassDetail , FeedbackModal],
  templateUrl: './class-list.html',
  styleUrl: './class-list.scss',
})
export class ClassList implements OnInit {

bookingService = inject(BookingService);
$classList = signal<Booking[]>([]);
$classSelected = signal<Booking | null>(null);
$modalReserveClass = signal(false);
$error = signal<string | null>(null);
$loading = signal(false);
showModal = false;
modalTitle = '';
modalMessage = '';
modalType: 'success' | 'error' = 'success';


ngOnInit() {
  this.loadBookings();
}

showClassDetails(classId: number): void {
  const selectedClass = this.$classList().find(
    classItem => classItem.id === classId
  );
  this.$classSelected.set(selectedClass ?? null);
}
loadBookings(): void {
  this.$loading.set(true);
  this.$error.set(null);

  this.bookingService.getBookings().subscribe({
    next: (bookings) => {
      this.$classList.set(bookings);
    },
    error: () => {
      this.$error.set('No se pudieron cargar las clases.');
      this.$loading.set(false);
    },
    complete: () => {
      this.$loading.set(false);
    }
  });
}

reserveClass(booking: Booking): void {
  this.bookingService.reserveBooking(booking).subscribe({
    next: (updatedBooking) => {
      this.$classList.set(this.$classList().map(item =>
        item.id === updatedBooking.id ? updatedBooking : item
      ));
      this.$modalReserveClass.set(false);
      this.showClassDetails(updatedBooking.id);
      this.showModal = true;
      this.modalTitle = 'Reserva confirmada';
      this.modalMessage = 'Tu reserva ha sido confirmada exitosamente.';
      this.modalType = 'success';
    },
    error: (err) => {
      this.$modalReserveClass.set(false);
      this.$error.set(err.message);
      this.showModal = true;
      this.modalTitle = 'Error en la reserva';
      this.modalMessage = this.$error() ?? 'Ocurrió un error al intentar reservar la clase.';
      this.modalType = 'error';

    }
  });
}
openModalReserveClass(classId: number): void {
  this.$modalReserveClass.set(true);
}

closeFeedbackModal(): void {
  this.showModal = false;
}
}
