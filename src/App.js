import './App.css';
import React,{ Component } from 'react';
import FormularioCadastro from './components/FormularioCadastro/FormularioCadastro';
import { Container, Typography } from '@material-ui/core';

import {validaCpf, validaNome, validaSenha} from './models/cadastro.js'
import ValidacoesCadastro from './contexts/ValidacoesCadastro'

class App extends Component {
  render(){
  return (
    <Container component="article" maxWidth="sm" >
      <Typography variant="h3" component="h1" align="center">Fomulario de cadastro</Typography>
      <ValidacoesCadastro.Provider value={{cpf:validaCpf, senha:validaSenha, nome:validaNome}}>
        <FormularioCadastro aoEnviar={aoEnviarForm}/>
      </ValidacoesCadastro.Provider>
    </Container>
  )
}
}
function aoEnviarForm(dados){
  console.log(dados);
}
export default App;
