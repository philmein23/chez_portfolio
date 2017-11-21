import React, { Component } from 'react';

import Layout from '../components/Layout';
import CloudinaryImage from '../components/CloudinaryImage';
import Images from '../components/Images';

export default class Index extends Component {
  render() {
    const { url } = this.props;
    return (
      <Layout
        href={url.pathname}
        render={({ imageWidth }) => (
          <CloudinaryImage
            render={({ imageData, error }) =>
              error ? (
                <div>Error at {error}</div>
              ) : imageData ? (
                <Images imageData={imageData} width={imageWidth} />
              ) : (
                <div>Loading...</div>
              )}
          />
        )}
      />
    );
  }
}
