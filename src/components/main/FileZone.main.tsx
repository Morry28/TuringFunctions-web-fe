import React, { useEffect, useRef, useState } from "react";
import { saveFile } from "../apis";
import { allowedTypes } from '../../consts/fileTypes'

type FileZoneProps = {
  handleSuccessFileSave: (res: any) => void;
};
const FileZone: React.FC<FileZoneProps> = ({ handleSuccessFileSave }) => {
  const [file, setFile] = useState<File | null>(null);
  const [wrongFileType, setWrongFileType] = useState<boolean>(false)
  const [pleaseLogin, setPleaseLogin] = useState<boolean>(false)
  const [loading, setLoading] = useState<boolean>(false)

  const fileInputRef = useRef<HTMLInputElement>(null);

  // Handler for when a file is selected via the file input
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];

      if (!allowedTypes.includes(file.type)) {
        console.error("Neplatný formát súboru");
        setWrongFileType(true)
        return;
      }
      setWrongFileType(false)

      setFile(file);
    }
  };
  const handleDeleteFile = () => {
    setFile(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
    setLoading(false)

  };
  // Handler for when a file is dropped in the drop zone
  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      const file = e.dataTransfer.files[0];

      if (!allowedTypes.includes(file.type)) {
        console.error("Neplatný formát súboru");
        setWrongFileType(true)
        return;
      }
      setWrongFileType(false)

      console.log("setFile triggered");
      setFile(file);
    }
  };

  // Prevent default behavior for drag over
  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
  };

  // Function to upload the file to the backend
  const handleUpload = async () => {

    if (!file) return;
    if (!window.isLoggedIn) {
      setPleaseLogin(true)
      return
    }
    setLoading(true)
    const res = await saveFile(file)
    handleSuccessFileSave(res)
    console.log(res)
    setLoading(false)

  };
  // Handling correction of flow
  useEffect(() => {
    if (window.isLoggedIn) setPleaseLogin(false)
  }, [window.isLoggedIn])

  return (
    <div className="w-full flex flex-col">
      {/* File drop zone */}
      <div
        onDrop={handleDrop}
        onDragOver={handleDragOver}
        className="flex w-[33%] h-96 mx-auto border-dashed border-x-2 border-t-2 border-SCS/80 rounded-t-lg shadow-md shadow-SC/35"
      >
        <div className="flex flex-col justify-center w-full">
          <h1 className="text-SCS/10 font-black text-7xl">{file ? 'click upload' : 'upload file'}</h1>
          <p className="text-7xl text-black/10">📤</p>
        </div>
      </div>

      {/* File input */}
      <div className="flex flex-row-reverse w-[33%] mx-auto border-2 border-SCS rounded-b-lg shadow-md shadow-SC/35 items-center justify-between">
        <button
          className={`${file ? 'hidden' : ''} px-4 py-2 bg-SCS rounded-br-md`}
          onClick={() => fileInputRef.current?.click()}
        >
          or browse
        </button>
        <button
          className={`${file ? '' : 'hidden'} px-4 py-2 bg-AC rounded-br-md`}
          onClick={handleUpload}
          disabled={loading?true:false}
        >
          {loading? <img src="/loading.svg" className="size-4 my-1"/>:'upload'}
        </button>
        <input
          type="file"
          accept=".json,.csv,.txt"
          ref={fileInputRef}
          onChange={handleFileChange}
          style={{ display: "none" }}
        />

        <p className="text-SC/50 px-4">
          {file ? file.name : "No file selected"}
        </p>
        <button
          className={`${file ? '' : 'hidden'} px-4 py-2 text-SA rounded-br-md`}
          onClick={handleDeleteFile}
          disabled={loading?true:false}

        >
          {loading?'':'✕'}
        </button>
      </div>
      {wrongFileType && <p className="text-red-600 font-bold pt-8">Wrong file type !</p>}
      {pleaseLogin && <button
        className={`${file ? '' : 'hidden'} px-4 py-2 text-SA rounded-br-md flex items-center justify-center gap-4`}
        onClick={() => setPleaseLogin(false)}
      >
        <p>✕</p>
        <p className="text-AC"> plase log in first to use Peanuts chat app</p>
      </button>}

    </div>
  );
};

export default FileZone;
