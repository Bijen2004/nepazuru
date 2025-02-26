// import React, { useState, useCallback } from "react";

// const UploadZone = ({ onFileSelect, onNext }) => {
//   const [isDragging, setIsDragging] = useState(false);
//   const [preview, setPreview] = useState(null);

//   const handleDrag = useCallback((e) => {
//     e.preventDefault();
//     e.stopPropagation();
//   }, []);

//   const handleDrop = useCallback((e) => {
//     e.preventDefault();
//     e.stopPropagation();
//     setIsDragging(false);

//     const file = e.dataTransfer.files[0];
//     if (file && file.type.startsWith("image/")) {
//       handleFile(file);
//     }
//   }, []);

//   const handleFile = (file) => {
//     onFileSelect(file);
//     const reader = new FileReader();
//     reader.onloadend = () => {
//       setPreview(reader.result);
//     };
//     reader.readAsDataURL(file);
//   };

//   const handleFileInput = (e) => {
//     const file = e.target.files[0];
//     if (file) {
//       handleFile(file);
//     }
//   };

//   return (
//     <div
//       className={`max-w-3xl mx-auto border-2 border-dashed rounded-lg p-8 md:p-12 transition-colors
//         ${isDragging ? "border-[#4CD7E7] bg-[#2A3241]" : "border-gray-600"}
//         ${preview ? "border-[#46B789]" : ""}`}
//       onDragOver={(e) => {
//         handleDrag(e);
//         setIsDragging(true);
//       }}
//       onDragLeave={(e) => {
//         handleDrag(e);
//         setIsDragging(false);
//       }}
//       onDrop={handleDrop}
//     >
//       {preview && (
//           <button
//             onClick={onNext}
//             className="mt-4 content-end bg-[#3B4BDF] text-white px-6 py-3 rounded-lg hover:bg-opacity-90 transition-colors"
//           >
//             Play Now
//           </button>
//         )}
//       <div className="flex flex-col items-center">
//         {preview ? (
//           <div className="w-full max-w-md mb-4">
//             <img src={preview} alt="Preview" className="w-full h-auto rounded-lg" />
//           </div>
//         ) : null}
//         {!preview && (
//           <label className="cursor-pointer mb-4">
//             <input
//               type="file"
//               className="hidden"
//               accept="image/*"
//               onChange={handleFileInput}
//             />
//             <span className="bg-[#3B4BDF] text-white px-6 py-3 rounded-lg inline-flex items-center hover:bg-opacity-90 transition-colors">
//               <span className="mr-2">+</span>
//               Select a picture
//             </span>
//           </label>
//         )}
//         <p className="text-gray-400">
//           {isDragging ? "Drop your image here" : "Or drop an image"}
//         </p>

//         {/* Next Button */}
        
//       </div>
//     </div>
//   );
// };

// export default UploadZone;
import React, { useState, useCallback } from "react";

const UploadZone = ({ onFileSelect, onNext }) => {
  const [isDragging, setIsDragging] = useState(false);
  const [preview, setPreview] = useState(null);

  const handleDrag = useCallback((e) => {
    e.preventDefault();
    e.stopPropagation();
  }, []);

  const handleDrop = useCallback((e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);

    const file = e.dataTransfer.files[0];
    if (file && file.type.startsWith("image/")) {
      handleFile(file);
    }
  }, []);

  const handleFile = (file) => {
    onFileSelect(file);
    const reader = new FileReader();
    reader.onloadend = () => {
      setPreview(reader.result);
    };
    reader.readAsDataURL(file);
  };

  const handleFileInput = (e) => {
    const file = e.target.files[0];
    if (file) {
      handleFile(file);
    }
  };

  return (
    <div
      className={`max-w-3xl mx-auto border-2 border-dashed rounded-lg p-8 md:p-12 transition-colors
        ${isDragging ? "border-[#4CD7E7] bg-[#2A3241]" : "border-gray-600"}
        ${preview ? "border-[#46B789]" : ""}`}
      onDragOver={(e) => {
        handleDrag(e);
        setIsDragging(true);
      }}
      onDragLeave={(e) => {
        handleDrag(e);
        setIsDragging(false);
      }}
      onDrop={handleDrop}
    >
      
      <div className="flex flex-col items-center">
      {preview && (
          <button
            onClick={onNext}
            className="mt-4 ml-auto bg-[#3B4BDF] text-white px-6 py-3 rounded-lg hover:bg-opacity-90 transition-colors"
          >
            Play Now
          </button>
        )}
        {preview ? (
          <div className="w-full max-w-md mb-4">
            <img src={preview} alt="Preview" className="w-full h-auto rounded-lg" />
          </div>
        ) : null}
        {!preview && (
          <label className="cursor-pointer mb-4">
            <input
              type="file"
              className="hidden"
              accept="image/*"
              onChange={handleFileInput}
            />
            <span className="bg-[#3B4BDF] text-white px-6 py-3 rounded-lg inline-flex items-center hover:bg-opacity-90 transition-colors">
              <span className="mr-2">+</span>
              Select a picture
            </span>
          </label>
        )}
        <p className="text-gray-400">
          {isDragging ? "Drop your image here" : "Or drop an image"}
        </p>

        {/* Play Now Button - Align to the right */}
       
      </div>
    </div>
  );
};

export default UploadZone;
