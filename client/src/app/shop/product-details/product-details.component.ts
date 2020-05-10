import { Component, OnInit } from '@angular/core';
import { IProduct } from 'src/app/shared/Models/product';
import { ShopService } from '../shop.service';
import { error } from 'util';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss'],
})
export class ProductDetailsComponent implements OnInit {
  product: IProduct;
  constructor(
    private shopService: ShopService,
    private activateRoute: ActivatedRoute
  ) {}

  ngOnInit() {
    this.loadProduct();
  }

  loadProduct() {
    this.shopService
      //cast to int
      .getProduct(+this.activateRoute.snapshot.paramMap.get('id'))
      .subscribe(
        (product) => {
          this.product = product;
        },

        // tslint:disable-next-line: no-shadowed-variable
        (error) => {
          console.log(error);
        }
      );
  }
}
