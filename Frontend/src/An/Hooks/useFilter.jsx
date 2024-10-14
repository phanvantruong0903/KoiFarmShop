import { useState } from 'react';

export default function useFilter(data, filterType) {
  const [searchTerm, setSearchTerm] = useState('');

  const checkWhichFilter = (filterType) => {
    if (filterType === 'profile') {
      return {
         role: '', Email_verified: ''
      }
    }
    
      else if (filterType === 'order') {
        return {
          OrderStatus: '', PaymentStatus: ''
        }
      }
      else if (filterType === 'consign') {
        return {
          Status: '', Method: '', location: ''
        }
      }

    }
  

  const initialFilterList  = checkWhichFilter(filterType);

  const [filterList, setFilterList] = useState(initialFilterList);

   console.log (filterList); // Debugging
  
  const filteredData = data.filter((item) => {
    if (filterType === 'profile') {
      // For profiles
      const roleMap = {
        1: 'User',
        2: 'Staff',
        3: 'Manager',
      };
      
      // const matchesRole = filterList.roleid ? item.role === filterList.role : true;
      
      const matchesRole = filterList.role ? roleMap[item.roleid] === filterList.role : true;
      const matchesEmailVerified = filterList.Email_verified
      ? (filterList.Email_verified === 'All' || item.verify == (filterList.Email_verified === 'Verified'))
      : true;
  
      const matchesSearch = item.name.toLowerCase().includes(searchTerm.toLowerCase());

      return matchesRole && matchesEmailVerified && matchesSearch;
    } else if (filterType === 'order') {
      // For orders
      const matchesCustomer = item.customer.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesOrderStatus = filterList.OrderStatus ? item.orderStatus === filterList.OrderStatus : true;
      const matchesPaymentStatus = filterList.PaymentStatus ? item.paymentStatus === filterList.PaymentStatus : true;

      return matchesCustomer && matchesOrderStatus && matchesPaymentStatus;
    }
    else if (filterType === 'consign') {
      // For consignments
      const matchesStatus = filterList.State ? item.State == filterList.State : true;
      const matchesMethod = filterList.Method ? item.method === filterList.Method : true;
      const matchesLocation = filterList.location ? item.location === filterList.location : true
      return matchesStatus && matchesMethod && matchesLocation;
    }
  });

  const handleSearch = (e) => setSearchTerm(e.target.value);

  const handleFilterChange = (type, value) => {
    
    setFilterList((prevState) => ({
      ...prevState,
      [type]: value === undefined ? '' : value
    }));
  };

  return { searchTerm, handleSearch, filteredData, handleFilterChange, filterList };
}
