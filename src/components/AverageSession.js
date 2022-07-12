import { LineChart, Line, XAxis, Tooltip, ResponsiveContainer } from 'recharts';
import CustomTooltip from './customTooltip';

const AverageSession = ({ averageSession }) => {
    averageSession = averageSession.map(element => ({
        ...element,
        day : ["L","M","M","J","V","S","D"][element.day - 1]
    }))

    return(
        <div className="average-session">
            <h3 className="average-session__label">Durée moyenne de <br/> sessions</h3>
            <ResponsiveContainer width="100%" height={180}>
                <LineChart
                width={500}
                height={300}
                data={averageSession}
                margin={{ top: 10, right: 10, bottom: 10, left: 10 }}
                >
                    <defs>
                        <linearGradient id="linear">
                            <stop offset="0%" stopColor="white" stopOpacity={0.5} />
                            <stop offset="100%" stopColor="white" stopOpacity={1} />
                        </linearGradient>
                    </defs>
                    <XAxis 
                    dataKey="day" 
                    tickLine={false} 
                    axisLine={false} 
                    tick={{ fill: "rgba(255, 255, 255, 0.5)", fontFamily: "Roboto", fontWeight: 500, fontSize: 14 }} 
                    height={50}
                    tickSize={25}
                    />
                    <Tooltip content={<CustomTooltip />} cursor={{stroke: "none"}} />
                    <Line 
                        type="natural" 
                        dataKey="sessionLength" 
                        unit="min" 
                        dot={false}         
                        strokeWidth={2}
                        stroke="url(#linear)"
                    />
                </LineChart>
            </ResponsiveContainer>
        </div>
    )
}

export default AverageSession