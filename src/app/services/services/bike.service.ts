import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BikeService {
  move() {
    console.log('Riding a bike');
  }
}

