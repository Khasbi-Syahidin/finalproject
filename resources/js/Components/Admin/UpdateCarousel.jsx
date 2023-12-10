import React, { useState } from "react";
import { useForm } from "@inertiajs/react";

const ImageUpload = () => {
  const { data, setData, processing, post } = useForm({
    images: [], // Menggunakan field 'images' untuk menyimpan file
    otherField: "", // Menambahkan field lain jika diperlukan
  });
  const [files, setFiles] = useState([]);

  const fileSelectedHandler = (event) => {
    const selectedFiles = Array.from(event.target.files);
    const updatedFiles = [...files, ...selectedFiles];
    setFiles(updatedFiles);

    // Menambahkan file ke field 'images' di objek data
    setData((prevData) => ({
      ...prevData,
      images: updatedFiles,
    }));
  };

  const handleRemoveFile = (index) => {
    setFiles((prevFiles) => {
      const updatedFiles = [...prevFiles];
      updatedFiles.splice(index, 1);

      // Menghapus file dari field 'images' di objek data
      setData((prevData) => ({
        ...prevData,
        images: updatedFiles,
      }));

      return updatedFiles;
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Data:", data); // Tampilkan informasi data di console untuk memastikan isinya benar

    // Kirim data ke endpoint Laravel
    post(route("admin.update.carousel"), data);

    // Reset state setelah pengiriman
    setFiles([]);
  };

  return (
    <form onSubmit={handleSubmit} className="mx-auto mt-8 p-4  rounded shadow-md">
      <div clsassName="mb-12">
        <h2>Upload Images</h2>
      </div>
      <div className="mb-4">
        <input type="file" id="images" multiple onChange={fileSelectedHandler} className="shadow-inner rounded-md shadow-gray-200 py-2 px-3 w-full bg-primary" />
      </div>
      <div>
        {files.map((file, index) => (
          <div key={index} className="mb-2">
            <p>{file.name}</p>
            <button type="button" onClick={() => handleRemoveFile(index)} className="mt-2 bg-red-500 text-white py-2 px-4 rounded hover:bg-red-700 focus:outline-none">
              Remove
            </button>
          </div>
        ))}
      </div>
      <div className="flex justify-end mt-4">
        <button type="submit" className="bg-teal-400 text-white py-2 px-4 rounded hover:bg-teal-500 focus:outline-none">
          Upload
        </button>
      </div>
    </form>
  );
};

export default ImageUpload;
