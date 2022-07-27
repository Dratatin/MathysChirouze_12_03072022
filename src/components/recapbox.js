import PropTypes from 'prop-types';

/**
 * Component that display a information 
 * block about an nutritional element
 * @param {Object} props nutrition props
 * @param {string} props.icon icon link
 * @param {string} props.label icon link
 * @param {string} props.data icon link
 * @param {string} props.unit icon link
 * @returns {JSX.Element}  A Recapbox component
 */
const Recapbox = ({ icon, label, data, unit }) => {
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