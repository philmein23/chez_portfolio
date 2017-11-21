import React, { Component } from 'react';
import { Image } from 'cloudinary-react';
import { CLOUDINARY } from '../constants/constants';

class Images extends Component {
  state = {
    display: false,
    selectedImage: null,
    modal: null
  };

  handleModalDisplay = async selectedImage => {
    await this.loadModal();

    this.setState({
      selectedImage,
      display: true
    });
  };

  loadModal = async () => {
    const {
      default: loadedModal
    } = await import('../components/Modal');

    this.setState({ modal: loadedModal });
  };

  closeModal = () => {
    this.setState({ display: false });
  };

  render() {
    const imageLink = {
      cursor: 'pointer'
    };

    const { imageData, width } = this.props;

    const Modal = this.state.modal;

    return (
      <div>
        {Modal ? (
          <Modal
            width={500}
            closeModal={this.closeModal}
            display={this.state.display}
            selectedImage={this.state.selectedImage}
          />
        ) : (
          <div></div>
        )}

        {imageData.resources.map((image, index) => (
          <a
            style={imageLink}
            key={image.public_id}
            onClick={() => this.handleModalDisplay(image)}
          >
            <Image
              cloudName={CLOUDINARY().CLOUDNAME}
              publicId={image.public_id}
              width={width}
              crop={CLOUDINARY().CROP_TYPE}
            />
            <style jsx>
              {`
                a:hover {
                  opacity: 0.6;
                }

                a {
                  margin: 2px;
                }
              `}
            </style>
          </a>
        ))}
      </div>
    );
  }
}

export default Images;
