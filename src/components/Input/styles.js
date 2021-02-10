import styled, { css } from 'styled-components';



export const Container = styled.div`
  background: rgba(255,255,255,255, 0.0);
  padding: 16px;
  width: 100%;
  border-bottom: 1px solid #999794;
  color: #403e4d;
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
      color: #ff9000;
      border-color: #ff9000;
    `}
  ${(props) =>
    props.isFilled &&
    css`
      color: #ff9000;
    `}
  input {
    flex: 1;
    background: transparent;
    border: 0;
    color: #f4ede8;
    &::placeholder {
      color: #666360;
    }
  }
  svg {
    margin-right: 16px;
  }
`;

// export const Error = styled(Tooltip)`
//   height: 20px;
//   margin-left: 16px;
//   svg {
//     margin: 0;
//   }
//   span {
//     background: #c53030;
//     color: #fff;
//     &::before {
//       border-color: #c53030 transparent;
//     }
//   }
// `;