import { Background, Container, Form } from './style'
import { FiMail, FiLock, FiUser } from 'react-icons/fi'
import { useState } from "react"; 

import { Link } from 'react-router-dom'

import { api } from '../../services/api'

import { Input } from '../../components/Input'
import { Button } from '../../components/Button'

export function SignUp () {
  const [name, setName ] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  
  function handleSignUp () {
    if(!name || !email || !password) {
       return alert("Preencha todos os campos!"); 
    }

    api.post("/users", {name, email, password})
    .then(() => { 
      alert("Usuário cadastrado com sucesso")
    })
    .catch(error => {
      if(error.response) {
        alert(error.response.data.message); 
      } else {
        alert("Não foi possível cadastrar")
      }
    });
  }

  return (
    <Container> 
      <Background/>
      <Form>
        <h1>Dogma Notes</h1>
        <p>Aplicação para salvar e gerenciar seus liks úteis</p>

        <h2>Crie sua conta</h2>

        <Input
          placeholder="Nome"
          type="text"
          icon={FiUser}
          onChange = {e => setName(e.target.value)}
        />

        <Input
          placeholder="E-mail"
          type="text"
          icon={FiMail}
          onChange = {e => setEmail(e.target.value)}
        />

        <Input
          placeholder="Sua Senha"
          type="password"
          icon={FiLock}
          autoComplete= "off"
          onChange = {e => setPassword(e.target.value)}
        />

        <Button onClick={handleSignUp} title="Cadastrar"/>

        <Link to= "/">
          Voltar para o login
        </Link>
      </Form>
    </Container>
  )

}