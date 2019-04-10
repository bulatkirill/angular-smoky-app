import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Order} from '../model/Order';
import {ValidationErrors} from '@angular/forms';
import {ValidationErrorService} from '../services/ValidationErrorService';

@Component({
  selector: 'app-order-create',
  templateUrl: './order-create.component.html',
  styleUrls: ['./order-create.component.css']
})
export class OrderCreateComponent implements OnInit {

  @Output() createOrderEvent = new EventEmitter<Order>();

  orderToCreate: Order;

  constructor(private validationErrorService: ValidationErrorService) {
  }

  ngOnInit() {
    this.orderToCreate = new Order();
  }

  createOrder(): void {
    console.log(JSON.stringify(this.orderToCreate));
    this.createOrderEvent.emit(this.orderToCreate);
  }

  transformValidationErrorsToArray(validationErrors: ValidationErrors): string[] {
    return this.validationErrorService.transformValidationErrorsToArray(validationErrors);
  }

}
