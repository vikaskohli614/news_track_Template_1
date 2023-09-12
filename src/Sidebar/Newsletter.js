import React from 'react';
import './Sidebar.css';

function Newsletter() {
    return (
        <div className="box">
            <h2 className='title'>News letter</h2>
            <p className="paragraph">
            Aliqu justo et labore at eirmod justo sea erat diam dolor diam vero kasd
            </p>
            <div style={{display:"flex",padding:"0px 12px 0px 28px"}}>
            <input className='text' type="text" value="Your Email"/>
            <button className='singup'>Sign Up</button>
            </div>
            <p className='paragraph'>Sit eirmod nonumy kasd eirmod</p>
           
            </div>
      
  )
}

export default Newsletter
