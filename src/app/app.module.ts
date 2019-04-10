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

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    DashboardComponent,
    OrdersComponent,
    OrderCreateComponent,
    CustomMaxDirective,
    CustomMinDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    ValidationErrorService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
