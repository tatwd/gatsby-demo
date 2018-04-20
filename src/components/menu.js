import React from 'react'
import Link from 'gatsby-link'

const Menu = () => (
  <div style={{
    background: '#f4f4f4',
    paddingTop: '10px' 
  }}>
    <ul style={{
      listStyle: 'none',
      display: 'flex',
      justifyContent: 'space-evenly'
    }}>
      <li><Link to="/">主页</Link></li>
      <li><Link to="/about">关于</Link></li>
      <li><Link to="/services">服务</Link></li>
      <li><Link to="/blog">博客</Link></li>
    </ul>
  </div>
)

export default Menu