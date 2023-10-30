import { Component,OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ProductServiceService } from 'src/services/product/product-service.service';
import { Product } from 'src/model/Product';

@Component({
  selector: 'app-products-create',
  templateUrl: './products-create.component.html',
  styleUrls: ['./products-create.component.css']
})
export class ProductsCreateComponent implements OnInit{
  userFormData: FormGroup;
  usersData: Product[] = [];
  modalHide:boolean=true;
  constructor(
    private fb: FormBuilder,
    private productService: ProductServiceService,
    private router:Router
  ) {
    this.userFormData = this.fb.group({
      name: this.fb.control(''),
      description: this.fb.control(''),
     
    });
  }

  ngOnInit(): void {}

  addProduct() {
    //square brackets in string as it will parse to JSON
    const currentProduct: Product = {
      name: this.userFormData.value.name,
      description: this.userFormData.value.description,
  
    };
    this.productService.addProduct(currentProduct);
    this.modalHide=false;
    setTimeout(()=>{
      this.modalHide=true;
      this.router.navigate(['/products'])

    },2000)
    
  }

}
