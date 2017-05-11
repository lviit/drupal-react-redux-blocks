import React from 'react';
import { connect } from 'react-redux';
import { mapStateToProps, mapDispachToProps } from '../MapToProps';

class Form extends React.Component {
  handleSubmit(e) {
    e.preventDefault();
    this.props.addToList(this.refs.message.value);
    this.refs.form.reset();
  }
  render() {
    return (
     <form ref="form" onSubmit={(e) => this.handleSubmit(e)}>
        <input type="text" ref="message" placeholder="Send this message to another block" />
        <input type="submit" hidden />
     </form>
    );
  }
}

export default connect(mapStateToProps, mapDispachToProps)(Form);
