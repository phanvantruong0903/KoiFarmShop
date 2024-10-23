import React from 'react'
import TableGen from '../../Components/Staff/TableGen'
import useFilter from '../../Hooks/useFilter';
// Utils
import { isAddress, whatRole } from '../../Utils/valueParser';
// Components
import FilterBar from '../../Components/Staff/FilterBar';
import FilterButton from '../../Components/Staff/FilterButton';
import Spinner from '../../Components/Spinner';

import ViewProfile from '../../Components/Staff/ViewProfile';
// Axios
import { Form, FormControl } from 'react-bootstrap';
import { useState } from 'react';
import '../../Css/Orders.css'
import useInvoice from '../../Hooks/useInvoice';
export default function ManageInvoices() {

  const handleRowAction = (id, actionType) => {
    if (actionType === 'delete') {

      window.alert(`Delete user with ID: ${id}`);
    }
    else if (actionType === 'view') {
      setInvoiceID(id)

    }
  };
  const handleMouseEnter = (index) => {
    setHoveredRow(index);
  };

  const handleMouseLeave = () => {
    setHoveredRow(null);
  };


  const [invoicdeID, setInvoiceID] = useState(null);
  const { invoices, loading, error } = useInvoice();
  const [hoveredRow, setHoveredRow] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isActive, setIsActive] = useState(false);
  const [showModal, setShowModal] = useState(false);;
  const { searchTerm, handleFilterChange, filteredData, handleSearch, filterList } = useFilter(invoices, 'invoices');
  const headers = ['#', 'ID', 'Group Koi ID Invoice', 'Invoice Date', 'Status', 'Discount(%)', 'Total Price'];
  const field = ['_id', 'GroupKoiIDInvoice', 'InvoiceDate', 'Status', 'Discount', 'TotalPrice'];
  return (
    <div>
      <div className='fw-bold fs-1 ms-5 mb-5'>Invoices</div>
      <div className='d-flex ms-5 me-5 mb-3 Card-Container' style={{ height: '100px', gap: '1rem' }}>
        <div className='border rounded-3 p-2 w-25'>
          <h4 className='fw-bold fs-4 fs-md-5'>Total Invoices</h4>
          <p>{invoices.length}</p>
        </div>
      </div>

      
      <div className='d-flex ms-5 me-5 Order-container' style={{ gap: '2rem' }}>
        {/* ==============================Filter Button========================================= */}
        <FilterButton
          label="All"
          filterType="Status"
          filterValue=""
          currentFilter={filterList.Status}
          onFilterChange={handleFilterChange}
           count={invoices.length}
        />
        <FilterButton
          label="All Received Invoice"
          filterType="Status"
          filterValue="1"
          currentFilter={filterList.Status}
          onFilterChange={handleFilterChange}
          count={
            invoices.filter(invoice => invoice.Status === 1).length
          }
        />
        <FilterButton
          label="Sold Out"
          filterType="Status"
          filterValue="2"
          currentFilter={filterList.Status}
          onFilterChange={handleFilterChange}
           count={invoices.filter(invoice => invoice.Status === 2).length}
        />

      

      </div>

      <hr className="my-1 mb-4" />
     {/* ==============================Filter Bar========================================= */}
     <div className='d-flex ms-5 me-5 flex-wrap ' style={{ gap: '2rem' }}>
        <FilterBar
          initialTitle={
            filterList.Status === '' ? "All" : filterList.Status === '1' ? "Received" : "Sold Out"
          }
          NavItems={["All", "Received", "Sold Out"]}
          handleFilterChange={handleFilterChange}
          filter="Status"
        />

      


        <div className="d-flex ms-auto search-container" style={{ flexGrow: 0.125 }}>
          <Form className="d-flex w-100 flex-row search-bar">
            <FormControl
              type="search"
              placeholder="Find User"
              value={searchTerm}
              onChange={handleSearch}
              className="me-1"
              aria-label="Search"
            />
            {/* <button className='btn btn-primary d-inline' type="submit" onClick={e =>{e.preventDefault}}>
              <FaSearch />
            </button> */}
          </Form>
        </div>
      </div>

      <hr className="my-1 mb-4" />
      <TableGen
        data={filteredData}
        headers={headers}
        fieldMapping={field}
        hoveredRow={hoveredRow}
        handleMouseEnter={handleMouseEnter}
        handleMouseLeave={handleMouseLeave}
        whatRole={whatRole}
        isAddress={isAddress}
        isActive={isActive}
        setIsActive={setIsActive}
        handleRowAction={handleRowAction}
        showModal={setShowModal}
        isSpecial={false}
      />
    </div>
  )
}
