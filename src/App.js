import './utilities/_variables.scss';
import './App.scss';
import './reset.scss';
import './splash/scene.scss';
import './splash/splash.scss';

import Scene from './splash/scene';
import Splash from './splash/splash';

function App() {
  return (
    <div id="App">
      <Splash />
      <Scene />
    </div>
  );
}

export default App;
