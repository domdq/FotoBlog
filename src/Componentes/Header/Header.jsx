import "./Header.css";
import { HiCamera } from "react-icons/hi2";
import perfil from "../../assets/Jojo.png";

function Header() {
  return (
    <header className="container">
      <nav>
        <HiCamera />
        <p>Home</p>
        <p>Galeria</p>
        <input type="text" placeholder="Pesquise por imagens e coleções" />
        <img src={perfil} alt="" />
      </nav>
    </header>
  );
}

export default Header;
