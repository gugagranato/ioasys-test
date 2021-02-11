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
  // Handle the input text state
  const [inputText, setInputText] = useState('');

  // Debounce the original search async function
  const debouncedSearchCompany = useConstant(() =>
    AwesomeDebouncePromise(searchCompany, 300)
  );

  const search = useAsyncAbortable(
    async (abortSignal, text) => {
      // If the input is empty, return nothing immediately (without the debouncing delay!)
      if (text.length === 0) {
        return [];
      }
      // Else we use the debounced api
      else {
        return debouncedSearchCompany(text, abortSignal);
      }
    },
    // Ensure a new request is made everytime the text changes (even if it's debounced)
    [inputText]
  );

  // Return everything needed for the hook consumer
  return {
    inputText,
    setInputText,
    search,
  };
};