import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import PlanTrip from "./pages/PlanTrip";
import Destinations from "./pages/Destinations";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/plan-trip" element={<PlanTrip />} />
        <Route path="/destinations" element={<Destinations />} />
      </Routes>
    </Router>
  );
}

export default App;
