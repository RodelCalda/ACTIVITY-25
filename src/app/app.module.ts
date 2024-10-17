import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { PAYMENT_PROCESSORS } from './services/services/payment.token';
import { CreditCardPayment } from './services/credit-card-payment.service';
import { PayPalPayment } from './services/services/paypal-payment.service';
import { PaymentService } from './services/services/payment.service'; 

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule],
  providers: [
    {
      provide: PAYMENT_PROCESSORS,
      useClass: CreditCardPayment,
      multi: true
    },
    {
      provide: PAYMENT_PROCESSORS,
      useClass: PayPalPayment,
      multi: true
    },
    PaymentService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
