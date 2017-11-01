import React, { Component } from 'react';

import Layout from '../components/Layout';
import Content from '../components/Content';
import { CLOUDINARY } from '../constants/constants';

import fetch from 'isomorphic-unfetch';
import Images from '../components/Images';

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

  state = {
    width: 200,
    contentMaxWidth: '950px'
  };

  setMediaUpdate = () => {
    this.mediaQueryList = window.matchMedia('(min-width: 576px)');

    this.mediaQueryList.addListener(this.updateWidth);
  };

  updateWidth = e => {
    if (e.matches) {
      this.setState({
        width: 200,
        contentMaxWidth: '950px'
      });
    } else {
      this.setState({
        width: 300,
        contentMaxWidth: '350px'
      });
    }
  };

  componentWillUnmount() {
    this.mediaQueryList.removeListener(this.updateWidth);
  }

  componentDidMount() {
    this.setMediaUpdate();

    this.mediaQueryList.matches
      ? this.setState({ width: 200, contentMaxWidth: '950px' })
      : this.setState({ width: 300, contentMaxWidth: '350px' });
  }

  render() {
    const { url, imageData } = this.props;
    const { width, contentMaxWidth } = this.state;
    console.log(imageData)
    return (
      <Layout href={url.pathname}>
        <Content maxWidth={contentMaxWidth}>
          <Images imageData={imageData} width={width} />
        </Content>
      </Layout>
    );
  }
}
