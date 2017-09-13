import { withRouter } from 'next/router';

const ActiveLink = ({ children, router, href }) => {
  const active = {
    borderBottom: router.pathname === href ? '2px solid black' : '0px'
  };

  const handleClick = e => {
    e.preventDefault();
    router.push(href);
  };

  return (
    <li style={active}>
      <a href={href} onClick={handleClick}>
        {children}
      </a>
      <style jsx>
        {`

      a {
        display: inline-block;
        padding-left: 15px;
        text-decoration: none;
        color: black;
        font-weight: 600;
        cursor: pointer;
      }

      li a:active {
        transform: translateY(1px);
      }

      a:last-child {
        padding-right: 10px;
      }

      a:hover {
        color: #a9a9a9;
      }
      
      `}
      </style>
    </li>
  );
};

export default withRouter(ActiveLink);
