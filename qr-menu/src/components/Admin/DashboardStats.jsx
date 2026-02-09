import "./DashboardStats.css";

function DashboardStats({ totalItems, totalCategories }) {
  return (
    <div className="dashboard-stats">
      <div className="stat-card">
        <h3>{totalItems}</h3>
        <p>Total Items</p>
      </div>
      <div className="stat-card">
        <h3>{totalCategories}</h3>
        <p>Total Categories</p>
      </div>
    </div>
  );
}

export default DashboardStats;
