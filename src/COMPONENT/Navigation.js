// import React from 'react';
import './Navigation.css';
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";



function Navigation() {
  const agencyDetails = useSelector((state) => {
    return state.User;
  });

  const [categories, setCategory] = useState();
  const getCategories = async () => {
    try {
      const response = await axios.get(
        "http://174.138.101.222:8080/getmastercategories"
      );
      // console.log(response.data.data, "categories");
      setCategory(response.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getCategories();
  }, []);

  return (
    // <div className='Categories-Block'>
    //  <ul className="Categories">
    //     <li className='Categories-li'><a className='Categories-a ' href="/"> Home</a></li>
    //     <li className='Categories-li'><a className='Categories-a ' href="/"> Single News</a></li>
    //     <li className='Categories-li'><a className='Categories-a ' href="/"> Categories</a></li>
    //     <li className='Categories-li'><a className='Categories-a ' href="/"> Contact</a></li>
    //   </ul>
    // </div>
    <div className="container-fluid p-0 mb-3">
      <nav className="navbar navbar-expand-lg bg-light navbar-light py-2 py-lg-0 px-lg-5 px-sm-1">
        <a href="" className="navbar-brand d-block d-lg-none">
          <h1 className="m-0 display-5 ">
            <span className="text-danger">
              {agencyDetails.publication_name}
            </span>
          </h1>
        </a>
        <button
          type="button"
          className="navbar-toggler"
          data-toggle="collapse"
          data-target="#navbarCollapse"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div
          className="collapse navbar-collapse justify-content-between px-0 px-lg-3"
          id="navbarCollapse"
        >
          <div className="navbar-nav mr-auto py-0">
            <Link
              to={`/${agencyDetails._id}`}
              className="nav-item nav-link active"
            >
              Home
            </Link>
            {/* <a href="category.html" className="nav-item nav-link">
              Categories
            </a> */}
            <a href="single.html" className="nav-item nav-link">
              Single News
            </a>
            <div className="nav-item dropdown">
              <a
                href="#"
                className="nav-link dropdown-toggle"
                data-bs-toggle="dropdown"
              >
                Categories
              </a>
              <div className="dropdown-menu rounded-0 m-0">
                {categories &&
                  categories.map((item, index) => {
                    return (
                      <Link
                        to={`/${agencyDetails._id}/Category/${item.categories_Name_Url}`}
                        state={agencyDetails}
                        key={index}
                        className="dropdown-item"
                      >
                        {item.categories_Name_English}
                      </Link>
                    );
                  })}
              </div>
            </div>

            <a href="contact.html" className="nav-item nav-link">
              Contact
            </a>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Navigation;