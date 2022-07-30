import PropTypes from 'prop-types';
import CustomTooltip from './CustomTooltip';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

/**
 * Component that display a bar chart
 * of daily weight and calories burned
 * @param {Object} props activities props
 * @param {Object[]} props.activity array of object that contain daily user activity
 * @param {string} props.activity.day activity day
 * @param {number} props.activity.kilogram user weight
 * @param {number} props.activity.calories calories burned
 * @returns {JSX.Element}  A DailyActivity component
 */
const DailyActivity = ({ activity }) => {
    const getYaxisData = () => {
        const getkKilogramValue = () => {
            let value = []
            activity.forEach(element => {
                value.push(element.kilogram)
            })
            return value
        }

        const kilogramValues = getkKilogramValue()
        const min = Math.min(...kilogramValues) - 1
        const max = Math.max(...kilogramValues) + 1
        const somme = min + max
        const medium = somme / 2
        const yAxisData = [min, medium, max]
        return yAxisData
    }

    return (
        <div className="daily-activity">
            <div className="daily-activity__heading">
                <h3>Activité quotidienne</h3>
                <ul className="daily-activity__heading__listctn">
                    <li className="poids">Poids (kg)</li>
                    <li className="calories">Calories (kCal)</li>
                </ul>
            </div>
            <ResponsiveContainer width="100%" height="100%">
                <BarChart
                    barGap={12}
                    barSize={8}
                    data={activity}
                    margin={{ top: 0, right: 0, bottom: 0, left: 0 }}
                >
                    <CartesianGrid
                        strokeDasharray="3 3"
                        vertical={false}
                    />
                    <XAxis
                        dataKey="session"
                        domain={['dataMin', 'dataMax']}
                        tickLine={false}
                        stroke="#DEDEDE"
                        tick={{ fill: "#9B9EAC", fontFamily: "Roboto", fontWeight: 500, fontSize: 14 }}
                        height={40}
                        tickSize={25}
                    />
                    <YAxis
                        yAxisId="kilogram"
                        domain={['dataMin', 'dataMax']}
                        dataKey="kilogram"
                        orientation="right"
                        tickLine={false}
                        axisLine={false}
                        ticks={getYaxisData()}
                        tick={{ fill: "#9B9EAC", fontFamily: "Roboto", fontWeight: 500, fontSize: 14 }}
                        width={70}
                        tickSize={50}
                    />
                    <YAxis
                        hide
                        yAxisId="calories"
                        domain={['dataMin - 100', 'dataMax + 100']}
                        dataKey="calories"
                        orientation="right"
                    />
                    <Tooltip content={<CustomTooltip />} cursor={{ fill: '#E5E5E5' }} offset={40} />
                    <Bar
                        yAxisId="kilogram"
                        dataKey="kilogram"
                        radius={[4, 4, 0, 0]}
                        fill="#282D30"
                        unit="kg"
                    />
                    <Bar
                        yAxisId="calories"
                        dataKey="calories"
                        radius={[4, 4, 0, 0]}
                        fill="#E60000"
                        unit="kCal"
                    />
                </BarChart>
            </ResponsiveContainer>
        </div>
    )
}

DailyActivity.propTypes = {
    activity: PropTypes.arrayOf(
        PropTypes.shape({
            day: PropTypes.string,
            kilogram: PropTypes.number,
            calories: PropTypes.number,
        })
    ),
}

export default DailyActivity