import { Component, OnInit } from '@angular/core';
import { OrdersService } from '../shared/orders.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent implements OnInit {
  coffees = ["Americano", "Flat White", "Cappuccino", "Latte", "Espresso", "Machiato", "Mocha", "Hot Chocolate", "Tea"];
  coffeeOrders = [];
  constructor(public ordersService: OrdersService) { }

  ngOnInit(): void {
  }

  addCoffee(coffee) {
    this.coffeeOrders.push(coffee)
  }

  removeCoffee(coffee) {
    let index = this.coffeeOrders.indexOf(coffee);
    (index > -1) && this.coffeeOrders.splice(index, 1);
  }

  onSubmit() {
    this.ordersService.form.value.coffeeOrder = this.coffeeOrders;
    let data = this.ordersService.form.value;
    console.log('Form Value', data);
    this.ordersService.createCoffeeOrder(data).then(res => {
      console.log('Created !!!')
    })
  }

}
