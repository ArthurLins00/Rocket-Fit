import { useState } from "react";
import type { Product } from "../types";
import { Heart, HeartOff } from "lucide-react";

function renderStars(rating: number) {
  const fullStars = Math.floor(rating);
  const halfStar = rating - fullStars >= 0.5;
  const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);

  return (
    <>
      {"★".repeat(fullStars)}
      {halfStar && "☆"}
      {"☆".repeat(emptyStars)}
    </>
  );
}

interface ProductDetailsProps {
  product: Product;
  onClose: () => void;
  onAddToCart: (product: Product, quantity: number) => void;
  isFavorite: boolean;
  onToggleFavorite: () => void;
}

export function ProductDetails({ product, onClose, onAddToCart, isFavorite, onToggleFavorite }: ProductDetailsProps) {
  const [quantity, setQuantity] = useState(1);
  const comments = product.comments ?? [];
  const averageRating =
  comments.length > 0
        ? comments.reduce((sum, c) => sum + c.rating, 0) / comments.length
        : 0;

  return (
    <div className="max-w-xl mx-auto bg-white shadow-md p-6 rounded-lg">
      <img
        src={product.image}
        alt={product.name}
        className="w-full max-h-96 object-contain mb-4 rounded mx-auto"
      />
        <div className="flex items-center justify-between mb-2">
            <h1 className="text-2xl font-bold">{product.name}</h1>
            <button
                onClick={onToggleFavorite}
                className={`transition ${
                    isFavorite ? "text-red-500 hover:text-red-700" : "text-gray-400 hover:text-gray-600"
                }`}
                title={isFavorite ? "Remover dos favoritos" : "Adicionar aos favoritos"}
                >
                {isFavorite ? <Heart className="w-6 h-6" /> : <HeartOff className="w-6 h-6" />}
            </button>
        </div>
      <p className="text-gray-700 mb-2">{product.description}</p>
      <p className="text-xl font-semibold mb-4">R${product.price.toFixed(2)}</p>

      <div className="flex items-center mb-4">
        <label htmlFor="quantity" className="mr-2 font-medium">
          Quantidade:
        </label>
        <input
          type="number"
          id="quantity"
          min={1}
          value={quantity}
          onChange={(e) => setQuantity(Number(e.target.value))}
          className="border rounded px-2 py-1 w-20"
        />
      </div>

      <div className="flex gap-4 mb-6">
        <button
          onClick={() => onAddToCart(product, quantity)}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Adicionar ao carrinho
        </button>
        <button onClick={onClose} className="text-blue-600 underline">
          Voltar
        </button>
      </div>

      <section className="mt-8 border-t pt-6">
        <h3 className="text-xl font-semibold mb-2">Avaliação média</h3>
        <div className="text-yellow-500 text-2xl">
          {renderStars(averageRating)}{" "}
          <span className="text-gray-700 text-base ml-2">
            {averageRating.toFixed(1)} / 5
          </span>
        </div>

        <h3 className="text-xl font-semibold mt-6 mb-2">Comentários</h3>
        <div className="space-y-4 max-w-xl">
          {comments.map(({ id, user, comment, rating }) => (
            <div key={id} className="border rounded p-3">
              <div className="text-yellow-500">{renderStars(rating)}</div>
              <p className="font-semibold">{user}</p>
              <p className="text-gray-700">{comment}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
