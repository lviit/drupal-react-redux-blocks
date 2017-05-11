import React from 'react';

const list = (props) => (
  <div>
    <h1>list in a block</h1>
    <ul>{ props.messages.map((message, i) => <li key={i}>{message}</li>) }</ul>
  </div>
);

export default list;
