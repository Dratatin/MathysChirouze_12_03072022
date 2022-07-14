import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import CustomTooltip from './customTooltip';

const AverageSession = ({ session }) => {
    const data = session.map(element => ({
        ...element,
        day : ["L","M","M","J","V","S","D"][element.day - 1]
    }))

    return(
        <div className="average-session">
            <h3 className="average-session__title">Durée moyenne de <br/> sessions</h3>
            <ResponsiveContainer width="100%">
                <LineChart
                    width={500}
                    height={300}
                    data={data}
                    margin={{ right: -2, left: -2 }}
                >
                    <defs>
                        <linearGradient id="linear">
                            <stop offset="0%" stopColor="white" stopOpacity={0.5} />
                            <stop offset="100%" stopColor="white" stopOpacity={1} />
                        </linearGradient>
                    </defs>
                    <YAxis hide={true} domain={['dataMin - 10', 'dataMax + 10']} />
                    <XAxis 
                        hide={true}
                        dataKey="day" 
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
            <ul className="average-session__personnalizedAxis">
                {data.map((element, index) => (
                    <li key={index}>{element.day}</li>
                ))}
            </ul>
        </div>
    )
}

export default AverageSession