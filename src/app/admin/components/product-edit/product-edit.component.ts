import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ProductsService } from 'src/app/core/services/products/products.service';
import { Router,ActivatedRoute, Params } from '@angular/router';
import { MyValidators } from 'src/app/utils/validators';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {

  form: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private productsService: ProductsService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {
    // cuando hacemos una construccion se lo hace en constructor
    this.buildForms();
   }

  ngOnInit() {
    // es bueno para llamar datos..
    this.activatedRoute.params.subscribe((params : Params) =>{
      const id = params.id;
    });

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
