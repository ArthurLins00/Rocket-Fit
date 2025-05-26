import { useCart } from "../context/CartContext";

export default function CartPage() {
  const { cartItems, removeFromCart, clearCart, total } = useCart();

  return (
    <main className="p-6">
      <h1 className="text-3xl font-bold mb-6">Meu Carrinho</h1>
      {cartItems.length === 0 ? (
        <p>Seu carrinho está vazio.</p>
      ) : (
        <>
          <ul>
            {cartItems.map(item => (
              <li key={item.id} className="mb-4 flex justify-between items-center">
                <div>
                  <strong>{item.name}</strong> x {item.quantity} <br />
                  R$ {(item.price * item.quantity).toFixed(2)}
                </div>
                <button
                  onClick={() => removeFromCart(item.id)}
                  className="text-red-600 hover:text-red-800"
                >
                  Remover
                </button>
              </li>
            ))}
          </ul>
          <div className="mt-6 font-bold text-lg">
            Total: R$ {total.toFixed(2)}
          </div>
          <button
            onClick={() => clearCart()}
            className="mt-4 bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
          >
            Esvaziar Carrinho
          </button>
        </>
      )}
    </main>
  );
}
