import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'

const Footer = () => {
    return (
        <div className="footer" id='footer'>
            <div className="footer-content">
                <div className="footer-left">
                    <img src={assets.logo3} alt="" className='logo'/>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque earum aspernatur dolorum nihil accusantium, adipisci ea exercitationem molestias commodi impedit accusamus quas sunt praesentium, repudiandae, sint expedita dignissimos vitae at.</p>
                    <div className="footer-social-icons">
                        <img src={assets.facebook_icon} alt="" />
                        <img src={assets.linkedin_icon} alt="" />
                        <img src={assets.twitter_icon} alt="" />
                    </div>
                </div>
                <div className="footer-center">
                    <h2>COMPANY</h2>
                    <ul>
                        <li>Home</li>
                        <li>About us</li>
                        <li>Delivery</li>
                        <li>Privacy policy</li>
                    </ul>
                </div>
                <div className="footer-right">
                    <h2>Get In Touch</h2>
                    <ul>
                        <li>+91-70486-30197</li>
                        <li>contact@bigbite.com</li>
                    </ul>
                </div>
            </div>
            <hr />
            <div className="footer-copyright">Copyright 2025 © BigBite.com - All Right Reserved.</div>
        </div>
    )
}

export default Footer