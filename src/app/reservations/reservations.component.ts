import {Component, OnInit} from '@angular/core';
import {Reservation} from '../model/Reservation';
import {ReservationApiService} from '../api/service/ReservationApiService';

@Component({
  selector: 'app-reservations',
  templateUrl: './reservations.component.html',
  styleUrls: ['./reservations.component.css']
})
export class ReservationsComponent implements OnInit {

  reservations: Reservation[] = [];


  constructor(private reservationApiService: ReservationApiService) {
  }

  ngOnInit() {
    this.loadReservations();
  }


  private loadReservations() {
    // http call is asynchronous - it has to be set in promise
    this.reservationApiService.getAll<Reservation[]>().subscribe((data: Reservation[]) =>
        this.reservations = data,
      error => () => {
        console.log('Something went wrong...');
      },
      () => {
        console.log('Getting all values complete');
      });
  }
}
