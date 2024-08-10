import Header from "@/components/header";
import { Outlet } from "react-router-dom";
const AppLayout = () =>{
    return(
        <div>
            <main className="min-h-screen container">
                <Header />
                <Outlet />
            </main>
            {/* {footer} */}
        </div>
    )
}

export default AppLayout;