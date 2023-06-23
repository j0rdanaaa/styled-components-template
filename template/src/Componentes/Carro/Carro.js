import { Infos, MeuCarro } from "./style";

export function Carro(props) {
    return (
      <MeuCarro>
        <h2>Meu carro</h2>
        <Infos>
          <li>Cor: {props.cor}</li>
          <li>Ano: {props.ano}</li>
          <li>Flex: {props.flex}</li>
          <li>Adicionado: {props.adicionadoPor}</li>
        </Infos>
      </MeuCarro>
    );
  }
  
