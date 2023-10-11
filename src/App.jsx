import logo from './assets/pngegg.png';//25:00
import './App.css'
import Post from './Post';

function App() {
  

  return (
    
      <div className="App">
        
        <div className="App-header">
          <img
            className="app-headerlogo"
            src={logo}
            />
        </div>
        <h1>Hello let's build a Instagram clone</h1>
        <Post/>
      </div>
      );
  }
       
export default App
