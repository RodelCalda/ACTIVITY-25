import { Injectable, Inject } from '@angular/core';
import { PaymentProcessor } from '../../interfaces/payment-processor.interface'; 
import { PAYMENT_PROCESSORS } from './payment.token';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {
  constructor(@Inject(PAYMENT_PROCESSORS) private processors: PaymentProcessor[]) {}

  processPayments() {
    this.processors.forEach(processor => processor.process());
  }
}

