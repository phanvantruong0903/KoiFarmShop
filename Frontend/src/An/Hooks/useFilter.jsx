import { useState } from 'react';

export default function useFilter(data, isProfile = false) {
  const [searchTerm, setSearchTerm] = useState('');

  const initialFilterList = isProfile
    ? { role: '', Email_verified: '' } // Profile filters
    : { OrderStatus: '', PaymentStatus: '' }; // Order filters

  const [filterList, setFilterList] = useState(initialFilterList);

  
  const filteredData = data.filter((item) => {
    if (isProfile) {
      // For profiles
      const matchesRole = filterList.role ? item.role === filterList.role : true;

     
      const matchesEmailVerified = filterList.Email_verified
        ? (filterList.Email_verified === 'true' ? item.Email_verifed : !item.Email_verifed)
        : true;
      const matchesSearch = item.UserName.toLowerCase().includes(searchTerm.toLowerCase());

      return matchesRole && matchesEmailVerified && matchesSearch;
    } else {
      // For orders
      const matchesCustomer = item.customer.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesOrderStatus = filterList.OrderStatus ? item.orderStatus === filterList.OrderStatus : true;
      const matchesPaymentStatus = filterList.PaymentStatus ? item.paymentStatus === filterList.PaymentStatus : true;

      return matchesCustomer && matchesOrderStatus && matchesPaymentStatus;
    }
  });

  const handleSearch = (e) => setSearchTerm(e.target.value);

  const handleFilterChange = (type, value) => {
    
    setFilterList((prevState) => ({
      ...prevState,
      [type]: value,
    }));
  };

  return { searchTerm, handleSearch, filteredData, handleFilterChange, filterList };
}
