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
      <div className='fw-bold fs-1 ms-5 mb-5'>Hồ sơ</div>

      <div className='d-flex ms-5 me-5 mb-3 Card-Container' style={{ height: '100px', gap: '1rem' }}>
        <div className='border rounded-3 p-2 flex-grow-1'>
          <h4 className='fw-bold fs-4 fs-md-5'>Tổng số người dùng</h4>
          <p>{intialData.length}</p>
        </div>

        <div className='border rounded-3 p-2 flex-grow-1'>
          <h4 className='fw-bold fs-4 fs-md-5'>Tổng số nhân viên</h4>
          <p>{totalStaff(intialData)}</p>
        </div>
        <div className='border rounded-3 p-2 flex-grow-1'>
          <h4 className='fw-bold fs-4 fs-md-5'>Tổng số quản lý</h4>
          <p>{totalManager(intialData)}</p>
        </div>
      </div>
      <div className='d-flex ms-5 me-5 Order-container' style={{ gap: '2rem' }}>
        {/* ==============================Nút Lọc========================================= */}
        <FilterButton
          label="Tất cả"
          filterType="role"
          filterValue=""
          currentFilter={filterList.role}
          onFilterChange={handleFilterChange}
          count={intialData.length}
        />
        <FilterButton
          label="Tất cả Người dùng"
          filterType="role"
          filterValue="User"
          currentFilter={filterList.role}
          onFilterChange={handleFilterChange}
          count={
            intialData.filter(user => user.roleid === 1 || user.roleid === undefined).length
          }
        />
        <FilterButton
          label="Tất cả Nhân viên"
          filterType="role"
          filterValue="Staff"
          currentFilter={filterList.role}
          onFilterChange={handleFilterChange}
          count={
            intialData.filter(user => user.roleid === 2).length
          }
        />

        <FilterButton
          label="Tất cả Quản lý"
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
      {/* ==============================Thanh Lọc========================================= */}
      <div className='d-flex ms-5 me-5 flex-wrap ' style={{ gap: '2rem' }}>
        <FilterBar
          initialTitle={
            filterList.role === '' ? "Tất cả" : filterList.role === 'Người dùng' ? "Người dùng" : filterList.role === 'Nhân viên' ? "Nhân viên" : "Vai trò Quản lý"
          }
          NavItems={["Tất cả", "Người dùng", "Nhân viên", "Quản lý"]}
          handleFilterChange={handleFilterChange}
          filter="role"
        />

        <FilterBar
          initialTitle={
            filterList.Email_verified === '' ? "Trạng thái Xác minh Email" : filterList.Email_verified === 'Verified' ? "Đã xác minh" : "Chưa xác minh"
          }
          NavItems={["Tất cả", "Đã xác minh", "Chưa xác minh"]}
          handleFilterChange={handleFilterChange}
          filter="Email_verified"
        />


        <div className="d-flex ms-auto search-container" style={{ flexGrow: 0.125 }}>
          <Form className="d-flex w-100 flex-row search-bar">
            <FormControl
              type="search"
              placeholder="Tìm Người dùng"
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
