import { Category } from "../types/category"
import { FetchProductsResponse } from "../types/fetchProductsResponse"
import { Product } from "../types/product"

const BASE_URL = "https://dummyjson.com"

export async function getProducts(): Promise<FetchProductsResponse> {
  const res = await fetch(`${BASE_URL}/products`, {
    cache: "force-cache"
  })

  if (!res.ok) {
    throw new Error("Failed to fetch products")
  }

  return res.json()
}

export async function getProductById(id: number): Promise<Product> {
  const res = await fetch(`${BASE_URL}/products/${id}`, {
    cache: "force-cache"
  })

  if (!res.ok) {
    throw new Error("Product not found")
  }

  return res.json()
}

export async function getProductsByCategory(category: string): Promise<FetchProductsResponse> {
  const res = await fetch(`${BASE_URL}/products/category/${category}`, {
    cache: "force-cache"
  })

  if (!res.ok) {
    throw new Error("Product with category selected not found")
  }

  return res.json()
}

export async function getProductSortByPrice(order: string): Promise<FetchProductsResponse> {
  const res = await fetch(`${BASE_URL}/products?sortBy=price&order=${order}`, {
    cache: "force-cache"
  })

  if (!res.ok) {
    throw new Error("Failed to fetch products")
  }

  return res.json()
}

export async function getCategories(): Promise<Category[]> {
  const res = await fetch(`${BASE_URL}/products/category-list`, {
    cache: "force-cache"
  })

  if (!res.ok) {
    throw new Error("Failed to fetch categories")
  }

  return res.json()
}