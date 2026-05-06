import '../styles/topbar.css'
import Card from '../components/UI/Card/Card'

function Topbar(){

    return(
        <div className="topbarContainer">
            <header className="topbarHeader">
                <h1>Page Title</h1>
            </header>
            <Card name="Jared" role="Dentist" />
        </div>
    );
}

export default Topbar