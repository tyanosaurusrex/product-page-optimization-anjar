"use client"

import { useState } from "react"
import { getProductsByCategories } from "@/src/lib/api"
import { Product } from "@/src/types/product"
import ProductCard from "../components/ProductCard"

type Props = {
  initialProducts: Product[]
  categories: string[]
}

export default function ProductList({
  initialProducts,
  categories,
}: Props) {
  const [products, setProducts] = useState<Product[]>(initialProducts)
  const [selectedCategory, setSelectedCategory] = useState("")

  async function changeCategoryHandler (category: string) {
    console.log("category selected", category)
    setSelectedCategory(category)

    const fetchProducts = await getProductsByCategories(category)
    setProducts(fetchProducts.products)
  }

  return (
    <>
      <div className="flex gap-4 mb-6">
        <select
          value={selectedCategory}
          onChange={(e) => {
            const category = e.target.value;
            changeCategoryHandler(category)
          }}
          className="border rounded px-3 py-2"
        >
          <option value="">All Categories</option>
          {categories.map((category: string) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </>
  )
}
