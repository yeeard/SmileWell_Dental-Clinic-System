import AppLayout from './AppLayout/AppLayout.jsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState, useEffect } from "react";

import Dashboard from "./features/dashboard/Dashboard.jsx";
import Records from "./features/patients/Records.jsx";
import Appointments from "./features/appointments/Appointments.jsx";
import NewPatient from "./features/patients/NewPatient.jsx";
import Staff from "./features/staff/Staff.jsx";


function App() {
      const [data, setData] = useState([]);

    useEffect(() => {
        fetch("http://localhost:3001/api/appointments")
            .then(res => res.json())
            .then(result => setData(result));
    }, []);
  
  return(
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout></AppLayout>}>
          {/* DEFAULT PAGE */}
          <Route index element={<Dashboard/>} />

          {/* PATHING */}
          <Route path="/dashboard" element={<Dashboard/>} />
          <Route path="/records" element={<Records/>} />
          <Route path="/appointments" element={<Appointments/>} />
          <Route path="/newpatient" element={<NewPatient/>} />        
          <Route path="/staff" element={<Staff/>} />    
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App