import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormField, MatInput } from '@angular/material/input';
import { Product } from '../../types/product';
import { ProductService } from '../../product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-product',
  standalone: true,
  imports: [MatButtonModule,FormsModule,MatInput,MatFormField],
  templateUrl: './add-product.component.html',
  styleUrl: './add-product.component.scss'
})
export class AddProductComponent {
product:Product={
  name:"",
  brand:"",
  image:"",
  currentPrice:0,
  standardPrice:0,
  discount:0
}
productService=inject(ProductService);
router=inject(Router)
addProduct(){
  console.log("Product Submitted",this.product);
  this.productService.addProduct(this.product).subscribe(result=>{
    alert("Product Saved Successfully")
    this.router.navigateByUrl("/")
  })
}
}
