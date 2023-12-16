import { useState } from 'react'; 
import { Background, Container, Form } from './style'
import { FiMail, FiLock } from 'react-icons/fi'
import { useAuth } from '../../hooks/auth'

import { Link } from 'react-router-dom';

import { Input } from '../../components/Input'
import { Button } from '../../components/Button'

export function SignIn () {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState(""); 

  const { signIn } = useAuth()
  
  function handleSignIn() {
    signIn({ email, password })
  }
  
  return (
    <Container> 
      <Form>
        <h1>Dogma Notes</h1>
        <p>Aplicação para salvar e gerenciar seus liks úteis</p>

        <h2>Faça seu login</h2>

        <Input
          placeholder="E-mail"
          type="text"
          icon={FiMail}
          onChange= {e => setEmail(e.target.value)}
        />

        <Input
          placeholder="Sua Senha"
          type="password"
          icon={FiLock}
          autoComplete= "off"
          onChange= {e => setPassword(e.target.value)}
        />

        <Button title="Entrar" onClick={handleSignIn}/>

        <Link to="/register"> 
          Criar conta
        </Link>
      </Form>

      <Background/>
    </Container>
  )

}