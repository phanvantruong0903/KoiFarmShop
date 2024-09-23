import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Spinner from "./An/Components/Spinner";
import DashBoard from "./An/Pages/DashBoard";
function App() {


  return (
      <Suspense fallback={<Spinner />}>
        <Routes>
          <Route path="/DashBoard/*" element={<DashBoard />} />
        </Routes>
      </Suspense>

  );
}

export default App;