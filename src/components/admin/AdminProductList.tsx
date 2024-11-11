import React, { useState } from "react";
import EditButton from "../button/EditButton";
import DeleteButton from "../button/DeleteButton";

interface Product {
  id: number;
  name: string;
  category: string;
  price: string;
  stock: string;
}

const PRODUCT_DATA: Product[] = [
  { id: 1, name: "A", category: "Men", price: "59.99", stock: "13" },
  { id: 2, name: "B", category: "Women", price: "159.99", stock: "56" },
  { id: 3, name: "C", category: "Men", price: "49.99", stock: "33" },
];

const AdminProductList: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [Products, setProducts] = useState<Product[]>(PRODUCT_DATA);
  const [newProduct, setNewProduct] = useState<Product | null>(null);
  const [editingProduct, setEditingProduct] = useState<Product | null>(null);
  const [confirmDelete, setConfirmDelete] = useState<{ visible: boolean; product?: Product }>({
    visible: false,
  });

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const term = e.target.value.toLowerCase();
    setSearchTerm(term);

    const filtered = PRODUCT_DATA.filter(
      (product) =>
        product.name.toLowerCase().includes(term) || product.category.toLowerCase().includes(term),
    );

    setProducts(filtered);
  };

  const handleAddProduct = () => {
    if (newProduct) {
      setProducts((prevProducts) => [...prevProducts, newProduct]);

      setNewProduct(null);
    }
  };

  const handleEditProduct = (product: Product) => {
    setEditingProduct({ ...product });
  };

  const handleSaveEdit = () => {
    if (editingProduct) {
      const updatedProducts = Products.map((product) =>
        product.id === editingProduct.id ? editingProduct : product,
      );

      setProducts(updatedProducts);
      setEditingProduct(null);
    }
  };

  const handleDeleteProduct = (product: Product) => {
    setConfirmDelete({
      visible: true,
      product: product,
    });
  };

  const confirmDeleteProduct = () => {
    if (confirmDelete.product) {
      const updatedProducts = Products.filter(
        (product) => product.id !== confirmDelete.product?.id,
      );
      setProducts(updatedProducts);
    }

    setConfirmDelete({ visible: false });
  };

  const cancelDelete = () => {
    setConfirmDelete({ visible: false });
  };

  return (
    <div className='mx-auto max-w-6xl p-6'>
      <div className='mb-4 flex justify-between'>
        <h2 className='text-xl font-semibold text-gray-800'>Product List</h2>
        <div className='relative w-1/3'>
          <input
            type='text'
            placeholder='Search product'
            className='w-full rounded-lg border border-gray-300 px-4 py-2 text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500'
            onChange={handleSearch}
            value={searchTerm}
          />
        </div>
      </div>

      <div className='mb-4'>
        <button
          onClick={() =>
            setNewProduct({ id: Date.now(), name: "", category: "", price: "", stock: "" })
          }
          className='rounded bg-green-500 px-4 py-2 text-white hover:bg-green-600'
        >
          Create Product
        </button>

        {newProduct && (
          <div className='mt-4'>
            <input
              type='text'
              placeholder='Name'
              value={newProduct.name}
              onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value })}
              className='rounded-md border border-gray-300 px-4 py-2'
            />
            <input
              type='text'
              placeholder='Category'
              value={newProduct.category}
              onChange={(e) => setNewProduct({ ...newProduct, category: e.target.value })}
              className='rounded-md border border-gray-300 px-4 py-2'
            />
            <input
              type='number'
              placeholder='Price'
              value={newProduct.price}
              onChange={(e) => setNewProduct({ ...newProduct, price: e.target.value })}
              className='rounded-md border border-gray-300 px-4 py-2'
            />
            <input
              type='number'
              placeholder='Stock'
              value={newProduct.stock}
              onChange={(e) => setNewProduct({ ...newProduct, stock: e.target.value })}
              className='rounded-md border border-gray-300 px-4 py-2'
            />
            <button onClick={handleAddProduct} className='bg-blue-500 px-4 py-2 text-white'>
              Save
            </button>
          </div>
        )}
      </div>

      {editingProduct && (
        <div className='mt-4'>
          <h3 className='text-xl font-semibold'>Edit Product</h3>
          <input
            type='text'
            placeholder='Name'
            value={editingProduct.name}
            onChange={(e) => setEditingProduct({ ...editingProduct, name: e.target.value })}
            className='rounded-md border border-gray-300 px-4 py-2'
          />
          <input
            type='text'
            placeholder='Category'
            value={editingProduct.category}
            onChange={(e) => setEditingProduct({ ...editingProduct, category: e.target.value })}
            className='rounded-md border border-gray-300 px-4 py-2'
          />
          <input
            type='number'
            placeholder='Price'
            value={editingProduct.price}
            onChange={(e) => setEditingProduct({ ...editingProduct, price: e.target.value })}
            className='rounded-md border border-gray-300 px-4 py-2'
          />
          <input
            type='number'
            placeholder='Stock'
            value={editingProduct.stock}
            onChange={(e) => setEditingProduct({ ...editingProduct, stock: e.target.value })}
            className='rounded-md border border-gray-300 px-4 py-2'
          />
          <button onClick={handleSaveEdit} className='bg-blue-500 px-4 py-2 text-white'>
            Save Changes
          </button>
        </div>
      )}

      {confirmDelete.visible && confirmDelete.product && (
        <div className='fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50'>
          <div className='w-full max-w-sm rounded-lg bg-white p-6'>
            <h3 className='text-lg font-semibold text-gray-800'>
              Are you sure you want to delete "{confirmDelete.product.name}"?
            </h3>
            <div className='mt-4 flex justify-end'>
              <button
                onClick={cancelDelete}
                className='mr-2 rounded bg-gray-400 px-4 py-2 text-white hover:bg-gray-500'
              >
                Cancel
              </button>
              <button
                onClick={confirmDeleteProduct}
                className='rounded bg-red-500 px-4 py-2 text-white hover:bg-red-600'
              >
                Confirm
              </button>
            </div>
          </div>
        </div>
      )}

      <div className='overflow-x-auto rounded-lg bg-white shadow-md'>
        <table className='min-w-full'>
          <thead>
            <tr className='border-b border-gray-200'>
              <th className='px-4 py-2 text-left text-sm font-medium text-gray-600'>Name</th>
              <th className='px-4 py-2 text-left text-sm font-medium text-gray-600'>Category</th>
              <th className='px-4 py-2 text-left text-sm font-medium text-gray-600'>Price</th>
              <th className='px-4 py-2 text-left text-sm font-medium text-gray-600'>Stock</th>
              <th className='px-4 py-2 text-left text-sm font-medium text-gray-600'>Actions</th>
            </tr>
          </thead>
          <tbody>
            {Products.map((product) => (
              <tr key={product.id} className='border-b border-gray-100'>
                <td className='px-4 py-3 text-sm text-gray-800'>{product.name}</td>
                <td className='px-4 py-3 text-sm text-gray-800'>{product.category}</td>
                <td className='px-4 py-3 text-sm text-gray-800'>{product.price}</td>
                <td className='px-4 py-3 text-sm text-gray-800'>{product.stock}</td>

                <td className='px-4 py-3 text-sm text-gray-800'>
                  <EditButton onClick={() => handleEditProduct(product)} />
                  <DeleteButton onClick={() => handleDeleteProduct(product)} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminProductList;
// 'mr-2 rounded bg-blue-500 px-3 py-1 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500'
//'rounded bg-red-500 px-3 py-1 text-white hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500'
