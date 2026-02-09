import CategoryForm from "../../components/Admin/CategoryForm";
import "./AdminCategories.css";

function AdminCategories({ categories, onSave }) {
  return (
    <div className="admin-categories-page">
      <h2>Manage Categories</h2>
      <CategoryForm onSubmit={onSave} />
      <ul className="categories-list">
        {categories.map((cat, i) => (
          <li key={i}>{cat}</li>
        ))}
      </ul>
    </div>
  );
}

export default AdminCategories;
