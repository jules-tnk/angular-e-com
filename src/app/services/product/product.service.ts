import {Injectable} from '@angular/core';
import {Product} from "../../model/product";
import {catchError, Observable, of} from "rxjs";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  baseUrl:string = "https://fakestoreapi.com";


  products: Product[] = [];

  constructor(private http: HttpClient) {
  }

  getProduct(id: number): Observable<Product> {
    let fullUrl: string = this.baseUrl + `/products/${id}`;
    return this.http.get<Product>(fullUrl)
      .pipe(
        catchError(this.handleError<Product>("getProductById"))
      );
  }

  getAllProductsDeprecated(): Observable<Product[]> {
    if (this.products){
      return of(this.products);
    }
    else return of([]);
  }

  getAllProducts(): Observable<Product[]> {
    let fullUrl: string = this.baseUrl + "/products"
    return this.http.get<Product[]>(fullUrl)
      .pipe(
        catchError(this.handleError<Product[]>("getProducts", []))
      );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      //this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
