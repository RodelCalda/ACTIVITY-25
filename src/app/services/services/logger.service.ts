import { Injectable } from '@angular/core';

export abstract class LoggerService {
  abstract log(message: string): void;
}
