import axios from 'axios';
import * as React from 'react';
type SetValue = (value: any) => void;
type categoria = any
interface CategoriasInterface {
  categorias:categoria[]
  setCategorias: SetValue
}
export const CategoriasContext = React.createContext({} as CategoriasInterface);


export const CategoriasProvider: React.FunctionComponent = ({ children }) => {
const [categorias, setCategorias] = React.useState<categoria[]>([])  

//ejectutar el llamado a la API
React.useEffect(() =>{
    const obtenerCategorias = async ()=>{
      const url = `https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list`
      const categorias  = await axios.get(url)
      setCategorias(categorias.data.drinks)
    }
    obtenerCategorias()

  },[]
);
  return (
    <CategoriasContext.Provider value={{categorias, setCategorias }}>
      {children}
    </CategoriasContext.Provider>
  );
};