import './App.css'
import { Route, Routes } from 'react-router-dom'
import Main from './component/common/Main/Main'
import Header from './component/common/Header/Header'
import Footer from './component/common/Footer/Footer'
import Admin from './component/Admin/Admin'
import Login from './component/Member/Login'
import SignUp from './component/Member/SignUp'
import MyPage from './component/Member/MyPage'
import MyInfo from './component/Member/MyInfo'
import LikesList from './component/Member/LikesList'
import ReviewManagement from './component/Member/ReviewManagement'
import MemberWithdrawal from './component/Member/MemberWithdrawal'

function App() {

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/admin/*" element={<Admin />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/mypage" element={<MyPage />}>
          <Route index element={<MyInfo />} />
          <Route path="info" element={<MyInfo />} />
          <Route path="likes" element={<LikesList />} />
          <Route path="reviews" element={<ReviewManagement />} />
          <Route path="withdrawal" element={<MemberWithdrawal />} />
        </Route>
      </Routes>
      <Footer />
    </>
  )
}

export default App
