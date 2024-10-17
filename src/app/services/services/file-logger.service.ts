import { Injectable } from '@angular/core';
import { LoggerService } from './logger.service';

@Injectable({
  providedIn: 'root'
})
export class FileLoggerService extends LoggerService {
  log(message: string) {
    // Logic for logging to a file
  }
}
