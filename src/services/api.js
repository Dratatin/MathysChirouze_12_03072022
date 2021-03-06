// @ts-check
import { useState, useEffect } from "react";
import axios from "axios";

/**
 * @typedef {Object} UserData
 * @property {Object} mainData user main data
 * @property {Object} activityData user activity
 * @property {Object} averageSessionsData user average sessions
 * @property {Object} performanceData user performance
 * @property {boolean} isLoading loading or loaded
 * @property {null|string} error error or not
 */

/**
 * Custom hook that get all user data
 * @param {Number} userId id of current user
 * @returns {UserData} data of user
 */
const useFetchDatas = (userId) => {
  const [mainData, setMainData] = useState()
  const [activityData, setActivityData] = useState()
  const [averageSessionsData, setAverageSessionsData] = useState()
  const [performanceData, setPerformanceData] = useState()
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const userMain = `http://localhost:3000/user/${userId}`
    const userActivity = `http://localhost:3000/user/${userId}/activity`
    const userAverageSessions = `http://localhost:3000/user/${userId}/average-sessions`
    const userPerformance = `http://localhost:3000/user/${userId}/performance`

    const request1 = axios.get(userMain)
    const request2 = axios.get(userActivity)
    const request3 = axios.get(userAverageSessions)
    const request4 = axios.get(userPerformance)

    axios
      .all([request1, request2, request3, request4])
      .then(
        axios.spread((...responses) => {
          setMainData(responses[0].data.data)
          setActivityData(responses[1].data.data)
          setAverageSessionsData(responses[2].data.data)
          setPerformanceData(responses[3].data.data)
          setIsLoading(false)
          // use/access the results
        })
      )
      .catch(errors => {
        // react on errors.
        setError(errors)
      })
      .finally(() => {
        setIsLoading(false)
      })
  }, [userId])

  return { mainData, activityData, averageSessionsData, performanceData, isLoading, error }
}

export default useFetchDatas