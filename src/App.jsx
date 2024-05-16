import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Index from "./pages/Index.jsx";
import SavedListsPage from "./pages/SavedListsPage.jsx";
import Navigation from "./components/Navigation.jsx";

function App() {
  return (
    <Router>
      <Navigation />
      <Routes>
        <Route exact path="/" element={<Index />} />
        <Route path="/saved-lists" element={<SavedListsPage />} />
      </Routes>
    </Router>
  );
}

export default App;
