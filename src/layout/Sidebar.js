import zen from '../assets/zen.svg'
import swimming from '../assets/swimming.svg'
import bike from '../assets/bike.svg'
import strength from '../assets/strength.svg'

/**
 * Component of Sidebar with physical activities
 * icons and copyright
 * 
 * @returns {JSX.Element} A Sidebar component
 */
const Sidebar = () => {
    return (
        <div className="sidebar">
            <ul className="sidebar__listctn">
                <li className="sidebar__listctn__element"><img src={zen} alt="zen"></img></li>
                <li className="sidebar__listctn__element"><img src={swimming} alt="swimming"></img></li>
                <li className="sidebar__listctn__element"><img src={bike} alt="bike"></img></li>
                <li className="sidebar__listctn__element"><img src={strength} alt="strength"></img></li>
            </ul>
            <p className="sidebar__copiryght">Copiryght, SportSee 2020</p>
        </div>
    )
}

export default Sidebar