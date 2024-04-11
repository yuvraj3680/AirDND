//import { BrowserRouter, Route, Routes } from 'react-router-dom'
// import Home from './home'
// import Login from './Login'
import Home from "./User/HomePage/Home";
import "./App.css";
//import { useEffect, useState } from 'react'
//import Header from './Common/HeaderPage/Header';
import MainFrame from "./Common/MainFrame/MainFrame";
import AddHotel from "./Vendor/AddHotel";
// import '../.env'
function App() {
  console.log("WELCOME", process.env.PUBLIC_URL);

  return (
    <div className="App">
      {/* <Header/>
      <Login/> */}
     
      <MainFrame />
      {/* <AddHotel/> */}
      {/* <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home email={email} loggedIn={loggedIn} setLoggedIn={setLoggedIn} />
          <Route path="/login" element={<Login/>} />
          <Route path="/home" element={<Home/>} />
        </Routes>
      </BrowserRouter> */}
    </div>
  );
}

export default App;
