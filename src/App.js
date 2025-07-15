import {Route,Routes} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import HomePage  from "./pages/Homepage";
import EditPage from "./pages/Edit";
import "bootstrap/dist/css/bootstrap.min.css"

function App() {
  return (
    <div className="container">
      <h1> Meme Generator</h1>
      <Routes>
<Route path="/" element={<HomePage/>}/>
<Route path="/edit" element={<EditPage />}/>
      </Routes>
    </div>
    
  );
}

export default App;
