import DailyActivity from "../components/DailyActivity"
import AverageSession from "../components/AverageSession"
import RadarPerformance from "../components/RadarPerformance"
import Score from "../components/Score"
import Recapbox from "../components/Recapbox"
import Loader from "../components/Loader"
import fire from "../assets/fire.svg"
import meet from "../assets/meet.svg"
import apple from "../assets/apple.svg"
import burger from "../assets/burger.svg"
import { useParams } from "react-router"
import useFetchDatas from "../services/api"
import { UserDataFormater } from "../utils/dataformatter"
// Uncomment the line below and comment the on above line to use mocked data
// import useFetchDatas from "../services/mockapi" 

/**
 * Main page component that displays all 
 * the user activities data in a Dashboard
 *
 * @returns {JSX.Element} A Profil component
 */
const Profil = () => {
    let { userId } = useParams();
    if (userId === undefined) {
        userId = 12
    }
    let { mainData, activityData, averageSessionsData, performanceData, isLoading, error } = useFetchDatas(userId);

    if (error) {
        return (<span>Il y a eu un problème :{error.message}</span>)
    } else if (isLoading) {
        return <Loader />
    } else {
        const dataFormater = new UserDataFormater(mainData, activityData, averageSessionsData, performanceData)
        mainData = dataFormater.getFormattedMain()
        activityData = dataFormater.getFormattedActivity()
        averageSessionsData = dataFormater.getFormattedAverageSessions()
        performanceData = dataFormater.getFormattedPerformance()

        return (
            <section className="profil">
                <div className="profil__heading">
                    <h2 className="profil__heading__salutation">Bonjour <span>{mainData.userInfos.firstName}</span></h2>
                    <p>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
                </div>
                <div className="profil__content">
                    <div className="profil__content__activity">
                        <DailyActivity activity={activityData.sessions} />
                        <div className="profil__content__activity__details">
                            <AverageSession session={averageSessionsData} />
                            <RadarPerformance performance={performanceData} />
                            <Score score={mainData.formattedScore} />
                        </div>
                    </div>
                    <ul className="profil__content__summary">
                        <li><Recapbox icon={fire} type="fire" label="calories" data={mainData.keyData.calorieCount} /></li>
                        <li><Recapbox icon={meet} type="meet" label="proteines" data={mainData.keyData.proteinCount} /></li>
                        <li><Recapbox icon={apple} type="apple" label="glucide" data={mainData.keyData.carbohydrateCount} /></li>
                        <li><Recapbox icon={burger} type="burger" label="lipide" data={mainData.keyData.lipidCount} /></li>
                    </ul>
                </div>
            </section>
        )
    }
}

export default Profil