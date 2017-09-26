import React, { Component } from 'react';
import { Image } from 'cloudinary-react';
import { CLOUDINARY } from '../constants/constants';

const overlayStyle = {
  position: 'fixed',
  zIndex: '1',
  paddingTop: '10px',
  left: '0',
  top: '0',
  width: '100%',
  height: '100%',
  overflow: 'auto',
  backgroundColor: 'rgba(0,0,0,0.9)'
};

const button = {
  fontSize: '40px',
  fontWeight: 'bold',
  transition: '0.3s',
  backgroundColor: 'rgba(0,0,0,0.9)',
  color: '#f1f1f1',
  marginRight: '20px',
  cursor: 'pointer'
};

const buttonAlignment = {
  display: 'flex',
  justifyContent: 'flex-end',
  width: '100%'
}

const modalLayout = {
  display: 'flex',
  width: '100%',
  flexDirection: 'column',
  alignItems: 'center'
};


class Modal extends Component {
  render() {
    const { selectedImage, display, closeModal, width } = this.props;
    const overlayContent = () => {
      if (!selectedImage) return null;
      return (
        <div style={modalLayout}>
          <div style={buttonAlignment}>
            <span style={button} onClick={closeModal}>
              X
            </span>
          </div>

          <Image
            cloudName={CLOUDINARY.CLOUDNAME}
            publicId={selectedImage.public_id}
            width={width}
            crop={CLOUDINARY.CROP_TYPE}
          />
        </div>
      );
    };

    const overlay = (
      <div style={overlayStyle}>{overlayContent()}</div>
    );

    return <div>{display ? overlay : null}</div>;
  }
}

export default Modal;
