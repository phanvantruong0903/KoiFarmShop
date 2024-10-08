import Footer from "./Footer";
import { useState } from "react";
import Navbar from "./Navbar/Navbar";
export default function Lienhe() {
  const [menu, setMenu] = useState("home");
  return (
    <>
      <div>
        <Navbar menu={menu} setMenu={setMenu} />
      </div>

      <div>
        <img src="src/assets/Red Modern Travel Presentation (4).jpg" />
      </div>
      <div>
        <Footer />
      </div>
    </>
  );
}
