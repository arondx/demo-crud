import Contacts from './Components/Contacts/Contacts';
import TileList from './Components/Contacts/TileList/TileList';
import { useState } from 'react';


function App() {
  const [name, setName] = useState(false);
  return (
    <>
      <header>
        
      </header>
      <main>
        <Contacts/>
      </main>
      <footer>

      </footer>
    </>
  );
}

export default App;
