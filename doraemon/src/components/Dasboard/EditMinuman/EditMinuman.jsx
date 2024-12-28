import React, { useState, useEffect } from 'react'; // Mengimpor React, useState, dan useEffect untuk mengelola state dan efek samping
import { useParams, useNavigate } from 'react-router-dom'; // Mengimpor useParams untuk mengambil parameter dari URL dan useNavigate untuk berpindah halaman
import './EditMinuman.css'; // Mengimpor file CSS untuk styling komponen
import Swal from 'sweetalert2'; // Mengimpor SweetAlert2 untuk menampilkan notifikasi
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faFloppyDisk } from '@fortawesome/free-solid-svg-icons';

const EditMinuman = () => {
  const { id } = useParams(); // Mendapatkan id dari parameter URL
  const idAdmin = localStorage.getItem('id'); // Mengambil idAdmin dari localStorage
  const [menuItem, setMenuItem] = useState(null); // State untuk menyimpan data menu yang akan diedit
  const navigate = useNavigate(); // Inisialisasi useNavigate untuk navigasi

  // useEffect digunakan untuk mengambil data menu dari API berdasarkan id yang didapat dari URL
  useEffect(() => {
    // Mengambil data menu berdasarkan id.
    fetch(`http://localhost:8080/api/admin/kafe/getById/${id}`, {
      headers: {
        'accept': '*/*', // Mengatur header agar menerima segala jenis response
      },
    })
      .then((response) => response.json()) // Mengonversi response menjadi JSON
      .then((data) => {
        // Menyimpan data menu yang didapat ke dalam state menuItem
        setMenuItem({
          id: data.id, // Menyimpan id menu
          idAdmin: data.idAdmin, // Menyimpan idAdmin (jika diperlukan)
          name: data.namaMinuman, // Menyimpan nama minuman
          price: data.hargaMinuman, // Menyimpan harga minuman
          description: data.deskripsiMinuman, // Menyimpan deskripsi minuman
        });
      })
      .catch((error) => {
        // Menangani kesalahan jika terjadi saat mengambil data
        console.error('Error fetching menu item:', error);
        Swal.fire({
          title: 'Error',
          text: 'Gagal memuat data menu.',
          icon: 'error',
          confirmButtonText: 'OK',
        });
      });
  }, [id]); // useEffect akan dijalankan setiap kali id berubah

  // Fungsi untuk menyimpan perubahan menu
  const handleSave = () => {
    // Membuat objek updatedData yang berisi data yang telah diubah
    const updatedData = {
      id: menuItem.id, // Menyertakan id menu
      idAdmin: idAdmin, // Menyertakan idAdmin dari localStorage
      namaMinuman: menuItem.name, // Menyertakan nama minuman
      hargaMinuman: parseInt(menuItem.price, 10), // Mengonversi harga menjadi integer
      deskripsiMinuman: menuItem.description, // Menyertakan deskripsi minuman
    };

    // Mengirim data yang sudah diperbarui ke API
    fetch(`http://localhost:8080/api/admin/kafe/editById/${id}?idAdmin=${idAdmin}`, {
      method: 'PUT', // Menggunakan metode PUT untuk memperbarui data
      headers: {
        'Content-Type': 'application/json', // Mengatur header agar data yang dikirim dalam format JSON
      },
      body: JSON.stringify(updatedData), // Mengirim data yang diperbarui dalam body request
    })
      .then((response) => {
        // Menangani response dari server
        if (response.ok) {
          Swal.fire({
            title: 'Perubahan Tersimpan!',
            text: 'Menu telah berhasil diperbarui.',
            icon: 'success',
            confirmButtonText: 'OK',
          }).then(() => {
            // Setelah berhasil menyimpan, arahkan ke halaman /dashboard
            navigate('/dasboard');
          });
        } else {
          throw new Error('Gagal menyimpan data.');
        }
      })
      .catch((error) => {
        // Menangani kesalahan jika terjadi saat menyimpan data
        console.error('Error saving menu item:', error);
        Swal.fire({
          title: 'Error',
          text: 'Gagal menyimpan perubahan.',
          icon: 'error',
          confirmButtonText: 'OK',
        });
      });
  };

  if (!menuItem) {
    // Jika data menu belum dimuat, tampilkan pesan loading
    return <div className="loading">Loading...</div>;
  }

  return (
    <div className="edit-container"> {/* Container utama untuk form edit menu */}
      <h2>Edit Menu</h2> {/* Judul halaman */}
      <div className="input-group"> {/* Grup input untuk nama minuman */}
        <label>Nama Minuman:</label> {/* Label untuk input nama */}
        <input
          type="text"
          value={menuItem.name} // Nilai input diikat dengan state menuItem.name
          onChange={(e) => setMenuItem({ ...menuItem, name: e.target.value })} // Mengubah state menuItem.name ketika input berubah
          className="input-field" // Menambahkan class CSS untuk styling
        />
      </div>
      <div className="input-group"> {/* Grup input untuk harga minuman */}
        <label>Harga:</label> {/* Label untuk input harga */}
        <input
          type="number"
          value={menuItem.price} // Nilai input diikat dengan state menuItem.price
          onChange={(e) => setMenuItem({ ...menuItem, price: e.target.value })} // Mengubah state menuItem.price ketika input berubah
          className="input-field" // Menambahkan class CSS untuk styling
        />
      </div>
      <div className="input-group"> {/* Grup input untuk deskripsi minuman */}
        <label>Deskripsi:</label> {/* Label untuk input deskripsi */}
        <textarea
          value={menuItem.description} // Nilai textarea diikat dengan state menuItem.description
          onChange={(e) => setMenuItem({ ...menuItem, description: e.target.value })} // Mengubah state menuItem.description ketika input berubah
          className="input-field" // Menambahkan class CSS untuk styling
        />
      </div>
      <div className="button-group">
        <button
          type="button"
          className="submit-left"
          onClick={() => navigate('/dasboard')} // Fungsi navigate ke halaman dashboard
        >
          <FontAwesomeIcon icon={faArrowLeft} />
        </button>
        <button type="submit" className="submit-button"> {/* Tombol untuk submit */}
          <FontAwesomeIcon icon={faFloppyDisk} />
        </button>
      </div>
    </div>
  );
};

export default EditMinuman; // Mengekspor komponen EditMinuman
