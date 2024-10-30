import { useLocation } from "react-router-dom";
export default function Chitietconsignpage() {
  const location = useLocation();
  const { consign } = location.state || {}; // Access the passed state
  console.log(consign);
  return (
    <div>
      {consign ? (
        <div>
          <h1>Details for {consign.name}</h1>

          {/* Render additional details here */}
        </div>
      ) : (
        <p>No details available.</p>
      )}
    </div>
  );
}
