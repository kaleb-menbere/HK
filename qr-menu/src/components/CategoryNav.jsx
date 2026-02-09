import "./CategoryNav.css";

function CategoryNav({ categories, onSelect }) {
  return (
    <div className="category-nav">
      {categories.map(cat => (
        <button
          key={cat}
          className="category-btn"
          onClick={() => onSelect(cat)}
        >
          {cat}
        </button>
      ))}
    </div>
  );
}

export default CategoryNav;
