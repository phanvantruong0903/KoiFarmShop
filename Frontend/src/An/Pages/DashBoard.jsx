import { useEffect, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from "react-bootstrap";
import TopBar from "../Components/TopBar";
import { useAuth } from "../../Context/AuthContext";

const useAuthCheck = () => {
  const navigate = useNavigate();
  const { checkRole } = useAuth();

  useEffect(() => {
    const fetchRole = async () => {
      try {
        const role = await checkRole();
        
        if (role !== "Staff" && role !== "Manager") {
          navigate("/login", { replace: true });
        }
      } catch (error) {
        console.error("Error checking role:", error);
        navigate("/login", { replace: true });
      }
    };

    fetchRole();
  }, [checkRole, navigate]);

  return null;
};

export default function DashBoard() {
  useAuthCheck();

  return (
    <TopBar>
      <Container fluid>
        <Outlet />
      </Container>
    </TopBar>
  );
}
