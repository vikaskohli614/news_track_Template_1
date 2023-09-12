import React from 'react';
import './Popularpost.css';
import './Sidebar.css';
import './Blogroll.css';

 function Blogroll() {
  return (
    <div className="rightsidebar">
    
        <div className="box-2">
          <h2 className='title'>Blogroll</h2>
          <ul className='box-ul'>
            <li  className='box-li' ><a className='box-a' href="/">Suggest Ideas</a></li>
            <li  className='box-li' ><a className='box-a' href="/">Documentation</a></li>
            <li  className='box-li' ><a className='box-a' href="/">Support Forum</a></li>
          </ul>
        </div>

        <div className="box-2">
          <h2 className='title'>Meta</h2>
          <ul className='box-ul'>
            <li  className='box-li' ><a className='box-a' href="/">Site Admin</a></li>
            <li  className='box-li' ><a className='box-a' href="/">Log out</a></li>
            <li  className='box-li' ><a className='box-a' href="/">Valid XHTML</a></li>
          </ul>
        </div>
  
        <div className="box-2">
          <h2 className='title'>Archives</h2>
          <ul className='box-ul'>
            <li  className='box-li' ><a className='box-a' href="/">January 2009</a></li>
            <li  className='box-li' ><a className='box-a' href="/">November 2008</a></li>
            <li  className='box-li' ><a className='box-a' href="/">October 2008</a></li>
          </ul>
        </div>
       
      </div>
  )
}

export default Blogroll;