import "./MenuItem.css";

function MenuItem({ name, price }) {
  return (
    <div className="menu-item">
      <span className="menu-item-name">{name}</span>
      <span className="menu-item-price">{price}</span>
    </div>
  );
}

export default MenuItem;
