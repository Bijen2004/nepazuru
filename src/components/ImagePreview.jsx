"use client";

import React, { useState, useEffect } from "react";

const ImagePreview = () => {
  const [imageUrl, setImageUrl] = useState(null);

  useEffect(() => {
    const storedImage = localStorage.getItem("selectedImage");
    if (storedImage) {
      setImageUrl(storedImage);
    }
  }, []);

  if (!imageUrl) {
    return <p className="text-gray-400">No image selected</p>;
  }

  return (
    <div className="max-w-xs mx-auto">
      <h3 className="text-lg font-semibold mb-2 text-center">Image Preview</h3>
      <img
        src={imageUrl}
        alt="Uploaded Preview"
        className="w-full h-auto rounded-lg shadow-lg"
      />
    </div>
  );
};

export default ImagePreview;