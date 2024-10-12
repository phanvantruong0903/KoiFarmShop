import { Dropdown } from "react-bootstrap";

const userHaveLoggedInPage = ({ handleLogout }) => {
  return (
    <Dropdown style={{ color: "red" }}>
      <Dropdown.Toggle variant="secondary" id="dropdown-basic">
        Tài khoản
      </Dropdown.Toggle>
      <Dropdown.Menu>
        <Dropdown.Item href="/profile">Xem hồ sơ</Dropdown.Item>
        <Dropdown.Item href="/orders">Đơn hàng</Dropdown.Item>
        <Dropdown.Divider />
        <Dropdown.Item onClick={handleLogout}>Đăng xuất</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
};

export default userHaveLoggedInPage;
