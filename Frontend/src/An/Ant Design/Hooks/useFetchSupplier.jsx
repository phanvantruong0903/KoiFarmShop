import React from 'react'
import axiosInstance from '../../Utils/axiosJS'
export default function useFetchSupplier() {
  const [suppliers, setSuppliers] = React.useState([])
  React.useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axiosInstance.get('/manager/manage-supplier/get-all');
        setSuppliers(response.data.result);
        console.log(response.data.result);

      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, [])
  return (
    suppliers
  )
}
