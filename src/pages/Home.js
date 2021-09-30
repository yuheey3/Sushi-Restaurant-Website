import React from 'react'
import { Link } from "react-router-dom"
import BannerImage from '../assets/su.jpg'
import "../styles/Home.css";

function Home() {
    return (
        <div>
            <div className="home" style={{ backgroundImage: `url(${BannerImage})` }}>
                <div className="headerContainer">
                    <h1>Yuki's Sushi</h1>
                    <p>No.1 sushi restaurant in Toronto</p>
                    <Link to="/menu">
                        <button>ORDER NOW</button>
                    </Link>
                </div>
            </div>
            <div className="homeInfo">
                <div className="leftSide">
                    <h3> Dine-In</h3>
                    <p>We are elated to announce that we are now accepting reservations for both indoor & outdoor dine-in services. Our hours are as follows:</p>
                    <p>Wednesday, Thursday & Sunday: 12 – 9:30 PM</p>
                    <p>Friday & Saturday: 12 – 10 PM</p>
                </div>
                <div className="rightSide">
                    <h3> Delivery</h3>
                    <p>We are elated to announce that we are now accepting reservations for both indoor & outdoor dine-in services. Our hours are as follows:</p>
                    <p>Wednesday, Thursday & Sunday: 12 – 9:30 PM</p>
                    <p>Friday & Saturday: 12 – 10 PM</p>
                </div>
            </div>
        </div>




    );
}

export default Home;
