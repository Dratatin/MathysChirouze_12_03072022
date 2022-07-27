import PropTypes from 'prop-types';

/**
 * Component that create a custom tooltip on 
 * the chart, active when mouseover a chart element
 * @param {Object} props Tooltip props
 * @param {boolean} props.active mouseover or not
 * @param {Object[]} props.payload tooltip payload
 * @param {number} props.payload.value tooltip value
 * @param {string} props.payload.unit unit of the payload value
 * @returns {JSX.Element}  A CustomTooltip component
 */
const CustomTooltip = ({ active, payload }) => {
    console.log(payload)
    if (active) {
        return (
            <div className={payload[0].fill === "#fff" ? "tooltip tooltip--light" : "tooltip tooltip--primary"}>
                <ul className="tooltip__listctn">
                    {payload[0] ? (<li>{payload[0].value}{payload[0].unit}</li>) : null}
                    {payload[1] ? (<li>{payload[1].value}{payload[1].unit}</li>) : null}
                </ul>
            </div>
        )
    }
    return null
}

CustomTooltip.propTypes = {
    active: PropTypes.bool,
    payload: PropTypes.arrayOf(
        PropTypes.shape({
            value: PropTypes.number,
            unit: PropTypes.string
        })
    )
}

export default CustomTooltip