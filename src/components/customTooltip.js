const CustomTooltip = ({ active, payload }) => {
    if (active) {
        return (
            <div className={payload[0].fill === "#fff" ? "tooltip tooltip--light" : "tooltip tooltip--primary"}>
                <ul className="tooltip__listctn">
                    {payload[0] ? (<li>{payload[0].value}{payload[0].unit}</li>) : null}
                    {payload[1] ? (<li>{payload[1].value}{payload[1].unit}</li>) : null}
                </ul>
            </div>
        )
    }
}

export default CustomTooltip