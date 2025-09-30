import React from "react";
import Sidebar from "./components/common/Sidebar/Sidebar";
import Header from "./components/common/Header/Header";

const EmployerLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <main className="dashboardLayout">
            <Sidebar />
            <div className="contentBox">
                <Header />
                {children}
            </div>
        </main>
    )
}
export default EmployerLayout;