import Dailyactivity from "./dailyactivity"
import Recapbox from "./recapbox"
import fire from "../assets/fire.svg"
import meet from "../assets/meet.svg"
import apple from "../assets/apple.svg"
import burger from "../assets/burger.svg"

const Profil = () => {
    return (
        <section className="profil">
            <div className="profil__heading">
                <h2 className="profil__heading__salutation">Bonjour <span>XXX</span></h2>
                <p>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
            </div>
            <div className="profil__content">
                <div className="profil__content__details">
                    <Dailyactivity />
                </div>
                <ul className="profil__content__summary">
                    <li><Recapbox icon={fire} type="fire" label="Xxxx" data="XXxxxxXxx"/></li>
                    <li><Recapbox icon={meet} type="meet" label="Xxxx" data="XXxxxxXxx"/></li>
                    <li><Recapbox icon={apple} type="apple" label="Xxxx" data="XXxxxxXxx"/></li>
                    <li><Recapbox icon={burger} type="burger" label="Xxxx" data="XXxxxxXxx"/></li>
                </ul>
            </div>
        </section>
    )
}

export default Profil