import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Booking } from '../../../../models/booking.model';

@Component({
  selector: 'app-class-detail',
  imports: [],
  templateUrl: './class-detail.html',
  styleUrl: './class-detail.scss',
})
export class ClassDetail {

  @Input() classItem : Booking | null = null;
  @Output() reserveClass = new EventEmitter<number>();

}
