import Link from "next/link";
import { FaHtml5 } from "react-icons/fa";

export default function Header() {
  return (
    <nav className="navbar">
      <Link className="navbar__logo" href="/">
        <FaHtml5 className="navbar_logo-image" size={45} />
      </Link>
      <p>Zadanie <b>rekrutacyjne</b></p>
    </nav>
  )
}
