import { ProductsService } from '../../../core/services/products/products.service';
import { ActivatedRoute, Params } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Product } from '../../../product.model';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  product: Product;
  constructor(
    private route: ActivatedRoute,
    private productsService:ProductsService
  ) { }

  ngOnInit() {
    // subscribe voy a escuchar los cambios que hay en los paramentros..
    this.route.params.subscribe((params: Params)=>{
      const id = params.id;
      this.fetchProduct(id);
      console.log(this.product);
    })
  }

  fetchProduct(id: string){
    this.productsService.getProduct(id).subscribe(
      product => {
        console.log(product);
        this.product = product;
      }
    );

  }

  crearProduct(){
    const newProduct: Product = {
      id : '222',
      title : 'Mi nuevo producto',
      image : 'assets/image/banner-1.jpg',
      price: 3000,
      description : 'Este es el nuevo productos!'
    };
    this.productsService.createProduct(newProduct).subscribe(
      product => {
        console.log(product);
        // this.product = product;
      }
    );
  }

  updateProduct(){
    const updateProduct: Partial<Product>= {
      title : 'Nuevo datos',
      price: 5000,
      description : 'Este es el modificacion del productos!'
    };
    this.productsService.updateProduct('1',updateProduct).subscribe(
      product => {
        console.log(product);
        // this.product = product;
      }
    );
  }

  deleteProduct(){
    this.productsService.deleteProduct('20').subscribe(
      rta => {
        console.log(rta);
      }
    );
  }

}
