import Dailyactivity from "./Dailyactivity"
import AverageSession from "./AverageSession"
import RadarPerformance from "./RadarPerformance"
import Score from "./Score"
import Recapbox from "./recapbox"
import Loader from "./loader"
import fire from "../assets/fire.svg"
import meet from "../assets/meet.svg"
import apple from "../assets/apple.svg"
import burger from "../assets/burger.svg"
import { useParams } from "react-router"
import { USER_MAIN_DATA, USER_ACTIVITY, USER_AVERAGE_SESSIONS, USER_PERFORMANCE } from "../mocks/data";

const Profil = () => {
    // Temporary
    const error = null
    const isLoading = null
    //

    let { userId } = useParams();
    if (userId === undefined) {
      userId = 12
    }

    if (error) {
      return <span>Il y a eu un problème</span>
    } else if (isLoading) {
      return <Loader />
    } else {
        const userData = USER_MAIN_DATA.find(elem => elem.id === parseInt(userId));
        const userActivity = USER_ACTIVITY.find(elem => elem.userId === parseInt(userId));
        const userAverageSession = USER_AVERAGE_SESSIONS.find(elem => elem.userId === parseInt(userId));
        const userPerformance = USER_PERFORMANCE.find(elem => elem.userId === parseInt(userId));

        return (
            <section className="profil">
                <div className="profil__heading">
                    <h2 className="profil__heading__salutation">Bonjour <span>{userData.userInfos.firstName}</span></h2>
                    <p>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
                </div>
                <div className="profil__content">
                    <div className="profil__content__activity">
                        <Dailyactivity activity={userActivity.sessions}/>
                        <div className="profil__content__activity__details">
                            <AverageSession session={userAverageSession.sessions}/>
                            <RadarPerformance performance={userPerformance}/>
                            <Score />
                        </div>
                    </div>
                    <ul className="profil__content__summary">
                        <li><Recapbox icon={fire} type="fire" label="calories" data={userData.keyData.calorieCount}/></li>
                        <li><Recapbox icon={meet} type="meet" label="proteines" data={userData.keyData.proteinCount}/></li>
                        <li><Recapbox icon={apple} type="apple" label="glucide" data={userData.keyData.carbohydrateCount}/></li>
                        <li><Recapbox icon={burger} type="burger" label="lipide" data={userData.keyData.lipidCount}/></li>
                    </ul>
                </div>
            </section>
        )
    }
}

export default Profil