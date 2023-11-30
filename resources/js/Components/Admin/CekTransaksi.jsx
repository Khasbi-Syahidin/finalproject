import React, { useState } from 'react';

export default function CekTransaksi() {
    const [formData, setFormData] = useState({
        uniqueCode: '', // Input untuk Kode Unik Transaksi
      });

      const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
      };

      const handleSubmit = (e) => {
        e.preventDefault();
        // Lakukan sesuatu dengan data formulir yang disubmit
        console.log(formData);
      };

      return (
        <div className="px-6 py-6 rounded-md shadow-soft-2xl">
      <div className="carousel-1 my-3">
        <form className="mx-auto mt-4 rounded">
          {/* Input Kode Unik Transaksi */}
          <div className="mb-4">
            <label htmlFor="uniqueCode" className="block text-gray-700 font-bold mb-2">
              Silahkan Kode unik transaksi disini
            </label>
            <input
              type="text"
              id="uniqueCode"
              name="uniqueCode"
              value={formData.uniqueCode}
              onChange={handleInputChange}
              className="w-full border p-2 rounded"
            />
          </div>

          {/* Tombol Submit */}
          <div className="mt-4">
            <button
              type="submit"
              onClick={handleSubmit}
              className="bg-gray-800 w-full text-white py-2 px-4 rounded hover:bg-gray-900 focus:outline-none focus:shadow-outline-blue active:bg-blue-800"
            >
              Submit
            </button>
          </div>
        </form>
        </div>
        </div>
      );
}
