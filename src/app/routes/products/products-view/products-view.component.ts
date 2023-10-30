import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ProductServiceService } from 'src/services/product/product-service.service';
import { UserServiceService } from 'src/services/user/user-service.service';
@Component({
  selector: 'app-products-view',
  templateUrl: './products-view.component.html',
  styleUrls: ['./products-view.component.css'],
})
export class ProductsViewComponent {
  currentIndex: number = -1;
  prodctFormData: any;
  currentProduct: any;
  modalHide: boolean = true;
  constructor(
    private router: ActivatedRoute,
    private productService: ProductServiceService,

    private routerNav: Router
  ) {
    this.router.params.subscribe((params) => {
      this.currentIndex = parseInt(params['id']);

      this.currentProduct = this.productService.productsData[this.currentIndex];
      console.log(this.currentProduct);
    });
  }
}
