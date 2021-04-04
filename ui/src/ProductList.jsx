import React from 'react';
import ProductAdd from './ProductAdd.jsx';
import ProductTable from './ProductTable.jsx';
import graphQLFetch from './graphQLFetch.js';

class ProductList extends React.Component {
  constructor() {
    super();
    this.state = { products: [] };
    this.createProduct = this.createProduct.bind(this);
  }

  componentDidMount() {
    this.loadData();
  }

  async loadData() {
    const query = `query {
              productList {
                  id
                  category
                  price
                  name
                  image
              }
          }
          `;
    const data = await graphQLFetch(query);
    this.setState({ products: data.productList });
  }

  async createProduct(product) {
    const query = `mutation productAdd($product: ProductInputs!) {
              productAdd(product: $product){
                  id
              }
          }`;

    const data = await graphQLFetch(query, { product });
    if (data) {
      this.loadData();
    }
  }

  render() {
    const { products } = this.state;
    return (
      <React.Fragment>
        <h1>My Company Inventory</h1>
        Showing all available products
        <hr />
        <ProductTable products={products} />
        <br />
        Add a new product to inventory
        <hr />
        <ProductAdd createProduct={this.createProduct} />
      </React.Fragment>
    );
  }
}

export default ProductList;
