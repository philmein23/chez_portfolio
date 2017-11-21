import React, { Component } from 'react';
import { CLOUDINARY } from '../constants/constants';
import fetch from 'isomorphic-unfetch';

class CloudinaryImage extends Component {
  state = {
    imageData: null,
    error: null
  };

  fetchImages = async () => {
    const options = {
      method: 'GET',
      mode: 'cors'
    };

    const resources = await fetch(CLOUDINARY('chez').URL, options);
    this.setState({
      imageData: await resources.json()
    });
  };

  componentDidMount() {
    this.fetchImages().catch(error => this.setState({ error }));
  }

  render() {
    const { imageData, error } = this.state;

    return this.props.render({ imageData, error });
  }
}

export default CloudinaryImage;
