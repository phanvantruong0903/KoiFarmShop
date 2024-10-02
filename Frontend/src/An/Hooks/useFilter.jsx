import { useState } from 'react';

export default function useFilter(data) {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterList, setFilterList] = useState({
    OrderStatus: '',
    PaymentStatus: '',
  });

  const filteredData = data.filter((order) => {
    const matchesCustomer = order.customer.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesOrderStatus = filterList.OrderStatus ? order.orderStatus === filterList.OrderStatus : true;
    const matchesPaymentStatus = filterList.PaymentStatus ? order.paymentStatus === filterList.PaymentStatus : true;

    return matchesCustomer && matchesOrderStatus && matchesPaymentStatus;
  });

  const handleSearch = (e) => setSearchTerm(e.target.value);

  const handleFilterChange = (type, value) => {
    setFilterList((prevState) => ({
      ...prevState,
      [type]: value,
    }));
  };

  return { searchTerm, handleSearch, filteredData, handleFilterChange,filterList };
}
