import { useState } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import './App.css';
import Navbar from './markup/components/Nabbar/Navbar';
import Footer from './markup/components/Footer/Footer';
import Home from './markup/pages/Home/Home';
import SignUp from './markup/components/Forms/SignUp';
import Login from './markup/components/Forms/Login';
import Dashboard from './markup/pages/Dashboard/DashBoard'; 
import OrdersTable from './markup/components/DashBbordComponents/OrderTable';
import UserTable from './markup/components/DashBbordComponents/UserTable';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      {/* Main Navbar */}
      <Navbar />

      {/* Main Route structure */}
      <Routes>
        {/* Home route */}
        <Route path='/' element={<><Home /> <Footer /></>} />
        
        {/* Sign Up route */}
        <Route path='/signup' element={<SignUp />} />
        
        {/* Login route */}
        <Route path='/login' element={<Login />} />
        
        {/* Dashboard route with nested paths */}
        <Route path='/menu' element={<Dashboard />}>
          {/* Nested routes within the dashboard */}
          <Route path='orders' element={<OrdersTable  />} />
          <Route path='users' element={<UserTable />} />
          {/* <Route path='add-menu' element={<AddMenuComponent />} /> */}
        </Route>
      </Routes>

      {/* Footer */}
      
    </>
  );
}

export default App;
