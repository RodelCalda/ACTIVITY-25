import { Injectable } from '@angular/core';
import { PaymentProcessor } from '../../interfaces/payment-processor.interface'; 

@Injectable({
  providedIn: 'root'
})
export class PayPalPayment implements PaymentProcessor {
  process() {
    console.log('Processing PayPal payment');
  }
}
