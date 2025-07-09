import './App.css'
import Home from './components/home'


function App() {
  return (
    <div className='App-container'>
    <h1 className='h1'>MERN Frontend</h1>
     <Home age={77}/>
     <h3 className='h3'>This is Footer</h3>
     </div>
  )
}

export default App
