import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Spinner from "./An/Components/Spinner";
const Admin = lazy(() =>
  new Promise(resolve => {
    setTimeout(() => resolve(import('./An/Pages/Admin')), 3000);
  })
)
const Staff = lazy(() => import('./An/Pages/Staff'));
function App() {


  return (

    <Suspense fallback={Spinner}>
      <Routes>
        <Route path="/Admin" element={<Admin />} />
        <Route path="/Staff" element={<Staff />} />
      </Routes>
    </Suspense>

  );
}

export default App;