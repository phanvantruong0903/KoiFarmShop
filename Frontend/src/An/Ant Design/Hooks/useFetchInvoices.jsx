import React from 'react';
import axiosInstance from '../../Utils/axiosJS';

export default function useFetchInvoices() {
  const [invoices, setInvoices] = React.useState([]);

  async function fetchInvoices() {
    try {
      const response = await axiosInstance.get("manager/manage-invoice/get-all");
      setInvoices(response.data.invoices);
    } catch (error) {
      console.log(error.response);
    }
  }

  React.useEffect(() => {
    fetchInvoices();
  }, []);

  return {
    invoices,
    refreshData: fetchInvoices, 
  };
}
