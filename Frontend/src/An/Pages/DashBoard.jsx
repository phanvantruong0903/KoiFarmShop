import { lazy } from "react";
import { Route, Routes } from "react-router-dom";
import ManagerLayOut from "../Layouts/ManagerLayOut";
import StaffLayOut from "../Layouts/StaffLayOut";

const Staff = lazy(() => import('./Staff'));
const Manager = lazy(() => import('./Manager'));

export default function DashBoard() {
  return (
    <Routes>
 
      <Route path="staff" element={<StaffLayOut />}>
        <Route index element={<Staff />} />  {/* Render Staff component */}
      </Route>

   
      <Route path="manager" element={<ManagerLayOut />}>
        <Route index element={<Manager />} /> 
      </Route>
    </Routes>
  );
}