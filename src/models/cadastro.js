function validaCpf(cpf){
  if(cpf.length!==11){
    return {valido:false, texto:"CPF deve conter 11 digitos"} 
  }else{
    return {valido:true, texto:""}
  }
}

function validaSenha(senha){
  if(senha.length<4 || senha.length>44){
    return {valido:false, texto:"Senha deve conter entre 4 e 44 digitos"} 
  }else{
    return {valido:true, texto:""}
  }
}

function validaNome(nome){
  if(nome.length<3 ){
    return {valido:false, texto:"O nome deve conter mais de 3 digitos"} 
  }else{
    return {valido:true, texto:""}
  }
}

export {validaCpf, validaSenha, validaNome}