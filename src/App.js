import { useState } from "react";
import Formulario from "./componentes/Formulario";
import Banner from "./componentes/banner/banner";
import Time from "./componentes/Time";

function App() {
  const times = [
    {
      nome: "Back-End",
      corPrimaria: "#57C278",
      corSecundaria: "#D9F7E9",
    },
    {
      nome: "Front-End",
      corPrimaria: "#82CFFA",
      corSecundaria: "#E8F8FF",
    },
    {
      nome: "Data Science",
      corPrimaria: "#A6D157",
      corSecundaria: "#F0F8E2",
    },
    {
      nome: "Devops",
      corPrimaria: "#E06B69",
      corSecundaria: "#FDE7E8",
    },
    {
      nome: "UX e Design",
      corPrimaria: "#DB6EBF",
      corSecundaria: "#FAE9F5",
    },
    {
      nome: "Mobile",
      corPrimaria: "#FFBA05",
      corSecundaria: "#FFFBD9",
    },
    {
      nome: "Inovação e Gestão",
      corPrimaria: "#FF8A29",
      corSecundaria: "#FFEEDF",
    },
  ];

  const [usuarios, setUsuarios] = useState([]);

  const aoNovoUsuarioAdicionado = (usuario) => {
    console.log(usuario);
    setUsuarios([...usuarios, usuario]);
  };

  return (
    <div className="App">
      <Banner />
      <Formulario
        times={times.map(time => time.nome)} aoUsuarioCadastrado={(usuario) => aoNovoUsuarioAdicionado(usuario)}
      />
      {times.map((time) => (
        <Time
          key={time.nome}
          nome={time.nome}
          corPrimaria={time.corPrimaria}
          corSecundaria={time.corSecundaria}
        />
      ))}
    </div>
  );
}

export default App;
