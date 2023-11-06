// By Jianqi Jin
import { Link, Outlet, Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';
import About from '../pages/About';
import Dashboard from '../pages/Dashboard';
import NoMatch from '../pages/NoMatch';

function Layout() {
  const navs = [
    {
      title: 'Home',
      path: '/',
    },
    {
      title: 'About',
      path: '/about',
    },
    {
      title: 'Dashboard',
      path: '/dashboard',
    },
    {
      title: 'Nothing Here',
      path: '/nothing-here',
    },
  ];
  return (
    <div>
      <nav>
        <ul className="flex">
          {navs.map((nav) => (
            <li className='mr-5 [&:last-child]:mr-0' key={nav.path}>
              <Link to={nav.path}>{nav.title}</Link>
            </li>
          ))}
        </ul>
      </nav>
      <hr />
      <Outlet />
    </div>
  );
}

const RoutesIndex = () => {
  return (
    <div className="comp-Routes">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="*" element={<NoMatch />} />
        </Route>
      </Routes>
    </div>
  );
};

export default RoutesIndex;
