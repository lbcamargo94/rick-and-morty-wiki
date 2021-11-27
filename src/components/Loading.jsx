import React from 'react';
import icon from '../icons/icons8-rick-sanchez.svg';
import '../styles/Loading.css'

export default function Loading() {
  return (
    <div className="d-flex flex-row">
      <img className="spinner-icon" src={ icon } alt="icons8-rick-sanchez.svg" />
      <h1 className="fadeOut d-flex">
        Loading
        <h1 className="bounce one">.</h1>
        <h1 className="bounce two">.</h1>
        <h1 className="bounce three">.</h1>
      </h1>
    </div>
  );
}