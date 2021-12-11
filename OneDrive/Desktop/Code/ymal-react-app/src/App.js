import { useState } from 'react'
import Header from './components/header'
import './App.css';

function App() {
  const [searchTerm, setSearchTerm] = useState ('')


  return (
    <>
    <Header>
      <SearchForm searchTerm={searchTerm}
      setSearchTerm={setSearchTerm}
      />
    </Header>
     </>
  );
}

export default App;
