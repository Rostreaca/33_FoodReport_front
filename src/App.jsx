import './App.css'
import { Route, Routes } from 'react-router-dom'
import Main from './component/common/Main/Main'
import Header from './component/common/Header/Header'
import Footer from './component/common/Footer/Footer'
import Admin from './component/Admin/Admin'

function App() {

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/admin/*" element={<Admin />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
