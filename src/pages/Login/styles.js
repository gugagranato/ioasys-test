import { shade } from 'polished';
import styled from 'styled-components';


export const ContainerForm = styled.div`
   min-height: 100vh;
  display: flex;
  max-width: 800px;
  flex: 1;
  margin: 0 auto;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  max-width: 550px;
  
`
export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
export const Title = styled.h1`
  text-align: center; 
  margin-top: 4.5rem;
  max-width: 250px;
`
export const SubTitle = styled.h3`
  text-align: center; 
  margin-top: 1.5rem;
  margin-bottom: 1.5rem;
  max-width: 450px;
`
export const FormContact = styled.form`
   width: 100%;
  font-family: "Arial", Times, serif;
`
export const InputForm = styled.input`
  width: 100%;
  color: #292929;
  font-size: 18px;
  background: transparent;
  height: 40px;
  margin-bottom: 20px;
  border: 0;
  border-bottom: 1px solid #383743;
  color: #494758;
  text-indent: 20px;
`
export const ButtonForm = styled.button`
   width: 100%;
  font-size: 18px;
  border-radius: 4px;
  color: #fff;
  height: 40px;
  opacity: .8;
  margin-bottom: 20px;
  cursor: pointer;
  background: #57bbbc;
  display: block;
  border: none;
  border-bottom: 1px solid #57bba1;
  border-right: 1px solid #57bba1;
  transition: background-color 0.2s;

  &:hover {
    background: ${shade(0.1, '#57bbbc')};
  }
`


