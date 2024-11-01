import React from "react";
import axiosInstance from "../../Utils/axiosJS";
export default function useFetchConsigns() {
  const [consigns, setConsigns] = React.useState([]);
  React.useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axiosInstance.get("manager/manage-ki-gui/get-all");
        let array = res.data.result
        
        setConsigns(array.reverse());
        console.log(res.data.result);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  return consigns;
}
