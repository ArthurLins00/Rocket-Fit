import { useParams, useNavigate } from "react-router-dom";
import { products } from "../data/products";
import { ProductDetails } from "../components/ProductDetails";
import { useCart } from "../context/CartContext";
import type { Product } from "../types";
import { useFavorites } from "../context/FavoriteContext";

export default function ProductPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();

  const product = products.find((p) => p.id.toString() === id);
  
  const { toggleFavorite, isFavorite } = useFavorites();


  if (!product) {
    return (
      <div className="p-6">
        <h1 className="text-xl text-red-600">Produto não encontrado.</h1>
        <button
          className="mt-4 text-blue-600 underline"
          onClick={() => navigate("/")}
        >
          Voltar para Home
        </button>
      </div>
    );
  }

  function handleAddToCart(product: Product, quantity: number) {
    for (let i = 0; i < quantity; i++) {
      addToCart(product);
    }
  }

  return (
    <main className="p-6 space-y-6">
      <ProductDetails
        product={product}
        onClose={() => navigate("/")}
        onAddToCart={handleAddToCart}
        isFavorite={isFavorite(product.id)}
        onToggleFavorite={() => toggleFavorite(product)}
      />
    </main>
  );
}
