import React, { useEffect, useState } from 'react';
import TableAdmin from '../components/TableAdmin';
import Header from '../components/Header';
import AgregarAdmin from '../components/AgregarAdmin';
import EditarAdmin from '../components/EditarAdmin';

function AdminProducts() {
  const [products, setProducts] = useState([]);
  const [editProduct, setEditProduct] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const token = localStorage.getItem('sesionToken');

  useEffect(() => {
    fetch('http://localhost:8080/products', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => response.json())
      .then((data) => setProducts(data))
      .catch((error) => console.error(error));
  }, []);

  const handleDelete = (productId) => {
    fetch(`http://localhost:8080/products/${productId}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        const updatedProducts = products.filter((item) => item.id !== productId);
        setProducts(updatedProducts);
      })
      .catch((error) => console.error(error));
  };

  const handleAddProduct = (newProduct) => {
    fetch('http://localhost:8080/products', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(newProduct),
    })
      .then((response) => response.json())
      .then((data) => {
        setProducts([...products, data]);
      })
      .catch((error) => console.error(error));
  };

  const handleEditProduct = (updatedProduct) => {
    fetch(`http://localhost:8080/products/${updatedProduct.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(updatedProduct),
    })
      .then((response) => response.json())
      .then((data) => {
        const updatedProducts = products.map((item) =>
          item.id === updatedProduct.id ? updatedProduct : item
        );
        setProducts(updatedProducts);
      })
      .catch((error) => console.error(error));
  
    console.log('Producto actualizado:', updatedProduct);
  };
  
  
  
  const handleEditClick = (productId) => {
    const productToEdit = products.find((item) => item.id === productId);
    setEditProduct(productToEdit);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setEditProduct(null);
    setShowModal(false);
  };

  return (
    <div>
      <Header />
      <AgregarAdmin handleAddProduct={handleAddProduct} />
      <TableAdmin
        className="text-center"
        products={products}
        handleDelete={handleDelete}
        handleEditClick={handleEditClick}
      />
      {editProduct && (
        <EditarAdmin
          editProduct={editProduct}
          showModal={showModal}
          handleClose={handleCloseModal}
          handleUpdateProduct={handleEditProduct}
        />
      )}
    </div>
  );
}

export default AdminProducts;
