import './App.css';
import './reset.css';
import './navbar/navbar.css';
import './body/masthead.css';

import Navbar from './navbar/navbar';
import Masthead from './body/masthead';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Masthead />
    </div>
  );
}

export default App;
