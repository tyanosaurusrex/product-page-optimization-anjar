import { Product } from "@/src/types/product"

export default function ProductCard({ product }: { product: Product }) {
  return (
    <a
      href={`/products/${product.id}`}
      className="block bg-white border rounded-lg hover:shadow transition"
    >
      <img
        src={product.thumbnail}
        alt={product.title}
        className="h-48 w-full object-cover rounded-t-lg"
      />

      <div className="p-4">
        <h3 className="font-semibold mb-1">
          {product.title}
        </h3>

        <p className="text-sm text-gray-600 line-clamp-2">
          {product.description}
        </p>

        <div className="mt-2 font-bold">
          ${product.price}
        </div>
      </div>
    </a>
  )
}
