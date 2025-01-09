import React, { useEffect, useState } from 'react'; // Mengimpor React, useEffect, dan useState dari React
import { Link } from 'react-router-dom'; // Mengimpor Link dari React Router untuk navigasi
import '../Dasboard/Dasboard.css'; // Mengimpor file CSS untuk styling dashboard
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // Mengimpor FontAwesomeIcon untuk ikon
import { faEdit, faPlus, faTrash } from '@fortawesome/free-solid-svg-icons'; // Mengimpor ikon Edit, Plus, dan Trash dari FontAwesome
import Swal from 'sweetalert2'; // Mengimpor SweetAlert2 untuk pop-up notifikasi
import axios from 'axios'; // Mengimpor axios untuk melakukan request HTTP
import Navbar from '../Navbar'; // Mengimpor komponen Navbar
import { API_KAFE } from '../../utils/BaseUrl';

const Dashboard = () => {
  const [menuItems, setMenuItems] = useState([]); // State untuk menyimpan data menu

  // Mengambil id admin dari localStorage
  const idAdmin = localStorage.getItem("id");

  useEffect(() => {
    // Mengambil data menu dari API saat komponen pertama kali dimuat
    axios
      .get(`${API_KAFE}/getAllByAdmin/${idAdmin}`, {
        headers: {
          "accept": "*/*", // Mengatur header untuk menerima semua format response
        },
      })
      .then((response) => {
        // Menyimpan data menu dalam state menuItems
        setMenuItems(response.data);
      })
      .catch((error) => {
        // Menampilkan error jika gagal mengambil data
        console.error("Ada kesalahan saat mengambil data menu", error);
      });
  }, [idAdmin]); // Hanya dijalankan sekali saat komponen pertama kali dimuat

  // Fungsi untuk menangani penghapusan menu
  const handleDelete = (id) => {
    // Menampilkan konfirmasi penghapusan menggunakan SweetAlert2
    Swal.fire({
      title: 'Apakah Anda yakin?', // Judul konfirmasi
      text: 'Anda tidak akan dapat mengembalikan menu ini!', // Pesan konfirmasi
      icon: 'warning', // Ikon untuk peringatan
      showCancelButton: true, // Menampilkan tombol batal
      confirmButtonText: 'Hapus', // Teks tombol konfirmasi
      cancelButtonText: 'Batal', // Teks tombol batal
    }).then((result) => {
      if (result.isConfirmed) {
        // Mengirim permintaan DELETE ke API untuk menghapus menu
        axios
          .delete(`${API_KAFE}/delete/${id}`, {
            headers: {
              'accept': '*/*', // Mengatur header untuk menerima semua format response
            },
          })
          .then((response) => {
            // Jika berhasil, hapus menu dari state menuItems
            setMenuItems(menuItems.filter(item => item.id !== id));
            // Menampilkan notifikasi sukses
            Swal.fire('Dihapus!', 'Menu telah dihapus.', 'success');
          })
          .catch((error) => {
            // Menampilkan notifikasi error jika gagal menghapus
            Swal.fire('Gagal', 'Terjadi kesalahan saat menghapus menu.', 'error');
          });
      }
    });
  };

  return (
    <div>
      <Navbar /> {/* Menampilkan Navbar */}
      <div className="dashboard">
        <main>
          {/* Bagian Statistik */}
          <section className="statistics">
            <div className="stat-card">
              <div className="icon"><i className="fas fa-users"></i></div> {/* Ikon jumlah pengunjung */}
              <h2>Jumlah Pengunjung</h2>
              <p className="stat-number">150</p> {/* Menampilkan jumlah pengunjung */}
            </div>
            <div className="stat-card">
              <div className="icon"><i className="fas fa-money-bill-wave"></i></div> {/* Ikon penjualan */}
              <h2>Penjualan Hari Ini</h2>
              <p className="stat-number">Rp 187,500,000</p> {/* Menampilkan total penjualan hari ini */}
            </div>
            <div className="stat-card">
              <div className="icon"><i className="fas fa-box"></i></div> {/* Ikon jumlah pesanan */}
              <h2>Jumlah Pesanan</h2>
              <p className="stat-number">1.200.000</p> {/* Menampilkan jumlah pesanan */}
            </div>
            <div className="stat-card">
              <div className="icon"><i className="fas fa-star"></i></div> {/* Ikon rating */}
              <h2>Rating Pelanggan</h2>
              <p className="stat-number">9.5 / 10</p> {/* Menampilkan rating pelanggan */}
            </div>
          </section>

          {/* Bagian Menu */}
          <section className="menu">
            <div className="menu-header">
              <h2>MENU TERKINI</h2> {/* Judul untuk daftar menu */}
            </div>
            <div className="add-menu-container">
              <Link to="/TambahMenu"> {/* Link untuk menambah menu baru */}
                <button className="add-menu-btn">
                  <FontAwesomeIcon icon={faPlus} /> {/* Ikon tambah menu */}
                </button>
              </Link>
            </div>
            <table className="menu-table">
              <thead>
                <tr>
                  <th>No</th>
                  <th>Menu</th> {/* Kolom untuk nama menu */}
                  <th>Harga</th> {/* Kolom untuk harga menu */}
                  <th>Deskripsi</th> {/* Kolom untuk deskripsi menu */}
                  <th>Aksi</th> {/* Kolom untuk tombol aksi (edit dan hapus) */}
                </tr>
              </thead>
              <tbody>
                {menuItems.map((item, index) => (
                  <tr key={item.id}>
                    <td>{index + 1}</td> {/* Menampilkan nomor urut berdasarkan indeks */}
                    <td>{item.namaMinuman}</td> {/* Menampilkan nama menu dari API */}
                    <td>{item.hargaMinuman}</td> {/* Menampilkan harga menu dari API */}
                    <td>{item.deskripsiMinuman}</td> {/* Menampilkan deskripsi menu dari API */}
                    <td>
                      {/* Tombol Edit */}
                      <Link to={`/editminuman/${item.id}`}>
                        <button className="edit-btn">
                          <FontAwesomeIcon icon={faEdit} />
                        </button>
                      </Link>
                      {/* Tombol Hapus */}
                      <button onClick={() => handleDelete(item.id)} className="delete-btn">
                        <FontAwesomeIcon icon={faTrash} />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </section>
        </main>
      </div>
    </div>
  );
};

export default Dashboard; // Mengekspor komponen Dashboard
