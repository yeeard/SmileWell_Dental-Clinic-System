import '../../styles/appointments/appointmententry.css'

function AppointmentEntry({ name = "Guest", 
                            branch, 
                            procedure = "Consultation", 
                            timeStart ="0:00", 
                            timeEnd = "1:00"}){
                                
    const branchColors = {
        Manila: "blue",
        Buendia: "orange"
        };
    
    const color = branchColors[branch] || "gray";

    return(
        <div className="appointmentCardBody">
            <div className="branchBar" style={{ background: color }}/>
            <main className="entryInfoContainer">
                <p className="entryInfoName"> {name} </p>
                <p> {procedure} </p>
                <p> {timeStart} to {timeEnd}</p>
            </main>
        </div>
    );
}

export default AppointmentEntry