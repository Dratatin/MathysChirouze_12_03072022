const CustomTooltip = ({ active, payload }) => {
    if (active) {
        return (
            <div className="tooltip">
                <ul className="tooltip__listctn">
                    <li>{payload[0].value}{payload[0].unit}</li>
                    <li>{payload[1].value}{payload[1].unit}</li>
                </ul>
            </div>
        )
    }
}

export default CustomTooltip