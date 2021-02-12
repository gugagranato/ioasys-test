import { shade } from 'polished';
import styled from 'styled-components';


export const ContainerForm = styled.div`
  min-height: 100vh;
  display: flex;
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

export const ButtonForm = styled.button`
  width: 90%;
  font-size: 18px;
  border-radius: 4px;
  color: #fff;
  height: 40px;
  opacity: .8;
  margin: 0 auto;
  margin-bottom: 20px;
  /* margin-top: 40px; */
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
export const ErrorText = styled.h3`
  color: #ff0f44;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 1.4rem;
  font-weight: bold;
  font-size: 14px;
  line-height: 1.482rem;
  text-align: center;
`
export const ContainerSpinner = styled.div`
  left:50%;
  top:50%;
  position: absolute;
`
