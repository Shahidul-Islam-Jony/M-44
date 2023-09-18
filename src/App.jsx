
import './App.css'
import LineChart from './components/LineChart/LineChart'
import NavBar from './components/NavBar/NavBar'
import Phones from './components/Phones/Phones'
import PriceOptions from './components/PriceOptions/PriceOptions'
// import DaisyUI from './components/DaisyUI/DaisyUI'

function App() {

  return (
    <>

      {/* <DaisyUI></DaisyUI> */}

      <NavBar></NavBar>

      <h1 className='text-3xl font-bold text-red-600'>Vite + React</h1>

      <PriceOptions></PriceOptions>
      <LineChart></LineChart>
      <Phones></Phones>

    </>
  )
}

export default App
