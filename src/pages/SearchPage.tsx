import { useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { products } from "../data/products";
import { ProductCard } from "../components/ProductCard";
import type { Product } from "../types";

export default function SearchPage() {
  const location = useLocation();
  const navigate = useNavigate();
  const queryParams = new URLSearchParams(location.search);

  const query = queryParams.get("q")?.toLowerCase() || "";
  const category = queryParams.get("category")?.toLowerCase() || "";

  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);

  useEffect(() => {
    let results = products;

    if (query) {
      results = results.filter((product) =>
        product.name.toLowerCase().includes(query)
      );
    }

    if (category) {
      results = results.filter(
        (product) => product.category.toLowerCase() === category
      );
    }

    setFilteredProducts(results);
  }, [query, category]);

  return (
    <main className="p-6">
      <div className="flex items-center justify-between mb-4">
        <h1 className="text-2xl font-bold">
          Resultados para:{" "}
          {query && <span className="text-teal-700">"{query}"</span>}
          {category && (
            <>
              {query && " e "}
              <span className="text-teal-700">Categoria: {category}</span>
            </>
          )}
          {!query && !category && <span className="text-teal-700">Todos os produtos</span>}
        </h1>
        <button
          onClick={() => navigate(-1)}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition mb-4"
        >
          Voltar para Home
        </button>
      </div>

      {filteredProducts.length === 0 ? (
        <p className="text-gray-500">Nenhum produto encontrado.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="cursor-pointer"
              onClick={() => navigate(`/products/${product.id}`)}
            >
              <ProductCard product={product} />
            </div>
          ))}
        </div>
      )}
    </main>
  );
}
