import { useLocation } from 'react-router-dom';
import './styles.css';

const Breadcrumb = () => {
  const { pathname } = useLocation();
  const name = pathname.replace(/\//, '');
  return <div className="breadcrumb">{name === '' ? 'start page' : name}</div>;
};

export default Breadcrumb;
