import { Product } from "./product";

export type FetchProductsResponse = {
  products: Product[],
  total: number, 
  skip: number,
  limit: number
}