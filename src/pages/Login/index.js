import React, { useCallback } from 'react';
import { useAuth } from '../../context/AuthProvider';

import { ContainerForm, Title, SubTitle, Content, FormContact, InputForm, ButtonForm } from './styles';

import logo from '../../assets/images/logo-home.png'
import icon from '../../assets/icons/ic-email.svg'
import { useHistory } from 'react-router-dom';

function Login() {
  const { signIn } = useAuth();

  const history = useHistory();

  const handleSubmit = (event) => {

    signIn({
      email: 'testeapple@ioasys.com.br',
      password: '12341234',
    })
    event.preventDefault();
  }

  return (
    <ContainerForm >
      <Content>
        <img src={logo} alt="Ioasys" />
        <Title >{`Bem-vindo ao Empresas`.toUpperCase()}</Title>
        <SubTitle>Lorem ipsum dolor sit amet, contetur adipiscing elit. Nunc accumsan.</SubTitle>
      </Content>
      <FormContact onSubmit={handleSubmit} method="post" tabindex="1">
        <InputForm type="text" name="nome" placeholder="Nome" required />
        <InputForm type="email" name="email" placeholder="Email" required />
        <ButtonForm type="submit">Enviar</ButtonForm>
      </FormContact>
    </ContainerForm>
  )
}

export default Login;