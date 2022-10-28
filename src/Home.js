import React from 'react'
import img2 from "./img2.svg"
import {Link,Outlet} from 'react-router-dom'

import img3 from "./img3.svg"
import img4 from "./img4.svg"
import img6 from "./img6.svg"
import img7 from "./img7.svg"
import "./index.css"
const Home = () => {
  return (
    <>
     <nav className='nested' >
        <ul>
          <li> <Link to="/about">About</Link>

          </li>
          <li> <Link to="/contact">Contact</Link></li>

        </ul>
      </nav>
      <Outlet />

      <h4 className='home-head'> Click on the user tab to view the list of people who uses our service.</h4>

      <div className='home-img'>
        <div>
          <img className='img1' src={img7} alt="image1" />
          <p> The listed Users of the account can like messages from other user</p>
        </div>

        <div>
          <img className='img1' src={img2} alt="image2" />
          <p> The listed Users of the account can send emails to eachother </p>
        </div>

        <div>
          <img className='img1' src={img3} alt="image3" />
          <p> The listed Users of the account can send emails to eachother </p>
        </div>

        <div>
          <img className='img1' src={img4} alt="image4" />
          <p> Feedback from our users is also required for better services</p>
        </div>

        <div>
          <img className='img1' src={img6} alt="image5" />
          <p> The listed Users can also give a review of the product purchased or services rendered </p>
        </div>

        <div>
          <img className='img1' src={img7} alt="image6" />
          <p> The listed Users of the account can send one another </p>
        </div>

      </div>
     


    </>
  )
}

export default Home