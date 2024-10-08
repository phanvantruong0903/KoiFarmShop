import Dropdown from 'react-bootstrap/Dropdown';

import { FaSearch } from "react-icons/fa";
import '../../Css/Orders.css'
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'
import { BsFilterSquare } from "react-icons/bs";
import { Table } from 'react-bootstrap';
import { PiDotsThreeCircleLight } from "react-icons/pi";
import { PiDotsThreeCircleFill } from "react-icons/pi";
import { useState, useEffect } from 'react';
import useFilter from '../../Hooks/useFilter';
import { isAddress, isVerified, whatRole } from '../../Utils/valueParser';
import FilterBar from '../../Components/Staff/FilterBar';
import FilterButton from '../../Components/Staff/FilterButton';
import Spinner from '../../Components/Spinner';
import axiosInstance from '../../Utils/axiosJS';
export default function Profiles() {
  const [hoveredRow, setHoveredRow] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isActive, setIsActive] = useState(false);


  const [intialData, setIntialData] = useState([])
  const handleMouseEnter = (index) => {
    setHoveredRow(index);
  };

  const handleMouseLeave = () => {
    setHoveredRow(null);
  };
  function totalManager(data) {
    let count = 0;
    data.forEach(element => {
      if (element.roleid === 3) {
        count++;
      }
    });
    return count;
  }
  function totalUser(data) {
    let count = 0;
    data.forEach(element => {
      if (element.roleid === 1) {
        count++;
      }
    })
    return count;
  }
  function totalStaff(data) {
    let count = 0;
    data.forEach(element => {
      if (element.roleid === 2) {
        count++;
      }
    })
    return count;
  }
  const { searchTerm, handleFilterChange, filteredData, handleSearch, filterList } = useFilter(intialData, true);
  useEffect(() => {
    setIsLoading(true);
    const fetchData = async () => {
      try {
        const response = await axiosInstance.get('/manager/manage-user/get-all');
        console.log('Data:', response.data);
        setIntialData(response.data.result);
      } catch (error) {
        console.error('Error fetching data', error);
      } finally {
        setIsLoading(false);
      }
    };
  
    fetchData();
  }, []);
  
  return (
    <div>
      <div className='fw-bold fs-1 ms-5 mb-5'>Profiles</div>

      <div className='d-flex ms-5 me-5 mb-3 Card-Container' style={{ height: '100px', gap: '1rem' }}>
        <div className='border rounded-3 p-2 flex-grow-1'>
          <h4 className='fw-bold fs-4 fs-md-5'>Total User</h4>
          <p>{intialData.length}</p>
        </div>

        <div className='border rounded-3 p-2 flex-grow-1'>
          <h4 className='fw-bold fs-4 fs-md-5'>Total Guest</h4>
          <p>{totalManager(intialData)}</p>
        </div>
        <div className='border rounded-3 p-2 flex-grow-1'>
          <h4 className='fw-bold fs-4 fs-md-5'>Total Customer</h4>
          <p>{totalManager(intialData)}</p>
        </div>


      </div>
      <div className='d-flex ms-5 me-5 Order-container' style={{ gap: '2rem' }}>
        {/* ==============================Filter Button========================================= */}
        <FilterButton
          label="All"
          filterType="role"
          filterValue=""
          currentFilter={filterList.role}
          onFilterChange={handleFilterChange}
          count={intialData.length}
        />
        <FilterButton
          label="All Users"
          filterType="role"
          filterValue="User"
          currentFilter={filterList.role}
          onFilterChange={handleFilterChange}
          count={totalUser(intialData)}
        />
        <FilterButton
          label="All Staffs"
          filterType="role"
          filterValue="Staff"
          currentFilter={filterList.role}
          onFilterChange={handleFilterChange}
          count={totalStaff(intialData)}
        />

        <FilterButton
          label="All Manager"
          filterType="role"
          filterValue="Manager"
          currentFilter={filterList.role}
          onFilterChange={handleFilterChange}
          count={totalManager(intialData)}
  
        />

      </div>

      <hr className="my-1 mb-4" />
      {/* ==============================Filter Bar========================================= */}
      <div className='d-flex ms-5 me-5 flex-wrap ' style={{ gap: '2rem' }}>
        <FilterBar
          initialTitle="All"
          NavItems={["All", "User", "Staff", "Manager"]}
          handleFilterChange={handleFilterChange}
          filter="role"
        />

        <FilterBar
          initialTitle="Email Verified Status"
          NavItems={["All", "Verified", "Not Verified"]}
          handleFilterChange={handleFilterChange}
          filter="Email_verified"
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
      <div>
        {/* Show the spinner if data is still loading */}
        {isLoading ? (
          <div className="d-flex justify-content-center align-items-center" style={{ height: '100vh' }}>
            <Spinner animation="border" variant="primary" />
          </div>
        ) : (
          <Table striped bordered hover responsive="md"> {/* TODO: turn cái này thành một cái uhhh component dài dòng thấj sư */}
            <thead>
              <tr>
                <th>#</th>
                <th>User_ID</th>
                <th>Name</th>
                <th>Role</th>
                <th>Email</th>
                <th>Email Status</th>
                <th>Address</th>
                <th>Phone Number</th>
                <th className="d-flex justify-content-center align-content-center"><BsFilterSquare /></th>
              </tr>
            </thead>
            <tbody>
              {filteredData.map((mock, index) => (
                <tr
                  key={mock._id}
                  onMouseEnter={() => handleMouseEnter(index)}
                  onMouseLeave={handleMouseLeave}
                >
                  <td>{index + 1}</td>
                  <td>{mock._id}</td>
                  <td>{mock.name}</td>
                  <td>{whatRole(mock.roleid)}</td>
                  <td>{mock.email}</td>
                  <td className={mock.verify ? 'text-success' : 'text-danger'}>
                    {mock.verify ? 'Verified' : 'Not verified'}
                  </td>
                  <td>{isAddress(mock.address) ? mock.address : 'No address'}</td>
                  <td>{!mock.phone_number ? 'not provided' : mock.phone_number}</td>
                  <td className="d-flex justify-content-center align-items-center" style={{ height: '40px' }}>
                    <Dropdown>
                      <Dropdown.Toggle as="div" style={{ border: 'none', background: 'none', cursor: 'pointer' }}>
                        {hoveredRow === index ? <PiDotsThreeCircleFill /> : <PiDotsThreeCircleLight />}
                      </Dropdown.Toggle>

                      <Dropdown.Menu>
                        <Dropdown.Item href="#/action-1">View</Dropdown.Item>
                        <Dropdown.Item href="#/action-2">Edit</Dropdown.Item>
                        <Dropdown.Item onMouseLeave={() => { setIsActive(false) }} onMouseEnter={() => { setIsActive(true) }} className={isActive ? ('bg-danger text-white') : ''}>Delete</Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        )}
      </div>
    </div>

  )
}
