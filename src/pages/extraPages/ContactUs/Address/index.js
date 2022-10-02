import React from 'react';
import {HiOutlineLocationMarker} from 'react-icons/hi';
import {FiMail, FiPhone} from 'react-icons/fi';
import './index.style.less';

const Address = () => {
  return (
    <div className='contact-address'>
      <div className='contact-address-item'>
        <div className='avatar-icon'>
          <HiOutlineLocationMarker />
        </div>
        <p>
          5505 Blue Lagoon Dr. <br /> Miami, FL 33126
        </p>
      </div>
      <div className='contact-address-item'>
        <div className='avatar-icon'>
          <FiPhone />
        </div>
        <p>(800) 532-6993</p>
      </div>
      <div className='contact-address-item'>
        <div className='avatar-icon'>
          <FiMail />
        </div>
        <p>support@lennar.com</p>
      </div>
    </div>
  );
};

export default Address;
