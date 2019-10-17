import { ProductsService } from '../../../core/services/products/products.service';
import { MyValidators } from '../../../utils/validators';
import { Router } from '@angular/router';
import { FormGroup, Validators } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-form-product',
  templateUrl: './form-product.component.html',
  styleUrls: ['./form-product.component.css']
})
export class FormProductComponent implements OnInit {

  form: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private productsService: ProductsService,
    private router: Router
  ) {
    // cuando hacemos una construccion se lo hace en constructor
    this.buildForms();
   }

  ngOnInit() {
    // es bueno para llamar datos..
  }
  saveProduct(event : Event){
    event.preventDefault();
    if(this.form.valid){
      const product= this.form.value;
      this.productsService.createProduct(product).subscribe(newProduct =>{
        console.log(newProduct)
        this.router.navigate(['/admin/product']);
      });
      console.log(this.form.value)
    }
  }

  private buildForms(){
    this.form = this.formBuilder.group({
      id:['',Validators.required],
      title: ['',Validators.required],
      price: ['',[Validators.required, MyValidators.isPriceValid]],
      image: [''],
      description: ['',Validators.required],
    });
  }

  get priceField() {
    return this.form.get('price');
  }
}
