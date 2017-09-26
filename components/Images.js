import React, { Component } from 'react';
import { Image } from 'cloudinary-react';
import { CLOUDINARY } from '../constants/constants';
import Modal from '../components/Modal';

class Images extends Component {
  state = {
    display: false,
    selectedImage: null
  };

  handleModalDisplay = selectedImage => {
    this.setState({
      selectedImage,
      display: true
    });
  };

  closeModal = () => {
    this.setState({ display: false });
  };

  render() {
    const imageLink = {
      cursor: 'pointer'
    }

    const { imageData, width } = this.props;
    return (
      <div>
        <Modal
          width={500}
          closeModal={this.closeModal}
          display={this.state.display}
          selectedImage={this.state.selectedImage}
        />
        {imageData.resources.map((image, index) => (
          <a
            style={imageLink}
            key={image.public_id}
            onClick={() => this.handleModalDisplay(image)}
          >
          <style jsx>{`
            a:hover {
              opacity: 0.5;
            }
          `}
          </style>
            <Image
              cloudName={CLOUDINARY.CLOUDNAME}
              publicId={image.public_id}
              width={width}
              crop={CLOUDINARY.CROP_TYPE}
            />
          </a>
        ))}
      </div>
    );
  }
}

export default Images;
