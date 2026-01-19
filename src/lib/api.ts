import { Category } from "../types/category"
import { FetchProductsResponse } from "../types/fetchProductsResponse"
import { Product } from "../types/product"

const BASE_URL = "https://dummyjson.com"

export async function getProducts(): Promise<FetchProductsResponse> {
  const res = await fetch(`${BASE_URL}/products`)

  if (!res.ok) {
    throw new Error("Failed to fetch products")
  }

  return res.json()
}

export async function getProductsById(id: number): Promise<Product> {
  const res = await fetch(`${BASE_URL}/products/${id}`)

  if (!res.ok) {
    throw new Error("Product not found")
  }

  return res.json()
}

export async function getProductsByCategories(category: string): Promise<FetchProductsResponse> {
  const res = await fetch(`${BASE_URL}/products/${category}`)

  if (!res.ok) {
    throw new Error("Product with category selected not found")
  }

  return res.json()
}

export async function getCategories(): Promise<Category[]> {
  const res = await fetch(`${BASE_URL}/products/category-list`)

  if (!res.ok) {
    throw new Error("Failed to fetch categories")
  }

  return res.json()
}