import React from 'react'
import axiosInstance from '../../Utils/axiosJS';

export default function useFetchKois() {
  const [kois, setKois] = React.useState([])
  const [catagoryList, setCategoryList] = React.useState([])
  React.useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axiosInstance.get('manager/manage-koi/get-all');
        console.log(response.data);
        const { result, categoryList } = response.data;
        setKois(result);
        setCategoryList(categoryList);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  return (
    { kois, catagoryList }
  )
}
