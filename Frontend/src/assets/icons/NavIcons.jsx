import '../../styles/navitem.css'

function DashboardIcon({className}){
    return(
        <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" fill="none">
            <path d="M20.8333 6.25H6.25V20.8333H20.8333V6.25Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M43.7498 6.25H29.1665V20.8333H43.7498V6.25Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M43.7498 29.1666H29.1665V43.75H43.7498V29.1666Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M20.8333 29.1666H6.25V43.75H20.8333V29.1666Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
    );
}

function RecordsIcon({className}){
    return(
        <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" fill="none">
            <path d="M43.75 16.6666V43.75H6.25V16.6666" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M47.9168 6.25H2.0835V16.6667H47.9168V6.25Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M20.8335 25H29.1668" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
    );
}

function AppointmentsIcon({className}){
    return(
        <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" fill="none">
            <path d="M39.5833 8.33337H10.4167C8.11548 8.33337 6.25 10.1989 6.25 12.5V41.6667C6.25 43.9679 8.11548 45.8334 10.4167 45.8334H39.5833C41.8845 45.8334 43.75 43.9679 43.75 41.6667V12.5C43.75 10.1989 41.8845 8.33337 39.5833 8.33337Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M33.3335 4.16663V12.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M16.6665 4.16663V12.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M6.25 20.8334H43.75" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
    );    
}

function NewPatientIcon({className}){
    return(
        <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" fill="none">
            <path d="M33.3335 43.75V39.5833C33.3335 37.3732 32.4555 35.2536 30.8927 33.6908C29.3299 32.128 27.2103 31.25 25.0002 31.25H10.4168C8.20669 31.25 6.08708 32.128 4.52427 33.6908C2.96147 35.2536 2.0835 37.3732 2.0835 39.5833V43.75" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M17.7083 22.9167C22.3107 22.9167 26.0417 19.1857 26.0417 14.5833C26.0417 9.98096 22.3107 6.25 17.7083 6.25C13.106 6.25 9.375 9.98096 9.375 14.5833C9.375 19.1857 13.106 22.9167 17.7083 22.9167Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M41.6665 16.6667V29.1667" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M47.9165 22.9167H35.4165" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
    );    
}

function StaffIcon({className}){
    return(
        <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" fill="none">
            <path d="M33.3335 8.33325H37.5002C38.6052 8.33325 39.665 8.77224 40.4464 9.55364C41.2278 10.335 41.6668 11.3948 41.6668 12.4999V41.6666C41.6668 42.7717 41.2278 43.8315 40.4464 44.6129C39.665 45.3943 38.6052 45.8333 37.5002 45.8333H12.5002C11.3951 45.8333 10.3353 45.3943 9.55388 44.6129C8.77248 43.8315 8.3335 42.7717 8.3335 41.6666V12.4999C8.3335 11.3948 8.77248 10.335 9.55388 9.55364C10.3353 8.77224 11.3951 8.33325 12.5002 8.33325H16.6668" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M31.2498 4.16675H18.7498C17.5992 4.16675 16.6665 5.09949 16.6665 6.25008V10.4167C16.6665 11.5673 17.5992 12.5001 18.7498 12.5001H31.2498C32.4004 12.5001 33.3332 11.5673 33.3332 10.4167V6.25008C33.3332 5.09949 32.4004 4.16675 31.2498 4.16675Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
    );    
}

function LogoutIcon({className}){
    return(
        <svg className={className} viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="48" height="48" fill="white" fillOpacity="0.01"/>
            <path d="M23.9917 6L6 6L6 42H24" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M33 33L42 24L33 15" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M16 23.9917H42" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
    );
}

export {DashboardIcon, RecordsIcon, AppointmentsIcon, NewPatientIcon, StaffIcon, LogoutIcon};