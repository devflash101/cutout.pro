import React, { useState } from 'react';
import './CardPage.css';

const RemoveObject = () => {
  const [uploadedImage, setUploadedImage] = useState(null);
  const [processedImage, setProcessedImage] = useState(null);

  const handleUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const imageURL = URL.createObjectURL(file);
      setUploadedImage(imageURL);
      setProcessedImage(imageURL); // Set the processed image to be the same as the uploaded image
    }
  };

  return (
    <div className="remove-image-background-page">
      <div className="button-group">
        <button onClick={() => window.history.back()}>Back</button>
        <input type="file" id="upload" onChange={handleUpload} hidden />
        <label htmlFor="upload" className="upload-button">Upload</label>
      </div>
      
      <div className="image-container">
        <div className="image-display">
          <h3>Uploaded Image</h3>
          {uploadedImage ? <img src={uploadedImage} alt="Uploaded" /> : <p>No image uploaded.</p>}
        </div>
        <div className="image-display">
          <h3>Processed Image</h3>
          {processedImage ? <img src={processedImage} alt="Processed" /> : <p>No processed image.</p>}
        </div>
      </div>
    </div>
  );
};

export default RemoveObject;
