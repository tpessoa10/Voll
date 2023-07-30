import Container from './components/Container'
import './App.css';
import Cabecalho from './components/Cabecalho';
import Titulo from './components/Titulo';
import Rodape from './components/Rodape';
import Tabela from './components/Tabela';
import useDadosConsulta from './useDadosConsulta';
import Grafico from './components/Grafico';
import useDadosProfissionais from './useDadosProfissionais';
import Avaliacao from './components/Avaliacao';
import Botao from './components/Botao';
import Subtitulo from './components/Subtitulo';


function App() {
  const { dados: consultas, erro: consultasErro } = useDadosConsulta()
  const { dados: profissionais, erro: profissionaisErro } = useDadosProfissionais()

  if(consultasErro || profissionaisErro){
    console.log("Ocorreu um erro na requisição")
  }
  return (
    <>
    <Cabecalho/>
    <Container>
      <Titulo>Área administrativa</Titulo>
      <Botao>Cadastrar Especialista</Botao>
      <Titulo>Consultas do dia</Titulo>
      <Tabela consultas={consultas}/>
      <Botao>Ver Mais</Botao>
      <Titulo>Consulta por Especialistas</Titulo>
      <Subtitulo>Dezembro/22</Subtitulo>
      <Grafico consultas={consultas} profissionais={profissionais}/>
      <Titulo>Avaliações por especialista</Titulo>
      <Subtitulo>Dezembro/22</Subtitulo>
      <Avaliacao profissionais={profissionais}/>
    </Container>
    <Rodape/>
    </>
  );
}

export default App;
