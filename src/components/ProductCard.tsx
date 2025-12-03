import type { Product } from "../types";

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  return (
    <div className="border rounded shadow p-4 flex flex-col items-center max-w-xs mx-auto">
      <img
        src={product.image}
        alt={product.name}
        className="w-40 h-40 object-contain mb-4 rounded bg-white" 
      />
      <h3 className="text-lg font-semibold text-center">{product.name}</h3>
      <p className="text-blue-700 font-bold mt-2">R$ {product.price.toFixed(2)}</p>
    </div>
  );
}
