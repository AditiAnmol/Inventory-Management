import React from 'react';
import { NavLink } from 'react-router-dom';
import Content from './Content.jsx';

const NavBar = () => (
  <nav>
    <NavLink exact to="/">
      Home
    </NavLink>
    {' | '}
    <NavLink to="/products">
      Product List
    </NavLink>
  </nav>
);

const Page = () => (
  <div>
    <NavBar />
    <Content />
  </div>
);

export default Page;
