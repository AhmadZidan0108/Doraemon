import React, { useState } from 'react';
import './TambahMenu.css'; // Make sure this CSS file is included

const TambahMenu = () => {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic (e.g., sending data to an API or updating state)
    console.log('Menu added:', { name, price, description });
  };

  return (
    <div className="tambah-menu-container">
      <h2 className="title">Tambah Menu Baru</h2>
      <form className="menu-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label className="form-label">Nama Menu</label>
          <input
            type="text"
            className="form-input"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label className="form-label">Harga</label>
          <input
            type="text"
            className="form-input"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label className="form-label">Deskripsi</label>
          <textarea
            className="form-textarea"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="submit-button">
          Tambah Menu
        </button>
      </form>
    </div>
  );
};

export default TambahMenu;