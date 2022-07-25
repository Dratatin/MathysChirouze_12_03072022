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
import { useFetchDatas } from "../services/api"
import { UserDataFormater } from "../utils/dataformatter"
// Uncomment the line below and comment the on above line to use mocked data
// import { useFetchDatas } from "../services/mockapi" 

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
        mainData = dataFormater.getMain()
        activityData = dataFormater.getActivity()
        averageSessionsData = dataFormater.getAverageSessions()
        performanceData = dataFormater.getPerformance()
        
        return (
            <section className="profil">
                <div className="profil__heading">
                    <h2 className="profil__heading__salutation">Bonjour <span>{mainData.userInfos.firstName}</span></h2>
                    <p>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
                </div>
                <div className="profil__content">
                    <div className="profil__content__activity">
                        <Dailyactivity activity={activityData.sessions}/>
                        <div className="profil__content__activity__details">
                            <AverageSession session={averageSessionsData}/>
                            <RadarPerformance performance={performanceData}/>
                            <Score score={mainData.formatedScore} />
                        </div>
                    </div>
                    <ul className="profil__content__summary">
                        <li><Recapbox icon={fire} type="fire" label="calories" data={mainData.keyData.calorieCount}/></li>
                        <li><Recapbox icon={meet} type="meet" label="proteines" data={mainData.keyData.proteinCount}/></li>
                        <li><Recapbox icon={apple} type="apple" label="glucide" data={mainData.keyData.carbohydrateCount}/></li>
                        <li><Recapbox icon={burger} type="burger" label="lipide" data={mainData.keyData.lipidCount}/></li>
                    </ul>
                </div>
            </section>
        )
    }
}

export default Profil