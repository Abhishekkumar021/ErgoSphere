// // src/App.jsx
// import React from 'react';
// import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
// import Upload from './pages/Upload.jsx';

// export default function App() {
//   return (
//     <Router>
//       <nav className="bg-gray-800 text-white p-4 flex space-x-4">
//         <Link to="/" className="hover:underline">Upload</Link>
//         {/* Add more links later like Dashboard, QA */}
//       </nav>
//       <Routes>
//         <Route path="/" element={<Upload />} />
//       </Routes>
//     </Router>
//   );
// }



// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Upload from './pages/upload/upload';
import Dashboard from './pages/dashboard/Dashboard';
import Home from './pages/Home/Home';
import Navbar from './components/Navbar';
// import Upload from './pages/Upload.jsx';
// import Dashboard from './pages/Dashboard.jsx';


export default function App() {
  return (
    <Router>
      {/* <nav className="bg-gray-800 text-white p-4 flex space-x-4">
        <Link to="/" className="hover:underline">QA</Link>
        <Link to="/upload" className="hover:underline">Upload</Link>
        <Link to="/dashboard" className="hover:underline">Dashboard</Link>
      </nav> */}
      <Navbar />
      <div className="pt-24">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/ask" element={<Home />} />
          <Route path="/upload" element={<Upload />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </div>
    </Router>
  );
}
