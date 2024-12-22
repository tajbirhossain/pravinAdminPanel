import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import './App.css';
import Sidebar from './components/Sidebar';
import Login from './pages/Login';
import Header from './components/Header';
import { useState } from 'react';
import Singup from './pages/Signup';
import Dashboard from './pages/Dashboard';
import OrderManagement from './pages/OrderManagement';
import UserManagement from './pages/UserManagement';
import Accountmanagement from './pages/Accountmanagement';
import Categorymanagement from './pages/Categorymanagement';
import Reportmanagement from './pages/Reportmanagement';
import Leadmanagement from './pages/Leadmanagement';
import Invoices from './pages/Invoives';
import { AuthProvider } from './components/AuthContext';
import Invoice from './pages/Invoice';
import Lead from './pages/Lead';


function App() {

  const [hide, setHide] = useState(false)
  const [isLog, setIsLog] = useState(false)

  const toggol = () => {
    setHide(prev => prev ? false : true)
  }



  return (
    <div className="App">
      <AuthProvider>
        <BrowserRouter>
          <Header setToggleValue={toggol} toggleValue={hide} isLog={isLog} />
          <Sidebar toggleValue={hide} isLog={isLog}>
            <Routes>
              <Route path="/" element={<Navigate to="/home" replace />} />
              <Route path="/home" element={<Dashboard />} />
              <Route path="/order" element={<OrderManagement />} />
              <Route path="/category" element={<Categorymanagement />} />
              <Route path="/report" element={<Reportmanagement />} />
              <Route path="/user" element={<UserManagement />} />
              {/* <Route path="/leadgenerationmanagement" element={<Leadmanagement />} /> */}
              {/* <Route path="/invoices" element={<Invoices />} /> */}
              <Route path="/accountmanagement" element={<Accountmanagement />} />
              <Route path="/lead" element={<Lead />} />
              <Route path="/invoice" element={<Invoice />} />
              <Route path="/login" element={<Login setIsLog={setIsLog} />} />
              {/* <Route path="/signup" element={<Singup />} /> */}
            </Routes>
          </Sidebar>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}


export default App;
