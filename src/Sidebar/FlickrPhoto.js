import React from 'react';
import './Sidebar.css';
 
function FlickrPhoto() {
    return (
        <div className="box">
            <h2 className='title' >Social Media</h2>
            <div className="Social media" style={{ padding: "0px 12px 10px 12px" }}>
                <div style={{ display: "flex", marginTop: "17px", justifyContent: "space-around",textDecoration:"none"}}>
                    <a href="#" className="icon" style={{ backgroundColor: "rgb(57, 86, 158)", padding: "0.7rem 1.9rem" }}>
                        <small class="fa-brands fa-facebook" style={{ color: "white",fontSize:"19px" }}></small>
                        <a style={{ color: "white",fontSize:"12px",marginLeft:"8px",textDecoration:"none" }} >12,456 fans</a>
                    </a>
                    <a href="#" className="icon" style={{ backgroundColor: "rgb(82, 170, 244)", padding: "0.7rem 1.9rem" }}>
                        <small class="fa-brands fa-twitter" style={{ color: "white",fontSize:"19px" }} ></small>
                        <a style={{ color: "white",fontSize:"12px",marginLeft:"8px",textDecoration:"none" }} >12,456 fans</a>
                    </a>
                </div>
                <div style={{ display: "flex", marginTop: "17px", justifyContent: "space-around",textDecoration:"none"}}>
                    <a href="#" className="icon" style={{ backgroundColor: "rgb(1, 133, 174)", padding: "0.7rem 1.9rem" }}>
                        <small class="fa-brands fa-linkedin-in" style={{ color: "white",fontSize:"19px" }} ></small>
                        <a style={{ color: "white",fontSize:"12px",marginLeft:"8px",textDecoration:"none" }} >12,456 fans</a>
                    </a>



                    <a href="#" className="icon" style={{ backgroundColor: "rgb(200, 53, 157", padding: "0.7rem 1.9rem" }}>
                        <small class="fa-brands fa-instagram" style={{ color: "white",fontSize:"19px" }} ></small>
                        <a style={{ color: "white",fontSize:"12px",marginLeft:"8px",textDecoration:"none" }} >12,456 fans</a>
                    </a>
                </div>
                <div style={{ display: "flex", marginTop: "17px", justifyContent: "space-around",textDecoration:"none" }}>
                    <a href="#" className="icon" style={{ backgroundColor: "rgb(220, 71, 46)", padding: "0.7rem 1.9rem" }}>
                        <small class="fa-brands fa-youtube" style={{ color: "white",fontSize:"19px" }} ></small>
                        <a style={{ color: "white",fontSize:"12px",marginLeft:"8px",textDecoration:"none" }} >12,456 fans</a>
                    </a>
                    <a href="#" className="icon" style={{ backgroundColor: "rgb(26, 183, 234)", padding: "0.7rem 1.9rem" }}>
                        <small class="fa-solid fa-v" style={{ color: "white",fontSize:"19px" }} ></small>
                        <a style={{ color: "white",fontSize:"12px",marginLeft:"8px",textDecoration:"none" }} >12,456 fans</a>
                    </a>
                </div>

            </div>
        </div>
    )
}

export default FlickrPhoto;
