import PropTypes from 'prop-types';
import { Rectangle } from "recharts"

/**
 * Component that create a custom background
 * in the chart, active when mouseover on
 * @param {Object} prop Tooltip payload
 * @param {Object[]} prop.points array of object that contain the x & y coordinates of selected dot
 * @param {number} prop.points.x x coordinates
 * @returns {JSX.Element}  A CustomCursor component
 */
const CustomCursor = ({ points }) => {
    return (
        <Rectangle fill="rgba(0, 0, 0, 0.1)" x={points[1].x} width={1000} height={300} />
    )
}

CustomCursor.propTypes = {
    points: PropTypes.arrayOf(
        PropTypes.shape({
            x: PropTypes.number,
            y: PropTypes.number
        })
    ),
}

export default CustomCursor