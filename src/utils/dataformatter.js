export class UserDataFormater {
    constructor (main, activity, averageSessions, performance) {
        this.main = main
        this.activity = activity
        this.averageSession = averageSessions
        this.performance = performance
    }
    getMain() {
      let score = 0
      if (this.main.score !== undefined) {
        score = this.main.score * 100
      }
      if (this.main.todayScore !== undefined) {
        score = this.main.todayScore * 100
      }
      if (this.main.formatedScore === undefined) {
        this.main = Object.assign(this.main,{formatedScore: score});
      }
      return this.main
    }
    getActivity() {
      return this.activity
    }
    getAverageSessions() {
        const updateAverage = this.averageSession.sessions.map(element => ({
            ...element,
            day : ["L","M","M","J","V","S","D"][element.day - 1]
        }))
        this.averageSession = updateAverage
        return this.averageSession
    }
    getPerformance() {
        const trad = (kind) => {
            switch (kind) {
              case "energy":
                return "energie"
              case "strength":
                return "force"
              case "speed":
                return "vitesse"
              case "intensity":
                return "intensité"
              default:
                return kind
            }
        }
        const updatePerformance = this.performance.data.map(element => ({
        ...element,
        kind : trad(this.performance.kind[element.kind])
        }))

        this.performance = updatePerformance
        return this.performance   
    }
}