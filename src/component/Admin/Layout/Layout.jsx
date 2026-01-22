import { AdminLayout, MainContent, Layouts } from "./Layout.style"
import SideBar from "../Component/Common/SideBar/SideBar";

const Layout = ({ children }) => {
    return (
        <Layouts>
            <AdminLayout>
                <SideBar />
                <MainContent>
                    {children}
                </MainContent>
            </AdminLayout>
        </Layouts>

    );
};

export default Layout