import React, { useState, useEffect } from 'react'; // Mengimpor React, useState, dan useEffect
import { useParams, useNavigate } from 'react-router-dom'; // Mengimpor useParams dan useNavigate
import './EditMinuman.css'; // Mengimpor file CSS untuk styling
import Swal from 'sweetalert2'; // SweetAlert2 untuk notifikasi
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faFloppyDisk } from '@fortawesome/free-solid-svg-icons';
import { API_KAFE } from '../../../utils/BaseUrl';

const EditMinuman = () => {
  const { id } = useParams(); // Mendapatkan id dari parameter URL
  const idAdmin = localStorage.getItem('id'); // Mengambil idAdmin dari localStorage
  const [menuItem, setMenuItem] = useState(null); // State untuk menyimpan data menu
  const navigate = useNavigate(); // Inisialisasi useNavigate

  // Mengambil data menu dari API berdasarkan ID
  useEffect(() => {
    fetch(`${API_KAFE}/getById/${id}`, {
      headers: {
        'accept': '*/*', // Header request
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setMenuItem({
          id: data.id,
          idAdmin: data.idAdmin,
          name: data.namaMinuman,
          price: data.hargaMinuman,
          description: data.deskripsiMinuman,
        });
      })
      .catch((error) => {
        console.error('Error fetching menu item:', error);
        Swal.fire({
          title: 'Error',
          text: 'Gagal memuat data menu.',
          icon: 'error',
          confirmButtonText: 'OK',
        });
      });
  }, [id]);

  // Fungsi untuk menyimpan perubahan menu
  const handleSave = () => {
    // Validasi input
    if (!menuItem.name || !menuItem.price || !menuItem.description) {
      Swal.fire({
        title: 'Error',
        text: 'Semua kolom wajib diisi.',
        icon: 'warning',
        confirmButtonText: 'OK',
      });
      return;
    }

    const updatedData = {
      id: menuItem.id,
      idAdmin: idAdmin,
      namaMinuman: menuItem.name,
      hargaMinuman: parseInt(menuItem.price, 10),
      deskripsiMinuman: menuItem.description,
    };

    fetch(`${API_KAFE}/editById/${id}?idAdmin=${idAdmin}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updatedData),
    })
      .then((response) => {
        console.log('API response:', response); // Debugging response dari server
        if (response.ok) {
          Swal.fire({
            title: 'Perubahan Tersimpan!',
            text: 'Menu telah berhasil diperbarui.',
            icon: 'success',
            confirmButtonText: 'OK',
          }).then(() => {
            navigate('/dasboard');
          });
        } else {
          throw new Error('Gagal menyimpan data.');
        }
      })
      .catch((error) => {
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
    return <div className="loading">Loading...</div>;
  }

  return (
    <div className="edit-container">
      <h2>Edit Menu</h2>
      <div className="input-group">
        <label>Nama Minuman:</label>
        <input
          type="text"
          value={menuItem.name}
          onChange={(e) => setMenuItem({ ...menuItem, name: e.target.value })}
          className="input-field"
        />
      </div>
      <div className="input-group">
        <label>Harga:</label>
        <input
          type="number"
          value={menuItem.price}
          onChange={(e) => setMenuItem({ ...menuItem, price: e.target.value })}
          className="input-field"
        />
      </div>
      <div className="input-group">
        <label>Deskripsi:</label>
        <textarea
          value={menuItem.description}
          onChange={(e) =>
            setMenuItem({ ...menuItem, description: e.target.value })
          }
          className="input-field"
        />
      </div>
      <div className="button-group">
        <button
          type="button"
          className="submit-left"
          onClick={() => navigate('/dasboard')}
        >
          <FontAwesomeIcon icon={faArrowLeft} />
        </button>
        <button
          type="button"
          className="submit-button"
          onClick={handleSave} // Pastikan handleSave dipanggil
        >
          <FontAwesomeIcon icon={faFloppyDisk} />
        </button>
      </div>
    </div>
  );
};

export default EditMinuman;
