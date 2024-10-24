import axiosInstance from "../Utils/axiosJS";
import { useEffect, useState } from "react";

export default function useInvoice() {
    const [invoices, setInvoices] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    useEffect(() => {
        async function fetch() {
            try {
                const response = await axiosInstance.get("manager/manage-invoice/get-all");
                setInvoices(response.data.invoices);
                setLoading(false);
            } catch (error) {
                setError(error.reponse);
                setLoading(false);
            } finally {
                setLoading(false);
            }

        }
        fetch();
    }, [])
    return { invoices, loading, error };
}
