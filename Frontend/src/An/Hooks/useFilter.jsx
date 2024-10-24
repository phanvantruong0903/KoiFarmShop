import { useEffect, useState } from 'react';

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
        State: '', Method: '', location: ''
      }
    }
    else if (filterType === 'supplier') {
      return {
        Country: ''
      }
    }
    else if (filterType === 'invoices') {
      return {
        Status: ''
      }
    }

  }
 

  const initialFilterList = checkWhichFilter(filterType);

  const [filterList, setFilterList] = useState(initialFilterList);

  console.log(filterList); // Debugging

  const filteredData = data.filter((item) => {
    if (filterType === 'profile') {
      // For profiles
      const roleMap = {
        1: 'Người dùng',
        2: 'Nhân viên',
        3: 'Quản lý',
      };

      const matchesRole = filterList.role ? roleMap[item.roleid] === filterList.role : true;
      const matchesEmailVerified = filterList.Email_verified
        ? (filterList.Email_verified === 'All' || item.verify == (filterList.Email_verified === 'Đã xác minh'))
        : true;

      const matchesSearch = item.name.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesSearchID = item._id.includes(searchTerm);

      return matchesRole && matchesEmailVerified && (matchesSearch || matchesSearchID);
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
      const matchesLocation = filterList.location ? item.PositionCare === filterList.location : true;
      const matchesID = item._id.includes(searchTerm);

      return matchesStatus && matchesMethod && matchesLocation && matchesID;
    }
    else if (filterType === 'supplier') {
      // For suppliers
      const matchesCountry = filterList.Country ? item.Country === filterList.Country : true;
      const matchesSearch = item.SupplierName.toLowerCase().includes(searchTerm.toLowerCase());
      return matchesCountry && matchesSearch;
    }
    else if (filterType === 'invoices') {
      // For invoices
      const matchesStatus = filterList.Status ? item.Status == filterList.Status : true;
      // const matchesSearch = item.InvoiceID.toLowerCase().includes(searchTerm.toLowerCase());
      return matchesStatus ;
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
