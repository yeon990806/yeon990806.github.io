import { Routes, useLocation } from "react-router-dom";
import Home from "../routes/home";

const App = () => {
  const location = useLocation();

  return <main>
    { location.pathname == "/"
      ? <Home />
      : <Routes>
        
      </Routes>
    }
  </main>;
}
export default App;