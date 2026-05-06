import '../../styles/appointments/appointments.css'
import AppointmentEntry from './AppointmentEntry';
import CreateAppointment from './CreateAppointment'
import Calendar from './Calendar.jsx'


function Appointments(){
    return(
    <>
        <div className="appointmentsContent">
            <main className="appointmentsMain">
                <header className="appointmentsHeader">
                    <div className="appointmentsHeaderLabelContainer">
                        <h1> TODAY </h1>
                    </div>
                    <CreateAppointment/>
                </header>
                <section className="appointmentCardContainer">
                    <AppointmentEntry 
                        branch="Manila"
                        name="Jared" 
                        procedure="Consultation"
                        timeStart="7:00AM"
                        timeEnd="8:00AM"
                        />
                    <AppointmentEntry
                        branch="Buendia"
                        name="Shaylyn" 
                        procedure="Consultation"
                        timeStart="8:00AM"
                        timeEnd="9:00AM"
                        />
                    <AppointmentEntry
                        branch="Manila"
                        name="Earl" 
                        procedure="Consultation"
                        timeStart="10:00AM"
                        timeEnd="11:00AM"
                        />
                </section>
            </main>
            <Calendar/>
        </div>
    </>
    );
}

export default Appointments;