import React, { useEffect, useState } from 'react';
import './Sidebar.css';
import axios from 'axios';
import { Link } from 'react-router-dom';

function Sidebar({agencyDetails, breakingNews, page_name}) {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        getCategories();
    }, []);

    const getCategories = async () => {
        try {
            const response = await axios.get(
                'http://174.138.101.222:8080/getmastercategories'
            );
            setCategories(response.data.data);
        } catch (error) {
            console.log(error);
        }
    };

    // Function to split the categories into pairs
    const splitCategoriesIntoPairs = (categories) => {
        const pairs = [];
        for (let i = 0; i < categories.length; i += 2) {
            if (i + 1 < categories.length) {
                pairs.push([categories[i], categories[i + 1]]);
            } else {
                pairs.push([categories[i]]);
            }
        }
        return pairs;
    };

    return (
        <div className="sidebar">
            <div className="box">
                <h2 className="title">Categories</h2>
                <div className="sponsors">
                    {splitCategoriesIntoPairs(categories).map((pair, index) => (
                        <div key={index} className="displayinline">
                            {pair.map((item, itemIndex) => (
                                <div key={itemIndex} className="categories-item">
                                    <a className='categories-item-a' href="/">{item.categories_Name_Hindi}</a>
                                </div>
                            ))}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Sidebar;
