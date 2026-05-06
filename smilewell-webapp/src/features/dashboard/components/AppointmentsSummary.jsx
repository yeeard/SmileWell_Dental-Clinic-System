import '../../../styles/dashboard/upcoming.css'
import AppointmentEntry from '../../appointments/AppointmentEntry.jsx';

function AppointmentsSummary(){
    return(
        <div className="upcomingContainer">
            <header className="upcomingHeader">
                <p className="upcomingHeaderText">Coming Appointments</p>
                <select className="dashboardBranchFilter">
                    <option className="branchFilterText">All</option>
                    <option className="branchFilterText">Manila</option>
                    <option className="branchFilterText">Buendia</option>
                </select>
            </header>
            <footer className="upcomingTitle">
                <h2>Patient(s)</h2>
            </footer>
            <main className="summaryAppointments">
                <AppointmentEntry />
                <AppointmentEntry />
                <AppointmentEntry />
                <AppointmentEntry />
            </main>
        </div>
    );
}

export default AppointmentsSummary