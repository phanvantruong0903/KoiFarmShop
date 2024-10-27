import React from 'react'
import axiosInstance from '../../Utils/axiosJS';
import MyErrorHandler from '../../Utils/errorHandler';
export default function useFetchConsigns() {
  const [consigns, setConsigns] = React.useState([])
  React.useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axiosInstance.get('manager/manage-ki-gui/get-all')
        setConsigns(res.data.result)
        console.log(res.data.result)
      } catch (error) {
        console.log(error)
      }
    }
    fetchData()
  }
  , [])

  return consigns
}
