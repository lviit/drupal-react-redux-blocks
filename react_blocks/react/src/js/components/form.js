import React from 'react';

class form extends React.Component {
  handleSubmit(e) {
    e.preventDefault();
    this.props.addToList(this.refs.message.value);
    this.refs.form.reset();
  }
  render() {
    console.log(this.props);
    return (
     <form ref="form" onSubmit={(e) => this.handleSubmit(e)}>
        <input type="text" ref="message" placeholder="Send this message to another block" />
        <input type="submit" hidden />
     </form>
    );
  }
}

export default form;
