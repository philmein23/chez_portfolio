import React, { Component } from 'react';
import { Image } from 'cloudinary-react';
import { CLOUDINARY } from '../constants/constants';

const overlayStyle = {
  position: 'fixed',
  zIndex: '9000',
  paddingTop: '10px',
  left: '0',
  top: '0',
  width: '100%',
  height: '100%',
  overflow: 'auto',
  backgroundColor: 'rgba(0,0,0,0.8)'
};

const button = {
  fontSize: '40px',
  fontWeight: 'bold',
  transition: '0.3s',
  color: '#f1f1f1',
  marginRight: '20px',
  cursor: 'pointer'
};

const buttonAlignment = {
  display: 'flex',
  justifyContent: 'flex-end',
  width: '100%'
};

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

          <div className="imageBorder">
            <Image
              cloudName={CLOUDINARY().CLOUDNAME}
              publicId={selectedImage.public_id}
              width={width}
              crop={CLOUDINARY().CROP_TYPE}
            />
          </div>
          <style jsx>{`
            .imageBorder {
              border: 10px solid #fff;
            }
          `}</style>
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
