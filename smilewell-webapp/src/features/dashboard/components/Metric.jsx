import '../../../styles/dashboard/metric.css'

function Metric({title = "Metric", icon: Icon, value = 0}){
    return(
        <div className="metricContainer">
            <div className="metricIconContainer">
                {Icon && <Icon className="metricIcon"/>}
            </div>
            <div className="metricValuesContainer">
                <header className="metricTitle">
                    {title}
                </header>
                <footer className="metricValue">
                    {value}
                </footer>
            </div>
        </div>
    );
}

export default Metric