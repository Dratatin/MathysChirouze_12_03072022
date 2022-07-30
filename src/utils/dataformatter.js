// @ts-check

/**
 * Class to format data 
 */
export class UserDataFormater {
  /**
   * User data
   * @param {Object} mainData user global data
   * @param {Object} activityData user activity
   * @param {Object} averageSessionsData user average sessions
   * @param {Object} performanceData user performance
   */
  constructor(mainData, activityData, averageSessionsData, performanceData) {
    this.mainData = mainData
    this.activity = activityData
    this.averageSessions = averageSessionsData
    this.performance = performanceData
  }
  /**
   * Transform score into percentage and return global data
   * @returns {object} formatted main user data
   */
  getFormattedMain() {
    let score = 0
    if (this.mainData.score !== undefined) {
      score = this.mainData.score * 100
    }
    if (this.mainData.todayScore !== undefined) {
      score = this.mainData.todayScore * 100
    }
    if (this.mainData.formattedScore === undefined) {
      this.mainData = Object.assign(this.mainData, { formattedScore: score });
    }
    return this.mainData
  }
  /**
   * Add a session number to identify the session and return updated activity
   * @returns {object} user activity
   */
  getFormattedActivity() {
    const updateActivity = this.activity.sessions.map((element, index) => ({
      ...element,
      session: index + 1
    }))
    return updateActivity
  }
  /**
   * Transform number of day to the first letter of the day and return average sessions
   * @returns {object} formatted user average sessions
   */
  getFormattedAverageSessions() {
    const updateAverage = this.averageSessions.sessions.map(element => ({
      ...element,
      day: ["L", "M", "M", "J", "V", "S", "D"][element.day - 1]
    }))
    return updateAverage
  }
  /**
   * Translate kind of performance EN to FR and return performance
   * @returns {object} formatted user performance
   */
  getFormattedPerformance() {
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
      kind: trad(this.performance.kind[element.kind])
    }))
    return updatePerformance.reverse()
  }
}