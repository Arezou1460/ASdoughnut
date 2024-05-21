import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Doughnut } from 'src/app/shared/models/Doughnut';
import { DoughnutService } from 'src/app/services/doughnut.service';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-doughnut-page',
  templateUrl: './doughnut-page.component.html',
  styleUrls: ['./doughnut-page.component.css']
})
export class DoughnutPageComponent implements OnInit {

    doughnut!: Doughnut;

  constructor(activatedRoute: ActivatedRoute, doughnutService: DoughnutService,
    private cartService: CartService, private router: Router) {
    activatedRoute.params.subscribe((params) => {
      if(params.id)
      this.doughnut = doughnutService.getDoughnutById(params.id);
    })
   }


  ngOnInit(): void {
  }

  addToCart() {
    this.cartService.addToCart(this.doughnut);
    this.router.navigateByUrl("/cart-page");
  }

}
