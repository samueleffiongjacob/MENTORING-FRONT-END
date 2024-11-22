import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Greetings from './read'
import Display from './CARDS/display'
import App1 from './Buttons/render';
import App2 from './task2 Inputand display/render2';
import App3 from './Perent/app3'
import Counter from './Statemanegement';
import ButtonWithEvent from './event';
import TextIput from './user'
import TodoApp from './week2project/practical'
import TodoAppToggle from './week2project/practice2'
// import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { BrowserRouter as Router, Route, Routes, NavLink } from 'react-router-dom';
import { Dropdown, Navbar, Nav, Container } from 'react-bootstrap';


// first thing
// function App() {
//   return (
//     <Router>
//       <div className ="App">
//         <nav>
//           <ul>
//             <li><Link to="/">Greetings</Link></li>
//             <li><Link to="/display">Display</Link></li>
//             <li><Link to="/app1">App1</Link></li>
//             <li><Link to="/app2">App2</Link></li>
//             <li><Link to="/app3">App3</Link></li>
//           </ul>
//         </nav>
//         <Routes>
//           <Route path="/" element={<Greetings />} />
//           <Route path="/display" element={<Display />} />
//           <Route path="/app1" element={<App1 />} />
//           <Route path="/app2" element={<App2 />} />
//           <Route path="/app3" element={<App3 />} />
//         </Routes>
//       </div>
//     </Router>
//   );
// }


// second thing : starting out styling

// function App() {
//   return (
//     <Router>
//       <div className="App">
//         {/* Navbar */}
//         <nav className="navbar navbar-expand-lg navbar-dark bg-primary"> //nav
//           <div className="container">
//             <Link className="navbar-brand" to="/">Hilima Training for react</Link>
//             <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
//               <span className="navbar-toggler-icon"></span>
//             </button>
//             <div className="collapse navbar-collapse" id="navbarNav">
//               <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
//                 <li className="nav-item">
//                   <Link className="nav-link" to="/">Greetings</Link>
//                 </li>
//                 <li className="nav-item">
//                   <Link className="nav-link" to="/display">Display</Link>
//                 </li>
//                 <li className="nav-item">
//                   <Link className="nav-link" to="/app1">App1</Link>
//                 </li>
//                 <li className="nav-item">
//                   <Link className="nav-link" to="/app2">App2</Link>
//                 </li>
//                 <li className="nav-item">
//                   <Link className="nav-link" to="/app3">App3</Link>
//                 </li>
//               </ul>
//             </div>
//           </div>
//         </nav>

//         {/* Content Area */}
//         <div className="container my-4">
//           <Routes>
//             <Route path="/" element={<Greetings />} />
//             <Route path="/display" element={<Display />} />
//             <Route path="/app1" element={<App1 />} />
//             <Route path="/app2" element={<App2 />} />
//             <Route path="/app3" element={<App3 />} />
//           </Routes>
//         </div>
//       </div>
//     </Router>
//   );
// }

// third function : active nav link

// function App() {
//   return (
//     <Router>
//       <div className="App">
//         {/* Navbar */}
//         <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
//           <div className="container">
//             <NavLink className="navbar-brand" to="/">My React App</NavLink>
//             <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
//               <span className="navbar-toggler-icon"></span>
//             </button>
//             <div className="collapse navbar-collapse" id="navbarNav">
//               <ul className="navbar-nav ms-auto">
//                 <li className="nav-item">
//                   <NavLink 
//                     className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}
//                     to="/"
//                   >
//                     Greetings
//                   </NavLink>
//                 </li>
//                 <li className="nav-item">
//                   <NavLink 
//                     className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}
//                     to="/display"
//                   >
//                     Display
//                   </NavLink>
//                 </li>
//                 <li className="nav-item">
//                   <NavLink 
//                     className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}
//                     to="/app1"
//                   >
//                     App1
//                   </NavLink>
//                 </li>
//                 <li className="nav-item">
//                   <NavLink 
//                     className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}
//                     to="/app2"
//                   >
//                     App2
//                   </NavLink>
//                 </li>
//                 <li className="nav-item">
//                   <NavLink 
//                     className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}
//                     to="/app3"
//                   >
//                     App3
//                   </NavLink>
//                 </li>
//               </ul>
//             </div>
//           </div>
//         </nav>

//         {/* Content Area */}
//         <div className="container my-4">
//           <Routes>
//             <Route path="/" element={<Greetings />} />
//             <Route path="/display" element={<Display />} />
//             <Route path="/app1" element={<App1 />} />
//             <Route path="/app2" element={<App2 />} />
//             <Route path="/app3" element={<App3 />} />
//           </Routes>
//         </div>
//       </div>
//     </Router>
//   );
// }

function App() {
  // Inline styling for dropdown menu
  const dropdownMenuStyle = {
    backgroundColor: '#f0f0f0', // Change this to your desired color
    borderRadius: '5px',
    boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
  }
  
  return (
    <Router>
      <div className="App">
        {/* Navbar */}
        <Navbar bg="primary" variant="dark" expand="lg">
          <Container>
            <Navbar.Brand as={NavLink} to="/">My React App</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="ms-auto">
                <Nav.Link as={NavLink} to="/" className={({ isActive }) => isActive ? "active" : ""}>
                  Greetings
                </Nav.Link>
                <Nav.Link as={NavLink} to="/display" className={({ isActive }) => isActive ? "active" : ""}>
                  Display
                </Nav.Link>
                <Nav.Link as={NavLink} to="/Counter" className={({ isActive}) => isActive ? "active" : ""}>
                  Counter
                </Nav.Link>
                <Nav.Link as={NavLink} to="/todo" className={({ isActive}) => isActive ? "active" : ""}>
                  TodoApp
                </Nav.Link>
                <Nav.Link as={NavLink} to="/toggle" className={({ isActive}) => isActive ? "active" : ""}>
                  TodoAppToggle
                </Nav.Link>

                {/* Dropdown Menu using react-bootstrap */}
                <Dropdown as={Nav.Item}>
                  <Dropdown.Toggle as={Nav.Link} bg="primary" variant="primary" id="dropdown-basic" className="text-light">
                    More Apps
                  </Dropdown.Toggle>

                  <Dropdown.Menu style={dropdownMenuStyle}>
                    <Dropdown.Item as={NavLink} to="/app1">
                      App1
                    </Dropdown.Item>
                    <Dropdown.Item as={NavLink} to="/app2">
                      App2
                    </Dropdown.Item>
                    <Dropdown.Item as={NavLink} to="/app3">
                      App3
                    </Dropdown.Item>
                    <Dropdown.Item as={NavLink} to="/button">
                      Button
                    </Dropdown.Item>
                    <Dropdown.Item as={NavLink} to="/textinput">
                      TextIput
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>

        {/* Content Area */}
        <div className="container my-4">
          <Routes>
            <Route path="/" element={<Greetings />} />
            <Route path="/display" element={<Display />} />
            <Route path="/app1" element={<App1 />} />
            <Route path="/app2" element={<App2 />} />
            <Route path="/app3" element={<App3 />} />
            <Route path="/Counter" element={<Counter />} />
            <Route path='/button' element={< ButtonWithEvent />} />
            <Route path='/textinput' element={< TextIput />} />
            <Route path='/todo' element={< TodoApp />} />
            <Route path='/toggle' element={< TodoAppToggle />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
