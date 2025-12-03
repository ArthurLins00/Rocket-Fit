import { useNavigate } from "react-router-dom";
import { useFavorites } from "../context/FavoriteContext";
import { ProductCard } from "../components/ProductCard";

export default function FavoritesPage() {
  const { favorites } = useFavorites();
  const navigate = useNavigate();

  function handleClickProduct(id: number) {
    navigate(`/products/${id}`);
  }

  return (
    <main className="p-6">
      <h1 className="text-3xl font-bold mb-6">Favoritos</h1>

      {favorites.length === 0 ? (
        <p className="text-gray-600 mb-6">Nenhum produto favoritado ainda.</p>
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 mb-6">
          {favorites.map((product) => (
            <div
              key={product.id}
              onClick={() => handleClickProduct(product.id)}
              className="cursor-pointer"
            >
              <ProductCard product={product} />
            </div>
          ))}
        </div>
      )}

      <button
        onClick={() => navigate("/")}
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition mb-4"
      >
        Voltar para Home
      </button>
    </main>
  );
}
