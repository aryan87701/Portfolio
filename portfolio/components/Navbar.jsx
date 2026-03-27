import { useState } from "react";

export default function Navbar() {
  const [curNav, setCurNav] = useState("Home");

  const navItems = ["Home", "About", "Projects", "Contact"];

  return (
    <div className="nav">
      <ul className="navul">
        {navItems.map((item, i) => (
          <li key={i}>
            <a
              href={`#${item.toLowerCase()}`}
              onClick={() => setCurNav(item)}
              className={curNav === item ? "active" : ""}
            >
              {item}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

