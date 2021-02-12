import React, {
  useRef,
  useState,
  useCallback,
} from 'react';

import { IoAlertCircle } from 'react-icons/io5';


import { Container, Error } from './styles';

const Input = ({
  icon,
  error,
  ...rest
}) => {
  const inputRef = useRef(null);

  const [isFocused, setIsFocused] = useState(false);
  const [isFilled, setIsFilled] = useState(false);

  const handleInputFocus = useCallback(() => {
    setIsFocused(true);
  }, []);

  const handleInputBlur = useCallback(() => {
    setIsFocused(false);

    setIsFilled(!!inputRef.current?.value);
  }, []);

  // useEffect(() => {
  //   registerField({
  //     name: fieldName,
  //     ref: inputRef.current,
  //     path: 'value',
  //   });
  // }, [fieldName, registerField]);

  return (
    <Container
      isErrored={error}
      isFilled={isFilled}
      isFocused={isFocused}
      data-testid="input-container"
    >
      {icon && <img src={icon} alt='icon' />}
      <input
        onFocus={handleInputFocus}
        onBlur={handleInputBlur}
        ref={inputRef}
        {...rest}
      />

      {error && (
        <Error title={error}>
          <IoAlertCircle color="#ff0f44" size={24} />
        </Error>
      )}
    </Container>
  );
};

export default Input;
