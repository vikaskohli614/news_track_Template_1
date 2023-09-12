import React from 'react';
import './MoreArticle.css';

function MoreArticle(props) {
    return (
            <div className="post">
                <div className="details">
                    <p className="l">
                        <span className="category">
                            <a className='l-a' href="/">{props.title}</a>
                        </span> 
                        </p>
                </div>

                <div className="thumb">
                    <a href="/">
                        <img className='thumb-img' src={props.img} alt="" />
                    </a>
                </div>


                <h2 className='article-h2'>
                    <a href="/">{props.heading}</a>
                </h2>

 
                <p className='post-p'>{props.date}</p>
            </div>





    )
}

export default MoreArticle;
