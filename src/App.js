import React from "react";
import {useForm} from 'react-hook-form';


function App() {
  
  const {register, handleSubmit, errors} = useForm();
  
  const OnSubmit = (data) => {
    console.log(data);
  }

  return (
   <form onSubmit={handleSubmit(OnSubmit)}>
      <input type= "text" placeholder="Nome" name= "Nome"  {...register('nome', { required: true })}/>
      <input type= "text" placeholder="Sobrenome" name= "Sobrenome"  {...register('sobrenome', { required: true })}/>
      <input type= "text" placeholder= "CPF" name= "cpf" {...register('cpf', { required: true })}/>
      <input type= "text" placeholder= "CEP" name= "cep" {...register('cep', { required: true })}/>
      <input type= "text" placeholder= "Endereço" name= "endereco" {...register('endereco', { required: true })}/>
      <input type= "text" placeholder= "Número" name= "numero" {...register('numero', { required: true })}/>
      <input type= "password" placeholder= "Senha" name= "password" {...register('senha', { required: true })}/>
      <input type= "password" placeholder= "ConfirmarSenha" name= "passwordconf" {...register('senhaconf', { required: true } )}/>
      
      <input type= "submit" />

   </form>
  );
}

export default App;
