import { Injectable } from '@angular/core';
import { Product } from '../../../product.model';
import { environment } from '../../../../environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  // products: Product[] = [ ];

  constructor(
    private http: HttpClient) {

  }

  public getAllProducts() {
    return this.http.get<Product[]>(`${environment.url_api}/products/`);
  }

  public getProduct(id: string) {
    // return this.products.find(items => id === items.id );
    return this.http.get<Product>(`${environment.url_api}/products/${id}`);
  }

  createProduct(product: Product){
    return this.http.post (`${environment.url_api}/products`,product);
  }

  // partial indicamos para que podamos enviar parte de informacion del producto
  updateProduct(id: string, changes: Partial<Product> ){
    return this.http.put(`${environment.url_api}/products/${id}`,changes);
  }

  public deleteProduct(id: string) {
    return this.http.delete(`${environment.url_api}/products/${id}`);
  }
}
