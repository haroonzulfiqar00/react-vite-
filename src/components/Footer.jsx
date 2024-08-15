import React from 'react'
import fb from '../assets/facebook.png'
import twitter from '../assets/twitter.png'
import insta from '../assets/social.png'
import linkedin from '../assets/linkedin.png'

const Footer = () => {
  return (
    <>
        <footer className='bg-global' >
            <div className="container">
                <div className='d-flex justify-content-between py-2'>
                    <div className='d-flex gap-3'>
                        <a href="#"><img className='w-100' src={fb} alt="facebook" /></a>
                        <a href="#"><img className='w-100' src={twitter} alt="twitter" /></a>
                        <a href="#"> <img className='w-100' src={insta} alt="instagram" /></a>
                        <a href="#"> <img  className='w-100'src={linkedin} alt="linkedin" /></a>
                    </div>
                    <div className='d-flex gap-3'>
                        <p>Buy</p>
                        <p>Earn</p>
                        <p>Game</p>
                    </div>
                </div>
                <hr className='m-0' />
                <div className="d-flex flex-wrap justify-content-around justify-content-lg-between py-3">
                    <p className='text-white'>Copyright © 2024 Xenergy Sunrise. All rights reserved.</p>
                    <div className='d-flex gap-3'>
                        <a href='#'>Job & Career</a>
                        <a href='#'>Terms & Condition</a>
                        <a href='#'>Help Center</a>
                    </div>
                </div>
            </div>
        </footer>
    </>
  )
}

export default Footer