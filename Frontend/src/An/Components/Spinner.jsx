import "../Css/Spinner.css";
import Container from 'react-bootstrap/Container';
export default function Spinner() {
  return (
    <Container fluid className=" d-flex justify-content-center align-items-center vh-100 ">
        <div  className="lds-dual-ring"></div>
    </Container>
  )
}
