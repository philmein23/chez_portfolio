import React, { Component } from 'react';
import Layout from '../components/Layout';
import Content from '../components/Content';
import Modal from '../components/Modal';

import fetch from 'isomorphic-unfetch';
import Images from '../components/Images';
import Media from 'react-media';

class Index extends Component {
  render() {
    const { url, imageData } = this.props;
    return (
      <Layout href={url.pathname}>
        <Media query="(max-width: 768px)">
          {matches =>
            matches ? (
              <Content maxWidth={500}>
                <Images imageData={imageData} width={400} />
              </Content>
            ) : (
              <Content>
                <Images imageData={imageData} width={300} />
              </Content>
            )}
        </Media>
      </Layout>
    );
  }
}

Index.getInitialProps = async function() {
  const options = {
    method: 'GET',
    mode: 'cors'
  };

  const resources = await fetch(
    'https://res.cloudinary.com/pnguyen23/image/list/chez.json',
    options
  );
  const imageData = await resources.json();

  return {
    imageData
  };
};

export default Index;
