import * as React from "react";
import {CategoriasContext} from '../context/categorias'

// type SearchProps = {}
export const SearchBar = () => {
  const  context = React.useContext( CategoriasContext )
  return (
    <div>
      {context?.message}
      <input type="text" placeholder="Cooktail"></input>
      <button onClick={() => { alert('Works') }}>Buscar</button>
    </div>)
}