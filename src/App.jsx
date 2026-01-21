import './App.css'
import { Route, Routes } from 'react-router-dom'
import Main from './compenent/common/Main/Main'
import Header from './compenent/common/Header/Header'
import Footer from './compenent/common/Footer/Footer'

function App() {

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
