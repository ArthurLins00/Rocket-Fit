import { useNavigate } from "react-router-dom";
import { products } from "../data/products";
import { ProductCard } from "../components/ProductCard";

export default function HomePage() {
  const navigate = useNavigate();

  function handleClickProduct(id: number) {
    navigate(`/products/${id}`);
  }

  return (
    <main className="p-4 sm:p-6">
      <h1 className="text-2xl sm:text-3xl font-bold mb-4">Produtos</h1>
      
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-5 lg:gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            onClick={() => handleClickProduct(product.id)}
            className="cursor-pointer"
          >
            <ProductCard product={product} />
          </div>
        ))}
      </div>
    </main>
  );
}
