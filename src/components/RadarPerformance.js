import { Radar, RadarChart, PolarGrid, PolarRadiusAxis, PolarAngleAxis, ResponsiveContainer } from 'recharts';

const RadarPerformance = ({ performance }) => {

  return(
      <div className="radar">
          <ResponsiveContainer width="100%" height="100%">
              <RadarChart 
                data={performance.reverse()}
                margin={{ top: 20, right: 20, bottom: 20, left: 20 }}
              >
                <PolarGrid radialLines={false} />
                <PolarAngleAxis 
                  dataKey="kind"
                  tickSize={15}
                  tick={{ fill: "white", fontFamily: "Roboto", fontWeight: 500, fontSize: 12 }} 
                />
                <PolarRadiusAxis tickCount={6} tick={false} axisLine={false} />
                <Radar dataKey="value" fill="#FF0101" fillOpacity={0.7} />
              </RadarChart>
          </ResponsiveContainer>
      </div>
  )
}

export default RadarPerformance