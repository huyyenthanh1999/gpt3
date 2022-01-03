import React from 'react'
import './footer.scss'

import logo from '../../assets/logo.svg'

const Footer = () => {
    return (
        <div className="gpt3__footer section__padding">
            <div className="gpt3__footer-head">
                <h1 className="gradient__text">
                Do you want to step in to the future before others
                </h1>
                <button type='button'>Request Early Access</button>
            </div>
            <div className="gpt3__footer-body">
                <div className="gpt3__footer-body_item">
                    <img src={logo} alt="logo" />
                    <p>Crechterwoord K12 182 DK Alknjkcb, All Rights Reserved</p>
                </div>
                <div className="gpt3__footer-body_item">
                    <h3>Links</h3>
                    <p><a href="">Overons</a></p>
                    <p><a href="">Social Media</a></p>
                    <p><a href="">Counters</a></p>
                    <p><a href="">Contact</a></p>
                </div>
                <div className="gpt3__footer-body_item">
                    <h3>Company</h3>
                    <p><a href="">Terms & Conditions</a></p>
                    <p><a href="">Privacy Policy</a></p>
                    <p><a href="">Contact</a></p>
                </div>
                <div className="gpt3__footer-body_item">
                    <h3>Get in touch</h3>
                    <p><a href="">Crechterwoord K12 182 DK Alknjkcb</a></p>
                    <p><a href="">085-132567</a></p>
                    <p><a href="">info@payme.net</a></p>
                </div>
            </div>
            <div className="gpt3__footer-bottom">
                <p>© 2021 GPT-3. All rights reserved.</p>
            </div>
        </div>
    )
}

export default Footer
