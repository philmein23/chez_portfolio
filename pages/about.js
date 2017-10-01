import React, { Component } from 'react';
import { Image } from 'cloudinary-react';

import Layout from '../components/Layout';
import Content from '../components/Content';
import { CLOUDINARY } from '../constants/constants';

const text = {
  textAlign: 'left',
  color: 'rgb(108, 107, 107)',
  fontSize: '16px',
  lineHeight: '1.5em',
  paddingLeft: '10px',
  fontFamily: 'Raleway'
};

const headerTitle = {
  color: '#222',
  marginBottom: '32px',
  textTransform: 'uppercase'
};

const container = {
  display: 'flex'
};

const imgFlex = {
  maxWidth: '200px',
  width: '100%',
  height: 'auto'
};

export default class About extends Component {
  static async getInitialProps() {
    const options = {
      method: 'GET',
      mode: 'cors'
    };

    const response = await fetch(
      CLOUDINARY('profile_pic').URL,
      options
    );

    const data = await response.json();
    return { data };
  }

  render() {
    const { data: { resources: [{ public_id }] }, url } = this.props;
    return (
      <div>
        <Layout href={url.pathname}>
          <Content>
            <h1 style={headerTitle}>About The Artist</h1>
            <div style={container}>
              <Image
                cloudName={CLOUDINARY().CLOUDNAME}
                width={150}
                publicId={public_id}
                crop={CLOUDINARY().CROP_TYPE}
              />
              <text style={text}>
                New York native Chez Negron is a self-taught artist
                that has been creating art since he was a child. He is
                said to have picked up a pencil at birth and began to
                draw. Chez was inspired by his mother Grace Vargas- an
                artist herself who was an Art Teacher for NYC Board of
                Education for over 20 years.
                <br />
                <br />
                Chez passions began with studying various different
                forms of art...including traditional art, comic book
                art, graffiti, abstract and more. Inspired by his
                mother and love of his city, Chez works with many
                different mediums. Including: Spray Paint, Acrylic,
                3-D Paint, Watercolors, Oil Paints, Pens, Pencils,
                Markers, Colored Pencils, Pastels, Charcoal, Stencils,
                and more. “Money making Manhattan” helped mold Chez
                into the artist he is today.
                <br />
                <br />
                He currently is living 45 minutes outside of DC in
                Ashburn with his girlfriend and pup Chalupa Batman.
              </text>
            </div>
          </Content>
        </Layout>
      </div>
    );
  }
}
