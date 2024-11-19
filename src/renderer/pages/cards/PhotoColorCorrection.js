import React, { useState } from 'react';
import axios from 'axios';
import './CardPage.css';

const PhotoColorCorrection = () => {
  const [uploadedImage, setUploadedImage] = useState(null);
  const [processedImage, setProcessedImage] = useState(null);
  const [loading, setLoading] = useState(false);
  const handleUpload = async (event) => {
    const file = event.target.files[0];
    if (!file) return;

    // Display the uploaded image
    const imageURL = URL.createObjectURL(file);
    setUploadedImage(imageURL);
    setProcessedImage(null); // Initially set processed image to the uploaded image

    setLoading(true);

    // Prepare the form data to send to the API
    const formData = new FormData();
    formData.append("file", file);

    try {
      // Send the image to the Cutout.pro API for processing
      const response = await axios.post(
        'https://www.cutout.pro/api/v1/matting?mattingType=4',  // Replace with actual API endpoint
        formData,
        {
          headers: {
            'APIKEY': process.env.REACT_APP_CUTOUT_API_KEY,
            'Content-Type': 'multipart/form-data',
          },
          responseType: 'blob',  // Expect binary data (image)
        }
      );

      // Convert the blob response into a URL
      const processedImageUrl = URL.createObjectURL(new Blob([response.data]));
      setProcessedImage(processedImageUrl); // Set the processed image URL

    } catch (error) {
      console.error("Error uploading file:", error);
      alert("Failed to process the image.");
    } finally {
      setLoading(false);
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
          {uploadedImage ? (
            <img src={uploadedImage} alt="Uploaded" />
          ) : (
            <p className="placeholder-text">No image uploaded.</p>
          )}
        </div>
        <div className="image-display">
          <h3>Processed Image</h3>
          {loading ? (
            <p>Processing...</p>
          ) : processedImage ? (
            <img src={processedImage} alt="Processed" />
          ) : (
            <p className="placeholder-text">No processed image.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default PhotoColorCorrection;
