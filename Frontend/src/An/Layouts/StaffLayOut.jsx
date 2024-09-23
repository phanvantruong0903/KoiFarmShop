import { Outlet } from "react-router-dom";
import TopBar from "../Components/TopBar";
export default function StaffLayOut() {
  return (
    <div>
      <TopBar/>
      <main>
        <Outlet />
      </main>
    </div>
  );
}
