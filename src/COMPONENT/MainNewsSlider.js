import React from 'react'
import MainStyle from '../Template/MainStyle'
import Sidebar from '../Sidebar/Sidebar'
import Article from '../Template/Article'

function MainNewsSlider({ agencyDetails, breakingNews, page_name }) {
  return (
    <div>
        <MainStyle page_name={'Home_Page'} agencyDetails={agencyDetails}breakingNews={breakingNews} />
        <Sidebar page_name={'Home_Page'} agencyDetails={agencyDetails}breakingNews={breakingNews}/>
        <Article page_name={'Home_Page'} agencyDetails={agencyDetails}breakingNews={breakingNews}/>
    </div>
  )
}

export default MainNewsSlider