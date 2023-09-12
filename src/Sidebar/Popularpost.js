import React, { useState, useEffect } from 'react';
import './Popularpost.css';
import './Sidebar.css';
import trending from './trending.json'
import Trending from './Trending'
import { useParams } from "react-router";
import axios from "axios";
import { Link } from "react-router-dom";
function Popularpost() {
  const { id } = useParams();

  const [breakingNews, setBreakingNews] = useState();
  const fetchBreakingNews = async () => {
    try {
      const response = await axios.get(
        `http://174.138.101.222:8080/${id}/getBreakingNews`
      );
      // console.log(response.data.data, "breaking");
      setBreakingNews(response.data.data);
    } catch (error) {
      console.log(error);
    }
  };
  console.log('aaa', breakingNews)

  useEffect(() => {
    fetchBreakingNews();
  }, []);
  
  function formatDate(inputDate) {
    // Step 1: Parse the input string into a JavaScript Date object
    const dateObj = new Date(inputDate);

    // Step 2: Extract day, month, and year from the Date object
    const day = dateObj.getUTCDate();
    const month = dateObj.toLocaleString("default", { month: "long" });
    const year = dateObj.getUTCFullYear();

    // Step 3: Format the values into "day month year" format
    const formattedDate = `${day} ${month} ${year}`;
    return formattedDate;
  }

  return (
    // <div className="box">
    //   <h2 className='title'>Trending</h2>
    //   {
    //     trending.map((element, index) => {
    //       return (
    //         <Trending
    //           key={index}
    //           catgroius={element.Catgroius}
    //           heading={element.Heading}
    //           date={element.Date}
    //           img={element.Poster}
    //         />
    //       )
    //     })
    //   }
    // </div>
    <div className="pb-3">
      <div className="bg-light py-2 px-4 mb-3">
        <h3 className="m-0">Trending</h3>
      </div>
      {breakingNews &&
        breakingNews.map((news, index) => {
          return (
            <div key={index} className="d-flex mb-3">
              <img
                src={
                  news.image
                    ? `http://174.138.101.222:8080${news.image}`
                    : `https://www.newsclick.in/sites/default/files/2018-09/xfakenews_0.jpg.pagespeed.ic_.232PSP6q2x_0.jpg`
                }
                style={{
                  width: 100,
                  height: 100,
                  objectFit: "fill",
                }}
              />
              <div
                className="w-100 d-flex flex-column justify-content-center bg-light px-3"
                style={{ height: 100 }}
              >
                <div className="mb-1" style={{ fontSize: 13 }}>
                  <p
                    className="mb-0"
                    style={{ display: "inline" }}
                    href=""
                  >
                    {news.category}
                  </p>
                  <span className="px-1">/</span>
                  <span>{formatDate(news.updatedAt)}</span>
                </div>
                <Link
                  to={`/${id}/DetailedNews/${news._id}`}
                  className="h6 m-0"
                >
                  {news.title}
                </Link>
              </div>
            </div>
          );
        })}
    </div>
  )
}

export default Popularpost;