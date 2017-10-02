import React, { Component } from 'react';
import { Image } from 'cloudinary-react';
import Media from 'react-media';

import Layout from '../components/Layout';
import Content from '../components/Content';
import { CLOUDINARY } from '../constants/constants';


const AboutContainer = ({
  publicId,
  flexDirection = '',
  alignItems = '',
  marginTop = ''
}) => {
  return (
    <div style={{ flexDirection, alignItems }}>
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
    const headerTitle = (
      textAlign = '',
      fontSize = '',
      marginBottom = '20px'
    ) => {
      return { textAlign, fontSize, marginBottom };
    };

    const { data: { resources: [{ public_id }] }, url } = this.props;
    return (
      <div>
        <Layout href={url.pathname}>
          <Media query="(max-width: 575px)">
            {matches =>
              matches ? (
                <Content
                  margin={'120px auto'}
                  maxWidth={300}
                  justifyContent={'center'}
                >
                  <h1 style={headerTitle('center', '30px')}>
                    About The Artist
                  </h1>
                  <AboutContainer
                    flexDirection={'column'}
                    alignItems={'center'}
                    marginTop={'10px'} 
                    publicId={public_id}
                  />
                </Content>
              ) : (
                <Content>
                  <h1 style={headerTitle()}>About The Artist</h1>
                  <AboutContainer publicId={public_id} />
                </Content>
              )}
          </Media>
        </Layout>
        <style jsx>
          {`
            h1 {
              text-transform: uppercase;
              color: #222;
            }
          `}
        </style>
      </div>
    );
  }
}
