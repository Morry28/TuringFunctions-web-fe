import React, { useRef, useState } from "react";

const FileZone: React.FC = () => {
  const [file, setFile] = useState<File | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Handler for when a file is selected via the file input
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0]);
    }
  };

  // Handler for when a file is dropped in the drop zone
  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      setFile(e.dataTransfer.files[0]);
    }
  };

  // Prevent default behavior for drag over
  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
  };

  // Function to upload the file to the backend
  const handleUpload = async () => {
    if (!file) return;

    const formData = new FormData();
    formData.append("file", file);

    try {
      const response = await fetch("https://your-backend-endpoint/upload", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();
      console.log("Upload successful:", data);
    } catch (error) {
      console.error("Upload error:", error);
    }
  };

  return (
    <div className="w-full flex flex-col">
      {/* File drop zone */}
      <div
        onDrop={handleDrop}
        onDragOver={handleDragOver}
        className="flex w-[33%] h-96 mx-auto border-dashed border-x-2 border-t-2 border-SCS/80 rounded-t-lg shadow-md shadow-SC/35"
      >
        <div className="flex flex-col justify-center w-full">
          <h1 className="text-SCS/10 font-black text-7xl">upload file</h1>
          <p className="text-7xl text-black/10">📤</p>
        </div>
      </div>

      {/* File input */}
      <div className="flex flex-row-reverse w-[33%] mx-auto border-2 border-SCS rounded-b-lg shadow-md shadow-SC/35 items-center justify-between">
        <button
          className={`${file? 'hidden':''} px-4 py-2 bg-SCS rounded-br-md`}
          onClick={() => fileInputRef.current?.click()}
        >
          or browse
        </button>
        <button
          className={`${file? '':'hidden'} px-4 py-2 bg-AC rounded-br-md`}
        >
          upload
        </button>
        <input
          type="file"
          ref={fileInputRef}
          onChange={handleFileChange}
          style={{ display: "none" }}
        />

        <p className="text-SC/50 px-4">
          {file ? file.name : "No file selected"}
        </p>
        <button
          className={`${file? '':'hidden'} px-4 py-2 text-SA rounded-br-md`}
          onClick={()=>setFile(null)}
        >
          ✕
        </button>
      </div>

      </div>
  );
};

export default FileZone;
