import React from 'react';
import icon from '../icons/icons8-rick-sanchez.svg';
import '../styles/Loading.css';
import '../styles/App.css';

export default function Loading() {
  return (
    <div className="d-flex flex-row justify-content-center align-items-center vw-100 vh-100">
      <img className="spinner-icon"
        src={ icon }
        alt="icons8-rick-sanchez.svg"
      />
      <h1 className="d-flex fadeOut align-items-center d-flex m-0 mx-3">
        Loading
        <h1 className="bounce one d-flex">.</h1>
        <h1 className="bounce two d-flex">.</h1>
        <h1 className="bounce three d-flex">.</h1>
      </h1>
    </div>
  );
}