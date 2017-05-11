import React from 'react';
import { connect } from 'react-redux';
import { mapStateToProps, mapDispachToProps } from '../MapToProps';

const List = (props) => (
  <div>
    <h1>list in a block</h1>
    <ul>{ props.messages.map((message, i) => <li key={i}>{message}</li>) }</ul>
  </div>
);

export default connect(mapStateToProps, mapDispachToProps)(List);
