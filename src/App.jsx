import "./App.css";
import { Route, Routes } from "react-router-dom";
import Main from "./component/common/Main/Main";
import Header from "./component/common/Header/Header";
import Footer from "./component/common/Footer/Footer";
import Admin from "./component/Admin/Admin";
import Login from "./component/Member/Login";
import { AuthProvider } from "./component/context/AuthContext";
import SignUp from "./component/Member/SignUp";
import MyPage from "./component/Member/MyPage";
import MyInfo from "./component/Member/MyInfo";
import LikesList from "./component/Member/LikesList";
import ReviewManagement from "./component/Member/ReviewManagement";
import MemberWithdrawal from "./component/Member/MemberWithdrawal";
import ReviewList from "./component/Review/ReviewList";
import ProtectedRoute from "./component/ProtectedURL";
import ReviewDetail from "./component/Review/ReviewDetail";
import PlaceDetail from "./component/Place/PlaceDetail";
import ErrorPage from "./component/common/ErrorPage/ErrorPage";

function App() {
  return (
    <>
      <AuthProvider>
        <Header />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/errorpage" element={<ErrorPage />} />
          <Route path="/reviews" element={<ReviewList />} />
          <Route path="/reviews/:reviewNo" element={<ReviewDetail />} />
          <Route path="/places/:placeNo" element={<PlaceDetail />} />
          <Route
            path="/admin/*"
            element={
              <ProtectedRoute requiredRole="ROLE_ADMIN">
                <Admin />
              </ProtectedRoute>
            }
          />
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
      </AuthProvider>
    </>
  );
}

export default App;
