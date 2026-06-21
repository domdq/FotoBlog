import "./Header.css";
import { HiCamera } from "react-icons/hi2";
import perfil from "../../assets/Jojo.png";

function Header() {
  return (
    <header>
      <div className="container">
        <nav>
          <HiCamera size={50} />
          <a href="#">Home</a>
          <a href="#">Galeria</a>
          <input type="text" placeholder="Pesquise por imagens e coleções" />
          <img src={perfil} alt="" />
        </nav>
      </div>
    </header>
  );
}

export default Header;
