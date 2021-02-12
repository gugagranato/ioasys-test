import AwesomeDebouncePromise from "awesome-debounce-promise";
import { useState } from "react";
import { useAsyncAbortable } from "react-async-hook";
import useConstant from "use-constant";
import api from '../services/api'

export const searchCompany = async (text) => {

  const token = localStorage.getItem('@IOASYS:token');
  const uid = localStorage.getItem('@IOASYS:uid');
  const client = localStorage.getItem('@IOASYS:client');

  const HEADERS = {
    "Content-type": "application/json; charset=UTF-8",
    'access-token': token,
    'uid': uid,
    'client': client
  }

  const result = await api.get(
    `/enterprises?name=${encodeURIComponent(text)}`,
    {
      headers: HEADERS,
    }
  );
  if (result.status !== 200) {
    throw new Error('Erro inexperado. = ' + result.status);
  }
  return result.data;
};

export const useSearchCompany = () => {
  const [inputText, setInputText] = useState('');

  const debouncedSearchCompany = useConstant(() =>
    AwesomeDebouncePromise(searchCompany, 300)
  );

  const search = useAsyncAbortable(
    async (abortSignal, text) => {
      if (text.length === 0) {
        return [];
      }
      else {
        return debouncedSearchCompany(text, abortSignal);
      }
    },
    [inputText]
  );

  return {
    inputText,
    setInputText,
    search,
  };
};
