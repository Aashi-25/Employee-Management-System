import React, { useContext, useEffect, useState } from 'react'
import Login from './components/Auth/Login';
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard';
import AdminDashboard from './components/Dashboard/AdminDashboard';
import { getLocalStorage, setLocalStorage } from './utils/localStorage';
import { AuthContext } from './context/AuthProvider';
import { data } from 'autoprefixer';

const App = () => {

  const [user, setUser] = useState(null); //can be admin or employee
  const [loggedInUser, setloggedInUser] = useState(null);
  const authData = useContext(AuthContext);

  useEffect(() => {
    const loggedInUser = localStorage.getItem('loggedInUser');
    if (loggedInUser) {
      const userData = JSON.parse(loggedInUser);
      setUser(userData.role)
      setloggedInUser(userData.data)
      console.log("✅ Loaded userData from localStorage:", userData);
    }
  },[]);
  

  const handleLogin = (email, password) => {
    if (email == 'admin@me.com' && password == '123') {
      const admin = authData.admin.find((a) => a.email === email && a.password === password);
      if (admin) {
        setUser('admin');
        setloggedInUser(admin);
        localStorage.setItem("loggedInUser", JSON.stringify({
          role: 'admin',
          data: admin
        }))
      } else {
        alert("Invalid Admin Credentials")
      }

    } else if(authData ) {
      const employee = authData.employees.find((e) => email == e.email && e.password == password);
      if (employee) {
        setUser('employee');
        setloggedInUser(employee); 
        localStorage.setItem('loggedInUser' , JSON.stringify({role : 'employee', data : employee}));
      }
    } 
    
    else{
    alert("Invalid employee Credentials");
  }
  }

  return (
    <>
    {!user && <Login handleLogin={handleLogin} />}
    {user === 'admin' && <AdminDashboard changeUser = {setUser} data = {loggedInUser} />}
    {user === 'employee' && <EmployeeDashboard changeUser = {setUser} data = {loggedInUser} />}
    </>
  )
}

export default App;