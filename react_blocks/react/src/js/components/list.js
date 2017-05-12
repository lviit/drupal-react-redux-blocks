import React from 'react';
import { connect } from 'react-redux';
import { mapStateToProps, mapDispachToProps } from '../utils/MapToProps';

class List extends React.Component {
  handleClick(e, i) {
    e.preventDefault();
    console.log(this.props);
    console.log(i);
    this.props.removeFromList(i);
  }
  render() {
    return (
      <div>
        <h1>list in a block</h1>
        <ul>{ this.props.messages.map((message, i) =>
          <li key={i}>
            <a href="" onClick={(e) => this.handleClick(e, i)}>{message}</a>
          </li>)}
        </ul>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispachToProps)(List);
