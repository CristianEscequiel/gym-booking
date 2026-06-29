import { Injectable } from "@angular/core";
import { delay, Observable, of } from "rxjs";
import { Booking } from "../models/booking.model";

@Injectable({ providedIn: 'root' })
export class BookingService {
  getBookings(): Observable<Booking[]> {
    return of([
      { id: 1, className: 'Yoga', instructor: 'Laura Gómez', schedule: 'Lunes 18:00', availableSpots: 10 },
      { id: 2, className: 'Crossfit', instructor: 'Martín Díaz', schedule: 'Martes 19:00', availableSpots: 6 },
      { id: 3, className: 'Spinning', instructor: 'Sofía Pérez', schedule: 'Miércoles 20:00', availableSpots: 0 },
    ]).pipe(delay(800));
  }
}
