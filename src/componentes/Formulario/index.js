import { useState } from "react";
import Botao from "../Botao";
import CampoTexto from "../CampoTexto";
import ListaSuspensa from "../ListaSuspensa";
import "./Formulario.css";

const Formulario = () => {
  const funcao = ["Selecionar...","Jungler", "Top", "Mid", "Adc", "Suport"];

  const [nome,setNome] = useState('');
  const [cargo,setCargo] = useState('');
  const [imagem,setImagem] = useState('');
  const [time,setTime] = useState('');

  const AoSalvar = (evento) => {
    evento.preventDefault();
    console.log(nome,cargo,imagem,time)
  };

  return (
    <section className="formulario">
      <form onSubmit={AoSalvar}>
        <h2>Preencha os dados para criar o Card do jogador.</h2>
        <CampoTexto
          obrigatorio={true}
          label="Nome"
          placeholder="Digite seu nome...*"
          valor={nome}
          aoAlterado={valor => setNome(valor)}
        />
        <CampoTexto
          obrigatorio={true}
          label="Função"
          placeholder="Digite sua Função...*"
          valor={cargo}
          aoAlterado={valor => setCargo(valor)}
        />
        <CampoTexto
          label="Imagem"
          placeholder="Digite o endereço da imagem..."
          valor={imagem}
          aoAlterado={valor => setImagem(valor)}
        />
        <ListaSuspensa
          obrigatorio={true}
          label="Função"
          itens={funcao}
          valor={time}
          aoAlterado={valor => setTime(valor)}
          />
        <Botao>Criar Card</Botao>
      </form>
    </section>
  );
};

export default Formulario;
