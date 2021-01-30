import * as React from "react";
import { CategoriasContext } from "../context/CategoriasContext";
import { RecetasContext } from "../context/RecetasContex";

// type SearchProps = {}
export const SearchForm = () => {
  const [busqueda, setBusqueda] = React.useState({
    ingrediente: '',
    categoria: ''
  })


  const { categorias } = React.useContext(CategoriasContext)
  const { setBuscarReceta , setConsultar} = React.useContext(RecetasContext)

  const onChange: React.ChangeEventHandler<HTMLInputElement | HTMLSelectElement> = (e) => {
    setBusqueda({
      ...busqueda,
      [e.target.name]: e.target.value
    })
  }
  

  return (
    <form onSubmit={(e: React.SyntheticEvent) => {
      e.preventDefault()
      setBuscarReceta(busqueda)
      setConsultar(true)
      }}>
      <fieldset>
        <legend>Busca Bebidas por Categoria</legend>
      </fieldset>
      <input type="text" value={busqueda.ingrediente} name="ingrediente" placeholder="Cooktail" onChange={onChange}/>
      <br></br>
      <select name="categoria" onChange={onChange}>
        <option value="default">-Elige una categoria-</option>
        {categorias.map(cat => <option key={cat.strCategory} value={cat.strCategory}>{cat.strCategory}</option>)}
      </select>
      <br></br>
      <input type="submit" value="buscar"/>
    </form>)
}


/*
  App --> provider
    Search
        inputs
    Listado
      Bebida (Array de bebidas)
    BebidaModal
      descripcion de la receta

*/