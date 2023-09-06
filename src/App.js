import { useNavigate } from 'react-router-dom';
import './App.css';
import Dashboard from './Pages/Dashboard';
import Login from './Pages/Auth/Login';
import { useEffect, useState } from 'react';
import ShowAlert from './Components/ShowAlert';
import { useSelector } from 'react-redux';

function App() {
  const token = localStorage.getItem("token");


  // useEffect(() => {
  //   // condition
  // }, [token])

  return (
    <div className="App">
      {alert.message && (
        <ShowAlert
          title={alert.status === "success" ? "Success!" : "Error!"}
          desc={alert.message}
          status={alert.status}
        />
      )}
      { token ? <Dashboard/> : <Login/>}
    </div>
  );
}

export default App;
