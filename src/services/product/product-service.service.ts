import { Injectable ,OnInit} from '@angular/core';
import { Product } from 'src/model/Product';
@Injectable({
  providedIn: 'root'
})
export class ProductServiceService implements OnInit{


  productsData: Product[] = [];

  constructor() {
    this.productsData = JSON.parse(localStorage.getItem('products') || '[]');
  }

  ngOnInit(): void {}

  getProductData() {
    console.log('getting from services');

    return this.productsData;
  }

  addProduct(currentProduct:Product) {
    this.productsData = JSON.parse(localStorage.getItem('products') || '[]');

    this.productsData.push(currentProduct);

    localStorage.setItem('products', JSON.stringify(this.productsData));
  }

  productDelete(index: number) {
    console.log('delete in services');
    console.log(index);

    this.productsData = JSON.parse(localStorage.getItem('products') || '[]');
    console.log(this.productsData);

    this.productsData.splice(index, 1);
    localStorage.setItem('products', JSON.stringify(this.productsData));
    console.log(this.productsData);
  }

  productUpdate(index: number, productData: Product) {
    // this.productsData = JSON.parse(localStorage.getItem('products') || '[]');
    // console.log(this.productsData);

    // this.productsData[index] = productData;
    // localStorage.setItem('products', JSON.stringify(this.productsData));

    // console.log('updated');
  }
}

