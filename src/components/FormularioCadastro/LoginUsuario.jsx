import { Button, TextField } from '@material-ui/core';
import React , { useState, useContext }	from 'react';
import ValidacoesCadastro from "../../contexts/ValidacoesCadastro";
import useErros from "../../hooks/useErros";


function LoginUsuario({aoEnviar}){
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  const validacao = useContext(ValidacoesCadastro);
  const [erros, validaCampos, possoEnviar] = useErros(validacao);

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        if(possoEnviar()){
        aoEnviar({ email, senha });
        }
      }}
    >
      <TextField
        value={email}
        onChange={(event) => {
          setEmail(event.target.value);
        }}
        id="email"
        name="email"
        type="email"
        label="email"
        variant="outlined"
        required
        fullWidth
        margin="normal"
      />
      <TextField
        value={senha}
        onChange={(event) => {
          setSenha(event.target.value);
        }}
        onBlur={validaCampos}
        error={!erros.senha.valido}
        helperText={erros.senha.texto}
        id="senha"
        name="senha"
        type="password"
        label="senha"
        variant="outlined"
        required
        fullWidth
        margin="normal"
      />
      <Button type="submit" variant="contained" color="primary">
        Proximo
      </Button>
    </form>
  );
}
export default LoginUsuario