import { Injectable } from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class VehicleService {
  move() {
    console.log('Moving a vehicle');
  }
}