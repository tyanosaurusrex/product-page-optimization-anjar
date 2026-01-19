import ProductDetail from "./ProductDetail"
import { getProductById } from "@/src/lib/api"

type Props = {
  params: any
}

export default async function ProductDetailPage({ params }: Props) {
  const { id } = await params 
  const productId = Number(id)
  const product = await getProductById(productId)

  return (
    <div className="max-w-4xl mx-auto p-6">
      <a
        href="/products"
        className="inline-block mb-6 text-sm text-blue-600 hover:underline"
      >
        Back to Products
      </a>

      <h1 className="text-2xl font-bold mb-4">
        Product Detail #{productId}
      </h1>

      <ProductDetail product={product} />
    </div>
  )

}