import { useState, useEffect } from 'react';

function useLocalStorage(key, initialValue) {
  // Função para obter o valor atual do localStorage
  const getValue = () => {
    const storedValue = localStorage.getItem(key);
    return storedValue ? JSON.parse(storedValue) : initialValue;
  };

  // Usa o useState com o valor inicial do localStorage
  const [value, setValue] = useState(getValue);

  useEffect(() => {
    // Atualiza o localStorage sempre que o valor mudar
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue];
}

export default useLocalStorage;
