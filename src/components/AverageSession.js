import { LineChart, Line, XAxis, Tooltip, ResponsiveContainer } from 'recharts';

const AverageSession = ({ averageSession }) => {
    return(
        <div>
            <ResponsiveContainer width="100%" height="100%">
                <LineChart
                width={500}
                height={300}
                data={averageSession}
                margin={{ top: 10, right: 10, bottom: 10, left: 10 }}
                >
                    <XAxis 
                    dataKey="day" 
                    tickLine={false} 
                    axisLine={false} 
                    />
                    <Tooltip />
                    <Line type="monotone" dataKey="sessionLength" stroke="#8884d8" dot={false} activeDot={{ r: 8 }} />
                </LineChart>
            </ResponsiveContainer>
        </div>
    )
}

export default AverageSession