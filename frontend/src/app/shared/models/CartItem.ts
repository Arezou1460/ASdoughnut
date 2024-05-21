import { Doughnut } from "./Doughnut";

export class CartItem {

    constructor(public doughnut: Doughnut) { }
    quantity: number = 1;
    price: number = this.doughnut.price;
}