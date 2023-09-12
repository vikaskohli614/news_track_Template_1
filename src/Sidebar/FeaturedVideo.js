import './Sidebar.css';
import Myimage from '../Images/AdIMG.jpg';
import React, { useEffect, useState } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { useNavigate, useParams } from "react-router";
import axios from "axios";

function FeaturedVideo({ agencyDetails, breakingNews, page_name }) {
  const navigate = useNavigate();
  const { id } = useParams();
  const [ad, setAd] = useState();

  const fetchAd = async () => {
    try {
      const response = await axios.get(`http://174.138.101.222:8080/${id}/${page_name}/Below_Breaking_News/get-Advertisement`)
      // console.log(response.data.data[0])
      setAd(response.data.data[0])
    } catch (error) {
      console.log(error)
    }
  }
  useEffect(() => {
    fetchAd();
  }, [id, page_name])



  return (
    <div className="box">
      <h2 className='title'>Advertiment</h2>
      <div className="video"> {
        ad?.script.length > 0 && <p className="mb-0" style={{ border: '1px solid black', width: '100%', height: '100px', overflow: 'hidden' }}>{ad?.script}</p>
      }
        {
          ad?.text.length > 0 && <p className="mb-0" style={{ border: '1px solid black', width: '100%', height: '100px', overflow: 'hidden' }}>{ad?.text}</p>
        }
        {
          ad?.image.length > 0 && <img style={{ width: '100%', height: '100%' }} src={`http://174.138.101.222:8080${ad?.image}`} />
        } </div>
    </div>

  )
}

export default FeaturedVideo;


