import "./Header.css";
import { useState } from "react";

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header>
      <h2>Corretora Imóveis Patrimar</h2>
      <nav className={menuOpen ? "open" : ""}>
        <a href="#home">Home</a>
        <a href="#properties">Imóveis</a>
        <a href="#contact">Contato</a>
      </nav>
      <button className="menu-btn" onClick={() => setMenuOpen(!menuOpen)}>
        ☰
      </button>
    </header>
  );
}
