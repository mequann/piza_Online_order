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
import RoleTable from './markup/components/DashBbordComponents/RoleTable';
import AddMenuForm from './markup/components/Forms/AddMenuForm';
import OrderPage from './markup/pages/Order/OrderPage';

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
          <Route path='roles' element={<RoleTable/>} />
          <Route path='add-menu' element={<AddMenuForm/>} />  
        </Route>
        <Route path='/order' element={<OrderPage/>} />
        <Route path='*' element={<p>There's nothing here: 404!</p>} />
      </Routes>

      {/* Footer */}
      
    </>
  );
}

export default App;
