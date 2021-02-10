import React, { useCallback, useState } from 'react';
import { useAuth } from '../../context/AuthProvider';

import { ContainerForm, Title, SubTitle, Content, FormContact, InputForm, ButtonForm } from './styles';

import logo from '../../assets/images/logo-home.png'
import icon from '../../assets/icons/ic-email.svg'
import { useHistory } from 'react-router-dom';

function Login() {
  const { signIn } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const history = useHistory();

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
        <InputForm type="text" name="nome" placeholder="Nome" required onChange={myChangeHandler} />
        <InputForm type="password" name="email" placeholder="Email" value={password} required onChange={myChangeHandlerPass} />
        <ButtonForm type="submit">Enviar</ButtonForm>
      </FormContact>
    </ContainerForm>
  )
}

export default Login;