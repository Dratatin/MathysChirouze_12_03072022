import PropTypes from 'prop-types';
import { RadialBarChart, RadialBar, PolarAngleAxis, ResponsiveContainer } from 'recharts';

/**
 * Component that display a simple radial 
 * chart of user progress score
 * @param {Object} prop score prop
 * @param {number} prop.score user score percentage
 * @returns {JSX.Element}  A Score component
 */
const Score = (prop) => {
  return (
    <div className="score">
      <h3 className="score__title">Score</h3>
      <ResponsiveContainer width="100%" height="100%">
        <RadialBarChart
          cx="50%"
          cy="50%"
          innerRadius="80%"
          barSize={10}
          startAngle={90}
          endAngle={470}
          data={[prop]}
          margin={{ top: 30, right: 30, bottom: 30, left: 30 }}
        >
          <circle cx="50%" cy="50%" fill="white" r="82"></circle>
          <PolarAngleAxis
            type="number"
            domain={[0, 100]}
            angleAxisId={1}
            tick={false}
          />
          <RadialBar
            dataKey="score"
            angleAxisId={1}
            cornerRadius={10}
            fill="#FF0000"
          />
        </RadialBarChart>
      </ResponsiveContainer>
      <p className="score__details"><span className="score__details__number">{prop.score}%</span><br /> de votre<br /> objectif</p>
    </div>
  )
}

Score.propTypes = {
  score: PropTypes.number
}

export default Score