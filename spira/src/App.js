import User from "./User"
import Admin from "./Admin"
import  {Route, Routes} from "react-router-dom"

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="*" element={<User/>}/>
        <Route exact path="/admin/*" element={<Admin/>}/>
      </Routes>
     
    </div>
  );
}

export default App;
