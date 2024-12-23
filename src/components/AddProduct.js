import { useState } from "react";
// Mengimpor `useState` dari React untuk membuat state di komponen fungsional.

import { useNavigate } from "react-router-dom";
// Mengimpor `useNavigate` dari react-router-dom untuk navigasi ke halaman lain.

const AddProduct = () => {
  // Mendefinisikan komponen fungsional `AddProduct` untuk menambahkan produk baru.

  const [title, setTitle] = useState("");
  // Membuat state `title` untuk menyimpan nilai judul produk. Nilai awal adalah string kosong.

  const [price, setPrice] = useState("");
  // Membuat state `price` untuk menyimpan nilai harga produk. Nilai awal adalah string kosong.

  const history = useNavigate();
  // `history` adalah fungsi navigasi yang disediakan oleh `useNavigate`.

  const saveProduct = async (e) => {
    // Mendefinisikan fungsi `saveProduct` untuk menyimpan data produk.
    e.preventDefault();
    // Mencegah perilaku default form, yaitu reload halaman.

    const product = { title, price };
    // Membuat objek `product` yang berisi data dari state `title` dan `price`.

    await fetch("http://localhost:8080/products", {
      // Mengirimkan permintaan POST ke API JSON Server di `http://localhost:8080/products`.

      method: "POST",
      // Menentukan metode HTTP sebagai POST untuk menambah data baru.

      body: JSON.stringify(product),
      // Mengonversi objek `product` menjadi string JSON untuk dikirimkan ke server.

      headers: {
        "Content-Type": "application/json",
      },
      // Menentukan header agar server mengetahui bahwa data yang dikirimkan berupa JSON.
    });

    history("/");
    // Menggunakan `useNavigate` untuk mengarahkan pengguna kembali ke halaman utama setelah produk disimpan.
  };

  return (
    <div>
      {/* Membungkus elemen dalam `div` untuk struktur layout. */}
      <form onSubmit={saveProduct}>
        {/* Membuat form dengan fungsi `saveProduct` yang dipanggil saat form di-submit. */}
        <div className="field">
          {/* Membuat field input untuk judul produk. */}
          <label className="label">Title</label>
          {/* Label untuk input judul produk. */}
          <div className="control">
            {/* Membungkus input untuk kontrol tata letak. */}
            <input className="input" value={title} onChange={(e) => setTitle(e.target.value)} type="text" placeholder="Title" />
            {/* Input teks untuk judul produk dengan value yang terhubung ke state `title`.
                `onChange` digunakan untuk memperbarui state setiap kali input berubah. */}
          </div>
        </div>

        <div className="field">
          {/* Membuat field input untuk harga produk. */}
          <label className="label">Price</label>
          {/* Label untuk input harga produk. */}
          <div className="control">
            {/* Membungkus input untuk kontrol tata letak. */}
            <input className="input" value={price} onChange={(e) => setPrice(e.target.value)} type="text" placeholder="Price" />
            {/* Input teks untuk harga produk dengan value yang terhubung ke state `price`.
                `onChange` digunakan untuk memperbarui state setiap kali input berubah. */}
          </div>
        </div>

        <div className="field">
          {/* Membuat field untuk tombol submit. */}
          <div className="control">
            {/* Membungkus tombol untuk kontrol tata letak. */}
            <button className="button is-primary">Save</button>
            {/* Tombol untuk mengirimkan form. Menggunakan class Bulma untuk styling. */}
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddProduct;
// Mengekspor komponen `AddProduct` agar dapat digunakan di file lain.
