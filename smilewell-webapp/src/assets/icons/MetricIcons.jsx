import '../../styles/dashboard/metric.css'

function TotalPatientsIcon({className}){
    return(
        <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 80 80" fill="none">
            <path d="M56.6668 70V63.3333C56.6668 59.7971 55.2621 56.4057 52.7616 53.9052C50.2611 51.4048 46.8697 50 43.3335 50H16.6668C13.1306 50 9.73922 51.4048 7.23874 53.9052C4.73825 56.4057 3.3335 59.7971 3.3335 63.3333V70" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M29.9998 36.6667C37.3636 36.6667 43.3332 30.6971 43.3332 23.3333C43.3332 15.9695 37.3636 10 29.9998 10C22.636 10 16.6665 15.9695 16.6665 23.3333C16.6665 30.6971 22.636 36.6667 29.9998 36.6667Z" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M76.6665 70V63.3333C76.6643 60.3791 75.681 57.5093 73.8711 55.1744C72.0611 52.8395 69.5269 51.1719 66.6665 50.4333" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M53.3335 10.4333C56.2015 11.1677 58.7436 12.8357 60.559 15.1744C62.3743 17.5131 63.3596 20.3894 63.3596 23.35C63.3596 26.3106 62.3743 29.1869 60.559 31.5256C58.7436 33.8643 56.2015 35.5323 53.3335 36.2667" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
    );
}

function TotalAppointmentsIcon({className}){
    return(
        <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 80 80" fill="none">
            <path d="M63.3333 13.3334H16.6667C12.9848 13.3334 10 16.3181 10 20V66.6667C10 70.3486 12.9848 73.3334 16.6667 73.3334H63.3333C67.0152 73.3334 70 70.3486 70 66.6667V20C70 16.3181 67.0152 13.3334 63.3333 13.3334Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M53.3334 6.66663V20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M26.6666 6.66663V20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M10 33.3334H70" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
    );
}

function TotalStaffIcon({className}){
    return(    
        <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 80 80" fill="none">
            <path d="M53.3333 13.3334H59.9999C61.768 13.3334 63.4637 14.0358 64.714 15.286C65.9642 16.5362 66.6666 18.2319 66.6666 20V66.6667C66.6666 68.4348 65.9642 70.1305 64.714 71.3507C63.4637 72.631 61.768 73.3334 59.9999 73.3334H19.9999C18.2318 73.3334 16.5361 72.631 15.2859 71.3507C14.0356 70.1305 13.3333 68.4348 13.3333 66.6667V20C13.3333 18.2319 14.0356 16.5362 15.2859 15.286C16.5361 14.0358 18.2318 13.3334 19.9999 13.3334H26.6666" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M50.0001 6.66663H30.0001C28.1591 6.66663 26.6667 8.15901 26.6667 9.99996V16.6666C26.6667 18.5076 28.1591 20 30.0001 20H50.0001C51.841 20 53.3334 18.5076 53.3334 16.6666V9.99996C53.3334 8.15901 51.841 6.66663 50.0001 6.66663Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
    );
}

function UpcomingVisitsIcon({className}){
    return(    
        <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 80 80" fill="none">
            <path d="M53.3333 70V63.3333C53.3333 59.7971 51.9285 56.4057 49.428 53.9052C46.9275 51.4048 43.5361 50 39.9999 50H16.6666C13.1304 50 9.73898 51.4048 7.23849 53.9052C4.73501 56.4057 3.33325 59.7971 3.33325 63.3333V70" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M28.3333 36.6667C35.6971 36.6667 41.6667 30.6971 41.6667 23.3333C41.6667 15.9695 35.6971 10 28.3333 10C20.9695 10 15 15.9695 15 23.3333C15 30.6971 20.9695 36.6667 28.3333 36.6667Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M66.6667 26.6666V46.6666" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M76.6667 36.6666H56.6667" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
    );
}

export {TotalPatientsIcon, TotalAppointmentsIcon, TotalStaffIcon, UpcomingVisitsIcon};