import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import './MainStyle.css';
// import Myimages from '../Images/mainImage.jpg'

function MainStyle({ agencyDetails, breakingNews, page_name }) {
    console.log(breakingNews)
    return (
        <div className='Content'>
            <div className='featured'>
                <h2 className='title'>Featured News</h2>
                <div className="Main-image">
                    <div style={{ maxHeight: '400px' }}>
                        <Carousel
                            infiniteLoop
                            showThumbs={false}
                            showStatus={false}
                            autoPlay={true}
                            showIndicators={false}
                            showArrows={true}
                            emulateTouch={true}
                        >
                            {breakingNews.length &&
                                breakingNews.map((news) => {
                                    return (
                                        <div
                                            key={news._id}
                                            className="w-100 d-block"

                                        // onClick={() => {
                                        //     navigate(
                                        //         `/${agencyDetails._id}/DetailedNews/${news._id}`,
                                        //         {
                                        //             state: {
                                        //                 item: news,
                                        //                 agencyDetails: agencyDetails,
                                        //             },
                                        //         }
                                        //     );
                                        // }}
                                        >
                                            <img
                                                src={

                                                    news.image
                                                        ? `http://174.138.101.222:8080${news.image}`
                                                        : `https://www.newsclick.in/sites/default/files/2018-09/xfakenews_0.jpg.pagespeed.ic_.232PSP6q2x_0.jpg`
                                                }
                                                alt="..."
                                                height={'300px'}
                                            />
                                            <div style={{ width: '100%', height: '100px' }} >
                                                <h5>{news.title}</h5>
                                                <p>{news.short_details}</p>
                                            </div>
                                        </div>
                                    );
                                })}
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MainStyle;
