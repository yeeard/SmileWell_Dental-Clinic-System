import Sidebar from './Sidebar.jsx'
import Topbar from './Topbar.jsx'
import { Outlet } from "react-router-dom"

import '../styles/applayout.css'

function AppLayout(){
    return(
        <div className="layout">
            <Sidebar/>

            <div className="content-area">
                <Topbar/>
                <div className="mainContainer">
                    <Outlet/>
                </div>
            </div>
        </div>
    );
}

export default AppLayout