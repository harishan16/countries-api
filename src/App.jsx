// import { BrowserRouter } from 'react-router-dom'÷
import './App.scss'
import Header from './components/Header/Header'
import CountryDetails from './components/CountryDetails/CountryDetails'
import MainDisplayPage from './pages/MainDisplayPage/MainDisplayPage'
import { BrowserRouter, Routes, Route} from 'react-router-dom';

function App() {

  return (
      <>
      <BrowserRouter>
      <Header></Header>
        <Routes>
            <Route path="/" element={<MainDisplayPage />} />
            <Route path="/country-info" element={<CountryDetails />} />
          
        </Routes>
      </BrowserRouter>
       
        
      </>
  )
}

export default App
