"use client"

import { useState } from "react"
import { Product } from "@/src/types/product"

type Properties = {
  product: Product
}

export default function ProductDetail({ product }: Properties) {
  const [activeImage, setActiveImage] = useState(0)

  return (
    <div className="max-w-5xl mx-auto p-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        
        <div>
          <div className="border rounded-lg mb-4">
            <img
              src={product.images[activeImage]}
              alt={product.title}
              className="w-full h-80 object-contain"
            />
          </div>

          <div className="flex gap-2">
            {product.images.map((img, index) => (
              <img
                key={img}
                src={img}
                onClick={() => setActiveImage(index)}
                className={`w-16 h-16 object-contain border rounded cursor-pointer
                  ${index === activeImage ? "border-black" : "border-gray-300"}`}
              />
            ))}
          </div>
        </div>

        <div>
          <h1 className="text-2xl font-semibold mb-2">
            {product.title}
          </h1>

          <span
            className={`inline-block px-3 py-1 text-sm rounded mb-4
              ${product.stock > 0
                ? "bg-green-100 text-green-700"
                : "bg-red-100 text-red-700"}`}
          >
            {product.stock > 0 ? "In Stock" : "Out of Stock"}
          </span>

          <p className="text-gray-600 mb-4">
            {product.description}
          </p>

          <p className="text-2xl font-bold mb-6">
            ${product.price}
          </p>

          <button className="px-6 py-3 border rounded hover:bg-black hover:text-white transition">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  )
}
