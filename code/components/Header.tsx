"use client"

import Link from "next/link";
import { FaHtml5 } from "react-icons/fa";

import { useAppContext } from "./Provider";

export default function Header() {
  const { name } = useAppContext();
  return (
    <nav className="navbar">
      <Link className="navbar__logo" href="/">
        <FaHtml5 className="navbar_logo-image" size={45} />
      </Link>
      <div>
        <p>
          Zadanie <b>rekrutacyjne</b>
        </p>
        <p>{name}</p>
      </div>
    </nav>
  );
}
