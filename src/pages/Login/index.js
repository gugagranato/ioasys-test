import React, { useState } from 'react';
import { useAuth } from '../../context/AuthProvider';

import { ContainerForm, Title, SubTitle, Content, FormContact, ButtonForm } from './styles';

import logo from '../../assets/images/logo-home.png'
import emailIcon from '../../assets/icons/ic-email.svg'
import passwordIcon from '../../assets/icons/ic-cadeado.svg'
import Input from '../../components/Input';


function Login() {
  const { signIn } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(event)
    signIn({
      email: email,
      password: password,
    })

  }

  const myChangeHandler = (event) => {
    setEmail(event.target.value)
  }
  const myChangeHandlerPass = (event) => {
    setPassword(event.target.value)
  }

  return (
    <ContainerForm >
      <Content>
        <img src={logo} alt="Ioasys" />
        <Title >{`Bem-vindo ao Empresas`.toUpperCase()}</Title>
        <SubTitle>Lorem ipsum dolor sit amet, contetur adipiscing elit. Nunc accumsan.</SubTitle>
      </Content>
      <FormContact onSubmit={handleSubmit} method="post" tabindex="1">

        <Input type="text" name="nome" placeholder="Nome" required onChange={myChangeHandler} icon={emailIcon} />
        <Input type="password" name="email" placeholder="Email" required onChange={myChangeHandlerPass} icon={passwordIcon} />
        <ButtonForm type="submit">Enviar</ButtonForm>
      </FormContact>
    </ContainerForm>
  )
}

export default Login;