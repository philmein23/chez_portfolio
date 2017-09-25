import React, { Component } from 'react';
import { Image } from 'cloudinary-react';
import { CLOUDINARY } from '../constants/constants';
import Modal from '../components/Modal';

class Images extends Component {
  state = {
    display: false,
    activeIndex: 0
  };

  handleModalDisplay = activeIndex => {
    this.setState(() => {
      return {
        activeIndex,
        display: true
      };
    });
  };

  closeModal = () => {
    this.setState(() => {
      return { display: false };
    });
  }
   
  render() {
    const { imageData, width } = this.props;
    return (
      <div>
        {imageData.resources.map((image, index) => (
          <a
            key={index}
            onClick={() => this.handleModalDisplay(index)}
          >
            <Modal
              closeModal={this.closeModal}
              display={this.state.display}
              activeIndex={this.state.activeIndex}
              selectedIndex={index}
            >
              <Image
                cloudName={CLOUDINARY.CLOUDNAME}
                publicId={image.public_id}
                width={width}
                crop={CLOUDINARY.CROP_TYPE}
              />
            </Modal>
          </a>
        ))}
      </div>
    );
  }
}

export default Images;
