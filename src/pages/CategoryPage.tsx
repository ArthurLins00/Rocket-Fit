import { useParams, useNavigate } from "react-router-dom";
import { products } from "../data/products";
import { ProductCard } from "../components/ProductCard";

export default function CategoryPage() {
  const { category } = useParams();
  const navigate = useNavigate();

  const filtered = products.filter(
    (product) => product.category.toLowerCase() === category?.toLowerCase()
  );

  return (
    <main className="p-6">
      <h1 className="text-2xl font-bold mb-4">Categoria: {category}</h1>

      <button
        onClick={() => navigate("/")}
        className="mb-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        Voltar para Home
      </button>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {filtered.map((product) => (
          <div key={product.id} className="cursor-pointer" onClick={() => navigate(`/products/${product.id}`)}>
            <ProductCard product={product} />
          </div>
        ))}
      </div>
    </main>
  );
}
