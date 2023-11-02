import './App.css';
import { useState, createContext, useContext, useMemo } from 'react';

const CounterContext =createContext();

function CounterProvider({children}){
  const [counter, setCounter] =useState(1);
  const actions = useMemo(
    ()=> ({
      increase() {
        setCounter((prev)=>prev+1);
      },
      decrease(){
        setCounter((prev)=>prev-1);
      },
    }),
    []
  );
  
  const value =useMemo(() => [counter, actions], [counter, actions]);

  return (
    <CounterContext.Provider value={value}>
      {children}
    </CounterContext.Provider>
  );
}

function App() {
  return (
    <CounterProvider>
      <div>
        <Value/>
        <Buttons/>
      </div>
    </CounterProvider>
  );
}

function Value(){
  const [counter] =useContext[CounterContext];
  return <h1>{counter}</h1>
}
function Buttons(){
  const [,actions] =useContext[CounterContext];

  return(
    <div>
      <button onClick={actions.increase}>+</button>
      <button onClick={actions.decrease}>-</button>
    </div>
  );
}

export default App;
