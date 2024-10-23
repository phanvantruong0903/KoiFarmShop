// CSS
import '../../Css/Orders.css'
// Bootstrap 
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'
// React 
import { useState, useEffect } from 'react';
// Custom Hooks
import useFilter from '../../Hooks/useFilter';
// Utils
import { isAddress, whatRole } from '../../Utils/valueParser';
// Components
import FilterBar from '../../Components/Staff/FilterBar';
import FilterButton from '../../Components/Staff/FilterButton';
import Spinner from '../../Components/Spinner';
import TableGen from '../../Components/Staff/TableGen';
import ViewProfile from '../../Components/Staff/ViewProfile';
// Axios
import axiosInstance from '../../Utils/axiosJS';

export default function Profiles() {
  const [hoveredRow, setHoveredRow] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isActive, setIsActive] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [userID , setUserID] = useState(null);
  const headers = ['#', 'Mã người dùng', 'Tên', 'Vai trò', 'Email', 'Trạng thái Email', 'Địa chỉ', 'Số điện thoại'];
  const fieldMapping = ['_id', 'name', 'role', 'email', 'verify', 'address', 'phone_number'];
  const handleRowAction = (id, actionType) => {
    if (actionType === 'delete') {

      window.alert(`Delete user with ID: ${id}`);
    }
    else if (actionType === 'view') {
      setUserID(id)
      
    }
  };
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

  function totalStaff(data) {
    let count = 0;
    data.forEach(element => {
      if (element.roleid === 2) {
        count++;
      }
    })
    return count;
  }
  const { searchTerm, handleFilterChange, filteredData, handleSearch, filterList } = useFilter(intialData, 'profile');
  useEffect(() => {
    setIsLoading(true);
    const fetchData = async () => {
      try {
        const response = await axiosInstance.get('manager/manage-user/get-all');
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
      <ViewProfile actions={showModal} setactions={setShowModal} id={userID}/>
      <div className='fw-bold fs-1 ms-5 mb-5'>Profiles</div>

      <div className='d-flex ms-5 me-5 mb-3 Card-Container' style={{ height: '100px', gap: '1rem' }}>
        <div className='border rounded-3 p-2 flex-grow-1'>
          <h4 className='fw-bold fs-4 fs-md-5'>Total User</h4>
          <p>{intialData.length}</p>
        </div>

        <div className='border rounded-3 p-2 flex-grow-1'>
          <h4 className='fw-bold fs-4 fs-md-5'>Total Staff</h4>
          <p>{totalStaff(intialData)}</p>
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
          count={
            intialData.filter(user => user.roleid === 1 || user.roleid === undefined).length
          }
        />
        <FilterButton
          label="All Staffs"
          filterType="role"
          filterValue="Staff"
          currentFilter={filterList.role}
          onFilterChange={handleFilterChange}
          count={
            intialData.filter(user => user.roleid === 2).length
          }
        />

        <FilterButton
          label="All Manager"
          filterType="role"
          filterValue="Manager"
          currentFilter={filterList.role}
          onFilterChange={handleFilterChange}
          count={
            intialData.filter(user => user.roleid === 3).length
          }

        />

      </div>

      <hr className="my-1 mb-4" />
      {/* ==============================Filter Bar========================================= */}
      <div className='d-flex ms-5 me-5 flex-wrap ' style={{ gap: '2rem' }}>
        <FilterBar
          initialTitle={
            filterList.role === '' ? "All" : filterList.role === 'User' ? "User" : filterList.role === 'Staff' ? "Staff" : "Manager"
          }
          NavItems={["All", "User", "Staff", "Manager"]}
          handleFilterChange={handleFilterChange}
          filter="role"
        />

        <FilterBar
          initialTitle={
            filterList.Email_verified === '' ? "Email Verify Status" : filterList.Email_verified === 'Verified' ? "Verified" : "Not Verified"
          }
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
        {isLoading ? (
          <div className="d-flex justify-content-center align-items-center" style={{ height: '100vh' }}>
            <Spinner animation="border" variant="primary" />
          </div>
        ) : (
          <TableGen
            data={filteredData}
            headers={headers}
            fieldMapping={fieldMapping}
            hoveredRow={hoveredRow}
            handleMouseEnter={handleMouseEnter}
            handleMouseLeave={handleMouseLeave}
            whatRole={whatRole}
            isAddress={isAddress}
            isActive={isActive}
            setIsActive={setIsActive}
            handleRowAction={handleRowAction}
            showModal={setShowModal}
          />
        )}
      </div>
    </div>

  )
}
