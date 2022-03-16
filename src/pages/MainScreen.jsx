import React from 'react';
import Header from '../components/Header';
import MainCarousel from '../components/MainCarousel';

import '../styles/App.css';

export default function MainScreen(){
  return (
    <div
      className="vh-100 w-100 d-flex flex-column justify-content-center
      align-items-start"
    >
      <Header />
      <div
        className="align-items-center bg-success d-flex flex-column
        justify-content-center h-100 w-100"
      >
        <h1 className="d-flex fadeOut align-items-center
        m-0 mx-3 homePageTitle text-white h-25">
          <p className="bounce one d-flex homePageTitle fs-1 mx-1">
            RICK
          </p>
          <p className="bounce two d-flex homePageTitle fs-1 mx-1">
            AND
          </p>
          <p className="bounce three d-flex homePageTitle fs-1 mx-1">
            MORTY
          </p>
          <p className="bounce four d-flex homePageTitle fs-1 mx-1">
            WIKI
          </p>
        </h1>
        <MainCarousel />
      </div>
    </div>
  );
}
