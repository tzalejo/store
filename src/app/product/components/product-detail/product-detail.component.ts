import { ProductsService } from '../../../core/services/products/products.service';
import { ActivatedRoute, Params } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/product.model';

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
      this.product = this.productsService.getProduct(id);
      console.log(this.product);
    })
  }

}
