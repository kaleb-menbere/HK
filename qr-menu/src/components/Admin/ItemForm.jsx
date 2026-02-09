import "./ItemForm.css";

function ItemForm({ onSubmit, initialData }) {
  return (
    <form className="item-form" onSubmit={onSubmit}>
      <input
        type="text"
        name="name"
        defaultValue={initialData?.name || ""}
        placeholder="Item name"
        required
      />
      <input
        type="text"
        name="price"
        defaultValue={initialData?.price || ""}
        placeholder="Price"
        required
      />
      <button type="submit">Save Item</button>
    </form>
  );
}

export default ItemForm;
