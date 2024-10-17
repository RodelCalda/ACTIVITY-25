import { Component } from '@angular/core';
import { AuthService } from '../services/services/auth.service'; 
import { UserService } from '../services/services/user.service'; 
import { AppService } from '../services/services/app.service'; 
import { VehicleService } from '../services/services/vehicle.service';
import { BikeService } from '../services/services/bike.service';

@Component({
  selector: 'app-principles',
  templateUrl: './principles.component.html'
})
export class PrinciplesComponent {
  
  constructor(
    private authService: AuthService,
    private userService: UserService,
    private appService: AppService,
    private vehicleService: VehicleService
  
  ) {}

  loginUser() {
    this.authService.authenticateUser({ username: 'user', password: 'password' });
    this.userService.getUserDetails('123');
  }

  performAction() {
    this.appService.doSomething();
  }

  moveVehicle() {
    this.vehicleService.move();  
  }
}
