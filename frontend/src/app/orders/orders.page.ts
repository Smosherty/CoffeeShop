import { Component, OnInit } from '@angular/core';
import { CoffeeService } from '../services/coffee.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.page.html',
  styleUrls: ['./orders.page.scss'],
})
export class OrdersPage implements OnInit {

  coffees: any = [];
  coffeeForm: FormGroup;

  constructor(private coffeeService: CoffeeService, public fb: FormBuilder, private router: Router) {
    this.coffeeForm = this.fb.group({
      type: ['', Validators.compose([Validators.required])],
      topping: ['', Validators.compose([Validators.required])]
    });
  }

  gotoHome(){
    this.router.navigateByUrl("/home");
  }

  ngOnInit() {
    this.getAllCoffees();
  }

  getAllCoffees() {
    this.coffeeService.getCoffees().subscribe((response) => {
      this.coffees = response;
    })
  };

  deleteCoffee(id: any) {
    this.coffeeService.delete(id).subscribe(response => {
    })
    this.getAllCoffees();
  }

  // deleteCoffee(id: any , cof: any) {
  //   this.coffeeService.delete(id).subscribe(response => {
  //   })
  //   this.coffees.splice(cof)
  // }

  addCoffee() {
    if (this.coffeeForm.valid) {
      console.log('Valid coffee form:', this.coffeeForm.value);
      this.coffeeService.create(this.coffeeForm.value).subscribe(response => {
        this.getAllCoffees();
        console.log(response);
      });
    } else {
      console.log('Invalid form.');
    }
  }



}
