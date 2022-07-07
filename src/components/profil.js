import Dailyactivity from "./dailyactivity"
import Recapbox from "./recapbox"
import Loader from "./loader"
import fire from "../assets/fire.svg"
import meet from "../assets/meet.svg"
import apple from "../assets/apple.svg"
import burger from "../assets/burger.svg"
import { useParams } from "react-router"
import { useGetMockedData } from "../services/api"

const Profil = () => {
    let { userId } = useParams();
    if (userId === undefined) {
      userId = "12"
    }
    const { data, isLoading, error } = useGetMockedData("main")


    if (error) {
      return <span>Il y a eu un problème</span>
    } else if (isLoading) {
      return <Loader />
    } else {
        const userdata = data.find(elem => elem.id === parseInt(userId));

        return (
            <section className="profil">
                <div className="profil__heading">
                    <h2 className="profil__heading__salutation">Bonjour <span>{userdata.userInfos.firstName}</span></h2>
                    <p>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
                </div>
                <div className="profil__content">
                    <div className="profil__content__details">
                        <Dailyactivity />
                    </div>
                    <ul className="profil__content__summary">
                        <li><Recapbox icon={fire} type="fire" label="calories" data={userdata.keyData.calorieCount}/></li>
                        <li><Recapbox icon={meet} type="meet" label="proteines" data={userdata.keyData.proteinCount}/></li>
                        <li><Recapbox icon={apple} type="apple" label="glucide" data={userdata.keyData.carbohydrateCount}/></li>
                        <li><Recapbox icon={burger} type="burger" label="lipide" data={userdata.keyData.lipidCount}/></li>
                    </ul>
                </div>
            </section>
        )
    }
}

export default Profil