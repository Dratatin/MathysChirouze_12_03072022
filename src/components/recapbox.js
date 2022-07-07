import PropTypes from 'prop-types';

const Recapbox = ({icon, label, data, unit}) => {
    if (label === "calories") {
        unit = "kCal"
    }
    else {
        unit = "g"
    }
    return (
        <div className="recapbox">
            <div className={`recapbox__iconctn recapbox__iconctn--${label}`}>
                <img className="recapbox__iconctn__icon" src={icon} alt="icon"></img>
            </div>
            <div className="recapbox__text">
                <h3>{data}{unit}</h3>
                <p>{label}</p>
            </div>
        </div>
    )

}

Recapbox.propTypes = {
    icon: PropTypes.string,
    label: PropTypes.string,
    data: PropTypes.number,
    unit: PropTypes.string,
}

export default Recapbox