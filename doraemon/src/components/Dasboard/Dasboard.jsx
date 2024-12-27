import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link from React Router
import '../Dasboard/Dasboard.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faPlus, faTrash } from '@fortawesome/free-solid-svg-icons';
import Swal from 'sweetalert2'; // Import SweetAlert2

const Dashboard = () => {
  const [menuItems, setMenuItems] = useState([
    { id: 1, name: 'Americano', price: 'Rp 150,000', description: 'Americano adalah kopi yang ringan dan segar, cocok untuk penggemar kopi klasik.' },
    { id: 2, name: 'Cappuccino', price: 'Rp 200,000', description: 'Cappuccino menggabungkan espresso, susu hangat, dan busa susu yang lembut.' },
    { id: 3, name: 'Espresso', price: 'Rp 100,000', description: 'Espresso memiliki rasa kopi yang kuat, ideal untuk penikmat rasa autentik.' },
    { id: 4, name: 'Macchiato', price: 'Rp 180,000', description: 'Macchiato adalah espresso dengan tambahan sedikit busa susu, penuh cita rasa.' },
    { id: 5, name: 'Mocha', price: 'Rp 130,000', description: 'Mocha adalah perpaduan sempurna antara kopi, susu, dan cokelat.' },
    { id: 6, name: 'Latte', price: 'Rp 200,000', description: 'Latte memiliki rasa lembut dari kombinasi espresso dan susu yang creamy.' },
    { id: 7, name: 'Flat White', price: 'Rp 190,000', description: 'Flat White menawarkan rasa kopi yang lebih kuat dengan tekstur susu yang halus.' },
    { id: 8, name: 'Cold Brew', price: 'Rp 100,000', description: 'Cold Brew diseduh dingin untuk menghasilkan rasa kopi yang halus dan menyegarkan.' }
  ]);

  const [reviews, setReviews] = useState([
    { id: 1, reviewer: '-Ali', review: 'Kopi yang luar biasa! Rasanya sangat nikmat dan segar.' },
    { id: 2, reviewer: '-Dina', review: 'Saya sangat suka Cappuccino, creamy dan lezat.' },
    { id: 3, reviewer: '-Nana', review: 'Espresso-nya benar-benar kuat dan memberikan energi ekstra!' }
  ]);

  const handleDelete = (id) => {
    Swal.fire({
      title: 'Apakah Anda yakin?',
      text: 'Anda tidak akan dapat mengembalikan menu ini!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Hapus',
      cancelButtonText: 'Batal',
    }).then((result) => {
      if (result.isConfirmed) {
        setMenuItems(menuItems.filter(item => item.id !== id));
        Swal.fire(
          'Dihapus!',
          'Menu telah dihapus.',
          'success'
        );
      }
    });
  };

  return (
    <div className="dashboard">
      <main>
        <section className="statistics">
          <div className="stat-card">
            <div className="icon"><i className="fas fa-users"></i></div>
            <h2>Jumlah Pengunjung</h2>
            <p className="stat-number">150</p>
          </div>
          <div className="stat-card">
            <div className="icon"><i className="fas fa-money-bill-wave"></i></div>
            <h2>Penjualan Hari Ini</h2>
            <p className="stat-number">Rp 187,500,000</p>
          </div>
          <div className="stat-card">
            <div className="icon"><i className="fas fa-box"></i></div>
            <h2>Jumlah Pesanan</h2>
            <p className="stat-number">1.200.000</p>
          </div>
          <div className="stat-card">
            <div className="icon"><i className="fas fa-star"></i></div>
            <h2>Rating Pelanggan</h2>
            <p className="stat-number">9.5 / 10</p>
          </div>
        </section>

        <section className="menu">
          <div className="menu-header">
            <h2>MENU TERKINI</h2>
          </div>
          <div className="add-menu-container">
            <Link to="/TambahMenu">
              <button className="add-menu-btn">
                <FontAwesomeIcon icon={faPlus} />
              </button>
            </Link>
          </div>
          <table className="menu-table">
            <thead>
              <tr>
                <th>Menu</th>
                <th>Harga</th>
                <th>Deskripsi</th>
                <th>Aksi</th>
              </tr>
            </thead>
            <tbody>
              {menuItems.map(item => (
                <tr key={item.id}>
                  <td>{item.name}</td>
                  <td>{item.price}</td>
                  <td>{item.description}</td>
                  <td>
                    {/* Edit button now links to EditMinuman page */}
                    <Link to={`/EditMinuman/`}>
                      <button className="edit-btn">
                        <FontAwesomeIcon icon={faEdit} />
                      </button>
                    </Link>
                    <button onClick={() => handleDelete(item.id)} className="delete-btn">
                      <FontAwesomeIcon icon={faTrash} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>

        {/* New Section for Customer Reviews */}
        <section className="reviews">
          <div className="reviews-header">
            <h2 className="reviews-title">ULASAN PEMBELI</h2>
          </div>
          <div className="reviews-list">
            {reviews.map(review => (
              <div key={review.id} className="review-card">
                <h3>{review.reviewer}</h3>
                <p>{review.review}</p>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
};

export default Dashboard;
