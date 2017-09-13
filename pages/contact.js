import Layout from '../components/Layout';

const contactSection = {
  backgroundColor: '#FFF',
  maxWidth: 720,
  width: '100%',
  margin: '50px auto 0',
  padding: '10px 15px',
  borderRadius: '5px',
  boxShadow: '0 2px 4px rgba(0,0,0, 0.18)'
};

export default ({ url }) => (
  <Layout href={url.pathname}>
    <section style={contactSection}>
      Chez is available for special request alongside purchasing his
      current works of art. <br />Please contact him via
      <span>
        <span> </span><a href="mailto:iawstudios1199@gmail.com">e-mail</a>
      </span>
      
    </section>
  </Layout>
);
