import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import CustomTooltip from './customTooltip';
import CustomCursor from './CustomCursor';

const AverageSession = ({ session }) => {
    return(
        <div className="average-session">
            <h3 className="average-session__title">Durée moyenne de <br/> sessions</h3>
            <ResponsiveContainer width="100%" height="100%">
                <LineChart
                    data={session}
                    margin={{ right: -2, top: 50, left: -2, bottom: 15 }}
                >
                    <defs>
                        <linearGradient id="linear">
                            <stop offset="0%" stopColor="white" stopOpacity={0.5} />
                            <stop offset="100%" stopColor="white" stopOpacity={1} />
                        </linearGradient>
                    </defs>
                    <YAxis hide={true} domain={['dataMin - 5', 'dataMax + 5']} />
                    <XAxis 
                        hide={false}
                        dataKey="day" 
                        tickLine={false} 
                        axisLine={false} 
                        tick={{ fill: "rgba(255, 255, 255, 0.5)", fontFamily: "Roboto", fontWeight: 500, fontSize: 15 }} 
                        height={50}
                        tickSize={25}
                        interval="preserveStartEnd"
                        style={{ transform: 'scale(0.9)', transformOrigin: 'bottom'}}
                    />
                    <Tooltip content={<CustomTooltip />} cursor={<CustomCursor />} />
                    <Line 
                        type="natural" 
                        dataKey="sessionLength" 
                        unit="min" 
                        dot={false}  
                        activeDot={{ 
                            fill: 'white',
                            strokeWidth: 10,
                            stroke: 'white',
                            strokeOpacity: '0.198345', 
                        }}       
                        strokeWidth={2}
                        stroke="url(#linear)"
                    />
                </LineChart>
            </ResponsiveContainer>
            {/* <ul className="average-session__personnalizedAxis">
                {data.map((element, index) => (
                    <li key={index}>{element.day}</li>
                ))}
            </ul> */}
        </div>
    )
}

export default AverageSession