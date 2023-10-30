import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductServiceService } from '../../../../services/product/product-service.service'
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit{
  productsData: any[] = [];

  constructor(private router: Router, private productService: ProductServiceService) {}

  ngOnInit(): void {
    console.log('getitng from product component ');

    this.productsData = this.productService.getProductData();
  }

  productDelete(index: number) {
    this.productService.productDelete(index);
    this.productsData = this.productService.getProductData();
  }

  productEdit(index: number) {
    // console.log(index);
    // this.router.navigate(['/products/edit', index]);
  }

  productView(index: number) {
    this.router.navigate(['/products',index])
    


  }

}
