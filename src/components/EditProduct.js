import { useState, useEffect } from "react";
// Mengimpor hook `useState` untuk state management dan `useEffect` untuk efek samping di komponen.

import { useNavigate, useParams } from "react-router-dom";
// Mengimpor `useNavigate` untuk navigasi halaman dan `useParams` untuk mengambil parameter dari URL.

const EditProduct = () => {
  // Mendefinisikan komponen `EditProduct` untuk mengedit data produk berdasarkan ID.

  const [title, setTitle] = useState("");
  // Membuat state `title` untuk menyimpan judul produk yang akan diedit.

  const [price, setPrice] = useState("");
  // Membuat state `price` untuk menyimpan harga produk yang akan diedit.

  const history = useNavigate();
  // Menginisialisasi fungsi navigasi dengan `useNavigate`.

  const { id } = useParams();
  // Mengambil parameter `id` dari URL menggunakan `useParams`.

  useEffect(() => {
    getProductById();
  }, []);
  // Menggunakan `useEffect` untuk menjalankan fungsi `getProductById` saat komponen pertama kali dirender.
  // Dependency array kosong `[]` memastikan fungsi hanya dijalankan sekali.

  const getProductById = async () => {
    // Fungsi untuk mengambil data produk berdasarkan ID dari API.
    const response = await fetch(`http://localhost:8080/products/${id}`);
    // Mengirim permintaan GET ke server JSON di endpoint yang sesuai dengan ID produk.

    const data = await response.json();
    // Mengonversi respons JSON menjadi objek JavaScript.

    setTitle(data.title);
    // Mengatur state `title` dengan data judul dari server.

    setPrice(data.price);
    // Mengatur state `price` dengan data harga dari server.
  };

  const updateProduct = async (e) => {
    // Fungsi untuk memperbarui data produk yang telah diedit.
    e.preventDefault();
    // Mencegah perilaku default form (reload halaman).

    const product = { title, price };
    // Membuat objek `product` yang berisi data dari state `title` dan `price`.

    await fetch(`http://localhost:8080/products/${id}`, {
      // Mengirimkan permintaan PUT ke server JSON dengan ID produk.

      method: "PUT",
      // Menentukan metode HTTP sebagai PUT untuk memperbarui data.

      body: JSON.stringify(product),
      // Mengonversi objek `product` menjadi string JSON sebelum dikirimkan ke server.

      headers: {
        "Content-Type": "application/json",
      },
      // Menentukan header agar server mengetahui bahwa data yang dikirimkan berupa JSON.
    });

    history("/");
    // Mengarahkan pengguna kembali ke halaman utama setelah produk berhasil diperbarui.
  };

  return (
    <div>
      {/* Membungkus elemen dalam `div` untuk tata letak halaman. */}
      <form onSubmit={updateProduct}>
        {/* Membuat form dengan `updateProduct` sebagai handler saat form di-submit. */}
        <div className="field">
          {/* Field untuk input judul produk. */}
          <label className="label">Title</label>
          {/* Label untuk input judul produk. */}
          <div className="control">
            {/* Membungkus input untuk kontrol tata letak. */}
            <input className="input" value={title} onChange={(e) => setTitle(e.target.value)} type="text" placeholder="Title" />
            {/* Input teks untuk judul produk, dengan value yang terhubung ke state `title`.
                `onChange` digunakan untuk memperbarui state saat pengguna mengetik. */}
          </div>
        </div>

        <div className="field">
          {/* Field untuk input harga produk. */}
          <label className="label">Price</label>
          {/* Label untuk input harga produk. */}
          <div className="control">
            {/* Membungkus input untuk kontrol tata letak. */}
            <input className="input" value={price} onChange={(e) => setPrice(e.target.value)} type="text" placeholder="Price" />
            {/* Input teks untuk harga produk, dengan value yang terhubung ke state `price`.
                `onChange` digunakan untuk memperbarui state saat pengguna mengetik. */}
          </div>
        </div>

        <div className="field">
          {/* Field untuk tombol submit. */}
          <div className="control">
            {/* Membungkus tombol untuk kontrol tata letak. */}
            <button className="button is-primary">Update</button>
            {/* Tombol untuk mengirimkan form. Menggunakan class Bulma untuk styling. */}
          </div>
        </div>
      </form>
    </div>
  );
};

export default EditProduct;
// Mengekspor komponen `EditProduct` agar dapat digunakan di file lain.
