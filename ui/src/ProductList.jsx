import React from 'react';
import ProductAdd from './ProductAdd.jsx';
import ProductTable from './ProductTable.jsx';
import graphQLFetch from './graphQLFetch.js';

class ProductList extends React.Component {
  constructor() {
    super();
    this.state = { products: [] };
    this.createProduct = this.createProduct.bind(this);
    this.deleteProduct = this.deleteProduct.bind(this);
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

  async deleteProduct(index) {
    const query = `mutation productDelete($id: Int!) {
      productDelete(id: $id)
    }`;
    const { products } = this.state;
    const { location: { pathname, search }, history } = this.props;
    const { id } = products[index];
    const data = await graphQLFetch(query, { id });
    if (data && data.issueDelete) {
      this.setState((prevState) => {
        const newList = [...prevState.products];
        if (pathname === `/products/${id}`) {
          history.push({ pathname: '/products', search });
        }
        newList.splice(index, 1);
        return { products: newList };
      });
    } else {
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
        <ProductTable
          products={products}
          deleteProduct={this.deleteProduct}
        />
        <br />
        Add a new product to inventory
        <hr />
        <ProductAdd createProduct={this.createProduct} />
      </React.Fragment>
    );
  }
}

export default ProductList;
