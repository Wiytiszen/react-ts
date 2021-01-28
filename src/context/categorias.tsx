import React, { useState, createContext } from 'react';
type SetValue = (value: any) => void;
interface CategoriasInterface {
  message:String;
  clear: SetValue;
  setMessage:SetValue;
}
export const CategoriasContext = createContext<CategoriasInterface  | null>(null);

export const CategoriasProvider: React.FunctionComponent = ({ children }) => {
  const [message, setMessage] = useState('Hello World');

  const clear = () => setMessage('Hello World');

  return (
    <CategoriasContext.Provider value={{ message, setMessage, clear }}>
      {children}
    </CategoriasContext.Provider>
  );
};
