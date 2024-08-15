import React from 'react'
import { ecosystemCoins } from '../constants'
import { backgroundStyle } from '../constants'

const Ecosystem = () => {
  return (
    <>
        <div className="ecosysem-sec py-5" style={backgroundStyle}>
            <div className="container">
                <div className='text-center py-4'>
                    <h3 className='pb-2 text-light'>XEnergy Sunrise is poised to revolutionize the solar energy market by integrating blockchain technology, promoting transparency, and incentivizing clean energy use. Join us in our mission to create a sustainable future.</h3>
                </div>
                <div className="row">
                {ecosystemCoins.map((ecosystem , index) => (
                    <div className="col-lg-3 col-md-6" key={index}>
                        <div className="card px-4 pt-5 pb-4 text-center rounded-4">
                            <div>
                                <img src={ecosystem.image} alt={ecosystem.image} />
                            </div>
                            <a href="#"><h4 className='mt-5 px-2 py-3 rounded-3 mb-0'>{ecosystem.btnText}</h4></a>

                        </div>
                    </div>
                ))}
            </div>
            </div>
        </div>
    </>
  )
}

export default Ecosystem