import { Link, useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";
import logoImg from "../assets/rocket_fit_logo.png";
import { ShoppingCart, Heart, User, List, ChevronDown } from "lucide-react";
import { useState, useRef, useEffect } from "react";

export function Header() {
  const { cartItems } = useCart();
  const navigate = useNavigate();
  const [search, setSearch] = useState("");

  const [isCategoriesOpen, setIsCategoriesOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsCategoriesOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  function handleSearchSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (search.trim()) {
      navigate(`/search?q=${encodeURIComponent(search.trim())}`);
      setSearch("");
    }
  }

  function handleCategorySelect(category: string) {
    setIsCategoriesOpen(false);
    navigate(`/search?category=${encodeURIComponent(category)}`);
  }

  return (
    <header className="bg-teal-900 text-amber-400 p-4 shadow-md">
      <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-4">
        <div
          className="flex items-center gap-3 cursor-pointer"
          onClick={() => navigate("/")}
        >
          <img
            src={logoImg}
            alt="Rocket Fit Logo"
            className="w-14 h-14 object-contain"
          />
          <h1 className="text-2xl font-bold tracking-tight select-none">
            Rocket Fit
          </h1>
        </div>

        <form onSubmit={handleSearchSubmit} className="flex-grow max-w-md flex">
          <input
            type="text"
            placeholder="Buscar produtos..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full px-4 py-2 rounded-l bg-white text-black focus:outline-none"
          />
          <button
            type="submit"
            className="bg-amber-400 text-teal-900 px-4 rounded-r hover:bg-amber-500 transition"
          >
            Buscar
          </button>
        </form>

        <nav className="flex items-center gap-6 text-sm relative" ref={dropdownRef}>
          <Link
            to="/login"
            className="flex items-center gap-1 hover:text-amber-300 transition"
          >
            <User className="w-5 h-5" />
            <span>Login</span>
          </Link>

          <div
            className="flex items-center gap-1 cursor-pointer hover:text-amber-300 transition select-none relative"
            onClick={() => setIsCategoriesOpen(!isCategoriesOpen)}
          >
            <List className="w-5 h-5" />
            <span>Categorias</span>
            <ChevronDown className="w-4 h-4" />

            {isCategoriesOpen && (
              <ul className="absolute top-full mt-2 bg-teal-800 rounded shadow-lg text-amber-400 w-40 z-20">
                {["Vestuário", "Calçados", "Suplementos", "Acessórios"].map((cat) => (
                  <li
                    key={cat}
                    className="px-4 py-2 hover:bg-amber-400 hover:text-teal-900 cursor-pointer"
                    onClick={() => handleCategorySelect(cat)}
                  >
                    {cat}
                  </li>
                ))}
              </ul>
            )}
          </div>

          <div className="flex items-center gap-1 hover:text-amber-300 transition">
            <Heart className="w-5 h-5" />
            <Link to="/favorites" className="hover:underline">
              Favoritos
            </Link>
          </div>
          <Link
            to="/cart"
            className="relative flex items-center gap-2 bg-amber-400 text-teal-900 px-4 py-2 rounded font-semibold hover:bg-amber-500 transition"
          >
            <ShoppingCart className="w-5 h-5" />
            {cartItems.length > 0 && (
              <span className="absolute -top-2 -right-3 bg-red-600 text-white rounded-full px-2 text-xs">
                {cartItems.length}
              </span>
            )}
          </Link>
        </nav>
      </div>
    </header>
  );
}
