import { Routes, Route } from "react-router-dom";
import HomePage from "../pages/Home";
import PortfolioPage from "../pages/Portfolio";
import ErrorPage from "../pages/Error";

const Router = () => (
  <Routes>
    <Route path="/" element={<HomePage />} />
    <Route path="/portfolio" element={<PortfolioPage />} />
    <Route path="*" element={<ErrorPage />} />
  </Routes>
);

export default Router;
