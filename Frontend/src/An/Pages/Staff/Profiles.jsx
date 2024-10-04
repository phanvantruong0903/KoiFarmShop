import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
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
import Spinner from '../../Components/Spinner';
export default function Profiles() {
  const [hoveredRow, setHoveredRow] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isActive, setIsActive] = useState(false);

  const handleMouseEnter = (index) => {
    setHoveredRow(index);
  };

  const handleMouseLeave = () => {
    setHoveredRow(null);
  };
  function totalGuest(data){
    let count = 0;
    data.forEach(element => {
      if(element.role === 'Guest'){
        count++;
      }
    });
    return count;
  } 
  function totalCustomer(data){
    let count = 0;
    data.forEach(element => {
      if(element.role === 'Customer'){
        count++;
      }
    })
    return count;
  }


  const [mock, setMock] = useState([])
  const { searchTerm, handleFilterChange, filteredData, handleSearch, filterList } = useFilter(mock, true);
  useEffect(() => {
    setIsLoading(true);
    fetch('https://66ff94494da5bd2375511a2a.mockapi.io/users')
      .then(response => response.json())
      .then(json => {
        setMock(json)
        console.log(json)
      })
      .finally(() => setIsLoading(false))
  }, [])
  return (
    <div>
      <div className='fw-bold fs-1 ms-5 mb-5'>Profiles</div>

      <div className='d-flex ms-5 me-5 mb-3 Card-Container' style={{ height: '100px', gap: '1rem' }}>
        <div className='border rounded-3 p-2 flex-grow-1'>
          <h4 className='fw-bold fs-4 fs-md-5'>Total User</h4>
          <p>{mock.length}</p>
        </div>

        <div className='border rounded-3 p-2 flex-grow-1'>
          <h4 className='fw-bold fs-4 fs-md-5'>Total Guest</h4>
          <p>{totalGuest(mock)}</p>
        </div>
        <div className='border rounded-3 p-2 flex-grow-1'>
          <h4 className='fw-bold fs-4 fs-md-5'>Total Customer</h4>
          <p>{totalCustomer(mock)}</p>
        </div>
      

      </div>
      <div className='d-flex ms-5 me-5 Order-container' style={{ gap: '2rem' }}>
        <div
          className={filterList.role === '' ? 'active' : ''}
          onClick={() => handleFilterChange('role', '')}
        >
          All Users <span className='ms-1'>{mock.length}</span>
        </div>
        <div className={filterList.role === 'Customer' ? 'active' : ''}
          onClick={() => handleFilterChange('role', 'Customer')}  >
          All Customer <span className='ms-1'> {totalCustomer(mock)}  </span>
        </div>
        <div
          className={filterList.role === 'Guest' ? 'active' : ''}
          onClick={() => handleFilterChange('role', 'Guest')}
        >
          All Guest <span className='ms-1'>{totalGuest(mock)}</span>
        </div>

      </div>

      <hr className="my-1 mb-4" />
      <div className='d-flex ms-5 me-5 flex-wrap ' style={{ gap: '2rem' }}>
        <DropdownButton id="dropdown-basic-button" title="All User" onSelect={(e) => handleFilterChange('role', e)}>
          <Dropdown.Item eventKey="">All</Dropdown.Item>
          <Dropdown.Item eventKey="Customer">Customer</Dropdown.Item>
          <Dropdown.Item eventKey="Guest">Guest</Dropdown.Item>
        </DropdownButton>

        <DropdownButton id="dropdown-basic-button" title="Email Verified Status" onSelect={(e) => handleFilterChange('Email_verified', e)}>
          <Dropdown.Item eventKey="">All</Dropdown.Item>
          <Dropdown.Item eventKey="true">Verified</Dropdown.Item>
          <Dropdown.Item eventKey="false">Not Verified</Dropdown.Item>
        </DropdownButton>


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
        <Table striped bordered hover responsive="md">
          <thead>
            <tr>
              <th>#</th>
              <th>User_ID</th>
              <th>User Name</th>
              <th>Role</th>
              <th>Email</th>
              <th>Email Status</th>
              <th>Phone Number</th>
              <th className="d-flex justify-content-center align-content-center"><BsFilterSquare /></th>
            </tr>
          </thead>
          <tbody>
            {filteredData.map((mock, index) => (
              <tr
                key={mock.id}
                onMouseEnter={() => handleMouseEnter(index)}
                onMouseLeave={handleMouseLeave}
              >
                <td>{index + 1}</td>
                <td>{mock.userID}</td>
                <td>{mock.UserName}</td>
                <td>{mock.role}</td>
                <td>{mock.email}</td>
                <td className={mock.Email_verifed ? 'text-success' : 'text-danger'}>
                  {mock.Email_verifed ? 'Verified' : 'Not verified'}
                </td>
                <td>{mock.phoneNumber}</td>
                <td className="d-flex justify-content-center align-items-center" style={{ height: '40px' }}>
                  <Dropdown>
                    <Dropdown.Toggle as="div" style={{ border: 'none', background: 'none', cursor: 'pointer' }}>
                      {hoveredRow === index ? <PiDotsThreeCircleFill /> : <PiDotsThreeCircleLight />}
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                      <Dropdown.Item href="#/action-1">View</Dropdown.Item>
                      <Dropdown.Item  href="#/action-2">Edit</Dropdown.Item>
                      <Dropdown.Item onMouseLeave={()=>{setIsActive(false)}} onMouseEnter={()=>{setIsActive(true)}} className={isActive? ('bg-danger text-white') : ''}>Delete</Dropdown.Item>
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
