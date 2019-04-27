import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {NavbarComponent} from './navbar/navbar.component';
import {AppRoutingModule} from './app-routing/app-routing.module';
import {DashboardComponent} from './dashboard/dashboard.component';
import {OrdersComponent} from './orders/orders.component';
import {OrderCreateComponent} from './order-create/order-create.component';
import {FormsModule} from '@angular/forms';
import {CustomMaxDirective} from './directives/custom-max.directive';
import {CustomMinDirective} from './directives/custom-min.directive';
import {ValidationErrorService} from './services/ValidationErrorService';
import {ReservationsComponent} from './reservations/reservations.component';
import {ReservationApiService} from './api/service/ReservationApiService';
import {HttpClientModule} from '@angular/common/http';
import {Configuration} from './configuration/WebApiConfiguration';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    DashboardComponent,
    OrdersComponent,
    OrderCreateComponent,
    CustomMaxDirective,
    CustomMinDirective,
    ReservationsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    ValidationErrorService,
    ReservationApiService,
    Configuration
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
