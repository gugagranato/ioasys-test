import styled, { css } from 'styled-components';

export const Container = styled.div`
  background: transparent;
  margin-bottom: 40px;
  padding: 4px;
  width: 100%;
  border-bottom: 1px solid #383743;
  color: #666360;
  display: flex;
  align-items: center;
  & + div {
    margin-top: 8px;
  }
  ${(props) =>
    props.isErrored &&
    css`
      border-color: #c53030;
    `}
  ${(props) =>
    props.isFocused &&
    css`
      color: #57bbbc;
      border-color: #57bbbc;
    `}
  ${(props) =>
    props.isFilled &&
    css`
      color: #57bbbc;
    `}
  input {
    font-size: 18px;
    height: 40px;
    flex: 1;
    background: transparent;
    border: 0;
    color: #292929;
    &::placeholder {
      color: #666360;
    }
  }
  img {
    margin-right: 10px;
  }
`;

// export const InputForm = styled.input`
//   width: 100%;
//   color: #292929;
//   font-size: 18px;
//   background: transparent;
//   height: 40px;
//   margin-bottom: 20px;
//   border: 0;
//   border-bottom: 1px solid #383743;
//   color: #494758;
//   text-indent: 20px;
// `