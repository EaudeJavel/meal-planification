import { Link } from 'react-router-dom';

const Navigation = ({ routes }) => {
  return (
    <nav>
      <ul>
        {routes.map(({ name, path }) => {
          return (
            <li key={path}>
              <Link to={path}>{name}</Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Navigation;
