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

const fotos = [
  { foto: foto1, titulo: "Multi-Screen", tag: "TAG" },
  { foto: foto2, titulo: "Colmeia", tag: "TAG" },
  { foto: foto3, titulo: "Deep purple", tag: "TAG" },
  { foto: foto4, titulo: "Setup de escritor", tag: "TAG" },
  { foto: foto5, titulo: "Ergonomia e cores", tag: "TAG" },
  { foto: foto6, titulo: "Organização e grids", tag: "TAG" },
  { foto: foto7, titulo: "Show de luzes", tag: "TAG" },
  { foto: foto8, titulo: "Workspace elétrica", tag: "TAG" },
  { foto: foto9, titulo: "Dark and red", tag: "TAG" },
];

export default function Fotos() {
  return (
    <section>
      <div className="container">
        <h1>Galeria</h1>
        <div className="section-fotos">
          {fotos.map((item, index) => (
            <CardFotos key={index} valor={item} />
          ))}
        </div>
      </div>
    </section>
  );
}

function CardFotos({ valor }) {
  return (
    <div className="CardFotos">
      <img src={valor.foto} />
      <div>
        <h3>{valor.titulo}</h3>
        <span>{valor.tag}</span>
      </div>
    </div>
  );
}
