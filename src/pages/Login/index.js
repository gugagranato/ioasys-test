import React, { useCallback } from 'react';
import { Form } from '@unform/web';

import Input from '../../components/Input';
import { Container, ContainerImage, Title, SubTitle } from './styles';

import logo from '../../assets/images/logo.png'
import Button from '../../components/Button';

function Login() {
  const title = "Bem vindo ao empresas";

  const handleSubmit = useCallback(ev => {
    ev.preventDefault();
    console.log('hellow')
  }, [])

  return (
    <Container>
      <ContainerImage>
        <img src={logo} alt="Ioasys" />
      </ContainerImage>
      <Title>
        {title.toUpperCase()}
      </Title>
      <SubTitle>
        Lorem ipsum dolor sit amet, contetur adipiscing elit. Nunc accumsan.
      </SubTitle>
      <Form onSubmit={handleSubmit}>
        <div>
          <Input name="email" placeholder="E-mail" />
          <Input name="password" placeholder="Senha" />
          <Button type="submit">{`Login`.toUpperCase()}</Button>
        </div>
      </Form>

    </Container>
  )
}

export default Login;