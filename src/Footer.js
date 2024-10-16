import React from 'react'
import { FaTelegram } from "react-icons/fa6";
import { FaInstagramSquare } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaFacebookSquare } from "react-icons/fa";
import { FaDiscord } from "react-icons/fa6";
const Footer = () => {
  return (
    <div className='footer-bg footer-align'>
        <div>
        <h1 className='roadmap-heading'>EthAi</h1>
        <ul className='footer-list'>
           <li className='footer-icons'><FaTelegram />
           </li>
           <li className='footer-icons'><FaInstagramSquare />
           </li>
           <li className='footer-icons'><FaSquareXTwitter />
           </li>
           <li className='footer-icons'><FaFacebookSquare />
           </li>
           <li className='footer-icons'><FaDiscord/></li>
        </ul>
        </div>
        <div>
        <h1 className='footer-heading'>"Designed for traders of today, just like you"</h1>
        <input className='footer-input' type = 'text' placeholder='Whats your work Email?'/>
        <button className='footer-button'>Get Stared</button>
        </div>
    </div>
  )
}

export default Footer