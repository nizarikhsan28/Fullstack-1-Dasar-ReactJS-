import React from "react";
// Mengimpor library React untuk membuat komponen.

import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
// Mengimpor komponen dari library react-router-dom untuk membuat routing di aplikasi.

import { useParams } from "react-router-dom";
// Mengimpor hook `useParams` untuk mengambil parameter dari URL pada komponen tertentu.

import ProductList from "./components/ProductList";
// Mengimpor komponen `ProductList` yang digunakan untuk menampilkan daftar produk.

import AddProduct from "./components/AddProduct";
// Mengimpor komponen `AddProduct` yang digunakan untuk menambahkan produk baru.

import EditProduct from "./components/EditProduct";
// Mengimpor komponen `EditProduct` yang digunakan untuk mengedit produk yang sudah ada.

function App() {
  // Mendefinisikan fungsi `App` sebagai komponen utama aplikasi.
  return (
    <Router>
      {/* Membungkus aplikasi dengan komponen `Router` untuk mengaktifkan fitur routing. */}
      <div>
        <div className="container">
          {/* Menyediakan elemen `div` dengan class `container` untuk tata letak. */}
          <div className="columns">
            {/* Membuat struktur kolom untuk tata letak menggunakan CSS framework seperti Bulma. */}
            <div className="column is-half is-offset-one-quarter">
              {/* Menentukan kolom dengan lebar setengah dan menggesernya ke tengah menggunakan Bulma. */}
              <Routes>
                {/* Membungkus semua rute menggunakan `Routes` dari react-router-dom. */}
                <Route path="/" element={<ProductList />} />
                {/* Mendefinisikan rute "/" untuk menampilkan komponen `ProductList`. */}
                <Route path="/add" element={<AddProduct />} />
                {/* Mendefinisikan rute "/add" untuk menampilkan komponen `AddProduct`. */}
                <Route path="/edit/:id" element={<EditProduct />} />
                {/* Mendefinisikan rute "/edit/:id" untuk menampilkan komponen `EditProduct`. 
                    `:id` adalah parameter dinamis yang dapat digunakan untuk mengidentifikasi produk tertentu. */}
              </Routes>
            </div>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
// Mengekspor komponen `App` sebagai default untuk digunakan di file lain.
