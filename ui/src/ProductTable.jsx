import React from 'react';
import { Link, withRouter } from 'react-router-dom';

const ProductRow = withRouter(({ product, deleteProduct, index }) => (
  <>
    <tr>
      <td>{product.name}</td>
      <td>{product.price ? `$${product.price}` : ''}</td>
      <td>{product.category}</td>
      <td><Link to={`/image/${product.id}`}>View Product</Link></td>
      <td>
        <Link to={`/edit/${product.id}`}>Modify Product</Link>
        {' | '}
        <button type="button" onClick={() => { deleteProduct(index); }}>
          Delete Product
        </button>
      </td>
    </tr>
  </>
));

function ProductTable({ products, deleteProduct }) {
  const productRows = products.map((product, index) => (
    <ProductRow
      key={product.id}
      product={product}
      deleteProduct={deleteProduct}
      index={index}
    />
  ));

  return (
    <table className="bordered-table">
      <thead>
        <tr>
          <th>Product Name</th>
          <th>Price</th>
          <th>Category</th>
          <th>Image</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {productRows.length > 0 ? productRows : <tr><td colSpan="5">No records to display</td></tr>}
      </tbody>
    </table>
  );
}

export default ProductTable;
