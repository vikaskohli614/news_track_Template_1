import React from 'react'
import './Popularpost.css';
import './Sidebar.css';
import './LeftSideBar.css';

function LeftSlideBar() {
  return (
    <div className="leftsidebar">
    <div className="box-1">
        <h2 className='title'>Categories</h2>
        <ul className='box-ul'>
          <li className='box-li'><a className='box-a' href="/">Advertising</a></li>
          <li className='box-li'><a className='box-a' href="/">Fashion</a></li>
          <li className='box-li'><a className='box-a' href="/">Gadgets</a></li>
          <li className='box-li'><a className='box-a' href="/">Lifestyle</a></li>
          <li className='box-li'><a className='box-a' href="/">Networking</a></li>
          <li className='box-li'><a className='box-a' href="/">News</a></li>
          <li className='box-li'><a className='box-a' href="/">Sports</a></li>
        </ul>
      </div>
  </div>
  )
}

export default LeftSlideBar;