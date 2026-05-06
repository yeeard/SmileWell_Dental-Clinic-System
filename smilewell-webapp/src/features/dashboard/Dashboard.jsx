import '../../styles/dashboard/dashboard.css';
import { TotalPatientsIcon, TotalAppointmentsIcon, TotalStaffIcon, UpcomingVisitsIcon } from '../../assets/icons/MetricIcons.jsx'; 
import { useState, useEffect } from 'react'

import Metric from './components/Metric.jsx'
import AppointmentsSummary from './components/AppointmentsSummary.jsx';

function Dashboard(){
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch("http://localhost:3001/api/dashboard")
            .then(res => res.json())
            .then(result => setData(result));
    }, []);
    
    if (!data) return "Loading"

    const metrics = [
        {
            title: "Total Patients",
            key: "totalPatients",
            icon: TotalPatientsIcon
        },
        {
            title: "Total Appointments",
            key: "totalAppointments",
            icon: TotalAppointmentsIcon
        },
        {
            title: "Total Staff",
            key: "totalStaff",
            icon: TotalStaffIcon
        },
        {
            title: "Upcoming Visits",
            key: "upcomingVisits",
            icon: UpcomingVisitsIcon
        }
    ];

    return(
        <>
            <header className="dashboardHeader">
                <h1 className="dashboardHeaderText">Overview</h1>
            </header>
            <section className="metricsContainer">
                {metrics.map((metric) => (
                        <Metric
                            key={metric.key}
                            title={metric.title}
                            value={data[metric.key]}
                            icon={metric.icon}
                        />
                    ))}
            </section>
            <main className="upcomingAppointmentsContainer">
                <AppointmentsSummary/>
            </main>
        </>
    );
}

export default Dashboard;