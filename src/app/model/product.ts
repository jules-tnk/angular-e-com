export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  imageUrl: string

  isAvailable: boolean;

  displayColor: string;
  numberInStock: number;
}
