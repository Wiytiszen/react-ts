import React from 'react';
import './App.css';
import { BebidasGrid } from './components/BebidasGrid';
import { SearchBar } from './components/Search';
import { CategoriasProvider } from './context/categorias'


const App = () => {
  return (
    <CategoriasProvider>
      <div className="App">
        <SearchBar />
        <BebidasGrid>

        </BebidasGrid>
      </div>
    </CategoriasProvider>
  );
}

export default App;
