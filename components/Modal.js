import React, { Component } from 'react';

const overlayStyle = {
  position: 'fixed',
  zIndex: '1',
  paddingTop: '100px',
  left: '0',
  top: '0',
  width: '100%',
  height: '100%',
  overflow: 'auto',
  backgroundColor: 'rgba(0,0,0,0.9)'
};

const button = {
  borderRadius: '5px',
  backgroundColor: '#FFF',
  zIndex: '10'
};

class ModalPanel extends Component {
  render() {
    const { display } = this.props;
    console.log(display)
    const overlay = (
      <div style={overlayStyle}>
        <button style={button} onClick={this.props.closeModal}>
          X
        </button>
      </div>
    );
    return <div>{display ? overlay : null}</div>;
  }
}

class Modal extends Component {
  render() {
    const {
      activeIndex,
      children,
      selectedIndex,
      display,
      closeModal
    } = this.props;
    let modalPanel = null;
    if (activeIndex === selectedIndex) {
      modalPanel = (
        <ModalPanel display={this.props.display} closeModal={this.props.closeModal} />
      );
    }

    return (
      <div>
        {modalPanel}
        {children}
      </div>
    );
  }
}

export default Modal;
