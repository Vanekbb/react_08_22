import { useState } from 'react';
import './App.css';
import { Message } from './components/Message';




export const App = () => {

  const [name, setName] = useState('Ivan')

  return (
    <div className="App">
     <Message name={name} />
    </div>
  );
}

export default App;
