import { Injectable } from '@angular/core';
import { PaymentProcessor } from '../interfaces/payment-processor.interface'; 

@Injectable({
  providedIn: 'root'
})
export class CreditCardPayment implements PaymentProcessor {
  process() {
    console.log('Processing credit card payment');
  }
}
