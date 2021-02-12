import React, { useCallback, useRef, useState } from 'react';
import Loader from "react-loader-spinner";
import * as Yup from 'yup';

import { useAuth } from '../../context/AuthProvider';

import Input from '../../components/Input';

import logo from '../../assets/images/logo-home.png'
import emailIcon from '../../assets/icons/ic-email.svg'
import passwordIcon from '../../assets/icons/ic-cadeado.svg'

import { ContainerForm, Title, SubTitle, Content, FormContact, ButtonForm, ErrorText, ContainerSpinner } from './styles';

function Login() {
  const formRef = useRef(null);

  const { signIn } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = useCallback(
    async e => {
      e.preventDefault()
      try {
        const schema = Yup.object().shape({
          email: Yup.string()
            .required('E-mail obrigatório')
            .email('Digite um e-mail válido'),
          password: Yup.string().required('Senha obrigatória'),
        });

        await schema.validate({ email: email, password: password }, {
          abortEarly: false,
        });

        setLoading(true)
        await signIn({
          email: email,
          password: password,
        });
        setLoading(false)
      } catch (err) {
        if (err instanceof Yup.ValidationError) {

          setError(true)
          console.log(err)
          return;
        }
        setLoading(false)
        setError(true)
      }
    },
    [signIn, password, email],
  );


  const myChangeHandler = (event) => {
    setEmail(event.target.value)
  }
  const myChangeHandlerPass = (event) => {
    setPassword(event.target.value)
  }

  return (
    <>
      {loading &&
        <ContainerSpinner>
          <Loader
            type="TailSpin"
            color="#57bbbc"
            height='8.25rem'
            width='8.25rem'
            timeout={5000} //3 secs
          />
        </ContainerSpinner>}
      <ContainerForm >
        <Content>
          <img src={logo} alt="Ioasys" />
          <Title >{`Bem-vindo ao Empresas`.toUpperCase()}</Title>
          <SubTitle>Lorem ipsum dolor sit amet, contetur adipiscing elit. Nunc accumsan.</SubTitle>
        </Content>
        <FormContact ref={formRef} onSubmit={e => handleSubmit(e)}>
          <Input type="text" name="email" placeholder="Nome" onChange={myChangeHandler} icon={emailIcon} error={error} />
          <Input type="password" name="password" placeholder="Email" onChange={myChangeHandlerPass} icon={passwordIcon} error={error} />
          {error && <ErrorText>Credenciais informadas são inválidas, tente novamente.</ErrorText>}
          <ButtonForm type="submit">Enviar</ButtonForm>

        </FormContact>
      </ContainerForm>
    </>
  )
}

export default Login;
