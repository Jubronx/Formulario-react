import React from 'react';

const ValidacoesCadastro = React.createContext({
    cpf:semValor,
    senha:semValor,
    nome:semValor
});

function semValor(){
return {valido:true, texto:""}
}
export default ValidacoesCadastro;