import React, { Component } from 'react';
import Layout from '../components/Layout';
import Content from '../components/Content';
import Modal from '../components/Modal';
import { CLOUDINARY } from '../constants/constants';

import fetch from 'isomorphic-unfetch';
import Images from '../components/Images';
import Media from 'react-media';

export default class Index extends Component {
  static async getInitialProps() {
    const options = {
      method: 'GET',
      mode: 'cors'
    };

    const resources = await fetch(CLOUDINARY('chez').URL, options);
    const imageData = await resources.json();

    return {
      imageData
    };
  }

  render() {
    const { url, imageData } = this.props;

    const belowMaxWidth = () => {
      return (
        <Content maxWidth={300} margin={'120px auto'}>
          <Images imageData={imageData} width={300} />
        </Content>
      );
    };

    const aboveMaxWidth = () => {
      return (
        <Content>
          <Images imageData={imageData} width={200} />
        </Content>
      );
    };

    return (
      <Layout href={url.pathname}>
        <Media query="(max-width: 575px)" render={belowMaxWidth} />
        <Media query="(min-width: 574px)" render={aboveMaxWidth} />
      </Layout>
    );
  }
}
