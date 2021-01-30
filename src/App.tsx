import React from 'react';
import './App.css';
import { ListadoTragos } from './components/ListadoTragos';
import { SearchForm } from './components/SearchForm';
import { CategoriasProvider } from './context/CategoriasContext'
import { ModalProvider } from './context/ModalContext';
import { RecetasProvider } from './context/RecetasContex';


const App = () => {

  return (
    <div className="App">
      <CategoriasProvider>
        <RecetasProvider>
          <ModalProvider>

            <SearchForm />
            <ListadoTragos/>
            

          </ModalProvider>
        </RecetasProvider>
      </CategoriasProvider>
    </div>
  );
}

export default App;
