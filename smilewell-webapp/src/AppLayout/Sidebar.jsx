import NavItem from '../components/UI/Button/NavItem.jsx'
import {DashboardIcon, RecordsIcon, AppointmentsIcon, NewPatientIcon, StaffIcon, LogoutIcon} from '../assets/icons/NavIcons.jsx';
import "../styles/sidebar.css"

function Sidebar(){
    return(
        <>
            <div className="sidebarContainer">
                <header className="header">
                    <h1><span className="SmileWell">SMILEWELL</span> <br/>Dental <span className="Subtext">System</span></h1>
                </header>
                <nav className="sideNavbar">
                        <NavItem to="/dashboard" icon={DashboardIcon}>Dashboard</NavItem>
                        <NavItem to="/records" icon={RecordsIcon}>Records</NavItem>
                        <NavItem to="/appointments" icon={AppointmentsIcon}>Appointments</NavItem>
                        <NavItem to="/newpatient" icon={NewPatientIcon}>New Patient</NavItem>
                        <NavItem to="/staff" icon={StaffIcon}>Staff</NavItem>
                </nav>
                <footer className="footer">
                    <NavItem variant="logout" icon={LogoutIcon}>Logout</NavItem>
                </footer>
            </div>
        </>
    );
}

export default Sidebar