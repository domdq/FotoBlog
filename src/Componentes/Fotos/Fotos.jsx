import "./Fotos.css";
import foto1 from "../../assets/fotos1.png";
import foto2 from "../../assets/fotos2.png";
import foto3 from "../../assets/fotos3.png";
import foto4 from "../../assets/fotos4.png";
import foto5 from "../../assets/fotos5.png";
import foto6 from "../../assets/fotos6.png";
import foto7 from "../../assets/fotos7.png";
import foto8 from "../../assets/fotos8.png";
import foto9 from "../../assets/fotos9.png";

const fotos = [foto1, foto2, foto3, foto4, foto5, foto6, foto7, foto8, foto9];

export default function Fotos() {
  return (
    <section>
      <div className="container">
        <h1>Galeria</h1>
        <div className="section-fotos">
          {fotos.map(function render(img) {
            return <CardFotos valor={img} />;
          })}
        </div>
      </div>
    </section>
  );
}

function CardFotos(props) {
  return <img src={props.valor} id="fotos" />;
}
