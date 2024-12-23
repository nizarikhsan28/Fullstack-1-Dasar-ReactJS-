import React from "react";
// Mengimpor library React yang diperlukan untuk membuat komponen React.

import ReactDOM from "react-dom";
// Mengimpor library ReactDOM yang digunakan untuk merender elemen React ke dalam DOM di browser.

import App from "./App";
// Mengimpor komponen utama `App` dari file `App.js`. Komponen ini akan menjadi root dari aplikasi.

import "bulma/css/bulma.css";
// Mengimpor file CSS dari Bulma, sebuah framework CSS, untuk memberikan gaya pada aplikasi.

ReactDOM.render(
  // `ReactDOM.render` digunakan untuk merender elemen React ke dalam DOM.

  <React.StrictMode>
    {/* `React.StrictMode` adalah wrapper yang digunakan untuk mengaktifkan pemeriksaan tambahan dan peringatan 
      di pengembangan untuk mendeteksi potensi masalah di komponen React. */}
    <App />
    {/* Merender komponen utama `App` yang akan menjadi root dari aplikasi. */}
  </React.StrictMode>,

  document.getElementById("root")
  // Menentukan elemen DOM dengan id `root` sebagai tempat aplikasi akan dirender.
);
