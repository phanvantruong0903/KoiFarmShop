import { useParams } from "react-router-dom";
import { Container } from "react-bootstrap";

export default function Staff() {
  const { id } = useParams();

  return (
    <Container>
      {id === "Profiles" && <h1>Staff Profiles</h1>}
      {id === "Orders" && <h1>Staff Orders</h1>}
      {!["Profiles", "Orders"].includes(id) && <h1>Staff Profile {id}</h1>}
    </Container>
  );
}
