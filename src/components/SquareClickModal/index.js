import React from 'react';
import "./index.css"

export default class Modal extends React.Component {
  render() {
    const showHideClassName = this.props.show ? 'modal display-block' : 'modal display-none';

    return (
      <div className={showHideClassName}>
      <section className={this.props.name}>
        {this.props.children}
        <button onClick={this.props.handleClose}>
          Cancel
        </button>
      </section>
    </div>
    );
  }
}
