import { useState, useEffect } from "react";
// Mengimpor hook `useState` untuk manajemen state dan `useEffect` untuk efek samping di React.

import { Link } from "react-router-dom";
// Mengimpor `Link` dari react-router-dom untuk navigasi antar halaman menggunakan tautan.

const ProductList = () => {
  // Mendefinisikan komponen `ProductList` untuk menampilkan daftar produk.

  const [products, setProducts] = useState([]);
  // Membuat state `products` sebagai array untuk menyimpan data produk. Nilai awal adalah array kosong.

  useEffect(() => {
    fetchData();
  }, []);
  // `useEffect` dijalankan saat komponen pertama kali dirender.
  // Memanggil fungsi `fetchData` untuk mengambil data dari server.
  // Dependency array kosong `[]` memastikan efek ini hanya dijalankan sekali.

  const fetchData = async () => {
    // Mendefinisikan fungsi `fetchData` untuk mengambil data produk dari API.
    const response = await fetch("http://localhost:8080/products");
    // Mengirim permintaan GET ke API JSON Server di endpoint `/products`.

    const data = await response.json();
    // Mengonversi respons JSON dari server menjadi objek JavaScript.

    setProducts(data);
    // Mengatur state `products` dengan data yang diambil dari server.
  };

  const deleteProduct = async (id) => {
    // Mendefinisikan fungsi `deleteProduct` untuk menghapus produk berdasarkan ID.
    await fetch(`http://localhost:8080/products/${id}`, {
      // Mengirim permintaan DELETE ke server JSON dengan ID produk.

      method: "DELETE",
      // Menentukan metode HTTP sebagai DELETE untuk menghapus data.

      headers: {
        "Content-Type": "application/json",
      },
      // Menambahkan header untuk memberi tahu server bahwa data berbentuk JSON.
    });

    fetchData();
    // Memanggil kembali `fetchData` untuk memperbarui daftar produk setelah produk dihapus.
  };

  return (
    <div>
      {/* Membungkus elemen dalam `div` sebagai container utama. */}
      <Link to="/add" className="button is-primary mt-5">
        {/* Tautan menuju halaman penambahan produk. Menggunakan class Bulma untuk styling tombol. */}
        Add New
      </Link>

      <table className="table is-striped is-fullwidth">
        {/* Membuat tabel untuk menampilkan daftar produk. Menggunakan class Bulma untuk styling tabel. */}
        <thead>
          {/* Bagian header tabel untuk judul kolom. */}
          <tr>
            <th>No</th>
            {/* Kolom nomor urut produk. */}
            <th>Title</th>
            {/* Kolom judul produk. */}
            <th>Price</th>
            {/* Kolom harga produk. */}
            <th>Actions</th>
            {/* Kolom untuk tindakan seperti edit dan hapus. */}
          </tr>
        </thead>

        <tbody>
          {/* Bagian isi tabel untuk daftar produk. */}
          {products.map((product, index) => (
            // Melakukan iterasi pada array `products` untuk menampilkan data produk dalam baris tabel.
            <tr key={product.id}>
              {/* Setiap baris diberi atribut `key` dengan ID produk agar React dapat melacak elemen dengan benar. */}
              <td>{index + 1}</td>
              {/* Menampilkan nomor urut produk berdasarkan indeks array + 1. */}
              <td>{product.title}</td>
              {/* Menampilkan judul produk. */}
              <td>{product.price}</td>
              {/* Menampilkan harga produk. */}
              <td>
                {/* Kolom untuk tombol aksi. */}
                <Link to={`/edit/${product.id}`} className="button is-small is-info">
                  {/* Tautan menuju halaman edit produk dengan ID produk sebagai parameter. */}
                  Edit
                </Link>
                <button onClick={() => deleteProduct(product.id)} className="button is-small is-danger">
                  {/* Tombol untuk menghapus produk. `onClick` memanggil fungsi `deleteProduct` dengan ID produk. */}
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProductList;
// Mengekspor komponen `ProductList` agar dapat digunakan di file lain.
