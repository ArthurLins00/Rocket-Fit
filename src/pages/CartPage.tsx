import { useCart } from "../context/CartContext";
import { Link, useNavigate } from "react-router-dom";

export default function CartPage() {
  const { cartItems, removeFromCart, clearCart, increaseQuantity, decreaseQuantity, total } = useCart();
  const navigate = useNavigate();

  if (cartItems.length === 0) {
    return (
      <div className="p-6">
        <h1 className="text-2xl font-bold mb-4">Carrinho</h1>
        <p>Seu carrinho está vazio.</p>
        <button
        onClick={() => navigate("/")}
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition mb-5 mt-3"
      >
        Voltar para Home
      </button>
      </div>
    );
  }

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Carrinho de Compras</h1>

      <button
        onClick={() => navigate("/")}
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition mb-4"
      >
        Voltar para Home
      </button>

      <ul className="space-y-4">
        {cartItems.map((item) => (
          <li key={item.id} className="border p-4 rounded flex gap-4 items-center">
            <Link to={`/products/${item.id}`}>
              <img
                src={item.image}
                alt={item.name}
                className="w-20 h-20 object-cover rounded hover:opacity-80 transition"
              />
            </Link>
            <div className="flex-1">
              <Link to={`/products/${item.id}`} className="text-lg font-semibold hover:underline">
                {item.name}
              </Link>
              <p>Preço: R$ {item.price.toFixed(2)}</p>
              <div className="flex items-center gap-2 mt-2">
                    <button
                        className="bg-gray-300 px-2 rounded hover:bg-gray-400"
                        onClick={() => decreaseQuantity(item.id)}
                    >
                        −
                    </button>
                    <span className="min-w-[24px] text-center">{item.quantity}</span>
                    <button
                        className="bg-gray-300 px-2 rounded hover:bg-gray-400"
                        onClick={() => increaseQuantity(item.id)}
                    >
                        +
                    </button>
                </div>
            </div>
            <button
              className="bg-red-600 text-white px-3 py-1 rounded hover:bg-red-700"
              onClick={() => removeFromCart(item.id)}
            >
              Remover
            </button>
          </li>
        ))}
      </ul>

      <div className="mt-6 text-right">
            <p className="text-lg font-semibold">Total: R$ {total.toFixed(2)}</p>
            
            <button
                className="mt-2 bg-gray-700 text-white px-4 py-2 rounded hover:bg-gray-800 mr-2"
                onClick={clearCart}
            >
                Limpar Carrinho
            </button>

            <Link
                to="/checkout"
                className="mt-2 inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
            >
                Finalizar Compra
            </Link>
        </div>
    </div>
  );
}
