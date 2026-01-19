import { getProducts, getCategories } from "@/src/lib/api"
import ProductCard from "../components/ProductCard"
import { Category } from "@/src/types/category"
import { Product } from "@/src/types/product"

export default async function ProductListPage() {
  const data = await getProducts()
  const products = data.products

  const categories = await getCategories()

  console.log("list products", products);
  console.log("list categories", categories);

  return (
    <>
      {/* Filter & Sort */}
      <div className="flex gap-4 mb-6">
        <select className="border rounded px-3 py-2" onChange={}>
          <option>All Categories</option>
          {categories.map((category: string) => (
            <option>{category}</option>
          ))}
        </select>

        <select className="border rounded px-3 py-2">
          <option>Price: Low to High</option>
          <option>Price: High to Low</option>
        </select>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {products.map((product: Product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </>
  )
}
