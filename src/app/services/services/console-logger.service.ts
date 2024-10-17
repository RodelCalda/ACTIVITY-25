import { Injectable } from '@angular/core';
import { LoggerService } from './logger.service'; 

@Injectable({
  providedIn: 'root'
})
export class ConsoleLoggerService extends LoggerService {
  log(message: string) {
    console.log(message);
  }
}
