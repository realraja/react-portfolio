import React from 'react'
import { AiFillGithub, AiFillInstagram, AiFillYoutube, AiOutlineArrowUp } from 'react-icons/ai'

const Footer = () => {
  return (
    <footer id='footer'>
      <div>
        <img src={'sk'} alt="rajesh" />

        <h2>Rajesh Kumar</h2>
        <p>Only Hardwork is not way of succses you also need of smartwork.</p>
      </div>

      <aside>
        <h2>Social Media</h2>

        <article>
            <a href="https://youtube.com" target='blank'>
                <AiFillYoutube />                
            </a>
            <a href="https://instagram.com" target='blank'>
                <AiFillInstagram />                
            </a>
            <a href="https://github.com" target='blank'>
                <AiFillGithub />                
            </a>
        </article>
      </aside>

        <a href="#home">
            <AiOutlineArrowUp />
        </a>
    </footer>
  )
}

export default Footer
