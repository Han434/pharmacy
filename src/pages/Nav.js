import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import Home from "./Home";
import LogIn from "./LogIn";
import BrowseProduct from "./BrowseProduct";
import Report from "./Report";

const Nav = () => {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="browseProduct" element={<BrowseProduct />} />
            <Route path="report" element={<Report />} />
            <Route path="login" element={<LogIn />} />
          </Route>
        </Routes>
      </BrowserRouter>
    );
}

export default Nav;