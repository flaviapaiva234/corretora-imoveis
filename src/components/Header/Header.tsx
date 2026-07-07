import "./Header.css";
import { useState } from "react";

type HeaderProps = {
  theme: "dark" | "light";
  onToggleTheme: () => void;
};

export function Header({ theme, onToggleTheme }: HeaderProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const buttonLabel = theme === "dark" ? "Mudar para o Claro ☀️" : "Mudar para o tema escuro 🌙";

  return (
    <header>
      <h2>Aniana Nunes | Corretora de Imóveis Patrimóvel</h2>
      <div className="header-actions">
        <nav className={menuOpen ? "open" : ""}>
          <a href="#home">Home</a>
          <a href="#properties">Imóveis</a>
          <a href="#contact">Contato</a>
        </nav>
        <button type="button" className="theme-toggle-btn" onClick={onToggleTheme}>
          {buttonLabel}
        </button>
      </div>
      <button type="button" className="menu-btn" onClick={() => setMenuOpen(!menuOpen)}>
        ☰
      </button>
    </header>
  );
}
