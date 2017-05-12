import React from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { mapStateToProps, mapDispachToProps } from '../utils/MapToProps';

class Products extends React.Component {
  constructor() {
    super();
    this.state = {
      products: {
        data: [],
      }
    };
  }
  fetchProducts() {
    axios
      .get('https://jsonplaceholder.typicode.com/posts')
      .then(products => this.setState({products}))
      .catch(error => console.log(error));
  }
  handleClick(e, title) {
    e.preventDefault();
    this.props.addToList(title);
  }
  componentWillMount() {
    this.fetchProducts();
  }
  render() {
    return (
      <ul>
        { this.state.products.data.slice(0, 10).map(product =>
        <li key={product.id}>
          <a href="" onClick={(e) => this.handleClick(e, product.title)}>
            <strong>{product.title}</strong>
            <p>{product.body}</p>
          </a>
        </li>)}
      </ul>
    );
  }
}

export default connect(mapStateToProps, mapDispachToProps)(Products);
