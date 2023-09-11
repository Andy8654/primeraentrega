import './App.css';
import HolaMundo from './components/HolaMundo';
import NavBar from './components/NavBar';


function App() {

  return (
    <>
      <div>
        <NavBar/>
        <HolaMundo saludo= "Hola mundo...!" />
      </div>
    </>
  )
}

export default App
