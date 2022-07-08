import { useState, useEffect } from "react";
import { USER_MAIN_DATA, USER_ACTIVITY, USER_AVERAGE_SESSIONS, USER_PERFORMANCE } from "../mocks/data";

// export function useFetch (url) {
//     const [data, setData] = useState()
//     const [isLoading, setLoading] = useState(true)
//     const [error, setError] = useState(null)

//     useEffect(() => {
//         if (!url) return
//         async function fetchData() {
//             try {
//                 const response = await fetch(url)
//                 const data = await response.json()
//                 setData(data)
//                 setLoading(false)
//             }
//             catch (error) {
//                 console.log(error)
//                 setError(true)
//             }
//             finally {
//                 setLoading(false)
//             }
//         }
//         fetchData()
//     }, [url])

//     return { isLoading, data, error }
// }

// export function useGetMockedData (dataType) {
//     const [data, setData] = useState()
//     const [isLoading, setLoading] = useState(true)
//     const [error, setError] = useState(null)

//     useEffect(() => {
//         if (!dataType) return
//         async function fetchData() {
//             try {
//                 switch (dataType) {
//                     case "main":
//                         setData(USER_MAIN_DATA)
//                         break
//                     case "activity":
//                         setData(USER_ACTIVITY)
//                         break
//                     case "session":
//                         setData(USER_AVERAGE_SESSIONS)
//                         break
//                     case "performance":
//                         setData(USER_PERFORMANCE)
//                         break
//                     default:
//                       console.log(`Sorry, we are out of ${dataType}.`);
//                 }
//                 setLoading(false)
//             }
//             catch (error) {
//                 console.log(error)
//                 setError(true)
//             }
//             finally {
//                 setLoading(false)
//             }
//         }
//         fetchData()
//     }, [dataType])

//     return { isLoading, data, error }
// }