import Layout from '../components/Layout';
import Content from '../components/Content';
import fetch from 'isomorphic-unfetch';
import { Image } from 'cloudinary-react';

const Index = ({ url, imageData }) => (
  <Layout href={url.pathname}>
    {console.log(imageData)}
    <Content>
      {imageData.resources.map(image => (
        <div>
          <Image
            cloudName="pnguyen23"
            publicId={image.public_id}
            height="400"
            crop="scale"
          />
        </div>
      ))}
    </Content>
    <style jsx>
    {`
      div {
        margin: 0.2vw;
      }
    `}
  </style>
  </Layout>
);

Index.getInitialProps = async function() {
  const options = {
    method: 'GET',
    mode: 'cors'
  };

  const resources = await fetch(
    'http://res.cloudinary.com/pnguyen23/image/list/chez.json',
    options
  );
  const imageData = await resources.json();

  return {
    imageData
  };
};

export default Index;
