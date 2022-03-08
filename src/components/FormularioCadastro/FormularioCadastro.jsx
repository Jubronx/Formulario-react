import { Stepper, Step, StepLabel, Typography } from '@material-ui/core';
import React, {useState, useEffect} from 'react';
import DadosEntrega from './DadosEntrega';

import DadosPessoais from './DadosPessoais';
import LoginUsuario from './LoginUsuario';

function FormularioCadastro({aoEnviar}){
  const [etapaAtual, setEtapaAtual] = useState(0);
  const [dadosColetados, setDados] = useState({});

  useEffect(()=>{
    if(etapaAtual === formularios.leaght-1){
    aoEnviar(dadosColetados);
    }
  })

    const formularios = [
      <LoginUsuario aoEnviar={coletarDados}/>,
      <DadosPessoais aoEnviar={coletarDados}/>,
      <DadosEntrega aoEnviar={coletarDados}/>,
      <Typography variant="h5">Obrigado por se cadastrar</Typography>,
    ];

    function coletarDados(dados){
      setDados({...dadosColetados, ...dados})
      proximo();
    }

    function proximo(){
      setEtapaAtual(etapaAtual+1) 
    }
    return (
      <>
       <Stepper activeStep={etapaAtual}>
         <Step><StepLabel>Login</StepLabel></Step>
         <Step><StepLabel>Pessoal</StepLabel></Step>
         <Step><StepLabel>Endereço</StepLabel></Step>
         <Step><StepLabel>Entrega</StepLabel></Step>
       </Stepper>
       {formularios[etapaAtual]}
      </>
    );
}

export default FormularioCadastro;