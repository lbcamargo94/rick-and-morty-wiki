import React from 'react';
import icon from '../assets/icons/icons8-rick-sanchez.svg';
import '../styles/Loading.css';
import '../styles/App.css';

export default function Loading() {
  return (
    <div className='d-flex flex-row justify-content-center align-items-center vw-100 vh-100'>
      <img className='spinner-icon' src={icon} alt='icons8-rick-sanchez.svg' />
      <h1 className='d-flex fadeOut align-items-center d-flex m-0 mx-3'>
        Loading
        <p className='bounce one d-flex fs-1'>.</p>
        <p className='bounce two d-flex fs-1'>.</p>
        <p className='bounce three d-flex fs-1'>.</p>
      </h1>
    </div>
  );
}
