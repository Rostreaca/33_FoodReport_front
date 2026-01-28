import AdminDashBoard from "./Component/DashBoard/AdminDashBoard";
import AdminMember from "./Component/Member/AdminMember";
import AdminNotice from "./Component/Notice/AdminNotice";
import AdminPlace from "./Component/Place/AdminPlace";
import AdminReview from "./Component/Review/AdminReview";
import AdminHashtag from "./Component/Hashtag/AdminHashtag";
import Layout from "./Layout/Layout";
import { Routes, Route } from "react-router-dom";
import AdminBusiness from "./Component/Business/AdminBusiness"

const Admin = () => {
    return (
        <Layout >
                <Routes>
                    {/* 여기에 Route들 추가 */}
                    <Route path="/" element={<AdminDashBoard />}/>
                    <Route path="/members" element={<AdminMember />}/>
                    <Route path="/notices" element={<AdminNotice />}/>
                    <Route path="/restaurants" element={<AdminPlace />}/>
                    <Route path="/reviews" element={<AdminReview />}/>
                    <Route path="/hashtags" element={<AdminHashtag />}/>
                    <Route path="/business" element={<AdminBusiness />}/>
                </Routes>
        </Layout>
    )
}

export default Admin;