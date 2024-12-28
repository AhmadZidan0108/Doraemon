import React, { useState } from 'react'; // Mengimpor React dan useState untuk mengelola state
import './TambahMenu.css'; // Mengimpor file CSS untuk styling komponen
import Swal from 'sweetalert2'; // Mengimpor SweetAlert2 untuk menampilkan notifikasi
import axios from 'axios'; // Mengimpor axios untuk melakukan request HTTP
import { useNavigate } from 'react-router-dom'; // Mengimpor useNavigate untuk melakukan navigasi ke halaman lain
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faFloppyDisk, faPlus } from '@fortawesome/free-solid-svg-icons';

const TambahMenu = () => {
  // Mendeklarasikan state untuk menyimpan input dari form
  const [name, setName] = useState(''); // State untuk nama minuman
  const [price, setPrice] = useState(''); // State untuk harga minuman
  const [description, setDescription] = useState(''); // State untuk deskripsi minuman
  const navigate = useNavigate(); // Mendapatkan fungsi navigate untuk berpindah halaman

  // Fungsi untuk menangani submit form
  const handleSubmit = (e) => {
    e.preventDefault(); // Mencegah reload halaman saat form disubmit

    // Mengambil idAdmin dari localStorage
    const idAdmin = localStorage.getItem('id');

    // Jika idAdmin tidak ditemukan, tampilkan pesan error menggunakan SweetAlert2
    if (!idAdmin) {
      Swal.fire({
        title: 'Gagal',
        text: 'ID Admin tidak ditemukan. Pastikan Anda sudah login.',
        icon: 'error',
        confirmButtonText: 'OK',
      });
      return; // Menghentikan proses jika idAdmin tidak ada
    }

    // Menyiapkan data menu yang akan dikirim ke API
    const menuData = {
      deskripsiMinuman: description, // Menyertakan deskripsi minuman
      hargaMinuman: parseFloat(price), // Mengonversi harga menjadi angka desimal
      idAdmin: idAdmin, // Menyertakan idAdmin yang diambil dari localStorage
      namaMinuman: name, // Menyertakan nama minuman
    };

    // Mengirim data menu ke API menggunakan axios dengan idAdmin di URL
    axios
      .post(`http://localhost:8080/api/admin/kafe/tambah/${idAdmin}`, menuData, {
        headers: {
          'accept': '*/*', // Mengatur header untuk menerima segala jenis response
          'Content-Type': 'application/json', // Mengatur header agar data yang dikirim dalam format JSON
        },
      })
      .then((response) => {
        console.log('Menu berhasil ditambahkan:', response.data);

        // Menampilkan notifikasi sukses menggunakan SweetAlert2
        Swal.fire({
          title: 'Menu Baru Ditambahkan!',
          text: `${name} telah berhasil ditambahkan ke menu.`,
          icon: 'success',
          confirmButtonText: 'OK',
        });

        // Mereset nilai form setelah berhasil
        setName(''); // Mengosongkan field nama
        setPrice(''); // Mengosongkan field harga
        setDescription(''); // Mengosongkan field deskripsi
        navigate('/dasboard'); // Mengarahkan pengguna kembali ke halaman dashboard setelah sukses
      })
      .catch((error) => {
        console.error('Ada kesalahan saat menambahkan menu:', error);

        // Menampilkan notifikasi error jika terjadi kesalahan saat mengirim request
        Swal.fire({
          title: 'Gagal Menambahkan Menu',
          text: 'Terjadi kesalahan, coba lagi nanti.',
          icon: 'error',
          confirmButtonText: 'OK',
        });
      });
  };

  return (
    <div className="tambah-menu-container"> {/* Container utama untuk form */}
      <h2 className="title">Tambah Menu Baru</h2> {/* Judul halaman */}
      <form className="menu-form" onSubmit={handleSubmit}> {/* Form untuk menambah menu baru */}
        <div className="form-group"> {/* Grup input untuk nama minuman */}
          <label className="form-label">Nama Minuman</label> {/* Label untuk input nama */}
          <input
            type="text"
            className="form-input"
            value={name} // Mengikat nilai input dengan state name
            onChange={(e) => setName(e.target.value)} // Mengupdate state name saat input berubah
            required // Menandakan bahwa input ini wajib diisi
          />
        </div>
        <div className="form-group"> {/* Grup input untuk harga minuman */}
          <label className="form-label">Harga</label> {/* Label untuk input harga */}
          <input
            type="number"
            className="form-input"
            value={price} // Mengikat nilai input dengan state price
            onChange={(e) => setPrice(e.target.value)} // Mengupdate state price saat input berubah
            required // Menandakan bahwa input ini wajib diisi
          />
        </div>
        <div className="form-group"> {/* Grup input untuk deskripsi minuman */}
          <label className="form-label">Deskripsi</label> {/* Label untuk input deskripsi */}
          <textarea
            className="form-textarea"
            value={description} // Mengikat nilai textarea dengan state description
            onChange={(e) => setDescription(e.target.value)} // Mengupdate state description saat input berubah
            required // Menandakan bahwa input ini wajib diisi
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
      </form>
    </div>
  );
};

export default TambahMenu; // Mengekspor komponen TambahMenu
