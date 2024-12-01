import React, { useState } from "react";

const ImageUpload = ({ onImageUpload }) => {
  const [file, setFile] = useState(null);

  const handleFileChange = (e) => {
    const uploadedFile = e.target.files[0];
    setFile(uploadedFile);
    onImageUpload(uploadedFile);
  };

  return (
    <div className="image-upload">
      <label htmlFor="imageInput">Upload Image</label>
      <input
        type="file"
        id="imageInput"
        accept="image/*"
        onChange={handleFileChange}
      />
      {file && <p>Selected: {file.name}</p>}
    </div>
  );
};

export default ImageUpload;
