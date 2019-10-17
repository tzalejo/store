import { Product } from '../../../product.model';
import { ProductsService } from '../../../core/services/products/products.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent implements OnInit {
  products: Product[] =[];
  expandedElement:  null;
  displayedColumns: string[] = ['id', 'title', 'price', 'action'];
  constructor(private productsService: ProductsService) { }

  ngOnInit() {
    this.fetchProducts();

  }

  fetchProducts(){
    this.productsService.getAllProducts().subscribe(products=>{
      this.products = products;
      // console.log(this.products.splice(1) );
    });
  }
  updateProduct(){}

  deleteProduct(id: string, index){
    console.log(index);
    console.log(id);
    
    // console.log(document.getElementById('').removeChild(index));
    // console.log(this.products.splice(index,1).pop());
    // var m = this;
    // this.products.forEach((el, i)=>{
    //   // console.log(i==index);
    //   if (i==index) {
    //     m.products.splice(i,1);

    //   }

    // });
    // me = this;
    // console.log(this.products);
    // this.products = this.products.splice(index,1);
    // console.log(this.products.splice(index,1));
    // this.productsService.deleteProduct(id).subscribe(response => {
    //   this.products.splice(index,1);
    // })
  }

}
