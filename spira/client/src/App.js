import User from "./User"
import Admin from "./Admin"
import Login from "./Login"
import  {Route, Routes} from "react-router-dom"

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="*" element={<User/>}/>
        <Route exact path="/admin/*" element={<Admin/>}/>
        <Route exact path="/login/*" element={<Login/>}/>
      </Routes>
     
    </div>
  );
}

export default App;
