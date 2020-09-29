//Primeiro vamos o React (para utilizar as funcionalidades dos componentes)
//o createContext para criar um contexto
//o useContext(para criar um hook que retornar o valor do contexto, evitando que precisemos importar o useContext nos componentes que fossemos utilizá-lo)
//o useState (para simular que estamos guardando um contador global)
import React, { createContext, useContext, useState } from 'react';

//Aqui, criamos um contexto que começa null
const TesteContext = createContext(null);

//Agora criamos o componente testeContextProvider, que recebe por props todos os seus filhos e passa como valor para os filhos o valor do contador
export function testeContextProvider({ children }) {
  const [count, setCount] = useState(0);
  const addCount = () => {
    setCount(count+=1);
  }
  return (
    <TesteContext.Provider value={[addCount, count]}>
      {children}
    </TesteContext.Provider>
  );
}

export const TesteContextConsumer = TesteContext.Consumer;

//Aqui criamos um hook personalizado que quando importado em qualquer componente filho irá retornar os valores do nosso contexto, de modo que:
//useContext()[0] - está guardando uma função que atualiza o estado
//useContext()[1] - está guardando o valor do count 
//Ao importa-lo, o ideal é criar uma constante para guardar o seu valor: const valorDoContexto = useTesteContext()[1], por exemplo
export const useTesteContext = () => useContext(TesteContext);
