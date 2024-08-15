import React from 'react';
import { Tilt } from 'react-tilt';
import { participateData } from '../constants';

const Participate = () => {
  return (
    <div className="bg-global py-lg-5 py-3 participation-sec" id='technical_sec'>
      <div className="container">
        <div className='text-center py-4'>
          <h2 className='pb-2'>Technical Architecture</h2>
          <h5>Our token, XEnergy Sunrise, is built on the Ethereum blockchain, utilizing smart contracts to facilitate secure and transparent energy transactions</h5>
        </div>
        <div className="row">
          {participateData.map((participate, index) => (
            <div className="col-lg-4 d-flex align-items-stretch" key={index}>
              <Tilt
                options={{
                  max: 55, 
                  scale: 1.05, 
                  speed: 900, 
                  glare: true,
                  'max-glare': 0.9 
                }}
                className="card px-4 py-5 text-center rounded-4 w-100"
              >
                <div>
                  <img src={participate.image} alt={participate.image} />
                </div>
                <h2 className='py-3'>{participate.subHead}</h2>
                <p>{participate.description}</p>
                <p>{participate.description2}</p>
                <p>{participate.description3}</p>
              </Tilt>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Participate;
