import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from "../pages/Homes"
import Heaader from "../components/navbar/Header"
import Footer from "../components/footer/Footer"
import Blog from '../pages/blog';

const Navigations = () => {
    return (
      <Router>
        {/* Navber links*/}
        <Heaader />

        {/* pages */}
        <Routes>
            <Route path="/" element={<Blog />} />
            <Route path="/Platform" element={<Home />} />
        </Routes>

        {/* footer */}
        <Footer />
      </Router>
    );
  };
  
export default Navigations;