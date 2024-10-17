import { InjectionToken } from '@angular/core';
import { PaymentProcessor } from '../../interfaces/payment-processor.interface'; 

export const PAYMENT_PROCESSORS = new InjectionToken<PaymentProcessor[]>('Payment Processors');
