import { useState } from "react";
import { useCart } from "../context/CartContext";
import { useNavigate } from "react-router-dom";


export default function CheckoutPage() {
  const { cartItems, total, clearCart } = useCart();
  const navigate = useNavigate();

  const [form, setForm] = useState({
    nome: "",
    endereco: "",
    cidade: "",
    cep: "",
    pagamento: "",
    parcelas: "",
  });

  const parcelasNum = Number(form.parcelas);
  const valorParcela = parcelasNum > 0 ? total / parcelasNum : 0;

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const pedido = {
    itens: cartItems,
    total,
    dadosEntrega: form,
    };
    clearCart();
    navigate("/confirmation", { state: pedido });
  }

  if (cartItems.length === 0) {
    return (
      <div className="p-6">
        <h1 className="text-2xl font-bold">Checkout</h1>
        <p>Seu carrinho está vazio.</p>
      </div>
    );
  }

  return (
    <div className="p-6 max-w-xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Finalizar Compra</h1>

      <button
        onClick={() => navigate("/cart")}
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition mb-3"
      >
        Voltar para o carrinho
      </button>

      <ul className="mb-4">
        {cartItems.map((item) => (
          <li key={item.id} className="flex justify-between mb-1">
            <span>{item.name} x {item.quantity}</span>
            <span>R$ {(item.price * item.quantity).toFixed(2)}</span>
          </li>
        ))}
      </ul>

      <p className="font-semibold mb-4">Total: R$ {total.toFixed(2)}</p>

      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="nome"
          placeholder="Nome completo"
          value={form.nome}
          onChange={handleChange}
          required
          className="w-full p-2 border rounded"
        />
        <input
          type="text"
          name="endereco"
          placeholder="Endereço"
          value={form.endereco}
          onChange={handleChange}
          required
          className="w-full p-2 border rounded"
        />
        <input
          type="text"
          name="cidade"
          placeholder="Cidade"
          value={form.cidade}
          onChange={handleChange}
          required
          className="w-full p-2 border rounded"
        />
        <input
          type="text"
          name="cep"
          placeholder="CEP"
          value={form.cep}
          onChange={handleChange}
          required
          className="w-full p-2 border rounded"
        />

        <select
          name="pagamento"
          value={form.pagamento}
          onChange={handleChange}
          required
          className="w-full p-2 border rounded"
        >
          <option value="">Selecione a forma de pagamento</option>
          <option value="cartao">Cartão de Crédito</option>
          <option value="boleto">Boleto</option>
          <option value="pix">PIX</option>
        </select>

        {form.pagamento === "cartao" && (
            <>
            <select
                name="parcelas"
                value={form.parcelas}
                onChange={handleChange}
                required
                className="w-full p-2 border rounded"
            >
                <option value="">Selecione o número de parcelas</option>
                <option value="1">1x sem juros</option>
                <option value="2">2x sem juros</option>
                <option value="3">3x sem juros</option>
            </select>
            {form.parcelas && (
                <p className="text-gray-700 mt-1">
                {parcelasNum}x de R$ {valorParcela.toFixed(2)}
                </p>
            )}
            </>
        )}

        <button
          type="submit"
          className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
        >
          Finalizar Pedido
        </button>
      </form>
    </div>
  );
}
