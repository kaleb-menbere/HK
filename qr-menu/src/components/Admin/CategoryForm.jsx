import "./CategoryForm.css";

function CategoryForm({ onSubmit, initialData }) {
  return (
    <form className="category-form" onSubmit={onSubmit}>
      <input
        type="text"
        name="category"
        defaultValue={initialData?.category || ""}
        placeholder="Category name"
        required
      />
      <button type="submit">Save Category</button>
    </form>
  );
}

export default CategoryForm;
