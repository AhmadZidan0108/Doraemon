import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './EditMinuman.css'; // Make sure to add this CSS file
import Swal from 'sweetalert2'; // Import SweetAlert2

const EditMinuman = () => {
  const { id } = useParams(); // Get the id from the URL
  const [menuItem, setMenuItem] = useState(null);

  useEffect(() => {
    // Fetch the menu item by id, or use dummy data
    const item = {
      id,
      name: 'Americano',
      price: 'Rp 150,000',
      description: 'Americano adalah kopi yang ringan dan segar, cocok untuk penggemar kopi klasik.'
    };
    setMenuItem(item);
  }, [id]);

  const handleSave = () => {
    // Handle saving the updated menu item (e.g., send data to API)
    console.log('Saving item:', menuItem);

    // Show SweetAlert2 success message after saving
    Swal.fire({
      title: 'Perubahan Tersimpan!',
      text: 'Menu telah berhasil diperbarui.',
      icon: 'success',
      confirmButtonText: 'OK'
    });
  };

  if (!menuItem) {
    return <div className="loading">Loading...</div>;
  }

  return (
    <div className="edit-container">
      <h2>Edit Menu</h2>
      <div className="input-group">
        <label>Nama coffe:</label>
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
          type="text"
          value={menuItem.price}
          onChange={(e) => setMenuItem({ ...menuItem, price: e.target.value })}
          className="input-field"
        />
      </div>
      <div className="input-group">
        <label>Deskripsi:</label>
        <textarea
          value={menuItem.description}
          onChange={(e) => setMenuItem({ ...menuItem, description: e.target.value })}
          className="input-field"
        />
      </div>
      <button onClick={handleSave} className="save-button">Simpan Perubahan</button>
    </div>
  );
};

export default EditMinuman;
