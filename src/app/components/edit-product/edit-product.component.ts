import { Component, inject } from '@angular/core';
import { FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormField, MatInput } from '@angular/material/input';
import { Product } from '../../types/product';
import { ProductService } from '../../product.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder } from '@angular/forms';
import { provideToastr, ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-edit-product',
  standalone: true,
  imports: [MatButtonModule,FormsModule,MatInput,MatFormField,ReactiveFormsModule],
  templateUrl: './edit-product.component.html',
  styleUrl: './edit-product.component.scss'
})
export class EditProductComponent {
  formBuilder=inject(FormBuilder);
  productService=inject(ProductService);
  activatedRoute=inject(ActivatedRoute);
  toasterService=inject(ToastrService);
  router=inject(Router)
  productForm:FormGroup=this.formBuilder.group({
    id:[''],
    name:['',[Validators.required]],
    brand:[''],
    image:['',[Validators.required]],
    currentPrice:['',[Validators.required]],
    standardPrice:[''],
    discount:['']

  })
  ngOnInit(){
    const productId=this.activatedRoute.snapshot.params['id'];
    this.productService.getProductById(productId).subscribe(result=>{
    this.productForm.patchValue(result);
  })
}
editProduct(){
  if(this.productForm.invalid){
    this.toasterService.error("Please Enter Valid/Required Data..!");
    return;
  }
    console.log("Edit Product Successfully");
    this.productService.updateProduct(this.productForm.value).subscribe(result=>{
      this.toasterService.success("Updated Successfully");
      this.router.navigate(['/']);
    });
}
}

