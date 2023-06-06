import User from "./User"
import Admin from "./Admin"
import Login from "./Login"
import  {Route, Routes} from "react-router-dom"
// import AuthRoute from "./components/AuthRoute";
import React from "react";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="*" element={<User/>} />
        <Route path="/login/*" element={<Login/>} />
        <Route path="/admin/*" element={<Admin/>} />
      </Routes>
    </div>
  );
}

export default App;