import React, { Component } from 'react';
import { Image } from 'cloudinary-react';
import Media from 'react-media';

import Layout from '../components/Layout';
import { CLOUDINARY, CLOUDINARY_TAGS } from '../constants/constants';

import { CloudinaryApi } from '../utils/api';

const headerTitle = (
  textAlign = '',
  fontSize = '',
  marginBottom = '20px'
) => {
  return { textAlign, fontSize, marginBottom };
};

const AboutContainer = ({
  publicId,
  flexDirection = '',
  alignItems = '',
  marginTop = ''
}) => {
  return (
    <div>
      <h1 style={headerTitle()}>About The Artist</h1>
    
      <Image
        cloudName={CLOUDINARY().CLOUDNAME}
        width={200}
        publicId={publicId}
        crop={CLOUDINARY().CROP_TYPE}
      />
      <text style={{ marginTop }}>
        New York native Chez Negron is a self-taught artist that has
        been creating art since he was a child. He is said to have
        picked up a pencil at birth and began to draw. Chez was
        inspired by his mother Grace Vargas- an artist herself who was
        an Art Teacher for NYC Board of Education for over 20 years.
        <br />
        <br />
        Chez passions began with studying various different forms of
        art...including traditional art, comic book art, graffiti,
        abstract and more. Inspired by his mother and love of his
        city, Chez works with many different mediums. Including: Spray
        Paint, Acrylic, 3-D Paint, Watercolors, Oil Paints, Pens,
        Pencils, Markers, Colored Pencils, Pastels, Charcoal,
        Stencils, and more. “Money making Manhattan” helped mold Chez
        into the artist he is today.
        <br />
        <br />
        He currently is living 45 minutes outside of DC in Ashburn
        with his girlfriend and pup Chalupa Batman.
      </text>
      <style jsx>
        {`
          div {
            display: flex;
            flex-direction: ${flexDirection}
          }

          text {
            text-align: left;
            color: rgb(108, 107, 107);
            font-size: 16px;
            line-height: 1.5em;
            padding-left: 10px;
            font-family: Raleway;
          }
        `}
      </style>
    </div>
  );
};

export default class About extends Component {
  static async getInitialProps() {
    const data = await CloudinaryApi().fetchImages(CLOUDINARY_TAGS.profileTag);
    return { data }
  }

  render() {
    const { data: { resources: [{ public_id }] }, url } = this.props;
    return (
        <Layout 
          href={url.pathname}
          render={({ flexDirection }) => (
            <AboutContainer flexDirection={flexDirection} publicId={public_id} />
          )}>

            <style jsx>
            {`
              h1 {
                text-transform: uppercase;
                color: #222;
              }
            `}
          </style>
        </Layout>

    );
  }
}
