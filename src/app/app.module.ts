import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import {PaymentModule} from './payments/payment/payment.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    PaymentModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
