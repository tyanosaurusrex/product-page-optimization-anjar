import { Category } from "../types/category"
import { FetchProductsResponse } from "../types/fetchProductsResponse"
import { Product } from "../types/product"

const BASE_URL = "https://dummyjson.com"

export async function getProducts(): Promise<FetchProductsResponse> {
  const res = await fetch(`${BASE_URL}/products`, {
    next: { revalidate: 60 }
  })

  if (!res.ok) {
    throw new Error("Failed to fetch products")
  }

  return res.json()
}

export async function getProductById(id: number): Promise<Product> {
  const res = await fetch(`${BASE_URL}/products/${id}`, {
    next: { revalidate: 60 }
  })

  if (!res.ok) {
    throw new Error("Product not found")
  }

  return res.json()
}

export async function getProductsByCategory(category: string): Promise<FetchProductsResponse> {
  const res = await fetch(`${BASE_URL}/products/category/${category}`, {
    next: { revalidate: 60 }
  })

  if (!res.ok) {
    throw new Error("Product with category selected not found")
  }

  return res.json()
}

export async function getProductSortByPrice(order: string): Promise<FetchProductsResponse> {
  const res = await fetch(`${BASE_URL}/products?sortBy=price&order=${order}`, {
    next: { revalidate: 60 }
  })

  if (!res.ok) {
    throw new Error("Failed to fetch products")
  }

  return res.json()
}

export async function getCategories(): Promise<Category[]> {
  const res = await fetch(`${BASE_URL}/products/category-list`, {
    next: { revalidate: 60 }
  })

  if (!res.ok) {
    throw new Error("Failed to fetch categories")
  }

  return res.json()
}