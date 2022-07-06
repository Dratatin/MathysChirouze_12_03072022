const Recapbox = ({icon, type, label, data}) => {
    return (
        <div className="recapbox">
            <div className={`recapbox__iconctn recapbox__iconctn--${type}`}>
                <img className="recapbox__iconctn__icon" src={icon} alt="icon"></img>
            </div>
            <div className="recapbox__text">
                <h3>{data}</h3>
                <p>{label}</p>
            </div>
        </div>
    )

}

export default Recapbox