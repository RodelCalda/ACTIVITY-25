import { Injectable } from '@angular/core';
import { LoggerService } from './logger.service';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  constructor(private logger: LoggerService) {}

  doSomething() {
    this.logger.log('Doing something');
  }
}
