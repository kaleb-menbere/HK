import ItemForm from "../../components/Admin/ItemForm";
import MenuItem from "../../components/MenuItem/MenuItem";
import "./AdminItems.css";

function AdminItems({ items, onSave }) {
  return (
    <div className="admin-items-page">
      <h2>Manage Items</h2>
      <ItemForm onSubmit={onSave} />
      <div className="items-list">
        {items.map(item => (
          <MenuItem key={item.id} name={item.name} price={item.price} />
        ))}
      </div>
    </div>
  );
}

export default AdminItems;
