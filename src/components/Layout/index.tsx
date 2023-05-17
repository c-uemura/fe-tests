import { Link, Outlet } from 'react-router-dom';
import './styles.css';
import Breadcrumb from '@/components/Breadcrumb';

const Layout = () => (
  <div>
    <div className="navbar">
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/page">Page</Link>
        </li>
        <li>
          <Link to="/settings">Settings</Link>
        </li>
      </ul>
    </div>
    <Breadcrumb />
    <Outlet />
  </div>
);

export default Layout;
