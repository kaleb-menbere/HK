import DashboardStats from "../../components/Admin/DashboardStats";
import "./AdminDashboard.css";

function AdminDashboard({ totalItems, totalCategories }) {
  return (
    <div className="admin-dashboard">
      <h2>Dashboard</h2>
      <DashboardStats totalItems={totalItems} totalCategories={totalCategories} />
      <p>Welcome to the Admin Panel. Manage your menu items and categories from the sidebar.</p>
    </div>
  );
}

export default AdminDashboard;
