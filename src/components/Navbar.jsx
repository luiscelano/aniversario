import { Heart } from "lucide-react";

const links = [
  ["Historia", "#historia"],
  ["Álbum", "#album"],
  ["Cartas", "#cartas"],
  ["Sorpresa", "#sorpresa"],
  ["Futuro", "#futuro"],
];

export default function Navbar() {
  return (
    <header className="topbar">
      <a className="brand" href="#inicio">
        <Heart size={19} fill="currentColor" /> Nuestra historia
      </a>
      <nav className="nav" aria-label="Navegación principal">
        {links.map(([label, href]) => (
          <a key={href} href={href}>
            {label}
          </a>
        ))}
      </nav>
    </header>
  );
}
