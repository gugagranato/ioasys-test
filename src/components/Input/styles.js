import styled, { css } from 'styled-components';
import Tooltip from '../Tooltip';

export const Container = styled.div`
  background: transparent;
  margin: 0 auto;
  margin-bottom: 40px;
  padding: 4px;
  width: 90%;
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

export const Error = styled(Tooltip)`
  height: 20px;
  margin-left: 16px;
  svg {
    margin: 0;
  }
  span {
    background: #c53030;
    color: #fff;
    &::before {
      border-color: #c53030 transparent;
    }
  }
`;
