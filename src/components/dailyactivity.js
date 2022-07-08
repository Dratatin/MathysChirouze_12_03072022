import CustomTooltip from './customTooltip';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const Dailyactivity = ({activity}) => {
    return (
        <div className="daily-activity">
            <div className="daily-activity__heading">
                <h3>Activité quotidienne</h3>
                <ul className="daily-activity__heading__listctn">
                    <li className="poids">Poids (kg)</li>
                    <li className="calories">Calories (kCal)</li>
                </ul>
            </div>
            <ResponsiveContainer width="100%" height={230}>
                <BarChart
                barGap={12}
                barSize={8}
                width={500}
                height={300}
                data={activity.sessions}
                margin={{ top: 0, right: 0, bottom: 0, left: 0 }}
                >
                    <CartesianGrid 
                        strokeDasharray="3 3" 
                        vertical={false} 
                    />
                    <XAxis 
                        domain={['dataMin', 'dataMax']} 
                        tickLine={false} 
                        stroke="#DEDEDE" 
                        tick={{ fill: "#9B9EAC", fontFamily: "Roboto", fontWeight: 500, fontSize: 14 }} 
                        height={50}
                        tickSize={25}
                    />
                    <YAxis 
                        yAxisId="kilogram" 
                        domain={['dataMin - 1', 'dataMax + 1']} 
                        dataKey="kilogram" 
                        orientation="right" 
                        tickLine={false} 
                        axisLine={false} 
                        tick={{ fill: "#9B9EAC", fontFamily: "Roboto", fontWeight: 500, fontSize: 14 }} 
                        width={70}
                        tickSize={50}
                    />
                    <YAxis 
                        hide 
                        yAxisId="calories" 
                        domain={['dataMin - 20', 'dataMax + 20']} 
                        dataKey="calories" 
                        orientation="right" 
                    />
                    <Tooltip content={<CustomTooltip />} cursor={{fill: '#E5E5E5'}} offset={40} />
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

export default Dailyactivity