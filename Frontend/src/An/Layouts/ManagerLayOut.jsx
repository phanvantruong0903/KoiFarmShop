import { Outlet } from "react-router-dom";
import TopBar from "../Components/TopBar";
export default function ManagerLayOut() {
  return (
    <div>
      <TopBar/>
      
      <main>
        <Outlet />  
      </main>
    </div>
  );
}
