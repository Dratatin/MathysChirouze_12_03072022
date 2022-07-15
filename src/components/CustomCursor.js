import { Rectangle } from "recharts"

const CustomCursor = (props) => {
    const { width } = props;
    const cord = props.points[1]
    return (
        <Rectangle fill="rgba(0, 0, 0, 0.1)" x={cord.x} width={width} height={300} />
    )
}

export default CustomCursor