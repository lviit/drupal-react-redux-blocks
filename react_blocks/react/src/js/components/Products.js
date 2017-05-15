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
  fetchProducts(idToken) {
    /* the token is not really needed
    var config = {
      headers: {'authorization': idToken}
    };
    */
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
    const token = this.props.authentication.idToken;
    token && this.fetchProducts(token);
  }
  componentDidUpdate() {
    const token = this.props.authentication.idToken;
    token && !this.state.products.data.length && this.fetchProducts(token);
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
