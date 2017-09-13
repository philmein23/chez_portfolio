import Layout from '../components/Layout';
import fetch from 'isomorphic-unfetch';
import { Image } from 'cloudinary-react';

const mainContent = {
  display: 'flex',
  flexWrap: 'wrap',
  flexFlow: 'row-wrap',
  backgroundColor: '#FFF',
  maxWidth: '980px',
  width: '100%',
  margin: '50px auto',
  padding: '10px 25px',
  borderRadius: '5px',
  boxShadow: '0 2px 4px rgba(0,0,0, 0.18)'
};

const Index = ({ url, imageData }) => (
  <Layout href={url.pathname}>
    {console.log(imageData)}
    <section style={mainContent}>
      {imageData.resources.map(image => (
        <div>
          <Image
            cloudName="pnguyen23"
            publicId={image.public_id}
            width="300"
            crop="scale"
          />
        </div>
      ))}
    </section>
    <style jsx>
      {`
        section div {
          flex: auto;
          margin: 0.5vw;
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
