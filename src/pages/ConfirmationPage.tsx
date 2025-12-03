import { useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";

interface Pedido {
  itens: {
    id: number;
    name: string;
    quantity: number;
    price: number;
  }[];
  total: number;
  dadosEntrega: {
    nome: string;
    endereco: string;
    cidade: string;
    cep: string;
    pagamento?: string;
    parcelas?: string;
  };
}

export default function ConfirmationPage() {
  const location = useLocation();
  const navigate = useNavigate();

  const pedido = location.state as Pedido | undefined;

  useEffect(() => {
    if (!pedido) {
      navigate("/");
    }
  }, [pedido, navigate]);

  if (!pedido) {
    return null;
  }

  const { itens, total, dadosEntrega } = pedido;

  return (
    <div className="p-6 max-w-xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Pedido Confirmado!</h1>
      <p>Obrigado pela sua compra, <strong>{dadosEntrega.nome}</strong>!</p>

      <h2 className="mt-6 font-semibold text-lg">Resumo do Pedido</h2>
      <ul className="mb-4">
        {itens.map((item) => (
          <li key={item.id} className="flex justify-between mb-1">
            <span>{item.name} x {item.quantity}</span>
            <span>R$ {(item.price * item.quantity).toFixed(2)}</span>
          </li>
        ))}
      </ul>
      <p className="font-semibold mb-4">Total: R$ {total.toFixed(2)}</p>

      <h2 className="font-semibold text-lg">Entrega</h2>
      <p>{dadosEntrega.endereco}, {dadosEntrega.cidade} - CEP: {dadosEntrega.cep}</p>

      {dadosEntrega.pagamento && (
        <>
          <h2 className="font-semibold text-lg mt-6">Pagamento</h2>
          <p>Forma: {dadosEntrega.pagamento === "cartao" ? "Cartão de Crédito" : dadosEntrega.pagamento}</p>
          {dadosEntrega.pagamento === "cartao" && dadosEntrega.parcelas && (
            <p>
              Parcelamento: {dadosEntrega.parcelas}x de R$ {(total / Number(dadosEntrega.parcelas)).toFixed(2)}
            </p>
          )}
        </>
      )}

      <button
        onClick={() => navigate("/")}
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition mb-4 mt-2"
      >
        Voltar para Home
      </button>
    </div>
  );
}
