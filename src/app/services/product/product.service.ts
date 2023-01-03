import {Injectable} from '@angular/core';
import {Product} from "../../model/product";
import {catchError, Observable, of} from "rxjs";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  productUrl:string = "https://ea443d7b-1fb8-4f78-a686-5018afdf99d5.mock.pstmn.io";

  products: Product[] = [];

  constructor(private http: HttpClient) {
    for (let i = 0; i < 4; i++) {
      this.products?.push({
        id: i+1,
        name: "product "+ String(i),
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,\n" +
          "molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum\n",
        imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSw_pH5GgRI5BYMpp6ztlbV3qUhiPYeLFrLg&usqp=CAU",
        isAvailable: true,
        displayColor: "red",
        price: 100*(i+1),
        numberInStock: i
      })
    }

    for (let i =4 ; i <8 ; i++) {
      this.products?.push({
        id: i+1,
        name: "product " + String(i),
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,\n" +
          "molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum\n",
        imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSw_pH5GgRI5BYMpp6ztlbV3qUhiPYeLFrLg&usqp=CAU",
        isAvailable: false,
        displayColor: "green",
        price: 100*(i+1),
        numberInStock: i
      })
    }
  }

  getProduct(id: number): Observable<Product> {
    let fullUrl: string = this.productUrl + `/${id}`;
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
    let fullUrl: string = this.productUrl + "/product"
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
