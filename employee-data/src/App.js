import './App.css';
import CreateEmployeeComponent from './components/CreateEmployeeComponent';
import HeaderComponent from './components/HeaderComponent'; 
import ListEmployeeComponent from './components/ListEmployeeComponent';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div>
      <Router>
        <HeaderComponent />
        <div className="container">
          <Routes>
            <Route path="/" element={<ListEmployeeComponent />} />
            <Route path="/employees" element={<ListEmployeeComponent />} />
            <Route path="/employee" element={<ListEmployeeComponent />} />
            <Route path="/add-employee" element={<CreateEmployeeComponent />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
