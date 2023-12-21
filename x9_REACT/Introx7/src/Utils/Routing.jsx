import { Route, Routes } from "react-router-dom";
import Home from "../Components/Home";
import User from "../Components/User";
import About from "../Components/About";
import UserDetails from "../Components/UserDetails";
function Routing() {
  return (
    <div>
      <Routes>
        <Route path="/Home" element={<Home />} />
        {/* This is to write content right there at the bottom 👇 */}
        <Route path="/User" element={<User />}>
          <Route path="/User/:name" element={<UserDetails />} />
        </Route>
        {/* This is for users puttin ':' ☝🏿  infront of "name" means it's a variable */}
        <Route path="/About" element={<About />} />
      </Routes>
    </div>
  );
}

export default Routing;
