import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import HelpDeskDashboard from "./HelpDesk";
import SchemaDiagram from "./SchemaDiagram";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HelpDeskDashboard />} />
        <Route path="/schema" element={<SchemaDiagram />} />
        {/* Redirect any unknown routes to the home page */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
}

export default App;
