import React , { useState }from 'react';
import {TextField, Button} from "@material-ui/core"

function DadosEntrega({aoEnviar}){
  const [cep, setCep] = useState("");
  const [endereco, setEndereco] = useState("");
  const [numero, setNumero] = useState("");
  const [estado, setEstado] = useState("");
  const [cidade, setCidade] = useState("");
    return (
      <form
        onSubmit={(event) => {
          event.preventDefault();
          aoEnviar({ cep, endereco, numero, estado, cidade });
        }}
      >
        <TextField
          value={cep}
          onChange={(event) => {
            setCep(event.target.value);
          }}
          id="cep"
          name="cep"
          type="number"
          label="CEP"
          variant="outlined"
          margin="normal"
        />
        <TextField
          value={endereco}
          onChange={(event) => {
            setEndereco(event.target.value);
          }}
          id="endereco"
          name="endereco"
          type="text"
          label="Endereço"
          variant="outlined"
          fullWidth
          margin="normal"
        />
        <TextField
          value={numero}
          onChange={(event) => {
            setNumero(event.target.value);
          }}
          id="numero"
          name="numero"
          type="number"
          label="Numero"
          variant="outlined"
          margin="normal"
        />
        <TextField
          value={estado}
          onChange={(event) => {
            setEstado(event.target.value);
          }}
          id="estado"
          name="estado"
          type="text"
          label="Estado"
          variant="outlined"
          margin="normal"
        />
        <TextField
          value={cidade}
          onChange={(event) => {
            setCidade(event.target.value);
          }}
          id="cidade"
          name="cidade"
          type="text"
          label="Cidade"
          variant="outlined"
          margin="normal"
        />
        <Button type="submit" variant="contained" color="primary" fullWidth>
          Finalizar Cadastro
        </Button>
      </form>
    );
}

export default DadosEntrega