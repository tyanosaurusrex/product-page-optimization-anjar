import { getProducts, getCategories } from "@/src/lib/api"
import ProductList from "./ProductList"

export default async function ProductListPage() {
  const data = await getProducts()
  const products = data.products

  const categories = await getCategories()

  console.log("list products", products);
  console.log("list categories", categories);

  return (
    <ProductList
      initialProducts={products}
      categories={categories}
    />
  )
}
