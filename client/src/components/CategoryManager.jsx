import React, { useState } from "react";

const CategoryManager = ({ title, categories, onCategoryChange }) => {
  const [newCategory, setNewCategory] = useState("");

  const handleAddCategory = () => {
    if (newCategory.trim()) {
      onCategoryChange([...categories, newCategory.trim()]);
      setNewCategory("");
    }
  };

  const handleRemoveCategory = (index) => {
    const updatedCategories = categories.filter((_, i) => i !== index);
    onCategoryChange(updatedCategories);
  };

  return (
    <div className="category-manager">
      <h3>{title}</h3>
      <ul>
        {categories.map((category, index) => (
          <li key={index}>
            {category}{" "}
            <button onClick={() => handleRemoveCategory(index)}>Remove</button>
          </li>
        ))}
      </ul>
      <input
        type="text"
        value={newCategory}
        onChange={(e) => setNewCategory(e.target.value)}
        placeholder="Add new category"
      />
      <button onClick={handleAddCategory}>Add</button>
    </div>
  );
};

export default CategoryManager;
