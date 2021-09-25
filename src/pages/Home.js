import React from 'react'
import{Link} from "react-router-dom"
import BannerImage from '../assets/su.jpg'
import "../styles/Home.css";

function Home() {
    return (
        <div className ="home" style={{ backgroundImage: `url(${BannerImage})` }}>
          <div className="headerContainer">
              <h1>Yuki's Sushi</h1>
              <p>No.1 sushi restaurant in Toronto</p>
              <Link to="/menu">
              <button>ORDER NOW</button>
              </Link>
          </div>
        </div>
    )
}

export default Home
