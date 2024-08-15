import React from 'react'
import flexibility from '../assets/flexibility.png'
import transferance from '../assets/transferance.png'
import secure from '../assets/secure-xenergy.png'

const Whyus = () => {
  return (
    <>
    <div className="why-us bg-global py-lg-5 py-3" id='xenergy_sec'>
        <div className="container">
            <div className='text-center py-4'>
                <h2 className='pb-2'>Why Xenergy Sunrise?</h2>
                <h5 className=''>We’ve worked with over 400 companies to build blockchain solutions for their <br /> business, and we are still growing.</h5>
            </div>
            <div className="row">
            <div className="col-lg-5 d-flex flex-column">
                <div className="card p-4 flex-grow-1">
                <h3>Introduction</h3>    
                <p>The global energy market is rapidly evolving, with a significant shift towards renewable energy sources. However, the solar energy sector faces challenges such as high initial costs, inefficient energy distribution, and lack of transparency. XEnergy Sunrise aims to address these issues by leveraging blockchain technology.</p>
                {/* <ul>
                    <li>Blockchain solutions for their business.</li>
                    <li>Crypto space with its remarkable journey</li>
                    <li>Stay tuned to blockchain news</li>
                </ul> */}
                <div className="text-center">
                    <img src={flexibility} alt="flexibility-img" />
                </div>
                </div>
            </div>
            <div className="col-lg-7 d-flex flex-column">
                <div className="card d-flex flex-lg-row p-4 align-items-center flex-grow-1" >
                <div className='why-side-cards'>
                    <h3>Problem Statement</h3>
                    <p>Despite the growing adoption of solar energy, there are several barriers to its widespread use. These include high installation costs, complex regulatory frameworks, and inefficient energy trading mechanisms. These challenges hinder the scalability and efficiency of solar PV systems.</p>
                    {/* <p>We’ve worked with over 400 companies.</p> */}
                </div>
                <div className="text-center">
                    <img src={transferance} className="w-100" alt="transferance-img" />
                </div>
                </div>
                <div className="card d-flex flex-lg-row p-4 align-items-center flex-grow-1 mt-3">
                <div className='why-side-cards'>
                    <h3>Solution: XEnergy Sunrise</h3>
                    <p>XEnergy Sunrise provides a decentralized platform for solar energy transactions, making it easier and more transparent for consumers and businesses to trade and utilize solar power. By using blockchain technology, we ensure secure and efficient transactions, reducing the costs and complexities associated with solar energy adoption.</p>
                    {/* <p>We’ve worked with over 400 companies.</p> */}
                </div>
                <div className="text-center">
                    <img src={secure} className="w-100" alt="secure-xenergy-img" />
                </div>
                </div>
            </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Whyus;