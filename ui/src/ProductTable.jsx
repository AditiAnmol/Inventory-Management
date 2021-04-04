import React from 'react';

function ProductRow(props) {
  const { product } = props;
  return (
    <tr>
      <td>{product.name}</td>
      <td>{product.price ? `$${product.price}` : ''}</td>
      <td>{product.category}</td>
      <td>{product.image ? <a href={product.image} target="_blank" rel="noreferrer">Link</a> : ''}</td>
    </tr>
  );
}

function ProductTable({ products }) {
  const productRows = products.map(product => <ProductRow key={product.id} product={product} />);

  return (
    <table className="bordered-table">
      <thead>
        <tr>
          <th>Product Name</th>
          <th>Price</th>
          <th>Category</th>
          <th>Image</th>
        </tr>
      </thead>
      <tbody>
        {productRows.length > 0 ? productRows : <tr><td colSpan="4">No records to display</td></tr>}
      </tbody>
    </table>
  );
}

export default ProductTable;
