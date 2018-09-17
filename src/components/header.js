import React from 'react';
import Link from 'gatsby-link';

const ListLink = props =>
  <li style={{
    display: `inline-block`,
    marginRight: `1rem`,
    // color: 'white',
    // textDecoration: 'none',
    }}>
    <Link to={props.to}>
      {props.children}
    </Link>
  </li>

const Header = ({ siteTitle }) => (
  <div
      style={{
        margin: '0 auto',
        maxWidth: 960,
        padding: '3.45rem 1.0875rem',
      }}
    >
    <header style={{ marginBottom: `5.5rem` }}>
      <Link to="/" style={{ textShadow: `none`, backgroundImage: `none` }}>
        <h2 style={{ display: `inline` }}>{siteTitle}</h2>
      </Link>
      <ul style={{ listStyle: `none`, float: `right`, textDecoration: `none` }}>
        <ListLink to="/">Home</ListLink>
        <ListLink to="/portfolio/">Portfolio</ListLink>
        <ListLink to="/blog/">Blog</ListLink>
        <ListLink to="/contact/">Contact</ListLink>
      </ul>
    </header>
  </div>
)

export default Header