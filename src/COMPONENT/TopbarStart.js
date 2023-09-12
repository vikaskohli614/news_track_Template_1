import './TopbarStart.css';
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router";
import { addUser } from "../redux/slices/UserSlice";
import { memo } from "react";
function TopbarStart({ page_name }) {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [ad, setAd] = useState();

  const fetchAd = async () => {
    try {
      const response = await axios.get(`http://174.138.101.222:8080/${id}/${page_name}/Topbar/get-Advertisement`)
      // console.log(response.data.data[0])
      setAd(response.data.data[0])
    } catch (error) {
      console.log(error)
    }
  }
  useEffect(() => {
    fetchAd();
  }, [id, page_name])

  const agencyDetails = useSelector((state) => {
    return state.User;
  });

  const fetchData = async () => {
    try {
      const response = await axios.get(
        `http://174.138.101.222:8080/${id}/get-publication-details`
      );
      dispatch(addUser(response.data.data[0]));
    } catch (error) {
      console.log(error);
    }
  };
  if (!agencyDetails._id) {
    fetchData();
  }

  return (

    <div className="container-fluid">
      <div
        onClick={() => navigate(`/${id}`)}
        className="first">
        <img
          src={`http://174.138.101.222:8080${agencyDetails.logo_small}`}
          alt=""
          width={"100%"}
          height={"100px"}
        />
      </div>
      <div className="second">
        {/* <img
          src={`http://174.138.101.222:8080/image/image_1692960033080.jpg`}
          alt=""
          width={"100%"}
          height={"100px"}
        /> */}
        {
          ad?.script.length > 0 && <p className="mb-0" style={{ border: '1px solid black', width: '100%', height: '100px', overflow: 'hidden' }}>{ad?.script}</p>
        }
        {
          ad?.text.length > 0 && <p className="mb-0" style={{ border: '1px solid black', width: '100%', height: '100px', overflow: 'hidden' }}>{ad?.text}</p>
        }
        {
          ad?.image.length > 0 && <img style={{ width: '100%', height: '100px' }} src={`http://174.138.101.222:8080${ad?.image}`} />
        }
      </div>


    </div>
  );
};

export default memo(TopbarStart);

