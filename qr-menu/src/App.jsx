import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MenuPage from "./pages/MenuPage";
import AdminLogin from "./pages/AdminLogin";
import AdminDashboard from "./pages/AdminDashboard";
import AdminItems from "./pages/AdminItems";
import AdminCategories from "./pages/AdminCategories";
import AdminSettings from "./pages/AdminSettings";

function App() {
  // Dummy state for demonstration
  const dummyItems = [
    { id: 1, name: "Coffee", price: "50 ETB" },
    { id: 2, name: "Tea", price: "30 ETB" },
  ];
  const dummyCategories = ["Drinks", "Breakfast", "Lunch", "Dinner"];

  const handleAdminSaveItem = (e) => {
    e.preventDefault();
    alert("Item saved (demo)");
  };

  const handleAdminSaveCategory = (e) => {
    e.preventDefault();
    alert("Category saved (demo)");
  };

  const handleAdminLogin = (username, password) => {
    alert(`Login attempted with ${username}/${password}`);
  };

  return (
    <Router>
      <Routes>
        {/* Customer view */}
        <Route path="/" element={<MenuPage />} />

        {/* Admin */}
        <Route path="/admin/login" element={<AdminLogin onLogin={handleAdminLogin} />} />
        <Route path="/admin/dashboard" element={<AdminDashboard totalItems={dummyItems.length} totalCategories={dummyCategories.length} />} />
        <Route path="/admin/items" element={<AdminItems items={dummyItems} onSave={handleAdminSaveItem} />} />
        <Route path="/admin/categories" element={<AdminCategories categories={dummyCategories} onSave={handleAdminSaveCategory} />} />
        <Route path="/admin/settings" element={<AdminSettings />} />
      </Routes>
    </Router>
  );
}

export default App;
