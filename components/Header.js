import Link from 'next/link';
import ActiveLink from './ActiveLink';
import Router from 'next/router';

const headerBar = {
  display: 'flex',
  width: '100%',
  justifyContent: 'space-between',
  height: 50,
  alignItems: 'center',
  backgroundColor: 'white',
  boxShadow: '0 2px 4px rgba(0,0,0, 0.18)',
  borderTop: '5px solid black',
  position: 'fixed'
};

const navBar = {
  display: 'flex',
  height: 50
};

const mainTitle = {
  textTransform: 'uppercase',
  fontSize: 25,
  paddingLeft: 10,
  fontWeight: '800',
  cursor: 'pointer'
};

const Header = ({ href }) => {
  return (
    <header style={headerBar}>
      <Link href="/">
        <div style={mainTitle}>IAW Studios/ illa Art Workz</div>
      </Link>

      <nav style={navBar}>
        <ActiveLink href="/">Portfolio</ActiveLink>
        <ActiveLink href="/about">About</ActiveLink>
        <ActiveLink href="/contact">Contact</ActiveLink>
      </nav>
      <style jsx global>
        {`
          nav > li {
            list-style: none;
            height: 100%;
            display: flex;
            align-items: center;
          }
        `}
      </style>
    </header>
  );
};

export default Header;
