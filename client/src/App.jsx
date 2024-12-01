import "./App.css";
import React, { useState } from "react";
import ImageUpload from "./components/ImageUpload";
import CategoryManager from "./components/CategoryManager";
import ValidationLog from "./components/ValidationLog";

const App = () => {
  const [allowedCategories, setAllowedCategories] = useState([
    "Clothes",
    "Footwear",
  ]);
  const [prohibitedCategories, setProhibitedCategories] = useState([
    "Weapons",
    "Tobacco",
  ]);
  const [logs, setLogs] = useState([]);

  const handleImageUpload = (file) => {
    const success = Math.random() > 0.5;
    setLogs([
      ...logs,
      {
        success,
        message: success
          ? `Image "${file.name}" accepted.`
          : `Image "${file.name}" rejected.`,
      },
    ]);
  };

  return (
    <div className="App">
      <h1>My Fashion Trunk</h1>
      <ImageUpload onImageUpload={handleImageUpload} />
      <CategoryManager
        title="Allowed Categories"
        categories={allowedCategories}
        onCategoryChange={setAllowedCategories}
      />
      <CategoryManager
        title="Prohibited Categories"
        categories={prohibitedCategories}
        onCategoryChange={setProhibitedCategories}
      />
      <ValidationLog logs={logs} />
    </div>
  );
};

export default App;
